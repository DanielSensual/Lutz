import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Purchase Complete | LUTs by MediaGeekz",
  description: "Thanks for your purchase. Your LUT pack download details are on the receipt email.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/success",
  },
};

export default function SuccessPage() {
  return (
    <main id="main" className="container-center max-w-3xl px-6 py-24">
      <div className="glass-panel rounded-[var(--radius-lg)] p-10 sm:p-14">
        <span className="section-label">Payment confirmed</span>
        <h1 className="section-title">Thank you for your purchase!</h1>
        <p className="section-desc mt-4">
          Your receipt has been sent to the email you used at checkout. It includes secure download links for your LUT pack.
        </p>

        <div className="mt-10 space-y-6 text-sm text-[var(--muted)]">
          <div>
            <p className="font-semibold text-white">What happens next</p>
            <p className="mt-2">
              If you don&apos;t see the email within a few minutes, check your spam folder. Still missing it? Reach out and we&apos;ll get you sorted.
            </p>
          </div>
          <div>
            <p className="font-semibold text-white">Need help?</p>
            <p className="mt-2">Email support: hello@mediageekz.com</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a href="/" className="btn-primary">
            Back to Packs
          </a>
          <a href="https://mediageekz.com" className="btn-secondary">
            Visit MediaGeekz
          </a>
        </div>
      </div>
    </main>
  );
}
