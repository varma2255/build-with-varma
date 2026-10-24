// // "use client";

// // import Link from "next/link";
// // import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react";
// // import { useEffect, useMemo, useState } from "react";

// // type Format = "All" | "Websites" | "Social Media & Banners" | "Product & Brand" | "Events & Conferences" | "Conference Books & Publications" | "Recognition";
// // type GalleryItem = { src: string; title: string; company: string; format: Exclude<Format, "All">; kind: string };

// // const items: GalleryItem[] = [
// //   { src: "/work/websites/innovare-home.png", title: "Innovare Biopharma website", company: "Innovare Biopharma LLP", format: "Websites", kind: "Live website" },
// //   { src: "/work/websites/cstar-home.png", title: "C-STAR Global website", company: "C-STAR Global", format: "Websites", kind: "Website" },
// //   { src: "/work/ecorfy/ai.png", title: "Ecorfy digital presence", company: "Ecorfy Technologies Pvt. Ltd.", format: "Websites", kind: "Website project · visual cover" },
// //   { src: "/work/websites/shreshta-home.png", title: "Shreshta Pickles website", company: "Shreshta Pickles", format: "Websites", kind: "Live website" },

// //   { src: "/work/innovare/samples/hygiene.png", title: "Hygiene in Shrimp Farms", company: "Innovare Biopharma LLP", format: "Social Media & Banners", kind: "Educational social creative" },
// //   { src: "/work/innovare/samples/nutrition.png", title: "Nutrition for Stronger Shrimp", company: "Innovare Biopharma LLP", format: "Social Media & Banners", kind: "Educational social creative" },
// //   { src: "/work/ecorfy/samples/top-generative-ai.png", title: "Top Generative AI Development Company", company: "Ecorfy Technologies Pvt. Ltd.", format: "Social Media & Banners", kind: "Social banner" },
// //   { src: "/work/ecorfy/samples/software-development.png", title: "Software Development Solutions", company: "Ecorfy Technologies Pvt. Ltd.", format: "Social Media & Banners", kind: "Social banner" },
// //   { src: "/work/ecorfy/samples/outdated-software.png", title: "Outdated Software?", company: "Ecorfy Technologies Pvt. Ltd.", format: "Social Media & Banners", kind: "Promotional social banner" },
// //   { src: "/work/ecorfy/samples/digital-marketing.png", title: "Digital Marketing Services", company: "Ecorfy Technologies Pvt. Ltd.", format: "Social Media & Banners", kind: "Service promotion" },
// //   { src: "/work/ecorfy/samples/transform-ideas.png", title: "Transform Ideas · Inspire Creativity · Drive Growth", company: "Ecorfy Technologies Pvt. Ltd.", format: "Social Media & Banners", kind: "Generative AI social creative" },
// //   { src: "/work/ecorfy/samples/generative-ai-ml.png", title: "Generative AI & ML", company: "Ecorfy Technologies Pvt. Ltd.", format: "Social Media & Banners", kind: "Technology social creative" },
// //   { src: "/work/ecorfy/samples/it-professionals-day.png", title: "National IT Professionals Day", company: "Ecorfy Technologies Pvt. Ltd.", format: "Social Media & Banners", kind: "Social campaign" },
// //   { src: "/work/ecorfy/samples/ai-personalization.png", title: "Generative AI & Personalization", company: "Ecorfy Technologies Pvt. Ltd.", format: "Social Media & Banners", kind: "Technology social creative" },
// //   { src: "/work/uploads/AP_Defence_Carousel.jpg", title: "Andhra Pradesh Defence & Aerospace", company: "Portfolio sample", format: "Social Media & Banners", kind: "Carousel template · 7 slides" },
// //   { src: "/work/uploads/India_infrastructure.jpg", title: "India’s AI Infrastructure Race", company: "Portfolio sample", format: "Social Media & Banners", kind: "Carousel template · 7 slides" },
// //   { src: "/work/cstar/cstar-brand-banner.jpg", title: "C-STAR Global branded banner", company: "C-STAR Global", format: "Social Media & Banners", kind: "Brand banner" },
// //   { src: "/work/cstar/women-forum-group-banner.jpg", title: "Global Women Forum speaker banner", company: "C-STAR Global", format: "Social Media & Banners", kind: "Speaker / event banner" },

// //   { src: "/work/innovare/samples/igrowware.png", title: "i.Growware product launch", company: "Innovare Biopharma LLP", format: "Product & Brand", kind: "Product promotion" },
// //   { src: "/work/innovare/samples/igut.png", title: "i.Gut Revive Pro+", company: "Innovare Biopharma LLP", format: "Product & Brand", kind: "Product promotion" },

// //   { src: "/work/cstar/women-forum-2024.jpg", title: "Global Women Forum 2024", company: "C-STAR Global", format: "Events & Conferences", kind: "Event campaign" },
// //   { src: "/work/cstar/women-forum-poster.jpg", title: "Global Women Forum 2024 poster", company: "C-STAR Global", format: "Events & Conferences", kind: "Event poster" },
// //   { src: "/work/cstar/health-forum-poster.jpg", title: "Global Health Forum 2024 poster", company: "C-STAR Global", format: "Events & Conferences", kind: "Event poster" },
// //   { src: "/work/cstar/technology-forum-poster.jpg", title: "Global Technology Forum 2024 poster", company: "C-STAR Global", format: "Events & Conferences", kind: "Event poster" },
// //   { src: "/work/cstar/global-technology-forum-2024.jpg", title: "Global Technology Forum 2024", company: "C-STAR Global", format: "Events & Conferences", kind: "Conference visual" },

// //   { src: "/work/cstar/books-showcase.jpg", title: "Hall of Fame · Books showcase", company: "C-STAR Global", format: "Conference Books & Publications", kind: "Conference publication" },
// //   { src: "/work/uploads/Book_Updated_3_.jpg", title: "World Women & Health Forum 2023 conference book", company: "C-STAR Global", format: "Conference Books & Publications", kind: "Conference book · 73 pages" },

// //   { src: "/work/cstar/books-showcase.jpg", title: "Hall of Fame recognition showcase", company: "C-STAR Global", format: "Recognition", kind: "Recognition / publishing" },
// // ];

// // const formats: Format[] = ["All", "Websites", "Social Media & Banners", "Product & Brand", "Events & Conferences", "Conference Books & Publications", "Recognition"];

// // export default function WorkSamplesPage() {
// //   const [format, setFormat] = useState<Format>("All");
// //   const [selected, setSelected] = useState<number | null>(null);
// //   const visible = useMemo(() => format === "All" ? items : items.filter((item) => item.format === format), [format]);
// //   const selectedItem = selected === null ? null : visible[selected];
// //   const openItem = (item: GalleryItem) => setSelected(visible.findIndex((x) => x.src === item.src && x.title === item.title));
// //   useEffect(() => {
// //     const onKey = (event: KeyboardEvent) => {
// //       if (selected === null) return;
// //       if (event.key === "Escape") setSelected(null);
// //       if (event.key === "ArrowRight") setSelected((selected + 1) % visible.length);
// //       if (event.key === "ArrowLeft") setSelected((selected - 1 + visible.length) % visible.length);
// //     };
// //     window.addEventListener("keydown", onKey);
// //     return () => window.removeEventListener("keydown", onKey);
// //   }, [selected, visible.length]);
// //   const counts = useMemo(() => formats.slice(1).map((name) => ({ name, count: items.filter((item) => item.format === name).length })), []);

// //   return <main className="min-h-screen bg-[#f8f8f6] text-zinc-900">
// //     <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-[#f8f8f6]/90 backdrop-blur-xl">
// //       <div className="mx-auto flex w-[min(1280px,calc(100%-32px))] items-center justify-between py-4">
// //         <Link href="/" className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-zinc-950 text-xs font-bold text-white">AV</span><span><b className="block text-sm">Aditya Varma</b><small className="text-[10px] text-zinc-500">Digital Marketing · Content · Creative</small></span></Link>
// //         <div className="flex items-center gap-4"><span className="hidden text-xs text-zinc-500 sm:block">{items.length} work samples</span><Link href="/" className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2.5 text-xs font-semibold transition hover:border-zinc-400"><ArrowLeft size={14}/> Back to portfolio</Link></div>
// //       </div>
// //     </header>

// //     <section className="mx-auto w-[min(1280px,calc(100%-32px))] pb-8 pt-14 sm:pt-20">
// //       <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.2em] text-violet-600"><span className="h-1.5 w-1.5 rounded-full bg-violet-600"/> Selected work archive</p>
// //       <div className="mt-5 grid gap-6 md:grid-cols-[1fr_330px] md:items-end"><h1 className="max-w-4xl text-5xl font-semibold leading-[.95] tracking-[-.065em] sm:text-7xl">Real work, shown <span className="text-violet-600">clearly.</span></h1><p className="max-w-md text-sm leading-6 text-zinc-600">A tidy, easy-to-browse collection of websites, banners, carousel designs, product creatives, event campaigns and conference publications. Select any sample to view it larger.</p></div>
// //       <div className="mt-9 flex gap-2 overflow-x-auto pb-3">{formats.map((name) => <button key={name} onClick={() => { setFormat(name); setSelected(null); }} className={`shrink-0 rounded-full border px-4 py-2.5 text-xs font-semibold transition ${format === name ? "border-zinc-950 bg-zinc-950 text-white" : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-400 hover:text-zinc-950"}`}>{name}{name !== "All" && <span className={`ml-2 ${format === name ? "text-violet-200" : "text-zinc-400"}`}>{counts.find((x) => x.name === name)?.count}</span>}</button>)}</div>
// //     </section>

// //     <section className="mx-auto w-[min(1280px,calc(100%-32px))] pb-20">
// //       {format === "All" ? formats.slice(1).map((sectionName) => {
// //         const sectionItems = items.filter((item) => item.format === sectionName);
// //         return <div key={sectionName} className="border-t border-zinc-200 py-9 sm:py-12"><div className="mb-6 flex items-end justify-between gap-4"><div><p className="text-[10px] font-semibold uppercase tracking-[.16em] text-zinc-400">{String(sectionItems.length).padStart(2,"0")} samples</p><h2 className="mt-2 text-2xl font-semibold tracking-[-.04em] sm:text-3xl">{sectionName}</h2></div><span className="hidden text-xs text-zinc-400 sm:block">Click a card to view full size ↗</span></div><div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">{sectionItems.map((item) => <GalleryCard key={`${item.src}-${item.title}`} item={item} onOpen={openItem}/>)}</div></div>;
// //       }) : <div className="border-t border-zinc-200 py-9 sm:py-12"><div className="mb-6 flex items-end justify-between gap-4"><div><p className="text-[10px] font-semibold uppercase tracking-[.16em] text-zinc-400">{visible.length} samples</p><h2 className="mt-2 text-2xl font-semibold tracking-[-.04em] sm:text-3xl">{format}</h2></div><button onClick={() => setFormat("All")} className="text-xs font-semibold text-violet-600 hover:text-violet-800">Clear filter</button></div><div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">{visible.map((item) => <GalleryCard key={`${item.src}-${item.title}`} item={item} onOpen={openItem}/>)}</div></div>}
// //       <div className="mt-10 flex flex-wrap gap-3 border-t border-zinc-200 pt-7"><a className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-xs font-semibold text-zinc-700 ring-1 ring-zinc-200 hover:text-violet-700" href="https://innovarebiopharma.com/" target="_blank" rel="noreferrer">Innovare live website <ExternalLink size={13}/></a><a className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-xs font-semibold text-zinc-700 ring-1 ring-zinc-200 hover:text-violet-700" href="https://www.ecorfy.com/" target="_blank" rel="noreferrer">Ecorfy live website <ExternalLink size={13}/></a><a className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-xs font-semibold text-zinc-700 ring-1 ring-zinc-200 hover:text-violet-700" href="https://shreshtapickles.com/" target="_blank" rel="noreferrer">Shreshta Pickles live website <ExternalLink size={13}/></a></div>
// //     </section>

// //     {selectedItem && selected !== null && <div className="fixed inset-0 z-[60] flex items-center justify-center bg-zinc-950/90 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={selectedItem.title} onMouseDown={(event) => { if (event.target === event.currentTarget) setSelected(null); }}><div className="relative flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#f8f8f6] shadow-2xl"><div className="flex items-center justify-between border-b border-zinc-200 px-5 py-4"><div><b className="block text-sm">{selectedItem.title}</b><span className="mt-1 block text-[11px] text-zinc-500">{selectedItem.company} · {selectedItem.kind}</span></div><button onClick={() => setSelected(null)} aria-label="Close" className="grid h-9 w-9 place-items-center rounded-full border border-zinc-200 bg-white"><X size={17}/></button></div><div className="relative flex min-h-0 flex-1 items-center justify-center bg-zinc-100 p-3 sm:p-6"><button onClick={() => setSelected((selected - 1 + visible.length) % visible.length)} aria-label="Previous" className="absolute left-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-white shadow-md"><ChevronLeft size={18}/></button><img src={selectedItem.src} alt={selectedItem.title} className="max-h-[68vh] max-w-full object-contain"/><button onClick={() => setSelected((selected + 1) % visible.length)} aria-label="Next" className="absolute right-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-white shadow-md"><ChevronRight size={18}/></button></div><div className="flex items-center justify-between px-5 py-3 text-[10px] text-zinc-500"><span>Use ← → to browse · Esc to close</span><span>{selected + 1} / {visible.length}</span></div></div></div>}
// //   </main>;
// // }

// // function GalleryCard({ item, onOpen }: { item: GalleryItem; onOpen: (item: GalleryItem) => void }) {
// //   return <button onClick={() => onOpen(item)} aria-label={`Open ${item.title}`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white text-left shadow-[0_4px_18px_rgba(20,20,30,.035)] transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-[0_16px_38px_rgba(35,20,80,.09)]"><div className="flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-[#f1f1ef] p-3 sm:p-4"><img src={item.src} alt={item.title} loading="lazy" className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.025]"/></div><div className="flex flex-1 flex-col p-4"><div className="flex items-center justify-between gap-3"><span className="text-[9px] font-semibold uppercase tracking-[.12em] text-violet-600">{item.format}</span><ArrowRight size={14} className="shrink-0 text-zinc-300 transition group-hover:translate-x-1 group-hover:text-violet-600"/></div><h3 className="mt-2 text-sm font-semibold leading-5 tracking-[-.02em] text-zinc-900">{item.title}</h3><p className="mt-1.5 text-[11px] leading-5 text-zinc-500">{item.company} · {item.kind}</p></div></button>;
// // }

