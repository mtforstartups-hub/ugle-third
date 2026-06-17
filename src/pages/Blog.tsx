import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const BlogHub = () => (
  <div className="max-w-4xl mx-auto px-6 py-24 pb-32">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-16 md:mb-24"
    >
      <div className="font-mono text-[13px] tracking-[0.14em] uppercase text-[#5DA233] font-medium mb-3">Blog</div>
      <h1 className="text-[40px] md:text-[62px] font-extrabold tracking-[-0.02em] leading-[1.04] text-ugle-slate mb-4">Thoughts & Workflow.</h1>
      <p className="text-[18px] md:text-[21px] text-ugle-gray max-w-2xl leading-[1.55]">Product thinking. Workflow observations. Opinions on how media professionals work.</p>
    </motion.div>

    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.5 }}
    >
      {[
        { 
          path: "/blog/why-local-first", 
          title: "Why we built Ugle local-first", 
          desc: "The first version of what became Ugle uploaded files to a server. We built it that way because it was easier — existing transcription APIs, no on-device model to maintain, faster to ship...", 
          meta: "4 min read · Product philosophy" 
        },
        { 
          path: "/blog/cost-of-scrubbing-timelines", 
          title: "The real cost of scrubbing timelines", 
          desc: "A documentary editor we spoke to last year spends six to ten hours a week scrubbing through footage to find moments she already knows exist. She has watched most of it once...", 
          meta: "3 min read · Workflow" 
        },
        { 
          path: "/blog/what-transcription-accuracy-means", 
          title: "What 95% transcription accuracy actually means", 
          desc: "We say 95% accuracy. That number is word error rate measured against manually transcribed ground truth across languages, accents, recording conditions, and speaker types...", 
          meta: "5 min read · Product" 
        }
      ].map((post, i) => (
        <Link key={i} to={post.path} className="group block border-t border-ugle-light/60 py-12 transition-colors hover:bg-[#F7F7F5] -mx-6 px-6">
          <div className="text-[13px] font-mono text-ugle-gray mb-3">{post.meta}</div>
          <h2 className="text-[28px] md:text-[32px] font-bold mb-3 text-ugle-slate group-hover:text-[#5DA233] transition-colors leading-[1.2]">{post.title}</h2>
          <p className="text-[17px] text-ugle-gray mb-6 leading-[1.6] max-w-3xl">{post.desc}</p>
          <div className="flex items-center text-[#5DA233] font-bold text-[15px] group-hover:translate-x-1 transition-transform">
            Read post <ArrowRight className="w-4 h-4 ml-1.5" strokeWidth={2.5} />
          </div>
        </Link>
      ))}
    </motion.div>
  </div>
);

const BlogPostLayout = ({ meta, title, children }: { meta: string, title: string, children: React.ReactNode }) => (
  <div className="max-w-3xl mx-auto px-6 py-20 pb-32">
    <Link to="/blog" className="inline-flex items-center text-[15px] font-semibold text-ugle-gray hover:text-[#5DA233] transition-colors mb-12">
      <ArrowRight className="w-4 h-4 mr-2 rotate-180" strokeWidth={2.5} /> Back to Blog
    </Link>
    <div className="text-[13px] font-mono text-ugle-gray mb-4">{meta}</div>
    <h1 className="text-[36px] md:text-[46px] font-extrabold tracking-[-0.02em] mb-12 text-ugle-slate leading-[1.1]">{title}</h1>
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.5 }}
      className="prose prose-lg max-w-none text-[#3A3A3A] prose-p:leading-[1.65] prose-headings:text-[#3A3A3A] prose-headings:font-bold prose-headings:tracking-tight prose-a:text-[#5DA233] prose-a:font-semibold prose-a:no-underline hover:prose-a:underline prose-strong:text-[#3A3A3A] prose-blockquote:border-l-[3px] prose-blockquote:border-[#75C043] prose-blockquote:bg-[#F7F7F5] prose-blockquote:py-3 prose-blockquote:px-6 prose-blockquote:not-italic prose-blockquote:rounded-r-lg prose-blockquote:text-[#3A3A3A] prose-blockquote:font-medium prose-blockquote:text-[20px]"
    >
      {children}
    </motion.div>
  </div>
);

export const BlogPost1 = () => (
  <BlogPostLayout meta="4 min read · Product philosophy" title="Why we built Ugle local-first">
    <p className="text-[20px] text-ugle-gray leading-[1.55] mb-8">The first version of what became Ugle uploaded files to a server. We built it that way because it was easier — existing transcription APIs, no on-device model to maintain, faster to ship.</p>
    <p>We showed it to an investigative journalist we respect. She looked at the interface and said, without hesitating:</p>
    <blockquote>
      "Where does the audio go?"
    </blockquote>
    <p>We told her. She closed the laptop.</p>
    <p>That was the answer. Not the architecture decision — the moment before it. The fact that the first question a professional journalist asked about a tool for her source recordings was about data location told us everything about what kind of tool this needed to be.</p>
    <p>The cloud version worked. Fast, accurate, reasonably priced. It also required trust we had no right to ask for — trust that the server was secure, that data was not being used to train models, that a legal demand would not reveal a source. Not unreasonable conditions for a transcription tool. Unreasonable conditions for a journalism tool.</p>
    <p>On-device transcription was technically harder. Larger models. Tighter engineering constraints. We wrote a custom inference pipeline, managed model distribution, and solved for hardware variation across consumer machines.</p>
    <p>Worth it. Not because local-first is a feature. Because for the workflows Ugle is built for, it is the only architecture that respects the user's actual situation.</p>
    
    <div className="mt-14 p-10 bg-[#3A3A3A] text-white rounded-[1rem] text-center shadow-lg">
      <h3 className="text-[22px] font-bold mb-2 text-white mt-0 border-0">Index once. Search forever.</h3>
      <p className="text-[#c3c5cd] text-[17px] !mb-0 max-w-md mx-auto">Your archive never leaves your machine.</p>
    </div>
  </BlogPostLayout>
);

