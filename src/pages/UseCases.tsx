import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowRight,
  Newspaper,
  Mic2,
  FileSearch,
  FileText,
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
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-ugle-slate leading-tight">
      {title}
    </h1>
    <p className="text-xl md:text-2xl text-ugle-gray max-w-3xl leading-relaxed">
      {subtitle}
    </p>
  </motion.div>
);

export const UseCasesHub = () => (
  <div className="max-w-6xl mx-auto px-6 py-24 pb-32">
    <PageHeader
      title="Built for the way you work."
      subtitle="Ugle in three real editorial workflows."
    />

    <div className="flex flex-col gap-6 mb-32">
      {[
        {
          title: "Newsroom editors",
          desc: "Find the soundbite before the segment closes. Search 200 hours of archive in seconds.",
          link: "/use-cases/newsrooms",
          icon: Newspaper,
        },
        {
          title: "Podcast producers",
          desc: "Pull clips from 300 episodes without listening to any of them.",
          link: "/use-cases/podcasts",
          icon: Mic2,
        },
        {
          title: "Journalists",
          desc: "A private, searchable archive of every source conversation, forever.",
          link: "/use-cases/journalists",
          icon: FileText,
        },
      ].map((item, i) => (
        <Link
          key={i}
          to={item.link}
          className="flex flex-col md:flex-row md:items-center justify-between p-8 md:p-12 bg-white border border-ugle-light/60 hover:border-[#75C043] rounded-3xl transition-all group shadow-sm hover:shadow-xl hover:-translate-y-1"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-8 mb-6 md:mb-0">
            <div className="w-16 h-16 bg-[#F8FAF9] text-ugle-slate rounded-2xl flex items-center justify-center group-hover:text-[#75C043] group-hover:bg-[#75C043]/10 transition-colors">
              <item.icon className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-ugle-slate mb-2">
                {item.title}
              </h3>
              <p className="text-ugle-gray text-lg md:text-xl leading-relaxed max-w-xl">
                {item.desc}
              </p>
            </div>
          </div>
          <div className="text-[#75C043] font-bold text-lg md:text-xl opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all flex items-center gap-2">
            Read workflow <span className="text-2xl leading-none">&rarr;</span>
          </div>
        </Link>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
    >
      <Link
        to="/use-cases/newsrooms"
        className="group block bg-[#F8FAF9] border border-ugle-light/60 hover:border-[#75C043]/50 rounded-2xl p-8 transition-all hover:shadow-[0_10px_40px_-10px_rgba(117,192,67,0.15)] relative overflow-hidden"
      >
        <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center border border-ugle-light shadow-sm mb-6 group-hover:scale-110 transition-transform">
          <Newspaper className="w-6 h-6 text-ugle-slate" />
        </div>
        <h2 className="text-2xl font-bold mb-3 text-ugle-slate">
          Newsroom editors
        </h2>
        <p className="text-ugle-gray mb-8 leading-relaxed">
          Find the soundbite. Cut the segment. Hit the deadline.
        </p>
        <div className="flex items-center text-[#75C043] font-semibold text-sm uppercase tracking-widest mt-auto group-hover:translate-x-2 transition-transform">
          Read workflow <ArrowRight className="w-4 h-4 ml-2" />
        </div>
      </Link>

      <Link
        to="/use-cases/podcasts"
        className="group block bg-[#F8FAF9] border border-ugle-light/60 hover:border-[#75C043]/50 rounded-2xl p-8 transition-all hover:shadow-[0_10px_40px_-10px_rgba(117,192,67,0.15)] relative overflow-hidden"
      >
        <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center border border-ugle-light shadow-sm mb-6 group-hover:scale-110 transition-transform">
          <Mic2 className="w-6 h-6 text-ugle-slate" />
        </div>
        <h2 className="text-2xl font-bold mb-3 text-ugle-slate">
          Podcast producers
        </h2>
        <p className="text-ugle-gray mb-8 leading-relaxed">
          Pull clips from 300 episodes without listening to any of them.
        </p>
        <div className="flex items-center text-[#75C043] font-semibold text-sm uppercase tracking-widest mt-auto group-hover:translate-x-2 transition-transform">
          Read workflow <ArrowRight className="w-4 h-4 ml-2" />
        </div>
      </Link>

      <Link
        to="/use-cases/journalists"
        className="group block bg-[#F8FAF9] border border-ugle-light/60 hover:border-[#75C043]/50 rounded-2xl p-8 transition-all hover:shadow-[0_10px_40px_-10px_rgba(117,192,67,0.15)] relative overflow-hidden"
      >
        <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center border border-ugle-light shadow-sm mb-6 group-hover:scale-110 transition-transform">
          <FileSearch className="w-6 h-6 text-ugle-slate" />
        </div>
        <h2 className="text-2xl font-bold mb-3 text-ugle-slate">Journalists</h2>
        <p className="text-ugle-gray mb-8 leading-relaxed">
          A private, searchable archive of every source conversation.
        </p>
        <div className="flex items-center text-[#75C043] font-semibold text-sm uppercase tracking-widest mt-auto group-hover:translate-x-2 transition-transform">
          Read workflow <ArrowRight className="w-4 h-4 ml-2" />
        </div>
      </Link>
    </motion.div>
  </div>
);

const UseCaseLayout = ({
  badge,
  title,
  children,
}: {
  badge: string;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="max-w-4xl mx-auto px-6 py-24 pb-32">
    <Link
      to="/use-cases"
      className="inline-flex items-center text-sm font-semibold text-ugle-gray hover:text-[#75C043] transition-colors mb-12"
    >
      <ArrowRight className="w-4 h-4 mr-2 rotate-180" /> Back to Use Cases
    </Link>
    <PageHeader badge={badge} title={title} subtitle="" />
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.5 }}
      className="prose prose-lg prose-p:text-ugle-gray prose-headings:text-ugle-slate text-ugle-gray max-w-none"
    >
      {children}
    </motion.div>
  </div>
);

export const UseCaseNewsrooms = () => (
  <UseCaseLayout
    badge="Newsroom Editors"
    title="Find the moment. Not the file."
  >
    <p className="text-xl md:text-2xl text-ugle-slate font-medium leading-relaxed mb-12 -mt-16">
      The deadline is two hours away. The clip is somewhere in a 90-minute
      interview recorded three weeks ago. You remember the subject discussed the
      contract dispute — but not the timestamp.
    </p>

    <p>
      Type <em>'contract dispute'</em> in Ugle. Every matching moment across
      every indexed file, returned in 30ms. Click to play. Export. Done.
    </p>

    <h2 className="text-2xl font-bold mt-16 mb-6 text-ugle-slate">
      Workflow Example
    </h2>
    <div className="bg-[#F8FAF9] p-8 md:p-10 rounded-2xl border border-ugle-light/60 my-8">
      <ol className="space-y-6 list-decimal pl-5 text-ugle-slate font-medium marker:text-[#75C043] marker:font-bold">
        <li className="pl-4 pb-4 border-b border-ugle-light/40">
          14 clips arrive — total 6 hours of footage.
        </li>
        <li className="pl-4 pb-4 border-b border-ugle-light/40">
          Drop the folder into Ugle. Indexing starts in the background.
        </li>
        <li className="pl-4 pb-4 border-b border-ugle-light/40">
          Continue other work. Notification: indexing complete.
        </li>
        <li className="pl-4 pb-4 border-b border-ugle-light/40">
          Search 'planning permission objection'. 4 results across 3 files.
        </li>
        <li className="pl-4 pb-4 border-b border-ugle-light/40">
          Preview both usable takes in Ugle. Select the cleaner one.
        </li>
        <li className="pl-4">Export as MP3. Send to producer. Deadline met.</li>
      </ol>
    </div>

    <h2 className="text-2xl font-bold mt-16 mb-6 text-ugle-slate">
      Every format your newsroom records
    </h2>
    <div className="border border-ugle-light/60 rounded-xl overflow-hidden shadow-sm not-prose">
      <table className="w-full text-left bg-[#F8FAF9]">
        <tbody className="divide-y divide-ugle-light/40">
          <tr className="bg-white/50">
            <td className="py-4 px-6 font-bold text-sm w-1/3 text-ugle-slate uppercase tracking-wider">
              Format type
            </td>
            <td className="py-4 px-6 font-bold text-sm text-ugle-slate uppercase tracking-wider">
              Supported
            </td>
          </tr>
          <tr className="hover:bg-gray-50/50 transition-colors">
            <td className="py-4 px-6 font-medium text-ugle-slate">
              Camera footage
            </td>
            <td className="py-4 px-6 text-ugle-gray">MP4, MOV, MKV</td>
          </tr>
          <tr className="hover:bg-gray-50/50 transition-colors">
            <td className="py-4 px-6 font-medium text-ugle-slate">
              Broadcast audio
            </td>
            <td className="py-4 px-6 text-ugle-gray">
              WAV, AIFF, Broadcast WAV
            </td>
          </tr>
          <tr className="hover:bg-gray-50/50 transition-colors">
            <td className="py-4 px-6 font-medium text-ugle-slate">
              Phone recordings
            </td>
            <td className="py-4 px-6 text-ugle-gray">M4A, AAC, MP3</td>
          </tr>
          <tr className="hover:bg-gray-50/50 transition-colors">
            <td className="py-4 px-6 font-medium text-ugle-slate">
              Legacy archive
            </td>
            <td className="py-4 px-6 text-ugle-gray">
              FLAC, OGG, and most common containers
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </UseCaseLayout>
);

export const UseCasePodcasts = () => (
  <UseCaseLayout
    badge="Podcast Producers"
    title="300 episodes. One search bar."
  >
    <p className="text-xl md:text-2xl text-ugle-slate font-medium leading-relaxed mb-12 -mt-16">
      Four years of recordings. Three hundred episodes averaging 90 minutes
      each. That's 450 hours of spoken content. Ugle indexes all of it — not the
      show notes, the spoken words.
    </p>

    <p>
      Building a compilation episode on housing policy? Search{" "}
      <em>'rent control'</em>. 23 results across 18 episodes. Preview, select,
      export. 22 minutes. Previously: half a day.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 not-prose">
      <div className="bg-[#F8FAF9] p-8 md:p-10 rounded-2xl border border-ugle-light/60">
        <h2 className="text-xl font-bold mb-6 text-ugle-slate">
          Workflow: Compilation
        </h2>
        <ol className="space-y-4 list-decimal pl-5 text-ugle-slate font-medium marker:text-[#75C043] marker:font-bold">
          <li className="pl-2">
            Search 'rent control'. 23 results across 18 episodes.
          </li>
          <li className="pl-2">
            Filter to results over 45 seconds of continuous speech.
          </li>
          <li className="pl-2">Preview 8 candidates. Select 4.</li>
          <li className="pl-2">
            Export as MP3 with timestamps for the editor.
          </li>
        </ol>
      </div>
      <div className="bg-[#F8FAF9] p-8 md:p-10 rounded-2xl border border-ugle-light/60">
        <h2 className="text-xl font-bold mb-6 text-ugle-slate">
          Workflow: Guest Research
        </h2>
        <ol className="space-y-4 list-decimal pl-5 text-ugle-slate font-medium marker:text-[#75C043] marker:font-bold">
          <li className="pl-2">
            Guest returning after 18 months. Search their name.
          </li>
          <li className="pl-2">Previous episode surfaces instantly.</li>
          <li className="pl-2">
            Scan transcript for threads to revisit and topics to avoid in the
            upcoming interview.
          </li>
        </ol>
      </div>
    </div>
  </UseCaseLayout>
);

export const UseCaseJournalists = () => (
  <UseCaseLayout
    badge="Journalists"
    title="Every source. Every word. On your machine."
  >
    <p className="text-xl md:text-2xl text-ugle-slate font-medium leading-relaxed mb-12 -mt-16">
      Seven years of source recordings. Every word spoken is retrievable — not
      by filename or date, but by what was actually said. A source mentioned a
      name four months ago. Find it in 30ms.
    </p>

    <p>
      Because Ugle runs entirely on-device, source protection is architectural.
      No server to subpoena. No cloud storage to breach.
    </p>

    <h2 className="text-2xl font-bold mt-16 mb-6 text-ugle-slate">
      Technical reality
    </h2>
    <div className="border border-ugle-light/60 rounded-xl overflow-hidden shadow-sm not-prose">
      <table className="w-full text-left bg-[#F8FAF9]">
        <tbody className="divide-y divide-ugle-light/40">
          <tr className="bg-white/50">
            <td className="py-4 px-6 font-bold text-sm w-1/3 text-ugle-slate uppercase tracking-wider">
              Claim
            </td>
            <td className="py-4 px-6 font-bold text-sm text-ugle-slate uppercase tracking-wider">
              Technical reality
            </td>
          </tr>
          <tr className="hover:bg-gray-50/50 transition-colors border-l-4 border-transparent">
            <td className="py-4 px-6 font-medium text-ugle-slate">
              No uploads
            </td>
            <td className="py-4 px-6 text-ugle-gray">
              Transcription runs on a local model. Audio never leaves your
              machine.
            </td>
          </tr>
          <tr className="hover:bg-gray-50/50 transition-colors border-l-4 border-transparent">
            <td className="py-4 px-6 font-medium text-ugle-slate">
              No cloud storage
            </td>
            <td className="py-4 px-6 text-ugle-gray">
              The index is a local file on your drive. You control it.
            </td>
          </tr>
          <tr className="hover:bg-gray-50/50 transition-colors border-l-4 border-transparent">
            <td className="py-4 px-6 font-medium text-ugle-slate">
              No accounts
            </td>
            <td className="py-4 px-6 text-ugle-gray">
              No Ugle account linked to your files.
            </td>
          </tr>
          <tr className="hover:bg-gray-50/50 transition-colors border-l-4 border-transparent">
            <td className="py-4 px-6 font-medium text-ugle-slate">
              No content telemetry
            </td>
            <td className="py-4 px-6 text-ugle-gray">
              Ugle does not log search queries or file activity.
            </td>
          </tr>
          <tr className="hover:bg-gray-50/50 transition-colors border-l-4 border-[#75C043] bg-white">
            <td className="py-4 px-6 font-bold text-ugle-slate">Portable</td>
            <td className="py-4 px-6 text-ugle-gray font-medium">
              Library folder moves to an encrypted external drive. Ugle
              reconnects.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </UseCaseLayout>
);