// "use client";
// /* eslint-disable @next/next/no-img-element */

// import Link from "next/link";
// import { AnimatePresence, motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
// import { ArrowLeft, ArrowUpRight, BookOpen, ChevronLeft, ChevronRight, ExternalLink, FileText, GalleryHorizontal, Pause, Play, X } from "lucide-react";
// import { useCallback, useEffect, useMemo, useRef, useState } from "react";

// const EASE = [0.16, 1, 0.3, 1] as const;

// /* ------------------------------------------------------------------ */
// /* THEME + BACKGROUND (same as the main portfolio page)                */
// /* ------------------------------------------------------------------ */

// const CSS = `
// .av-blob{position:fixed;border-radius:9999px;filter:blur(110px);will-change:transform;pointer-events:none}
// @keyframes av-drift-a{0%,100%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(14vw,9vh,0) scale(1.25)}}
// @keyframes av-drift-b{0%,100%{transform:translate3d(0,0,0) scale(1.1)}50%{transform:translate3d(-12vw,-8vh,0) scale(.9)}}
// @keyframes av-drift-c{0%,100%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(-8vw,12vh,0) scale(1.2)}}
// .av-a{animation:av-drift-a 26s ease-in-out infinite}
// .av-b{animation:av-drift-b 32s ease-in-out infinite}
// .av-c{animation:av-drift-c 38s ease-in-out infinite}
// .av-grain{background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");opacity:.07;mix-blend-mode:overlay}
// @keyframes av-spin{to{transform:rotate(360deg)}}
// .av-spin{animation:av-spin 48s linear infinite}
// .av-spin-rev{animation:av-spin 48s linear infinite reverse}
// .av-spin-slow{animation:av-spin 90s linear infinite reverse}
// @keyframes av-pulse{0%,100%{opacity:.55;transform:scale(1)}50%{opacity:.95;transform:scale(1.08)}}
// .av-pulse{animation:av-pulse 6s ease-in-out infinite}
// @keyframes av-shine{0%{background-position:0% 50%}100%{background-position:200% 50%}}
// .av-shine{background-size:200% 100%;animation:av-shine 7s linear infinite}
// @keyframes av-marq{to{transform:translateX(-50%)}}
// .av-marq{display:flex;width:max-content;animation:av-marq 48s linear infinite}
// .av-marq-rev{animation-direction:reverse;animation-duration:56s}
// .av-pausable:hover .av-marq{animation-play-state:paused}
// .av-spot{position:relative}
// .av-spot::before{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;opacity:0;transition:opacity .4s;background:radial-gradient(420px circle at var(--mx,50%) var(--my,50%),rgba(16,185,129,.16),transparent 45%)}
// .av-spot::after{content:"";position:absolute;inset:0;border-radius:inherit;padding:1px;pointer-events:none;opacity:0;transition:opacity .4s;background:radial-gradient(320px circle at var(--mx,50%) var(--my,50%),rgba(110,231,183,.75),transparent 45%);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#000 0 0) content-box exclude,linear-gradient(#000 0 0)}
// .av-spot:hover::before,.av-spot:hover::after{opacity:1}
// .av-outline{-webkit-text-stroke:1px rgba(255,255,255,.22);color:transparent}
// html{scroll-behavior:smooth}
// @media (prefers-reduced-motion:reduce){.av-a,.av-b,.av-c,.av-spin,.av-spin-rev,.av-spin-slow,.av-pulse,.av-shine,.av-marq{animation:none!important}html{scroll-behavior:auto}}
// `;

// function ParticleField() {
//   const ref = useRef<HTMLCanvasElement>(null);
//   useEffect(() => {
//     const canvas = ref.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;
//     const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
//     const dpr = Math.min(window.devicePixelRatio || 1, 2);
//     const mouse = { x: -9999, y: -9999 };
//     type P = { x: number; y: number; vx: number; vy: number; r: number };
//     let ps: P[] = [];
//     let w = 0, h = 0, raf = 0;

//     const init = () => {
//       w = window.innerWidth; h = window.innerHeight;
//       canvas.width = w * dpr; canvas.height = h * dpr;
//       canvas.style.width = `${w}px`; canvas.style.height = `${h}px`;
//       ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
//       const n = Math.min(w < 768 ? 45 : 105, Math.floor((w * h) / 15000));
//       ps = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.28, vy: (Math.random() - 0.5) * 0.28, r: Math.random() * 1.4 + 0.5 }));
//     };

//     const frame = () => {
//       ctx.clearRect(0, 0, w, h);
//       for (let i = 0; i < ps.length; i++) {
//         const p = ps[i];
//         if (!reduce) {
//           p.x += p.vx; p.y += p.vy;
//           if (p.x < -10) p.x = w + 10; else if (p.x > w + 10) p.x = -10;
//           if (p.y < -10) p.y = h + 10; else if (p.y > h + 10) p.y = -10;
//         }
//         const mdx = p.x - mouse.x, mdy = p.y - mouse.y;
//         const md = Math.hypot(mdx, mdy);
//         if (md < 180) {
//           ctx.strokeStyle = `rgba(110,231,183,${(1 - md / 180) * 0.55})`;
//           ctx.lineWidth = 0.8;
//           ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
//           if (!reduce) { p.x += (mdx / md) * 0.35; p.y += (mdy / md) * 0.35; }
//         }
//         for (let j = i + 1; j < ps.length; j++) {
//           const q = ps[j];
//           const d = Math.hypot(p.x - q.x, p.y - q.y);
//           if (d < 125) {
//             ctx.strokeStyle = `rgba(16,185,129,${(1 - d / 125) * 0.28})`;
//             ctx.lineWidth = 0.6;
//             ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
//           }
//         }
//         ctx.fillStyle = "rgba(209,250,229,.75)";
//         ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
//       }
//       if (!reduce) raf = requestAnimationFrame(frame);
//     };

//     const onMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
//     const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };
//     const onResize = () => { init(); if (reduce) frame(); };
//     const onVis = () => { if (document.hidden) cancelAnimationFrame(raf); else if (!reduce) raf = requestAnimationFrame(frame); };

//     init(); frame();
//     window.addEventListener("mousemove", onMove, { passive: true });
//     window.addEventListener("mouseleave", onLeave);
//     window.addEventListener("resize", onResize);
//     document.addEventListener("visibilitychange", onVis);
//     return () => {
//       cancelAnimationFrame(raf);
//       window.removeEventListener("mousemove", onMove);
//       window.removeEventListener("mouseleave", onLeave);
//       window.removeEventListener("resize", onResize);
//       document.removeEventListener("visibilitychange", onVis);
//     };
//   }, []);
//   return <canvas ref={ref} aria-hidden className="fixed inset-0 z-[1] pointer-events-none" />;
// }

// function CursorGlow() {
//   const mx = useMotionValue(-600);
//   const my = useMotionValue(-600);
//   const sx = useSpring(mx, { stiffness: 90, damping: 20, mass: 0.6 });
//   const sy = useSpring(my, { stiffness: 90, damping: 20, mass: 0.6 });
//   const x = useTransform(sx, v => v - 280);
//   const y = useTransform(sy, v => v - 280);
//   useEffect(() => {
//     const move = (e: MouseEvent) => { mx.set(e.clientX); my.set(e.clientY); };
//     window.addEventListener("mousemove", move, { passive: true });
//     return () => window.removeEventListener("mousemove", move);
//   }, [mx, my]);
//   return <motion.div aria-hidden style={{ x, y }} className="pointer-events-none fixed left-0 top-0 z-[2] hidden h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,.17),transparent_62%)] lg:block" />;
// }

// function Backdrop() {
//   return <div aria-hidden className="pointer-events-none fixed inset-0 z-0 bg-[#04100d]">
//     <div className="av-blob av-a -left-[10vw] -top-[12vh] h-[55vw] w-[55vw] max-h-[760px] max-w-[760px] bg-emerald-700/35" />
//     <div className="av-blob av-b -right-[8vw] top-[18vh] h-[48vw] w-[48vw] max-h-[680px] max-w-[680px] bg-cyan-500/20" />
//     <div className="av-blob av-c bottom-[-18vh] left-[22vw] h-[50vw] w-[50vw] max-h-[700px] max-w-[700px] bg-teal-600/20" />
//     <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_72%)]" />
//     <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(7,6,13,.85)_100%)]" />
//   </div>;
// }

// /* ------------------------------------------------------------------ */
// /* PRIMITIVES                                                          */
// /* ------------------------------------------------------------------ */

// function ScrollProgress() {
//   const { scrollYProgress } = useScroll();
//   const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.3 });
//   return <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-300" />;
// }

// const Grad = ({ children }: { children: React.ReactNode }) => <span className="av-shine bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">{children}</span>;

// /* ------------------------------------------------------------------ */
// /* DATA                                                                */
// /* ------------------------------------------------------------------ */

// type Format = "All" | "Websites" | "Social Media & Banners" | "Product & Brand" | "Events & Conferences" | "Conference Books & Publications" | "Recognition";
// type GalleryItem = {
//   src: string; title: string; company: string; format: Exclude<Format, "All">; kind: string;
//   /** "carousel" and "book" open in their own viewer using `pages` */
//   type?: "carousel" | "book";
//   pages?: string[];
//   pdf?: string;
// };

// /**
//  * Carousel / book pages live in /public. Export the PDF once, e.g.
//  *   pdftoppm -jpeg -r 80 your-file.pdf public/work/books/world-women-health-2023/p
//  * which writes p-01.jpg … p-73.jpg (zero-padded to the page count's width).
//  * seq("/work/books/…", 73) then points at those files.
//  */
// const seq = (folder: string, count: number) =>
//   Array.from({ length: count }, (_, i) => `${folder}/p-${String(i + 1).padStart(String(count).length, "0")}.jpg`);

// const items: GalleryItem[] = [
//   { src: "/work/websites/innovare-home.png", title: "Innovare Biopharma website", company: "Innovare Biopharma LLP", format: "Websites", kind: "Live website" },
//   { src: "/work/websites/cstar-home.png", title: "C-STAR Global website", company: "C-STAR Global", format: "Websites", kind: "Website" },
//   { src: "/work/ecorfy/ai.png", title: "Ecorfy digital presence", company: "Ecorfy Technologies Pvt. Ltd.", format: "Websites", kind: "Website project · visual cover" },
//   { src: "/work/websites/shreshta-home.png", title: "Shreshta Pickles website", company: "Shreshta Pickles", format: "Websites", kind: "Live website" },

//   { src: "/work/innovare/samples/hygiene.png", title: "Hygiene in Shrimp Farms", company: "Innovare Biopharma LLP", format: "Social Media & Banners", kind: "Educational social creative" },
//   { src: "/work/innovare/samples/nutrition.png", title: "Nutrition for Stronger Shrimp", company: "Innovare Biopharma LLP", format: "Social Media & Banners", kind: "Educational social creative" },
//   { src: "/work/ecorfy/samples/top-generative-ai.png", title: "Top Generative AI Development Company", company: "Ecorfy Technologies Pvt. Ltd.", format: "Social Media & Banners", kind: "Social banner" },
//   { src: "/work/ecorfy/samples/software-development.png", title: "Software Development Solutions", company: "Ecorfy Technologies Pvt. Ltd.", format: "Social Media & Banners", kind: "Social banner" },
//   { src: "/work/ecorfy/samples/outdated-software.png", title: "Outdated Software?", company: "Ecorfy Technologies Pvt. Ltd.", format: "Social Media & Banners", kind: "Promotional social banner" },
//   { src: "/work/ecorfy/samples/digital-marketing.png", title: "Digital Marketing Services", company: "Ecorfy Technologies Pvt. Ltd.", format: "Social Media & Banners", kind: "Service promotion" },
//   { src: "/work/ecorfy/samples/transform-ideas.png", title: "Transform Ideas · Inspire Creativity · Drive Growth", company: "Ecorfy Technologies Pvt. Ltd.", format: "Social Media & Banners", kind: "Generative AI social creative" },
//   { src: "/work/ecorfy/samples/generative-ai-ml.png", title: "Generative AI & ML", company: "Ecorfy Technologies Pvt. Ltd.", format: "Social Media & Banners", kind: "Technology social creative" },
//   { src: "/work/ecorfy/samples/it-professionals-day.png", title: "National IT Professionals Day", company: "Ecorfy Technologies Pvt. Ltd.", format: "Social Media & Banners", kind: "Social campaign" },
//   { src: "/work/ecorfy/samples/ai-personalization.png", title: "Generative AI & Personalization", company: "Ecorfy Technologies Pvt. Ltd.", format: "Social Media & Banners", kind: "Technology social creative" },
//   { src: "/work/uploads/AP_Defence_Carousel.jpg", title: "Andhra Pradesh Defence & Aerospace", company: "Portfolio sample", format: "Social Media & Banners", kind: "Carousel template · 7 slides", type: "carousel", pages: seq("/work/carousels/ap-defence", 7) },
//   { src: "/work/uploads/India_infrastructure.jpg", title: "India’s AI Infrastructure Race", company: "Portfolio sample", format: "Social Media & Banners", kind: "Carousel template · 7 slides", type: "carousel", pages: seq("/work/carousels/india-ai-infrastructure", 7) },
//   { src: "/work/cstar/cstar-brand-banner.jpg", title: "C-STAR Global branded banner", company: "C-STAR Global", format: "Social Media & Banners", kind: "Brand banner" },
//   { src: "/work/cstar/women-forum-group-banner.jpg", title: "Global Women Forum speaker banner", company: "C-STAR Global", format: "Social Media & Banners", kind: "Speaker / event banner" },

