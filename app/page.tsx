import Image from "next/image";
import {
  BadgeCheck,
  Briefcase,
  Building2,
  Cloud,
  Contact,
  Cpu,
  GraduationCap,
  Network,
  Radio,
  Shield,
} from "lucide-react";

const expertise = [
  "HPE Aruba Networking",
  "Switching & Wireless",
  "Cybersecurity",
  "Cloud Solutions",
  "Data Protection",
  "Pre-Sales Consulting",
  "Network Design & Architecture",
  "Wi-Fi 6/6E",
];

const experience = [
  {
    company: "CDW Canada",
    role: "Networking Solutions Specialist",
    period: "Jul 2025 - Present",
  },
  {
    company: "Dell Technologies",
    role: "Engineer 2 Product Technologist",
    period: "Oct 2021 - Oct 2024",
  },
  { company: "Tech Mahindra", role: "Security Analyst", period: "May 2020 - Oct 2021" },
  { company: "Cisco", role: "TAC Engineer", period: "Nov 2018 - May 2020" },
  {
    company: "Hewlett Packard Enterprise",
    role: "Wireless Network Engineer",
    period: "Feb 2017 - Nov 2018",
  },
];

const certifications = [
  "HPE Sales Certified - Compute and Storage Solutions",
  "Specialist - Technology Architect, Data Protection",
  "Microsoft Azure Fundamentals",
  "Dell GenAI Foundations",
  "ITIL V4",
  "Business English Certificate, B1 Level",
];

const projects = [
  "AI-assisted BOM and RFI workflow",
  "HPE Aruba opportunity discovery assistant",
  "Customer-ready network proposal templates",
  "Network solution architecture diagrams",
];

export default function Home() {
  return (
    <main className="bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-16">
        <section className="grid items-center gap-10 rounded-3xl border border-cyan-500/20 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-950/20 backdrop-blur md:grid-cols-2 md:p-12">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1 text-xs uppercase tracking-wider text-cyan-300">
              <Network className="h-4 w-4" /> Enterprise Portfolio
            </p>
            <h1 className="text-3xl font-semibold leading-tight text-white md:text-5xl">Rajesh R G</h1>
            <p className="mt-3 text-lg text-cyan-200">Networking Solutions Specialist | Pre-Sales Engineer</p>
            <p className="mt-6 max-w-xl text-slate-300">
              Solutions Specialist at CDW Canada with 8+ years of experience in enterprise networking, HPE Aruba Networking,
              cybersecurity, cloud solutions, data protection, and consultative pre-sales.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">View Resume</a>
              <a href="#contact" className="rounded-lg border border-slate-600 px-5 py-3 text-sm font-semibold transition hover:border-cyan-400 hover:text-cyan-300">LinkedIn</a>
              <a href="#contact" className="rounded-lg border border-slate-600 px-5 py-3 text-sm font-semibold transition hover:border-cyan-400 hover:text-cyan-300">Contact Me</a>
            </div>
          </div>
          <div className="mx-auto w-full max-w-sm">
            <div className="rounded-2xl border border-cyan-400/30 bg-gradient-to-b from-slate-800 to-slate-900 p-3 shadow-xl">
              <Image
                src="/rajesh-profile.png"
                alt="Rajesh R G"
                width={500}
                height={500}
                priority
                className="h-auto w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </section>

        <section id="about" className="mt-16">
          <h2 className="mb-4 inline-flex items-center gap-2 text-xl font-semibold text-cyan-200"><Cpu className="h-5 w-5" /> About Me</h2>
          <p className="rounded-xl border border-slate-700 bg-slate-900/70 p-6 leading-relaxed text-slate-300">
            I partner with enterprise customers to align network and security outcomes with business priorities. My approach blends deep
            technical insight with consultative engagement to design practical, scalable architectures across wired, wireless, cloud,
            and data protection ecosystems.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 inline-flex items-center gap-2 text-xl font-semibold text-cyan-200"><Radio className="h-5 w-5" /> Core Expertise</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {expertise.map((item) => (
              <div key={item} className="rounded-xl border border-slate-700 bg-slate-900/70 p-4 text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-500/60">{item}</div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 inline-flex items-center gap-2 text-xl font-semibold text-cyan-200"><Briefcase className="h-5 w-5" /> Professional Experience</h2>
          <div className="space-y-4">
            {experience.map((job) => (
              <article key={job.company} className="rounded-xl border border-slate-700 bg-slate-900/70 p-4 text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-500/60">
                <p className="font-semibold text-white">{job.role}</p>
                <p className="mt-1 text-cyan-300">{job.company}</p>
                <p className="mt-1 text-sm text-slate-400">{job.period}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 inline-flex items-center gap-2 text-xl font-semibold text-cyan-200"><BadgeCheck className="h-5 w-5" /> Certifications</h2>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <p key={cert} className="rounded-xl border border-slate-700 bg-slate-900/70 p-4 text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-500/60">{cert}</p>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-4 inline-flex items-center gap-2 text-xl font-semibold text-cyan-200"><Building2 className="h-5 w-5" /> Featured Projects</h2>
            <div className="space-y-3">
              {projects.map((project) => (
                <p key={project} className="rounded-xl border border-slate-700 bg-slate-900/70 p-4 text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-500/60">{project}</p>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mt-12">
          <h2 className="mb-4 inline-flex items-center gap-2 text-xl font-semibold text-cyan-200"><Contact className="h-5 w-5" /> Contact</h2>
          <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-6 leading-relaxed text-slate-300 space-y-3">
            <p>Open to strategic conversations on enterprise networking modernization, cybersecurity readiness, and scalable solution design.</p>
            <p className="inline-flex items-center gap-2 text-cyan-300"><Shield className="h-4 w-4" /> rajesh.r.g@professionalmail.com</p>
            <p className="inline-flex items-center gap-2 text-cyan-300"><Cloud className="h-4 w-4" /> LinkedIn profile available on request</p>
            <p className="text-sm text-slate-400">© {new Date().getFullYear()} Rajesh R G. All rights reserved.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
