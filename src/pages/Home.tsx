import React, { useState } from 'react';
import { Search, Home as HomeIcon, Target, Zap, ShieldCheck, X, FileVideo, FileText, Image as ImageIcon, Copy, Check, Play, FolderOpen, ListFilter, Newspaper, Mic2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { showToast } from '../components/Shared';
import { Link } from 'react-router-dom';

const HeroStats = () => {
  return (
    <div className="pt-8 md:pt-12 border-t border-ugle-light/60 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full text-left">
      {[
        { metric: "Accuracy", value: "95%", context: "Across 90+ languages" },
        { metric: "Search", value: "30ms", context: "No network required" },
        { metric: "Languages", value: "90+", context: "Including regional variants" },
        { metric: "Uploads", value: "Zero", context: "Index lives on your machine" }
      ].map((s, idx) => (
        <div key={idx} className="flex flex-col">
          <div className="font-mono text-sm text-ugle-gray/60 uppercase tracking-widest mb-1">{s.metric}</div>
          <div className="font-mono text-3xl md:text-4xl font-bold text-ugle-slate mb-2">{s.value}</div>
          <div className="text-sm text-ugle-gray leading-tight font-medium">{s.context}</div>
        </div>
      ))}
    </div>
  );
};

const PreviewModal = ({ isOpen, onClose, file }: { isOpen: boolean, onClose: () => void, file: any }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-ugle-slate/70 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden border border-ugle-light/60 flex flex-col"
        >
          <div className="px-6 py-4 border-b border-ugle-light/60 flex items-center justify-between bg-[#F8FAF9]">
            <div className="flex items-center gap-3">
              {file?.icon && <file.icon className="w-5 h-5 text-[#75C043]" />}
              <span className="font-semibold text-ugle-slate text-sm font-mono tracking-tight">{file?.file || 'Preview'}</span>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white rounded-md border border-transparent hover:border-ugle-light/60 transition-colors text-ugle-gray hover:text-ugle-slate shadow-sm">
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="p-12 flex flex-col items-center justify-center bg-ugle-slate text-white gap-8 relative overflow-hidden h-[400px]">
             <div className="flex items-center gap-1 opacity-20">
                {[...Array(40)].map((_, i) => (
                  <motion.div 
                    key={i}
                    animate={{ height: [10, Math.random() * 80 + 20, 10] }}
                    transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.05 }}
                    className="w-1.5 bg-[#75C043] rounded-full"
                  />
                ))}
             </div>
             <div className="flex gap-4 z-10 absolute">
                <button className="w-16 h-16 bg-[#75C043] hover:bg-[#86d950] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(117,192,67,0.3)] transition-all transform hover:scale-105">
                   <Play className="w-6 h-6 text-[#1C1C1C] ml-1" />
                </button>
             </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default function Home() {
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [activeItemId, setActiveItemId] = useState<number>(1);
  const [sortMethod, setSortMethod] = useState<'Recent' | 'Name'>('Recent');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  const fileList = [
    { id: 1, file: "Interview_Alex_Final.mp4", type: "Video", icon: FileVideo, path: "/Users/taylor/Projects/Research", time: "10:34 AM", timestamp: 3 },
    { id: 2, file: "Board_Meeting_Q3.wav", type: "Audio", icon: FileVideo, path: "/Users/taylor/Projects/Internal", time: "09:12 AM", timestamp: 2 },
    { id: 3, file: "Source_Call_04.m4a", type: "Audio", icon: FileVideo, path: "/Users/taylor/Projects/Investigations", time: "Yesterday", timestamp: 1 }
  ];

  return (
    <>
      <PreviewModal isOpen={!!selectedFile} onClose={() => setSelectedFile(null)} file={selectedFile} />
      
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-16 md:pt-24 pb-16 md:pb-24 relative z-10 text-center">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col items-center gap-10">
          <div className="space-y-6 flex flex-col items-center">
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.05] text-ugle-slate max-w-4xl">
              Search inside your videos. <br />
              <span className="text-[#75C043] inline-block mt-2">On your machine.</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-ugle-gray leading-relaxed max-w-2xl font-medium">
              Ugle indexes every word spoken in your archive. Search by meaning in 30ms. Nothing leaves your device.
            </motion.p>
          </div>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 items-center w-full justify-center">
            <Link to="/download" className="bg-[#75C043] hover:bg-[#86d950] transition-colors text-[#1C1C1C] font-bold py-4 px-10 rounded-xl shadow-lg hover:shadow-xl text-lg text-center flex items-center justify-center gap-3 w-full sm:w-auto">
              Download Ugle — Free
            </Link>
            <Link to="/how-it-works" className="bg-white hover:bg-gray-50 border-2 border-ugle-light/60 transition-colors text-ugle-slate font-bold py-4 px-10 rounded-xl text-lg text-center flex items-center justify-center gap-2 w-full sm:w-auto hover:border-black/10">
              See how it works &rarr;
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-4 w-full">
             <HeroStats />
          </motion.div>
        </motion.div>
      </section>

      {/* Problem statement */}
      <section className="bg-[#1C1C1C] py-24 md:py-32 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <div className="font-mono text-xs md:text-[13px] tracking-[0.14em] uppercase text-[#75C043] font-medium mb-4">The problem</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">You have the footage. You can't find the moment.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12 text-left">
             <div>
               <div className="w-12 h-1 bg-[#75C043] mb-6"></div>
               <h3 className="font-bold text-2xl md:text-3xl mb-4">Scrubbing tape is a deadline tax.</h3>
               <p className="text-white/70 text-lg leading-relaxed">Scrubbing three hours of tape to find a 40-second soundbite is not a workflow. It's time you don't have before the segment closes.</p>
             </div>
             <div>
               <div className="w-12 h-1 bg-[#75C043] mb-6"></div>
               <h3 className="font-bold text-2xl md:text-3xl mb-4">Cloud tools want your files.</h3>
               <p className="text-white/70 text-lg leading-relaxed">Source recordings are sensitive. The right search tool should not require handing them to a server you don't control.</p>
             </div>
             <div>
               <div className="w-12 h-1 bg-[#75C043] mb-6"></div>
               <h3 className="font-bold text-2xl md:text-3xl mb-4">Your archive grows. Search doesn't.</h3>
               <p className="text-white/70 text-lg leading-relaxed">Five years of recordings. Hundreds of files. No way to search across them by what was actually said. Until now.</p>
             </div>
          </div>
        </div>
      </section>

      {/* How it works - summary */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-20">
            <div className="font-mono text-xs md:text-[13px] tracking-[0.14em] uppercase text-[#5DA233] font-medium mb-4">How it works</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ugle-slate mb-6">Drop a file. Build an index. Search everything inside it.</h2>
          </div>
          
          <div className="space-y-16">
            {[
              { step: "01", action: "Drop a file", desc: "Drag any video or audio file into Ugle. MP4, MOV, MP3, WAV, M4A — all supported." },
              { step: "02", action: "Ugle indexes it", desc: "Speech is transcribed on-device. The index builds locally." },
              { step: "03", action: "Search anything", desc: "Type a word, phrase, or concept. Every matching moment is returned with a timestamp." },
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12 group">
                <div className="font-mono text-5xl font-bold text-ugle-light group-hover:text-[#75C043] transition-colors">{item.step}</div>
                <div className="flex-1 md:pt-2">
                  <h3 className="text-3xl font-bold text-ugle-slate mb-4">{item.action}</h3>
                  <p className="text-xl md:text-2xl text-ugle-gray leading-relaxed max-w-3xl">{item.desc}</p>
                  {i === 1 && (
                     <div className="mt-4 font-mono text-xs md:text-[12.5px] text-ugle-gray bg-[#F8FAF9] border border-ugle-light/60 rounded-lg py-2 px-3 inline-block">
                        ~4 min per hour of audio on Apple M-series
                     </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 pt-10 border-t border-ugle-light/40">
            <Link to="/how-it-works" className="inline-flex items-center text-[#75C043] font-bold text-xl hover:text-[#86d950] transition-colors gap-3">
              Full workflow, including clip extraction <span className="text-2xl leading-none">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Who & Workflow */}
      <section className="py-24 md:py-32 bg-[#F8FAF9]">
        <div className="max-w-5xl mx-auto px-6">
            <div className="mb-16">
              <div className="font-mono text-xs md:text-[13px] tracking-[0.14em] uppercase text-[#5DA233] font-medium mb-4">Built for the way you work</div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ugle-slate mb-6">Three real editorial workflows.</h2>
            </div>
            
            <div className="flex flex-col gap-6 mb-32">
               {[
                 { title: "Newsroom editors", desc: "Find the soundbite before the segment closes. Search 200 hours of archive in seconds.", link: "/use-cases/newsrooms", icon: Newspaper },
                 { title: "Podcast producers", desc: "Pull clips from 300 episodes without listening to any of them.", link: "/use-cases/podcasts", icon: Mic2 },
                 { title: "Journalists", desc: "A private, searchable archive of every source conversation, forever.", link: "/use-cases/journalists", icon: FileText }
               ].map((item, i) => (
                 <Link key={i} to={item.link} className="flex flex-col md:flex-row md:items-center justify-between p-8 md:p-12 bg-white border border-ugle-light/60 hover:border-[#75C043] rounded-3xl transition-all group shadow-sm hover:shadow-xl hover:-translate-y-1">
                   <div className="flex flex-col md:flex-row md:items-center gap-8 mb-6 md:mb-0">
                     <div className="w-16 h-16 bg-[#F8FAF9] text-ugle-slate rounded-2xl flex items-center justify-center group-hover:text-[#75C043] group-hover:bg-[#75C043]/10 transition-colors">
                       <item.icon className="w-8 h-8" />
                     </div>
                     <div>
                       <h3 className="text-2xl md:text-3xl font-bold text-ugle-slate mb-2">{item.title}</h3>
                       <p className="text-ugle-gray text-lg md:text-xl leading-relaxed max-w-xl">{item.desc}</p>
                     </div>
                   </div>
                   <div className="text-[#75C043] font-bold text-lg md:text-xl opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all flex items-center gap-2">
                     Read workflow <span className="text-2xl leading-none">&rarr;</span>
                   </div>
                 </Link>
               ))}
            </div>

            {/* Privacy statement */}
            <div className="mb-32 p-10 md:p-16 bg-[#1C1C1C] rounded-3xl text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#75C043] rounded-full blur-[150px] opacity-20 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                <div className="relative z-10 max-w-2xl">
                  <div className="flex items-center gap-4 mb-8">
                     <ShieldCheck className="w-10 h-10 text-[#75C043]" />
                     <h3 className="text-2xl md:text-3xl font-bold">Architecturally private.</h3>
                  </div>
                  <p className="text-white/80 text-xl md:text-2xl leading-relaxed font-medium">
                    Ugle does not have access to your files. Ever. Indexing runs entirely on your device.
                    No servers receive your transcripts. No telemetry collects your searches. Your archive is yours.
                  </p>
                </div>
            </div>
            
            {/* Final CTA */}
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-ugle-slate mb-8">Index once.<br/>Search forever.</h2>
              <p className="text-xl md:text-2xl text-ugle-gray mb-12 font-medium">macOS and Windows. No account required.</p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link to="/download" className="inline-flex items-center justify-center bg-[#75C043] hover:bg-[#86d950] text-[#1C1C1C] font-bold py-5 px-12 rounded-2xl shadow-lg transition-transform hover:scale-105 text-xl">
                  Download Free
                </Link>
              </div>
            </div>
        </div>
      </section>
    </>
  );
}