//   { src: "/work/innovare/samples/igrowware.png", title: "i.Growware product launch", company: "Innovare Biopharma LLP", format: "Product & Brand", kind: "Product promotion" },
//   { src: "/work/innovare/samples/igut.png", title: "i.Gut Revive Pro+", company: "Innovare Biopharma LLP", format: "Product & Brand", kind: "Product promotion" },

//   { src: "/work/cstar/women-forum-2024.jpg", title: "Global Women Forum 2024", company: "C-STAR Global", format: "Events & Conferences", kind: "Event campaign" },
//   { src: "/work/cstar/women-forum-poster.jpg", title: "Global Women Forum 2024 poster", company: "C-STAR Global", format: "Events & Conferences", kind: "Event poster" },
//   { src: "/work/cstar/health-forum-poster.jpg", title: "Global Health Forum 2024 poster", company: "C-STAR Global", format: "Events & Conferences", kind: "Event poster" },
//   { src: "/work/cstar/technology-forum-poster.jpg", title: "Global Technology Forum 2024 poster", company: "C-STAR Global", format: "Events & Conferences", kind: "Event poster" },
//   { src: "/work/cstar/global-technology-forum-2024.jpg", title: "Global Technology Forum 2024", company: "C-STAR Global", format: "Events & Conferences", kind: "Conference visual" },

//   { src: "/work/cstar/books-showcase.jpg", title: "Hall of Fame · Books showcase", company: "C-STAR Global", format: "Conference Books & Publications", kind: "Conference publication" },
//   { src: "/work/uploads/Book_Updated_3_.jpg", title: "World Women & Health Forum 2023 conference book", company: "C-STAR Global", format: "Conference Books & Publications", kind: "Conference book · 73 pages", type: "book", pages: seq("/work/books/world-women-health-2023", 73) },

//   { src: "/work/cstar/books-showcase.jpg", title: "Hall of Fame recognition showcase", company: "C-STAR Global", format: "Recognition", kind: "Recognition / publishing" },
// ];

// const formats: Format[] = ["All", "Websites", "Social Media & Banners", "Product & Brand", "Events & Conferences", "Conference Books & Publications", "Recognition"];
// const companyCount = new Set(items.map(i => i.company).filter(c => c !== "Portfolio sample")).size;

// /* ------------------------------------------------------------------ */
// /* SMALL PRIMITIVES                                                    */
// /* ------------------------------------------------------------------ */

// function SpotCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
//   const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     const r = e.currentTarget.getBoundingClientRect();
//     e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
//     e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
//   };
//   return <div onMouseMove={onMove} className={`av-spot ${className}`}>{children}</div>;
// }

// function WordReveal({ text, delay = 0, grad = false }: { text: string; delay?: number; grad?: boolean }) {
//   const reduce = useReducedMotion();
//   return <>{text.split(" ").map((w, i) => <span key={`${w}-${i}`} className="inline-block overflow-hidden pb-[.16em] -mb-[.16em] align-bottom"><motion.span className="inline-block" initial={reduce ? false : { y: "115%", rotate: 5 }} animate={{ y: 0, rotate: 0 }} transition={{ duration: 1, delay: delay + i * 0.09, ease: EASE }}>{grad ? <Grad>{w}</Grad> : w}&nbsp;</motion.span></span>)}</>;
// }

// function useMedia(query: string) {
//   const [m, setM] = useState(() => typeof window !== "undefined" && window.matchMedia(query).matches);
//   useEffect(() => {
//     const mq = window.matchMedia(query);
//     const on = () => setM(mq.matches);
//     on();
//     mq.addEventListener("change", on);
//     return () => mq.removeEventListener("change", on);
//   }, [query]);
//   return m;
// }

// /** Image that never shows a broken icon: optional fallback, then a labelled placeholder. */
// function PageImg({ src, fallback, label, contain = false, className = "" }: { src: string; fallback?: string; label?: number | string; contain?: boolean; className?: string }) {
//   const [useFb, setUseFb] = useState(false);
//   const [bad, setBad] = useState(false);
//   if (bad) {
//     return <div className="grid h-full w-full place-items-center bg-[#0c1f1a] p-4 text-center">
//       <div><FileText className="mx-auto text-emerald-300/70" size={26} /><p className="mt-3 font-mono text-[10px] uppercase tracking-[.16em] text-zinc-300">Page {label}</p><p className="mt-2 break-all font-mono text-[8px] leading-4 text-zinc-500">{src}</p></div>
//     </div>;
//   }
//   return <img src={useFb && fallback ? fallback : src} alt={label ? `Page ${label}` : ""} draggable={false} onError={() => { if (!useFb && fallback) setUseFb(true); else setBad(true); }} className={`h-full w-full select-none ${contain ? "object-contain" : "object-cover"} ${className}`} />;
// }

// /* ------------------------------------------------------------------ */
// /* VIEWERS                                                             */
// /* ------------------------------------------------------------------ */

// function Shell({ title, meta, onClose, footer, children, pdf }: { title: string; meta: string; onClose: () => void; footer?: React.ReactNode; children: React.ReactNode; pdf?: string }) {
//   useEffect(() => {
//     const prev = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     const k = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
//     window.addEventListener("keydown", k);
//     return () => { document.body.style.overflow = prev; window.removeEventListener("keydown", k); };
//   }, [onClose]);
//   return <motion.div role="dialog" aria-modal="true" aria-label={title} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} onMouseDown={e => { if (e.target === e.currentTarget) onClose(); }} className="fixed inset-0 z-[90] flex items-center justify-center bg-[#02080a]/90 p-2 backdrop-blur-xl sm:p-5">
//     <motion.div initial={{ opacity: 0, y: 30, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.97 }} transition={{ duration: 0.45, ease: EASE }} className="relative flex max-h-[94vh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#061310]/95 shadow-[0_40px_120px_rgba(0,0,0,.7),0_0_80px_rgba(16,185,129,.08)]">
//       <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
//         <div className="min-w-0"><b className="block truncate text-sm text-white sm:text-base">{title}</b><span className="mt-1 block truncate font-mono text-[9px] uppercase tracking-[.14em] text-emerald-300/80">{meta}</span></div>
//         <div className="flex shrink-0 items-center gap-2">
//           {pdf && <a href={pdf} target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/[.05] px-4 py-2 text-[11px] font-semibold text-white transition hover:border-emerald-400/60 sm:inline-flex">Open PDF <ExternalLink size={12} /></a>}
//           <button onClick={onClose} aria-label="Close" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/[.06] text-white transition hover:border-emerald-400/60 hover:bg-white/10"><X size={17} /></button>
//         </div>
//       </div>
//       {children}
//       {footer && <div className="border-t border-white/10 px-5 py-3">{footer}</div>}
//     </motion.div>
//   </motion.div>;
// }

// const navBtn = "grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/15 bg-[#0b1f1a]/90 text-white shadow-lg backdrop-blur-md transition hover:border-emerald-400/70 hover:bg-emerald-400/10 disabled:opacity-30 disabled:hover:border-white/15 disabled:hover:bg-[#0b1f1a]/90";

// function Lightbox({ item, pos, total, onPrev, onNext, onClose }: { item: GalleryItem; pos: number; total: number; onPrev: () => void; onNext: () => void; onClose: () => void }) {
//   const [zoom, setZoom] = useState(false);
//   useEffect(() => { setZoom(false); }, [item.src]);
//   useEffect(() => {
//     const k = (e: KeyboardEvent) => { if (e.key === "ArrowRight") onNext(); if (e.key === "ArrowLeft") onPrev(); };
//     window.addEventListener("keydown", k);
//     return () => window.removeEventListener("keydown", k);
//   }, [onNext, onPrev]);
//   return <Shell title={item.title} meta={`${item.company} · ${item.kind}`} onClose={onClose} footer={<div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[.14em] text-zinc-500"><span>← → browse · click image to zoom · esc close</span><span>{pos + 1} / {total}</span></div>}>
//     <div className="relative flex min-h-0 flex-1">
//       <button onClick={onPrev} aria-label="Previous" className={`${navBtn} absolute left-3 top-1/2 z-10 -translate-y-1/2`}><ChevronLeft size={18} /></button>
//       <div className="flex min-h-0 flex-1 overflow-auto p-4 sm:px-20 sm:py-6">
//         <AnimatePresence mode="wait" initial={false}>
//           <motion.img key={item.src + item.title} src={item.src} alt={item.title} onClick={() => setZoom(z => !z)} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.25 }} className={`m-auto rounded-xl shadow-[0_30px_80px_rgba(0,0,0,.6)] ${zoom ? "w-[170%] max-w-none cursor-zoom-out" : "max-h-[66vh] max-w-full cursor-zoom-in object-contain"}`} />
//         </AnimatePresence>
//       </div>
//       <button onClick={onNext} aria-label="Next" className={`${navBtn} absolute right-3 top-1/2 z-10 -translate-y-1/2`}><ChevronRight size={18} /></button>
//     </div>
//   </Shell>;
// }

// function CarouselViewer({ item, pages, onClose, thumbs = true, noun = "slide" }: { item: GalleryItem; pages: string[]; onClose: () => void; thumbs?: boolean; noun?: string }) {
//   const n = pages.length;
//   const [[idx, dir], setPage] = useState<[number, number]>([0, 0]);
//   const [auto, setAuto] = useState(false);
//   const go = useCallback((d: number) => setPage(([i]) => [(i + d + n) % n, d]), [n]);
//   const jump = (i: number) => setPage(([cur]) => [i, i > cur ? 1 : -1]);
//   useEffect(() => {
//     const k = (e: KeyboardEvent) => { if (e.key === "ArrowRight") go(1); if (e.key === "ArrowLeft") go(-1); };
//     window.addEventListener("keydown", k);
//     return () => window.removeEventListener("keydown", k);
//   }, [go]);
//   useEffect(() => {
//     if (!auto) return;
//     const t = setInterval(() => go(1), 3500);
//     return () => clearInterval(t);
//   }, [auto, go]);
//   const variants = {
//     enter: (d: number) => ({ x: d >= 0 ? 180 : -180, opacity: 0, scale: 0.94 }),
//     center: { x: 0, opacity: 1, scale: 1 },
//     exit: (d: number) => ({ x: d >= 0 ? -180 : 180, opacity: 0, scale: 0.94 }),
//   };
//   return <Shell title={item.title} meta={`${item.company} · ${item.kind}`} onClose={onClose} pdf={item.pdf} footer={<div className="space-y-3">
//     <div className="h-1 overflow-hidden rounded-full bg-white/10"><motion.div animate={{ width: `${((idx + 1) / n) * 100}%` }} transition={{ duration: 0.4, ease: EASE }} className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300" /></div>
//     {thumbs && n > 1 && <div className="flex gap-2 overflow-x-auto pb-1">{pages.map((p, i) => <button key={p} onClick={() => jump(i)} aria-label={`Go to ${noun} ${i + 1}`} className={`h-14 w-14 shrink-0 overflow-hidden rounded-lg border transition ${i === idx ? "border-emerald-400 shadow-[0_0_18px_rgba(52,211,153,.5)]" : "border-white/10 opacity-60 hover:opacity-100"}`}><PageImg src={p} fallback={i === 0 ? item.src : undefined} label={i + 1} /></button>)}</div>}
//     <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[.14em] text-zinc-500">
//       <span>← → browse · swipe · esc close</span>
//       <div className="flex items-center gap-4">
//         {thumbs && n > 1 && <button onClick={() => setAuto(a => !a)} className="inline-flex items-center gap-1.5 text-emerald-300 transition hover:text-white">{auto ? <Pause size={12} /> : <Play size={12} />} {auto ? "Pause" : "Autoplay"}</button>}
//         <span>{noun} {idx + 1} / {n}</span>
//       </div>
//     </div>
//   </div>}>
//     <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden px-3 py-4 sm:px-20">
//       <button onClick={() => go(-1)} aria-label="Previous" className={`${navBtn} absolute left-3 z-10`}><ChevronLeft size={18} /></button>
//       <div className="relative h-[60vh] w-full max-w-3xl">
//         <AnimatePresence mode="popLayout" custom={dir} initial={false}>
//           <motion.div key={idx} custom={dir} variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.5, ease: EASE }} drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.25} onDragEnd={(_, info) => { if (info.offset.x < -80) go(1); else if (info.offset.x > 80) go(-1); }} className="absolute inset-0 cursor-grab active:cursor-grabbing">
//             <div className="h-full w-full overflow-hidden rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,.6)]"><PageImg key={pages[idx]} src={pages[idx]} fallback={idx === 0 ? item.src : undefined} label={idx + 1} contain /></div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//       <button onClick={() => go(1)} aria-label="Next" className={`${navBtn} absolute right-3 z-10`}><ChevronRight size={18} /></button>
//     </div>
//   </Shell>;
// }

// function Face({ idx, pages, fallback, side }: { idx: number; pages: string[]; fallback: string; side: "left" | "right" }) {
//   if (idx < 0) return <div className="h-full w-full" />;
//   return <div className={`relative h-full w-full overflow-hidden bg-[#f4f1ea] ${side === "left" ? "rounded-l-md" : "rounded-r-md"}`}>
//     <PageImg key={pages[idx]} src={pages[idx]} fallback={idx === 0 ? fallback : undefined} label={idx + 1} />
//     <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: `linear-gradient(to ${side === "left" ? "left" : "right"}, rgba(0,0,0,.30), transparent 22%)` }} />
//   </div>;
// }

// function FlipBook({ item, pages, onClose }: { item: GalleryItem; pages: string[]; onClose: () => void }) {
//   const reduce = useReducedMotion();
//   const n = pages.length;
//   const spreads = Math.ceil((n - 1) / 2) + 1;
//   const [s, setS] = useState(0);
//   const [flip, setFlip] = useState<null | "next" | "prev">(null);
//   const [ratio, setRatio] = useState(0.72);

//   useEffect(() => {
//     let dead = false;
//     const load = (src: string, fb?: string) => {
//       const im = new window.Image();
//       im.onload = () => { if (!dead && im.naturalHeight) setRatio(im.naturalWidth / im.naturalHeight); };
//       im.onerror = () => { if (fb) load(fb); };
//       im.src = src;
//     };
//     load(pages[0], item.src);
//     return () => { dead = true; };
//   }, [pages, item.src]);

