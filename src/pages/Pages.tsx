import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  Check,
  Download as DownloadIcon,
  PlayCircle,
  Search,
  Laptop,
  Shield,
  FolderOpen,
} from "lucide-react";

const PageHeader = ({
  title,
  subtitle,
  badge,
}: {
  title: string;
  subtitle: string;
  badge?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    className="mb-16 md:mb-24"
  >
    {badge && (
      <div className="mb-6 text-[#75C043] font-mono text-sm font-bold uppercase tracking-wider">
        {badge}
      </div>
    )}
    <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight mb-6 text-ugle-slate leading-tight">
      {title}
    </h1>
    <p className="text-xl md:text-2xl text-ugle-gray max-w-3xl leading-relaxed">
      {subtitle}
    </p>
  </motion.div>
);

const Section = ({
  title,
  children,
  delay = 0,
  icon: Icon,
}: {
  title: string;
  children: React.ReactNode;
  delay?: number;
  icon?: any;
}) => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    className="py-12 border-t border-ugle-light/30 relative"
  >
    <div className="flex flex-col md:flex-row gap-8 md:gap-16">
      <div className="md:w-1/3 flex-shrink-0">
        <h2 className="text-2xl font-bold text-ugle-slate flex items-center gap-3">
          {Icon && <Icon className="w-6 h-6 text-[#75C043]" />}
          {title}
        </h2>
      </div>
      <div className="md:w-2/3 space-y-6 text-lg text-ugle-gray leading-relaxed">
        {children}
      </div>
    </div>
  </motion.section>
);

