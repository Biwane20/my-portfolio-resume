"use client";

type ParkingModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function ParkingModal({
    isOpen,
    onClose,
}: ParkingModalProps) {
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
                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 rounded-full border border-white/10 px-3 py-1 text-sm text-white/70 hover:bg-white/10"
                >
                    ✕
                </button>

                {/* Image */}
                <img
                    src="/images/parking-real.jpg"
                    alt="Parking IoT Prototype"
                    className="mb-6 w-full rounded-xl border border-white/10"
                />

                {/* Title */}
                <h3 className="text-3xl font-bold mb-2">
                    Parking IoT System
                </h3>

                <p className="text-white/60 mb-6">
                    IoT-based parking status detection system (Prototype)
                </p>

                {/* Problem / Solution */}
                <div className="grid gap-6 md:grid-cols-2">
                    <div>
                        <h4 className="font-semibold mb-2 text-lg">Problem</h4>
                        <p className="text-sm text-white/70 leading-7">
                            Drivers waste time searching for parking spaces, causing
                            traffic congestion and frustration. Parking availability is
                            often unknown in real-time.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2 text-lg">Solution</h4>
                        <p className="text-sm text-white/70 leading-7">
                            Developed an IoT-based system using sensors to detect parking
                            availability and display results in real-time via a website.
                        </p>
                    </div>
                </div>

                {/* Features */}
                <div className="mt-6">
                    <h4 className="font-semibold mb-3 text-lg">Key Features</h4>

                    <div className="flex flex-wrap gap-2">
                        <span className="tag">Real-time Status</span>
                        <span className="tag">Infrared Sensor</span>
                        <span className="tag">ESP32</span>
                        <span className="tag">Web Dashboard</span>
                        <span className="tag">Prototype Model</span>
                    </div>
                </div>

                {/* Contributions */}
                <div className="mt-6">
                    <h4 className="font-semibold mb-2 text-lg">
                        My Contributions
                    </h4>

                    <ul className="text-sm text-white/70 space-y-2">
                        <li>• Designed system architecture and workflow</li>
                        <li>• Built physical prototype model</li>
                        <li>• Integrated sensors with ESP32</li>
                        <li>• Developed real-time monitoring website</li>
                        <li>• Tested and optimized system performance</li>
                    </ul>
                </div>

                {/* Footer */}
                <div className="mt-8 flex gap-3">
                    <button
                        onClick={onClose}
                        className="rounded-full border border-white/15 px-5 py-2 text-sm hover:bg-white/10"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}