//   const leftOf = (k: number) => (k === 0 ? -1 : 2 * k - 1);
//   const rightOf = (k: number) => (2 * k < n ? 2 * k : -1);
//   const next = useCallback(() => { if (!flip && s < spreads - 1) setFlip("next"); }, [flip, s, spreads]);
//   const prev = useCallback(() => { if (!flip && s > 0) setFlip("prev"); }, [flip, s]);
//   useEffect(() => {
//     const k = (e: KeyboardEvent) => { if (e.key === "ArrowRight") next(); if (e.key === "ArrowLeft") prev(); };
//     window.addEventListener("keydown", k);
//     return () => window.removeEventListener("keydown", k);
//   }, [next, prev]);

//   const dur = reduce ? 0.01 : 0.95;
//   const ease = [0.645, 0.045, 0.355, 1] as const;
//   const staticLeft = flip === "prev" ? leftOf(s - 1) : leftOf(s);
//   const staticRight = flip === "next" ? rightOf(s + 1) : rightOf(s);
//   const H = `min(70vh, 720px, calc((min(100vw, 1152px) - 8rem) / ${2 * ratio}))`;
//   const lastBlankRight = s === spreads - 1 && rightOf(s) === -1;
//   const shift = s === 0 && flip !== "next" ? "-25%" : lastBlankRight && flip !== "prev" ? "25%" : "0%";
//   const label = s === 0 ? `Cover · 1 of ${n}` : `Pages ${2 * s}–${Math.min(2 * s + 1, n)} of ${n}`;

//   return <Shell title={item.title} meta={`${item.company} · ${item.kind}`} onClose={onClose} pdf={item.pdf} footer={<div className="space-y-3">
//     <div className="flex items-center gap-4">
//       <button onClick={prev} disabled={s === 0 || !!flip} aria-label="Previous pages" className={navBtn}><ChevronLeft size={18} /></button>
//       <input type="range" min={0} max={spreads - 1} value={s} disabled={!!flip} onChange={e => setS(Number(e.target.value))} aria-label="Jump to pages" className="h-1 flex-1 cursor-pointer accent-emerald-400" />
//       <button onClick={next} disabled={s >= spreads - 1 || !!flip} aria-label="Next pages" className={navBtn}><ChevronRight size={18} /></button>
//     </div>
//     <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[.14em] text-zinc-500"><span>← → turn page · click a page · esc close</span><span>{label}</span></div>
//   </div>}>
//     <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden px-4 py-8">
//       <motion.div animate={{ x: shift }} transition={{ duration: 0.8, ease: EASE }} className="relative" style={{ height: H, width: `calc(${H} * ${2 * ratio})`, perspective: "2600px" }}>
//         <div className="pointer-events-none absolute -bottom-7 left-[6%] right-[6%] h-8 rounded-[50%] bg-black/70 blur-2xl" />
//         <div className="absolute inset-y-0 left-0 w-1/2" onClick={prev} style={{ cursor: s > 0 ? "w-resize" : "default" }}><Face idx={staticLeft} pages={pages} fallback={item.src} side="left" /></div>
//         <div className="absolute inset-y-0 right-0 w-1/2" onClick={next} style={{ cursor: s < spreads - 1 ? "e-resize" : "default" }}><Face idx={staticRight} pages={pages} fallback={item.src} side="right" /></div>
//         <div className="pointer-events-none absolute inset-y-0 left-1/2 w-8 -translate-x-1/2 bg-gradient-to-r from-transparent via-black/30 to-transparent" />

//         {flip === "next" && <motion.div key={`n${s}`} className="absolute inset-y-0 right-0 w-1/2" style={{ transformOrigin: "left center", transformStyle: "preserve-3d" }} initial={{ rotateY: 0 }} animate={{ rotateY: -180 }} transition={{ duration: dur, ease }} onAnimationComplete={() => { setS(v => v + 1); setFlip(null); }}>
//           <div className="absolute inset-0" style={{ backfaceVisibility: "hidden" }}><Face idx={rightOf(s)} pages={pages} fallback={item.src} side="right" /></div>
//           <div className="absolute inset-0" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}><Face idx={leftOf(s + 1)} pages={pages} fallback={item.src} side="left" /></div>
//         </motion.div>}

//         {flip === "prev" && <motion.div key={`p${s}`} className="absolute inset-y-0 left-0 w-1/2" style={{ transformOrigin: "right center", transformStyle: "preserve-3d" }} initial={{ rotateY: 0 }} animate={{ rotateY: 180 }} transition={{ duration: dur, ease }} onAnimationComplete={() => { setS(v => v - 1); setFlip(null); }}>
//           <div className="absolute inset-0" style={{ backfaceVisibility: "hidden" }}><Face idx={leftOf(s)} pages={pages} fallback={item.src} side="left" /></div>
//           <div className="absolute inset-0" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}><Face idx={rightOf(s - 1)} pages={pages} fallback={item.src} side="right" /></div>
//         </motion.div>}
//       </motion.div>
//     </div>
//   </Shell>;
// }

// function BookViewer({ item, pages, onClose }: { item: GalleryItem; pages: string[]; onClose: () => void }) {
//   const narrow = useMedia("(max-width: 767px)");
//   return narrow ? <CarouselViewer item={item} pages={pages} onClose={onClose} thumbs={false} noun="page" /> : <FlipBook item={item} pages={pages} onClose={onClose} />;
// }

// /* ------------------------------------------------------------------ */
// /* CARD                                                                */
// /* ------------------------------------------------------------------ */

// function GalleryCard({ item, index, onOpen }: { item: GalleryItem; index: number; onOpen: () => void }) {
//   const reduce = useReducedMotion();
//   const isWeb = item.format === "Websites";
//   const t = item.type;
//   const Icon = t === "carousel" ? GalleryHorizontal : t === "book" ? BookOpen : ArrowUpRight;
//   const cta = t === "carousel" ? "Open carousel" : t === "book" ? "Open book" : isWeb ? "View site" : "View larger";
//   return <motion.div className="mb-5 break-inside-avoid" initial={reduce ? false : { opacity: 0, y: 46, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: 0.75, delay: Math.min(index % 6, 5) * 0.05, ease: EASE }}>
//     <SpotCard className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[.04] backdrop-blur-xl transition duration-500 hover:-translate-y-1.5 hover:border-emerald-400/40 hover:shadow-[0_30px_80px_rgba(0,0,0,.5)]">
//       <button onClick={onOpen} aria-label={`${cta}: ${item.title}`} className="block w-full text-left">
//         <div className={`bg-[#06120f]/70 ${t ? "px-6 pb-6 pt-4" : "p-4 pt-3"}`}>
//           <div className="mb-3 flex items-center justify-between gap-2">
//             <span className="font-mono text-[8px] uppercase tracking-[.16em] text-emerald-300/80">{item.format}</span>
//             {t && <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[.12em] text-emerald-200"><Icon size={10} />{t === "book" ? `${item.pages?.length ?? ""} pages` : `${item.pages?.length ?? ""} slides`}</span>}
//           </div>
//           <div className="relative">
//             {t === "carousel" && <>
//               <span aria-hidden className="absolute inset-0 origin-bottom-left rotate-[3deg] rounded-xl border border-white/10 bg-white/10 transition duration-500 group-hover:rotate-[6deg]" />
//               <span aria-hidden className="absolute inset-0 origin-bottom-left rotate-[6deg] rounded-xl border border-white/5 bg-white/5 transition duration-500 group-hover:rotate-[12deg]" />
//             </>}
//             <div className={`relative overflow-hidden rounded-xl ${isWeb ? "border border-white/10 bg-zinc-900" : ""} ${t === "book" ? "shadow-[6px_8px_0_-2px_rgba(255,255,255,.08),0_20px_40px_rgba(0,0,0,.5)]" : ""}`}>
//               {isWeb && <div className="flex items-center gap-1.5 border-b border-white/10 bg-zinc-900 px-3 py-2"><span className="h-2 w-2 rounded-full bg-rose-400/80" /><span className="h-2 w-2 rounded-full bg-amber-300/80" /><span className="h-2 w-2 rounded-full bg-emerald-400/80" /></div>}
//               <img src={item.src} alt={item.title} loading="lazy" className="block h-auto w-full transition duration-700 ease-out group-hover:scale-[1.04]" />
//               {t === "book" && <div className="pointer-events-none absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/45 via-white/10 to-transparent" />}
//               <div className="pointer-events-none absolute inset-0 grid place-items-center bg-black/0 opacity-0 transition duration-300 group-hover:bg-black/45 group-hover:opacity-100">
//                 <span className="flex translate-y-2 flex-col items-center gap-2 transition duration-300 group-hover:translate-y-0"><span className="grid h-12 w-12 place-items-center rounded-full bg-white text-zinc-950 shadow-[0_0_40px_rgba(52,211,153,.5)]"><Icon size={18} /></span><span className="font-mono text-[9px] uppercase tracking-[.16em] text-white">{cta}</span></span>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex items-start justify-between gap-3 p-5">
//           <div className="min-w-0"><h3 className="text-[15px] font-semibold leading-5 tracking-[-.02em] text-white">{item.title}</h3><p className="mt-1.5 text-[11px] leading-5 text-zinc-400">{item.company} · {item.kind}</p></div>
//           <ArrowUpRight size={16} className="mt-0.5 shrink-0 text-zinc-500 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-300" />
//         </div>
//       </button>
//     </SpotCard>
//   </motion.div>;
// }

// /* ------------------------------------------------------------------ */
// /* PAGE                                                                */
// /* ------------------------------------------------------------------ */

// export default function WorkSamplesPage() {
//   const reduce = useReducedMotion();
//   const [format, setFormat] = useState<Format>("All");
//   const [selected, setSelected] = useState<number | null>(null);
//   const [scrolled, setScrolled] = useState(false);
//   const visible = useMemo(() => (format === "All" ? items : items.filter(i => i.format === format)), [format]);
//   const counts = useMemo(() => Object.fromEntries(formats.slice(1).map(n => [n, items.filter(i => i.format === n).length])) as Record<string, number>, []);
//   const item = selected === null ? null : visible[selected] ?? null;
//   const close = useCallback(() => setSelected(null), []);
//   const nextItem = useCallback(() => setSelected(s => (s === null ? s : (s + 1) % visible.length)), [visible.length]);
//   const prevItem = useCallback(() => setSelected(s => (s === null ? s : (s - 1 + visible.length) % visible.length)), [visible.length]);

//   useEffect(() => {
//     const on = () => setScrolled(window.scrollY > 24);
//     on();
//     window.addEventListener("scroll", on, { passive: true });
//     return () => window.removeEventListener("scroll", on);
//   }, []);

//   const stats: [string, string][] = [[String(items.length).padStart(2, "0"), "Work samples"], [String(formats.length - 1).padStart(2, "0"), "Categories"], [String(companyCount).padStart(2, "0"), "Brands"], [String(items.filter(i => i.type).length).padStart(2, "0"), "Carousels & books"]];

//   return <main className="relative min-h-screen overflow-x-clip bg-[#04100d] text-zinc-100 selection:bg-emerald-500/40">
//     <style>{CSS}</style>
//     <Backdrop />
//     <ParticleField />
//     <CursorGlow />
//     <div aria-hidden className="av-grain pointer-events-none fixed inset-0 z-[3]" />
//     <ScrollProgress />

//     <motion.header style={{ x: "-50%" }} initial={{ y: -70, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, delay: 0.1, ease: EASE }} className={`fixed left-1/2 top-4 z-[60] flex w-[min(1180px,calc(100%-20px))] items-center justify-between rounded-2xl border px-3 py-2.5 backdrop-blur-2xl transition-all duration-500 ${scrolled ? "border-white/15 bg-[#09171a]/80 shadow-[0_18px_60px_rgba(0,0,0,.5)]" : "border-white/10 bg-white/[.04]"}`}>
//       <Link href="/" className="flex items-center gap-2.5"><span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-400 text-[10px] font-bold text-white shadow-[0_0_20px_rgba(16,185,129,.5)]">AV</span><span><b className="block text-[11px] leading-none text-white">Aditya Varma</b><small className="mt-1 block text-[7px] uppercase tracking-[.12em] text-zinc-500">Digital Marketing · Content · Creative</small></span></Link>
//       <div className="flex items-center gap-3"><span className="hidden font-mono text-[9px] uppercase tracking-[.14em] text-zinc-400 sm:block">{items.length} work samples</span><Link href="/" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[10px] font-bold text-zinc-950 transition hover:bg-emerald-200"><ArrowLeft size={12} /> <span className="hidden sm:inline">Back to portfolio</span><span className="sm:hidden">Back</span></Link></div>
//     </motion.header>

//     <div className="relative z-10">
//       <section className="mx-auto w-[min(1240px,calc(100%-32px))] pb-10 pt-36 sm:pt-44">
//         <motion.div initial={reduce ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }} className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[.05] px-4 py-2 font-mono text-[10px] uppercase tracking-[.16em] text-zinc-300 backdrop-blur-md"><span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" /></span>Selected work archive</motion.div>
//         <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_.6fr] lg:items-end">
//           <h1 className="text-[clamp(52px,8vw,118px)] font-semibold leading-[.88] tracking-[-.07em] text-white"><WordReveal text="Real work, shown" delay={0.15} /><WordReveal text="clearly." delay={0.55} grad /></h1>
//           <motion.p initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9, ease: EASE }} className="max-w-md text-sm leading-7 text-zinc-400">A browsable collection of websites, banners, carousel designs, product creatives, event campaigns and conference publications. Open any sample to view it larger — carousels and the conference book open page by page.</motion.p>
//         </div>
//         <motion.div initial={reduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 1.05, ease: EASE }} className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl md:grid-cols-4">
//           {stats.map(([n, l]) => <div key={l} className="bg-[#071612]/80 px-6 py-5"><div className="text-3xl font-semibold tracking-[-.05em] text-white sm:text-4xl">{n}</div><p className="mt-2 font-mono text-[9px] uppercase tracking-[.16em] text-zinc-500">{l}</p></div>)}
//         </motion.div>
//       </section>

