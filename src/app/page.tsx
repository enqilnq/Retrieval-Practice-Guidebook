'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { 
  Sparkles, Ghost, Lightbulb, CheckCircle2, Lock, Unlock, 
  ArrowDown, PawPrint, MessageCircle, ChevronDown, Rocket, 
  BookOpen, Zap, Target, ArrowRight 
} from 'lucide-react';

export default function UltimateJungleLab() {
  const [level, setLevel] = useState(0);
  const [openTips, setOpenTips] = useState<number[]>([]);
  const [isMyth1Flipped, setIsMyth1Flipped] = useState(false);
  const [isMyth2Flipped, setIsMyth2Flipped] = useState(false);
  const [isMyth3Flipped, setIsMyth3Flipped] = useState(false);
  const [brainDump, setBrainDump] = useState('');
  const [isGymDone, setIsGymDone] = useState(false);

  // 切换 Teacher Tips 的折叠状态
  const toggleTip = (id: number) => {
    setOpenTips(prev => prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]);
  };

  // 统一的翻页函数，附带回到顶部效果
  const goToNextLevel = (nextLevel: number) => {
    setLevel(nextLevel);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F7F9F2] font-mono selection:bg-orange-200 text-[#2D3142]">
      
      {/* 1. 顶部导航与署名 */}
      <nav className="fixed top-0 w-full p-4 z-50">
        <div className="max-w-5xl mx-auto bg-white border-4 border-[#2D3142] rounded-3xl p-3 flex justify-between items-center shadow-[6px_6px_0px_0px_rgba(45,49,66,1)]">
          <div className="flex items-center gap-3 font-black text-xl italic uppercase">
            <div className="bg-orange-400 p-1 rounded-xl border-2 border-[#2D3142]">
               <Image src="/bear1.jpeg" alt="Mascot" width={35} height={35} className="rounded-lg" />
            </div>
            <span>Enqi's Learning Jungle</span>
          </div>
          <div className="flex items-center gap-4 text-right">
            <div className="hidden md:block text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight">
              M.Ed. Portfolio @ UT Austin <br/> Designed by Enqi Li
            </div>
            <div className="flex gap-1.5">
              {[0, 1, 2, 3].map(i => (
                <div key={i} className={`w-4 h-4 rounded-full border-2 border-[#2D3142] transition-colors duration-500 ${level >= i ? 'bg-green-400' : 'bg-slate-200'}`} />
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* 核心内容区：使用 AnimatePresence 实现平滑的页面切换 */}
      <main className="max-w-4xl mx-auto px-6 pt-36 pb-24 min-h-screen">
        <AnimatePresence mode="wait">
          
          {/* ================= SECTION 1: THE MONKEY TRAP ================= */}
          {level === 0 && (
            <motion.section 
              key="section-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="space-y-24 text-center relative py-16"
            >
              <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="relative z-10 space-y-8">
                <div className="inline-block px-6 py-2 bg-yellow-400 border-4 border-[#2D3142] rounded-2xl shadow-[4px_4px_0px_0px_rgba(45,49,66,1)] rotate-[-2deg]">
                  <span className="font-black text-[#2D3142] uppercase tracking-tighter text-sm">Step 01: Jungle Myths</span>
                </div>
                
                <h1 className="text-6xl md:text-9xl font-black text-[#2D3142] leading-[0.85] uppercase tracking-tighter">
                  Pop the <br/>
                  <span className="text-orange-500 underline decoration-wavy decoration-orange-300">Fluency Trap!</span>
                </h1>

                <div className="relative inline-block mt-12 group">
                  <motion.div animate={{ rotate: [ -3, 3, -3] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}>
                    <Image src="/monkey1.jpeg" alt="Monkey Mascot" width={260} height={260} className="rounded-[4rem] border-8 border-white shadow-[15px_15px_0px_0px_rgba(249,147,30,1)] transition-transform group-hover:scale-105 duration-500" />
                  </motion.div>
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute -top-12 -right-16 bg-white border-4 border-[#2D3142] p-4 rounded-3xl shadow-xl font-black text-xs text-[#2D3142] max-w-[150px] rotate-12">
                    "Psst! I have a trick to show you... Ready to be a Brain Explorer?" 🐒
                  </motion.div>
                </div>
              </motion.div>

              <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
                {[
                  { id: 'reading', title: 'Re-reading', icon: '📖', color: 'orange', myth: 'It feels smooth and fast. I must know it!', truth: 'Recognition is NOT storage. Your brain is just being lazy!', idNote: 'Fluency Mistake: Students mistake familiarity for actual mastery.' },
                  { id: 'highlight', title: 'Highlighting', icon: '🖍️', color: 'sky', myth: 'The page is yellow, so I am smart!', truth: 'You are painting the book, not building neural pathways!', idNote: 'Illusion of Learning: Ease of processing doesn’t equal encoding.' },
                  { id: 'cramming', title: 'Cramming', icon: '⏰', color: 'purple', myth: 'One big night will save my grade!', truth: 'Information goes to the "In-Box" and stays there for 1 day.', idNote: 'Spacing Effect: Retrieval must be spread out to survive.' }
                ].map((trap) => (
                  <motion.div key={trap.id} whileHover={{ y: -15 }} className="bg-white border-4 border-[#2D3142] rounded-[3rem] p-8 shadow-[10px_10px_0px_0px_rgba(45,49,66,1)] flex flex-col items-center gap-6 relative group">
                    <div className={`text-6xl bg-${trap.color}-100 w-24 h-24 rounded-full flex items-center justify-center border-4 border-[#2D3142] shadow-inner`}>{trap.icon}</div>
                    <h3 className={`text-3xl font-black text-${trap.color}-500 italic uppercase tracking-tighter`}>{trap.title}</h3>
                    <div className="space-y-4 w-full">
                      <div className="bg-slate-50 p-4 rounded-2xl border-2 border-slate-100 text-sm font-bold text-slate-400 italic">" {trap.myth} "</div>
                      <button onClick={() => toggleTip(trap.id === 'reading' ? 101 : trap.id === 'highlight' ? 102 : 103)} className={`w-full py-4 rounded-2xl border-4 border-[#2D3142] bg-white font-black hover:bg-${trap.color}-500 hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(45,49,66,1)] active:shadow-none active:translate-x-1 active:translate-y-1`}>
                        {openTips.includes(trap.id === 'reading' ? 101 : trap.id === 'highlight' ? 102 : 103) ? "SHRINK TRUTH" : "REVEAL TRUTH"}
                      </button>
                      <AnimatePresence>
                        {openTips.includes(trap.id === 'reading' ? 101 : trap.id === 'highlight' ? 102 : 103) && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pt-4">
                            <p className={`text-${trap.color}-600 font-black italic text-sm leading-relaxed mb-4 underline decoration-2 decoration-${trap.color}-200 underline-offset-4`}>" {trap.truth} "</p>
                            <div className="bg-slate-900 text-white p-4 rounded-2xl text-[10px] text-left uppercase font-bold tracking-widest"><span className="text-yellow-400">ID Note:</span> {trap.idNote}</div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="max-w-4xl mx-auto mt-20 relative">
                <div className="bg-[#FFF4E0] border-8 border-[#2D3142] rounded-[4rem] p-16 shadow-[15px_15px_0px_0px_rgba(249,147,30,1)] relative overflow-hidden group">
                  <motion.div animate={{ y: [0, -20, 0], opacity: [0.2, 0.4, 0.2] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute -top-10 -right-10 text-orange-500"><Ghost size={240} /></motion.div>
                  <div className="relative z-10 space-y-8 text-left">
                    <div className="flex items-center gap-6">
                      <div className="bg-white p-4 rounded-[2rem] border-4 border-[#2D3142] rotate-6 shadow-lg"><Lightbulb size={40} className="text-orange-500 animate-pulse" /></div>
                      <h2 className="text-5xl font-black italic uppercase text-[#2D3142] tracking-tighter">The "Fluency" Ghost</h2>
                    </div>
                    <div className="space-y-6 max-w-2xl">
                      <p className="text-2xl font-bold text-slate-700 leading-relaxed">Psychologists call this the <span className="text-orange-500 underline decoration-4 decoration-orange-200 underline-offset-8">Fluency Trap</span>. Just because something is easy to read, doesn't mean it's stored in long-term memory.</p>
                      <div className="p-6 bg-white border-4 border-dashed border-orange-200 rounded-3xl"><p className="text-lg font-black text-orange-600 italic">"As soon as the book closes, the knowledge starts to fade away..."</p></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="max-w-3xl mx-auto pt-24 px-6">
                <motion.div onClick={() => toggleTip(1)} whileHover={{ scale: 1.02 }} className="bg-white border-4 border-[#2D3142] rounded-[3.5rem] p-10 cursor-pointer shadow-[12px_12px_0px_0px_rgba(45,49,66,1)] hover:shadow-[15px_15px_0px_0px_rgba(45,49,66,1)] transition-all group">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 bg-orange-500 text-white rounded-3xl flex items-center justify-center border-4 border-[#2D3142] shadow-lg rotate-[-5deg] group-hover:rotate-0 transition-transform"><MessageCircle size={32} /></div>
                      <div className="text-left">
                        <h3 className="text-3xl font-black text-[#2D3142] uppercase tracking-tighter">Teacher / Parent Tips</h3>
                        <p className="text-sm font-bold text-orange-400 uppercase tracking-widest italic">The Practitioner's Secret</p>
                      </div>
                    </div>
                    <div className={`p-3 rounded-full border-4 border-[#2D3142] bg-slate-50 transition-transform duration-500 ${openTips.includes(1) ? 'rotate-180' : ''}`}><ChevronDown size={24} /></div>
                  </div>
                  <AnimatePresence>
                    {openTips.includes(1) && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <div className="mt-12 text-left space-y-8 border-t-4 border-dashed border-orange-100 pt-10">
                          <div className="relative p-8 bg-orange-50 rounded-[2.5rem] border-4 border-[#2D3142]">
                            <p className="text-2xl font-black text-[#2D3142] leading-tight italic">"If studying feels <span className="text-red-500 underline decoration-red-200 underline-offset-4 font-black">TOO EASY</span>, you are likely using recognition, not retrieval!"</p>
                            <div className="absolute -bottom-4 -right-4 bg-yellow-300 border-2 border-[#2D3142] px-4 py-1 rounded-full font-bold text-xs">- Golden Rule -</div>
                          </div>
                          <div className="grid md:grid-cols-2 gap-6 text-sm font-bold">
                            <div className="p-5 bg-white border-2 border-slate-100 rounded-2xl"><h4 className="text-orange-500 mb-2 uppercase">How to Help:</h4><p className="text-slate-500 leading-relaxed italic">Challenge them to close the book and draw a 1-minute "Brain Map" instead of highlighting.</p></div>
                            <div className="p-5 bg-white border-2 border-slate-100 rounded-2xl"><h4 className="text-orange-500 mb-2 uppercase">Why it works:</h4><p className="text-slate-500 leading-relaxed italic">Force the brain to PULL information out, which physically modifies and strengthens memory.</p></div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>

              {/* 🏆 跳转按钮：进入第二页 */}
              <div className="pt-20">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => goToNextLevel(1)}
                  className="group relative inline-flex items-center gap-6 bg-[#2D3142] text-white px-12 py-8 rounded-[3rem] font-black text-3xl shadow-[15px_15px_0px_0px_rgba(14,165,233,1)] hover:shadow-[10px_10px_0px_0px_rgba(14,165,233,1)] transition-all"
                >
                  <div className="flex items-center gap-4">
                    <span>Enter Tiger's Gym</span>
                    <motion.div animate={{ x: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}><ArrowRight size={40} className="text-sky-400" /></motion.div>
                  </div>
                  <PawPrint className="absolute -top-6 -right-6 text-orange-500 rotate-12 w-12 h-12" />
                </motion.button>
              </div>
            </motion.section>
          )}

          {/* ================= SECTION 2: THE TIGER GYM ================= */}
          {level === 1 && (
            <motion.section 
              key="section-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="space-y-24"
            >
              <div className="bg-[#E8F9FF] border-4 border-[#2D3142] rounded-[4rem] p-12 shadow-[16px_16px_0px_0px_rgba(45,49,66,1)] relative overflow-hidden">
                <div className="absolute top-10 right-10 opacity-10 rotate-12 -z-0"><PawPrint size={150} className="text-sky-500" /></div>

                <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
                  <motion.div animate={{ scale: [1, 1.05, 1], rotate: [3, -3, 3] }} transition={{ repeat: Infinity, duration: 5 }}>
                    <Image src="/tiger1.jpeg" alt="Tiger Trainer" width={240} height={240} className="rounded-[4rem] border-8 border-white shadow-[12px_12px_0px_0px_rgba(14,165,233,1)]" />
                  </motion.div>
                  <div className="space-y-6 text-center md:text-left max-w-xl">
                    <div className="inline-block px-4 py-1 bg-sky-500 text-white rounded-xl text-xs font-black uppercase tracking-widest border-2 border-[#2D3142]">Step 02: The Retrieval Secret</div>
                    <h2 className="text-5xl md:text-7xl font-black italic uppercase text-[#2D3142] leading-tight">The Secret: <br/><span className="text-sky-600 underline decoration-sky-200">"Pulling Out"</span></h2>
                    <p className="text-xl font-bold text-slate-600 leading-relaxed italic">"Memory is not a bucket you fill; it's a <span className="text-sky-500 font-black">muscle</span> you train!" 🐯</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-20 text-left relative z-10">
                  <div className="bg-white/80 border-4 border-slate-200 rounded-[2.5rem] p-8 space-y-4 opacity-60">
                    <div className="flex items-center gap-3 text-slate-400 font-black italic"><ArrowDown className="rotate-180" /> <h3>Putting In (Encoding)</h3></div>
                    <p className="text-sm font-bold text-slate-400">Listening to lectures, reading books... this is just the beginning. It's necessary, but it doesn't build long-term memory alone.</p>
                  </div>
                  <motion.div whileHover={{ y: -5 }} className="bg-white border-4 border-sky-500 rounded-[2.5rem] p-8 shadow-[8px_8px_0px_0px_rgba(14,165,233,1)] space-y-4 relative">
                    <div className="absolute -top-4 -right-4 bg-orange-400 text-white p-2 rounded-xl border-2 border-[#2D3142] rotate-12 font-black text-xs">THE KEY! ✨</div>
                    <div className="flex items-center gap-3 text-sky-600 font-black italic"><ArrowDown /> <h3>Pulling Out (Retrieval)</h3></div>
                    <p className="text-sm font-bold text-slate-700 leading-relaxed">The <span className="underline decoration-sky-300">ACT of recalling</span> info is what actually changes your brain. Every pull makes the path stronger!</p>
                  </motion.div>
                </div>

                <div className="mt-20 bg-white border-4 border-[#2D3142] rounded-[3.5rem] p-12 shadow-inner relative group">
                  <div className="space-y-4 mb-8">
                    <h3 className="text-3xl font-black text-[#2D3142] italic">Jungle Gym: The Brain Dump</h3>
                    <p className="text-slate-500 font-bold">Instruction: Look away from your notes. What are 3 things that cause the "Fluency Trap"?</p>
                  </div>
                  <div className="relative">
                    <textarea value={brainDump} onChange={(e) => setBrainDump(e.target.value)} className="w-full h-56 p-10 rounded-[3rem] border-4 border-[#2D3142] bg-[#F9FEFF] text-2xl font-bold outline-none focus:ring-12 focus:ring-sky-100 transition-all placeholder:text-slate-200 relative z-10" placeholder="Start your retrieval attempt..." />
                    <AnimatePresence>
                      {brainDump.length > 0 && (
                        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mt-6 flex flex-wrap gap-3">
                          <span className="bg-sky-100 text-sky-600 px-4 py-1 rounded-full text-xs font-black border border-sky-200 animate-pulse">⚡️ NEURAL ENCODING...</span>
                          <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-xs font-black border border-orange-200">🛠️ MODIFYING MEMORY...</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <button onClick={() => { if(brainDump.length > 5) setIsGymDone(true); }} className={`w-full mt-10 py-7 rounded-[2.5rem] font-black text-3xl transition-all flex items-center justify-center gap-4 ${brainDump.length > 5 ? 'bg-[#2D3142] text-white shadow-[8px_8px_0px_0px_rgba(14,165,233,1)] hover:bg-sky-600' : 'bg-slate-100 text-slate-300 border-4 border-dashed border-slate-200 cursor-not-allowed'}`}>
                    {isGymDone ? "PATHWAY STRENGTHENED! 🐯✨" : "FLEX YOUR BRAIN!"}
                  </button>
                  <AnimatePresence>
                    {isGymDone && (
                      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mt-12 bg-green-50 border-4 border-green-500 p-8 rounded-[3rem] text-left flex flex-col md:flex-row gap-8 items-center">
                        <div className="bg-green-500 text-white p-4 rounded-3xl shadow-lg rotate-[-5deg]"><Zap size={40} /></div>
                        <div className="space-y-2">
                          <h4 className="text-2xl font-black text-green-900 italic underline decoration-green-200">"Desirable Difficulty" Unlocked!</h4>
                          <p className="text-green-800 font-bold leading-relaxed">That "struggle" you just felt? It's the literal sound of your brain changing. If it feels hard, you're <span className="font-black italic underline">learning</span>.</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="max-w-3xl mx-auto pt-20 px-4 space-y-8">
                  <motion.div onClick={() => toggleTip(2)} className="bg-white border-4 border-dashed border-sky-400 rounded-[3rem] p-10 cursor-pointer hover:bg-sky-50 transition-all group">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div className="p-4 bg-sky-500 text-white rounded-3xl border-4 border-[#2D3142] rotate-[-5deg] group-hover:rotate-0 transition-transform"><Target size={32} /></div>
                        <div className="text-left"><h3 className="text-2xl font-black text-[#2D3142] uppercase tracking-tighter">Practitioner's Secret Bag</h3><p className="text-xs font-bold text-sky-400 uppercase tracking-widest italic">Chapter 02: Potentiated Learning</p></div>
                      </div>
                      <ChevronDown className={`transition-transform duration-500 text-sky-500 ${openTips.includes(2) ? 'rotate-180' : ''}`} />
                    </div>
                    <AnimatePresence>
                      {openTips.includes(2) && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                          <div className="mt-10 text-left space-y-8 border-t-4 border-dashed border-sky-100 pt-10">
                            <div className="space-y-4"><p className="text-2xl font-black text-[#2D3142] leading-tight italic">"Don't wait until the end! Use <span className="text-sky-600 underline decoration-sky-200 underline-offset-4">Pre-tests</span> on material they haven't even learned yet."</p><p className="text-slate-500 font-bold leading-relaxed">Trying to remember something today makes the brain <span className="text-sky-600 italic">better at soaking up new info</span> tomorrow!</p></div>
                            <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] space-y-4 shadow-xl"><div className="flex items-center gap-2 text-yellow-400 font-black italic uppercase text-xs tracking-widest"><Sparkles size={16} /> Instructional Design Insight</div><p className="text-sm font-medium leading-relaxed text-slate-300 italic">"Testing is often viewed as a summative measurement (Assessment OF learning). However, retrieval practice turns it into a powerful <span className="text-sky-400 font-black">formative strategy (Assessment FOR learning)</span>. It primes the mental schema for future encoding."</p></div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* 🏆 跳转按钮：进入第三页 */}
                  <div className="pt-20 text-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => goToNextLevel(2)}
                      className="group relative inline-flex items-center gap-6 bg-[#2D3142] text-white px-12 py-8 rounded-[3rem] font-black text-3xl shadow-[15px_15px_0px_0px_rgba(34,197,94,1)] hover:shadow-[10px_10px_0px_0px_rgba(34,197,94,1)] transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <span>Deer's Choice Forest</span>
                        <motion.div animate={{ x: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}><ArrowRight size={40} className="text-green-400" /></motion.div>
                      </div>
                      <PawPrint className="absolute -top-6 -right-6 text-green-500 rotate-12 w-12 h-12" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {/* ================= SECTION 3: THE DEER CHALLENGE ================= */}
          {level === 2 && (
            <motion.section 
              key="section-3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="space-y-24"
            >
              <div className="text-center space-y-8 flex flex-col items-center">
                <motion.div initial={{ rotate: -10 }} animate={{ rotate: 0 }} className="relative">
                  <Image src="/deer1.jpeg" alt="Deer" width={200} height={200} className="rounded-full border-8 border-white shadow-[12px_12px_0px_0px_rgba(45,49,66,1)]" />
                  <div className="absolute -bottom-4 -right-6 bg-white border-4 border-[#2D3142] p-3 rounded-2xl shadow-lg font-black text-xs rotate-12">"Don't be tricked!" 🦌</div>
                </motion.div>
                
                <div className="space-y-4">
                  <h2 className="text-5xl md:text-7xl font-black italic uppercase text-[#2D3142]">Reclaiming the MCQ</h2>
                  <p className="text-xl font-bold bg-white border-4 border-[#2D3142] px-8 py-4 rounded-[2rem] shadow-[8px_8px_0px_0px_rgba(34,197,94,0.2)] max-w-2xl mx-auto leading-relaxed">
                    Multiple Choice Questions aren't just for testing. They are <span className="text-green-600 underline decoration-4 underline-offset-4">Retrieval Boosters!</span> 🔍
                  </p>
                </div>
              </div>

              <div className="max-w-3xl mx-auto space-y-6 px-4">
                <div className="bg-white border-4 border-[#2D3142] rounded-[3rem] p-10 shadow-[10px_10px_0px_0px_rgba(45,49,66,1)]">
                  <h3 className="text-2xl font-black mb-10 italic text-center">"Why are 'competitive' wrong answers good for learning?"</h3>
                  
                  <div className="space-y-4">
                    {[
                      { text: "Because they make the test longer.", correct: false, feedback: "The Monkey tricked you! Length doesn't mean learning. 🐒" },
                      { text: "They force the brain to discriminate and retrieve deeply.", correct: true, feedback: "Spot on! This is called 'Discriminative Retrieval'. 🦌✨" },
                      { text: "They are just there to confuse students.", correct: false, feedback: "Not quite! They are there to challenge your memory's precision. 👻" }
                    ].map((ans, i) => (
                      <motion.button
                        key={i}
                        whileHover={{ x: 10 }}
                        onClick={() => toggleTip(200 + i)}
                        className={`w-full p-6 border-4 border-[#2D3142] rounded-[2rem] font-black text-lg text-left flex justify-between items-center transition-all
                          ${openTips.includes(200 + i) 
                            ? (ans.correct ? 'bg-green-100 border-green-600' : 'bg-red-50 border-red-400') 
                            : 'bg-white hover:bg-slate-50 shadow-[5px_5px_0px_0px_rgba(45,49,66,1)]'}`}
                      >
                        <span className="max-w-[80%]">{ans.text}</span>
                        {openTips.includes(200 + i) && (ans.correct ? <CheckCircle2 className="text-green-600" /> : <Ghost className="text-red-400" />)}
                      </motion.button>
                    ))}
                  </div>
                  <AnimatePresence>
                    {openTips.some(id => id >= 200 && id < 300) && (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-8 p-6 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
                        <p className="text-sm font-bold text-slate-600 italic">
                          {openTips.includes(201) ? "ID Insight: By choosing between similar options, students strengthen memory for the related info too!" : "Hint: Look for the answer that mentions 'discrimination'."}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="max-w-2xl mx-auto px-6">
                <div onClick={() => toggleTip(3)} className="bg-green-50 border-4 border-dashed border-green-400 rounded-3xl p-8 cursor-pointer hover:bg-green-100 transition-all group">
                  <div className="flex items-center justify-between font-black uppercase tracking-widest text-green-600">
                    <span className="flex items-center gap-4 text-xl"><Target /> Practitioner's Secret: Recycle Errors</span>
                    <ChevronDown className={`transition-transform duration-500 ${openTips.includes(3) ? 'rotate-180' : ''}`} />
                  </div>
                  <AnimatePresence>
                    {openTips.includes(3) && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} className="mt-8 text-left space-y-6 border-t-2 border-green-200 pt-8">
                        <p className="text-xl font-black text-[#2D3142] leading-relaxed italic">"When writing MCQ distractors, use <span className="text-green-600">common student misconceptions</span> from previous lessons."</p>
                        <div className="bg-white/80 p-6 rounded-2xl border-2 border-green-100"><p className="text-sm font-bold text-green-800">Why it works: This forces students to retrieve and dismiss incorrect info, effectively clearing the path to the correct fact.</p></div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* 🏆 跳转按钮：进入第四页（最后一关） */}
              <div className="pt-20 text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => goToNextLevel(3)}
                  className="group relative inline-flex items-center gap-6 bg-[#2D3142] text-white px-12 py-8 rounded-[3rem] font-black text-3xl shadow-[15px_15px_0px_0px_rgba(249,147,30,1)] hover:shadow-[10px_10px_0px_0px_rgba(249,147,30,1)] transition-all"
                >
                  <div className="flex items-center gap-4">
                    <span>Meet Master Bear</span>
                    <motion.div animate={{ x: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}><ArrowRight size={40} className="text-orange-400" /></motion.div>
                  </div>
                  <PawPrint className="absolute -top-6 -right-6 text-orange-500 rotate-12 w-12 h-12" />
                </motion.button>
              </div>
            </motion.section>
          )}

          {/* ================= SECTION 4: THE MASTER BEAR ================= */}
          {level === 3 && (
            <motion.section 
              key="section-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="space-y-24 pb-32"
            >
              <div className="bg-gradient-to-br from-[#FFB347] to-[#F7931E] border-4 border-[#2D3142] rounded-[5rem] p-16 shadow-[20px_20px_0px_0px_rgba(45,49,66,1)] relative overflow-hidden">
                <div className="flex flex-col items-center text-center space-y-10 relative z-10">
                  <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ repeat: Infinity, duration: 6 }}>
                    <Image src="/bear1.jpeg" alt="Master Bear" width={220} height={220} className="rounded-full border-8 border-white shadow-2xl hover:scale-110 transition-transform" />
                  </motion.div>
                  <div className="space-y-4">
                    <h2 className="text-5xl md:text-7xl font-black text-[#2D3142] italic uppercase leading-none">Feedback: <br/>The Final Step</h2>
                    <p className="text-2xl font-bold text-white text-shadow max-w-2xl mx-auto leading-relaxed italic">"Retrieval is only half the battle. You must know if you were right!" 🐻</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mt-20 relative z-10 text-left">
                  {[
                    { t: "Correcting Errors", d: "Without feedback, students might accidentally 'stamp in' their mistakes." },
                    { t: "Reducing Anxiety", d: "Immediate feedback turns a 'test' into a 'learning tool', lowering stress." },
                    { t: "Meta-cognition", d: "Feedback breaks the 'Illusion of Learning' by showing what you actually know." }
                  ].map((card, i) => (
                    <div key={i} className="bg-white/95 border-4 border-[#2D3142] p-8 rounded-[2.5rem] shadow-lg">
                      <h4 className="font-black text-orange-500 italic text-xl mb-4 leading-tight">{card.t}</h4>
                      <p className="font-bold text-slate-600 text-sm leading-relaxed">{card.d}</p>
                    </div>
                  ))}
                </div>

                <div className="max-w-2xl mx-auto mt-20 relative z-10 text-center">
                  <div onClick={() => toggleTip(4)} className="bg-white border-4 border-dashed border-orange-400 rounded-3xl p-8 cursor-pointer hover:bg-orange-50 transition-all shadow-xl group">
                    <div className="flex justify-between items-center font-black uppercase text-orange-500">
                      <span className="flex items-center gap-4 text-xl"><MessageCircle /> Practitioner's Secret</span>
                      <ChevronDown className={`transition-transform duration-500 ${openTips.includes(4) ? 'rotate-180' : ''}`} />
                    </div>
                    <AnimatePresence>
                      {openTips.includes(4) && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} className="mt-8 text-left border-t-2 border-orange-100 pt-8 space-y-6">
                          <p className="text-2xl font-black text-[#2D3142] italic leading-tight">"Don't let errors linger! Immediate feedback is the <span className="text-orange-500">best way</span> to correct misconceptions before they stick."</p>
                          <div className="bg-orange-900 text-white p-6 rounded-2xl text-xs font-medium italic opacity-90 leading-relaxed tracking-wide">ID Note: Feedback acts as a formative corrective mechanism, ensuring that the neural pathways being reinforced are accurate.</div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* FINAL CHALLENGE: MONDAY */}
              <div className="pt-20 text-center space-y-12">
                <div className="inline-block bg-white border-4 border-[#2D3142] p-4 rounded-3xl rotate-[-3deg] shadow-xl">
                   <h2 className="text-4xl md:text-6xl font-black uppercase text-[#2D3142] tracking-tighter italic">Challenge for <span className="text-orange-500">This Monday</span></h2>
                </div>
                <p className="text-2xl font-bold text-slate-500 max-w-2xl mx-auto leading-relaxed">
                  You don't have to overhaul your entire curriculum today. <br/>
                  <span className="text-[#2D3142] underline decoration-4 decoration-yellow-400">Just try one Brain Dump</span> or one Low-Stakes Quiz.
                </p>
                <div className="flex justify-center">
          
                </div>
                {/* 如果想要给用户一个重新开始的选项，可以加上这个按钮 */}
                <p className="mt-12 text-sm font-bold text-slate-400 cursor-pointer hover:text-orange-500 transition-colors" onClick={() => goToNextLevel(0)}>
                  ↺ Restart the Journey
                </p>
              </div>
            </motion.section>
          )}
          
        </AnimatePresence>
      </main>

      {/* 页脚署名：保持常驻在页面底部 */}
      <footer className="bg-[#2D3142] py-32 text-white rounded-t-[6rem] relative overflow-hidden border-t-8 border-orange-500">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-16 relative z-10 text-center md:text-left">
          <div className="space-y-4">
            <div className="text-5xl font-black italic tracking-tighter">Stay Curious! 🌈</div>
            <p className="text-slate-400 font-bold text-lg">Designed & Engineered by <span className="text-orange-400">Enqi Li</span></p>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-[0.4em]">M.Ed. Portfolio • Instructional Design Lab @ UT Austin</p>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white text-[#2D3142] p-10 rounded-[3rem] border-4 border-orange-400 shadow-2xl font-black text-xl relative max-w-sm">
            <Image src="/bear1.jpeg" alt="Footer Bear" width={70} height={70} className="absolute -top-12 -right-6 rotate-12 rounded-xl border-2 border-[#2D3142]" />
            "Retrieval is the superpower you never knew you had!"
          </motion.div>
        </div>
        <div className="absolute inset-0 opacity-5 flex flex-wrap pointer-events-none">
            {Array(40).fill(0).map((_, i) => <PawPrint key={i} className="m-8 w-12 h-12" />)}
        </div>
      </footer>
    </div>
  );
}