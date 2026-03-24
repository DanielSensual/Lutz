'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { FFmpeg } from '@ffmpeg/ffmpeg';
import { fetchFile, toBlobURL } from '@ffmpeg/util';

type ProcessingStatus = 'idle' | 'loading-ffmpeg' | 'processing' | 'done' | 'error';

interface LutOption {
    id: string;
    name: string;
    cubeFile: string;
    accentColor: string;
}

const LUT_OPTIONS: LutOption[] = [
    { id: 'punchy', name: 'Mediageekz Punchy', cubeFile: '/luts/mediageekz-punchy.cube', accentColor: '#ff5c2b' },
    { id: 'neutral', name: 'Mediageekz Neutral', cubeFile: '/luts/mediageekz-neutral.cube', accentColor: '#3b82f6' },
];

const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

export function LutPreviewEngine() {
    const [status, setStatus] = useState<ProcessingStatus>('idle');
    const [progress, setProgress] = useState(0);
    const [selectedLut, setSelectedLut] = useState<LutOption>(LUT_OPTIONS[0]);
    const [inputFile, setInputFile] = useState<File | null>(null);
    const [inputUrl, setInputUrl] = useState<string | null>(null);
    const [outputUrl, setOutputUrl] = useState<string | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [isDragOver, setIsDragOver] = useState(false);
    const [ffmpegLoaded, setFfmpegLoaded] = useState(false);
    const ffmpegRef = useRef<FFmpeg | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const progressInterval = useRef<ReturnType<typeof setInterval> | null>(null);

    // Cleanup URLs on unmount
    useEffect(() => {
        return () => {
            if (inputUrl) URL.revokeObjectURL(inputUrl);
            if (outputUrl) URL.revokeObjectURL(outputUrl);
            if (progressInterval.current) clearInterval(progressInterval.current);
        };
    }, [inputUrl, outputUrl]);

    const loadFFmpeg = useCallback(async () => {
        if (ffmpegRef.current && ffmpegLoaded) return ffmpegRef.current;
        
        setStatus('loading-ffmpeg');
        setProgress(0);
        
        const ffmpeg = new FFmpeg();
        
        ffmpeg.on('log', ({ message }) => {
            console.log('[FFmpeg]', message);
        });

        ffmpeg.on('progress', ({ progress: p }) => {
            setProgress(Math.round(p * 100));
        });

        const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd';
        await ffmpeg.load({
            coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
            wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
            // Single-threaded mode: no SharedArrayBuffer/COEP headers needed
            // This avoids blocking cross-origin resources (Streamable embeds)
        });

        ffmpegRef.current = ffmpeg;
        setFfmpegLoaded(true);
        return ffmpeg;
    }, [ffmpegLoaded]);

    const handleFile = useCallback((file: File) => {
        setErrorMsg(null);
        setOutputUrl(null);

        if (!file.type.startsWith('video/')) {
            setErrorMsg('Please upload a video file (MP4, MOV, WebM).');
            return;
        }

        if (file.size > MAX_FILE_SIZE) {
            setErrorMsg('File too large. Please upload a video under 50MB for browser processing.');
            return;
        }

        // Revoke old URL
        if (inputUrl) URL.revokeObjectURL(inputUrl);
        
        const url = URL.createObjectURL(file);
        setInputFile(file);
        setInputUrl(url);
        setStatus('idle');
    }, [inputUrl]);

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(false);
        const file = e.dataTransfer.files[0];
        if (file) handleFile(file);
    }, [handleFile]);

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(true);
    }, []);

    const handleDragLeave = useCallback(() => setIsDragOver(false), []);

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) handleFile(file);
    }, [handleFile]);

    const processVideo = useCallback(async () => {
        if (!inputFile) return;

        setStatus('processing');
        setProgress(0);
        setErrorMsg(null);
        if (outputUrl) URL.revokeObjectURL(outputUrl);
        setOutputUrl(null);

        try {
            const ffmpeg = await loadFFmpeg();

            // Write the input video to WASM filesystem
            const inputData = await fetchFile(inputFile);
            await ffmpeg.writeFile('input.mp4', inputData);

            // Fetch and write the .cube LUT file
            const lutResponse = await fetch(selectedLut.cubeFile);
            const lutData = new Uint8Array(await lutResponse.arrayBuffer());
            await ffmpeg.writeFile('lut.cube', lutData);

            setStatus('processing');

            // Apply LUT using lut3d filter
            await ffmpeg.exec([
                '-i', 'input.mp4',
                '-vf', 'lut3d=lut.cube',
                '-c:a', 'copy',
                '-preset', 'ultrafast',
                '-crf', '23',
                'output.mp4'
            ]);

            // Read the output
            const outputData = await ffmpeg.readFile('output.mp4');
            const blob = new Blob([new Uint8Array(outputData as Uint8Array)], { type: 'video/mp4' });
            const url = URL.createObjectURL(blob);

            setOutputUrl(url);
            setStatus('done');
            setProgress(100);

            // Cleanup WASM filesystem
            await ffmpeg.deleteFile('input.mp4');
            await ffmpeg.deleteFile('lut.cube');
            await ffmpeg.deleteFile('output.mp4');
        } catch (err) {
            console.error('FFmpeg error:', err);
            setErrorMsg('Processing failed. Try a shorter clip or different format (MP4 recommended).');
            setStatus('error');
        }
    }, [inputFile, selectedLut, loadFFmpeg, outputUrl]);

    const reset = useCallback(() => {
        if (inputUrl) URL.revokeObjectURL(inputUrl);
        if (outputUrl) URL.revokeObjectURL(outputUrl);
        setInputFile(null);
        setInputUrl(null);
        setOutputUrl(null);
        setStatus('idle');
        setProgress(0);
        setErrorMsg(null);
        if (inputRef.current) inputRef.current.value = '';
    }, [inputUrl, outputUrl]);

    const downloadOutput = useCallback(() => {
        if (!outputUrl || !inputFile) return;
        const a = document.createElement('a');
        a.href = outputUrl;
        const ext = inputFile.name.split('.').pop() || 'mp4';
        a.download = `${inputFile.name.replace(`.${ext}`, '')}_${selectedLut.id}.mp4`;
        a.click();
    }, [outputUrl, inputFile, selectedLut]);

    return (
        <div className="lut-engine">
            {/* LUT Selector */}
            <div className="lut-engine__selector">
                {LUT_OPTIONS.map((lut) => (
                    <button
                        key={lut.id}
                        type="button"
                        className={`lut-engine__lut-btn ${selectedLut.id === lut.id ? 'active' : ''}`}
                        onClick={() => { setSelectedLut(lut); setOutputUrl(null); setStatus('idle'); }}
                        style={{ '--lut-accent': lut.accentColor } as React.CSSProperties}
                    >
                        <span
                            className="lut-engine__lut-dot"
                            style={{ background: lut.accentColor }}
                        />
                        {lut.name}
                    </button>
                ))}
            </div>

            {/* Upload / Preview Area */}
            {!inputFile ? (
                <div
                    className={`lut-engine__dropzone ${isDragOver ? 'drag-over' : ''}`}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onClick={() => inputRef.current?.click()}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && inputRef.current?.click()}
                >
                    <input
                        ref={inputRef}
                        type="file"
                        accept="video/*"
                        onChange={handleInputChange}
                        className="sr-only"
                        id="lut-engine-upload"
                    />
                    <div className="lut-engine__dropzone-content">
                        <div className="lut-engine__upload-icon">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="17 8 12 3 7 8" />
                                <line x1="12" y1="3" x2="12" y2="15" />
                            </svg>
                        </div>
                        <p className="lut-engine__dropzone-title">
                            Drop your footage here
                        </p>
                        <p className="lut-engine__dropzone-sub">
                            or click to browse · MP4, MOV, WebM · Max 50MB
                        </p>
                    </div>
                </div>
            ) : (
                <div className="lut-engine__preview-area">
                    {/* Video Comparison */}
                    <div className="lut-engine__videos">
                        <div className="lut-engine__video-panel">
                            <span className="lut-engine__video-label">Original</span>
                            <video
                                src={inputUrl!}
                                controls
                                playsInline
                                muted
                                className="lut-engine__video"
                            />
                        </div>
                        <div className="lut-engine__video-panel">
                            <span
                                className="lut-engine__video-label lut-engine__video-label--graded"
                                style={{ '--lut-accent': selectedLut.accentColor } as React.CSSProperties}
                            >
                                {selectedLut.name}
                            </span>
                            {outputUrl ? (
                                <video
                                    src={outputUrl}
                                    controls
                                    playsInline
                                    muted
                                    className="lut-engine__video"
                                />
                            ) : (
                                <div className="lut-engine__video-placeholder">
                                    {status === 'processing' || status === 'loading-ffmpeg' ? (
                                        <div className="lut-engine__processing">
                                            <div className="lut-engine__spinner" />
                                            <p className="lut-engine__processing-text">
                                                {status === 'loading-ffmpeg'
                                                    ? 'Loading FFmpeg engine...'
                                                    : `Applying ${selectedLut.name}...`
                                                }
                                            </p>
                                            <div className="lut-engine__progress-bar">
                                                <div
                                                    className="lut-engine__progress-fill"
                                                    style={{
                                                        width: `${progress}%`,
                                                        background: selectedLut.accentColor,
                                                    }}
                                                />
                                            </div>
                                            <span className="lut-engine__progress-pct">{progress}%</span>
                                        </div>
                                    ) : (
                                        <p className="lut-engine__placeholder-text">
                                            Press &ldquo;Apply LUT&rdquo; to preview
                                        </p>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Error Message */}
                    {errorMsg && (
                        <div className="lut-engine__error">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="15" y1="9" x2="9" y2="15" />
                                <line x1="9" y1="9" x2="15" y2="15" />
                            </svg>
                            {errorMsg}
                        </div>
                    )}

                    {/* Actions */}
                    <div className="lut-engine__actions">
                        <button type="button" className="btn-secondary" onClick={reset}>
                            ← New Clip
                        </button>

                        {status === 'done' && outputUrl ? (
                            <button type="button" className="btn-primary" onClick={downloadOutput}>
                                ↓ Download Graded
                            </button>
                        ) : (
                            <button
                                type="button"
                                className="btn-primary"
                                onClick={processVideo}
                                disabled={status === 'processing' || status === 'loading-ffmpeg'}
                            >
                                {status === 'processing' || status === 'loading-ffmpeg'
                                    ? 'Processing...'
                                    : `Apply ${selectedLut.name}`
                                }
                            </button>
                        )}
                    </div>
                </div>
            )}

            {/* Info Banner */}
            <div className="lut-engine__info">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                </svg>
                <span>100% client-side — your footage never leaves your device. Powered by FFmpeg WebAssembly.</span>
            </div>
        </div>
    );
}