//       <section className="mx-auto w-[min(1240px,calc(100%-32px))] pb-24">
//         <div className="sticky top-[76px] z-40 -mx-1 mb-8 rounded-2xl border border-white/10 bg-[#04100d]/70 p-2 backdrop-blur-2xl">
//           <div className="flex gap-1.5 overflow-x-auto">
//             {formats.map(name => <button key={name} onClick={() => { setFormat(name); setSelected(null); }} className={`relative shrink-0 rounded-xl px-4 py-2.5 text-[11px] font-semibold transition-colors ${format === name ? "text-zinc-950" : "text-zinc-400 hover:text-white"}`}>
//               {format === name && <motion.span layoutId="filter-pill" transition={{ type: "spring", stiffness: 380, damping: 32 }} className="absolute inset-0 -z-0 rounded-xl bg-white" />}
//               <span className="relative">{name}{name !== "All" && <span className={`ml-2 font-mono text-[9px] ${format === name ? "text-emerald-700" : "text-zinc-500"}`}>{counts[name]}</span>}</span>
//             </button>)}
//           </div>
//         </div>

//         <div key={format} className="columns-1 gap-5 sm:columns-2 lg:columns-3">
//           {visible.map((it, i) => <GalleryCard key={`${it.src}-${it.title}-${i}`} item={it} index={i} onOpen={() => setSelected(i)} />)}
//         </div>

//         <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-white/10 pt-8">
//           <span className="mr-2 font-mono text-[9px] uppercase tracking-[.16em] text-zinc-500">Live websites</span>
//           {[["Innovare Biopharma", "https://innovarebiopharma.com/"], ["Ecorfy", "https://www.ecorfy.com/"], ["Shreshta Pickles", "https://shreshtapickles.com/"]].map(([l, h]) => <motion.a key={h} whileHover={{ y: -2 }} href={h} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.05] px-4 py-2.5 text-xs font-semibold text-white backdrop-blur-md transition-colors hover:border-emerald-400/60">{l} <ExternalLink size={13} /></motion.a>)}
//         </div>
//       </section>
//     </div>

//     <AnimatePresence>
//       {item && selected !== null && (item.type === "book" && item.pages
//         ? <BookViewer key={`b${selected}`} item={item} pages={item.pages} onClose={close} />
//         : item.type === "carousel" && item.pages
//           ? <CarouselViewer key={`c${selected}`} item={item} pages={item.pages} onClose={close} />
//           : <Lightbox key="lb" item={item} pos={selected} total={visible.length} onPrev={prevItem} onNext={nextItem} onClose={close} />)}
//     </AnimatePresence>
//   </main>;
// }
"use client";
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { AnimatePresence, animate, motion, useInView, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowLeft, ArrowUp, ArrowUpRight, BookOpen, ChevronLeft, ChevronRight, ExternalLink, FileText, GalleryHorizontal, Pause, Play, Sparkles, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

/* ------------------------------------------------------------------ */
/* THEME + BACKGROUND                                                  */
/* ------------------------------------------------------------------ */

const CSS = `
.av-blob{position:fixed;border-radius:9999px;filter:blur(110px);will-change:transform;pointer-events:none}
@keyframes av-drift-a{0%,100%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(14vw,9vh,0) scale(1.25)}}
@keyframes av-drift-b{0%,100%{transform:translate3d(0,0,0) scale(1.1)}50%{transform:translate3d(-12vw,-8vh,0) scale(.9)}}
@keyframes av-drift-c{0%,100%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(-8vw,12vh,0) scale(1.2)}}
.av-a{animation:av-drift-a 26s ease-in-out infinite}
.av-b{animation:av-drift-b 32s ease-in-out infinite}
.av-c{animation:av-drift-c 38s ease-in-out infinite}
.av-grain{background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");opacity:.07;mix-blend-mode:overlay}
@keyframes av-spin{to{transform:rotate(360deg)}}
.av-spin{animation:av-spin 48s linear infinite}
.av-spin-rev{animation:av-spin 48s linear infinite reverse}
.av-spin-slow{animation:av-spin 90s linear infinite reverse}
@keyframes av-pulse{0%,100%{opacity:.55;transform:scale(1)}50%{opacity:.95;transform:scale(1.08)}}
.av-pulse{animation:av-pulse 6s ease-in-out infinite}
@keyframes av-shine{0%{background-position:0% 50%}100%{background-position:200% 50%}}
.av-shine{background-size:200% 100%;animation:av-shine 7s linear infinite}
@keyframes av-marq{to{transform:translateX(-50%)}}
.av-marq{display:flex;width:max-content;animation:av-marq 48s linear infinite}
.av-marq-rev{animation-direction:reverse;animation-duration:56s}
.av-pausable:hover .av-marq{animation-play-state:paused}
@keyframes av-float{0%,100%{transform:translateY(0) rotate(var(--r,0deg))}50%{transform:translateY(-12px) rotate(calc(var(--r,0deg) + 2deg))}}
.av-float{animation:av-float 7s ease-in-out infinite}
@keyframes av-ring{0%{transform:scale(.6);opacity:.7}100%{transform:scale(1.5);opacity:0}}
.av-ring{animation:av-ring 4.5s ease-out infinite}
@keyframes av-borderflow{to{background-position:300% 0}}
.av-borderflow{background-size:300% 100%;animation:av-borderflow 6s linear infinite}
.av-spot{position:relative}
.av-spot::before{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;opacity:0;transition:opacity .4s;background:radial-gradient(420px circle at var(--mx,50%) var(--my,50%),rgba(16,185,129,.16),transparent 45%)}
.av-spot::after{content:"";position:absolute;inset:0;border-radius:inherit;padding:1px;pointer-events:none;opacity:0;transition:opacity .4s;background:radial-gradient(320px circle at var(--mx,50%) var(--my,50%),rgba(110,231,183,.75),transparent 45%);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#000 0 0) content-box exclude,linear-gradient(#000 0 0)}
.av-spot:hover::before,.av-spot:hover::after{opacity:1}
.av-sweep{position:relative;overflow:hidden}
.av-sweep::after{content:"";position:absolute;top:0;bottom:0;left:-70%;width:40%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.26),transparent);transform:skewX(-18deg);transition:left .9s cubic-bezier(.16,1,.3,1);pointer-events:none}
.group:hover .av-sweep::after{left:140%}
.av-outline{-webkit-text-stroke:1px rgba(255,255,255,.22);color:transparent}
.av-outline-em{-webkit-text-stroke:1px rgba(110,231,183,.55);color:transparent}
.av-scroll::-webkit-scrollbar{height:6px;width:6px}
.av-scroll::-webkit-scrollbar-thumb{background:rgba(110,231,183,.25);border-radius:9999px}
html{scroll-behavior:smooth}
@media (prefers-reduced-motion:reduce){.av-a,.av-b,.av-c,.av-spin,.av-spin-rev,.av-spin-slow,.av-pulse,.av-shine,.av-marq,.av-float,.av-ring,.av-borderflow{animation:none!important}html{scroll-behavior:auto}}
`;

function ParticleField() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: -9999, y: -9999 };
    type P = { x: number; y: number; vx: number; vy: number; r: number };
    let ps: P[] = [];
    let w = 0, h = 0, raf = 0;

    const init = () => {
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = `${w}px`; canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.min(w < 768 ? 45 : 105, Math.floor((w * h) / 15000));
      ps = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.28, vy: (Math.random() - 0.5) * 0.28, r: Math.random() * 1.4 + 0.5 }));
    };

    const frame = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < ps.length; i++) {
        const p = ps[i];
        if (!reduce) {
          p.x += p.vx; p.y += p.vy;
          if (p.x < -10) p.x = w + 10; else if (p.x > w + 10) p.x = -10;
          if (p.y < -10) p.y = h + 10; else if (p.y > h + 10) p.y = -10;
        }
        const mdx = p.x - mouse.x, mdy = p.y - mouse.y;
        const md = Math.hypot(mdx, mdy);
        if (md < 180) {
          ctx.strokeStyle = `rgba(110,231,183,${(1 - md / 180) * 0.55})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
          if (!reduce) { p.x += (mdx / md) * 0.35; p.y += (mdy / md) * 0.35; }
        }
        for (let j = i + 1; j < ps.length; j++) {
          const q = ps[j];
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 125) {
            ctx.strokeStyle = `rgba(16,185,129,${(1 - d / 125) * 0.28})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
          }
        }
        ctx.fillStyle = "rgba(209,250,229,.75)";
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
      }
      if (!reduce) raf = requestAnimationFrame(frame);
    };

    const onMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };
    const onResize = () => { init(); if (reduce) frame(); };
    const onVis = () => { if (document.hidden) cancelAnimationFrame(raf); else if (!reduce) raf = requestAnimationFrame(frame); };

    init(); frame();
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVis);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);
  return <canvas ref={ref} aria-hidden className="fixed inset-0 z-[1] pointer-events-none" />;
}

function CursorGlow() {
  const mx = useMotionValue(-600);
  const my = useMotionValue(-600);
  const sx = useSpring(mx, { stiffness: 90, damping: 20, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 90, damping: 20, mass: 0.6 });
  const x = useTransform(sx, v => v - 280);
  const y = useTransform(sy, v => v - 280);
  // small, snappier dot + ring that trail the pointer
  const dx = useSpring(mx, { stiffness: 600, damping: 32, mass: 0.2 });
  const dy = useSpring(my, { stiffness: 600, damping: 32, mass: 0.2 });
  const rx = useSpring(mx, { stiffness: 220, damping: 24, mass: 0.5 });
  const ry = useSpring(my, { stiffness: 220, damping: 24, mass: 0.5 });
  const dotX = useTransform(dx, v => v - 3);
  const dotY = useTransform(dy, v => v - 3);
  const ringX = useTransform(rx, v => v - 18);
  const ringY = useTransform(ry, v => v - 18);
  useEffect(() => {
    const move = (e: MouseEvent) => { mx.set(e.clientX); my.set(e.clientY); };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [mx, my]);
  return <>
    <motion.div aria-hidden style={{ x, y }} className="pointer-events-none fixed left-0 top-0 z-[2] hidden h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,.17),transparent_62%)] lg:block" />
    <motion.div aria-hidden style={{ x: ringX, y: ringY }} className="pointer-events-none fixed left-0 top-0 z-[95] hidden h-9 w-9 rounded-full border border-emerald-300/40 lg:block" />
    <motion.div aria-hidden style={{ x: dotX, y: dotY }} className="pointer-events-none fixed left-0 top-0 z-[95] hidden h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,.9)] lg:block" />
  </>;
}

function Backdrop() {
  return <div aria-hidden className="pointer-events-none fixed inset-0 z-0 bg-[#04100d]">
    <div className="av-blob av-a -left-[10vw] -top-[12vh] h-[55vw] w-[55vw] max-h-[760px] max-w-[760px] bg-emerald-700/35" />
    <div className="av-blob av-b -right-[8vw] top-[18vh] h-[48vw] w-[48vw] max-h-[680px] max-w-[680px] bg-cyan-500/20" />
    <div className="av-blob av-c bottom-[-18vh] left-[22vw] h-[50vw] w-[50vw] max-h-[700px] max-w-[700px] bg-teal-600/20" />
    <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_72%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(7,6,13,.85)_100%)]" />
  </div>;
}

/* ------------------------------------------------------------------ */
/* PRIMITIVES                                                          */
/* ------------------------------------------------------------------ */

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.3 });
  return <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-300 shadow-[0_0_14px_rgba(52,211,153,.8)]" />;
}

const Grad = ({ children }: { children: React.ReactNode }) => <span className="av-shine bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">{children}</span>;

/** Count-up number that fires when scrolled into view. */
function Counter({ to, pad = 2 }: { to: number; pad?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReducedMotion();
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    if (reduce) { setV(to); return; }
    const c = animate(0, to, { duration: 1.8, ease: EASE, onUpdate: x => setV(Math.round(x)) });
    return () => c.stop();
  }, [inView, to, reduce]);
  return <span ref={ref}>{String(v).padStart(pad, "0")}</span>;
}

/** Wrapper whose child gently follows the cursor. */
function Magnetic({ children, strength = 0.3 }: { children: React.ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 16, mass: 0.4 });
  const move = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  return <motion.div ref={ref} onMouseMove={move} onMouseLeave={() => { x.set(0); y.set(0); }} style={{ x: sx, y: sy }} className="inline-block">{children}</motion.div>;
}

/* ------------------------------------------------------------------ */
/* DATA                                                                */
/* ------------------------------------------------------------------ */

type Format = "All" | "Websites" | "Social Media & Banners" | "Product & Brand" | "Events & Conferences" | "Conference Books & Publications" | "Recognition";
type GalleryItem = {
  src: string; title: string; company: string; format: Exclude<Format, "All">; kind: string;
  /** "carousel" and "book" open in their own viewer using `pages` */
  type?: "carousel" | "book";
  pages?: string[];
  pdf?: string;
};

/**
 * Carousel / book pages live in /public. Export the PDF once, e.g.
 *   pdftoppm -jpeg -r 80 your-file.pdf public/work/books/world-women-health-2023/p
 * which writes p-01.jpg … p-73.jpg (zero-padded to the page count's width).
 * seq("/work/books/…", 73) then points at those files.
 */
const seq = (folder: string, count: number) =>
  Array.from({ length: count }, (_, i) => `${folder}/p-${String(i + 1).padStart(String(count).length, "0")}.jpg`);

