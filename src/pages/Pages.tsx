import React from "react";
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
            [ Join Early for macOS &darr; ]
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-3 border-b-2 border-white/20 hover:border-white/60 text-white font-bold py-4 px-6 text-lg transition-colors"
          >
            [ Join Early for Windows &darr; ]
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

export const Pricing = () => (
  <div className="bg-[#F8FAF9] min-h-screen pt-24 pb-32">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16 md:mb-20"
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

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-32"
      >
        {/* Solo */}
        <div className="bg-white rounded-2xl p-8 border border-ugle-light/60 shadow-sm relative flex flex-col group">
          <div className="font-mono text-sm tracking-widest uppercase text-ugle-gray mb-3">
            Solo
          </div>

          <div className="mb-4">
            <div className="flex items-baseline gap-2 mb-2 flex-wrap">
              <span className="text-3xl font-extrabold tracking-tight text-ugle-gray/40 line-through">
                $199
              </span>
              <span className="text-4xl font-extrabold tracking-tight text-ugle-slate">
                $169
              </span>
              <span className="text-base font-semibold text-ugle-gray">
                /Year
              </span>
            </div>
            <p className="text-ugle-gray text-[15px] leading-snug min-h-[44px]">
              Freelance journalists, independent producers, solo editors.
            </p>
          </div>

          <div className="space-y-3 flex-1 my-5">
            {[
              "Up to 2 machines (same user)",
              "12 months of updates included. Renew $99/year.",
              "Unlimited Library size",
              "90+ languages",
              "Clip export included",
            ].map((f, i) => (
              <div
                key={i}
                className="flex items-start gap-3 text-ugle-slate font-medium text-[14px]"
              >
                <Check
                  className="w-[16px] h-[16px] text-[#75C043] flex-shrink-0 mt-0.5"
                  strokeWidth={2.4}
                />
                <span>{f}</span>
              </div>
            ))}
          </div>

          <button className="w-full bg-ugle-slate text-white font-bold py-3.5 px-6 rounded-[10px] transition-colors hover:bg-[#222] text-[14px]">
            Buy Solo Licence
          </button>
        </div>

        {/* Solo Lifetime Access — Recommended */}
        <div className="bg-ugle-slate rounded-[1rem] p-8 border border-ugle-slate shadow-xl relative flex flex-col group scale-[1.02]">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
            <span className="bg-[#75C043] text-[#102206] font-bold text-xs px-4 py-1.5 rounded-full tracking-wide whitespace-nowrap">
              We Recommend
            </span>
          </div>
          <div className="font-mono text-sm tracking-widest uppercase text-white/50 mb-3 mt-1">
            Solo Lifetime Access*
          </div>

          <div className="mb-4">
            <div className="flex items-baseline gap-2 mb-2 flex-wrap">
              <span className="text-3xl font-extrabold tracking-tight text-white/30 line-through">
                $1999
              </span>
              <span className="text-4xl font-extrabold tracking-tight text-white">
                $999
              </span>
            </div>
            <p className="text-white/60 text-[15px] leading-snug min-h-[44px]">
              Believers.
            </p>
          </div>

          <div className="space-y-3 flex-1 my-5">
            {[
              "Up to 2 machines (same user)",
              "120 months of updates included.",
              "Unlimited Library size",
              "90+ languages",
              "Clip export included",
            ].map((f, i) => (
              <div
                key={i}
                className="flex items-start gap-3 text-white font-medium text-[14px]"
              >
                <Check
                  className="w-[16px] h-[16px] text-[#75C043] flex-shrink-0 mt-0.5"
                  strokeWidth={2.4}
                />
                <span>{f}</span>
              </div>
            ))}
          </div>

          <button className="w-full bg-[#75C043] text-[#102206] font-bold py-3.5 px-6 rounded-[10px] transition-colors hover:bg-[#5DA233] hover:text-white text-[14px]">
            Buy Freedom Licence
          </button>
        </div>

        {/* Team */}
        <div className="bg-white rounded-[1rem] p-8 border border-ugle-light/60 shadow-sm relative flex flex-col group">
          <div className="font-mono text-sm tracking-widest uppercase text-ugle-gray mb-3">
            Team
          </div>

          <div className="mb-4">
            <div className="flex items-baseline gap-1.5 mb-1 flex-wrap">
              <span className="text-3xl font-extrabold tracking-tight text-ugle-gray/40 line-through">
                $169
              </span>
              <span className="text-4xl font-extrabold tracking-tight text-ugle-slate">
                $149
              </span>
              <span className="text-base font-semibold text-ugle-gray">
                /seat/year
              </span>
            </div>
            <div className="text-[13px] text-ugle-gray/60 font-mono mb-2">
              min. 3 seats
            </div>
            <p className="text-ugle-gray text-[15px] leading-snug min-h-[44px]">
              Editorial teams, production companies, newsrooms.
            </p>
          </div>

          <div className="space-y-3 flex-1 my-5">
            {[
              "Per-seat, company licence",
              "Updates included for licence duration",
              "Unlimited Library size · 90+ languages",
              "Priority support — 4-hour response SLA",
              "Admin console included",
            ].map((f, i) => (
              <div
                key={i}
                className="flex items-start gap-3 text-ugle-slate font-medium text-[14px]"
              >
                <Check
                  className="w-[16px] h-[16px] text-[#75C043] flex-shrink-0 mt-0.5"
                  strokeWidth={2.4}
                />
                <span>{f}</span>
              </div>
            ))}
          </div>

          <button className="w-full bg-[#75C043] text-[#102206] font-bold py-3.5 px-6 rounded-[10px] transition-colors hover:bg-[#5DA233] hover:text-white text-[14px]">
            Contact for Team Pricing
          </button>
        </div>
      </motion.div>

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
              className="py-5 border-b border-ugle-light/60 flex flex-col md:flex-row md:gap-8 md:items-start group"
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
            Large team or air-gapped deployment? For newsroom-wide or on-premise
            installations, contact us directly. We work with engineering and IT
            teams.{" "}
            <span className="font-mono text-[#5DA233]">enterprise@ugle.ai</span>
          </p>
        </div>
      </motion.div>

      {/* Asterisk footnote */}
      <p className="text-center text-[13px] text-ugle-gray/60 font-mono pt-12 pb-4 max-w-xl mx-auto border-t border-ugle-light/40">
        *Only valid for Lifetime License Access (10 Years)
      </p>
    </div>
  </div>
);
