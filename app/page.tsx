"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ExternalLink,
  FolderOpen,
  Github,
  Mail,
  Sparkles,
} from "lucide-react";
import ProjectSlider from "../components/ProjectSlider";
import ProjectModal from "../components/ProjectModal";
import ParkingModal from "../components/ParkingModal";
import SmartHolderModal from "../components/SmartHolderModal";
import ABSAModal from "../components/ABSAModal";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
};

function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const setCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const createParticles = () => {
      const count = Math.min(140, Math.floor((width * height) / 13000));
      const particles: Particle[] = [];

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          size: Math.random() * 2 + 1,
        });
      }

      particlesRef.current = particles;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const particles = particlesRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x <= 0 || p.x >= width) p.vx *= -1;
        if (p.y <= 0 || p.y >= height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(96, 165, 250, 0.9)";
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.22 - distance / 700})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    setCanvasSize();
    createParticles();
    draw();

    const handleResize = () => {
      setCanvasSize();
      createParticles();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />;
}

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-200 backdrop-blur-sm">
      <Sparkles className="h-4 w-4" />
      <span>{children}</span>
    </div>
  );
}

function TechTag({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`rounded-full border px-3 py-1 text-xs font-medium ${className}`}
    >
      {children}
    </span>
  );
}

function ProjectCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      whileHover={{ y: -6 }}
      className={`group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition duration-300 hover:border-blue-400/30 hover:bg-white/[0.06] hover:shadow-[0_18px_60px_rgba(37,99,235,0.18)] ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-12 -left-8 h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

export default function Home() {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isParkingOpen, setIsParkingOpen] = useState(false);
  const [isHolderOpen, setIsHolderOpen] = useState(false);
  const [isABSAModalOpen, setIsABSAModalOpen] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.22),transparent_32%),radial-gradient(circle_at_bottom,rgba(30,64,175,0.18),transparent_28%),linear-gradient(to_bottom,#000000,#020617,#000000)]" />

      {/* Particles */}
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>

      {/* Animated glow */}
      <motion.div
        className="absolute left-1/2 top-[-180px] z-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px]"
        animate={{
          x: [0, 40, -30, 0],
          y: [0, 20, 40, 0],
          scale: [1, 1.08, 0.96, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-[-140px] right-[8%] z-0 h-[360px] w-[360px] rounded-full bg-cyan-400/10 blur-[120px]"
        animate={{
          x: [0, -30, 20, 0],
          y: [0, -20, 20, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Hero */}
      <section className="relative z-10 flex min-h-[92vh] items-center justify-center px-6 text-center md:px-8">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <SectionBadge>Portfolio • AI • Backend • IoT</SectionBadge>
          </motion.div>

          <motion.h1
            className="text-5xl font-bold leading-tight tracking-tight md:text-7xl"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <span className="text-white">Alisa Chuangubon</span>
            <br />
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Building real-world AI & Backend systems
            </span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-3xl text-lg text-slate-300/80 md:text-2xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
          >
            I design and develop practical software solutions using AI, APIs,
            databases, and IoT.
          </motion.p>

          <motion.p
            className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-slate-400/70 md:text-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Computer Engineering Student focused on solving real business
            problems through full-stack development.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45 }}
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="https://github.com/Biwane20"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="relative z-10 mx-auto max-w-6xl px-6 py-20 md:px-8"
      >
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionBadge>Selected Work</SectionBadge>
            <h2 className="text-3xl font-bold text-white md:text-5xl">
              Featured Projects
            </h2>
            <p className="mt-3 max-w-2xl text-white/60">
              A collection of projects in AI, backend development, NLP, and IoT
              that reflect both technical implementation and practical problem
              solving.
            </p>
          </div>

          <a
            href="https://github.com/Biwane20"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-blue-300 transition hover:text-blue-200"
          >
            More on GitHub
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Slip-Vision */}
          <ProjectCard className="md:col-span-2">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/20">
                <ProjectSlider />
              </div>

              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-300">
                  <FolderOpen className="h-3.5 w-3.5" />
                  Featured Project
                </div>

                <h3 className="mb-3 text-3xl font-semibold text-white">
                  Slip-Vision
                </h3>

                <p className="mb-5 text-white/70">
                  Automated payment verification and revenue summary system for
                  improving business workflow, slip validation, and record
                  management for small businesses.
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  <TechTag className="border-cyan-400/20 bg-cyan-500/20 text-cyan-300">
                    Next.js
                  </TechTag>
                  <TechTag className="border-indigo-400/20 bg-indigo-500/20 text-indigo-300">
                    PostgreSQL
                  </TechTag>
                  <TechTag className="border-yellow-400/20 bg-yellow-500/20 text-yellow-300">
                    OCR
                  </TechTag>
                  <TechTag className="border-pink-400/20 bg-pink-500/20 text-pink-300">
                    AI
                  </TechTag>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://slip-vision.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2.5 text-sm text-white transition hover:bg-blue-500"
                  >
                    Live Demo
                    <ExternalLink className="h-4 w-4" />
                  </a>

                  <button
                    onClick={() => setIsProjectModalOpen(true)}
                    className="rounded-full border border-white/15 px-4 py-2.5 text-sm transition hover:bg-white/10"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </ProjectCard>

          {/* Parking */}
          <ProjectCard>
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <img
                src="/images/parking-poster-1.png"
                alt="Parking IoT System"
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <h3 className="mb-3 mt-5 text-2xl font-semibold text-white">
              Parking IoT System
            </h3>

            <p className="mb-4 text-white/70">
              IoT-based parking status detection system with sensors, real-time
              website monitoring, and prototype implementation.
            </p>

            <div className="mb-5 flex flex-wrap gap-2">
              <TechTag className="border-green-400/20 bg-green-500/20 text-green-300">
                ESP32
              </TechTag>
              <TechTag className="border-blue-400/20 bg-blue-500/20 text-blue-300">
                Infrared Sensor
              </TechTag>
              <TechTag className="border-purple-400/20 bg-purple-500/20 text-purple-300">
                Real-time Website
              </TechTag>
              <TechTag className="border-cyan-400/20 bg-cyan-500/20 text-cyan-300">
                Prototype
              </TechTag>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="/images/parking-poster-1.png"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-blue-600 px-4 py-2.5 text-sm text-white transition hover:bg-blue-500"
              >
                View Poster
              </a>

              <button
                onClick={() => setIsParkingOpen(true)}
                className="rounded-full border border-white/15 px-4 py-2.5 text-sm transition hover:bg-white/10"
              >
                View Details
              </button>
            </div>
          </ProjectCard>

          {/* ABSA */}
          <ProjectCard>
            <img
              src="/images/absa-cover.png"
              alt="ABSA NLP"
              className="h-56 w-full rounded-2xl border border-white/10 object-cover"
            />

            <div className="mt-5">
              <h3 className="mb-2 text-2xl font-semibold text-white">
                ABSA NLP
              </h3>

              <p className="mb-4 text-white/70">
                Aspect-Based Sentiment Analysis for mobile phone shop reviews
                using Thai language NLP.
              </p>

              <div className="mb-5 flex flex-wrap gap-2">
                <TechTag className="border-pink-400/20 bg-pink-500/20 text-pink-300">
                  NLP
                </TechTag>
                <TechTag className="border-yellow-400/20 bg-yellow-500/20 text-yellow-300">
                  PyTorch
                </TechTag>
                <TechTag className="border-indigo-400/20 bg-indigo-500/20 text-indigo-300">
                  WangchanBERTa
                </TechTag>
                <TechTag className="border-cyan-400/20 bg-cyan-500/20 text-cyan-300">
                  Streamlit
                </TechTag>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://absa-mobile-shop-3hn5hx3kcoiasngp5m2m9f.streamlit.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2.5 text-sm text-white transition hover:bg-blue-500"
                >
                  Live Demo
                  <ExternalLink className="h-4 w-4" />
                </a>

                <button
                  onClick={() => setIsABSAModalOpen(true)}
                  className="rounded-full border border-white/15 px-4 py-2.5 text-sm transition hover:bg-white/10"
                >
                  View Details
                </button>
              </div>
            </div>
          </ProjectCard>

          {/* Smart Holder */}
          <ProjectCard>
            <img
              src="/images/smart-holder-real.jpg"
              alt="Smart Mobile Holder"
              className="h-56 w-full rounded-2xl border border-white/10 object-cover"
            />

            <div className="mt-5">
              <h3 className="mb-2 text-2xl font-semibold text-white">
                Smart Mobile Holder
              </h3>

              <p className="mb-4 text-white/70">
                Smart phone holder that detects face position and automatically
                rotates to follow the user in real time.
              </p>

              <div className="mb-5 flex flex-wrap gap-2">
                <TechTag className="border-yellow-400/20 bg-yellow-500/20 text-yellow-300">
                  Arduino UNO
                </TechTag>
                <TechTag className="border-green-400/20 bg-green-500/20 text-green-300">
                  ESP32-CAM
                </TechTag>
                <TechTag className="border-blue-400/20 bg-blue-500/20 text-blue-300">
                  Servo Motor
                </TechTag>
                <TechTag className="border-pink-400/20 bg-pink-500/20 text-pink-300">
                  Face Tracking
                </TechTag>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setIsHolderOpen(true)}
                  className="rounded-full border border-white/15 px-4 py-2.5 text-sm transition hover:bg-white/10"
                >
                  View Details
                </button>
              </div>
            </div>
          </ProjectCard>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="relative z-10 mx-auto max-w-6xl px-6 py-20 md:px-8"
      >
        <SectionBadge>Core Stack</SectionBadge>
        <h2 className="mb-10 text-3xl font-bold text-white md:text-4xl">
          Technical Skills
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <h3 className="mb-3 text-xl font-semibold">Programming</h3>
            <p className="text-white/70">Python, C</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <h3 className="mb-3 text-xl font-semibold">Frontend</h3>
            <p className="text-white/70">Next.js, Tailwind CSS</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <h3 className="mb-3 text-xl font-semibold">Backend</h3>
            <p className="text-white/70">REST API, JSON, API Design</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <h3 className="mb-3 text-xl font-semibold">AI / ML</h3>
            <p className="text-white/70">PyTorch, NLP, OCR</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <h3 className="mb-3 text-xl font-semibold">Database</h3>
            <p className="text-white/70">PostgreSQL, Database Design</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <h3 className="mb-3 text-xl font-semibold">IoT & Embedded</h3>
            <p className="text-white/70">Arduino, ESP32, Sensors</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="relative z-10 mx-auto max-w-4xl px-6 py-20 md:px-8"
      >
        <SectionBadge>Who I Am</SectionBadge>
        <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
          About Me
        </h2>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <p className="text-lg leading-8 text-white/75">
            I am a Computer Engineering student who enjoys designing systems,
            building practical applications, and learning through real projects.
            My main interests are backend development, AI, and IoT systems.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative z-10 mx-auto max-w-4xl px-6 py-20 md:px-8"
      >
        <SectionBadge>Get In Touch</SectionBadge>
        <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
          Contact
        </h2>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <div className="space-y-4 text-white/75">
            <p className="inline-flex items-center gap-3">
              <Mail className="h-4 w-4 text-blue-300" />
              biwbew20@gmail.com
            </p>
            <p className="inline-flex items-center gap-3">
              <Github className="h-4 w-4 text-blue-300" />
              github.com/Biwane20
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 px-6 py-8 text-center text-sm text-white/40">
        © 2026 Alisa Chuangubon
      </footer>

      {/* Modal */}
      <ProjectModal
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
      />
      <ParkingModal
        isOpen={isParkingOpen}
        onClose={() => setIsParkingOpen(false)}
      />
      <SmartHolderModal
        isOpen={isHolderOpen}
        onClose={() => setIsHolderOpen(false)}
      />
      <ABSAModal
        isOpen={isABSAModalOpen}
        onClose={() => setIsABSAModalOpen(false)}
      />
    </main>
  );
}