const items: GalleryItem[] = [
  { src: "/work/websites/innovare-home.png", title: "Innovare Biopharma website", company: "Innovare Biopharma LLP", format: "Websites", kind: "Live website" },
  { src: "/work/websites/cstar-home.png", title: "C-STAR Global website", company: "C-STAR Global", format: "Websites", kind: "Website" },
  { src: "/work/ecorfy/ai.png", title: "Ecorfy digital presence", company: "Ecorfy Technologies Pvt. Ltd.", format: "Websites", kind: "Website project · visual cover" },
  { src: "/work/websites/shreshta-home.png", title: "Shreshta Pickles website", company: "Shreshta Pickles", format: "Websites", kind: "Live website" },

  { src: "/work/innovare/samples/hygiene.png", title: "Hygiene in Shrimp Farms", company: "Innovare Biopharma LLP", format: "Social Media & Banners", kind: "Educational social creative" },
  { src: "/work/innovare/samples/nutrition.png", title: "Nutrition for Stronger Shrimp", company: "Innovare Biopharma LLP", format: "Social Media & Banners", kind: "Educational social creative" },
  { src: "/work/ecorfy/samples/top-generative-ai.png", title: "Top Generative AI Development Company", company: "Ecorfy Technologies Pvt. Ltd.", format: "Social Media & Banners", kind: "Social banner" },
  { src: "/work/ecorfy/samples/software-development.png", title: "Software Development Solutions", company: "Ecorfy Technologies Pvt. Ltd.", format: "Social Media & Banners", kind: "Social banner" },
  { src: "/work/ecorfy/samples/outdated-software.png", title: "Outdated Software?", company: "Ecorfy Technologies Pvt. Ltd.", format: "Social Media & Banners", kind: "Promotional social banner" },
  { src: "/work/ecorfy/samples/digital-marketing.png", title: "Digital Marketing Services", company: "Ecorfy Technologies Pvt. Ltd.", format: "Social Media & Banners", kind: "Service promotion" },
  { src: "/work/ecorfy/samples/transform-ideas.png", title: "Transform Ideas · Inspire Creativity · Drive Growth", company: "Ecorfy Technologies Pvt. Ltd.", format: "Social Media & Banners", kind: "Generative AI social creative" },
  { src: "/work/ecorfy/samples/generative-ai-ml.png", title: "Generative AI & ML", company: "Ecorfy Technologies Pvt. Ltd.", format: "Social Media & Banners", kind: "Technology social creative" },
  { src: "/work/ecorfy/samples/it-professionals-day.png", title: "National IT Professionals Day", company: "Ecorfy Technologies Pvt. Ltd.", format: "Social Media & Banners", kind: "Social campaign" },
  { src: "/work/ecorfy/samples/ai-personalization.png", title: "Generative AI & Personalization", company: "Ecorfy Technologies Pvt. Ltd.", format: "Social Media & Banners", kind: "Technology social creative" },
  { src: "/work/uploads/AP_Defence_Carousel.jpg", title: "Andhra Pradesh Defence & Aerospace", company: "Portfolio sample", format: "Social Media & Banners", kind: "Carousel template · 7 slides", type: "carousel", pages: seq("/work/carousels/ap-defence", 7) },
  { src: "/work/uploads/India_infrastructure.jpg", title: "India’s AI Infrastructure Race", company: "Portfolio sample", format: "Social Media & Banners", kind: "Carousel template · 7 slides", type: "carousel", pages: seq("/work/carousels/india-ai-infrastructure", 7) },
  { src: "/work/cstar/cstar-brand-banner.jpg", title: "C-STAR Global branded banner", company: "C-STAR Global", format: "Social Media & Banners", kind: "Brand banner" },
  { src: "/work/cstar/women-forum-group-banner.jpg", title: "Global Women Forum speaker banner", company: "C-STAR Global", format: "Social Media & Banners", kind: "Speaker / event banner" },

  { src: "/work/innovare/samples/igrowware.png", title: "i.Growware product launch", company: "Innovare Biopharma LLP", format: "Product & Brand", kind: "Product promotion" },
  { src: "/work/innovare/samples/igut.png", title: "i.Gut Revive Pro+", company: "Innovare Biopharma LLP", format: "Product & Brand", kind: "Product promotion" },

  { src: "/work/cstar/women-forum-2024.jpg", title: "Global Women Forum 2024", company: "C-STAR Global", format: "Events & Conferences", kind: "Event campaign" },
  { src: "/work/cstar/women-forum-poster.jpg", title: "Global Women Forum 2024 poster", company: "C-STAR Global", format: "Events & Conferences", kind: "Event poster" },
  { src: "/work/cstar/health-forum-poster.jpg", title: "Global Health Forum 2024 poster", company: "C-STAR Global", format: "Events & Conferences", kind: "Event poster" },
  { src: "/work/cstar/technology-forum-poster.jpg", title: "Global Technology Forum 2024 poster", company: "C-STAR Global", format: "Events & Conferences", kind: "Event poster" },
  { src: "/work/cstar/global-technology-forum-2024.jpg", title: "Global Technology Forum 2024", company: "C-STAR Global", format: "Events & Conferences", kind: "Conference visual" },

  { src: "/work/cstar/books-showcase.jpg", title: "Hall of Fame · Books showcase", company: "C-STAR Global", format: "Conference Books & Publications", kind: "Conference publication" },
  { src: "/work/uploads/Book_Updated_3_.jpg", title: "World Women & Health Forum 2023 conference book", company: "C-STAR Global", format: "Conference Books & Publications", kind: "Conference book · 73 pages", type: "book", pages: seq("/work/books/world-women-health-2023", 73) },

  { src: "/work/cstar/books-showcase.jpg", title: "Hall of Fame recognition showcase", company: "C-STAR Global", format: "Recognition", kind: "Recognition / publishing" },
];

const formats: Format[] = ["All", "Websites", "Social Media & Banners", "Product & Brand", "Events & Conferences", "Conference Books & Publications", "Recognition"];
const brands = Array.from(new Set(items.map(i => i.company).filter(c => c !== "Portfolio sample")));
const companyCount = brands.length;

/** One accent colour per category, used for dots, glows and the card underline. */
const ACCENT: Record<Exclude<Format, "All">, string> = {
  Websites: "#34d399",
  "Social Media & Banners": "#22d3ee",
  "Product & Brand": "#a3e635",
  "Events & Conferences": "#fbbf24",
  "Conference Books & Publications": "#fb7185",
  Recognition: "#c4b5fd",
};

/* ------------------------------------------------------------------ */
/* SMALL PRIMITIVES                                                    */
/* ------------------------------------------------------------------ */

/** Card shell: cursor spotlight + border glow + subtle 3D tilt. */
function TiltSpot({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 220, damping: 20, mass: 0.4 });
  const sry = useSpring(ry, { stiffness: 220, damping: 20, mass: 0.4 });
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
    if (!reduce) { ry.set((px - 0.5) * 9); rx.set(-(py - 0.5) * 9); }
  };
  const onLeave = () => { rx.set(0); ry.set(0); };
  return <motion.div onMouseMove={onMove} onMouseLeave={onLeave} whileHover={reduce ? undefined : { y: -8 }} transition={{ duration: 0.4, ease: EASE }} style={{ rotateX: srx, rotateY: sry, transformPerspective: 1100 }} className={`av-spot ${className}`}>{children}</motion.div>;
}

function WordReveal({ text, delay = 0, grad = false }: { text: string; delay?: number; grad?: boolean }) {
  const reduce = useReducedMotion();
  return <>{text.split(" ").map((w, i) => <span key={`${w}-${i}`} className="inline-block overflow-hidden pb-[.16em] -mb-[.16em] align-bottom"><motion.span className="inline-block" initial={reduce ? false : { y: "115%", rotate: 5 }} animate={{ y: 0, rotate: 0 }} transition={{ duration: 1, delay: delay + i * 0.09, ease: EASE }}>{grad ? <Grad>{w}</Grad> : w}&nbsp;</motion.span></span>)}</>;
}

function useMedia(query: string) {
  const [m, setM] = useState(() => typeof window !== "undefined" && window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const on = () => setM(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, [query]);
  return m;
}

/** Image that never shows a broken icon: optional fallback, then a labelled placeholder. */
function PageImg({ src, fallback, label, contain = false, className = "" }: { src: string; fallback?: string; label?: number | string; contain?: boolean; className?: string }) {
  const [useFb, setUseFb] = useState(false);
  const [bad, setBad] = useState(false);
  if (bad) {
    return <div className="grid h-full w-full place-items-center bg-[#0c1f1a] p-4 text-center">
      <div><FileText className="mx-auto text-emerald-300/70" size={26} /><p className="mt-3 font-mono text-[10px] uppercase tracking-[.16em] text-zinc-300">Page {label}</p><p className="mt-2 break-all font-mono text-[8px] leading-4 text-zinc-500">{src}</p></div>
    </div>;
  }
  return <img src={useFb && fallback ? fallback : src} alt={label ? `Page ${label}` : ""} draggable={false} onError={() => { if (!useFb && fallback) setUseFb(true); else setBad(true); }} className={`h-full w-full select-none ${contain ? "object-contain" : "object-cover"} ${className}`} />;
}

/** Decorative rotating orbit used in the hero. */
function Orbit() {
  return <div aria-hidden className="pointer-events-none absolute -right-10 top-4 hidden h-[420px] w-[420px] lg:block">
    <div className="av-ring absolute inset-[18%] rounded-full border border-emerald-300/30" />
    <div className="av-ring absolute inset-[18%] rounded-full border border-emerald-300/30 [animation-delay:2.2s]" />
    <div className="av-spin absolute inset-0 rounded-full border border-dashed border-white/15">
      <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-emerald-300 shadow-[0_0_20px_rgba(110,231,183,.9)]" />
    </div>
    <div className="av-spin-rev absolute inset-[12%] rounded-full border border-white/10">
      <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,.9)]" />
    </div>
    <div className="av-spin-slow absolute inset-[28%] rounded-full border border-dashed border-emerald-300/25">
      <span className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-teal-200 shadow-[0_0_14px_rgba(153,246,228,.9)]" />
    </div>
    <div className="absolute inset-[40%] grid place-items-center rounded-full bg-gradient-to-br from-emerald-400/30 to-cyan-400/20 backdrop-blur-md av-pulse"><Sparkles size={26} className="text-emerald-200" /></div>
  </div>;
}

/** Two opposite-direction marquees: big outline categories + brand pills. */
function MarqueeBand() {
  const cats = formats.slice(1);
  const rowA = [...cats, ...cats];
  const rowB = [...brands, ...brands, ...brands, ...brands];
  return <section aria-hidden className="relative z-10 overflow-hidden border-y border-white/10 bg-white/[.02] py-6 backdrop-blur-sm">
    <div className="av-pausable space-y-5">
      <div className="overflow-hidden"><div className="av-marq">{[0, 1].map(k => <div key={k} className="flex shrink-0 items-center">{rowA.map((c, i) => <span key={`${k}-${i}`} className="flex items-center"><span className={`px-8 text-5xl font-semibold uppercase tracking-[-.04em] sm:text-7xl ${i % 2 ? "av-outline-em" : "av-outline"}`}>{c}</span><Sparkles size={22} className="text-emerald-300/70" /></span>)}</div>)}</div></div>
      <div className="overflow-hidden"><div className="av-marq av-marq-rev">{[0, 1].map(k => <div key={k} className="flex shrink-0 items-center gap-4 pr-4">{rowB.map((b, i) => <span key={`${k}-${i}`} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.05] px-5 py-2 font-mono text-[10px] uppercase tracking-[.16em] text-zinc-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,.9)]" />{b}</span>)}</div>)}</div></div>
    </div>
  </section>;
}

/* ------------------------------------------------------------------ */
/* VIEWERS                                                             */
/* ------------------------------------------------------------------ */

function Shell({ title, meta, onClose, footer, children, pdf }: { title: string; meta: string; onClose: () => void; footer?: React.ReactNode; children: React.ReactNode; pdf?: string }) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", k);
    return () => { document.body.style.overflow = prev; window.removeEventListener("keydown", k); };
  }, [onClose]);
  return <motion.div role="dialog" aria-modal="true" aria-label={title} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} onMouseDown={e => { if (e.target === e.currentTarget) onClose(); }} className="fixed inset-0 z-[90] flex items-center justify-center bg-[#02080a]/90 p-2 backdrop-blur-xl sm:p-5">
    <motion.div initial={{ opacity: 0, y: 40, scale: 0.94, rotateX: 8 }} animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }} exit={{ opacity: 0, y: 20, scale: 0.97 }} transition={{ duration: 0.55, ease: EASE }} style={{ transformPerspective: 1400 }} className="relative flex max-h-[94vh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#061310]/95 shadow-[0_40px_120px_rgba(0,0,0,.7),0_0_80px_rgba(16,185,129,.08)]">
      <div aria-hidden className="av-borderflow absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-300 to-transparent" />
      <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
        <div className="min-w-0"><b className="block truncate text-sm text-white sm:text-base">{title}</b><span className="mt-1 block truncate font-mono text-[9px] uppercase tracking-[.14em] text-emerald-300/80">{meta}</span></div>
        <div className="flex shrink-0 items-center gap-2">
          {pdf && <a href={pdf} target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/[.05] px-4 py-2 text-[11px] font-semibold text-white transition hover:border-emerald-400/60 sm:inline-flex">Open PDF <ExternalLink size={12} /></a>}
          <motion.button whileHover={{ rotate: 90, scale: 1.08 }} whileTap={{ scale: 0.92 }} onClick={onClose} aria-label="Close" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/[.06] text-white transition hover:border-emerald-400/60 hover:bg-white/10"><X size={17} /></motion.button>
        </div>
      </div>
      {children}
      {footer && <div className="border-t border-white/10 px-5 py-3">{footer}</div>}
    </motion.div>
  </motion.div>;
}

const navBtn = "grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/15 bg-[#0b1f1a]/90 text-white shadow-lg backdrop-blur-md transition hover:scale-110 hover:border-emerald-400/70 hover:bg-emerald-400/10 active:scale-95 disabled:opacity-30 disabled:hover:scale-100 disabled:hover:border-white/15 disabled:hover:bg-[#0b1f1a]/90";

