"use client";

type ProjectModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function ProjectModal({
    isOpen,
    onClose,
}: ProjectModalProps) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-3xl rounded-3xl border border-white/10 bg-slate-950 p-6 text-white shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
                >
                    ✕
                </button>

                <div className="mb-6">
                    <h3 className="text-3xl font-bold">Slip-Vision</h3>
                    <p className="mt-2 text-white/65">
                        Automated Payment Verification and Revenue Summary System
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    <div>
                        <h4 className="mb-2 text-lg font-semibold text-white">Overview</h4>
                        <p className="text-sm leading-7 text-white/70">
                            Slip-Vision is a web-based system designed to help stores manage
                            payment slip verification and revenue summaries more efficiently.
                            It reduces manual checking, keeps transaction records organized,
                            and makes it easier to review daily or monthly income.
                        </p>
                    </div>

                    <div>
                        <h4 className="mb-2 text-lg font-semibold text-white">
                            My Contributions
                        </h4>
                        <ul className="space-y-2 text-sm text-white/70">
                            <li>• Designed the system concept and user workflow</li>
                            <li>• Built the frontend UI with Next.js</li>
                            <li>• Designed database structure and slip records</li>
                            <li>• Integrated OCR-based slip data extraction</li>
                            <li>• Created dashboard and revenue summary views</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-6">
                    <h4 className="mb-3 text-lg font-semibold text-white">
                        Key Features
                    </h4>

                    <div className="flex flex-wrap gap-2">
                        <span className="rounded-md border border-cyan-400/20 bg-cyan-500/20 px-3 py-1 text-xs font-medium text-cyan-300">
                            Upload Slip
                        </span>
                        <span className="rounded-md border border-blue-400/20 bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-300">
                            OCR Extraction
                        </span>
                        <span className="rounded-md border border-indigo-400/20 bg-indigo-500/20 px-3 py-1 text-xs font-medium text-indigo-300">
                            Dashboard
                        </span>
                        <span className="rounded-md border border-purple-400/20 bg-purple-500/20 px-3 py-1 text-xs font-medium text-purple-300">
                            Revenue Summary
                        </span>
                        <span className="rounded-md border border-pink-400/20 bg-pink-500/20 px-3 py-1 text-xs font-medium text-pink-300">
                            Slip History
                        </span>
                        <span className="rounded-md border border-yellow-400/20 bg-yellow-500/20 px-3 py-1 text-xs font-medium text-yellow-300">
                            Bank Detection
                        </span>
                    </div>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <h5 className="mb-2 font-semibold text-white">Tech Stack</h5>
                        <p className="text-sm text-white/70">
                            Next.js, PostgreSQL, OCR, AI Integration, Tailwind CSS
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <h5 className="mb-2 font-semibold text-white">Project Goal</h5>
                        <p className="text-sm text-white/70">
                            Improve business workflow by making payment verification faster,
                            more accurate, and easier to review.
                        </p>
                    </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                    <a
                        href="https://slip-vision.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-500"
                    >
                        Live Demo
                    </a>

                    <button
                        onClick={onClose}
                        className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}