export const HowItWorks = () => (
  <div className="max-w-6xl mx-auto px-6 py-24 pb-32">
    <PageHeader
      title="How Ugle works."
      subtitle="One Click to Connect your archive. Build a local index. Search anything inside. Nothing leaves your device."
    />

    <div className="space-y-4">
      <Section title="01. Connect Your Archive" icon={PlayCircle} delay={0.1}>
        <p>
          Connect to any local folder or online drives like -GDrive, OneDrive,
          any other online cloud storage platform. Ugle accepts MP4, MOV, MKV,
          MP3, WAV, M4A, AAC, FLAC, OGG. No file size limit.
        </p>
        <p>
          Ugle reads from the original location and stores only the index.
          Source files stay exactly where they are. Multiple files queue and
          process in order.
        </p>
      </Section>

      <Section title="02. Ugle indexes it" icon={Laptop} delay={0.1}>
        <p>
          The transcription engine runs entirely on-device. No network
          connection required after installation.
        </p>
        <div className="border border-ugle-light/60 rounded-xl overflow-hidden my-8 shadow-sm">
          <table className="w-full text-left text-sm md:text-base">
            <thead className="bg-[#F8FAF9] border-b border-ugle-light/60">
              <tr>
                <th className="py-4 px-6 font-semibold text-ugle-slate w-1/3">
                  Hardware
                </th>
                <th className="py-4 px-6 font-semibold text-ugle-slate">
                  Indexing speed
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ugle-light/40">
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="py-4 px-6 font-medium text-ugle-slate border-l-2 border-transparent">
                  Apple M-series
                </td>
                <td className="py-4 px-6 text-ugle-gray">
                  ~4 min per hour of audio
                </td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="py-4 px-6 font-medium text-ugle-slate border-l-2 border-transparent">
                  Intel processor
                </td>
                <td className="py-4 px-6 text-ugle-gray">
                  ~10 min per hour of audio
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Indexing runs in the background. Ugle notifies you on completion. The
          index stores the full transcript, speaker timestamps, and a semantic
          embedding per passage. Index size: 2–5% of source file size.
        </p>
      </Section>

      <Section title="03. Search anything" icon={Search} delay={0.1}>
        <p>
          Open search with{" "}
          <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded text-ugle-slate">
            Cmd+K
          </span>{" "}
          or{" "}
          <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded text-ugle-slate">
            Ctrl+K
          </span>
          . Type a word, phrase, or concept. Ugle returns every matching moment
          across all indexed files, ranked by relevance, with timestamp and a
          three-line excerpt.
        </p>
        <p>
          Results appear in under 30ms. Semantic search is on by default —
          searching <em>'housing policy'</em> finds passages about{" "}
          <em>rent control</em> or <em>zoning</em>, even if those exact words
          were never spoken.
        </p>
        <p>
          Click any result to jump to that moment in the transcript view. Play
          the clip, copy the transcript, or export the segment.
        </p>
      </Section>

      <Section title="Clip extraction" icon={DownloadIcon} delay={0.1}>
        <ul className="space-y-4 list-none p-0 text-ugle-gray">
          {[
            "Highlight any transcript passage.",
            "Preview the corresponding video or audio segment.",
            "Set in/out points via timeline or transcript selection.",
            "Export as MP4, MP3, or WAV to a folder of your choice.",
          ].map((item, i) => (
            <li key={i} className="flex flex-row items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#75C043] flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 p-4 bg-[#F8FAF9] border-l-4 border-[#75C043] rounded-r-lg text-sm text-ugle-gray font-medium italic">
          Audio-only exports do not re-encode — Ugle extracts directly, making
          export near-instant.
        </div>
      </Section>

      <Section title="The Library" icon={FolderOpen} delay={0.1}>
        <ul className="space-y-4 list-none p-0 text-ugle-gray">
          {[
            "Search across your entire Library from a single query.",
            "Filter by date range, file type, or language.",
            "Add tags and notes for editorial organisation.",
            "Portable — move the folder to an external drive. Ugle reconnects automatically.",
          ].map((item, i) => (
            <li key={i} className="flex flex-row items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#75C043] flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Technical specifications" delay={0.1}>
        <div className="border border-ugle-light/60 rounded-xl overflow-hidden shadow-sm not-prose">
          <table className="w-full text-left bg-[#F8FAF9]">
            <tbody className="divide-y divide-ugle-light/40">
              <tr className="bg-white/50">
                <td className="py-4 px-6 font-bold text-sm w-1/3 text-ugle-slate uppercase tracking-wider">
                  Spec
                </td>
                <td className="py-4 px-6 font-bold text-sm text-ugle-slate uppercase tracking-wider">
                  Detail
                </td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="py-4 px-6 font-medium text-ugle-slate">
                  Input formats
                </td>
                <td className="py-4 px-6 text-ugle-gray">
                  MP4, MOV, MKV, MP3, WAV, M4A, AAC, FLAC, OGG
                </td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="py-4 px-6 font-medium text-ugle-slate">
                  Transcription
                </td>
                <td className="py-4 px-6 text-ugle-gray">
                  On-device Whisper-based model. No network required after
                  install.
                </td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="py-4 px-6 font-medium text-ugle-slate">
                  Accuracy
                </td>
                <td className="py-4 px-6 text-ugle-gray">
                  95% average. Higher on clean single-speaker recordings.
                </td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="py-4 px-6 font-medium text-ugle-slate">
                  Languages
                </td>
                <td className="py-4 px-6 text-ugle-gray">
                  90+ including English, Spanish, French, German, Arabic, Hindi,
                  Mandarin, Japanese, Portuguese.
                </td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="py-4 px-6 font-medium text-ugle-slate">
                  Search
                </td>
                <td className="py-4 px-6 text-ugle-gray">
                  Keyword + semantic. Both run simultaneously.
                </td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="py-4 px-6 font-medium text-ugle-slate">
                  Search latency
                </td>
                <td className="py-4 px-6 text-ugle-gray">
                  &lt; 30ms from keystroke to results.
                </td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="py-4 px-6 font-medium text-ugle-slate">
                  Index storage
                </td>
                <td className="py-4 px-6 text-ugle-gray">
                  2–5% of source file size. Local only.
                </td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors border-l-4 border-[#75C043]">
                <td className="py-4 px-6 font-medium text-ugle-slate">OS</td>
                <td className="py-4 px-6 text-ugle-gray">
                  macOS 12+. Windows 10 64-bit+.
                </td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="py-4 px-6 font-medium text-ugle-slate">
                  Minimum hardware
                </td>
                <td className="py-4 px-6 text-ugle-gray">
                  8GB RAM. 4GB available storage.
                </td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="py-4 px-6 font-medium text-ugle-slate">
                  Internet
                </td>
                <td className="py-4 px-6 text-ugle-gray">
                  Initial download and software updates only.
                </td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="py-4 px-6 font-medium text-ugle-slate">
                  Data sent to Ugle
                </td>
                <td className="py-4 px-6 text-ugle-gray">None.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>
    </div>
  </div>
);

export const Download = () => (
  <div className="bg-[#1C1C1C] min-h-screen text-white pt-24 pb-32">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white leading-tight">
          Download Ugle.
        </h1>
        <p className="text-2xl text-white/70 mb-16 font-light">
          Free. No account. No upload.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 mb-24">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-3 border-b-2 border-white/20 hover:border-white/60 text-white font-bold py-4 px-6 text-lg transition-colors"
          >
            [ Get Early access for macOS &darr; ]
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-3 border-b-2 border-white/20 hover:border-white/60 text-white font-bold py-4 px-6 text-lg transition-colors"
          >
            [ Get Early access for Windows &darr; ]
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="space-y-16 mt-16 border-t border-white/10 pt-16 flex flex-col md:flex-row gap-12"
      >
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4 text-white">
            System requirements
          </h2>
          <p className="text-sm font-mono text-white/50 mb-8">
            macOS 12+ · Windows 10 64-bit · v1.0.4 · June 2026
          </p>

          <div className="border border-white/10 rounded-xl overflow-hidden bg-white/5 backdrop-blur">
            <table className="w-full text-left">
              <tbody className="divide-y divide-white/5">
                <tr className="bg-black/20">
                  <td className="py-4 px-6 font-semibold text-sm w-1/3 text-white/90">
                    Requirement
                  </td>
                  <td className="py-4 px-6 font-semibold text-sm text-white/90">
                    Specification
                  </td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6 font-semibold text-sm text-white/90">
                    OS
                  </td>
                  <td className="py-4 px-6 text-white/70">
                    macOS 12 Monterey+ / Windows 10 64-bit+
                  </td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6 font-semibold text-sm text-white/90">
                    RAM
                  </td>
                  <td className="py-4 px-6 text-white/70">
                    8GB minimum. 16GB recommended for large archives.
                  </td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6 font-semibold text-sm text-white/90">
                    Storage
                  </td>
                  <td className="py-4 px-6 text-white/70">
                    4GB minimum for application and index.
                  </td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6 font-semibold text-sm text-white/90">
                    Processor
                  </td>
                  <td className="py-4 px-6 text-white/70">
                    Any modern CPU. Apple M-series provides fastest indexing.
                  </td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6 font-semibold text-sm text-white/90">
                    Internet
                  </td>
                  <td className="py-4 px-6 text-white/70">
                    Initial download and updates only.
                  </td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6 font-semibold text-sm text-white/90">
                    Account
                  </td>
                  <td className="py-4 px-6 text-white/70">None required.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-2xl font-bold mb-8 text-white">After download</h2>
          <ol className="space-y-6 list-decimal pl-5 text-white/90 font-medium marker:text-[#75C043] marker:font-bold">
            <li className="pl-4 pb-4 border-b border-white/10">
              Download the installer (~280MB).
            </li>
            <li className="pl-4 pb-4 border-b border-white/10">
              Run the installer. No admin privileges required on macOS. Standard
              UAC on Windows.
            </li>
            <li className="pl-4 pb-4 border-b border-white/10">
              Launch Ugle. No sign-up screen. Interface opens immediately.
            </li>
            <li className="pl-4 pb-4 border-b border-white/10">
              Import your first file. Drag and drop, or File &gt; Import.
            </li>
            <li className="pl-4 pb-4 border-b border-white/10">
              Indexing begins in the background. Notification on completion.
            </li>
            <li className="pl-4">Search. Type anything. Find the moment.</li>
          </ol>
        </div>
      </motion.div>
    </div>
  </div>
);

export const GetEarlyAccess = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="bg-[#F8FAF9] min-h-screen pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <div className="font-mono text-[13px] tracking-[0.14em] uppercase text-[#5DA233] font-medium mb-3">
            Get Early Access
          </div>
          <h1 className="text-[40px] md:text-[62px] font-extrabold tracking-[-0.02em] leading-[1.04] text-ugle-slate mb-4">
            Start searching your archive.
          </h1>
          <p className="text-[18px] md:text-[21px] text-ugle-gray leading-[1.55]">
            Join the early access program. We are rolling out invites weekly to
            ensure stability and performance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="bg-white rounded-[1rem] p-8 md:p-12 border border-ugle-light/60 shadow-sm"
        >
          {!isSubmitted ? (
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                setIsSubmitted(true);
              }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-[15px] font-bold text-ugle-slate">
                    First name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-[#F8FAF9] border border-ugle-light/60 rounded-[10px] px-4 py-3 text-[15px] text-ugle-slate focus:outline-none focus:border-[#75C043] focus:ring-1 focus:ring-[#75C043] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[15px] font-bold text-ugle-slate">
                    Last name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-[#F8FAF9] border border-ugle-light/60 rounded-[10px] px-4 py-3 text-[15px] text-ugle-slate focus:outline-none focus:border-[#75C043] focus:ring-1 focus:ring-[#75C043] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-[15px] font-bold text-ugle-slate">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-[#F8FAF9] border border-ugle-light/60 rounded-[10px] px-4 py-3 text-[15px] text-ugle-slate focus:outline-none focus:border-[#75C043] focus:ring-1 focus:ring-[#75C043] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-[15px] font-bold text-ugle-slate">
                  Contact number
                </label>
                <input
                  type="tel"
                  required
                  className="w-full bg-[#F8FAF9] border border-ugle-light/60 rounded-[10px] px-4 py-3 text-[15px] text-ugle-slate focus:outline-none focus:border-[#75C043] focus:ring-1 focus:ring-[#75C043] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-[15px] font-bold text-ugle-slate">
                  Primary OS
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <label className="flex items-center gap-3 p-4 border border-ugle-light/60 rounded-[10px] cursor-pointer hover:border-[#75C043] transition-colors">
                    <input
                      type="radio"
                      name="os"
                      required
                      className="text-[#75C043] focus:ring-[#75C043]"
                    />
                    <span className="text-[15px] font-medium text-ugle-slate">
                      macOS
                    </span>
                  </label>
                  <label className="flex items-center gap-3 p-4 border border-ugle-light/60 rounded-[10px] cursor-pointer hover:border-[#75C043] transition-colors">
                    <input
                      type="radio"
                      name="os"
                      required
                      className="text-[#75C043] focus:ring-[#75C043]"
                    />
                    <span className="text-[15px] font-medium text-ugle-slate">
                      Windows
                    </span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-ugle-slate text-white font-bold py-4 px-6 rounded-[10px] transition-colors hover:bg-[#222] text-[15px] mt-4"
              >
                Request Access
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="py-12 text-center"
            >
              <div className="w-16 h-16 bg-[#75C043]/10 text-[#75C043] rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8" strokeWidth={3} />
              </div>
              <h2 className="text-2xl font-bold text-ugle-slate mb-3">
                Request Received
              </h2>
              <p className="text-ugle-gray text-lg max-w-md mx-auto">
                Thank you for your interest. We'll be in touch soon with your
                early access invitation.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export const RequestDemo = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="bg-[#1C1C1C] min-h-screen pt-24 pb-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white"
          >
            <div className="font-mono text-[13px] tracking-[0.14em] uppercase text-[#75C043] font-medium mb-3">
              Enterprise
            </div>
            <h1 className="text-[40px] md:text-[56px] font-extrabold tracking-[-0.02em] leading-[1.04] mb-6">
              Let's talk workflow.
            </h1>
            <p className="text-[18px] md:text-[21px] text-white/70 leading-[1.55] mb-12">
              See how Ugle transforms archive search for editorial teams,
              newsrooms, and production companies.
            </p>

            <div className="space-y-8">
              {[
                {
                  title: "Custom Deployment",
                  desc: "MDM packaging, air-gapped support, and priority IT onboarding.",
                },
                {
                  title: "Team Licencing",
                  desc: "Centralized administration and consolidated billing.",
                },
                {
                  title: "Workflow Integration",
                  desc: "Best practices for deploying local-first search across an established editorial team.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <Check
                    className="w-6 h-6 text-[#75C043] flex-shrink-0 mt-1"
                    strokeWidth={2.4}
                  />
                  <div>
                    <h3 className="font-bold text-[17px] mb-1">{item.title}</h3>
                    <p className="text-[15px] text-white/60 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#2A2A2A] rounded-[1rem] p-8 md:p-10 border border-white/10 shadow-2xl relative"
          >
            {!isSubmitted ? (
              <form
                className="space-y-5 text-white"
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsSubmitted(true);
                }}
              >
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="block text-[14px] font-semibold text-white/80">
                      First name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-[#1C1C1C] border border-white/10 rounded-[8px] px-4 py-3 text-[15px] focus:outline-none focus:border-[#75C043] transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[14px] font-semibold text-white/80">
                      Last name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-[#1C1C1C] border border-white/10 rounded-[8px] px-4 py-3 text-[15px] focus:outline-none focus:border-[#75C043] transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-[14px] font-semibold text-white/80">
                    Work email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-[#1C1C1C] border border-white/10 rounded-[8px] px-4 py-3 text-[15px] focus:outline-none focus:border-[#75C043] transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-[14px] font-semibold text-white/80">
                    Company name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-[#1C1C1C] border border-white/10 rounded-[8px] px-4 py-3 text-[15px] focus:outline-none focus:border-[#75C043] transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-[14px] font-semibold text-white/80">
                    Team size
                  </label>
                  <select
                    required
                    className="w-full bg-[#1C1C1C] border border-white/10 rounded-[8px] px-4 py-3 text-[15px] focus:outline-none focus:border-[#75C043] transition-all appearance-none text-white"
                  >
                    <option value="">Select team size...</option>
                    <option>1-5 editors</option>
                    <option>6-20 editors</option>
                    <option>21-50 editors</option>
                    <option>50+ editors</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-[14px] font-semibold text-white/80">
                    How are you currently handling archive search?
                  </label>
                  <textarea
                    rows={3}
                    required
                    className="w-full bg-[#1C1C1C] border border-white/10 rounded-[8px] px-4 py-3 text-[15px] focus:outline-none focus:border-[#75C043] transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#75C043] text-[#102206] font-bold py-4 px-6 rounded-[8px] transition-colors hover:bg-[#5DA233] hover:text-white text-[15px] mt-4"
                >
                  Request Demo
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="py-12 text-center text-white flex flex-col items-center justify-center h-full min-h-[400px]"
              >
                <div className="w-16 h-16 bg-[#75C043]/20 text-[#75C043] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8" strokeWidth={3} />
                </div>
                <h2 className="text-2xl font-bold mb-3">Request Received</h2>
                <p className="text-white/60 text-lg max-w-sm mx-auto">
                  Thank you for your interest. Our enterprise team will be in
                  touch shortly to schedule your demo.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// ── Pricing card components ───────────────────────────────────────────────────

function PriceCard({
  title,
  badge,
  dark = false,
  description,
  features,
  priceLabel,
  priceMain,
  vatNote,
  primaryBtn,
}: {
  title: string;
  badge?: string;
  dark?: boolean;
  description: string;
  features: string[];
  priceLabel: string;
  priceMain: string;
  vatNote?: string;
  primaryBtn: string;
}) {
  const bg = dark
    ? "bg-ugle-slate border-ugle-slate"
    : "bg-white border-ugle-light/60";
  const titleCol = dark ? "text-white" : "text-ugle-slate";
  const descCol = dark ? "text-white/55" : "text-ugle-gray";
  const dividerCol = dark ? "border-white/10" : "border-ugle-light/60";
  const priceLabelCol = dark ? "text-white/50" : "text-ugle-gray";
  const priceMainCol = dark ? "text-white" : "text-ugle-slate";
  const vatCol = dark ? "text-white/35" : "text-ugle-gray/55";
  const checkCol = dark ? "text-[#75C043]" : "text-[#5DA233]";
  const featureTextCol = dark ? "text-white/70" : "text-ugle-slate";

  return (
    <div
      className={`rounded-2xl border shadow-sm relative flex flex-col ${bg}`}
    >
      {badge && (
        <div className="absolute -top-3.5 left-6">
          <span className="bg-ugle-green text-[#102206] font-bold text-xs px-4 py-1.5 rounded-full tracking-wide whitespace-nowrap shadow">
            {badge}
          </span>
        </div>
      )}

      {/* ── Title + Description ── */}
      <div className={`p-6 pb-5 ${badge ? "pt-8" : ""}`}>
        <h3
          className={`text-[20px] font-extrabold tracking-tight leading-tight mb-2 ${titleCol}`}
        >
          {title}
        </h3>
        <p className={`text-[14px] leading-snug ${descCol}`}>{description}</p>
      </div>

      {/* ── Features ── */}
      <div
        className={`px-6 pb-5 flex-1 space-y-2.5 border-t ${dividerCol} pt-5`}
      >
        {features.map((f, i) => (
          <div
            key={i}
            className={`flex items-start gap-2.5 text-[13.5px] font-medium ${featureTextCol}`}
          >
            <Check
              className={`w-[14px] h-[14px] shrink-0 mt-[3px] ${checkCol}`}
              strokeWidth={2.5}
            />
            <span>{f}</span>
          </div>
        ))}
      </div>

      {/* ── Price row (space-between) ── */}
      <div
        className={`px-6 py-4 border-t ${dividerCol} flex items-center justify-between gap-4`}
      >
        <div
          className={`text-[13px] font-medium leading-snug ${priceLabelCol}`}
        >
          {priceLabel}
        </div>
        <div className="text-right">
          <span className="line-through text-ugle-gray/35">$199</span>
          <div
            className={`text-[32px] font-extrabold tracking-tight leading-none ${priceMainCol}`}
          >
            {priceMain}
          </div>
          {vatNote && (
            <div className={`text-[12px] mt-0.5 ${vatCol}`}>{vatNote}</div>
          )}
        </div>
      </div>

      {/* ── CTA Button ── */}
      <div className={`px-6 pb-6 pt-3`}>
        <button
          className={`w-full py-3 rounded-[10px] font-bold text-[14px] transition-all ${
            dark
              ? "bg-ugle-green text-[#102206] hover:bg-[#5DA233] hover:text-white"
              : "bg-ugle-slate text-white hover:bg-[#222]"
          }`}
        >
          {primaryBtn}
        </button>
      </div>
    </div>
  );
}

function SoloCard({
  isAnnual,
  soloPrice,
}: {
  isAnnual: boolean;
  soloPrice: { main: string; orig: string; per: string };
}) {
  return (
    <PriceCard
      title="Solo"
      description="Freelance journalists, independent producers, solo editors."
      features={[
        "Up to 2 machines (same user)",
        isAnnual
          ? "12 months of updates. Renew at $99/year."
          : "Updates included while subscribed",
        "Unlimited Library size",
        "90+ languages",
        "Clip export included",
      ]}
      priceLabel={isAnnual ? "per user, per year" : "per user, per month"}
      priceMain={soloPrice.main}
      vatNote="incl. VAT US $15.22"
      primaryBtn="Buy Solo Licence"
    />
  );
}

function LifetimeCard() {
  return (
    <PriceCard
      title="Solo Lifetime Access*"
      badge="We Recommend"
      dark
      description="Believers. Pay once, use forever — no renewal, ever."
      features={[
        "Up to 2 machines (same user)",
        "120 months of updates included",
        "Unlimited Library size",
        "90+ languages",
        "Clip export included",
      ]}
      priceLabel="one-time payment"
      priceMain="$999"
      vatNote="incl. VAT US $15.22"
      primaryBtn="Buy Freedom Licence"
    />
  );
}

function TeamCard({
  isAnnual,
  teamPrice,
}: {
  isAnnual: boolean;
  teamPrice: { main: string; orig: string; per: string };
}) {
  return (
    <PriceCard
      title="Team"
      description="Editorial teams, production companies, newsrooms."
      features={[
        "Per-seat, company licence",
        isAnnual
          ? "Updates included for licence duration"
          : "Updates included while subscribed",
        "Unlimited Library size · 90+ languages",
        "Priority support — 4-hour response SLA",
        "Admin console included",
      ]}
      priceLabel={isAnnual ? "per seat, per year" : "per seat, per month"}
      priceMain={teamPrice.main}
      vatNote="incl. VAT US $15.22"
      primaryBtn="Contact for Team Pricing"
    />
  );
}

// ─────────────────────────────────────────────────────────────────────────────

function NonCommercialPanel() {
  return (
    <div className="max-w-2xl mx-auto mb-32">
      <div className="bg-white border border-ugle-light/60 rounded-2xl shadow-sm overflow-hidden">
        {/* Header band */}
        <div className="bg-ugle-slate px-8 py-7">
          <div className="font-mono text-xs tracking-[0.14em] uppercase text-[#75C043] mb-2">
            Non-commercial licence
          </div>
          <h2 className="text-[26px] font-extrabold text-white tracking-tight leading-tight">
            Using Ugle for personal, non-earning work?
          </h2>
        </div>

        {/* Body */}
        <div className="px-8 py-7 space-y-5">
          <p className="text-[15px] text-ugle-gray leading-relaxed">
            Individuals using eligible Ugle products without earning commercial
            benefits can use Ugle for free.
          </p>

          <div className="space-y-3">
            {[
              "Personal documentary or archival projects",
              "Academic research (non-institutional)",
              "Community journalism — no paid distribution",
              "Creative hobbyists with no commercial output",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 text-[14px] font-medium text-ugle-slate"
              >
                <Check
                  className="w-[14px] h-[14px] shrink-0 mt-[3px] text-[#5DA233]"
                  strokeWidth={2.5}
                />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-ugle-light/60 pt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="text-[13px] text-ugle-gray mb-0.5">Price</div>
              <div className="text-[32px] font-extrabold text-ugle-slate tracking-tight leading-none">
                Free
              </div>
              <div className="text-[12px] text-ugle-gray/55 mt-0.5">
                subject to eligibility review
              </div>
            </div>
            <a
              href="mailto:pricing@ugle.ai"
              className="inline-flex items-center justify-center px-7 py-3 bg-ugle-slate text-white font-bold text-[14px] rounded-[10px] hover:bg-[#222] transition-colors"
            >
              Apply for free access
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function EducationPanel() {
  return (
    <div className="max-w-2xl mx-auto mb-32">
      <div className="bg-white border border-ugle-light/60 rounded-2xl shadow-sm overflow-hidden">
        {/* Header band */}
        <div className="bg-ugle-slate px-8 py-7">
          <div className="font-mono text-xs tracking-[0.14em] uppercase text-[#75C043] mb-2">
            Education licence
          </div>
          <h2 className="text-[26px] font-extrabold text-white tracking-tight leading-tight">
            Students &amp; instructors at accredited institutions
          </h2>
        </div>

        {/* Body */}
        <div className="px-8 py-7 space-y-5">
          <p className="text-[15px] text-ugle-gray leading-relaxed">
            Education licences are free for currently enrolled students and
            teaching staff at accredited academic institutions. Verification and
            approval required.
          </p>

          <div className="space-y-3">
            {[
              "Currently enrolled students",
              "Full-time & part-time instructors / faculty",
              "Journalism schools & media programmes",
              "Accredited universities & colleges",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 text-[14px] font-medium text-ugle-slate"
              >
                <Check
                  className="w-[14px] h-[14px] shrink-0 mt-[3px] text-[#5DA233]"
                  strokeWidth={2.5}
                />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Verification note */}
          <div className="bg-[#F8FAF9] border border-ugle-light/70 rounded-xl px-5 py-4 text-[13px] text-ugle-gray leading-relaxed">
            <span className="font-semibold text-ugle-slate">
              Verification required.
            </span>{" "}
            You'll need to submit proof of enrollment or employment at an
            accredited institution. Approvals are typically processed within 2
            business days.
          </div>

          <div className="border-t border-ugle-light/60 pt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="text-[13px] text-ugle-gray mb-0.5">Price</div>
              <div className="text-[32px] font-extrabold text-ugle-slate tracking-tight leading-none">
                Free
              </div>
              <div className="text-[12px] text-ugle-gray/55 mt-0.5">
                pending verification & approval
              </div>
            </div>
            <a
              href="mailto:education@ugle.ai"
              className="inline-flex items-center justify-center px-7 py-3 bg-ugle-slate text-white font-bold text-[14px] rounded-[10px] hover:bg-[#222] transition-colors"
            >
              Apply for free access
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

export function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "annual">("annual");
  const [category, setCategory] = useState<
    "individuals" | "organisation" | "non-commercial" | "education"
  >("individuals");
  const showBilling = category === "individuals" || category === "organisation";
  const isAnnual = billing === "annual";

  const soloPrice = isAnnual
    ? { main: "$169", orig: "$199", per: "/year" }
    : { main: "$17", orig: "", per: "/month" };
  const teamPrice = isAnnual
    ? { main: "$149", orig: "$169", per: "/seat/year" }
    : { main: "$15", orig: "", per: "/seat/mo" };

  const categories = [
    { id: "organisation", label: "Organisation" },
    { id: "individuals", label: "Individuals" },
    { id: "non-commercial", label: "Non-commercial" },
    { id: "education", label: "Education" },
  ] as const;

  return (
    <div className="bg-[#F8FAF9] min-h-screen pt-24 pb-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-12"
        >
          <div className="font-mono text-xs md:text-[13px] tracking-[0.14em] uppercase text-[#5DA233] font-medium mb-3">
            Pricing
          </div>
          <h1 className="text-[40px] md:text-[62px] font-extrabold tracking-[-0.02em] leading-[1.04] text-ugle-slate mb-4">
            Simple. Honest. One-time*.
          </h1>
          <p className="text-[18px] md:text-[21px] text-ugle-gray max-w-2xl mx-auto leading-[1.55]">
            Pay once*, use forever. No subscriptions. No surprise charges.
          </p>
        </motion.div>

        {/* ── Category tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-6 flex flex-col items-center"
        >
          {/* Desktop: single outer border wraps all tabs */}
          <div className="hidden sm:inline-flex border border-ugle-light rounded-lg p-1 gap-0.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`category-tab-${cat.id}`}
                onClick={() => setCategory(cat.id)}
                className={`px-4 py-1.5 rounded-lg text-base font-semibold whitespace-nowrap transition-colors duration-200 ${
                  category === cat.id
                    ? "border border-ugle-green text-ugle-slate"
                    : "border border-transparent text-ugle-gray hover:text-ugle-slate"
                }`}
              >
                {cat.label}
                {(cat.id === "non-commercial" || cat.id === "education") && (
                  <span className="ml-1.5 text-[11px] font-bold text-[#5DA233]">
                    Free
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Mobile: each tab has its own border */}
          <div className="flex sm:hidden flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={`m-${cat.id}`}
                id={`category-tab-mobile-${cat.id}`}
                onClick={() => setCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-[13.5px] font-semibold whitespace-nowrap transition-colors duration-200 border ${
                  category === cat.id
                    ? "border-ugle-green text-ugle-slate"
                    : "border-ugle-light text-ugle-gray hover:text-ugle-slate"
                }`}
              >
                {cat.label}
                {(cat.id === "non-commercial" || cat.id === "education") && (
                  <span className="ml-1.5 text-[11px] font-bold text-[#5DA233]">
                    Free
                  </span>
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* ── Billing toggle ── */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`mb-12 flex justify-center transition-opacity duration-200 ${
            showBilling ? "block opacity-100" : "hidden"
          }`}
        >
          <div className="inline-flex border border-ugle-light rounded-lg p-1 gap-0.5">
            <button
              id="billing-annual"
              onClick={() => setBilling("annual")}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-base font-semibold whitespace-nowrap transition-colors duration-200 ${
                isAnnual
                  ? "border border-ugle-green text-ugle-slate"
                  : "border border-transparent text-ugle-gray hover:text-ugle-slate"
              }`}
            >
              Annual billing
              <span className="text-[11px] font-bold text-[#5DA233]">
                save ~17%
              </span>
            </button>
            <button
              id="billing-monthly"
              onClick={() => setBilling("monthly")}
              className={`px-4 py-1.5 rounded-lg text-[13.5px] font-semibold whitespace-nowrap transition-colors duration-200 ${
                !isAnnual
                  ? "border border-ugle-green text-ugle-slate"
                  : "border border-transparent text-ugle-gray hover:text-ugle-slate"
              }`}
            >
              Monthly billing
            </button>
          </div>
        </motion.div>

        {/* ── Content area — switches by category ── */}
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          {category === "non-commercial" ? (
            <NonCommercialPanel />
          ) : category === "education" ? (
            <EducationPanel />
          ) : (
            <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto mb-32 items-start">
              {/* ── Solo card ── */}
              <SoloCard isAnnual={isAnnual} soloPrice={soloPrice} />

              {/* ── Solo Lifetime card ── */}
              <LifetimeCard />

              {/* ── Team card ── */}
              <TeamCard isAnnual={isAnnual} teamPrice={teamPrice} />
            </div>
          )}
        </motion.div>

        {/* ── FAQ — always visible ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-8">
            <h2 className="text-3xl md:text-[38px] font-bold text-ugle-slate tracking-tight">
              Questions
            </h2>
          </div>
          <div className="flex flex-col border-t border-ugle-light/60">
            {[
              {
                q: "Is there a free trial?",
                a: "Yes. 14 days, no file limit, no credit card. At day 14, choose a licence or the app continues in read-only mode — your existing index stays searchable, with no new imports.",
              },
              {
                q: "What counts as a seat?",
                a: "One seat = one machine. Solo licences activate on up to two machines owned by the same person. Team licences are per-machine.",
              },
              {
                q: "What if I reinstall my OS?",
                a: "Deactivate from Settings > Licence, then reactivate after reinstalling. Deactivate and reactivate as many times as needed.",
              },
              {
                q: "Does Ugle work offline?",
                a: "Yes. After activation, Ugle runs entirely without internet. Transcription, indexing, and search are all local. Internet is required for initial activation and updates only.",
              },
              {
                q: "Educational or non-profit pricing?",
                a: "40% off Solo licences for verified institutions and registered non-profit news organisations. Contact pricing@ugle.ai.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="py-5 border-b border-ugle-light/60 flex flex-col md:flex-row md:gap-8 md:items-start"
              >
                <h3 className="font-bold text-[17px] text-ugle-slate md:w-1/3 mb-2 md:mb-0">
                  {item.q}
                </h3>
                <p className="text-[15.5px] text-ugle-gray leading-relaxed md:w-2/3">
                  {item.a}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white border border-ugle-light/60 rounded-[14px] p-[34px] mt-10 shadow-sm">
            <h3 className="text-[22px] font-bold text-ugle-slate mb-2">
              Enterprise
            </h3>
            <p className="text-ugle-gray text-[15.5px]">
              Large team or air-gapped deployment? For newsroom-wide or
              on-premise installations, contact us directly. We work with
              engineering and IT teams.{" "}
              <span className="font-mono text-[#5DA233]">
                enterprise@ugle.ai
              </span>
            </p>
          </div>
        </motion.div>

        {/* Asterisk footnote */}
        <p className="text-center text-[13px] text-ugle-gray/60 font-mono pt-12 pb-4 max-w-xl mx-auto border-t border-ugle-light/40 mt-12">
          *Only valid for Lifetime License Access (10 Years)
        </p>
      </div>
    </div>
  );
}