function Lightbox({ item, all, pos, onJump, onPrev, onNext, onClose }: { item: GalleryItem; all: GalleryItem[]; pos: number; onJump: (i: number) => void; onPrev: () => void; onNext: () => void; onClose: () => void }) {
  const [zoom, setZoom] = useState(false);
  const stripRef = useRef<HTMLDivElement>(null);
  useEffect(() => { setZoom(false); }, [item.src]);
  useEffect(() => {
    const k = (e: KeyboardEvent) => { if (e.key === "ArrowRight") onNext(); if (e.key === "ArrowLeft") onPrev(); };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [onNext, onPrev]);
  useEffect(() => {
    const el = stripRef.current?.children[pos] as HTMLElement | undefined;
    el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [pos]);
  const accent = ACCENT[item.format];
  return <Shell title={item.title} meta={`${item.company} · ${item.kind}`} onClose={onClose} footer={<div className="space-y-3">
    <div ref={stripRef} className="av-scroll flex gap-2 overflow-x-auto pb-1">{all.map((it, i) => <button key={`${it.src}-${i}`} onClick={() => onJump(i)} aria-label={`Open ${it.title}`} className={`h-12 w-12 shrink-0 overflow-hidden rounded-lg border transition ${i === pos ? "scale-110 border-emerald-400 shadow-[0_0_18px_rgba(52,211,153,.5)]" : "border-white/10 opacity-50 hover:opacity-100"}`}><img src={it.src} alt="" loading="lazy" draggable={false} className="h-full w-full object-cover" /></button>)}</div>
    <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[.14em] text-zinc-500"><span>← → browse · swipe · click image to zoom · esc close</span><span>{pos + 1} / {all.length}</span></div>
  </div>}>
    <div className="relative flex min-h-0 flex-1">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-40" style={{ background: `radial-gradient(60% 50% at 50% 55%, ${accent}33, transparent 70%)` }} />
      <button onClick={onPrev} aria-label="Previous" className={`${navBtn} absolute left-3 top-1/2 z-10 -translate-y-1/2`}><ChevronLeft size={18} /></button>
      <div className="relative flex min-h-0 flex-1 overflow-auto p-4 sm:px-20 sm:py-6">
        <AnimatePresence mode="wait" initial={false}>
          <motion.img key={item.src + item.title} src={item.src} alt={item.title} onClick={() => setZoom(z => !z)} drag={zoom ? false : "x"} dragConstraints={{ left: 0, right: 0 }} dragElastic={0.3} onDragEnd={(_, info) => { if (info.offset.x < -90) onNext(); else if (info.offset.x > 90) onPrev(); }} initial={{ opacity: 0, scale: 0.94, filter: "blur(8px)" }} animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} exit={{ opacity: 0, scale: 0.98, filter: "blur(6px)" }} transition={{ duration: 0.3 }} className={`m-auto rounded-xl shadow-[0_30px_80px_rgba(0,0,0,.6)] ${zoom ? "w-[170%] max-w-none cursor-zoom-out" : "max-h-[62vh] max-w-full cursor-zoom-in object-contain"}`} />
        </AnimatePresence>
      </div>
      <button onClick={onNext} aria-label="Next" className={`${navBtn} absolute right-3 top-1/2 z-10 -translate-y-1/2`}><ChevronRight size={18} /></button>
    </div>
  </Shell>;
}

function CarouselViewer({ item, pages, onClose, thumbs = true, noun = "slide" }: { item: GalleryItem; pages: string[]; onClose: () => void; thumbs?: boolean; noun?: string }) {
  const n = pages.length;
  const [[idx, dir], setPage] = useState<[number, number]>([0, 0]);
  const [auto, setAuto] = useState(false);
  const go = useCallback((d: number) => setPage(([i]) => [(i + d + n) % n, d]), [n]);
  const jump = (i: number) => setPage(([cur]) => [i, i > cur ? 1 : -1]);
  useEffect(() => {
    const k = (e: KeyboardEvent) => { if (e.key === "ArrowRight") go(1); if (e.key === "ArrowLeft") go(-1); };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [go]);
  useEffect(() => {
    if (!auto) return;
    const t = setInterval(() => go(1), 3500);
    return () => clearInterval(t);
  }, [auto, go]);
  const variants = {
    enter: (d: number) => ({ x: d >= 0 ? 180 : -180, opacity: 0, scale: 0.94, rotateY: d >= 0 ? 18 : -18 }),
    center: { x: 0, opacity: 1, scale: 1, rotateY: 0 },
    exit: (d: number) => ({ x: d >= 0 ? -180 : 180, opacity: 0, scale: 0.94, rotateY: d >= 0 ? -18 : 18 }),
  };
  return <Shell title={item.title} meta={`${item.company} · ${item.kind}`} onClose={onClose} pdf={item.pdf} footer={<div className="space-y-3">
    <div className="h-1 overflow-hidden rounded-full bg-white/10"><motion.div animate={{ width: `${((idx + 1) / n) * 100}%` }} transition={{ duration: 0.4, ease: EASE }} className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 shadow-[0_0_12px_rgba(52,211,153,.8)]" /></div>
    {thumbs && n > 1 && <div className="av-scroll flex gap-2 overflow-x-auto pb-1">{pages.map((p, i) => <button key={p} onClick={() => jump(i)} aria-label={`Go to ${noun} ${i + 1}`} className={`h-14 w-14 shrink-0 overflow-hidden rounded-lg border transition ${i === idx ? "scale-110 border-emerald-400 shadow-[0_0_18px_rgba(52,211,153,.5)]" : "border-white/10 opacity-60 hover:opacity-100"}`}><PageImg src={p} fallback={i === 0 ? item.src : undefined} label={i + 1} /></button>)}</div>}
    <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[.14em] text-zinc-500">
      <span>← → browse · swipe · esc close</span>
      <div className="flex items-center gap-4">
        {thumbs && n > 1 && <button onClick={() => setAuto(a => !a)} className="inline-flex items-center gap-1.5 text-emerald-300 transition hover:text-white">{auto ? <Pause size={12} /> : <Play size={12} />} {auto ? "Pause" : "Autoplay"}</button>}
        <span>{noun} {idx + 1} / {n}</span>
      </div>
    </div>
  </div>}>
    <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden px-3 py-4 sm:px-20" style={{ perspective: 1600 }}>
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(55%_50%_at_50%_55%,rgba(16,185,129,.22),transparent_70%)]" />
      <button onClick={() => go(-1)} aria-label="Previous" className={`${navBtn} absolute left-3 z-10`}><ChevronLeft size={18} /></button>
      <div className="relative h-[60vh] w-full max-w-3xl">
        <AnimatePresence mode="popLayout" custom={dir} initial={false}>
          <motion.div key={idx} custom={dir} variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.55, ease: EASE }} drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.25} onDragEnd={(_, info) => { if (info.offset.x < -80) go(1); else if (info.offset.x > 80) go(-1); }} className="absolute inset-0 cursor-grab active:cursor-grabbing">
            <div className="h-full w-full overflow-hidden rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,.6)]"><PageImg key={pages[idx]} src={pages[idx]} fallback={idx === 0 ? item.src : undefined} label={idx + 1} contain /></div>
          </motion.div>
        </AnimatePresence>
      </div>
      <button onClick={() => go(1)} aria-label="Next" className={`${navBtn} absolute right-3 z-10`}><ChevronRight size={18} /></button>
    </div>
  </Shell>;
}

function Face({ idx, pages, fallback, side }: { idx: number; pages: string[]; fallback: string; side: "left" | "right" }) {
  if (idx < 0) return <div className="h-full w-full" />;
  return <div className={`relative h-full w-full overflow-hidden bg-[#f4f1ea] ${side === "left" ? "rounded-l-md" : "rounded-r-md"}`}>
    <PageImg key={pages[idx]} src={pages[idx]} fallback={idx === 0 ? fallback : undefined} label={idx + 1} />
    <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: `linear-gradient(to ${side === "left" ? "left" : "right"}, rgba(0,0,0,.30), transparent 22%)` }} />
  </div>;
}

function FlipBook({ item, pages, onClose }: { item: GalleryItem; pages: string[]; onClose: () => void }) {
  const reduce = useReducedMotion();
  const n = pages.length;
  const spreads = Math.ceil((n - 1) / 2) + 1;
  const [s, setS] = useState(0);
  const [flip, setFlip] = useState<null | "next" | "prev">(null);
  const [ratio, setRatio] = useState(0.72);

  useEffect(() => {
    let dead = false;
    const load = (src: string, fb?: string) => {
      const im = new window.Image();
      im.onload = () => { if (!dead && im.naturalHeight) setRatio(im.naturalWidth / im.naturalHeight); };
      im.onerror = () => { if (fb) load(fb); };
      im.src = src;
    };
    load(pages[0], item.src);
    return () => { dead = true; };
  }, [pages, item.src]);

  const leftOf = (k: number) => (k === 0 ? -1 : 2 * k - 1);
  const rightOf = (k: number) => (2 * k < n ? 2 * k : -1);
  const next = useCallback(() => { if (!flip && s < spreads - 1) setFlip("next"); }, [flip, s, spreads]);
  const prev = useCallback(() => { if (!flip && s > 0) setFlip("prev"); }, [flip, s]);
  useEffect(() => {
    const k = (e: KeyboardEvent) => { if (e.key === "ArrowRight") next(); if (e.key === "ArrowLeft") prev(); };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [next, prev]);

  const dur = reduce ? 0.01 : 0.95;
  const ease = [0.645, 0.045, 0.355, 1] as const;
  const staticLeft = flip === "prev" ? leftOf(s - 1) : leftOf(s);
  const staticRight = flip === "next" ? rightOf(s + 1) : rightOf(s);
  const H = `min(70vh, 720px, calc((min(100vw, 1152px) - 8rem) / ${2 * ratio}))`;
  const lastBlankRight = s === spreads - 1 && rightOf(s) === -1;
  const shift = s === 0 && flip !== "next" ? "-25%" : lastBlankRight && flip !== "prev" ? "25%" : "0%";
  const label = s === 0 ? `Cover · 1 of ${n}` : `Pages ${2 * s}–${Math.min(2 * s + 1, n)} of ${n}`;

  return <Shell title={item.title} meta={`${item.company} · ${item.kind}`} onClose={onClose} pdf={item.pdf} footer={<div className="space-y-3">
    <div className="flex items-center gap-4">
      <button onClick={prev} disabled={s === 0 || !!flip} aria-label="Previous pages" className={navBtn}><ChevronLeft size={18} /></button>
      <input type="range" min={0} max={spreads - 1} value={s} disabled={!!flip} onChange={e => setS(Number(e.target.value))} aria-label="Jump to pages" className="h-1 flex-1 cursor-pointer accent-emerald-400" />
      <button onClick={next} disabled={s >= spreads - 1 || !!flip} aria-label="Next pages" className={navBtn}><ChevronRight size={18} /></button>
    </div>
    <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[.14em] text-zinc-500"><span>← → turn page · click a page · esc close</span><span>{label}</span></div>
  </div>}>
    <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden px-4 py-8">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(55%_50%_at_50%_55%,rgba(16,185,129,.22),transparent_70%)]" />
      <motion.div animate={{ x: shift }} transition={{ duration: 0.8, ease: EASE }} className="relative" style={{ height: H, width: `calc(${H} * ${2 * ratio})`, perspective: "2600px" }}>
        <div className="pointer-events-none absolute -bottom-7 left-[6%] right-[6%] h-8 rounded-[50%] bg-black/70 blur-2xl" />
        <div className="absolute inset-y-0 left-0 w-1/2" onClick={prev} style={{ cursor: s > 0 ? "w-resize" : "default" }}><Face idx={staticLeft} pages={pages} fallback={item.src} side="left" /></div>
        <div className="absolute inset-y-0 right-0 w-1/2" onClick={next} style={{ cursor: s < spreads - 1 ? "e-resize" : "default" }}><Face idx={staticRight} pages={pages} fallback={item.src} side="right" /></div>
        <div className="pointer-events-none absolute inset-y-0 left-1/2 w-8 -translate-x-1/2 bg-gradient-to-r from-transparent via-black/30 to-transparent" />

        {flip === "next" && <motion.div key={`n${s}`} className="absolute inset-y-0 right-0 w-1/2" style={{ transformOrigin: "left center", transformStyle: "preserve-3d" }} initial={{ rotateY: 0 }} animate={{ rotateY: -180 }} transition={{ duration: dur, ease }} onAnimationComplete={() => { setS(v => v + 1); setFlip(null); }}>
          <div className="absolute inset-0" style={{ backfaceVisibility: "hidden" }}><Face idx={rightOf(s)} pages={pages} fallback={item.src} side="right" /></div>
          <div className="absolute inset-0" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}><Face idx={leftOf(s + 1)} pages={pages} fallback={item.src} side="left" /></div>
        </motion.div>}

        {flip === "prev" && <motion.div key={`p${s}`} className="absolute inset-y-0 left-0 w-1/2" style={{ transformOrigin: "right center", transformStyle: "preserve-3d" }} initial={{ rotateY: 0 }} animate={{ rotateY: 180 }} transition={{ duration: dur, ease }} onAnimationComplete={() => { setS(v => v - 1); setFlip(null); }}>
          <div className="absolute inset-0" style={{ backfaceVisibility: "hidden" }}><Face idx={leftOf(s)} pages={pages} fallback={item.src} side="left" /></div>
          <div className="absolute inset-0" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}><Face idx={rightOf(s - 1)} pages={pages} fallback={item.src} side="right" /></div>
        </motion.div>}
      </motion.div>
    </div>
  </Shell>;
}

function BookViewer({ item, pages, onClose }: { item: GalleryItem; pages: string[]; onClose: () => void }) {
  const narrow = useMedia("(max-width: 767px)");
  return narrow ? <CarouselViewer item={item} pages={pages} onClose={onClose} thumbs={false} noun="page" /> : <FlipBook item={item} pages={pages} onClose={onClose} />;
}

/* ------------------------------------------------------------------ */
/* CARD                                                                */
/* ------------------------------------------------------------------ */

