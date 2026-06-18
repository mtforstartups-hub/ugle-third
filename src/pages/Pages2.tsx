import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Shield, Lock, Server, FileCheck, CheckCircle2 } from "lucide-react";
import { marked } from "marked";

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

export const Security = () => (
  <div className="max-w-5xl mx-auto px-6 py-24 pb-32">
    <PageHeader
      badge="Security Architecture"
      title="Your files never leave your machine."
      subtitle="Not a privacy policy. An architecture decision. Ugle has no server-side infrastructure to receive your recordings."
    />

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.5 }}
      className="space-y-16"
    >
      <section className="bg-[#F8FAF9] border border-ugle-light/60 rounded-2xl p-8 md:p-12 mb-16 relative overflow-hidden">
        <Server className="absolute -right-8 -bottom-8 w-64 h-64 text-ugle-light/30" />
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl font-bold mb-4 text-ugle-slate flex items-center gap-3">
            <Lock className="w-8 h-8 text-[#75C043]" />
            Local-First Engine
          </h2>
          <p className="text-lg text-ugle-gray mb-6 leading-relaxed">
            Most transcription tools send files to a server, process them
            remotely, and return results. This creates data exposure — however
            briefly. Ugle is architecturally different. The transcription model
            runs on your device. The index writes to a local folder. Search
            executes locally. At no point does content leave your machine.
          </p>
          <div className="inline-flex items-center gap-2 bg-[#75C043]/10 text-[#75C043] font-medium px-4 py-2 rounded text-sm mt-2">
            <CheckCircle2 className="w-4 h-4" /> This is not a feature toggle or
            private mode. It is how Ugle works, every time.
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 text-ugle-slate">
          Data locations
        </h2>
        <div className="border border-ugle-light/60 rounded-xl overflow-hidden shadow-sm">
          <table className="w-full text-left text-sm md:text-base">
            <thead className="bg-[#F8FAF9] border-b border-ugle-light/60">
              <tr>
                <th className="py-4 px-6 font-semibold text-ugle-slate w-1/4">
                  Data type
                </th>
                <th className="py-4 px-6 font-semibold text-ugle-slate">
                  Where it lives
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ugle-light/40">
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="py-4 px-6 font-medium text-ugle-slate border-l-2 border-transparent">
                  Audio/video files
                </td>
                <td className="py-4 px-6 text-ugle-gray">
                  Original location on your device. Ugle reads from the path.
                  Nothing is copied.
                </td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="py-4 px-6 font-medium text-ugle-slate border-l-2 border-transparent">
                  Transcripts
                </td>
                <td className="py-4 px-6 text-ugle-gray">
                  Generated locally. Stored in your Ugle Library folder. Never
                  transmitted.
                </td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors border-l-2 border-[#75C043]">
                <td className="py-4 px-6 font-medium text-ugle-slate">
                  Search index
                </td>
                <td className="py-4 px-6 text-ugle-gray">
                  Encrypted local database in your Library folder. Never
                  transmitted.
                </td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors border-l-2 border-[#75C043]">
                <td className="py-4 px-6 font-medium text-ugle-slate">
                  Search queries
                </td>
                <td className="py-4 px-6 text-ugle-gray">
                  Executed locally. Not logged. Not transmitted.
                </td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="py-4 px-6 font-medium text-ugle-slate border-l-2 border-transparent">
                  Licence activation
                </td>
                <td className="py-4 px-6 text-ugle-gray">
                  Email address + device ID sent once at activation. No content
                  data.
                </td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="py-4 px-6 font-medium text-ugle-slate border-l-2 border-transparent">
                  Update checks
                </td>
                <td className="py-4 px-6 text-ugle-gray">
                  Version numbers only. Optional — can be disabled. No
                  content/usage data.
                </td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="py-4 px-6 font-medium text-ugle-slate border-l-2 border-transparent">
                  Crash reports
                </td>
                <td className="py-4 px-6 text-ugle-gray">
                  Opt-in only at time of crash. Technical diagnostics only. No
                  file content.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="pt-8">
        <h2 className="text-2xl font-bold mb-6 text-ugle-slate flex items-center gap-3">
          <FileCheck className="w-6 h-6 text-[#75C043]" />
          IT & compliance Q&A
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {[
            {
              q: "Firewall exceptions needed?",
              a: "No. Outbound: licence validation, update checks (optional), opt-in crash reports. No content traffic.",
            },
            {
              q: "Air-gapped deployment?",
              a: "Yes. Activate on a networked machine, then move to air-gapped environment. Manual update packages available on request.",
            },
            {
              q: "Where does the index live?",
              a: "macOS: ~/Library/Application Support/Ugle/\nWindows: %APPDATA%/Ugle/\nLocation is configurable.",
            },
            {
              q: "Index on encrypted drive?",
              a: "Yes. Ugle reconnects wherever the Library folder is located.",
            },
            {
              q: "Is the index encrypted?",
              a: "AES-256 at rest. Encryption key derived from machine hardware ID.",
            },
            {
              q: "MDM deployment?",
              a: "MSI for Windows MDM. macOS PKG for Jamf. Contact enterprise@ugle.ai.",
            },
            {
              q: "Usage analytics collected?",
              a: "No. No data about which files you index, what you search, or usage frequency.",
            },
          ].map((item, i) => (
            <div key={i} className="border-b border-ugle-light/40 pb-6">
              <div className="font-semibold text-ugle-slate mb-2">{item.q}</div>
              <div className="text-ugle-gray leading-relaxed whitespace-pre-wrap">
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  </div>
);

export const Changelog = () => (
  <div className="max-w-4xl mx-auto px-6 py-24 pb-32">
    <PageHeader
      title="Changelog"
      subtitle="Release notes and updates to the Ugle engine."
    />

    <div className="space-y-0 pl-4 border-l border-ugle-light/60">
      {[
        {
          v: "v1.0.4",
          date: "June 2026",
          items: [
            {
              t: "[Performance]",
              text: "Indexing speed on Intel improved 23% via parallel audio chunk processing.",
              c: "text-ugle-gray",
            },
            {
              t: "[Feature]",
              text: "OGG and FLAC input format support added.",
              c: "text-blue-600",
            },
            {
              t: "[Fix]",
              text: "Rare crash on files > 4GB on Windows 10 resolved.",
              c: "text-red-500",
            },
            {
              t: "[Improvement]",
              text: "Library view shows total indexed duration.",
              c: "text-[#75C043]",
            },
            {
              t: "[Fix]",
              text: "Transcript view handles overlapping speaker segments correctly.",
              c: "text-red-500",
            },
          ],
        },
        {
          v: "v1.0.3",
          date: "May 2026",
          items: [
            {
              t: "[Feature]",
              text: "WAV clip export added alongside MP3.",
              c: "text-blue-600",
            },
            {
              t: "[Improvement]",
              text: "Search results now show three-line context excerpts.",
              c: "text-[#75C043]",
            },
            {
              t: "[Performance]",
              text: "Index storage size reduced ~18% via improved compression.",
              c: "text-ugle-gray",
            },
            {
              t: "[Fix]",
              text: "Library path can now be set to a network-attached storage volume on macOS.",
              c: "text-red-500",
            },
          ],
        },
        {
          v: "v1.0.2",
          date: "April 2026",
          items: [
            {
              t: "[Fix]",
              text: "Accuracy regression in French and Spanish transcription corrected.",
              c: "text-red-500",
            },
            {
              t: "[Feature]",
              text: "Cmd+K / Ctrl+K opens search from anywhere in the application.",
              c: "text-blue-600",
            },
            {
              t: "[Improvement]",
              text: "Import queue shows estimated indexing time per file.",
              c: "text-[#75C043]",
            },
          ],
        },
        {
          v: "v1.0.1",
          date: "March 2026",
          items: [
            {
              t: "[Feature]",
              text: "Semantic search enabled for all indexed libraries. Previously keyword-only.",
              c: "text-blue-600",
            },
            {
              t: "[Performance]",
              text: "Indexing speed improved 31% on Apple M2 and M3.",
              c: "text-ugle-gray",
            },
            {
              t: "[Feature]",
              text: "MKV video container format support.",
              c: "text-blue-600",
            },
            {
              t: "[Fix]",
              text: "Library folder migration correctly updates all file path references.",
              c: "text-red-500",
            },
          ],
        },
        {
          v: "v1.0.0",
          date: "February 2026 · Initial release",
          items: [
            {
              t: "[Feature]",
              text: "On-device transcription. 90+ languages.",
              c: "text-blue-600",
            },
            {
              t: "[Feature]",
              text: "Semantic + keyword search.",
              c: "text-blue-600",
            },
            {
              t: "[Feature]",
              text: "Audio/video import, clip export.",
              c: "text-blue-600",
            },
          ],
        },
      ].map((log, index) => (
        <motion.div
          key={log.v}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="relative pb-16 pl-8"
        >
          <div className="absolute w-3 h-3 bg-white rounded-full -left-[6px] top-2 border-2 border-ugle-slate"></div>
          <div className="flex items-baseline gap-4 mb-4">
            <h2 className="text-2xl font-bold font-mono text-ugle-slate">
              {log.v}
            </h2>
            <span className="text-ugle-gray text-sm">{log.date}</span>
          </div>
          <ul className="space-y-4">
            {log.items.map((item, i) => (
              <li
                key={i}
                className="text-lg text-ugle-slate block sm:flex items-start gap-4"
              >
                <span
                  className={`font-mono text-xs w-28 uppercase tracking-wider font-bold shrink-0 pt-1.5 ${item.c}`}
                >
                  {item.t}
                </span>
                <span className="mt-1 sm:mt-0 leading-relaxed">
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </div>
);

const MarkdownPage = ({ fileUrl }: { fileUrl: string }) => {
  const [htmlContent, setHtmlContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetch(fileUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load page content");
        }
        return res.text();
      })
      .then((text) => {
        let html = marked.parse(text) as string;
        // Replace JSX className with standard HTML class for the table styling
        html = html.replace(/className=/g, "class=");
        // Wrap tables in not-prose wrapper to preserve custom styling identical to design mockups
        html = html.replace(
          /<table([\s\S]*?)<\/table>/g,
          '<div class="not-prose border border-ugle-light/60 rounded-xl overflow-hidden shadow-sm my-8"><table$1</table></div>',
        );
        setHtmlContent(html);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Error loading page content");
        setLoading(false);
      });
  }, [fileUrl]);

  return (
    <div className="max-w-4xl mx-auto px-6 py-24 pb-32">
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#75C043]"></div>
        </div>
      ) : error ? (
        <div className="text-red-500 text-center py-20 font-mono text-sm">
          {error}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="prose prose-lg max-w-none text-ugle-gray
            prose-headings:text-ugle-slate prose-headings:font-bold prose-headings:tracking-tight
            prose-h1:text-4xl prose-h1:md:text-5xl prose-h1:lg:text-6xl prose-h1:font-bold prose-h1:mb-10
            prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:font-bold prose-h2:mt-16 prose-h2:mb-6
            prose-h3:text-xl prose-h3:font-bold prose-h3:mt-10 prose-h3:mb-4
            prose-p:text-ugle-gray prose-p:leading-[1.65] prose-p:mb-6
            prose-li:text-ugle-gray prose-li:mb-2.5 prose-li:leading-relaxed
            prose-strong:text-ugle-slate
            prose-a:text-[#75C043] prose-a:font-semibold hover:prose-a:underline
            prose-ol:marker:text-[#75C043] prose-ol:marker:font-mono prose-ol:marker:font-bold
            prose-ul:marker:text-[#75C043]"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      )}
    </div>
  );
};

export const Privacy = () => <MarkdownPage fileUrl="/Privacy%20Policy.md" />;
export const Terms = () => <MarkdownPage fileUrl="/TOS.md" />;
