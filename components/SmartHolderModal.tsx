"use client";

type SmartHolderModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function SmartHolderModal({
    isOpen,
    onClose,
}: SmartHolderModalProps) {
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

                <h3 className="mb-2 text-3xl font-bold">Smart Mobile Holder</h3>
                <p className="mb-6 text-white/65">
                    Intelligent phone holder with face tracking and automatic rotation
                </p>

                <img
                    src="/images/smart-holder-real.jpg"
                    alt="Smart Mobile Holder prototype"
                    className="mb-4 w-full rounded-2xl border border-white/10"
                />

                <video
                    src="/videos/smart-holder-demo.mp4"
                    controls
                    className="mb-6 w-full rounded-2xl border border-white/10"
                />

                <div className="grid gap-6 md:grid-cols-2">
                    <div>
                        <h4 className="mb-2 text-lg font-semibold">Problem</h4>
                        <p className="text-sm leading-7 text-white/70">
                            Users often watch content or video call while moving, but normal
                            phone stands cannot follow their position automatically.
                        </p>
                    </div>

                    <div>
                        <h4 className="mb-2 text-lg font-semibold">Solution</h4>
                        <p className="text-sm leading-7 text-white/70">
                            This project uses face detection and motor control to rotate the
                            phone holder toward the user automatically in real time.
                        </p>
                    </div>
                </div>

                <div className="mt-6">
                    <h4 className="mb-3 text-lg font-semibold">My Contributions</h4>
                    <ul className="space-y-2 text-sm text-white/70">
                        <li>• Designed the concept and workflow of the system</li>
                        <li>• Built the prototype body and integrated components</li>
                        <li>• Connected Arduino UNO with ESP32-CAM</li>
                        <li>• Programmed face tracking and servo motor movement</li>
                        <li>• Tested and improved tracking performance</li>
                    </ul>
                </div>

                <div className="mt-6">
                    <h4 className="mb-3 text-lg font-semibold">Tech Stack / Hardware</h4>
                    <div className="flex flex-wrap gap-2">
                        <span className="rounded-md border border-yellow-400/20 bg-yellow-500/20 px-3 py-1 text-xs text-yellow-300">
                            Arduino UNO
                        </span>
                        <span className="rounded-md border border-green-400/20 bg-green-500/20 px-3 py-1 text-xs text-green-300">
                            ESP32-CAM
                        </span>
                        <span className="rounded-md border border-blue-400/20 bg-blue-500/20 px-3 py-1 text-xs text-blue-300">
                            Servo Motor
                        </span>
                        <span className="rounded-md border border-pink-400/20 bg-pink-500/20 px-3 py-1 text-xs text-pink-300">
                            Face Detection
                        </span>
                        <span className="rounded-md border border-purple-400/20 bg-purple-500/20 px-3 py-1 text-xs text-purple-300">
                            3D Printed Base
                        </span>
                    </div>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <h5 className="mb-2 font-semibold">Key Result</h5>
                        <p className="text-sm text-white/70">
                            Detects face accurately at about 50 cm and rotates to follow with
                            small error.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <h5 className="mb-2 font-semibold">System Runtime</h5>
                        <p className="text-sm text-white/70">
                            Supports continuous operation for around 4–6 hours using a
                            powerbank.
                        </p>
                    </div>
                </div>

                <div className="mt-8 flex gap-3">
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