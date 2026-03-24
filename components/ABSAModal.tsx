"use client";

type ABSAModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function ABSAModal({
    isOpen,
    onClose,
}: ABSAModalProps) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-4xl rounded-3xl border border-white/10 bg-slate-950 p-6 text-white shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
                >
                    ✕
                </button>

                <h3 className="mb-2 text-3xl font-bold">ABSA NLP</h3>
                <p className="mb-6 text-white/65">
                    Aspect-Based Sentiment Analysis for Thai mobile phone shop reviews
                </p>

                <img
                    src="/images/absa-cover.png"
                    alt="ABSA NLP screenshot"
                    className="mb-4 w-full rounded-2xl border border-white/10"
                />

                <div className="grid gap-6 md:grid-cols-2">
                    <div>
                        <h4 className="mb-2 text-lg font-semibold">Problem</h4>
                        <p className="text-sm leading-7 text-white/70">
                            Reviews often contain opinions about multiple aspects such as
                            product quality, price, service, and variety. Normal sentiment
                            analysis cannot separate these details clearly.
                        </p>
                    </div>

                    <div>
                        <h4 className="mb-2 text-lg font-semibold">Solution</h4>
                        <p className="text-sm leading-7 text-white/70">
                            Built an Aspect-Based Sentiment Analysis system that predicts
                            sentiment separately for each aspect in Thai reviews.
                        </p>
                    </div>
                </div>

                <div className="mt-6">
                    <h4 className="mb-3 text-lg font-semibold">My Contributions</h4>
                    <ul className="space-y-2 text-sm text-white/70">
                        <li>• Designed the project concept and aspect categories</li>
                        <li>• Built the NLP model pipeline with WangchanBERTa</li>
                        <li>• Trained and tested the sentiment classification model</li>
                        <li>• Developed the Streamlit interface for demo usage</li>
                        <li>• Evaluated outputs by aspect such as product, price, service, and variety</li>
                    </ul>
                </div>

                <div className="mt-6">
                    <h4 className="mb-3 text-lg font-semibold">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                        <span className="rounded-md border border-pink-400/20 bg-pink-500/20 px-3 py-1 text-xs text-pink-300">
                            NLP
                        </span>
                        <span className="rounded-md border border-yellow-400/20 bg-yellow-500/20 px-3 py-1 text-xs text-yellow-300">
                            PyTorch
                        </span>
                        <span className="rounded-md border border-indigo-400/20 bg-indigo-500/20 px-3 py-1 text-xs text-indigo-300">
                            WangchanBERTa
                        </span>
                        <span className="rounded-md border border-cyan-400/20 bg-cyan-500/20 px-3 py-1 text-xs text-cyan-300">
                            Streamlit
                        </span>
                    </div>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <h5 className="mb-2 font-semibold">Output</h5>
                        <p className="text-sm text-white/70">
                            Predicts sentiment by aspect such as product, price, service, and variety.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <h5 className="mb-2 font-semibold">Demo</h5>
                        <p className="text-sm text-white/70">
                            Interactive web demo built with Streamlit for real-time review analysis.
                        </p>
                    </div>
                </div>

                <div className="mt-8 flex gap-3">
                    <a
                        href="https://absa-mobile-shop-3hn5hx3kcoiasngp5m2m9f.streamlit.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-500"
                    >
                        Live Demo
                    </a>

                    <button
                        onClick={onClose}
                        className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm transition hover:bg-white/10"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}