export const BlogPost2 = () => (
  <BlogPostLayout meta="3 min read · Workflow" title="The real cost of scrubbing timelines">
    <p className="text-[20px] text-ugle-gray leading-[1.55] mb-8">A documentary editor we spoke to last year spends six to ten hours a week scrubbing through footage to find moments she already knows exist.</p>
    <p>She has watched most of it once. She cannot remember timestamps. She scrubs to the rough third of a clip where a subject seemed agitated, plays from there, rewinds, tries again.</p>
    <p>This is not unusual. It is the default workflow for anyone who works with recorded media and has more footage than they can hold in active memory. Which is everyone.</p>
    <p>The problem is not a lack of tools. There are transcription tools. Annotation tools. Summary tools. None of them make the archive searchable the way a text document is searchable.</p>
    <p>When you open a 15,000-word transcript and press Cmd+F, you find every instance of a word in under a second. The entire document is equally accessible. No part is harder to retrieve than any other.</p>
    <p>That is what Ugle does for recorded media. Once indexed, a recording becomes as findable as a text file. Type what you are looking for. 30 milliseconds.</p>
    <div className="mt-12 p-8 bg-[#F7F7F5] rounded-xl border border-ugle-light/60">
      <p className="text-[18px] font-bold text-ugle-slate !m-0 line-height-[1.5]">The editor we mentioned still uses a timeline. She does not have to scrub it anymore.</p>
    </div>
  </BlogPostLayout>
);

export const BlogPost3 = () => (
  <BlogPostLayout meta="5 min read · Product" title="What 95% transcription accuracy actually means">
    <p className="text-[20px] text-ugle-gray leading-[1.55] mb-8">We say 95% accuracy. That number is word error rate measured against manually transcribed ground truth across languages, accents, recording conditions, and speaker types.</p>
    <p>In practice: in a 1,000-word recording, approximately 50 words will be wrong. Errors cluster around proper nouns, field-specific terminology, heavy regional accents, and poor audio quality.</p>
    <p>For search, this matters less than it sounds. You are searching <em>'rent control'</em>, not <em>'Councillor Singh'</em>. The model is unlikely to miss <em>'rent control'</em> in a clean recording.</p>
    <p>For verbatim quotation, always verify against the source. Ugle makes this fast — click any result and the audio plays from that timestamp.</p>
    
    <div className="my-14 border border-ugle-light/60 rounded-[14px] overflow-hidden not-prose shadow-sm">
      <table className="w-full text-left text-[15px] border-collapse bg-white">
        <thead>
          <tr className="bg-[#3A3A3A] text-white">
            <th className="py-3 px-5 font-semibold font-sans w-2/3">Condition</th>
            <th className="py-3 px-5 font-semibold font-sans">Accuracy</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-ugle-light/40">
          <tr className="hover:bg-[#F7F7F5] transition-colors border-l-4 border-l-[#75C043]">
            <td className="py-[14px] px-5 font-medium text-ugle-slate">Studio-quality, single speaker</td>
            <td className="py-[14px] px-5 text-ugle-slate font-mono text-[13.5px]">97–99%</td>
          </tr>
          <tr className="bg-[#F7F7F5] border-l-4 border-l-emerald-500">
            <td className="py-[14px] px-5 font-medium text-ugle-slate">Standard broadcast audio</td>
            <td className="py-[14px] px-5 text-ugle-slate font-mono text-[13.5px]">95–97%</td>
          </tr>
          <tr className="hover:bg-[#F7F7F5] transition-colors border-l-4 border-l-yellow-400">
            <td className="py-[14px] px-5 font-medium text-ugle-slate">Video conference, single speaker</td>
            <td className="py-[14px] px-5 text-ugle-slate font-mono text-[13.5px]">94–96%</td>
          </tr>
          <tr className="bg-[#F7F7F5] border-l-4 border-l-orange-400">
            <td className="py-[14px] px-5 font-medium text-ugle-slate">Phone recording</td>
            <td className="py-[14px] px-5 text-ugle-slate font-mono text-[13.5px]">85–88%</td>
          </tr>
          <tr className="hover:bg-[#F7F7F5] transition-colors border-l-4 border-l-orange-500">
            <td className="py-[14px] px-5 font-medium text-ugle-slate">Multiple overlapping speakers</td>
            <td className="py-[14px] px-5 text-ugle-slate font-mono text-[13.5px]">80–88%</td>
          </tr>
          <tr className="bg-[#F7F7F5] border-l-4 border-l-red-500">
            <td className="py-[14px] px-5 font-medium text-ugle-slate">Consistent background noise (&gt;60dB)</td>
            <td className="py-[14px] px-5 text-ugle-slate font-mono text-[13.5px]">75–85%</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div className="p-[22px] bg-[#F7F7F5] rounded-xl border border-ugle-light/60">
      <p className="text-[14.5px] font-mono text-ugle-gray m-0 leading-relaxed font-medium">
        We benchmark every model update against the same test set. If accuracy drops, we do not ship. The 95% figure is a floor, not an aspiration.
      </p>
    </div>
  </BlogPostLayout>
);
