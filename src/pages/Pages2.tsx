import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Shield, Lock, Server, FileCheck, CheckCircle2 } from 'lucide-react';

const PageHeader = ({ title, subtitle, badge }: { title: string, subtitle: string, badge?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    className="mb-16 md:mb-24"
  >
    {badge && <div className="mb-6 text-[#75C043] font-mono text-sm font-bold uppercase tracking-wider">{badge}</div>}
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-ugle-slate leading-tight">{title}</h1>
    <p className="text-xl md:text-2xl text-ugle-gray max-w-3xl leading-relaxed">{subtitle}</p>
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
          <p className="text-lg text-ugle-gray mb-6 leading-relaxed">Most transcription tools send files to a server, process them remotely, and return results. This creates data exposure — however briefly. Ugle is architecturally different. The transcription model runs on your device. The index writes to a local folder. Search executes locally. At no point does content leave your machine.</p>
          <div className="inline-flex items-center gap-2 bg-[#75C043]/10 text-[#75C043] font-medium px-4 py-2 rounded text-sm mt-2">
            <CheckCircle2 className="w-4 h-4" /> This is not a feature toggle or private mode. It is how Ugle works, every time.
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 text-ugle-slate">Data locations</h2>
        <div className="border border-ugle-light/60 rounded-xl overflow-hidden shadow-sm">
          <table className="w-full text-left text-sm md:text-base">
            <thead className="bg-[#F8FAF9] border-b border-ugle-light/60">
              <tr>
                <th className="py-4 px-6 font-semibold text-ugle-slate w-1/4">Data type</th>
                <th className="py-4 px-6 font-semibold text-ugle-slate">Where it lives</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ugle-light/40">
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="py-4 px-6 font-medium text-ugle-slate border-l-2 border-transparent">Audio/video files</td>
                <td className="py-4 px-6 text-ugle-gray">Original location on your device. Ugle reads from the path. Nothing is copied.</td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="py-4 px-6 font-medium text-ugle-slate border-l-2 border-transparent">Transcripts</td>
                <td className="py-4 px-6 text-ugle-gray">Generated locally. Stored in your Ugle Library folder. Never transmitted.</td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors border-l-2 border-[#75C043]">
                <td className="py-4 px-6 font-medium text-ugle-slate">Search index</td>
                <td className="py-4 px-6 text-ugle-gray">Encrypted local database in your Library folder. Never transmitted.</td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors border-l-2 border-[#75C043]">
                <td className="py-4 px-6 font-medium text-ugle-slate">Search queries</td>
                <td className="py-4 px-6 text-ugle-gray">Executed locally. Not logged. Not transmitted.</td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="py-4 px-6 font-medium text-ugle-slate border-l-2 border-transparent">Licence activation</td>
                <td className="py-4 px-6 text-ugle-gray">Email address + device ID sent once at activation. No content data.</td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="py-4 px-6 font-medium text-ugle-slate border-l-2 border-transparent">Update checks</td>
                <td className="py-4 px-6 text-ugle-gray">Version numbers only. Optional — can be disabled. No content/usage data.</td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="py-4 px-6 font-medium text-ugle-slate border-l-2 border-transparent">Crash reports</td>
                <td className="py-4 px-6 text-ugle-gray">Opt-in only at time of crash. Technical diagnostics only. No file content.</td>
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
            { q: "Firewall exceptions needed?", a: "No. Outbound: licence validation, update checks (optional), opt-in crash reports. No content traffic." },
            { q: "Air-gapped deployment?", a: "Yes. Activate on a networked machine, then move to air-gapped environment. Manual update packages available on request." },
            { q: "Where does the index live?", a: "macOS: ~/Library/Application Support/Ugle/\nWindows: %APPDATA%/Ugle/\nLocation is configurable." },
            { q: "Index on encrypted drive?", a: "Yes. Ugle reconnects wherever the Library folder is located." },
            { q: "Is the index encrypted?", a: "AES-256 at rest. Encryption key derived from machine hardware ID." },
            { q: "MDM deployment?", a: "MSI for Windows MDM. macOS PKG for Jamf. Contact enterprise@ugle.ai." },
            { q: "Usage analytics collected?", a: "No. No data about which files you index, what you search, or usage frequency." },
          ].map((item, i) => (
             <div key={i} className="border-b border-ugle-light/40 pb-6">
               <div className="font-semibold text-ugle-slate mb-2">{item.q}</div>
               <div className="text-ugle-gray leading-relaxed whitespace-pre-wrap">{item.a}</div>
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
          v: "v1.0.4", date: "June 2026", 
          items: [
            { t: "[Performance]", text: "Indexing speed on Intel improved 23% via parallel audio chunk processing.", c: "text-ugle-gray" },
            { t: "[Feature]", text: "OGG and FLAC input format support added.", c: "text-blue-600" },
            { t: "[Fix]", text: "Rare crash on files > 4GB on Windows 10 resolved.", c: "text-red-500" },
            { t: "[Improvement]", text: "Library view shows total indexed duration.", c: "text-[#75C043]" },
            { t: "[Fix]", text: "Transcript view handles overlapping speaker segments correctly.", c: "text-red-500" }
          ]
        },
        { 
          v: "v1.0.3", date: "May 2026", 
          items: [
            { t: "[Feature]", text: "WAV clip export added alongside MP3.", c: "text-blue-600" },
            { t: "[Improvement]", text: "Search results now show three-line context excerpts.", c: "text-[#75C043]" },
            { t: "[Performance]", text: "Index storage size reduced ~18% via improved compression.", c: "text-ugle-gray" },
            { t: "[Fix]", text: "Library path can now be set to a network-attached storage volume on macOS.", c: "text-red-500" }
          ]
        },
        { 
          v: "v1.0.2", date: "April 2026", 
          items: [
            { t: "[Fix]", text: "Accuracy regression in French and Spanish transcription corrected.", c: "text-red-500" },
            { t: "[Feature]", text: "Cmd+K / Ctrl+K opens search from anywhere in the application.", c: "text-blue-600" },
            { t: "[Improvement]", text: "Import queue shows estimated indexing time per file.", c: "text-[#75C043]" }
          ]
        },
        { 
          v: "v1.0.1", date: "March 2026", 
          items: [
            { t: "[Feature]", text: "Semantic search enabled for all indexed libraries. Previously keyword-only.", c: "text-blue-600" },
            { t: "[Performance]", text: "Indexing speed improved 31% on Apple M2 and M3.", c: "text-ugle-gray" },
            { t: "[Feature]", text: "MKV video container format support.", c: "text-blue-600" },
            { t: "[Fix]", text: "Library folder migration correctly updates all file path references.", c: "text-red-500" }
          ]
        },
        { 
          v: "v1.0.0", date: "February 2026 · Initial release", 
          items: [
            { t: "[Feature]", text: "On-device transcription. 90+ languages.", c: "text-blue-600" },
            { t: "[Feature]", text: "Semantic + keyword search.", c: "text-blue-600" },
            { t: "[Feature]", text: "Audio/video import, clip export.", c: "text-blue-600" }
          ]
        }
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
            <h2 className="text-2xl font-bold font-mono text-ugle-slate">{log.v}</h2>
            <span className="text-ugle-gray text-sm">{log.date}</span>
          </div>
          <ul className="space-y-4">
            {log.items.map((item, i) => (
              <li key={i} className="text-lg text-ugle-slate block sm:flex items-start gap-4">
                <span className={`font-mono text-xs w-28 uppercase tracking-wider font-bold shrink-0 pt-1.5 ${item.c}`}>{item.t}</span> 
                <span className="mt-1 sm:mt-0 leading-relaxed">{item.text}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </div>
);

const LegalPage = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="max-w-3xl mx-auto px-6 py-24 pb-32">
    <PageHeader title={title} subtitle="Effective Date: June 1, 2026" />
    <div className="prose prose-lg prose-p:text-ugle-gray prose-headings:text-ugle-slate text-ugle-gray mt-12 max-w-none">
      {children}
    </div>
  </div>
);

export const Privacy = () => (
  <LegalPage title="Privacy Policy">
    <div className="mb-8 font-medium text-ugle-slate border-b border-ugle-light/60 pb-8">
      <h3 className="mb-4">The short version</h3>
      <p>Ugle runs entirely on your device. We do not receive your recordings, transcripts, or search queries. We have no server-side infrastructure capable of accessing your content.</p>
    </div>

    <h3>What we collect</h3>
    <div className="border border-ugle-light/60 rounded-xl overflow-hidden shadow-sm not-prose mb-8">
      <table className="w-full text-left bg-[#F8FAF9]">
        <tbody className="divide-y divide-ugle-light/40">
          <tr className="bg-white/50">
            <td className="py-4 px-6 font-bold text-sm w-1/3 text-ugle-slate uppercase tracking-wider">Data</td>
            <td className="py-4 px-6 font-bold text-sm text-ugle-slate uppercase tracking-wider">Why / Retention</td>
          </tr>
          <tr className="hover:bg-gray-50/50 transition-colors">
            <td className="py-4 px-6 font-medium text-ugle-slate">Email address</td>
            <td className="py-4 px-6 text-ugle-gray">Licence activation and support. Retained for licence duration.</td>
          </tr>
          <tr className="hover:bg-gray-50/50 transition-colors">
            <td className="py-4 px-6 font-medium text-ugle-slate">Hardware-derived device ID</td>
            <td className="py-4 px-6 text-ugle-gray">Licence validation. Cannot identify you personally.</td>
          </tr>
          <tr className="hover:bg-gray-50/50 transition-colors">
            <td className="py-4 px-6 font-medium text-ugle-slate">Software version + OS</td>
            <td className="py-4 px-6 text-ugle-gray">Update checks (optional). No personal data attached.</td>
          </tr>
          <tr className="hover:bg-gray-50/50 transition-colors">
            <td className="py-4 px-6 font-medium text-ugle-slate">Crash reports</td>
            <td className="py-4 px-6 text-ugle-gray">Opt-in at time of crash. Technical diagnostics only. No file content.</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <h3>What we do not collect</h3>
    <ul className="mb-8">
      <li>Content of any audio or video file.</li>
      <li>Transcripts.</li>
      <li>Search queries.</li>
      <li>Information about which files you have indexed.</li>
      <li>Usage analytics, session duration, or behavioural data.</li>
    </ul>

    <h3>Third-party services</h3>
    <p className="mb-8">Stripe for payment processing. We do not store payment card details. A CDN for installer distribution only — no user content routed through it.</p>
    
    <h3>Your rights</h3>
    <p>Request deletion of your account data (email + licence record) at any time: privacy@ugle.ai. Deletion within 7 business days. Note: deleting account data deactivates your licence.</p>
  </LegalPage>
);

export const Terms = () => (
  <LegalPage title="Terms of Service">
    <h3>1. Acceptance</h3>
    <p>By downloading, installing, or using Ugle, you agree to these Terms. If you do not agree, do not use the software.</p>
    
    <h3>2. Licence grant</h3>
    <p>Non-exclusive, non-transferable licence to install and use Ugle on the number of machines permitted by your tier. Solo: up to two machines owned by the same person. Team: per-seat as defined at purchase.</p>
    
    <h3>3. What you may not do</h3>
    <p>Reverse-engineer, decompile, or modify Ugle. Transfer or resell your licence without prior written consent. Process content you do not have the right to process.</p>
    
    <h3>4. Your content</h3>
    <p>You retain all rights to content you process with Ugle. We do not access, claim, or use your content. See Privacy Policy.</p>

    <h3>5. Refunds</h3>
    <p>Full refund within 30 days of purchase if Ugle does not function as described on a supported OS. Contact support@ugle.ai.</p>

    <h3>6. Warranty disclaimer</h3>
    <p>Ugle is provided 'as is'. We warrant the software will function substantially as described under supported operating conditions.</p>

    <h3>7. Limitation of liability</h3>
    <p>Ugle's liability for any claim is limited to the amount paid in the preceding 12 months.</p>

    <h3>8. Governing law</h3>
    <p>Governed by the laws of [jurisdiction — to be confirmed by legal counsel].</p>

    <p className="mt-8 font-medium text-ugle-slate">Contact: legal@ugle.ai</p>
  </LegalPage>
);