function GalleryCard({ item, index, onOpen }: { item: GalleryItem; index: number; onOpen: () => void }) {
  const reduce = useReducedMotion();
  const isWeb = item.format === "Websites";
  const t = item.type;
  const accent = ACCENT[item.format];
  const Icon = t === "carousel" ? GalleryHorizontal : t === "book" ? BookOpen : ArrowUpRight;
  const cta = t === "carousel" ? "Open carousel" : t === "book" ? "Open book" : isWeb ? "View site" : "View larger";
  return <motion.div className="mb-5 break-inside-avoid" initial={reduce ? false : { opacity: 0, y: 60, scale: 0.94, filter: "blur(10px)" }} whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: 0.85, delay: Math.min(index % 6, 5) * 0.06, ease: EASE }}>
    <TiltSpot className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[.04] backdrop-blur-xl transition-[border-color,box-shadow] duration-500 hover:border-emerald-400/40 hover:shadow-[0_30px_80px_rgba(0,0,0,.5)]">
      <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-0 blur-3xl transition duration-700 group-hover:opacity-40" style={{ background: accent }} />
      <button onClick={onOpen} aria-label={`${cta}: ${item.title}`} className="block w-full text-left">
        <div className={`bg-[#06120f]/70 ${t ? "px-6 pb-6 pt-4" : "p-4 pt-3"}`}>
          <div className="mb-3 flex items-center justify-between gap-2">
            <span className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[.16em] text-emerald-300/80"><span className="h-1.5 w-1.5 rounded-full" style={{ background: accent, boxShadow: `0 0 10px ${accent}` }} />{item.format}</span>
            {t
              ? <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[.12em] text-emerald-200"><Icon size={10} />{t === "book" ? `${item.pages?.length ?? ""} pages` : `${item.pages?.length ?? ""} slides`}</span>
              : <span className="font-mono text-[9px] tracking-[.14em] text-zinc-600 transition group-hover:text-emerald-300/80">{String(index + 1).padStart(2, "0")}</span>}
          </div>
          <div className="relative">
            {t === "carousel" && <>
              <span aria-hidden className="absolute inset-0 origin-bottom-left rotate-[3deg] rounded-xl border border-white/10 bg-white/10 transition duration-500 group-hover:rotate-[7deg]" />
              <span aria-hidden className="absolute inset-0 origin-bottom-left rotate-[6deg] rounded-xl border border-white/5 bg-white/5 transition duration-500 group-hover:rotate-[14deg]" />
            </>}
            <div className={`av-sweep relative overflow-hidden rounded-xl ${isWeb ? "border border-white/10 bg-zinc-900" : ""} ${t === "book" ? "shadow-[6px_8px_0_-2px_rgba(255,255,255,.08),0_20px_40px_rgba(0,0,0,.5)]" : ""}`}>
              {isWeb && <div className="flex items-center gap-1.5 border-b border-white/10 bg-zinc-900 px-3 py-2"><span className="h-2 w-2 rounded-full bg-rose-400/80" /><span className="h-2 w-2 rounded-full bg-amber-300/80" /><span className="h-2 w-2 rounded-full bg-emerald-400/80" /><span className="ml-3 h-3.5 flex-1 rounded-full bg-white/[.06]" /></div>}
              <img src={item.src} alt={item.title} loading="lazy" className="block h-auto w-full transition duration-700 ease-out group-hover:scale-[1.06]" />
              {t === "book" && <div className="pointer-events-none absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/45 via-white/10 to-transparent" />}
              <div className="pointer-events-none absolute inset-0 grid place-items-center bg-black/0 opacity-0 transition duration-300 group-hover:bg-black/50 group-hover:opacity-100">
                <span className="flex translate-y-3 flex-col items-center gap-2 transition duration-500 group-hover:translate-y-0"><span className="grid h-12 w-12 place-items-center rounded-full bg-white text-zinc-950 shadow-[0_0_40px_rgba(52,211,153,.6)]"><Icon size={18} /></span><span className="font-mono text-[9px] uppercase tracking-[.16em] text-white">{cta}</span></span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-between gap-3 p-5">
          <div className="min-w-0"><h3 className="text-[15px] font-semibold leading-5 tracking-[-.02em] text-white">{item.title}</h3><p className="mt-1.5 text-[11px] leading-5 text-zinc-400">{item.company} · {item.kind}</p></div>
          <ArrowUpRight size={16} className="mt-0.5 shrink-0 text-zinc-500 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-300" />
        </div>
        <span aria-hidden className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 transition-transform duration-700 ease-out group-hover:scale-x-100" style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }} />
      </button>
    </TiltSpot>
  </motion.div>;
}

/* ------------------------------------------------------------------ */
/* PAGE                                                                */
/* ------------------------------------------------------------------ */

export default function WorkSamplesPage() {
  const reduce = useReducedMotion();
  const [format, setFormat] = useState<Format>("All");
  const [selected, setSelected] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const visible = useMemo(() => (format === "All" ? items : items.filter(i => i.format === format)), [format]);
  const counts = useMemo(() => Object.fromEntries(formats.slice(1).map(n => [n, items.filter(i => i.format === n).length])) as Record<string, number>, []);
  const item = selected === null ? null : visible[selected] ?? null;
  const close = useCallback(() => setSelected(null), []);
  const nextItem = useCallback(() => setSelected(s => (s === null ? s : (s + 1) % visible.length)), [visible.length]);
  const prevItem = useCallback(() => setSelected(s => (s === null ? s : (s - 1 + visible.length) % visible.length)), [visible.length]);

  // hero parallax
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -70]);
  const heroFade = useTransform(scrollY, [0, 420], [1, 0.25]);

  useEffect(() => {
    const on = () => { setScrolled(window.scrollY > 24); setShowTop(window.scrollY > 700); };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const stats: [number, string][] = [[items.length, "Work samples"], [formats.length - 1, "Categories"], [companyCount, "Brands"], [items.filter(i => i.type).length, "Carousels & books"]];

  return <main className="relative min-h-screen overflow-x-clip bg-[#04100d] text-zinc-100 selection:bg-emerald-500/40">
    <style>{CSS}</style>
    <Backdrop />
    <ParticleField />
    <CursorGlow />
    <div aria-hidden className="av-grain pointer-events-none fixed inset-0 z-[3]" />
    <ScrollProgress />

    <motion.header style={{ x: "-50%" }} initial={{ y: -70, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, delay: 0.1, ease: EASE }} className={`fixed left-1/2 top-4 z-[60] flex w-[min(1180px,calc(100%-20px))] items-center justify-between rounded-2xl border px-3 py-2.5 backdrop-blur-2xl transition-all duration-500 ${scrolled ? "border-white/15 bg-[#09171a]/80 shadow-[0_18px_60px_rgba(0,0,0,.5)]" : "border-white/10 bg-white/[.04]"}`}>
      <Link href="/" className="group flex items-center gap-2.5"><span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-400 text-[10px] font-bold text-white shadow-[0_0_20px_rgba(16,185,129,.5)] transition group-hover:rotate-6 group-hover:scale-105"><span aria-hidden className="av-ring absolute inset-0 rounded-xl border border-emerald-300/60" />AV</span><span><b className="block text-[11px] leading-none text-white">Aditya Varma</b><small className="mt-1 block text-[7px] uppercase tracking-[.12em] text-zinc-500">Digital Marketing · Content · Creative</small></span></Link>
      <div className="flex items-center gap-3"><span className="hidden font-mono text-[9px] uppercase tracking-[.14em] text-zinc-400 sm:block">{items.length} work samples</span><Magnetic strength={0.25}><Link href="/" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[10px] font-bold text-zinc-950 transition hover:bg-emerald-200"><ArrowLeft size={12} /> <span className="hidden sm:inline">Back to portfolio</span><span className="sm:hidden">Back</span></Link></Magnetic></div>
    </motion.header>

    <div className="relative z-10">
      <section className="relative mx-auto w-[min(1240px,calc(100%-32px))] pb-14 pt-36 sm:pt-44">
        <Orbit />
        <motion.div style={reduce ? undefined : { y: heroY, opacity: heroFade }}>
          <motion.div initial={reduce ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }} className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[.05] px-4 py-2 font-mono text-[10px] uppercase tracking-[.16em] text-zinc-300 backdrop-blur-md"><span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" /></span>Selected work archive</motion.div>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_.6fr] lg:items-end">
            <h1 className="text-[clamp(52px,8vw,118px)] font-semibold leading-[.88] tracking-[-.07em] text-white"><WordReveal text="Real work, shown" delay={0.15} /><WordReveal text="clearly." delay={0.55} grad /></h1>
            <motion.p initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9, ease: EASE }} className="max-w-md text-sm leading-7 text-zinc-400">A browsable collection of websites, banners, carousel designs, product creatives, event campaigns and conference publications. Open any sample to view it larger — carousels and the conference book open page by page.</motion.p>
          </div>
          <motion.div initial={reduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 1.05, ease: EASE }} className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl md:grid-cols-4">
            {stats.map(([n, l], i) => <motion.div key={l} whileHover={{ backgroundColor: "rgba(6,28,22,.95)" }} className="group relative bg-[#071612]/80 px-6 py-5 transition-colors">
              <span aria-hidden className="absolute inset-x-6 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-emerald-300 to-transparent transition-transform duration-700 group-hover:scale-x-100" />
              <div className="text-3xl font-semibold tracking-[-.05em] text-white sm:text-5xl"><Grad><Counter to={n} /></Grad></div>
              <p className="mt-2 font-mono text-[9px] uppercase tracking-[.16em] text-zinc-500">{l}</p>
              <span aria-hidden className="absolute right-4 top-4 font-mono text-[9px] text-zinc-700">0{i + 1}</span>
            </motion.div>)}
          </motion.div>
        </motion.div>
      </section>

      <MarqueeBand />

      <section className="mx-auto w-[min(1240px,calc(100%-32px))] pb-24 pt-12">
        <div className="sticky top-[76px] z-40 -mx-1 mb-8 rounded-2xl border border-white/10 bg-[#04100d]/70 p-2 backdrop-blur-2xl">
          <div className="av-scroll flex gap-1.5 overflow-x-auto">
            {formats.map(name => <button key={name} onClick={() => { setFormat(name); setSelected(null); }} className={`relative shrink-0 rounded-xl px-4 py-2.5 text-[11px] font-semibold transition-colors ${format === name ? "text-zinc-950" : "text-zinc-400 hover:text-white"}`}>
              {format === name && <motion.span layoutId="filter-pill" transition={{ type: "spring", stiffness: 380, damping: 32 }} className="absolute inset-0 -z-0 rounded-xl bg-white shadow-[0_0_24px_rgba(110,231,183,.4)]" />}
              <span className="relative flex items-center gap-2">{name !== "All" && <span className="h-1.5 w-1.5 rounded-full" style={{ background: ACCENT[name as Exclude<Format, "All">] }} />}{name}{name !== "All" && <span className={`font-mono text-[9px] ${format === name ? "text-emerald-700" : "text-zinc-500"}`}>{counts[name]}</span>}</span>
            </button>)}
          </div>
        </div>

        <div className="mb-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[.16em] text-zinc-500">
          <AnimatePresence mode="wait" initial={false}><motion.span key={format} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>Showing <span className="text-emerald-300">{visible.length}</span> · {format}</motion.span></AnimatePresence>
          <span className="hidden sm:block">Hover to explore · click to open</span>
        </div>

        <div key={format} className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {visible.map((it, i) => <GalleryCard key={`${it.src}-${it.title}-${i}`} item={it} index={i} onOpen={() => setSelected(i)} />)}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-white/10 pt-8">
          <span className="mr-2 font-mono text-[9px] uppercase tracking-[.16em] text-zinc-500">Live websites</span>
          {[["Innovare Biopharma", "https://innovarebiopharma.com/"], ["Ecorfy", "https://www.ecorfy.com/"], ["Shreshta Pickles", "https://shreshtapickles.com/"]].map(([l, h]) => <Magnetic key={h} strength={0.2}><motion.a whileHover={{ y: -2 }} href={h} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.05] px-4 py-2.5 text-xs font-semibold text-white backdrop-blur-md transition-colors hover:border-emerald-400/60">{l} <ExternalLink size={13} /></motion.a></Magnetic>)}
        </div>
      </section>

      <section className="mx-auto w-[min(1240px,calc(100%-32px))] pb-28">
        <motion.div initial={reduce ? false : { opacity: 0, y: 50, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.9, ease: EASE }} className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-emerald-500/15 via-white/[.03] to-cyan-400/10 p-8 text-center backdrop-blur-xl sm:p-14">
          <div aria-hidden className="av-spin-slow absolute -left-24 -top-24 h-72 w-72 rounded-full border border-dashed border-emerald-300/25" />
          <div aria-hidden className="av-spin absolute -bottom-28 -right-20 h-80 w-80 rounded-full border border-dashed border-cyan-300/20" />
          <div aria-hidden className="av-borderflow absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-300 to-transparent" />
          <p className="relative font-mono text-[10px] uppercase tracking-[.2em] text-emerald-300/80">Next project</p>
          <h2 className="relative mx-auto mt-5 max-w-3xl text-[clamp(34px,5.5vw,72px)] font-semibold leading-[.95] tracking-[-.05em] text-white">Have something to build? <Grad>Let’s make it look this good.</Grad></h2>
          <div className="relative mt-9 flex flex-wrap items-center justify-center gap-3">
            <Magnetic><Link href="/" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-xs font-bold text-zinc-950 shadow-[0_0_40px_rgba(110,231,183,.35)] transition hover:bg-emerald-200">Back to portfolio <ArrowUpRight size={14} /></Link></Magnetic>
          </div>
        </motion.div>
      </section>
    </div>

    <AnimatePresence>
      {showTop && !item && <motion.button key="top" initial={{ opacity: 0, y: 20, scale: 0.8 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.8 }} whileHover={{ y: -3 }} onClick={() => window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" })} aria-label="Back to top" className="fixed bottom-6 right-6 z-[65] grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-[#0b1f1a]/90 text-emerald-200 shadow-[0_10px_40px_rgba(0,0,0,.5),0_0_24px_rgba(16,185,129,.25)] backdrop-blur-md transition hover:border-emerald-400/70"><ArrowUp size={18} /></motion.button>}
    </AnimatePresence>

    <AnimatePresence>
      {item && selected !== null && (item.type === "book" && item.pages
        ? <BookViewer key={`b${selected}`} item={item} pages={item.pages} onClose={close} />
        : item.type === "carousel" && item.pages
          ? <CarouselViewer key={`c${selected}`} item={item} pages={item.pages} onClose={close} />
          : <Lightbox key="lb" item={item} all={visible} pos={selected} onJump={setSelected} onPrev={prevItem} onNext={nextItem} onClose={close} />)}
    </AnimatePresence>
  </main>;
}