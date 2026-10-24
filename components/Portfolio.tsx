// // // // // // // // // // // "use client";

// // // // // // // // // // // import { ArrowDown, ArrowRight, ArrowUpRight, ExternalLink, Instagram, Linkedin, Mail, Menu, MoveUpRight, Sparkles, X } from "lucide-react";
// // // // // // // // // // // import { motion, useScroll, useTransform } from "framer-motion";
// // // // // // // // // // // import Link from "next/link";
// // // // // // // // // // // import Image from "next/image";
// // // // // // // // // // // import { useState } from "react";

// // // // // // // // // // // const projects = [
// // // // // // // // // // //   { id: "01", company: "Innovare Biopharma LLP", label: "WEBSITE · SEO · CONTENT", title: "Building a digital home for aquaculture health.", description: "Website development, product presentation, blog publishing, SEO-focused content, social support and digital marketing execution.", image: "/work/websites/innovare-home.png", slug: "innovare-biopharma", link: "https://innovarebiopharma.com/", accent: "from-violet-200 via-white to-orange-100" },
// // // // // // // // // // //   { id: "02", company: "C-STAR Global", label: "EVENTS · CONTENT · CREATIVE", title: "Turning conference information into a complete digital experience.", description: "Conference communication, speaker data, landing pages, banners, videos, social publishing and conference publications.", image: "/work/websites/cstar-home.png", slug: "c-star-global", accent: "from-slate-900 via-indigo-950 to-violet-900" },
// // // // // // // // // // //   { id: "03", company: "Ecorfy Technologies Pvt. Ltd.", label: "WEB · SOCIAL · TECHNOLOGY", title: "Making technology easier to understand and easier to publish.", description: "Website work and technology-focused digital communication across software, AI, social media and marketing content.", image: "/work/ecorfy/website-cover.png", slug: "ecorfy-technologies", link: "https://www.ecorfy.com/", accent: "from-cyan-100 via-white to-lime-100" },
// // // // // // // // // // //   { id: "04", company: "Shreshta Pickles", label: "FREELANCE · WEBSITE", title: "A clean digital storefront for a traditional food brand.", description: "Freelance website development with a product-led layout, clear navigation and a focused brand presentation.", image: "/work/websites/shreshta-home.png", slug: "shreshta-pickles", link: "https://shreshtapickles.com/", accent: "from-orange-100 via-white to-rose-100" },
// // // // // // // // // // // ];

// // // // // // // // // // // const experience = [
// // // // // // // // // // //   { company: "Innovare Biopharma LLP", role: "Digital Marketing Executive", dates: "April 2026 — Present", location: "Hyderabad, India", logo: "/companies/innovare-logo.jpg", current: true, description: "Digital marketing, website management, SEO-focused content, social media support and creative production for an aquaculture-focused brand.", points: ["Managed website content, landing pages and digital publishing", "Supported SEO, blogs, social media and campaign creatives", "Created and coordinated marketing assets across digital channels"], tags: ["Digital Marketing", "SEO", "Content", "Social Media"], href: "https://innovarebiopharma.com/" },
// // // // // // // // // // //   { company: "C-STAR Global Inc.", role: "Content Developer · Digital Marketing", dates: "April 2023 — February 2026", location: "Hyderabad, India", logo: "/companies/cstar-logo.jpg", description: "Worked across conference communication, website content, speaker data, creative production, videos, conference publications and social media publishing.", points: ["Managed conference and expo content from raw data to publishable assets", "Created banners, videos, posters, conference books and social content", "Supported websites, virtual conferences and scheduled social publishing"], tags: ["Content Development", "Events", "Social Media", "Creative"] },
// // // // // // // // // // //   { company: "Ecorfy Technologies Pvt. Ltd.", role: "Software Engineer", dates: "Earlier experience", location: "Hyderabad, India", logo: "/companies/ecorfy-logo.jpg", description: "Earlier technology experience supporting web development and digital communication projects in a technology-focused environment.", points: ["Worked on website and software-oriented digital projects", "Supported technology communication and online presentation", "Built technical experience that now strengthens marketing execution"], tags: ["Web", "Software", "Digital", "Technology"], href: "https://www.ecorfy.com/" },
// // // // // // // // // // // ];

// // // // // // // // // // // const skillGroups = [
// // // // // // // // // // //   { title: "Digital Marketing", items: ["SEO", "On-page SEO", "Technical SEO", "Off-page SEO", "Content Development", "Content Marketing", "Social Media Marketing", "Google Ads", "Meta Ads", "Performance Marketing", "Lead Generation", "Email Marketing", "Keyword Research"] },
// // // // // // // // // // //   { title: "Analytics & Automation", items: ["Google Analytics 4 (GA4)", "Google Tag Manager (GTM)", "Google Search Console", "n8n Automation", "AI Tools"] },
// // // // // // // // // // //   { title: "Creative & Publishing Tools", items: ["Canva", "Renderforest", "CapCut", "Filmora", "Publito", "Publer", "Swipe Pages", "WordPress", "Hostinger", "Open Mercato"] },
// // // // // // // // // // // ];

// // // // // // // // // // // const archive = [
// // // // // // // // // // //   ["/work/innovare/samples/hygiene.png", "Hygiene in Shrimp Farms", "Innovare", "Educational social creative"],
// // // // // // // // // // //   ["/work/ecorfy/samples/top-generative-ai.png", "Generative AI Development", "Ecorfy", "Social banner"],
// // // // // // // // // // //   ["/work/uploads/AP_Defence_Carousel.jpg", "AP Defence & Aerospace", "Carousel", "Carousel template"],
// // // // // // // // // // //   ["/work/uploads/India_infrastructure.jpg", "India AI Infrastructure Race", "Carousel", "Carousel template"],
// // // // // // // // // // //   ["/work/innovare/samples/nutrition.png", "Nutrition for Stronger Shrimp", "Innovare", "Educational social creative"],
// // // // // // // // // // //   ["/work/ecorfy/samples/transform-ideas.png", "Transform Ideas", "Ecorfy", "Generative AI social"],
// // // // // // // // // // //   ["/work/cstar/women-forum-2024.jpg", "Global Women Forum", "C-STAR", "Event banner"],
// // // // // // // // // // //   ["/work/cstar/global-technology-forum-2024.jpg", "Global Technology Forum", "C-STAR", "Event poster"],
// // // // // // // // // // //   ["/work/uploads/Book_Updated_3_.jpg", "World Women & Health Forum", "C-STAR", "Conference publication"],
// // // // // // // // // // //   ["/work/ecorfy/samples/software-development.png", "Software Development", "Ecorfy", "Social banner"],
// // // // // // // // // // // ];

// // // // // // // // // // // const testimonials = [
// // // // // // // // // // //   ["Ravindra Raju", "Founder & Owner · Shreshta Pickles", "Working with Aditya has been a great experience. He efficiently manages our website, handles updates whenever needed, and supports our business operations."],
// // // // // // // // // // //   ["Sitarama Raju", "CEO · Innovare Labs", "Aditya played an important role in supporting our digital marketing and promotional activities. His contributions to website development, content management, and conference promotions helped strengthen our brand presence."],
// // // // // // // // // // // ];

// // // // // // // // // // // function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
// // // // // // // // // // //   return <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}>{children}</motion.div>;
// // // // // // // // // // // }

// // // // // // // // // // // function SectionKicker({ children }: { children: React.ReactNode }) { return <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500"><i className="h-1.5 w-1.5 rounded-full bg-violet-500" />{children}</span>; }

// // // // // // // // // // // function MagneticCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
// // // // // // // // // // //   return <motion.div whileHover={{ y: -7 }} transition={{ duration: .35, ease: [0.16, 1, .3, 1] }} className={className}>{children}</motion.div>;
// // // // // // // // // // // }

// // // // // // // // // // // function Hero() {
// // // // // // // // // // //   const { scrollY } = useScroll();
// // // // // // // // // // //   const y = useTransform(scrollY, [0, 700], [0, 170]);
// // // // // // // // // // //   const rotate = useTransform(scrollY, [0, 700], [0, -5]);
// // // // // // // // // // //   return <section id="home" className="relative isolate min-h-[880px] overflow-hidden bg-[#f7f6f2] pt-32 sm:pt-40">
// // // // // // // // // // //     <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_22%,rgba(124,92,255,.17),transparent_28%),radial-gradient(circle_at_18%_75%,rgba(255,157,116,.15),transparent_24%)]" />
// // // // // // // // // // //     <div className="absolute inset-0 -z-10 opacity-50 [background-image:linear-gradient(rgba(20,20,25,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(20,20,25,.045)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(circle_at_center,black_25%,transparent_75%)]" />
// // // // // // // // // // //     <div className="mx-auto grid w-[min(1240px,calc(100%-32px))] items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
// // // // // // // // // // //       <Reveal>
// // // // // // // // // // //         <SectionKicker>Digital marketing · web · content · creative</SectionKicker>
// // // // // // // // // // //         <h1 className="mt-7 max-w-5xl text-[clamp(58px,8.7vw,126px)] font-semibold leading-[.82] tracking-[-.075em] text-zinc-950">I make digital work <span className="text-violet-600">worth noticing.</span></h1>
// // // // // // // // // // //         <p className="mt-8 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">Digital Marketing Executive working across websites, SEO, social media, content development, creative production and event communication.</p>
// // // // // // // // // // //         <div className="mt-9 flex flex-wrap items-center gap-3"><a href="#work" className="group inline-flex items-center gap-3 rounded-full bg-zinc-950 px-5 py-3 text-xs font-bold text-white shadow-[0_18px_50px_rgba(0,0,0,.14)] transition hover:-translate-y-0.5">Explore real projects <ArrowRight size={14} className="transition group-hover:translate-x-1" /></a><Link href="/work-samples" className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white/60 px-5 py-3 text-xs font-bold text-zinc-700 backdrop-blur transition hover:border-zinc-500">Open work archive <ArrowRight size={14} /></Link></div>
// // // // // // // // // // //         <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-zinc-200 pt-5 font-mono text-[9px] uppercase tracking-[.12em] text-zinc-500"><span>02+ years hands-on</span><span>Websites · SEO · Social</span><span>Creative · Events · Content</span></div>
// // // // // // // // // // //       </Reveal>
// // // // // // // // // // //       <motion.div style={{ y, rotate }} className="relative mx-auto h-[520px] w-full max-w-[590px]">
// // // // // // // // // // //         <div className="absolute left-[8%] top-[8%] h-64 w-64 rounded-full bg-violet-300/45 blur-3xl" /><div className="absolute bottom-[4%] right-[2%] h-64 w-64 rounded-full bg-orange-200/55 blur-3xl" />
// // // // // // // // // // //         <div className="absolute inset-[7%] rounded-[40px] border border-white/80 bg-white/45 shadow-[0_50px_120px_rgba(55,45,95,.16)] backdrop-blur-2xl" />
// // // // // // // // // // //         <div className="absolute left-[12%] top-[14%] rounded-2xl border border-zinc-200 bg-white px-4 py-3 shadow-xl"><span className="font-mono text-[8px] text-violet-600">01</span><b className="ml-3 text-xs">SEARCH</b><small className="mt-1 block text-[9px] text-zinc-500">SEO · keywords · intent</small></div>
// // // // // // // // // // //         <div className="absolute right-[7%] top-[31%] rounded-2xl border border-zinc-200 bg-zinc-950 px-4 py-3 text-white shadow-2xl"><span className="font-mono text-[8px] text-violet-300">02</span><b className="ml-3 text-xs">CONTENT</b><small className="mt-1 block text-[9px] text-zinc-400">blogs · pages · social</small></div>
// // // // // // // // // // //         <div className="absolute bottom-[16%] left-[17%] rounded-2xl border border-zinc-200 bg-white px-4 py-3 shadow-xl"><span className="font-mono text-[8px] text-orange-500">03</span><b className="ml-3 text-xs">CREATIVE</b><small className="mt-1 block text-[9px] text-zinc-500">design · video · campaigns</small></div>
// // // // // // // // // // //         <div className="absolute bottom-[7%] right-[15%] rounded-2xl border border-zinc-200 bg-white px-4 py-3 shadow-xl"><span className="font-mono text-[8px] text-violet-600">04</span><b className="ml-3 text-xs">EXECUTE</b><small className="mt-1 block text-[9px] text-zinc-500">publish · measure · improve</small></div>
// // // // // // // // // // //         <div className="absolute left-1/2 top-1/2 grid h-52 w-52 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[38px] bg-zinc-950 text-white shadow-[0_35px_90px_rgba(17,17,20,.28)]"><div className="text-center"><Sparkles className="mx-auto mb-5 text-violet-300" size={24}/><p className="font-mono text-[8px] uppercase tracking-[.2em] text-zinc-400">Digital workflow</p><strong className="mt-3 block text-3xl leading-[.9] tracking-[-.06em]">IDEA<br/>TO<br/><span className="text-violet-300">IMPACT.</span></strong></div></div>
// // // // // // // // // // //       </motion.div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //     <a href="#about" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[9px] uppercase tracking-[.16em] text-zinc-500 sm:flex">Scroll to explore <ArrowDown size={13}/></a>
// // // // // // // // // // //   </section>;
// // // // // // // // // // // }

// // // // // // // // // // // function Experience() {
// // // // // // // // // // //   return <section id="experience" className="relative overflow-hidden bg-[#f0edff] py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // // // // // // // // //     <Reveal><SectionKicker>Career timeline</SectionKicker><div className="mt-5 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><h2 className="max-w-4xl text-[clamp(50px,7vw,100px)] font-semibold leading-[.85] tracking-[-.075em]">Where I’ve worked.<br/><span className="text-violet-600">What I’ve done.</span></h2><p className="max-w-md text-sm leading-6 text-zinc-600">Three stages of experience across technology, conference communication, content and digital marketing.</p></div></Reveal>
// // // // // // // // // // //     <div className="relative mt-14 grid gap-5 lg:grid-cols-3"><div className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-7 hidden h-px bg-violet-200 lg:block"/>{experience.map((job,i)=><Reveal key={job.company} delay={i*.08}><MagneticCard className="relative h-full"><article className="group h-full rounded-[28px] border border-violet-100 bg-white p-6 shadow-[0_18px_60px_rgba(67,47,130,.07)] transition hover:shadow-[0_28px_80px_rgba(67,47,130,.12)]"><div className="flex items-start justify-between gap-3"><div className="grid h-12 w-12 place-items-center overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm"><Image src={job.logo} alt={`${job.company} logo`} width={48} height={48} className="h-full w-full object-cover"/></div><span className={`rounded-full px-3 py-1.5 font-mono text-[8px] uppercase tracking-[.08em] ${job.current ? "bg-violet-100 text-violet-700" : "bg-zinc-100 text-zinc-500"}`}>{job.current ? "Present" : job.dates}</span></div><p className="mt-8 font-mono text-[9px] uppercase tracking-[.12em] text-zinc-400">0{i+1} / EXPERIENCE</p><h3 className="mt-2 text-xl font-bold tracking-[-.03em]">{job.role}</h3><a href={job.href ?? "#"} target={job.href ? "_blank" : undefined} rel={job.href ? "noreferrer" : undefined} className="mt-1 inline-block text-xs font-bold text-violet-600">{job.company}</a><div className="mt-5 space-y-2 border-y border-zinc-100 py-4 font-mono text-[8px] uppercase tracking-[.05em] text-zinc-500"><div>⌁ {job.dates}</div><div>⌖ {job.location}</div></div><p className="mt-5 text-[11px] leading-6 text-zinc-600">{job.description}</p><ul className="mt-5 space-y-2 border-t border-zinc-100 pt-4">{job.points.map(point=><li key={point} className="flex gap-2 text-[10px] leading-5 text-zinc-600"><span className="text-violet-500">↳</span>{point}</li>)}</ul><div className="mt-5 flex flex-wrap gap-1.5">{job.tags.map(tag=><span key={tag} className="rounded-full border border-violet-100 bg-violet-50 px-2.5 py-1 text-[8px] font-semibold text-violet-700">{tag}</span>)}</div></article></MagneticCard></Reveal>)}</div>
// // // // // // // // // // //   </div></section>;
// // // // // // // // // // // }

// // // // // // // // // // // function Work() {
// // // // // // // // // // //   return <section id="work" className="bg-[#f7f6f2] py-24 text-zinc-950 sm:py-32">
// // // // // // // // // // //     <div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // // // // // // // // //       <Reveal><div className="flex flex-col justify-between gap-8 border-b border-zinc-200 pb-9 lg:flex-row lg:items-end"><div><SectionKicker>Selected work</SectionKicker><h2 className="mt-5 text-[clamp(48px,7vw,92px)] font-semibold leading-[.88] tracking-[-.075em]">Real projects.<br/><span className="text-violet-600">Clear outcomes.</span></h2></div><div className="max-w-sm"><p className="text-sm leading-7 text-zinc-600">A selection of websites and digital experiences across aquaculture, conferences, technology and consumer brands.</p><Link href="/work-samples" className="mt-5 inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-4 py-2.5 text-xs font-bold transition hover:border-violet-300 hover:text-violet-700">Explore all work <ArrowRight size={14}/></Link></div></div></Reveal>
// // // // // // // // // // //       <div className="mt-9 grid gap-5 md:grid-cols-2">
// // // // // // // // // // //         {projects.map((project,i)=><Reveal key={project.id} delay={i*.05}><article className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-[0_10px_35px_rgba(17,17,20,.035)] transition duration-500 hover:-translate-y-1 hover:border-violet-200 hover:shadow-[0_24px_60px_rgba(17,17,20,.09)]">
// // // // // // // // // // //           <div className={`relative overflow-hidden bg-gradient-to-br ${project.accent} p-4 sm:p-6`}><div className="mb-4 flex items-center justify-between"><span className="font-mono text-[9px] tracking-[.14em] text-zinc-500">PROJECT {project.id}</span><span className="rounded-full border border-black/10 bg-white/75 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[.1em] text-zinc-600">{project.label}</span></div><div className="flex h-[230px] items-center justify-center overflow-hidden rounded-[18px] border border-black/5 bg-white shadow-[0_12px_35px_rgba(0,0,0,.08)] sm:h-[270px]"><Image src={project.image} alt={`${project.company} website preview`} width={1100} height={760} className="h-full w-full object-contain object-center transition duration-700 group-hover:scale-[1.025]"/></div></div>
// // // // // // // // // // //           <div className="flex flex-1 flex-col p-6 sm:p-7"><p className="font-mono text-[9px] uppercase tracking-[.14em] text-violet-600">{project.company}</p><h3 className="mt-3 max-w-xl text-2xl font-semibold leading-tight tracking-[-.045em] sm:text-[28px]">{project.title}</h3><p className="mt-3 flex-1 text-sm leading-6 text-zinc-600">{project.description}</p><div className="mt-6 flex flex-wrap gap-2 border-t border-zinc-100 pt-5"><Link href={`/work/${project.slug}`} className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-violet-700">View project <ArrowRight size={13}/></Link>{project.link && <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2.5 text-xs font-bold text-zinc-700 transition hover:border-zinc-400">Live website <ExternalLink size={13}/></a>}</div></div>
// // // // // // // // // // //         </article></Reveal>)}
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   </section>;
// // // // // // // // // // // }

// // // // // // // // // // // function ArchivePreview() {
// // // // // // // // // // //   const rowOne = [...archive.slice(0, 5), ...archive.slice(0, 5)];
// // // // // // // // // // //   const rowTwo = [...archive.slice(5), ...archive.slice(5)];
// // // // // // // // // // //   const renderTile = ([src,title,company,format]: string[], i: number) => <Link href="/work-samples" key={`${src}-${i}`} className="group w-[210px] shrink-0 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_8px_25px_rgba(17,17,20,.045)] transition hover:-translate-y-1 hover:shadow-xl sm:w-[250px]"><div className="flex h-[150px] items-center justify-center overflow-hidden bg-[#f2f1ef] p-3 sm:h-[175px] sm:p-4"><Image src={src} alt={title} width={520} height={420} className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.04]"/></div><div className="px-4 py-3"><p className="truncate font-mono text-[8px] uppercase tracking-[.1em] text-zinc-400">{company} · {format}</p><h3 className="mt-1.5 truncate text-xs font-bold text-zinc-900">{title}</h3></div></Link>;
// // // // // // // // // // //   return <section className="overflow-hidden bg-white py-24 sm:py-32"><div className="mx-auto w-[min(1240px,calc(100%-32px))]"><Reveal><div className="flex flex-col justify-between gap-7 md:flex-row md:items-end"><div><SectionKicker>Creative archive</SectionKicker><h2 className="mt-5 max-w-5xl text-[clamp(46px,6.5vw,88px)] font-semibold leading-[.88] tracking-[-.075em]">A closer look at<br/><span className="text-violet-600">the creative work.</span></h2><p className="mt-5 max-w-xl text-sm leading-6 text-zinc-500">Banners, carousel templates, event graphics and publications — moving gently so you can browse the range at a glance.</p></div><Link href="/work-samples" className="inline-flex h-fit items-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-xs font-bold text-white transition hover:bg-violet-700">View all samples <ArrowRight size={14}/></Link></div></Reveal></div>
// // // // // // // // // // //     <div className="mt-10 space-y-4"><div className="archive-marquee archive-marquee-forward flex gap-4">{rowOne.map((item,i)=>renderTile(item,i))}</div><div className="archive-marquee archive-marquee-reverse flex gap-4">{rowTwo.map((item,i)=>renderTile(item,i+100))}</div></div>
// // // // // // // // // // //     <div className="mx-auto mt-7 w-[min(1240px,calc(100%-32px))]"><p className="text-center text-[10px] text-zinc-400">Hover to pause · Select any sample to open the complete archive</p></div>
// // // // // // // // // // //   </section>;
// // // // // // // // // // // }

// // // // // // // // // // // function Skills() {
// // // // // // // // // // //   return <section id="skills" className="bg-[#f7f6f2] py-24 sm:py-32">
// // // // // // // // // // //     <div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // // // // // // // // //       <Reveal><SectionKicker>Skills & tools</SectionKicker>
// // // // // // // // // // //         <div className="mt-5 grid gap-6 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
// // // // // // // // // // //           <h2 className="max-w-3xl text-[clamp(46px,6.5vw,88px)] font-semibold leading-[.9] tracking-[-.075em]">The skills behind <span className="text-violet-600">the work.</span></h2>
// // // // // // // // // // //           <p className="max-w-xl text-sm leading-7 text-zinc-500">A straightforward overview of the marketing disciplines, measurement tools, creative apps and publishing platforms I work with.</p>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </Reveal>
// // // // // // // // // // //       <div className="mt-12 space-y-4">
// // // // // // // // // // //         {skillGroups.map((group, index) => <Reveal key={group.title} delay={index * .06}>
// // // // // // // // // // //           <section className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-7">
// // // // // // // // // // //             <div className="flex flex-col gap-2 border-b border-zinc-100 pb-4 sm:flex-row sm:items-center sm:justify-between">
// // // // // // // // // // //               <h3 className="text-base font-bold tracking-[-.02em]">{group.title}</h3>
// // // // // // // // // // //               <span className="font-mono text-[9px] uppercase tracking-[.14em] text-zinc-400">{String(group.items.length).padStart(2, "0")} skills & tools</span>
// // // // // // // // // // //             </div>
// // // // // // // // // // //             <div className="mt-5 flex flex-wrap gap-2">{group.items.map(item => <span key={item} className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-3.5 py-2 text-xs font-medium text-zinc-700 transition hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700">{item}</span>)}</div>
// // // // // // // // // // //           </section>
// // // // // // // // // // //         </Reveal>)}
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   </section>;
// // // // // // // // // // // }

// // // // // // // // // // // function Process() {
// // // // // // // // // // //   const steps = [["01","Understand","Goal · audience · message"],["02","Structure","Content · information · flow"],["03","Create","Design · video · visual system"],["04","Execute","Publish · schedule · maintain"]];
// // // // // // // // // // //   return <section className="relative overflow-hidden bg-violet-600 py-28 text-white sm:py-36"><div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.14)_1px,transparent_1px)] [background-size:44px_44px]"/><div className="relative mx-auto w-[min(1240px,calc(100%-32px))]"><Reveal><SectionKicker>How I work</SectionKicker><h2 className="mt-5 max-w-4xl text-[clamp(52px,7vw,104px)] font-semibold leading-[.84] tracking-[-.08em]">From brief to <span className="text-violet-950/80">publish-ready.</span></h2></Reveal><div className="mt-14 grid gap-2 md:grid-cols-4">{steps.map(([n,title,desc])=><article key={n} className="rounded-[24px] border border-white/20 bg-white/10 p-6 backdrop-blur-xl"><span className="font-mono text-[9px] text-violet-100">{n}</span><h3 className="mt-14 text-2xl font-semibold tracking-[-.04em]">{title}</h3><p className="mt-2 text-xs leading-5 text-violet-100">{desc}</p></article>)}</div></div></section>;
// // // // // // // // // // // }

// // // // // // // // // // // function Testimonials() {
// // // // // // // // // // //   return <section id="testimonials" className="overflow-hidden bg-zinc-950 py-28 text-white sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]"><Reveal><SectionKicker>Testimonials</SectionKicker><h2 className="mt-5 max-w-4xl text-[clamp(48px,6.7vw,96px)] font-semibold leading-[.86] tracking-[-.075em]">Good work should be <span className="text-violet-300">remembered.</span></h2></Reveal></div><div className="mt-14 overflow-hidden border-y border-white/10 py-4"><div className="flex w-max animate-[marquee_28s_linear_infinite] gap-4">{[...testimonials,...testimonials,...testimonials].map(([name,role,quote],i)=><article key={`${name}-${i}`} className="w-[320px] rounded-[24px] border border-white/10 bg-white/[.045] p-6 sm:w-[420px]"><div className="text-violet-300">★★★★★</div><p className="mt-5 text-sm leading-6 text-zinc-300">“{quote}”</p><div className="mt-7 border-t border-white/10 pt-4"><b className="block text-xs">{name}</b><span className="mt-1 block text-[9px] text-zinc-500">{role}</span></div></article>)}</div></div></section>;
// // // // // // // // // // // }

// // // // // // // // // // // export default function Portfolio() {
// // // // // // // // // // //   const [menu, setMenu] = useState(false);
// // // // // // // // // // //   const links = [["About","about"],["Experience","experience"],["Work","work"],["Skills","skills"],["Testimonials","testimonials"],["Contact","contact"]];
// // // // // // // // // // //   return <main className="min-h-screen overflow-hidden bg-[#f7f6f2] text-zinc-950 selection:bg-violet-200">
// // // // // // // // // // //     <header className="fixed left-1/2 top-4 z-50 flex w-[min(1180px,calc(100%-20px))] -translate-x-1/2 items-center justify-between rounded-2xl border border-white/70 bg-white/75 px-3 py-2.5 shadow-[0_18px_55px_rgba(17,17,20,.09)] backdrop-blur-2xl"><a href="#home" className="flex items-center gap-2.5"><span className="grid h-9 w-9 place-items-center rounded-xl bg-zinc-950 text-[10px] font-bold text-white">AV</span><span><b className="block text-[11px] leading-none">Aditya Varma</b><small className="mt-1 block text-[7px] uppercase tracking-[.12em] text-zinc-400">Digital Marketing Executive</small></span></a><nav className="hidden items-center gap-6 lg:flex">{links.map(([label,id])=><a key={id} href={`#${id}`} className="text-[9px] font-semibold text-zinc-500 transition hover:text-zinc-950">{label}</a>)}<Link href="/work-samples" className="text-[9px] font-semibold text-zinc-500 transition hover:text-zinc-950">Work Archive</Link></nav><a href="#contact" className="hidden items-center gap-2 rounded-full bg-zinc-950 px-4 py-2.5 text-[9px] font-bold text-white lg:inline-flex">Let’s talk <ArrowRight size={12}/></a><button onClick={()=>setMenu(!menu)} className="grid h-9 w-9 place-items-center rounded-xl border border-zinc-200 bg-white lg:hidden" aria-label="Toggle menu">{menu?<X size={16}/>:<Menu size={16}/>}</button>{menu&&<div className="absolute right-0 top-14 w-60 rounded-2xl border border-zinc-200 bg-white p-2 shadow-2xl lg:hidden">{links.map(([label,id])=><a key={id} href={`#${id}`} onClick={()=>setMenu(false)} className="block rounded-xl px-3 py-3 text-xs font-semibold hover:bg-zinc-50">{label}</a>)}<Link href="/work-samples" onClick={()=>setMenu(false)} className="block rounded-xl px-3 py-3 text-xs font-semibold hover:bg-zinc-50">Work Archive</Link></div>}</header>
// // // // // // // // // // //     <Hero/>
// // // // // // // // // // //     <section id="about" className="bg-white py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]"><Reveal><SectionKicker>About me</SectionKicker><h2 className="mt-5 max-w-5xl text-[clamp(50px,7vw,100px)] font-semibold leading-[.84] tracking-[-.08em]">I work where <span className="text-violet-600">marketing, content and execution</span> meet.</h2></Reveal><div className="mt-14 grid gap-10 lg:grid-cols-[1.25fr_.75fr]"><Reveal><p className="max-w-3xl text-xl leading-8 tracking-[-.02em] text-zinc-600 sm:text-2xl sm:leading-10">I enjoy taking a raw idea, messy information or business requirement and turning it into something structured, visual, useful and ready to publish — whether that is a website, campaign, social post, blog, conference asset or digital workflow.</p></Reveal><Reveal delay={.1}><div className="rounded-[28px] border border-zinc-200 bg-[#f7f6f2] p-6"><p className="font-mono text-[9px] uppercase tracking-[.14em] text-zinc-400">My working range</p><div className="mt-6 grid grid-cols-2 gap-2">{["Websites","SEO","Social","Content","Creative","Events","Publishing","Automation"].map((x,i)=><span key={x} className="rounded-xl border border-zinc-200 bg-white px-3 py-3 text-[9px] font-bold text-zinc-700">0{i+1} · {x}</span>)}</div></div></Reveal></div></div></section>
// // // // // // // // // // //     <Experience/>
// // // // // // // // // // //     <Work/>
// // // // // // // // // // //     <ArchivePreview/>
// // // // // // // // // // //     <Skills/>
// // // // // // // // // // //     <Process/>
// // // // // // // // // // //     <section id="insights" className="bg-[#f7f6f2] py-28 sm:py-36"><div className="mx-auto grid w-[min(1240px,calc(100%-32px))] items-center gap-10 lg:grid-cols-[1.1fr_.9fr]"><Reveal><SectionKicker>Insights · publishing</SectionKicker><h2 className="mt-5 text-[clamp(48px,6.5vw,94px)] font-semibold leading-[.86] tracking-[-.075em]">Content is not decoration. <span className="text-violet-600">It is part of the product.</span></h2><p className="mt-7 max-w-2xl text-sm leading-7 text-zinc-500">The portfolio can keep expanding with published articles, SEO work, case studies and content projects as more source material is added.</p></Reveal><Reveal delay={.1}><div className="overflow-hidden rounded-[32px] border border-zinc-200 bg-white p-3 shadow-[0_25px_80px_rgba(17,17,20,.08)]"><Image src="/work/innovare/blog.png" alt="Innovare blog publishing preview" width={900} height={650} className="h-[360px] w-full rounded-[24px] object-cover object-top"/><div className="p-4"><p className="font-mono text-[8px] uppercase tracking-[.12em] text-zinc-400">SEO · Content · Publishing</p><h3 className="mt-2 text-lg font-bold">Technical content presented as a usable digital experience.</h3></div></div></Reveal></div></section>
// // // // // // // // // // //     <Testimonials/>
// // // // // // // // // // //     <section id="contact" className="bg-[#f2efff] py-24 text-zinc-950 sm:py-32"><div className="mx-auto w-[min(1240px,calc(100%-32px))]"><Reveal><SectionKicker>Contact</SectionKicker><div className="mt-6 flex flex-col justify-between gap-12 rounded-[32px] border border-violet-100 bg-white/75 p-7 shadow-[0_20px_70px_rgba(91,33,182,.06)] sm:p-12 lg:flex-row lg:items-end"><div><h2 className="max-w-5xl text-[clamp(48px,7vw,100px)] font-semibold leading-[.86] tracking-[-.08em]">Let’s build something <span className="text-violet-600">worth showing.</span></h2><p className="mt-7 max-w-xl text-sm leading-6 text-zinc-600">Available for digital marketing, website, content, social media and creative projects.</p></div><div className="flex shrink-0 flex-col items-start gap-4"><a href="mailto:hello@adityavarma.dev" className="inline-flex items-center gap-3 rounded-full bg-zinc-950 px-5 py-3 text-xs font-bold text-white transition hover:bg-violet-700"> <Mail size={14}/> hello@adityavarma.dev <ArrowRight size={14}/></a><div className="flex gap-2"><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-zinc-200 bg-white"><Linkedin size={15}/></a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-zinc-200 bg-white"><Instagram size={15}/></a></div></div></div></Reveal><footer className="mt-10 flex flex-col justify-between gap-3 border-t border-violet-200 pt-5 font-mono text-[8px] uppercase tracking-[.12em] text-zinc-500 sm:flex-row"><span>© 2026 Aditya Varma</span><span>Digital Marketing · Web · Content · Creative</span></footer></div></section>
// // // // // // // // // // //   </main>;
// // // // // // // // // // // }

// // // // // // // // // // "use client";

// // // // // // // // // // import { ArrowDown, ArrowRight, ExternalLink, Instagram, Linkedin, Mail, Menu, Sparkles, X } from "lucide-react";
// // // // // // // // // // import { AnimatePresence, motion, useMotionTemplate, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
// // // // // // // // // // import Link from "next/link";
// // // // // // // // // // import Image from "next/image";
// // // // // // // // // // import { useEffect, useRef, useState } from "react";

// // // // // // // // // // const EASE = [0.16, 1, 0.3, 1] as const;

// // // // // // // // // // const projects = [
// // // // // // // // // //   { id: "01", company: "Innovare Biopharma LLP", label: "WEBSITE · SEO · CONTENT", title: "Building a digital home for aquaculture health.", description: "Website development, product presentation, blog publishing, SEO-focused content, social support and digital marketing execution.", image: "/work/websites/innovare-home.png", slug: "innovare-biopharma", link: "https://innovarebiopharma.com/", accent: "from-violet-200 via-white to-orange-100" },
// // // // // // // // // //   { id: "02", company: "C-STAR Global", label: "EVENTS · CONTENT · CREATIVE", title: "Turning conference information into a complete digital experience.", description: "Conference communication, speaker data, landing pages, banners, videos, social publishing and conference publications.", image: "/work/websites/cstar-home.png", slug: "c-star-global", accent: "from-slate-900 via-indigo-950 to-violet-900" },
// // // // // // // // // //   { id: "03", company: "Ecorfy Technologies Pvt. Ltd.", label: "WEB · SOCIAL · TECHNOLOGY", title: "Making technology easier to understand and easier to publish.", description: "Website work and technology-focused digital communication across software, AI, social media and marketing content.", image: "/work/ecorfy/website-cover.png", slug: "ecorfy-technologies", link: "https://www.ecorfy.com/", accent: "from-cyan-100 via-white to-lime-100" },
// // // // // // // // // //   { id: "04", company: "Shreshta Pickles", label: "FREELANCE · WEBSITE", title: "A clean digital storefront for a traditional food brand.", description: "Freelance website development with a product-led layout, clear navigation and a focused brand presentation.", image: "/work/websites/shreshta-home.png", slug: "shreshta-pickles", link: "https://shreshtapickles.com/", accent: "from-orange-100 via-white to-rose-100" },
// // // // // // // // // // ];

// // // // // // // // // // const experience = [
// // // // // // // // // //   { company: "Innovare Biopharma LLP", role: "Digital Marketing Executive", dates: "April 2026 — Present", location: "Hyderabad, India", logo: "/companies/innovare-logo.jpg", current: true, description: "Digital marketing, website management, SEO-focused content, social media support and creative production for an aquaculture-focused brand.", points: ["Managed website content, landing pages and digital publishing", "Supported SEO, blogs, social media and campaign creatives", "Created and coordinated marketing assets across digital channels"], tags: ["Digital Marketing", "SEO", "Content", "Social Media"], href: "https://innovarebiopharma.com/" },
// // // // // // // // // //   { company: "C-STAR Global Inc.", role: "Content Developer · Digital Marketing", dates: "April 2023 — February 2026", location: "Hyderabad, India", logo: "/companies/cstar-logo.jpg", description: "Worked across conference communication, website content, speaker data, creative production, videos, conference publications and social media publishing.", points: ["Managed conference and expo content from raw data to publishable assets", "Created banners, videos, posters, conference books and social content", "Supported websites, virtual conferences and scheduled social publishing"], tags: ["Content Development", "Events", "Social Media", "Creative"] },
// // // // // // // // // //   { company: "Ecorfy Technologies Pvt. Ltd.", role: "Software Engineer", dates: "Earlier experience", location: "Hyderabad, India", logo: "/companies/ecorfy-logo.jpg", description: "Earlier technology experience supporting web development and digital communication projects in a technology-focused environment.", points: ["Worked on website and software-oriented digital projects", "Supported technology communication and online presentation", "Built technical experience that now strengthens marketing execution"], tags: ["Web", "Software", "Digital", "Technology"], href: "https://www.ecorfy.com/" },
// // // // // // // // // // ];

// // // // // // // // // // const skillGroups = [
// // // // // // // // // //   { title: "Digital Marketing", items: ["SEO", "On-page SEO", "Technical SEO", "Off-page SEO", "Content Development", "Content Marketing", "Social Media Marketing", "Google Ads", "Meta Ads", "Performance Marketing", "Lead Generation", "Email Marketing", "Keyword Research"] },
// // // // // // // // // //   { title: "Analytics & Automation", items: ["Google Analytics 4 (GA4)", "Google Tag Manager (GTM)", "Google Search Console", "n8n Automation", "AI Tools"] },
// // // // // // // // // //   { title: "Creative & Publishing Tools", items: ["Canva", "Renderforest", "CapCut", "Filmora", "Publito", "Publer", "Swipe Pages", "WordPress", "Hostinger", "Open Mercato"] },
// // // // // // // // // // ];

// // // // // // // // // // const archive = [
// // // // // // // // // //   ["/work/innovare/samples/hygiene.png", "Hygiene in Shrimp Farms", "Innovare", "Educational social creative"],
// // // // // // // // // //   ["/work/ecorfy/samples/top-generative-ai.png", "Generative AI Development", "Ecorfy", "Social banner"],
// // // // // // // // // //   ["/work/uploads/AP_Defence_Carousel.jpg", "AP Defence & Aerospace", "Carousel", "Carousel template"],
// // // // // // // // // //   ["/work/uploads/India_infrastructure.jpg", "India AI Infrastructure Race", "Carousel", "Carousel template"],
// // // // // // // // // //   ["/work/innovare/samples/nutrition.png", "Nutrition for Stronger Shrimp", "Innovare", "Educational social creative"],
// // // // // // // // // //   ["/work/ecorfy/samples/transform-ideas.png", "Transform Ideas", "Ecorfy", "Generative AI social"],
// // // // // // // // // //   ["/work/cstar/women-forum-2024.jpg", "Global Women Forum", "C-STAR", "Event banner"],
// // // // // // // // // //   ["/work/cstar/global-technology-forum-2024.jpg", "Global Technology Forum", "C-STAR", "Event poster"],
// // // // // // // // // //   ["/work/uploads/Book_Updated_3_.jpg", "World Women & Health Forum", "C-STAR", "Conference publication"],
// // // // // // // // // //   ["/work/ecorfy/samples/software-development.png", "Software Development", "Ecorfy", "Social banner"],
// // // // // // // // // // ];

// // // // // // // // // // const testimonials = [
// // // // // // // // // //   ["Ravindra Raju", "Founder & Owner · Shreshta Pickles", "Working with Aditya has been a great experience. He efficiently manages our website, handles updates whenever needed, and supports our business operations."],
// // // // // // // // // //   ["Sitarama Raju", "CEO · Innovare Labs", "Aditya played an important role in supporting our digital marketing and promotional activities. His contributions to website development, content management, and conference promotions helped strengthen our brand presence."],
// // // // // // // // // // ];

// // // // // // // // // // /* ---------- Motion primitives ---------- */

// // // // // // // // // // function ScrollProgress() {
// // // // // // // // // //   const { scrollYProgress } = useScroll();
// // // // // // // // // //   const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.3 });
// // // // // // // // // //   return <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-violet-500 via-violet-600 to-orange-400" />;
// // // // // // // // // // }

// // // // // // // // // // function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
// // // // // // // // // //   const reduce = useReducedMotion();
// // // // // // // // // //   return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 32, filter: "blur(8px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.8, delay, ease: EASE }}>{children}</motion.div>;
// // // // // // // // // // }

// // // // // // // // // // function SectionKicker({ children }: { children: React.ReactNode }) {
// // // // // // // // // //   return <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500"><span className="relative flex h-1.5 w-1.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-60" /><span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-violet-500" /></span>{children}</span>;
// // // // // // // // // // }

// // // // // // // // // // function MagneticCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
// // // // // // // // // //   const reduce = useReducedMotion();
// // // // // // // // // //   const ref = useRef<HTMLDivElement>(null);
// // // // // // // // // //   const px = useMotionValue(0);
// // // // // // // // // //   const py = useMotionValue(0);
// // // // // // // // // //   const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [6, -6]), { stiffness: 220, damping: 20 });
// // // // // // // // // //   const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-6, 6]), { stiffness: 220, damping: 20 });
// // // // // // // // // //   const onMove = (e: React.MouseEvent) => {
// // // // // // // // // //     if (reduce || !ref.current) return;
// // // // // // // // // //     const r = ref.current.getBoundingClientRect();
// // // // // // // // // //     px.set((e.clientX - r.left) / r.width - 0.5);
// // // // // // // // // //     py.set((e.clientY - r.top) / r.height - 0.5);
// // // // // // // // // //   };
// // // // // // // // // //   const onLeave = () => { px.set(0); py.set(0); };
// // // // // // // // // //   return <motion.div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} whileHover={reduce ? undefined : { y: -8 }} transition={{ duration: 0.35, ease: EASE }} style={{ rotateX, rotateY, transformPerspective: 1000 }} className={className}>{children}</motion.div>;
// // // // // // // // // // }

// // // // // // // // // // function FloatCard({ children, className = "", delay = 0, duration = 6, amplitude = 10 }: { children: React.ReactNode; className?: string; delay?: number; duration?: number; amplitude?: number }) {
// // // // // // // // // //   const reduce = useReducedMotion();
// // // // // // // // // //   return <div className={className}><motion.div initial={reduce ? false : { opacity: 0, scale: 0.85, y: 24 }} animate={reduce ? undefined : { opacity: 1, scale: 1, y: [0, -amplitude, 0] }} transition={{ opacity: { duration: 0.8, delay: 0.5 + delay, ease: EASE }, scale: { duration: 0.8, delay: 0.5 + delay, ease: EASE }, y: { duration, delay: 0.5 + delay, repeat: Infinity, ease: "easeInOut" } }}>{children}</motion.div></div>;
// // // // // // // // // // }

// // // // // // // // // // function WordReveal({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) {
// // // // // // // // // //   const reduce = useReducedMotion();
// // // // // // // // // //   return <>{text.split(" ").map((w, i) => <span key={`${w}-${i}`} className="inline-block overflow-hidden pb-[.14em] align-bottom -mb-[.14em]"><motion.span className={`inline-block ${className}`} initial={reduce ? false : { y: "110%", rotate: 4 }} animate={{ y: 0, rotate: 0 }} transition={{ duration: 0.9, delay: delay + i * 0.09, ease: EASE }}>{w}&nbsp;</motion.span></span>)}</>;
// // // // // // // // // // }

// // // // // // // // // // /* ---------- Sections ---------- */

// // // // // // // // // // function Hero() {
// // // // // // // // // //   const reduce = useReducedMotion();
// // // // // // // // // //   const { scrollY } = useScroll();
// // // // // // // // // //   const y = useTransform(scrollY, [0, 700], [0, 170]);
// // // // // // // // // //   const rotate = useTransform(scrollY, [0, 700], [0, -5]);
// // // // // // // // // //   const textY = useTransform(scrollY, [0, 700], [0, 60]);

// // // // // // // // // //   const mx = useMotionValue(0);
// // // // // // // // // //   const my = useMotionValue(0);
// // // // // // // // // //   const sx = useSpring(mx, { stiffness: 80, damping: 18 });
// // // // // // // // // //   const sy = useSpring(my, { stiffness: 80, damping: 18 });
// // // // // // // // // //   const parX = useTransform(sx, [-1, 1], [-18, 18]);
// // // // // // // // // //   const parY = useTransform(sy, [-1, 1], [-14, 14]);
// // // // // // // // // //   const parXInv = useTransform(sx, [-1, 1], [12, -12]);
// // // // // // // // // //   const parYInv = useTransform(sy, [-1, 1], [10, -10]);

// // // // // // // // // //   const cx = useMotionValue(600);
// // // // // // // // // //   const cy = useMotionValue(300);
// // // // // // // // // //   const spotlight = useMotionTemplate`radial-gradient(520px circle at ${cx}px ${cy}px, rgba(124,92,255,.13), transparent 62%)`;

// // // // // // // // // //   const onMove = (e: React.MouseEvent<HTMLElement>) => {
// // // // // // // // // //     if (reduce) return;
// // // // // // // // // //     const r = e.currentTarget.getBoundingClientRect();
// // // // // // // // // //     cx.set(e.clientX - r.left);
// // // // // // // // // //     cy.set(e.clientY - r.top);
// // // // // // // // // //     mx.set((e.clientX - r.left) / r.width * 2 - 1);
// // // // // // // // // //     my.set((e.clientY - r.top) / r.height * 2 - 1);
// // // // // // // // // //   };

// // // // // // // // // //   return <section id="home" onMouseMove={onMove} className="relative isolate min-h-[880px] overflow-hidden bg-[#f7f6f2] pt-32 sm:pt-40">
// // // // // // // // // //     <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_22%,rgba(124,92,255,.17),transparent_28%),radial-gradient(circle_at_18%_75%,rgba(255,157,116,.15),transparent_24%)]" />
// // // // // // // // // //     <motion.div style={{ background: spotlight }} className="pointer-events-none absolute inset-0 -z-10 hidden lg:block" />
// // // // // // // // // //     <div className="absolute inset-0 -z-10 opacity-50 [background-image:linear-gradient(rgba(20,20,25,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(20,20,25,.045)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(circle_at_center,black_25%,transparent_75%)]" />
// // // // // // // // // //     <div className="mx-auto grid w-[min(1240px,calc(100%-32px))] items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
// // // // // // // // // //       <motion.div style={{ y: reduce ? 0 : textY }}>
// // // // // // // // // //         <motion.div initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }}><SectionKicker>Digital marketing · web · content · creative</SectionKicker></motion.div>
// // // // // // // // // //         <h1 className="mt-7 max-w-5xl text-[clamp(58px,8.7vw,126px)] font-semibold leading-[.82] tracking-[-.075em] text-zinc-950">
// // // // // // // // // //           <WordReveal text="I make digital work" delay={0.15} />
// // // // // // // // // //           <WordReveal text="worth noticing." className="text-violet-600" delay={0.5} />
// // // // // // // // // //         </h1>
// // // // // // // // // //         <motion.p initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9, ease: EASE }} className="mt-8 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">Digital Marketing Executive working across websites, SEO, social media, content development, creative production and event communication.</motion.p>
// // // // // // // // // //         <motion.div initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.05, ease: EASE }} className="mt-9 flex flex-wrap items-center gap-3">
// // // // // // // // // //           <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} href="#work" className="group inline-flex items-center gap-3 rounded-full bg-zinc-950 px-5 py-3 text-xs font-bold text-white shadow-[0_18px_50px_rgba(0,0,0,.14)] transition hover:bg-violet-700">Explore real projects <ArrowRight size={14} className="transition group-hover:translate-x-1" /></motion.a>
// // // // // // // // // //           <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}><Link href="/work-samples" className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white/60 px-5 py-3 text-xs font-bold text-zinc-700 backdrop-blur transition hover:border-zinc-500">Open work archive <ArrowRight size={14} /></Link></motion.div>
// // // // // // // // // //         </motion.div>
// // // // // // // // // //         <motion.div initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9, delay: 1.25 }} className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-zinc-200 pt-5 font-mono text-[9px] uppercase tracking-[.12em] text-zinc-500"><span>02+ years hands-on</span><span>Websites · SEO · Social</span><span>Creative · Events · Content</span></motion.div>
// // // // // // // // // //       </motion.div>

// // // // // // // // // //       <motion.div style={{ y: reduce ? 0 : y, rotate: reduce ? 0 : rotate }} className="relative mx-auto h-[520px] w-full max-w-[590px]">
// // // // // // // // // //         <motion.div style={{ x: reduce ? 0 : parX, y: reduce ? 0 : parY }} className="absolute inset-0">
// // // // // // // // // //           <motion.div animate={reduce ? undefined : { scale: [1, 1.12, 1], opacity: [0.45, 0.65, 0.45] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} className="absolute left-[8%] top-[8%] h-64 w-64 rounded-full bg-violet-300/45 blur-3xl" />
// // // // // // // // // //           <motion.div animate={reduce ? undefined : { scale: [1.1, 1, 1.1], opacity: [0.55, 0.4, 0.55] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[4%] right-[2%] h-64 w-64 rounded-full bg-orange-200/55 blur-3xl" />
// // // // // // // // // //           <motion.div initial={reduce ? false : { opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3, ease: EASE }} className="absolute inset-[7%] rounded-[40px] border border-white/80 bg-white/45 shadow-[0_50px_120px_rgba(55,45,95,.16)] backdrop-blur-2xl" />
// // // // // // // // // //           <motion.div animate={reduce ? undefined : { rotate: 360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-violet-300/50" />
// // // // // // // // // //         </motion.div>

// // // // // // // // // //         <motion.div style={{ x: reduce ? 0 : parXInv, y: reduce ? 0 : parYInv }} className="absolute inset-0">
// // // // // // // // // //           <FloatCard className="absolute left-[12%] top-[14%]" delay={0.1} duration={6}><div className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 shadow-xl"><span className="font-mono text-[8px] text-violet-600">01</span><b className="ml-3 text-xs">SEARCH</b><small className="mt-1 block text-[9px] text-zinc-500">SEO · keywords · intent</small></div></FloatCard>
// // // // // // // // // //           <FloatCard className="absolute right-[7%] top-[31%]" delay={0.25} duration={7} amplitude={12}><div className="rounded-2xl border border-zinc-200 bg-zinc-950 px-4 py-3 text-white shadow-2xl"><span className="font-mono text-[8px] text-violet-300">02</span><b className="ml-3 text-xs">CONTENT</b><small className="mt-1 block text-[9px] text-zinc-400">blogs · pages · social</small></div></FloatCard>
// // // // // // // // // //           <FloatCard className="absolute bottom-[16%] left-[17%]" delay={0.4} duration={6.5} amplitude={9}><div className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 shadow-xl"><span className="font-mono text-[8px] text-orange-500">03</span><b className="ml-3 text-xs">CREATIVE</b><small className="mt-1 block text-[9px] text-zinc-500">design · video · campaigns</small></div></FloatCard>
// // // // // // // // // //           <FloatCard className="absolute bottom-[7%] right-[15%]" delay={0.55} duration={7.5} amplitude={11}><div className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 shadow-xl"><span className="font-mono text-[8px] text-violet-600">04</span><b className="ml-3 text-xs">EXECUTE</b><small className="mt-1 block text-[9px] text-zinc-500">publish · measure · improve</small></div></FloatCard>
// // // // // // // // // //         </motion.div>

// // // // // // // // // //         <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
// // // // // // // // // //           <motion.div initial={reduce ? false : { opacity: 0, scale: 0.7, rotate: -8 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1, delay: 0.4, ease: EASE }} className="grid h-52 w-52 place-items-center rounded-[38px] bg-zinc-950 text-white shadow-[0_35px_90px_rgba(17,17,20,.28)]"><div className="text-center"><motion.div animate={reduce ? undefined : { rotate: [0, 12, -12, 0], scale: [1, 1.12, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}><Sparkles className="mx-auto mb-5 text-violet-300" size={24} /></motion.div><p className="font-mono text-[8px] uppercase tracking-[.2em] text-zinc-400">Digital workflow</p><strong className="mt-3 block text-3xl leading-[.9] tracking-[-.06em]">IDEA<br />TO<br /><span className="text-violet-300">IMPACT.</span></strong></div></motion.div>
// // // // // // // // // //         </div>
// // // // // // // // // //       </motion.div>
// // // // // // // // // //     </div>
// // // // // // // // // //     <motion.a href="#about" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }} className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[9px] uppercase tracking-[.16em] text-zinc-500 sm:flex">Scroll to explore <motion.span animate={reduce ? undefined : { y: [0, 5, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}><ArrowDown size={13} /></motion.span></motion.a>
// // // // // // // // // //   </section>;
// // // // // // // // // // }

// // // // // // // // // // function Experience() {
// // // // // // // // // //   return <section id="experience" className="relative overflow-hidden bg-[#f0edff] py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // // // // // // // //     <Reveal><SectionKicker>Career timeline</SectionKicker><div className="mt-5 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><h2 className="max-w-4xl text-[clamp(50px,7vw,100px)] font-semibold leading-[.85] tracking-[-.075em]">Where I’ve worked.<br /><span className="text-violet-600">What I’ve done.</span></h2><p className="max-w-md text-sm leading-6 text-zinc-600">Three stages of experience across technology, conference communication, content and digital marketing.</p></div></Reveal>
// // // // // // // // // //     <div className="relative mt-14 grid gap-5 lg:grid-cols-3">
// // // // // // // // // //       <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 1.4, ease: EASE }} className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-7 hidden h-px origin-left bg-violet-300 lg:block" />
// // // // // // // // // //       {experience.map((job, i) => <Reveal key={job.company} delay={i * .1}><MagneticCard className="relative h-full"><article className="group h-full rounded-[28px] border border-violet-100 bg-white p-6 shadow-[0_18px_60px_rgba(67,47,130,.07)] transition hover:shadow-[0_28px_80px_rgba(67,47,130,.12)]"><div className="flex items-start justify-between gap-3"><div className="grid h-12 w-12 place-items-center overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm"><Image src={job.logo} alt={`${job.company} logo`} width={48} height={48} className="h-full w-full object-cover" /></div><span className={`rounded-full px-3 py-1.5 font-mono text-[8px] uppercase tracking-[.08em] ${job.current ? "bg-violet-100 text-violet-700" : "bg-zinc-100 text-zinc-500"}`}>{job.current ? "Present" : job.dates}</span></div><p className="mt-8 font-mono text-[9px] uppercase tracking-[.12em] text-zinc-400">0{i + 1} / EXPERIENCE</p><h3 className="mt-2 text-xl font-bold tracking-[-.03em]">{job.role}</h3><a href={job.href ?? "#"} target={job.href ? "_blank" : undefined} rel={job.href ? "noreferrer" : undefined} className="mt-1 inline-block text-xs font-bold text-violet-600">{job.company}</a><div className="mt-5 space-y-2 border-y border-zinc-100 py-4 font-mono text-[8px] uppercase tracking-[.05em] text-zinc-500"><div>⌁ {job.dates}</div><div>⌖ {job.location}</div></div><p className="mt-5 text-[11px] leading-6 text-zinc-600">{job.description}</p><ul className="mt-5 space-y-2 border-t border-zinc-100 pt-4">{job.points.map(point => <li key={point} className="flex gap-2 text-[10px] leading-5 text-zinc-600"><span className="text-violet-500">↳</span>{point}</li>)}</ul><div className="mt-5 flex flex-wrap gap-1.5">{job.tags.map(tag => <span key={tag} className="rounded-full border border-violet-100 bg-violet-50 px-2.5 py-1 text-[8px] font-semibold text-violet-700">{tag}</span>)}</div></article></MagneticCard></Reveal>)}
// // // // // // // // // //     </div>
// // // // // // // // // //   </div></section>;
// // // // // // // // // // }

// // // // // // // // // // function Work() {
// // // // // // // // // //   return <section id="work" className="bg-[#f7f6f2] py-24 text-zinc-950 sm:py-32">
// // // // // // // // // //     <div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // // // // // // // //       <Reveal><div className="flex flex-col justify-between gap-8 border-b border-zinc-200 pb-9 lg:flex-row lg:items-end"><div><SectionKicker>Selected work</SectionKicker><h2 className="mt-5 text-[clamp(48px,7vw,92px)] font-semibold leading-[.88] tracking-[-.075em]">Real projects.<br /><span className="text-violet-600">Clear outcomes.</span></h2></div><div className="max-w-sm"><p className="text-sm leading-7 text-zinc-600">A selection of websites and digital experiences across aquaculture, conferences, technology and consumer brands.</p><Link href="/work-samples" className="mt-5 inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-4 py-2.5 text-xs font-bold transition hover:border-violet-300 hover:text-violet-700">Explore all work <ArrowRight size={14} /></Link></div></div></Reveal>
// // // // // // // // // //       <div className="mt-9 grid gap-5 md:grid-cols-2">
// // // // // // // // // //         {projects.map((project, i) => <Reveal key={project.id} delay={(i % 2) * .08}><article className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-[0_10px_35px_rgba(17,17,20,.035)] transition duration-500 hover:-translate-y-1.5 hover:border-violet-200 hover:shadow-[0_28px_70px_rgba(17,17,20,.1)]">
// // // // // // // // // //           <div className={`relative overflow-hidden bg-gradient-to-br ${project.accent} p-4 sm:p-6`}><div className="mb-4 flex items-center justify-between"><span className="font-mono text-[9px] tracking-[.14em] text-zinc-500">PROJECT {project.id}</span><span className="rounded-full border border-black/10 bg-white/75 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[.1em] text-zinc-600">{project.label}</span></div><div className="flex h-[230px] items-center justify-center overflow-hidden rounded-[18px] border border-black/5 bg-white shadow-[0_12px_35px_rgba(0,0,0,.08)] sm:h-[270px]"><Image src={project.image} alt={`${project.company} website preview`} width={1100} height={760} className="h-full w-full object-contain object-center transition duration-700 ease-out group-hover:scale-[1.04]" /></div></div>
// // // // // // // // // //           <div className="flex flex-1 flex-col p-6 sm:p-7"><p className="font-mono text-[9px] uppercase tracking-[.14em] text-violet-600">{project.company}</p><h3 className="mt-3 max-w-xl text-2xl font-semibold leading-tight tracking-[-.045em] sm:text-[28px]">{project.title}</h3><p className="mt-3 flex-1 text-sm leading-6 text-zinc-600">{project.description}</p><div className="mt-6 flex flex-wrap gap-2 border-t border-zinc-100 pt-5"><Link href={`/work/${project.slug}`} className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-violet-700">View project <ArrowRight size={13} className="transition group-hover:translate-x-0.5" /></Link>{project.link && <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2.5 text-xs font-bold text-zinc-700 transition hover:border-zinc-400">Live website <ExternalLink size={13} /></a>}</div></div>
// // // // // // // // // //         </article></Reveal>)}
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   </section>;
// // // // // // // // // // }

// // // // // // // // // // function ArchivePreview() {
// // // // // // // // // //   const rowOne = [...archive.slice(0, 5), ...archive.slice(0, 5)];
// // // // // // // // // //   const rowTwo = [...archive.slice(5), ...archive.slice(5)];
// // // // // // // // // //   const renderTile = ([src, title, company, format]: string[], i: number) => <Link href="/work-samples" key={`${src}-${i}`} className="group w-[210px] shrink-0 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_8px_25px_rgba(17,17,20,.045)] transition hover:-translate-y-1 hover:shadow-xl sm:w-[250px]"><div className="flex h-[150px] items-center justify-center overflow-hidden bg-[#f2f1ef] p-3 sm:h-[175px] sm:p-4"><Image src={src} alt={title} width={520} height={420} className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.04]" /></div><div className="px-4 py-3"><p className="truncate font-mono text-[8px] uppercase tracking-[.1em] text-zinc-400">{company} · {format}</p><h3 className="mt-1.5 truncate text-xs font-bold text-zinc-900">{title}</h3></div></Link>;
// // // // // // // // // //   return <section className="overflow-hidden bg-white py-24 sm:py-32"><div className="mx-auto w-[min(1240px,calc(100%-32px))]"><Reveal><div className="flex flex-col justify-between gap-7 md:flex-row md:items-end"><div><SectionKicker>Creative archive</SectionKicker><h2 className="mt-5 max-w-5xl text-[clamp(46px,6.5vw,88px)] font-semibold leading-[.88] tracking-[-.075em]">A closer look at<br /><span className="text-violet-600">the creative work.</span></h2><p className="mt-5 max-w-xl text-sm leading-6 text-zinc-500">Banners, carousel templates, event graphics and publications — moving gently so you can browse the range at a glance.</p></div><Link href="/work-samples" className="inline-flex h-fit items-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-xs font-bold text-white transition hover:bg-violet-700">View all samples <ArrowRight size={14} /></Link></div></Reveal></div>
// // // // // // // // // //     <div className="relative mt-10 space-y-4">
// // // // // // // // // //       <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
// // // // // // // // // //       <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
// // // // // // // // // //       <div className="archive-marquee archive-marquee-forward flex gap-4">{rowOne.map((item, i) => renderTile(item, i))}</div><div className="archive-marquee archive-marquee-reverse flex gap-4">{rowTwo.map((item, i) => renderTile(item, i + 100))}</div>
// // // // // // // // // //     </div>
// // // // // // // // // //     <div className="mx-auto mt-7 w-[min(1240px,calc(100%-32px))]"><p className="text-center text-[10px] text-zinc-400">Hover to pause · Select any sample to open the complete archive</p></div>
// // // // // // // // // //   </section>;
// // // // // // // // // // }

// // // // // // // // // // function Skills() {
// // // // // // // // // //   return <section id="skills" className="bg-[#f7f6f2] py-24 sm:py-32">
// // // // // // // // // //     <div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // // // // // // // //       <Reveal><SectionKicker>Skills & tools</SectionKicker>
// // // // // // // // // //         <div className="mt-5 grid gap-6 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
// // // // // // // // // //           <h2 className="max-w-3xl text-[clamp(46px,6.5vw,88px)] font-semibold leading-[.9] tracking-[-.075em]">The skills behind <span className="text-violet-600">the work.</span></h2>
// // // // // // // // // //           <p className="max-w-xl text-sm leading-7 text-zinc-500">A straightforward overview of the marketing disciplines, measurement tools, creative apps and publishing platforms I work with.</p>
// // // // // // // // // //         </div>
// // // // // // // // // //       </Reveal>
// // // // // // // // // //       <div className="mt-12 space-y-4">
// // // // // // // // // //         {skillGroups.map((group, index) => <Reveal key={group.title} delay={index * .06}>
// // // // // // // // // //           <section className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-7">
// // // // // // // // // //             <div className="flex flex-col gap-2 border-b border-zinc-100 pb-4 sm:flex-row sm:items-center sm:justify-between">
// // // // // // // // // //               <h3 className="text-base font-bold tracking-[-.02em]">{group.title}</h3>
// // // // // // // // // //               <span className="font-mono text-[9px] uppercase tracking-[.14em] text-zinc-400">{String(group.items.length).padStart(2, "0")} skills & tools</span>
// // // // // // // // // //             </div>
// // // // // // // // // //             <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.025 } } }} className="mt-5 flex flex-wrap gap-2">{group.items.map(item => <motion.span key={item} variants={{ hidden: { opacity: 0, y: 12, scale: 0.94 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: EASE } } }} whileHover={{ y: -2 }} className="inline-flex cursor-default items-center rounded-full border border-zinc-200 bg-zinc-50 px-3.5 py-2 text-xs font-medium text-zinc-700 transition-colors hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700">{item}</motion.span>)}</motion.div>
// // // // // // // // // //           </section>
// // // // // // // // // //         </Reveal>)}
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   </section>;
// // // // // // // // // // }

// // // // // // // // // // function Process() {
// // // // // // // // // //   const steps = [["01", "Understand", "Goal · audience · message"], ["02", "Structure", "Content · information · flow"], ["03", "Create", "Design · video · visual system"], ["04", "Execute", "Publish · schedule · maintain"]];
// // // // // // // // // //   return <section className="relative overflow-hidden bg-violet-600 py-28 text-white sm:py-36"><div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.14)_1px,transparent_1px)] [background-size:44px_44px]" /><div className="relative mx-auto w-[min(1240px,calc(100%-32px))]"><Reveal><SectionKicker>How I work</SectionKicker><h2 className="mt-5 max-w-4xl text-[clamp(52px,7vw,104px)] font-semibold leading-[.84] tracking-[-.08em]">From brief to <span className="text-violet-950/80">publish-ready.</span></h2></Reveal>
// // // // // // // // // //     <div className="relative mt-14 grid gap-2 md:grid-cols-4">
// // // // // // // // // //       <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 1.4, ease: EASE }} className="pointer-events-none absolute left-[12%] right-[12%] top-[34px] hidden h-px origin-left bg-white/40 md:block" />
// // // // // // // // // //       {steps.map(([n, title, desc], i) => <Reveal key={n} delay={i * .1}><motion.article whileHover={{ y: -6 }} transition={{ duration: 0.3, ease: EASE }} className="h-full rounded-[24px] border border-white/20 bg-white/10 p-6 backdrop-blur-xl transition-colors hover:bg-white/15"><span className="font-mono text-[9px] text-violet-100">{n}</span><h3 className="mt-14 text-2xl font-semibold tracking-[-.04em]">{title}</h3><p className="mt-2 text-xs leading-5 text-violet-100">{desc}</p></motion.article></Reveal>)}
// // // // // // // // // //     </div></div></section>;
// // // // // // // // // // }

// // // // // // // // // // function Testimonials() {
// // // // // // // // // //   return <section id="testimonials" className="overflow-hidden bg-zinc-950 py-28 text-white sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]"><Reveal><SectionKicker>Testimonials</SectionKicker><h2 className="mt-5 max-w-4xl text-[clamp(48px,6.7vw,96px)] font-semibold leading-[.86] tracking-[-.075em]">Good work should be <span className="text-violet-300">remembered.</span></h2></Reveal></div><div className="mt-14 overflow-hidden border-y border-white/10 py-4"><div className="flex w-max animate-[marquee_28s_linear_infinite] gap-4 hover:[animation-play-state:paused]">{[...testimonials, ...testimonials, ...testimonials].map(([name, role, quote], i) => <article key={`${name}-${i}`} className="w-[320px] rounded-[24px] border border-white/10 bg-white/[.045] p-6 sm:w-[420px]"><div className="text-violet-300">★★★★★</div><p className="mt-5 text-sm leading-6 text-zinc-300">“{quote}”</p><div className="mt-7 border-t border-white/10 pt-4"><b className="block text-xs">{name}</b><span className="mt-1 block text-[9px] text-zinc-500">{role}</span></div></article>)}</div></div></section>;
// // // // // // // // // // }

// // // // // // // // // // /* ---------- Page ---------- */

// // // // // // // // // // const navLinks = [["About", "about"], ["Experience", "experience"], ["Work", "work"], ["Skills", "skills"], ["Testimonials", "testimonials"], ["Contact", "contact"]];

// // // // // // // // // // export default function Portfolio() {
// // // // // // // // // //   const [menu, setMenu] = useState(false);
// // // // // // // // // //   const [active, setActive] = useState("home");
// // // // // // // // // //   const [scrolled, setScrolled] = useState(false);

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     const ids = ["home", ...navLinks.map(([, id]) => id)];
// // // // // // // // // //     const els = ids.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];
// // // // // // // // // //     const io = new IntersectionObserver(entries => {
// // // // // // // // // //       entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
// // // // // // // // // //     }, { rootMargin: "-45% 0px -50% 0px" });
// // // // // // // // // //     els.forEach(el => io.observe(el));
// // // // // // // // // //     const onScroll = () => setScrolled(window.scrollY > 24);
// // // // // // // // // //     onScroll();
// // // // // // // // // //     window.addEventListener("scroll", onScroll, { passive: true });
// // // // // // // // // //     return () => { io.disconnect(); window.removeEventListener("scroll", onScroll); };
// // // // // // // // // //   }, []);

// // // // // // // // // //   return <main className="min-h-screen overflow-hidden bg-[#f7f6f2] text-zinc-950 selection:bg-violet-200">
// // // // // // // // // //     <ScrollProgress />
// // // // // // // // // //     <motion.header initial={{ y: -70, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, delay: 0.1, ease: EASE }} className={`fixed left-1/2 top-4 z-50 flex w-[min(1180px,calc(100%-20px))] -translate-x-1/2 items-center justify-between rounded-2xl border px-3 py-2.5 backdrop-blur-2xl transition-all duration-500 ${scrolled ? "border-zinc-200/80 bg-white/85 shadow-[0_18px_55px_rgba(17,17,20,.12)]" : "border-white/70 bg-white/60 shadow-[0_18px_55px_rgba(17,17,20,.06)]"}`}>
// // // // // // // // // //       <a href="#home" className="flex items-center gap-2.5"><span className="grid h-9 w-9 place-items-center rounded-xl bg-zinc-950 text-[10px] font-bold text-white">AV</span><span><b className="block text-[11px] leading-none">Aditya Varma</b><small className="mt-1 block text-[7px] uppercase tracking-[.12em] text-zinc-400">Digital Marketing Executive</small></span></a>
// // // // // // // // // //       <nav className="hidden items-center gap-1 lg:flex">{navLinks.map(([label, id]) => <a key={id} href={`#${id}`} className={`relative rounded-full px-3 py-1.5 text-[9px] font-semibold transition-colors ${active === id ? "text-zinc-950" : "text-zinc-500 hover:text-zinc-950"}`}>{active === id && <motion.span layoutId="nav-pill" transition={{ type: "spring", stiffness: 380, damping: 32 }} className="absolute inset-0 -z-10 rounded-full bg-violet-100" />}{label}</a>)}<Link href="/work-samples" className="rounded-full px-3 py-1.5 text-[9px] font-semibold text-zinc-500 transition hover:text-zinc-950">Work Archive</Link></nav>
// // // // // // // // // //       <a href="#contact" className="hidden items-center gap-2 rounded-full bg-zinc-950 px-4 py-2.5 text-[9px] font-bold text-white transition hover:bg-violet-700 lg:inline-flex">Let’s talk <ArrowRight size={12} /></a>
// // // // // // // // // //       <button onClick={() => setMenu(!menu)} className="grid h-9 w-9 place-items-center rounded-xl border border-zinc-200 bg-white lg:hidden" aria-label="Toggle menu" aria-expanded={menu}>{menu ? <X size={16} /> : <Menu size={16} />}</button>
// // // // // // // // // //       <AnimatePresence>{menu && <motion.div initial={{ opacity: 0, y: -8, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8, scale: 0.97 }} transition={{ duration: 0.25, ease: EASE }} className="absolute right-0 top-14 w-60 origin-top-right rounded-2xl border border-zinc-200 bg-white p-2 shadow-2xl lg:hidden">{navLinks.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenu(false)} className={`block rounded-xl px-3 py-3 text-xs font-semibold hover:bg-zinc-50 ${active === id ? "text-violet-700" : ""}`}>{label}</a>)}<Link href="/work-samples" onClick={() => setMenu(false)} className="block rounded-xl px-3 py-3 text-xs font-semibold hover:bg-zinc-50">Work Archive</Link></motion.div>}</AnimatePresence>
// // // // // // // // // //     </motion.header>
// // // // // // // // // //     <Hero />
// // // // // // // // // //     <section id="about" className="bg-white py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]"><Reveal><SectionKicker>About me</SectionKicker><h2 className="mt-5 max-w-5xl text-[clamp(50px,7vw,100px)] font-semibold leading-[.84] tracking-[-.08em]">I work where <span className="text-violet-600">marketing, content and execution</span> meet.</h2></Reveal><div className="mt-14 grid gap-10 lg:grid-cols-[1.25fr_.75fr]"><Reveal><p className="max-w-3xl text-xl leading-8 tracking-[-.02em] text-zinc-600 sm:text-2xl sm:leading-10">I enjoy taking a raw idea, messy information or business requirement and turning it into something structured, visual, useful and ready to publish — whether that is a website, campaign, social post, blog, conference asset or digital workflow.</p></Reveal><Reveal delay={.1}><div className="rounded-[28px] border border-zinc-200 bg-[#f7f6f2] p-6"><p className="font-mono text-[9px] uppercase tracking-[.14em] text-zinc-400">My working range</p><motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }} className="mt-6 grid grid-cols-2 gap-2">{["Websites", "SEO", "Social", "Content", "Creative", "Events", "Publishing", "Automation"].map((x, i) => <motion.span key={x} variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } } }} whileHover={{ y: -2 }} className="rounded-xl border border-zinc-200 bg-white px-3 py-3 text-[9px] font-bold text-zinc-700 transition-colors hover:border-violet-200 hover:text-violet-700">0{i + 1} · {x}</motion.span>)}</motion.div></div></Reveal></div></div></section>
// // // // // // // // // //     <Experience />
// // // // // // // // // //     <Work />
// // // // // // // // // //     <ArchivePreview />
// // // // // // // // // //     <Skills />
// // // // // // // // // //     <Process />
// // // // // // // // // //     <section id="insights" className="bg-[#f7f6f2] py-28 sm:py-36"><div className="mx-auto grid w-[min(1240px,calc(100%-32px))] items-center gap-10 lg:grid-cols-[1.1fr_.9fr]"><Reveal><SectionKicker>Insights · publishing</SectionKicker><h2 className="mt-5 text-[clamp(48px,6.5vw,94px)] font-semibold leading-[.86] tracking-[-.075em]">Content is not decoration. <span className="text-violet-600">It is part of the product.</span></h2><p className="mt-7 max-w-2xl text-sm leading-7 text-zinc-500">The portfolio can keep expanding with published articles, SEO work, case studies and content projects as more source material is added.</p></Reveal><Reveal delay={.1}><MagneticCard><div className="overflow-hidden rounded-[32px] border border-zinc-200 bg-white p-3 shadow-[0_25px_80px_rgba(17,17,20,.08)]"><Image src="/work/innovare/blog.png" alt="Innovare blog publishing preview" width={900} height={650} className="h-[360px] w-full rounded-[24px] object-cover object-top" /><div className="p-4"><p className="font-mono text-[8px] uppercase tracking-[.12em] text-zinc-400">SEO · Content · Publishing</p><h3 className="mt-2 text-lg font-bold">Technical content presented as a usable digital experience.</h3></div></div></MagneticCard></Reveal></div></section>
// // // // // // // // // //     <Testimonials />
// // // // // // // // // //     <section id="contact" className="bg-[#f2efff] py-24 text-zinc-950 sm:py-32"><div className="mx-auto w-[min(1240px,calc(100%-32px))]"><Reveal><SectionKicker>Contact</SectionKicker><div className="mt-6 flex flex-col justify-between gap-12 rounded-[32px] border border-violet-100 bg-white/75 p-7 shadow-[0_20px_70px_rgba(91,33,182,.06)] sm:p-12 lg:flex-row lg:items-end"><div><h2 className="max-w-5xl text-[clamp(48px,7vw,100px)] font-semibold leading-[.86] tracking-[-.08em]">Let’s build something <span className="text-violet-600">worth showing.</span></h2><p className="mt-7 max-w-xl text-sm leading-6 text-zinc-600">Available for digital marketing, website, content, social media and creative projects.</p></div><div className="flex shrink-0 flex-col items-start gap-4"><motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} href="mailto:hello@adityavarma.dev" className="inline-flex items-center gap-3 rounded-full bg-zinc-950 px-5 py-3 text-xs font-bold text-white transition-colors hover:bg-violet-700"><Mail size={14} /> hello@adityavarma.dev <ArrowRight size={14} /></motion.a><div className="flex gap-2"><motion.a whileHover={{ y: -3 }} href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-full border border-zinc-200 bg-white transition-colors hover:border-violet-300 hover:text-violet-700"><Linkedin size={15} /></motion.a><motion.a whileHover={{ y: -3 }} href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-zinc-200 bg-white transition-colors hover:border-violet-300 hover:text-violet-700"><Instagram size={15} /></motion.a></div></div></div></Reveal><footer className="mt-10 flex flex-col justify-between gap-3 border-t border-violet-200 pt-5 font-mono text-[8px] uppercase tracking-[.12em] text-zinc-500 sm:flex-row"><span>© 2026 Aditya Varma</span><span>Digital Marketing · Web · Content · Creative</span></footer></div></section>
// // // // // // // // // //   </main>;
// // // // // // // // // // }
// // // // // // // // // "use client";

// // // // // // // // // import { ArrowDown, ArrowRight, ArrowUp, ExternalLink, Instagram, Linkedin, Mail, Menu, Quote, X } from "lucide-react";
// // // // // // // // // import { AnimatePresence, animate, motion, useInView, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
// // // // // // // // // import Link from "next/link";
// // // // // // // // // import Image from "next/image";
// // // // // // // // // import { useEffect, useRef, useState } from "react";

// // // // // // // // // const EASE = [0.16, 1, 0.3, 1] as const;

// // // // // // // // // /* ------------------------------------------------------------------ */
// // // // // // // // // /* DATA (unchanged content)                                            */
// // // // // // // // // /* ------------------------------------------------------------------ */

// // // // // // // // // const projects = [
// // // // // // // // //   { id: "01", company: "Innovare Biopharma LLP", label: "WEBSITE · SEO · CONTENT", title: "Building a digital home for aquaculture health.", description: "Website development, product presentation, blog publishing, SEO-focused content, social support and digital marketing execution.", image: "/work/websites/innovare-home.png", slug: "innovare-biopharma", link: "https://innovarebiopharma.com/", glow: "bg-violet-500/25" },
// // // // // // // // //   { id: "02", company: "C-STAR Global", label: "EVENTS · CONTENT · CREATIVE", title: "Turning conference information into a complete digital experience.", description: "Conference communication, speaker data, landing pages, banners, videos, social publishing and conference publications.", image: "/work/websites/cstar-home.png", slug: "c-star-global", glow: "bg-indigo-500/25" },
// // // // // // // // //   { id: "03", company: "Ecorfy Technologies Pvt. Ltd.", label: "WEB · SOCIAL · TECHNOLOGY", title: "Making technology easier to understand and easier to publish.", description: "Website work and technology-focused digital communication across software, AI, social media and marketing content.", image: "/work/ecorfy/website-cover.png", slug: "ecorfy-technologies", link: "https://www.ecorfy.com/", glow: "bg-cyan-500/20" },
// // // // // // // // //   { id: "04", company: "Shreshta Pickles", label: "FREELANCE · WEBSITE", title: "A clean digital storefront for a traditional food brand.", description: "Freelance website development with a product-led layout, clear navigation and a focused brand presentation.", image: "/work/websites/shreshta-home.png", slug: "shreshta-pickles", link: "https://shreshtapickles.com/", glow: "bg-orange-500/20" },
// // // // // // // // // ];

// // // // // // // // // const experience = [
// // // // // // // // //   { company: "Innovare Biopharma LLP", role: "Digital Marketing Executive", dates: "April 2026 — Present", location: "Hyderabad, India", logo: "/companies/innovare-logo.jpg", current: true, description: "Digital marketing, website management, SEO-focused content, social media support and creative production for an aquaculture-focused brand.", points: ["Managed website content, landing pages and digital publishing", "Supported SEO, blogs, social media and campaign creatives", "Created and coordinated marketing assets across digital channels"], tags: ["Digital Marketing", "SEO", "Content", "Social Media"], href: "https://innovarebiopharma.com/" },
// // // // // // // // //   { company: "C-STAR Global Inc.", role: "Content Developer · Digital Marketing", dates: "April 2023 — February 2026", location: "Hyderabad, India", logo: "/companies/cstar-logo.jpg", description: "Worked across conference communication, website content, speaker data, creative production, videos, conference publications and social media publishing.", points: ["Managed conference and expo content from raw data to publishable assets", "Created banners, videos, posters, conference books and social content", "Supported websites, virtual conferences and scheduled social publishing"], tags: ["Content Development", "Events", "Social Media", "Creative"] },
// // // // // // // // //   { company: "Ecorfy Technologies Pvt. Ltd.", role: "Software Engineer", dates: "Earlier experience", location: "Hyderabad, India", logo: "/companies/ecorfy-logo.jpg", description: "Earlier technology experience supporting web development and digital communication projects in a technology-focused environment.", points: ["Worked on website and software-oriented digital projects", "Supported technology communication and online presentation", "Built technical experience that now strengthens marketing execution"], tags: ["Web", "Software", "Digital", "Technology"], href: "https://www.ecorfy.com/" },
// // // // // // // // // ];

// // // // // // // // // const skillGroups = [
// // // // // // // // //   { title: "Digital Marketing", items: ["SEO", "On-page SEO", "Technical SEO", "Off-page SEO", "Content Development", "Content Marketing", "Social Media Marketing", "Google Ads", "Meta Ads", "Performance Marketing", "Lead Generation", "Email Marketing", "Keyword Research"] },
// // // // // // // // //   { title: "Analytics & Automation", items: ["Google Analytics 4 (GA4)", "Google Tag Manager (GTM)", "Google Search Console", "n8n Automation", "AI Tools"] },
// // // // // // // // //   { title: "Creative & Publishing Tools", items: ["Canva", "Renderforest", "CapCut", "Filmora", "Publito", "Publer", "Swipe Pages", "WordPress", "Hostinger", "Open Mercato"] },
// // // // // // // // // ];

// // // // // // // // // const archive = [
// // // // // // // // //   ["/work/innovare/samples/hygiene.png", "Hygiene in Shrimp Farms", "Innovare", "Educational social creative"],
// // // // // // // // //   ["/work/ecorfy/samples/top-generative-ai.png", "Generative AI Development", "Ecorfy", "Social banner"],
// // // // // // // // //   ["/work/uploads/AP_Defence_Carousel.jpg", "AP Defence & Aerospace", "Carousel", "Carousel template"],
// // // // // // // // //   ["/work/uploads/India_infrastructure.jpg", "India AI Infrastructure Race", "Carousel", "Carousel template"],
// // // // // // // // //   ["/work/innovare/samples/nutrition.png", "Nutrition for Stronger Shrimp", "Innovare", "Educational social creative"],
// // // // // // // // //   ["/work/ecorfy/samples/transform-ideas.png", "Transform Ideas", "Ecorfy", "Generative AI social"],
// // // // // // // // //   ["/work/cstar/women-forum-2024.jpg", "Global Women Forum", "C-STAR", "Event banner"],
// // // // // // // // //   ["/work/cstar/global-technology-forum-2024.jpg", "Global Technology Forum", "C-STAR", "Event poster"],
// // // // // // // // //   ["/work/uploads/Book_Updated_3_.jpg", "World Women & Health Forum", "C-STAR", "Conference publication"],
// // // // // // // // //   ["/work/ecorfy/samples/software-development.png", "Software Development", "Ecorfy", "Social banner"],
// // // // // // // // // ];

// // // // // // // // // const testimonials = [
// // // // // // // // //   ["Ravindra Raju", "Founder & Owner · Shreshta Pickles", "Working with Aditya has been a great experience. He efficiently manages our website, handles updates whenever needed, and supports our business operations."],
// // // // // // // // //   ["Sitarama Raju", "CEO · Innovare Labs", "Aditya played an important role in supporting our digital marketing and promotional activities. His contributions to website development, content management, and conference promotions helped strengthen our brand presence."],
// // // // // // // // // ];

// // // // // // // // // const roles = ["Websites", "SEO", "Content", "Creative", "Events"];
// // // // // // // // // const navLinks = [["About", "about"], ["Experience", "experience"], ["Work", "work"], ["Skills", "skills"], ["Testimonials", "testimonials"], ["Contact", "contact"]];
// // // // // // // // // const totalSkills = skillGroups.reduce((a, g) => a + g.items.length, 0);

// // // // // // // // // /* ------------------------------------------------------------------ */
// // // // // // // // // /* GLOBAL CSS (self-contained — no globals.css dependency)             */
// // // // // // // // // /* ------------------------------------------------------------------ */

// // // // // // // // // const CSS = `
// // // // // // // // // .av-blob{position:fixed;border-radius:9999px;filter:blur(110px);will-change:transform;pointer-events:none}
// // // // // // // // // @keyframes av-drift-a{0%,100%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(14vw,9vh,0) scale(1.25)}}
// // // // // // // // // @keyframes av-drift-b{0%,100%{transform:translate3d(0,0,0) scale(1.1)}50%{transform:translate3d(-12vw,-8vh,0) scale(.9)}}
// // // // // // // // // @keyframes av-drift-c{0%,100%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(-8vw,12vh,0) scale(1.2)}}
// // // // // // // // // .av-a{animation:av-drift-a 26s ease-in-out infinite}
// // // // // // // // // .av-b{animation:av-drift-b 32s ease-in-out infinite}
// // // // // // // // // .av-c{animation:av-drift-c 38s ease-in-out infinite}
// // // // // // // // // .av-grain{background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");opacity:.07;mix-blend-mode:overlay}
// // // // // // // // // @keyframes av-spin{to{transform:rotate(360deg)}}
// // // // // // // // // .av-spin{animation:av-spin 48s linear infinite}
// // // // // // // // // .av-spin-rev{animation:av-spin 48s linear infinite reverse}
// // // // // // // // // .av-spin-slow{animation:av-spin 90s linear infinite reverse}
// // // // // // // // // @keyframes av-pulse{0%,100%{opacity:.55;transform:scale(1)}50%{opacity:.95;transform:scale(1.08)}}
// // // // // // // // // .av-pulse{animation:av-pulse 6s ease-in-out infinite}
// // // // // // // // // @keyframes av-shine{0%{background-position:0% 50%}100%{background-position:200% 50%}}
// // // // // // // // // .av-shine{background-size:200% 100%;animation:av-shine 7s linear infinite}
// // // // // // // // // @keyframes av-marq{to{transform:translateX(-50%)}}
// // // // // // // // // .av-marq{display:flex;width:max-content;animation:av-marq 48s linear infinite}
// // // // // // // // // .av-marq-rev{animation-direction:reverse;animation-duration:56s}
// // // // // // // // // .av-pausable:hover .av-marq{animation-play-state:paused}
// // // // // // // // // .av-spot{position:relative}
// // // // // // // // // .av-spot::before{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;opacity:0;transition:opacity .4s;background:radial-gradient(420px circle at var(--mx,50%) var(--my,50%),rgba(139,92,246,.16),transparent 45%)}
// // // // // // // // // .av-spot::after{content:"";position:absolute;inset:0;border-radius:inherit;padding:1px;pointer-events:none;opacity:0;transition:opacity .4s;background:radial-gradient(320px circle at var(--mx,50%) var(--my,50%),rgba(196,181,253,.75),transparent 45%);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#000 0 0) content-box exclude,linear-gradient(#000 0 0)}
// // // // // // // // // .av-spot:hover::before,.av-spot:hover::after{opacity:1}
// // // // // // // // // .av-outline{-webkit-text-stroke:1px rgba(255,255,255,.22);color:transparent}
// // // // // // // // // html{scroll-behavior:smooth}
// // // // // // // // // @media (prefers-reduced-motion:reduce){.av-a,.av-b,.av-c,.av-spin,.av-spin-rev,.av-spin-slow,.av-pulse,.av-shine,.av-marq{animation:none!important}html{scroll-behavior:auto}}
// // // // // // // // // `;

// // // // // // // // // /* ------------------------------------------------------------------ */
// // // // // // // // // /* BACKGROUND                                                          */
// // // // // // // // // /* ------------------------------------------------------------------ */

// // // // // // // // // function ParticleField() {
// // // // // // // // //   const ref = useRef<HTMLCanvasElement>(null);
// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const canvas = ref.current;
// // // // // // // // //     if (!canvas) return;
// // // // // // // // //     const ctx = canvas.getContext("2d");
// // // // // // // // //     if (!ctx) return;
// // // // // // // // //     const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
// // // // // // // // //     const dpr = Math.min(window.devicePixelRatio || 1, 2);
// // // // // // // // //     const mouse = { x: -9999, y: -9999 };
// // // // // // // // //     type P = { x: number; y: number; vx: number; vy: number; r: number };
// // // // // // // // //     let ps: P[] = [];
// // // // // // // // //     let w = 0, h = 0, raf = 0;

// // // // // // // // //     const init = () => {
// // // // // // // // //       w = window.innerWidth; h = window.innerHeight;
// // // // // // // // //       canvas.width = w * dpr; canvas.height = h * dpr;
// // // // // // // // //       canvas.style.width = `${w}px`; canvas.style.height = `${h}px`;
// // // // // // // // //       ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
// // // // // // // // //       const n = Math.min(w < 768 ? 45 : 105, Math.floor((w * h) / 15000));
// // // // // // // // //       ps = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.28, vy: (Math.random() - 0.5) * 0.28, r: Math.random() * 1.4 + 0.5 }));
// // // // // // // // //     };

// // // // // // // // //     const frame = () => {
// // // // // // // // //       ctx.clearRect(0, 0, w, h);
// // // // // // // // //       for (let i = 0; i < ps.length; i++) {
// // // // // // // // //         const p = ps[i];
// // // // // // // // //         if (!reduce) {
// // // // // // // // //           p.x += p.vx; p.y += p.vy;
// // // // // // // // //           if (p.x < -10) p.x = w + 10; else if (p.x > w + 10) p.x = -10;
// // // // // // // // //           if (p.y < -10) p.y = h + 10; else if (p.y > h + 10) p.y = -10;
// // // // // // // // //         }
// // // // // // // // //         const mdx = p.x - mouse.x, mdy = p.y - mouse.y;
// // // // // // // // //         const md = Math.hypot(mdx, mdy);
// // // // // // // // //         if (md < 180) {
// // // // // // // // //           ctx.strokeStyle = `rgba(196,181,253,${(1 - md / 180) * 0.55})`;
// // // // // // // // //           ctx.lineWidth = 0.8;
// // // // // // // // //           ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
// // // // // // // // //           if (!reduce) { p.x += (mdx / md) * 0.35; p.y += (mdy / md) * 0.35; }
// // // // // // // // //         }
// // // // // // // // //         for (let j = i + 1; j < ps.length; j++) {
// // // // // // // // //           const q = ps[j];
// // // // // // // // //           const d = Math.hypot(p.x - q.x, p.y - q.y);
// // // // // // // // //           if (d < 125) {
// // // // // // // // //             ctx.strokeStyle = `rgba(139,92,246,${(1 - d / 125) * 0.28})`;
// // // // // // // // //             ctx.lineWidth = 0.6;
// // // // // // // // //             ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
// // // // // // // // //           }
// // // // // // // // //         }
// // // // // // // // //         ctx.fillStyle = "rgba(221,214,254,.75)";
// // // // // // // // //         ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
// // // // // // // // //       }
// // // // // // // // //       if (!reduce) raf = requestAnimationFrame(frame);
// // // // // // // // //     };

// // // // // // // // //     const onMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
// // // // // // // // //     const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };
// // // // // // // // //     const onResize = () => { init(); if (reduce) frame(); };
// // // // // // // // //     const onVis = () => { if (document.hidden) cancelAnimationFrame(raf); else if (!reduce) raf = requestAnimationFrame(frame); };

// // // // // // // // //     init(); frame();
// // // // // // // // //     window.addEventListener("mousemove", onMove, { passive: true });
// // // // // // // // //     window.addEventListener("mouseleave", onLeave);
// // // // // // // // //     window.addEventListener("resize", onResize);
// // // // // // // // //     document.addEventListener("visibilitychange", onVis);
// // // // // // // // //     return () => {
// // // // // // // // //       cancelAnimationFrame(raf);
// // // // // // // // //       window.removeEventListener("mousemove", onMove);
// // // // // // // // //       window.removeEventListener("mouseleave", onLeave);
// // // // // // // // //       window.removeEventListener("resize", onResize);
// // // // // // // // //       document.removeEventListener("visibilitychange", onVis);
// // // // // // // // //     };
// // // // // // // // //   }, []);
// // // // // // // // //   return <canvas ref={ref} aria-hidden className="fixed inset-0 z-[1] pointer-events-none" />;
// // // // // // // // // }

// // // // // // // // // function CursorGlow() {
// // // // // // // // //   const mx = useMotionValue(-600);
// // // // // // // // //   const my = useMotionValue(-600);
// // // // // // // // //   const sx = useSpring(mx, { stiffness: 90, damping: 20, mass: 0.6 });
// // // // // // // // //   const sy = useSpring(my, { stiffness: 90, damping: 20, mass: 0.6 });
// // // // // // // // //   const x = useTransform(sx, v => v - 280);
// // // // // // // // //   const y = useTransform(sy, v => v - 280);
// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const move = (e: MouseEvent) => { mx.set(e.clientX); my.set(e.clientY); };
// // // // // // // // //     window.addEventListener("mousemove", move, { passive: true });
// // // // // // // // //     return () => window.removeEventListener("mousemove", move);
// // // // // // // // //   }, [mx, my]);
// // // // // // // // //   return <motion.div aria-hidden style={{ x, y }} className="pointer-events-none fixed left-0 top-0 z-[2] hidden h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,.17),transparent_62%)] lg:block" />;
// // // // // // // // // }

// // // // // // // // // function Backdrop() {
// // // // // // // // //   return <div aria-hidden className="pointer-events-none fixed inset-0 z-0 bg-[#07060d]">
// // // // // // // // //     <div className="av-blob av-a -left-[10vw] -top-[12vh] h-[55vw] w-[55vw] max-h-[760px] max-w-[760px] bg-violet-700/35" />
// // // // // // // // //     <div className="av-blob av-b -right-[8vw] top-[18vh] h-[48vw] w-[48vw] max-h-[680px] max-w-[680px] bg-cyan-500/20" />
// // // // // // // // //     <div className="av-blob av-c bottom-[-18vh] left-[22vw] h-[50vw] w-[50vw] max-h-[700px] max-w-[700px] bg-fuchsia-600/20" />
// // // // // // // // //     <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_72%)]" />
// // // // // // // // //     <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(7,6,13,.85)_100%)]" />
// // // // // // // // //   </div>;
// // // // // // // // // }

// // // // // // // // // /* ------------------------------------------------------------------ */
// // // // // // // // // /* PRIMITIVES                                                          */
// // // // // // // // // /* ------------------------------------------------------------------ */

// // // // // // // // // function ScrollProgress() {
// // // // // // // // //   const { scrollYProgress } = useScroll();
// // // // // // // // //   const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.3 });
// // // // // // // // //   return <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300" />;
// // // // // // // // // }

// // // // // // // // // function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
// // // // // // // // //   const reduce = useReducedMotion();
// // // // // // // // //   return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 36, filter: "blur(10px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.85, delay, ease: EASE }}>{children}</motion.div>;
// // // // // // // // // }

// // // // // // // // // function SpotCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
// // // // // // // // //   const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
// // // // // // // // //     const r = e.currentTarget.getBoundingClientRect();
// // // // // // // // //     e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
// // // // // // // // //     e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
// // // // // // // // //   };
// // // // // // // // //   return <div onMouseMove={onMove} className={`av-spot ${className}`}>{children}</div>;
// // // // // // // // // }

// // // // // // // // // function Tilt({ children, className = "" }: { children: React.ReactNode; className?: string }) {
// // // // // // // // //   const reduce = useReducedMotion();
// // // // // // // // //   const ref = useRef<HTMLDivElement>(null);
// // // // // // // // //   const px = useMotionValue(0);
// // // // // // // // //   const py = useMotionValue(0);
// // // // // // // // //   const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [5, -5]), { stiffness: 200, damping: 20 });
// // // // // // // // //   const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-5, 5]), { stiffness: 200, damping: 20 });
// // // // // // // // //   const onMove = (e: React.MouseEvent) => {
// // // // // // // // //     if (reduce || !ref.current) return;
// // // // // // // // //     const r = ref.current.getBoundingClientRect();
// // // // // // // // //     px.set((e.clientX - r.left) / r.width - 0.5);
// // // // // // // // //     py.set((e.clientY - r.top) / r.height - 0.5);
// // // // // // // // //   };
// // // // // // // // //   return <motion.div ref={ref} onMouseMove={onMove} onMouseLeave={() => { px.set(0); py.set(0); }} style={{ rotateX, rotateY, transformPerspective: 1100 }} className={className}>{children}</motion.div>;
// // // // // // // // // }

// // // // // // // // // function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
// // // // // // // // //   const ref = useRef<HTMLSpanElement>(null);
// // // // // // // // //   const inView = useInView(ref, { once: true });
// // // // // // // // //   const reduce = useReducedMotion();
// // // // // // // // //   const [v, setV] = useState(0);
// // // // // // // // //   useEffect(() => {
// // // // // // // // //     if (!inView) return;
// // // // // // // // //     if (reduce) { setV(to); return; }
// // // // // // // // //     const c = animate(0, to, { duration: 1.6, ease: EASE, onUpdate: x => setV(Math.round(x)) });
// // // // // // // // //     return () => c.stop();
// // // // // // // // //   }, [inView, to, reduce]);
// // // // // // // // //   return <span ref={ref}>{String(v).padStart(2, "0")}{suffix}</span>;
// // // // // // // // // }

// // // // // // // // // function SectionHead({ n, kicker, children, sub }: { n: string; kicker: string; children: React.ReactNode; sub?: string }) {
// // // // // // // // //   return <Reveal>
// // // // // // // // //     <div className="flex items-center gap-4">
// // // // // // // // //       <span className="av-outline font-mono text-5xl font-semibold leading-none sm:text-6xl">{n}</span>
// // // // // // // // //       <span className="h-px w-12 bg-gradient-to-r from-violet-400/70 to-transparent" />
// // // // // // // // //       <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-violet-300">{kicker}</span>
// // // // // // // // //     </div>
// // // // // // // // //     <div className="mt-7 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
// // // // // // // // //       <h2 className="max-w-4xl text-[clamp(44px,6.6vw,92px)] font-semibold leading-[.9] tracking-[-.06em] text-white">{children}</h2>
// // // // // // // // //       {sub && <p className="max-w-sm text-sm leading-7 text-zinc-400">{sub}</p>}
// // // // // // // // //     </div>
// // // // // // // // //   </Reveal>;
// // // // // // // // // }

// // // // // // // // // const Grad = ({ children }: { children: React.ReactNode }) => <span className="av-shine bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">{children}</span>;

// // // // // // // // // /* ------------------------------------------------------------------ */
// // // // // // // // // /* HERO                                                                */
// // // // // // // // // /* ------------------------------------------------------------------ */

// // // // // // // // // function RotatingWord() {
// // // // // // // // //   const [i, setI] = useState(0);
// // // // // // // // //   useEffect(() => { const t = setInterval(() => setI(x => (x + 1) % roles.length), 2200); return () => clearInterval(t); }, []);
// // // // // // // // //   return <span className="relative inline-flex h-[1.4em] min-w-[7.5ch] items-center overflow-hidden align-bottom">
// // // // // // // // //     <AnimatePresence mode="wait">
// // // // // // // // //       <motion.span key={roles[i]} initial={{ y: "100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-100%", opacity: 0 }} transition={{ duration: 0.45, ease: EASE }} className="absolute left-0 font-semibold text-white">{roles[i]}</motion.span>
// // // // // // // // //     </AnimatePresence>
// // // // // // // // //   </span>;
// // // // // // // // // }

// // // // // // // // // function WordReveal({ text, delay = 0, grad = false }: { text: string; delay?: number; grad?: boolean }) {
// // // // // // // // //   const reduce = useReducedMotion();
// // // // // // // // //   return <>{text.split(" ").map((w, i) => <span key={`${w}-${i}`} className="inline-block overflow-hidden pb-[.16em] -mb-[.16em] align-bottom"><motion.span className="inline-block" initial={reduce ? false : { y: "115%", rotate: 5 }} animate={{ y: 0, rotate: 0 }} transition={{ duration: 1, delay: delay + i * 0.09, ease: EASE }}>{grad ? <Grad>{w}</Grad> : w}&nbsp;</motion.span></span>)}</>;
// // // // // // // // // }

// // // // // // // // // function Orbit() {
// // // // // // // // //   const chips: [string, string, number][] = [["SEO", "01", 0], ["CONTENT", "02", 90], ["CREATIVE", "03", 180], ["EXECUTE", "04", 270]];
// // // // // // // // //   return <div className="relative mx-auto aspect-square w-full max-w-[480px]">
// // // // // // // // //     <div className="av-pulse absolute inset-[16%] rounded-full bg-violet-600/35 blur-3xl" />
// // // // // // // // //     <div className="av-pulse absolute inset-[30%] rounded-full bg-cyan-400/20 blur-3xl [animation-delay:-3s]" />
// // // // // // // // //     <div className="av-spin absolute inset-[3%] rounded-full border border-white/10">
// // // // // // // // //       {chips.map(([label, n, deg]) => <div key={label} className="absolute inset-0" style={{ transform: `rotate(${deg}deg)` }}>
// // // // // // // // //         <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
// // // // // // // // //           <div style={{ transform: `rotate(${-deg}deg)` }}><div className="av-spin-rev">
// // // // // // // // //             <div className="whitespace-nowrap rounded-xl border border-white/15 bg-white/[.08] px-3 py-2 font-mono text-[10px] text-white shadow-[0_10px_40px_rgba(124,92,255,.25)] backdrop-blur-md"><span className="mr-2 text-violet-300">{n}</span>{label}</div>
// // // // // // // // //           </div></div>
// // // // // // // // //         </div>
// // // // // // // // //       </div>)}
// // // // // // // // //     </div>
// // // // // // // // //     <div className="av-spin-slow absolute inset-[20%] rounded-full border border-dashed border-violet-300/25">
// // // // // // // // //       <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,.9)]" />
// // // // // // // // //       <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-fuchsia-300 shadow-[0_0_14px_rgba(240,171,252,.9)]" />
// // // // // // // // //     </div>
// // // // // // // // //     <div className="absolute inset-[35%] grid place-items-center rounded-full border border-white/20 bg-[radial-gradient(circle_at_30%_25%,rgba(167,139,250,.55),rgba(24,16,48,.95)_62%)] text-center shadow-[0_0_80px_rgba(139,92,246,.45),inset_0_0_30px_rgba(255,255,255,.08)]">
// // // // // // // // //       <div><p className="font-mono text-[7px] uppercase tracking-[.2em] text-violet-200/80 sm:text-[8px]">Digital workflow</p><strong className="mt-2 block text-xl font-semibold leading-[.95] tracking-[-.05em] text-white sm:text-2xl">IDEA<br />TO<br /><Grad>IMPACT.</Grad></strong></div>
// // // // // // // // //     </div>
// // // // // // // // //   </div>;
// // // // // // // // // }

// // // // // // // // // function Hero() {
// // // // // // // // //   const reduce = useReducedMotion();
// // // // // // // // //   const { scrollY } = useScroll();
// // // // // // // // //   const textY = useTransform(scrollY, [0, 700], [0, 70]);
// // // // // // // // //   const orbY = useTransform(scrollY, [0, 700], [0, 130]);
// // // // // // // // //   const fade = useTransform(scrollY, [0, 600], [1, 0.25]);
// // // // // // // // //   const stats: [number, string, string][] = [[2, "Years hands-on", "+"], [projects.length, "Featured projects", ""], [experience.length, "Companies", ""], [totalSkills, "Skills & tools", ""]];
// // // // // // // // //   return <section id="home" className="relative flex min-h-screen flex-col justify-center pb-16 pt-32 sm:pt-36">
// // // // // // // // //     <div className="mx-auto grid w-[min(1240px,calc(100%-32px))] items-center gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-8">
// // // // // // // // //       <motion.div style={{ y: reduce ? 0 : textY, opacity: reduce ? 1 : fade }}>
// // // // // // // // //         <motion.div initial={reduce ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }} className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[.05] px-4 py-2 font-mono text-[10px] uppercase tracking-[.16em] text-zinc-300 backdrop-blur-md">
// // // // // // // // //           <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" /></span>
// // // // // // // // //           Available for projects
// // // // // // // // //         </motion.div>
// // // // // // // // //         <h1 className="mt-8 max-w-5xl text-[clamp(54px,8.4vw,122px)] font-semibold leading-[.86] tracking-[-.07em] text-white">
// // // // // // // // //           <WordReveal text="I make digital work" delay={0.15} />
// // // // // // // // //           <WordReveal text="worth noticing." delay={0.55} grad />
// // // // // // // // //         </h1>
// // // // // // // // //         <motion.p initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1, ease: EASE }} className="mt-8 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">Digital Marketing Executive working across websites, SEO, social media, content development, creative production and event communication.</motion.p>
// // // // // // // // //         <motion.div initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.1, ease: EASE }} className="mt-6 flex items-center gap-3 text-lg text-zinc-500 sm:text-xl">Specialising in <RotatingWord /></motion.div>
// // // // // // // // //         <motion.div initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.2, ease: EASE }} className="mt-9 flex flex-wrap items-center gap-3">
// // // // // // // // //           <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} href="#work" className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-xs font-bold text-zinc-950 shadow-[0_0_50px_rgba(167,139,250,.35)] transition hover:bg-violet-200">Explore real projects <ArrowRight size={14} className="transition group-hover:translate-x-1" /></motion.a>
// // // // // // // // //           <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}><Link href="/work-samples" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.05] px-6 py-3.5 text-xs font-bold text-white backdrop-blur-md transition hover:border-white/40">Open work archive <ArrowRight size={14} /></Link></motion.div>
// // // // // // // // //         </motion.div>
// // // // // // // // //       </motion.div>
// // // // // // // // //       <motion.div style={{ y: reduce ? 0 : orbY }} initial={reduce ? false : { opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.4, ease: EASE }}><Orbit /></motion.div>
// // // // // // // // //     </div>
// // // // // // // // //     <motion.div initial={reduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 1.4, ease: EASE }} className="mx-auto mt-16 w-[min(1240px,calc(100%-32px))]">
// // // // // // // // //       <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl md:grid-cols-4">
// // // // // // // // //         {stats.map(([n, label, suffix]) => <div key={label} className="bg-[#0b0914]/80 px-6 py-6"><div className="text-4xl font-semibold tracking-[-.05em] text-white sm:text-5xl"><CountUp to={n} suffix={suffix} /></div><p className="mt-2 font-mono text-[9px] uppercase tracking-[.16em] text-zinc-500">{label}</p></div>)}
// // // // // // // // //       </div>
// // // // // // // // //     </motion.div>
// // // // // // // // //     <a href="#about" aria-label="Scroll to about" className="mx-auto mt-10 hidden items-center gap-2 font-mono text-[9px] uppercase tracking-[.18em] text-zinc-500 sm:flex">Scroll to explore <motion.span animate={reduce ? undefined : { y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}><ArrowDown size={13} /></motion.span></a>
// // // // // // // // //   </section>;
// // // // // // // // // }

// // // // // // // // // /* ------------------------------------------------------------------ */
// // // // // // // // // /* SECTIONS                                                            */
// // // // // // // // // /* ------------------------------------------------------------------ */

// // // // // // // // // function About() {
// // // // // // // // //   const range = ["Websites", "SEO", "Social", "Content", "Creative", "Events", "Publishing", "Automation"];
// // // // // // // // //   return <section id="about" className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // // // // // // //     <SectionHead n="01" kicker="About me">I work where <Grad>marketing, content and execution</Grad> meet.</SectionHead>
// // // // // // // // //     <div className="mt-14 grid gap-5 lg:grid-cols-[1.25fr_.75fr]">
// // // // // // // // //       <Reveal><SpotCard className="h-full rounded-[28px] border border-white/10 bg-white/[.03] p-8 backdrop-blur-xl sm:p-10"><p className="text-xl leading-8 tracking-[-.02em] text-zinc-300 sm:text-2xl sm:leading-10">I enjoy taking a raw idea, messy information or business requirement and turning it into something structured, visual, useful and ready to publish — whether that is a website, campaign, social post, blog, conference asset or digital workflow.</p></SpotCard></Reveal>
// // // // // // // // //       <Reveal delay={0.1}><SpotCard className="h-full rounded-[28px] border border-white/10 bg-white/[.03] p-6 backdrop-blur-xl"><p className="font-mono text-[9px] uppercase tracking-[.16em] text-zinc-500">My working range</p>
// // // // // // // // //         <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }} className="mt-6 grid grid-cols-2 gap-2">{range.map((x, i) => <motion.span key={x} variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } } }} whileHover={{ y: -2 }} className="rounded-xl border border-white/10 bg-white/[.04] px-3 py-3 text-[10px] font-bold text-zinc-300 transition-colors hover:border-violet-400/50 hover:text-white"><span className="mr-1.5 text-violet-400">0{i + 1}</span>{x}</motion.span>)}</motion.div>
// // // // // // // // //       </SpotCard></Reveal>
// // // // // // // // //     </div>
// // // // // // // // //   </div></section>;
// // // // // // // // // }

// // // // // // // // // function Experience() {
// // // // // // // // //   const ref = useRef<HTMLDivElement>(null);
// // // // // // // // //   const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
// // // // // // // // //   const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 26 });
// // // // // // // // //   return <section id="experience" className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // // // // // // //     <SectionHead n="02" kicker="Career timeline" sub="Three stages of experience across technology, conference communication, content and digital marketing.">Where I’ve worked. <Grad>What I’ve done.</Grad></SectionHead>
// // // // // // // // //     <div ref={ref} className="relative mt-16 space-y-8">
// // // // // // // // //       <div className="absolute bottom-0 left-[7px] top-0 w-px bg-white/10 md:left-[187px]" />
// // // // // // // // //       <motion.div style={{ scaleY }} className="absolute bottom-0 left-[7px] top-0 w-px origin-top bg-gradient-to-b from-violet-400 via-fuchsia-300 to-cyan-300 shadow-[0_0_12px_rgba(167,139,250,.8)] md:left-[187px]" />
// // // // // // // // //       {experience.map((job, i) => <Reveal key={job.company} delay={0.05}>
// // // // // // // // //         <div className="relative grid gap-5 pl-9 md:grid-cols-[180px_1fr] md:gap-14 md:pl-0">
// // // // // // // // //           <span className={`absolute left-0 top-8 h-[15px] w-[15px] rounded-full border-2 bg-[#07060d] md:left-[180px] ${job.current ? "border-cyan-300 shadow-[0_0_16px_rgba(103,232,249,.9)]" : "border-violet-400 shadow-[0_0_12px_rgba(167,139,250,.6)]"}`} />
// // // // // // // // //           <div className="md:pt-7 md:text-right"><p className="font-mono text-[10px] uppercase tracking-[.14em] text-violet-300">0{i + 1} / Experience</p><p className="mt-2 font-mono text-[10px] uppercase leading-5 tracking-[.08em] text-zinc-500">{job.dates}<br />{job.location}</p>{job.current && <span className="mt-3 inline-block rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 font-mono text-[8px] uppercase tracking-[.12em] text-cyan-200">Present</span>}</div>
// // // // // // // // //           <Tilt><SpotCard className="rounded-[26px] border border-white/10 bg-white/[.035] p-6 backdrop-blur-xl sm:p-8">
// // // // // // // // //             <div className="flex items-start gap-4"><div className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-2xl border border-white/10 bg-white"><Image src={job.logo} alt={`${job.company} logo`} width={56} height={56} className="h-full w-full object-cover" /></div><div><h3 className="text-xl font-semibold tracking-[-.03em] text-white sm:text-2xl">{job.role}</h3><a href={job.href ?? "#"} target={job.href ? "_blank" : undefined} rel={job.href ? "noreferrer" : undefined} className="mt-1 inline-flex items-center gap-1.5 text-xs font-bold text-violet-300 transition hover:text-white">{job.company}{job.href && <ExternalLink size={11} />}</a></div></div>
// // // // // // // // //             <p className="mt-6 text-sm leading-7 text-zinc-400">{job.description}</p>
// // // // // // // // //             <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-5">{job.points.map(p => <li key={p} className="flex gap-3 text-xs leading-6 text-zinc-300"><span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-violet-400" />{p}</li>)}</ul>
// // // // // // // // //             <div className="mt-6 flex flex-wrap gap-2">{job.tags.map(t => <span key={t} className="rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-[9px] font-semibold text-violet-200">{t}</span>)}</div>
// // // // // // // // //           </SpotCard></Tilt>
// // // // // // // // //         </div>
// // // // // // // // //       </Reveal>)}
// // // // // // // // //     </div>
// // // // // // // // //   </div></section>;
// // // // // // // // // }

// // // // // // // // // function Work() {
// // // // // // // // //   return <section id="work" className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // // // // // // //     <SectionHead n="03" kicker="Selected work" sub="A selection of websites and digital experiences across aquaculture, conferences, technology and consumer brands.">Real projects. <Grad>Clear outcomes.</Grad></SectionHead>
// // // // // // // // //     <div className="mt-6"><Link href="/work-samples" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.05] px-5 py-2.5 text-xs font-bold text-white backdrop-blur-md transition hover:border-violet-400/60">Explore all work <ArrowRight size={14} /></Link></div>
// // // // // // // // //     <div className="mt-14 space-y-8">
// // // // // // // // //       {projects.map((project, i) => <Reveal key={project.id}>
// // // // // // // // //         <SpotCard className="group relative rounded-[32px] border border-white/10 bg-white/[.03] p-4 backdrop-blur-xl sm:p-6">
// // // // // // // // //           <div className={`pointer-events-none absolute -z-10 h-72 w-72 rounded-full blur-[100px] ${project.glow} ${i % 2 ? "-left-10 top-10" : "-right-10 top-10"}`} />
// // // // // // // // //           <div className={`grid items-center gap-8 ${i % 2 ? "lg:grid-cols-[.9fr_1.1fr]" : "lg:grid-cols-[1.1fr_.9fr]"}`}>
// // // // // // // // //             <div className={i % 2 ? "lg:order-2" : ""}>
// // // // // // // // //               <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-[0_30px_80px_rgba(0,0,0,.5)]">
// // // // // // // // //                 <div className="flex items-center gap-2 border-b border-white/10 bg-zinc-900 px-4 py-3"><span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" /><span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" /><span className="ml-3 truncate rounded-md bg-white/5 px-3 py-1 font-mono text-[9px] text-zinc-500">{project.link ? project.link.replace("https://", "") : project.company}</span></div>
// // // // // // // // //                 <div className="flex h-[240px] items-center justify-center overflow-hidden bg-[#f4f4f5] sm:h-[330px]"><Image src={project.image} alt={`${project.company} website preview`} width={1100} height={760} className="h-full w-full object-contain object-center transition duration-700 ease-out group-hover:scale-[1.04]" /></div>
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //             <div className="px-2 pb-2 lg:px-6">
// // // // // // // // //               <div className="flex items-center gap-3"><span className="av-outline font-mono text-4xl font-semibold">{project.id}</span><span className="rounded-full border border-white/10 bg-white/[.05] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[.12em] text-zinc-400">{project.label}</span></div>
// // // // // // // // //               <p className="mt-6 font-mono text-[10px] uppercase tracking-[.16em] text-violet-300">{project.company}</p>
// // // // // // // // //               <h3 className="mt-3 text-3xl font-semibold leading-[1.05] tracking-[-.045em] text-white sm:text-4xl">{project.title}</h3>
// // // // // // // // //               <p className="mt-4 text-sm leading-7 text-zinc-400">{project.description}</p>
// // // // // // // // //               <div className="mt-7 flex flex-wrap gap-2.5"><Link href={`/work/${project.slug}`} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold text-zinc-950 transition hover:bg-violet-200">View project <ArrowRight size={13} /></Link>{project.link && <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-xs font-bold text-white transition hover:border-white/50">Live website <ExternalLink size={13} /></a>}</div>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </SpotCard>
// // // // // // // // //       </Reveal>)}
// // // // // // // // //     </div>
// // // // // // // // //   </div></section>;
// // // // // // // // // }

// // // // // // // // // function ArchivePreview() {
// // // // // // // // //   const rowOne = archive.slice(0, 5);
// // // // // // // // //   const rowTwo = archive.slice(5);
// // // // // // // // //   const tile = ([src, title, company, format]: string[], key: string) => <Link href="/work-samples" key={key} className="group mr-4 w-[220px] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[.04] backdrop-blur-md transition hover:-translate-y-1 hover:border-violet-400/50 sm:w-[260px]"><div className="flex h-[150px] items-center justify-center overflow-hidden bg-[#f2f1ef] p-3 sm:h-[180px] sm:p-4"><Image src={src} alt={title} width={520} height={420} className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.05]" /></div><div className="px-4 py-3"><p className="truncate font-mono text-[8px] uppercase tracking-[.1em] text-zinc-500">{company} · {format}</p><h3 className="mt-1.5 truncate text-xs font-bold text-zinc-100">{title}</h3></div></Link>;
// // // // // // // // //   const row = (items: string[][], prefix: string) => [...items, ...items].map((it, i) => tile(it, `${prefix}-${i}`));
// // // // // // // // //   return <section className="relative overflow-hidden py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // // // // // // //     <SectionHead n="04" kicker="Creative archive" sub="Banners, carousel templates, event graphics and publications — moving gently so you can browse the range at a glance.">A closer look at <Grad>the creative work.</Grad></SectionHead>
// // // // // // // // //     <div className="mt-6"><Link href="/work-samples" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold text-zinc-950 transition hover:bg-violet-200">View all samples <ArrowRight size={14} /></Link></div>
// // // // // // // // //   </div>
// // // // // // // // //     <div className="av-pausable relative mt-12 space-y-4">
// // // // // // // // //       <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#07060d] to-transparent sm:w-40" />
// // // // // // // // //       <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#07060d] to-transparent sm:w-40" />
// // // // // // // // //       <div className="av-marq">{row(rowOne, "a")}</div>
// // // // // // // // //       <div className="av-marq av-marq-rev">{row(rowTwo, "b")}</div>
// // // // // // // // //     </div>
// // // // // // // // //     <p className="mt-7 text-center text-[10px] text-zinc-500">Hover to pause · Select any sample to open the complete archive</p>
// // // // // // // // //   </section>;
// // // // // // // // // }

// // // // // // // // // function Skills() {
// // // // // // // // //   return <section id="skills" className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // // // // // // //     <SectionHead n="05" kicker="Skills & tools" sub="A straightforward overview of the marketing disciplines, measurement tools, creative apps and publishing platforms I work with.">The skills behind <Grad>the work.</Grad></SectionHead>
// // // // // // // // //     <div className="mt-14 grid gap-5 lg:grid-cols-3">
// // // // // // // // //       {skillGroups.map((group, gi) => <Reveal key={group.title} delay={gi * 0.08}><SpotCard className="h-full rounded-[28px] border border-white/10 bg-white/[.03] p-6 backdrop-blur-xl sm:p-7">
// // // // // // // // //         <div className="flex items-end justify-between border-b border-white/10 pb-4"><h3 className="text-lg font-semibold tracking-[-.03em] text-white">{group.title}</h3><span className="font-mono text-[9px] uppercase tracking-[.14em] text-zinc-500">{String(group.items.length).padStart(2, "0")} items</span></div>
// // // // // // // // //         <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03 } } }} className="mt-5 flex flex-wrap gap-2">{group.items.map(item => <motion.span key={item} variants={{ hidden: { opacity: 0, y: 12, scale: 0.94 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: EASE } } }} whileHover={{ y: -2 }} className="cursor-default rounded-full border border-white/10 bg-white/[.04] px-3.5 py-2 text-xs font-medium text-zinc-300 transition-colors hover:border-violet-400/60 hover:bg-violet-400/10 hover:text-white">{item}</motion.span>)}</motion.div>
// // // // // // // // //       </SpotCard></Reveal>)}
// // // // // // // // //     </div>
// // // // // // // // //   </div></section>;
// // // // // // // // // }

// // // // // // // // // function Process() {
// // // // // // // // //   const steps = [["01", "Understand", "Goal · audience · message"], ["02", "Structure", "Content · information · flow"], ["03", "Create", "Design · video · visual system"], ["04", "Execute", "Publish · schedule · maintain"]];
// // // // // // // // //   return <section className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // // // // // // //     <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-violet-600/30 via-[#120d24] to-cyan-500/10 p-8 backdrop-blur-xl sm:p-14">
// // // // // // // // //       <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_75%)]" />
// // // // // // // // //       <div className="relative"><SectionHead n="06" kicker="How I work">From brief to <Grad>publish-ready.</Grad></SectionHead>
// // // // // // // // //         <div className="relative mt-14 grid gap-3 md:grid-cols-4">
// // // // // // // // //           <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 1.5, ease: EASE }} className="pointer-events-none absolute left-[10%] right-[10%] top-[46px] hidden h-px origin-left bg-gradient-to-r from-violet-300/60 via-fuchsia-300/60 to-cyan-300/60 md:block" />
// // // // // // // // //           {steps.map(([n, title, desc], i) => <Reveal key={n} delay={i * 0.1}><motion.article whileHover={{ y: -6 }} transition={{ duration: 0.3, ease: EASE }} className="h-full rounded-[24px] border border-white/10 bg-white/[.05] p-6 backdrop-blur-xl transition-colors hover:bg-white/[.09]"><span className="grid h-10 w-10 place-items-center rounded-full border border-violet-300/40 bg-[#120d24] font-mono text-[10px] text-violet-200 shadow-[0_0_20px_rgba(167,139,250,.4)]">{n}</span><h3 className="mt-12 text-2xl font-semibold tracking-[-.04em] text-white">{title}</h3><p className="mt-2 text-xs leading-5 text-zinc-400">{desc}</p></motion.article></Reveal>)}
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   </div></section>;
// // // // // // // // // }

// // // // // // // // // function Insights() {
// // // // // // // // //   return <section id="insights" className="relative py-28 sm:py-36"><div className="mx-auto grid w-[min(1240px,calc(100%-32px))] items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
// // // // // // // // //     <Reveal><div className="flex items-center gap-4"><span className="av-outline font-mono text-5xl font-semibold leading-none sm:text-6xl">07</span><span className="h-px w-12 bg-gradient-to-r from-violet-400/70 to-transparent" /><span className="font-mono text-[10px] uppercase tracking-[0.22em] text-violet-300">Insights · publishing</span></div>
// // // // // // // // //       <h2 className="mt-7 text-[clamp(42px,6vw,88px)] font-semibold leading-[.92] tracking-[-.06em] text-white">Content is not decoration. <Grad>It is part of the product.</Grad></h2>
// // // // // // // // //       <p className="mt-7 max-w-xl text-sm leading-7 text-zinc-400">The portfolio can keep expanding with published articles, SEO work, case studies and content projects as more source material is added.</p></Reveal>
// // // // // // // // //     <Reveal delay={0.1}><Tilt><SpotCard className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[.04] p-3 shadow-[0_40px_100px_rgba(0,0,0,.5)] backdrop-blur-xl"><Image src="/work/innovare/blog.png" alt="Innovare blog publishing preview" width={900} height={650} className="h-[360px] w-full rounded-[24px] object-cover object-top" /><div className="p-4"><p className="font-mono text-[8px] uppercase tracking-[.14em] text-zinc-500">SEO · Content · Publishing</p><h3 className="mt-2 text-lg font-semibold text-white">Technical content presented as a usable digital experience.</h3></div></SpotCard></Tilt></Reveal>
// // // // // // // // //   </div></section>;
// // // // // // // // // }

// // // // // // // // // function Testimonials() {
// // // // // // // // //   return <section id="testimonials" className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // // // // // // //     <SectionHead n="08" kicker="Testimonials">Good work should be <Grad>remembered.</Grad></SectionHead>
// // // // // // // // //     <div className="mt-14 grid gap-5 lg:grid-cols-2">
// // // // // // // // //       {testimonials.map(([name, role, quote], i) => <Reveal key={name} delay={i * 0.1}><SpotCard className="h-full rounded-[28px] border border-white/10 bg-white/[.035] p-8 backdrop-blur-xl sm:p-10">
// // // // // // // // //         <Quote className="text-violet-400" size={30} />
// // // // // // // // //         <div className="mt-6 text-sm tracking-[.2em] text-amber-300">★★★★★</div>
// // // // // // // // //         <p className="mt-5 text-lg leading-8 tracking-[-.015em] text-zinc-200 sm:text-xl sm:leading-9">“{quote}”</p>
// // // // // // // // //         <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6"><span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 text-sm font-bold text-white">{name[0]}</span><div><b className="block text-sm text-white">{name}</b><span className="mt-0.5 block text-[10px] text-zinc-500">{role}</span></div></div>
// // // // // // // // //       </SpotCard></Reveal>)}
// // // // // // // // //     </div>
// // // // // // // // //   </div></section>;
// // // // // // // // // }

// // // // // // // // // function Contact() {
// // // // // // // // //   return <section id="contact" className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // // // // // // //     <Reveal><div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[.03] p-8 backdrop-blur-xl sm:p-14">
// // // // // // // // //       <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-violet-600/30 blur-[110px]" />
// // // // // // // // //       <div className="pointer-events-none absolute -bottom-24 left-10 h-80 w-80 rounded-full bg-cyan-500/15 blur-[110px]" />
// // // // // // // // //       <div className="relative flex items-center gap-4"><span className="av-outline font-mono text-5xl font-semibold leading-none sm:text-6xl">09</span><span className="h-px w-12 bg-gradient-to-r from-violet-400/70 to-transparent" /><span className="font-mono text-[10px] uppercase tracking-[0.22em] text-violet-300">Contact</span></div>
// // // // // // // // //       <h2 className="relative mt-8 max-w-5xl text-[clamp(46px,7.2vw,108px)] font-semibold leading-[.88] tracking-[-.07em] text-white">Let’s build something <Grad>worth showing.</Grad></h2>
// // // // // // // // //       <div className="relative mt-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
// // // // // // // // //         <p className="max-w-md text-sm leading-7 text-zinc-400">Available for digital marketing, website, content, social media and creative projects.</p>
// // // // // // // // //         <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
// // // // // // // // //           <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} href="mailto:hello@adityavarma.dev" className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-xs font-bold text-zinc-950 shadow-[0_0_50px_rgba(167,139,250,.35)] transition-colors hover:bg-violet-200"><Mail size={14} /> hello@adityavarma.dev <ArrowRight size={14} /></motion.a>
// // // // // // // // //           <div className="flex gap-2"><motion.a whileHover={{ y: -3 }} href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[.05] text-white transition-colors hover:border-violet-400/70"><Linkedin size={15} /></motion.a><motion.a whileHover={{ y: -3 }} href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[.05] text-white transition-colors hover:border-violet-400/70"><Instagram size={15} /></motion.a></div>
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     </div></Reveal>
// // // // // // // // //     <footer className="mt-10 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 font-mono text-[9px] uppercase tracking-[.14em] text-zinc-500 sm:flex-row"><span>© 2026 Aditya Varma</span><span>Digital Marketing · Web · Content · Creative</span></footer>
// // // // // // // // //   </div></section>;
// // // // // // // // // }

// // // // // // // // // /* ------------------------------------------------------------------ */
// // // // // // // // // /* PAGE                                                                */
// // // // // // // // // /* ------------------------------------------------------------------ */

// // // // // // // // // export default function Portfolio() {
// // // // // // // // //   const [menu, setMenu] = useState(false);
// // // // // // // // //   const [active, setActive] = useState("home");
// // // // // // // // //   const [scrolled, setScrolled] = useState(false);
// // // // // // // // //   const [showTop, setShowTop] = useState(false);

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const ids = ["home", ...navLinks.map(([, id]) => id)];
// // // // // // // // //     const els = ids.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];
// // // // // // // // //     const io = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }); }, { rootMargin: "-45% 0px -50% 0px" });
// // // // // // // // //     els.forEach(el => io.observe(el));
// // // // // // // // //     const onScroll = () => { setScrolled(window.scrollY > 24); setShowTop(window.scrollY > 700); };
// // // // // // // // //     onScroll();
// // // // // // // // //     window.addEventListener("scroll", onScroll, { passive: true });
// // // // // // // // //     return () => { io.disconnect(); window.removeEventListener("scroll", onScroll); };
// // // // // // // // //   }, []);

// // // // // // // // //   return <main className="relative min-h-screen overflow-x-clip bg-[#07060d] text-zinc-100 selection:bg-violet-500/40">
// // // // // // // // //     <style>{CSS}</style>
// // // // // // // // //     <Backdrop />
// // // // // // // // //     <ParticleField />
// // // // // // // // //     <CursorGlow />
// // // // // // // // //     <div aria-hidden className="av-grain pointer-events-none fixed inset-0 z-[3]" />
// // // // // // // // //     <ScrollProgress />

// // // // // // // // //     <motion.header initial={{ y: -70, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, delay: 0.1, ease: EASE }} className={`fixed left-1/2 top-4 z-[60] flex w-[min(1180px,calc(100%-20px))] -translate-x-1/2 items-center justify-between rounded-2xl border px-3 py-2.5 backdrop-blur-2xl transition-all duration-500 ${scrolled ? "border-white/15 bg-[#0d0a18]/80 shadow-[0_18px_60px_rgba(0,0,0,.5)]" : "border-white/10 bg-white/[.04]"}`}>
// // // // // // // // //       <a href="#home" className="flex items-center gap-2.5"><span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 text-[10px] font-bold text-white shadow-[0_0_20px_rgba(139,92,246,.5)]">AV</span><span><b className="block text-[11px] leading-none text-white">Aditya Varma</b><small className="mt-1 block text-[7px] uppercase tracking-[.12em] text-zinc-500">Digital Marketing Executive</small></span></a>
// // // // // // // // //       <nav className="hidden items-center gap-1 lg:flex">{navLinks.map(([label, id]) => <a key={id} href={`#${id}`} className={`relative rounded-full px-3 py-1.5 text-[10px] font-semibold transition-colors ${active === id ? "text-white" : "text-zinc-400 hover:text-white"}`}>{active === id && <motion.span layoutId="nav-pill" transition={{ type: "spring", stiffness: 380, damping: 32 }} className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/10" />}{label}</a>)}<Link href="/work-samples" className="rounded-full px-3 py-1.5 text-[10px] font-semibold text-zinc-400 transition hover:text-white">Work Archive</Link></nav>
// // // // // // // // //       <a href="#contact" className="hidden items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[10px] font-bold text-zinc-950 transition hover:bg-violet-200 lg:inline-flex">Let’s talk <ArrowRight size={12} /></a>
// // // // // // // // //       <button onClick={() => setMenu(!menu)} className="grid h-9 w-9 place-items-center rounded-xl border border-white/15 bg-white/5 text-white lg:hidden" aria-label="Toggle menu" aria-expanded={menu}>{menu ? <X size={16} /> : <Menu size={16} />}</button>
// // // // // // // // //       <AnimatePresence>{menu && <motion.div initial={{ opacity: 0, y: -8, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8, scale: 0.97 }} transition={{ duration: 0.25, ease: EASE }} className="absolute right-0 top-14 w-64 origin-top-right rounded-2xl border border-white/15 bg-[#0d0a18]/95 p-2 shadow-2xl backdrop-blur-2xl lg:hidden">{navLinks.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenu(false)} className={`block rounded-xl px-3 py-3 text-xs font-semibold hover:bg-white/5 ${active === id ? "text-violet-300" : "text-zinc-300"}`}>{label}</a>)}<Link href="/work-samples" onClick={() => setMenu(false)} className="block rounded-xl px-3 py-3 text-xs font-semibold text-zinc-300 hover:bg-white/5">Work Archive</Link></motion.div>}</AnimatePresence>
// // // // // // // // //     </motion.header>

// // // // // // // // //     <div className="relative z-10">
// // // // // // // // //       <Hero />
// // // // // // // // //       <About />
// // // // // // // // //       <Experience />
// // // // // // // // //       <Work />
// // // // // // // // //       <ArchivePreview />
// // // // // // // // //       <Skills />
// // // // // // // // //       <Process />
// // // // // // // // //       <Insights />
// // // // // // // // //       <Testimonials />
// // // // // // // // //       <Contact />
// // // // // // // // //     </div>

// // // // // // // // //     <AnimatePresence>{showTop && <motion.a href="#home" aria-label="Back to top" initial={{ opacity: 0, y: 16, scale: 0.8 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.8 }} whileHover={{ y: -3 }} className="fixed bottom-6 right-6 z-[60] grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-[#0d0a18]/80 text-white shadow-[0_10px_40px_rgba(0,0,0,.5)] backdrop-blur-xl transition-colors hover:border-violet-400/70"><ArrowUp size={16} /></motion.a>}</AnimatePresence>
// // // // // // // // //   </main>;
// // // // // // // // // }
// // // // // // // // "use client";

// // // // // // // // import { ArrowDown, ArrowRight, ArrowUp, ExternalLink, Instagram, Linkedin, Mail, Menu, Quote, X } from "lucide-react";
// // // // // // // // import { AnimatePresence, animate, motion, useInView, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
// // // // // // // // import Link from "next/link";
// // // // // // // // import Image from "next/image";
// // // // // // // // import { useEffect, useRef, useState } from "react";

// // // // // // // // const EASE = [0.16, 1, 0.3, 1] as const;

// // // // // // // // /* ------------------------------------------------------------------ */
// // // // // // // // /* DATA (unchanged content)                                            */
// // // // // // // // /* ------------------------------------------------------------------ */

// // // // // // // // const projects = [
// // // // // // // //   { id: "01", company: "Innovare Biopharma LLP", label: "WEBSITE · SEO · CONTENT", title: "Building a digital home for aquaculture health.", description: "Website development, product presentation, blog publishing, SEO-focused content, social support and digital marketing execution.", image: "/work/websites/innovare-home.png", slug: "innovare-biopharma", link: "https://innovarebiopharma.com/", glow: "bg-emerald-500/25" },
// // // // // // // //   { id: "02", company: "C-STAR Global", label: "EVENTS · CONTENT · CREATIVE", title: "Turning conference information into a complete digital experience.", description: "Conference communication, speaker data, landing pages, banners, videos, social publishing and conference publications.", image: "/work/websites/cstar-home.png", slug: "c-star-global", glow: "bg-indigo-500/25" },
// // // // // // // //   { id: "03", company: "Ecorfy Technologies Pvt. Ltd.", label: "WEB · SOCIAL · TECHNOLOGY", title: "Making technology easier to understand and easier to publish.", description: "Website work and technology-focused digital communication across software, AI, social media and marketing content.", image: "/work/ecorfy/website-cover.png", slug: "ecorfy-technologies", link: "https://www.ecorfy.com/", glow: "bg-cyan-500/20" },
// // // // // // // //   { id: "04", company: "Shreshta Pickles", label: "FREELANCE · WEBSITE", title: "A clean digital storefront for a traditional food brand.", description: "Freelance website development with a product-led layout, clear navigation and a focused brand presentation.", image: "/work/websites/shreshta-home.png", slug: "shreshta-pickles", link: "https://shreshtapickles.com/", glow: "bg-orange-500/20" },
// // // // // // // // ];

// // // // // // // // const experience = [
// // // // // // // //   { company: "Innovare Biopharma LLP", role: "Digital Marketing Executive", dates: "April 2026 — Present", location: "Hyderabad, India", logo: "/companies/innovare-logo.jpg", current: true, description: "Digital marketing, website management, SEO-focused content, social media support and creative production for an aquaculture-focused brand.", points: ["Managed website content, landing pages and digital publishing", "Supported SEO, blogs, social media and campaign creatives", "Created and coordinated marketing assets across digital channels"], tags: ["Digital Marketing", "SEO", "Content", "Social Media"], href: "https://innovarebiopharma.com/" },
// // // // // // // //   { company: "C-STAR Global Inc.", role: "Content Developer · Digital Marketing", dates: "April 2023 — February 2026", location: "Hyderabad, India", logo: "/companies/cstar-logo.jpg", description: "Worked across conference communication, website content, speaker data, creative production, videos, conference publications and social media publishing.", points: ["Managed conference and expo content from raw data to publishable assets", "Created banners, videos, posters, conference books and social content", "Supported websites, virtual conferences and scheduled social publishing"], tags: ["Content Development", "Events", "Social Media", "Creative"] },
// // // // // // // //   { company: "Ecorfy Technologies Pvt. Ltd.", role: "Software Engineer", dates: "Earlier experience", location: "Hyderabad, India", logo: "/companies/ecorfy-logo.jpg", description: "Earlier technology experience supporting web development and digital communication projects in a technology-focused environment.", points: ["Worked on website and software-oriented digital projects", "Supported technology communication and online presentation", "Built technical experience that now strengthens marketing execution"], tags: ["Web", "Software", "Digital", "Technology"], href: "https://www.ecorfy.com/" },
// // // // // // // // ];

// // // // // // // // const skillGroups = [
// // // // // // // //   { title: "Digital Marketing", items: ["SEO", "On-page SEO", "Technical SEO", "Off-page SEO", "Content Development", "Content Marketing", "Social Media Marketing", "Google Ads", "Meta Ads", "Performance Marketing", "Lead Generation", "Email Marketing", "Keyword Research"] },
// // // // // // // //   { title: "Analytics & Automation", items: ["Google Analytics 4 (GA4)", "Google Tag Manager (GTM)", "Google Search Console", "n8n Automation", "AI Tools"] },
// // // // // // // //   { title: "Creative & Publishing Tools", items: ["Canva", "Renderforest", "CapCut", "Filmora", "Publito", "Publer", "Swipe Pages", "WordPress", "Hostinger", "Open Mercato"] },
// // // // // // // // ];

// // // // // // // // const archive = [
// // // // // // // //   ["/work/innovare/samples/hygiene.png", "Hygiene in Shrimp Farms", "Innovare", "Educational social creative"],
// // // // // // // //   ["/work/ecorfy/samples/top-generative-ai.png", "Generative AI Development", "Ecorfy", "Social banner"],
// // // // // // // //   ["/work/uploads/AP_Defence_Carousel.jpg", "AP Defence & Aerospace", "Carousel", "Carousel template"],
// // // // // // // //   ["/work/uploads/India_infrastructure.jpg", "India AI Infrastructure Race", "Carousel", "Carousel template"],
// // // // // // // //   ["/work/innovare/samples/nutrition.png", "Nutrition for Stronger Shrimp", "Innovare", "Educational social creative"],
// // // // // // // //   ["/work/ecorfy/samples/transform-ideas.png", "Transform Ideas", "Ecorfy", "Generative AI social"],
// // // // // // // //   ["/work/cstar/women-forum-2024.jpg", "Global Women Forum", "C-STAR", "Event banner"],
// // // // // // // //   ["/work/cstar/global-technology-forum-2024.jpg", "Global Technology Forum", "C-STAR", "Event poster"],
// // // // // // // //   ["/work/uploads/Book_Updated_3_.jpg", "World Women & Health Forum", "C-STAR", "Conference publication"],
// // // // // // // //   ["/work/ecorfy/samples/software-development.png", "Software Development", "Ecorfy", "Social banner"],
// // // // // // // // ];

// // // // // // // // const testimonials = [
// // // // // // // //   ["Ravindra Raju", "Founder & Owner · Shreshta Pickles", "Working with Aditya has been a great experience. He efficiently manages our website, handles updates whenever needed, and supports our business operations."],
// // // // // // // //   ["Sitarama Raju", "CEO · Innovare Labs", "Aditya played an important role in supporting our digital marketing and promotional activities. His contributions to website development, content management, and conference promotions helped strengthen our brand presence."],
// // // // // // // // ];

// // // // // // // // const roles = ["Websites", "SEO", "Content", "Creative", "Events"];
// // // // // // // // const navLinks = [["About", "about"], ["Experience", "experience"], ["Work", "work"], ["Skills", "skills"], ["Testimonials", "testimonials"], ["Contact", "contact"]];
// // // // // // // // const totalSkills = skillGroups.reduce((a, g) => a + g.items.length, 0);

// // // // // // // // /* ------------------------------------------------------------------ */
// // // // // // // // /* GLOBAL CSS (self-contained — no globals.css dependency)             */
// // // // // // // // /* ------------------------------------------------------------------ */

// // // // // // // // const CSS = `
// // // // // // // // .av-blob{position:fixed;border-radius:9999px;filter:blur(110px);will-change:transform;pointer-events:none}
// // // // // // // // @keyframes av-drift-a{0%,100%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(14vw,9vh,0) scale(1.25)}}
// // // // // // // // @keyframes av-drift-b{0%,100%{transform:translate3d(0,0,0) scale(1.1)}50%{transform:translate3d(-12vw,-8vh,0) scale(.9)}}
// // // // // // // // @keyframes av-drift-c{0%,100%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(-8vw,12vh,0) scale(1.2)}}
// // // // // // // // .av-a{animation:av-drift-a 26s ease-in-out infinite}
// // // // // // // // .av-b{animation:av-drift-b 32s ease-in-out infinite}
// // // // // // // // .av-c{animation:av-drift-c 38s ease-in-out infinite}
// // // // // // // // .av-grain{background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");opacity:.07;mix-blend-mode:overlay}
// // // // // // // // @keyframes av-spin{to{transform:rotate(360deg)}}
// // // // // // // // .av-spin{animation:av-spin 48s linear infinite}
// // // // // // // // .av-spin-rev{animation:av-spin 48s linear infinite reverse}
// // // // // // // // .av-spin-slow{animation:av-spin 90s linear infinite reverse}
// // // // // // // // @keyframes av-pulse{0%,100%{opacity:.55;transform:scale(1)}50%{opacity:.95;transform:scale(1.08)}}
// // // // // // // // .av-pulse{animation:av-pulse 6s ease-in-out infinite}
// // // // // // // // @keyframes av-shine{0%{background-position:0% 50%}100%{background-position:200% 50%}}
// // // // // // // // .av-shine{background-size:200% 100%;animation:av-shine 7s linear infinite}
// // // // // // // // @keyframes av-marq{to{transform:translateX(-50%)}}
// // // // // // // // .av-marq{display:flex;width:max-content;animation:av-marq 48s linear infinite}
// // // // // // // // .av-marq-rev{animation-direction:reverse;animation-duration:56s}
// // // // // // // // .av-pausable:hover .av-marq{animation-play-state:paused}
// // // // // // // // .av-spot{position:relative}
// // // // // // // // .av-spot::before{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;opacity:0;transition:opacity .4s;background:radial-gradient(420px circle at var(--mx,50%) var(--my,50%),rgba(16,185,129,.16),transparent 45%)}
// // // // // // // // .av-spot::after{content:"";position:absolute;inset:0;border-radius:inherit;padding:1px;pointer-events:none;opacity:0;transition:opacity .4s;background:radial-gradient(320px circle at var(--mx,50%) var(--my,50%),rgba(110,231,183,.75),transparent 45%);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#000 0 0) content-box exclude,linear-gradient(#000 0 0)}
// // // // // // // // .av-spot:hover::before,.av-spot:hover::after{opacity:1}
// // // // // // // // .av-outline{-webkit-text-stroke:1px rgba(255,255,255,.22);color:transparent}
// // // // // // // // html{scroll-behavior:smooth}
// // // // // // // // @media (prefers-reduced-motion:reduce){.av-a,.av-b,.av-c,.av-spin,.av-spin-rev,.av-spin-slow,.av-pulse,.av-shine,.av-marq{animation:none!important}html{scroll-behavior:auto}}
// // // // // // // // `;

// // // // // // // // /* ------------------------------------------------------------------ */
// // // // // // // // /* BACKGROUND                                                          */
// // // // // // // // /* ------------------------------------------------------------------ */

// // // // // // // // function ParticleField() {
// // // // // // // //   const ref = useRef<HTMLCanvasElement>(null);
// // // // // // // //   useEffect(() => {
// // // // // // // //     const canvas = ref.current;
// // // // // // // //     if (!canvas) return;
// // // // // // // //     const ctx = canvas.getContext("2d");
// // // // // // // //     if (!ctx) return;
// // // // // // // //     const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
// // // // // // // //     const dpr = Math.min(window.devicePixelRatio || 1, 2);
// // // // // // // //     const mouse = { x: -9999, y: -9999 };
// // // // // // // //     type P = { x: number; y: number; vx: number; vy: number; r: number };
// // // // // // // //     let ps: P[] = [];
// // // // // // // //     let w = 0, h = 0, raf = 0;

// // // // // // // //     const init = () => {
// // // // // // // //       w = window.innerWidth; h = window.innerHeight;
// // // // // // // //       canvas.width = w * dpr; canvas.height = h * dpr;
// // // // // // // //       canvas.style.width = `${w}px`; canvas.style.height = `${h}px`;
// // // // // // // //       ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
// // // // // // // //       const n = Math.min(w < 768 ? 45 : 105, Math.floor((w * h) / 15000));
// // // // // // // //       ps = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.28, vy: (Math.random() - 0.5) * 0.28, r: Math.random() * 1.4 + 0.5 }));
// // // // // // // //     };

// // // // // // // //     const frame = () => {
// // // // // // // //       ctx.clearRect(0, 0, w, h);
// // // // // // // //       for (let i = 0; i < ps.length; i++) {
// // // // // // // //         const p = ps[i];
// // // // // // // //         if (!reduce) {
// // // // // // // //           p.x += p.vx; p.y += p.vy;
// // // // // // // //           if (p.x < -10) p.x = w + 10; else if (p.x > w + 10) p.x = -10;
// // // // // // // //           if (p.y < -10) p.y = h + 10; else if (p.y > h + 10) p.y = -10;
// // // // // // // //         }
// // // // // // // //         const mdx = p.x - mouse.x, mdy = p.y - mouse.y;
// // // // // // // //         const md = Math.hypot(mdx, mdy);
// // // // // // // //         if (md < 180) {
// // // // // // // //           ctx.strokeStyle = `rgba(110,231,183,${(1 - md / 180) * 0.55})`;
// // // // // // // //           ctx.lineWidth = 0.8;
// // // // // // // //           ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
// // // // // // // //           if (!reduce) { p.x += (mdx / md) * 0.35; p.y += (mdy / md) * 0.35; }
// // // // // // // //         }
// // // // // // // //         for (let j = i + 1; j < ps.length; j++) {
// // // // // // // //           const q = ps[j];
// // // // // // // //           const d = Math.hypot(p.x - q.x, p.y - q.y);
// // // // // // // //           if (d < 125) {
// // // // // // // //             ctx.strokeStyle = `rgba(16,185,129,${(1 - d / 125) * 0.28})`;
// // // // // // // //             ctx.lineWidth = 0.6;
// // // // // // // //             ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
// // // // // // // //           }
// // // // // // // //         }
// // // // // // // //         ctx.fillStyle = "rgba(209,250,229,.75)";
// // // // // // // //         ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
// // // // // // // //       }
// // // // // // // //       if (!reduce) raf = requestAnimationFrame(frame);
// // // // // // // //     };

// // // // // // // //     const onMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
// // // // // // // //     const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };
// // // // // // // //     const onResize = () => { init(); if (reduce) frame(); };
// // // // // // // //     const onVis = () => { if (document.hidden) cancelAnimationFrame(raf); else if (!reduce) raf = requestAnimationFrame(frame); };

// // // // // // // //     init(); frame();
// // // // // // // //     window.addEventListener("mousemove", onMove, { passive: true });
// // // // // // // //     window.addEventListener("mouseleave", onLeave);
// // // // // // // //     window.addEventListener("resize", onResize);
// // // // // // // //     document.addEventListener("visibilitychange", onVis);
// // // // // // // //     return () => {
// // // // // // // //       cancelAnimationFrame(raf);
// // // // // // // //       window.removeEventListener("mousemove", onMove);
// // // // // // // //       window.removeEventListener("mouseleave", onLeave);
// // // // // // // //       window.removeEventListener("resize", onResize);
// // // // // // // //       document.removeEventListener("visibilitychange", onVis);
// // // // // // // //     };
// // // // // // // //   }, []);
// // // // // // // //   return <canvas ref={ref} aria-hidden className="fixed inset-0 z-[1] pointer-events-none" />;
// // // // // // // // }

// // // // // // // // function CursorGlow() {
// // // // // // // //   const mx = useMotionValue(-600);
// // // // // // // //   const my = useMotionValue(-600);
// // // // // // // //   const sx = useSpring(mx, { stiffness: 90, damping: 20, mass: 0.6 });
// // // // // // // //   const sy = useSpring(my, { stiffness: 90, damping: 20, mass: 0.6 });
// // // // // // // //   const x = useTransform(sx, v => v - 280);
// // // // // // // //   const y = useTransform(sy, v => v - 280);
// // // // // // // //   useEffect(() => {
// // // // // // // //     const move = (e: MouseEvent) => { mx.set(e.clientX); my.set(e.clientY); };
// // // // // // // //     window.addEventListener("mousemove", move, { passive: true });
// // // // // // // //     return () => window.removeEventListener("mousemove", move);
// // // // // // // //   }, [mx, my]);
// // // // // // // //   return <motion.div aria-hidden style={{ x, y }} className="pointer-events-none fixed left-0 top-0 z-[2] hidden h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,.17),transparent_62%)] lg:block" />;
// // // // // // // // }

// // // // // // // // function Backdrop() {
// // // // // // // //   return <div aria-hidden className="pointer-events-none fixed inset-0 z-0 bg-[#04100d]">
// // // // // // // //     <div className="av-blob av-a -left-[10vw] -top-[12vh] h-[55vw] w-[55vw] max-h-[760px] max-w-[760px] bg-emerald-700/35" />
// // // // // // // //     <div className="av-blob av-b -right-[8vw] top-[18vh] h-[48vw] w-[48vw] max-h-[680px] max-w-[680px] bg-cyan-500/20" />
// // // // // // // //     <div className="av-blob av-c bottom-[-18vh] left-[22vw] h-[50vw] w-[50vw] max-h-[700px] max-w-[700px] bg-teal-600/20" />
// // // // // // // //     <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_72%)]" />
// // // // // // // //     <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(7,6,13,.85)_100%)]" />
// // // // // // // //   </div>;
// // // // // // // // }

// // // // // // // // /* ------------------------------------------------------------------ */
// // // // // // // // /* PRIMITIVES                                                          */
// // // // // // // // /* ------------------------------------------------------------------ */

// // // // // // // // function ScrollProgress() {
// // // // // // // //   const { scrollYProgress } = useScroll();
// // // // // // // //   const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.3 });
// // // // // // // //   return <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-300" />;
// // // // // // // // }

// // // // // // // // function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
// // // // // // // //   const reduce = useReducedMotion();
// // // // // // // //   return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 36, filter: "blur(10px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.85, delay, ease: EASE }}>{children}</motion.div>;
// // // // // // // // }

// // // // // // // // function SpotCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
// // // // // // // //   const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
// // // // // // // //     const r = e.currentTarget.getBoundingClientRect();
// // // // // // // //     e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
// // // // // // // //     e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
// // // // // // // //   };
// // // // // // // //   return <div onMouseMove={onMove} className={`av-spot ${className}`}>{children}</div>;
// // // // // // // // }

// // // // // // // // function Tilt({ children, className = "" }: { children: React.ReactNode; className?: string }) {
// // // // // // // //   const reduce = useReducedMotion();
// // // // // // // //   const ref = useRef<HTMLDivElement>(null);
// // // // // // // //   const px = useMotionValue(0);
// // // // // // // //   const py = useMotionValue(0);
// // // // // // // //   const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [5, -5]), { stiffness: 200, damping: 20 });
// // // // // // // //   const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-5, 5]), { stiffness: 200, damping: 20 });
// // // // // // // //   const onMove = (e: React.MouseEvent) => {
// // // // // // // //     if (reduce || !ref.current) return;
// // // // // // // //     const r = ref.current.getBoundingClientRect();
// // // // // // // //     px.set((e.clientX - r.left) / r.width - 0.5);
// // // // // // // //     py.set((e.clientY - r.top) / r.height - 0.5);
// // // // // // // //   };
// // // // // // // //   return <motion.div ref={ref} onMouseMove={onMove} onMouseLeave={() => { px.set(0); py.set(0); }} style={{ rotateX, rotateY, transformPerspective: 1100 }} className={className}>{children}</motion.div>;
// // // // // // // // }

// // // // // // // // function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
// // // // // // // //   const ref = useRef<HTMLSpanElement>(null);
// // // // // // // //   const inView = useInView(ref, { once: true });
// // // // // // // //   const reduce = useReducedMotion();
// // // // // // // //   const [v, setV] = useState(0);
// // // // // // // //   useEffect(() => {
// // // // // // // //     if (!inView) return;
// // // // // // // //     if (reduce) { setV(to); return; }
// // // // // // // //     const c = animate(0, to, { duration: 1.6, ease: EASE, onUpdate: x => setV(Math.round(x)) });
// // // // // // // //     return () => c.stop();
// // // // // // // //   }, [inView, to, reduce]);
// // // // // // // //   return <span ref={ref}>{String(v).padStart(2, "0")}{suffix}</span>;
// // // // // // // // }

// // // // // // // // function SectionHead({ n, kicker, children, sub }: { n: string; kicker: string; children: React.ReactNode; sub?: string }) {
// // // // // // // //   return <Reveal>
// // // // // // // //     <div className="flex items-center gap-4">
// // // // // // // //       <span className="av-outline font-mono text-5xl font-semibold leading-none sm:text-6xl">{n}</span>
// // // // // // // //       <span className="h-px w-12 bg-gradient-to-r from-emerald-400/70 to-transparent" />
// // // // // // // //       <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">{kicker}</span>
// // // // // // // //     </div>
// // // // // // // //     <div className="mt-7 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
// // // // // // // //       <h2 className="max-w-4xl text-[clamp(44px,6.6vw,92px)] font-semibold leading-[.9] tracking-[-.06em] text-white">{children}</h2>
// // // // // // // //       {sub && <p className="max-w-sm text-sm leading-7 text-zinc-400">{sub}</p>}
// // // // // // // //     </div>
// // // // // // // //   </Reveal>;
// // // // // // // // }

// // // // // // // // const Grad = ({ children }: { children: React.ReactNode }) => <span className="av-shine bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">{children}</span>;

// // // // // // // // /* ------------------------------------------------------------------ */
// // // // // // // // /* HERO                                                                */
// // // // // // // // /* ------------------------------------------------------------------ */

// // // // // // // // function RotatingWord() {
// // // // // // // //   const [i, setI] = useState(0);
// // // // // // // //   useEffect(() => { const t = setInterval(() => setI(x => (x + 1) % roles.length), 2200); return () => clearInterval(t); }, []);
// // // // // // // //   return <span className="relative inline-flex h-[1.4em] min-w-[7.5ch] items-center overflow-hidden align-bottom">
// // // // // // // //     <AnimatePresence mode="wait">
// // // // // // // //       <motion.span key={roles[i]} initial={{ y: "100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-100%", opacity: 0 }} transition={{ duration: 0.45, ease: EASE }} className="absolute left-0 font-semibold text-white">{roles[i]}</motion.span>
// // // // // // // //     </AnimatePresence>
// // // // // // // //   </span>;
// // // // // // // // }

// // // // // // // // function WordReveal({ text, delay = 0, grad = false }: { text: string; delay?: number; grad?: boolean }) {
// // // // // // // //   const reduce = useReducedMotion();
// // // // // // // //   return <>{text.split(" ").map((w, i) => <span key={`${w}-${i}`} className="inline-block overflow-hidden pb-[.16em] -mb-[.16em] align-bottom"><motion.span className="inline-block" initial={reduce ? false : { y: "115%", rotate: 5 }} animate={{ y: 0, rotate: 0 }} transition={{ duration: 1, delay: delay + i * 0.09, ease: EASE }}>{grad ? <Grad>{w}</Grad> : w}&nbsp;</motion.span></span>)}</>;
// // // // // // // // }

// // // // // // // // function Orbit() {
// // // // // // // //   const chips: [string, string, number][] = [["SEO", "01", 0], ["CONTENT", "02", 90], ["CREATIVE", "03", 180], ["EXECUTE", "04", 270]];
// // // // // // // //   return <div className="relative mx-auto aspect-square w-full max-w-[480px]">
// // // // // // // //     <div className="av-pulse absolute inset-[16%] rounded-full bg-emerald-600/35 blur-3xl" />
// // // // // // // //     <div className="av-pulse absolute inset-[30%] rounded-full bg-cyan-400/20 blur-3xl [animation-delay:-3s]" />
// // // // // // // //     <div className="av-spin absolute inset-[3%] rounded-full border border-white/10">
// // // // // // // //       {chips.map(([label, n, deg]) => <div key={label} className="absolute inset-0" style={{ transform: `rotate(${deg}deg)` }}>
// // // // // // // //         <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
// // // // // // // //           <div style={{ transform: `rotate(${-deg}deg)` }}><div className="av-spin-rev">
// // // // // // // //             <div className="whitespace-nowrap rounded-xl border border-white/15 bg-white/[.08] px-3 py-2 font-mono text-[10px] text-white shadow-[0_10px_40px_rgba(16,185,129,.25)] backdrop-blur-md"><span className="mr-2 text-emerald-300">{n}</span>{label}</div>
// // // // // // // //           </div></div>
// // // // // // // //         </div>
// // // // // // // //       </div>)}
// // // // // // // //     </div>
// // // // // // // //     <div className="av-spin-slow absolute inset-[20%] rounded-full border border-dashed border-emerald-300/25">
// // // // // // // //       <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,.9)]" />
// // // // // // // //       <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-teal-300 shadow-[0_0_14px_rgba(94,234,212,.9)]" />
// // // // // // // //     </div>
// // // // // // // //     <div className="absolute inset-[35%] grid place-items-center rounded-full border border-white/20 bg-[radial-gradient(circle_at_30%_25%,rgba(52,211,153,.55),rgba(24,16,48,.95)_62%)] text-center shadow-[0_0_80px_rgba(16,185,129,.45),inset_0_0_30px_rgba(255,255,255,.08)]">
// // // // // // // //       <div><p className="font-mono text-[7px] uppercase tracking-[.2em] text-emerald-200/80 sm:text-[8px]">Digital workflow</p><strong className="mt-2 block text-xl font-semibold leading-[.95] tracking-[-.05em] text-white sm:text-2xl">IDEA<br />TO<br /><Grad>IMPACT.</Grad></strong></div>
// // // // // // // //     </div>
// // // // // // // //   </div>;
// // // // // // // // }

// // // // // // // // function Hero() {
// // // // // // // //   const reduce = useReducedMotion();
// // // // // // // //   const { scrollY } = useScroll();
// // // // // // // //   const textY = useTransform(scrollY, [0, 700], [0, 70]);
// // // // // // // //   const orbY = useTransform(scrollY, [0, 700], [0, 130]);
// // // // // // // //   const fade = useTransform(scrollY, [0, 600], [1, 0.25]);
// // // // // // // //   const stats: [number, string, string][] = [[2, "Years hands-on", "+"], [projects.length, "Featured projects", ""], [experience.length, "Companies", ""], [totalSkills, "Skills & tools", ""]];
// // // // // // // //   return <section id="home" className="relative flex min-h-screen flex-col justify-center pb-16 pt-32 sm:pt-36">
// // // // // // // //     <div className="mx-auto grid w-[min(1240px,calc(100%-32px))] items-center gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-8">
// // // // // // // //       <motion.div style={{ y: reduce ? 0 : textY, opacity: reduce ? 1 : fade }}>
// // // // // // // //         <motion.div initial={reduce ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }} className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[.05] px-4 py-2 font-mono text-[10px] uppercase tracking-[.16em] text-zinc-300 backdrop-blur-md">
// // // // // // // //           <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" /></span>
// // // // // // // //           Available for projects
// // // // // // // //         </motion.div>
// // // // // // // //         <h1 className="mt-8 max-w-5xl text-[clamp(54px,8.4vw,122px)] font-semibold leading-[.86] tracking-[-.07em] text-white">
// // // // // // // //           <WordReveal text="I make digital work" delay={0.15} />
// // // // // // // //           <WordReveal text="worth noticing." delay={0.55} grad />
// // // // // // // //         </h1>
// // // // // // // //         <motion.p initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1, ease: EASE }} className="mt-8 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">Digital Marketing Executive working across websites, SEO, social media, content development, creative production and event communication.</motion.p>
// // // // // // // //         <motion.div initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.1, ease: EASE }} className="mt-6 flex items-center gap-3 text-lg text-zinc-500 sm:text-xl">Specialising in <RotatingWord /></motion.div>
// // // // // // // //         <motion.div initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.2, ease: EASE }} className="mt-9 flex flex-wrap items-center gap-3">
// // // // // // // //           <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} href="#work" className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-xs font-bold text-zinc-950 shadow-[0_0_50px_rgba(52,211,153,.35)] transition hover:bg-emerald-200">Explore real projects <ArrowRight size={14} className="transition group-hover:translate-x-1" /></motion.a>
// // // // // // // //           <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}><Link href="/work-samples" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.05] px-6 py-3.5 text-xs font-bold text-white backdrop-blur-md transition hover:border-white/40">Open work archive <ArrowRight size={14} /></Link></motion.div>
// // // // // // // //         </motion.div>
// // // // // // // //       </motion.div>
// // // // // // // //       <motion.div style={{ y: reduce ? 0 : orbY }} initial={reduce ? false : { opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.4, ease: EASE }}><Orbit /></motion.div>
// // // // // // // //     </div>
// // // // // // // //     <motion.div initial={reduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 1.4, ease: EASE }} className="mx-auto mt-16 w-[min(1240px,calc(100%-32px))]">
// // // // // // // //       <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl md:grid-cols-4">
// // // // // // // //         {stats.map(([n, label, suffix]) => <div key={label} className="bg-[#071612]/80 px-6 py-6"><div className="text-4xl font-semibold tracking-[-.05em] text-white sm:text-5xl"><CountUp to={n} suffix={suffix} /></div><p className="mt-2 font-mono text-[9px] uppercase tracking-[.16em] text-zinc-500">{label}</p></div>)}
// // // // // // // //       </div>
// // // // // // // //     </motion.div>
// // // // // // // //     <a href="#about" aria-label="Scroll to about" className="mx-auto mt-10 hidden items-center gap-2 font-mono text-[9px] uppercase tracking-[.18em] text-zinc-500 sm:flex">Scroll to explore <motion.span animate={reduce ? undefined : { y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}><ArrowDown size={13} /></motion.span></a>
// // // // // // // //   </section>;
// // // // // // // // }

// // // // // // // // /* ------------------------------------------------------------------ */
// // // // // // // // /* SECTIONS                                                            */
// // // // // // // // /* ------------------------------------------------------------------ */

// // // // // // // // function About() {
// // // // // // // //   const range = ["Websites", "SEO", "Social", "Content", "Creative", "Events", "Publishing", "Automation"];
// // // // // // // //   return <section id="about" className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // // // // // //     <SectionHead n="01" kicker="About me">I work where <Grad>marketing, content and execution</Grad> meet.</SectionHead>
// // // // // // // //     <div className="mt-14 grid gap-5 lg:grid-cols-[1.25fr_.75fr]">
// // // // // // // //       <Reveal><SpotCard className="h-full rounded-[28px] border border-white/10 bg-white/[.03] p-8 backdrop-blur-xl sm:p-10"><p className="text-xl leading-8 tracking-[-.02em] text-zinc-300 sm:text-2xl sm:leading-10">I enjoy taking a raw idea, messy information or business requirement and turning it into something structured, visual, useful and ready to publish — whether that is a website, campaign, social post, blog, conference asset or digital workflow.</p></SpotCard></Reveal>
// // // // // // // //       <Reveal delay={0.1}><SpotCard className="h-full rounded-[28px] border border-white/10 bg-white/[.03] p-6 backdrop-blur-xl"><p className="font-mono text-[9px] uppercase tracking-[.16em] text-zinc-500">My working range</p>
// // // // // // // //         <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }} className="mt-6 grid grid-cols-2 gap-2">{range.map((x, i) => <motion.span key={x} variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } } }} whileHover={{ y: -2 }} className="rounded-xl border border-white/10 bg-white/[.04] px-3 py-3 text-[10px] font-bold text-zinc-300 transition-colors hover:border-emerald-400/50 hover:text-white"><span className="mr-1.5 text-emerald-400">0{i + 1}</span>{x}</motion.span>)}</motion.div>
// // // // // // // //       </SpotCard></Reveal>
// // // // // // // //     </div>
// // // // // // // //   </div></section>;
// // // // // // // // }

// // // // // // // // function Experience() {
// // // // // // // //   const ref = useRef<HTMLDivElement>(null);
// // // // // // // //   const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
// // // // // // // //   const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 26 });
// // // // // // // //   return <section id="experience" className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // // // // // //     <SectionHead n="02" kicker="Career timeline" sub="Three stages of experience across technology, conference communication, content and digital marketing.">Where I’ve worked. <Grad>What I’ve done.</Grad></SectionHead>
// // // // // // // //     <div ref={ref} className="relative mt-16 space-y-8">
// // // // // // // //       <div className="absolute bottom-0 left-[7px] top-0 w-px bg-white/10 md:left-[187px]" />
// // // // // // // //       <motion.div style={{ scaleY }} className="absolute bottom-0 left-[7px] top-0 w-px origin-top bg-gradient-to-b from-emerald-400 via-teal-300 to-cyan-300 shadow-[0_0_12px_rgba(52,211,153,.8)] md:left-[187px]" />
// // // // // // // //       {experience.map((job, i) => <Reveal key={job.company} delay={0.05}>
// // // // // // // //         <div className="relative grid gap-5 pl-9 md:grid-cols-[180px_1fr] md:gap-14 md:pl-0">
// // // // // // // //           <span className={`absolute left-0 top-8 h-[15px] w-[15px] rounded-full border-2 bg-[#04100d] md:left-[180px] ${job.current ? "border-cyan-300 shadow-[0_0_16px_rgba(103,232,249,.9)]" : "border-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.6)]"}`} />
// // // // // // // //           <div className="md:pt-7 md:text-right"><p className="font-mono text-[10px] uppercase tracking-[.14em] text-emerald-300">0{i + 1} / Experience</p><p className="mt-2 font-mono text-[10px] uppercase leading-5 tracking-[.08em] text-zinc-500">{job.dates}<br />{job.location}</p>{job.current && <span className="mt-3 inline-block rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 font-mono text-[8px] uppercase tracking-[.12em] text-cyan-200">Present</span>}</div>
// // // // // // // //           <Tilt><SpotCard className="rounded-[26px] border border-white/10 bg-white/[.035] p-6 backdrop-blur-xl sm:p-8">
// // // // // // // //             <div className="flex items-start gap-4"><div className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-2xl border border-white/10 bg-white"><Image src={job.logo} alt={`${job.company} logo`} width={56} height={56} className="h-full w-full object-cover" /></div><div><h3 className="text-xl font-semibold tracking-[-.03em] text-white sm:text-2xl">{job.role}</h3><a href={job.href ?? "#"} target={job.href ? "_blank" : undefined} rel={job.href ? "noreferrer" : undefined} className="mt-1 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300 transition hover:text-white">{job.company}{job.href && <ExternalLink size={11} />}</a></div></div>
// // // // // // // //             <p className="mt-6 text-sm leading-7 text-zinc-400">{job.description}</p>
// // // // // // // //             <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-5">{job.points.map(p => <li key={p} className="flex gap-3 text-xs leading-6 text-zinc-300"><span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-emerald-400" />{p}</li>)}</ul>
// // // // // // // //             <div className="mt-6 flex flex-wrap gap-2">{job.tags.map(t => <span key={t} className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[9px] font-semibold text-emerald-200">{t}</span>)}</div>
// // // // // // // //           </SpotCard></Tilt>
// // // // // // // //         </div>
// // // // // // // //       </Reveal>)}
// // // // // // // //     </div>
// // // // // // // //   </div></section>;
// // // // // // // // }

// // // // // // // // function Work() {
// // // // // // // //   return <section id="work" className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // // // // // //     <SectionHead n="03" kicker="Selected work" sub="A selection of websites and digital experiences across aquaculture, conferences, technology and consumer brands.">Real projects. <Grad>Clear outcomes.</Grad></SectionHead>
// // // // // // // //     <div className="mt-6"><Link href="/work-samples" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.05] px-5 py-2.5 text-xs font-bold text-white backdrop-blur-md transition hover:border-emerald-400/60">Explore all work <ArrowRight size={14} /></Link></div>
// // // // // // // //     <div className="mt-14 space-y-8">
// // // // // // // //       {projects.map((project, i) => <Reveal key={project.id}>
// // // // // // // //         <SpotCard className="group relative rounded-[32px] border border-white/10 bg-white/[.03] p-4 backdrop-blur-xl sm:p-6">
// // // // // // // //           <div className={`pointer-events-none absolute -z-10 h-72 w-72 rounded-full blur-[100px] ${project.glow} ${i % 2 ? "-left-10 top-10" : "-right-10 top-10"}`} />
// // // // // // // //           <div className={`grid items-center gap-8 ${i % 2 ? "lg:grid-cols-[.9fr_1.1fr]" : "lg:grid-cols-[1.1fr_.9fr]"}`}>
// // // // // // // //             <div className={i % 2 ? "lg:order-2" : ""}>
// // // // // // // //               <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-[0_30px_80px_rgba(0,0,0,.5)]">
// // // // // // // //                 <div className="flex items-center gap-2 border-b border-white/10 bg-zinc-900 px-4 py-3"><span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" /><span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" /><span className="ml-3 truncate rounded-md bg-white/5 px-3 py-1 font-mono text-[9px] text-zinc-500">{project.link ? project.link.replace("https://", "") : project.company}</span></div>
// // // // // // // //                 <div className="flex h-[240px] items-center justify-center overflow-hidden bg-[#f4f4f5] sm:h-[330px]"><Image src={project.image} alt={`${project.company} website preview`} width={1100} height={760} className="h-full w-full object-contain object-center transition duration-700 ease-out group-hover:scale-[1.04]" /></div>
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //             <div className="px-2 pb-2 lg:px-6">
// // // // // // // //               <div className="flex items-center gap-3"><span className="av-outline font-mono text-4xl font-semibold">{project.id}</span><span className="rounded-full border border-white/10 bg-white/[.05] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[.12em] text-zinc-400">{project.label}</span></div>
// // // // // // // //               <p className="mt-6 font-mono text-[10px] uppercase tracking-[.16em] text-emerald-300">{project.company}</p>
// // // // // // // //               <h3 className="mt-3 text-3xl font-semibold leading-[1.05] tracking-[-.045em] text-white sm:text-4xl">{project.title}</h3>
// // // // // // // //               <p className="mt-4 text-sm leading-7 text-zinc-400">{project.description}</p>
// // // // // // // //               <div className="mt-7 flex flex-wrap gap-2.5"><Link href={`/work/${project.slug}`} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold text-zinc-950 transition hover:bg-emerald-200">View project <ArrowRight size={13} /></Link>{project.link && <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-xs font-bold text-white transition hover:border-white/50">Live website <ExternalLink size={13} /></a>}</div>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </SpotCard>
// // // // // // // //       </Reveal>)}
// // // // // // // //     </div>
// // // // // // // //   </div></section>;
// // // // // // // // }

// // // // // // // // function ArchivePreview() {
// // // // // // // //   const rowOne = archive.slice(0, 5);
// // // // // // // //   const rowTwo = archive.slice(5);
// // // // // // // //   const tile = ([src, title, company, format]: string[], key: string) => <Link href="/work-samples" key={key} className="group mr-4 w-[220px] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[.04] backdrop-blur-md transition hover:-translate-y-1 hover:border-emerald-400/50 sm:w-[260px]"><div className="flex h-[150px] items-center justify-center overflow-hidden bg-[#f2f1ef] p-3 sm:h-[180px] sm:p-4"><Image src={src} alt={title} width={520} height={420} className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.05]" /></div><div className="px-4 py-3"><p className="truncate font-mono text-[8px] uppercase tracking-[.1em] text-zinc-500">{company} · {format}</p><h3 className="mt-1.5 truncate text-xs font-bold text-zinc-100">{title}</h3></div></Link>;
// // // // // // // //   const row = (items: string[][], prefix: string) => [...items, ...items].map((it, i) => tile(it, `${prefix}-${i}`));
// // // // // // // //   return <section className="relative overflow-hidden py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // // // // // //     <SectionHead n="04" kicker="Creative archive" sub="Banners, carousel templates, event graphics and publications — moving gently so you can browse the range at a glance.">A closer look at <Grad>the creative work.</Grad></SectionHead>
// // // // // // // //     <div className="mt-6"><Link href="/work-samples" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold text-zinc-950 transition hover:bg-emerald-200">View all samples <ArrowRight size={14} /></Link></div>
// // // // // // // //   </div>
// // // // // // // //     <div className="av-pausable relative mt-12 space-y-4">
// // // // // // // //       <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#04100d] to-transparent sm:w-40" />
// // // // // // // //       <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#04100d] to-transparent sm:w-40" />
// // // // // // // //       <div className="av-marq">{row(rowOne, "a")}</div>
// // // // // // // //       <div className="av-marq av-marq-rev">{row(rowTwo, "b")}</div>
// // // // // // // //     </div>
// // // // // // // //     <p className="mt-7 text-center text-[10px] text-zinc-500">Hover to pause · Select any sample to open the complete archive</p>
// // // // // // // //   </section>;
// // // // // // // // }

// // // // // // // // function Skills() {
// // // // // // // //   return <section id="skills" className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // // // // // //     <SectionHead n="05" kicker="Skills & tools" sub="A straightforward overview of the marketing disciplines, measurement tools, creative apps and publishing platforms I work with.">The skills behind <Grad>the work.</Grad></SectionHead>
// // // // // // // //     <div className="mt-14 grid gap-5 lg:grid-cols-3">
// // // // // // // //       {skillGroups.map((group, gi) => <Reveal key={group.title} delay={gi * 0.08}><SpotCard className="h-full rounded-[28px] border border-white/10 bg-white/[.03] p-6 backdrop-blur-xl sm:p-7">
// // // // // // // //         <div className="flex items-end justify-between border-b border-white/10 pb-4"><h3 className="text-lg font-semibold tracking-[-.03em] text-white">{group.title}</h3><span className="font-mono text-[9px] uppercase tracking-[.14em] text-zinc-500">{String(group.items.length).padStart(2, "0")} items</span></div>
// // // // // // // //         <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03 } } }} className="mt-5 flex flex-wrap gap-2">{group.items.map(item => <motion.span key={item} variants={{ hidden: { opacity: 0, y: 12, scale: 0.94 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: EASE } } }} whileHover={{ y: -2 }} className="cursor-default rounded-full border border-white/10 bg-white/[.04] px-3.5 py-2 text-xs font-medium text-zinc-300 transition-colors hover:border-emerald-400/60 hover:bg-emerald-400/10 hover:text-white">{item}</motion.span>)}</motion.div>
// // // // // // // //       </SpotCard></Reveal>)}
// // // // // // // //     </div>
// // // // // // // //   </div></section>;
// // // // // // // // }

// // // // // // // // function Process() {
// // // // // // // //   const steps = [["01", "Understand", "Goal · audience · message"], ["02", "Structure", "Content · information · flow"], ["03", "Create", "Design · video · visual system"], ["04", "Execute", "Publish · schedule · maintain"]];
// // // // // // // //   return <section className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // // // // // //     <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-emerald-600/30 via-[#0a1f1b] to-cyan-500/10 p-8 backdrop-blur-xl sm:p-14">
// // // // // // // //       <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_75%)]" />
// // // // // // // //       <div className="relative"><SectionHead n="06" kicker="How I work">From brief to <Grad>publish-ready.</Grad></SectionHead>
// // // // // // // //         <div className="relative mt-14 grid gap-3 md:grid-cols-4">
// // // // // // // //           <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 1.5, ease: EASE }} className="pointer-events-none absolute left-[10%] right-[10%] top-[46px] hidden h-px origin-left bg-gradient-to-r from-emerald-300/60 via-teal-300/60 to-cyan-300/60 md:block" />
// // // // // // // //           {steps.map(([n, title, desc], i) => <Reveal key={n} delay={i * 0.1}><motion.article whileHover={{ y: -6 }} transition={{ duration: 0.3, ease: EASE }} className="h-full rounded-[24px] border border-white/10 bg-white/[.05] p-6 backdrop-blur-xl transition-colors hover:bg-white/[.09]"><span className="grid h-10 w-10 place-items-center rounded-full border border-emerald-300/40 bg-[#0a1f1b] font-mono text-[10px] text-emerald-200 shadow-[0_0_20px_rgba(52,211,153,.4)]">{n}</span><h3 className="mt-12 text-2xl font-semibold tracking-[-.04em] text-white">{title}</h3><p className="mt-2 text-xs leading-5 text-zinc-400">{desc}</p></motion.article></Reveal>)}
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   </div></section>;
// // // // // // // // }

// // // // // // // // function Insights() {
// // // // // // // //   return <section id="insights" className="relative py-28 sm:py-36"><div className="mx-auto grid w-[min(1240px,calc(100%-32px))] items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
// // // // // // // //     <Reveal><div className="flex items-center gap-4"><span className="av-outline font-mono text-5xl font-semibold leading-none sm:text-6xl">07</span><span className="h-px w-12 bg-gradient-to-r from-emerald-400/70 to-transparent" /><span className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">Insights · publishing</span></div>
// // // // // // // //       <h2 className="mt-7 text-[clamp(42px,6vw,88px)] font-semibold leading-[.92] tracking-[-.06em] text-white">Content is not decoration. <Grad>It is part of the product.</Grad></h2>
// // // // // // // //       <p className="mt-7 max-w-xl text-sm leading-7 text-zinc-400">The portfolio can keep expanding with published articles, SEO work, case studies and content projects as more source material is added.</p></Reveal>
// // // // // // // //     <Reveal delay={0.1}><Tilt><SpotCard className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[.04] p-3 shadow-[0_40px_100px_rgba(0,0,0,.5)] backdrop-blur-xl"><Image src="/work/innovare/blog.png" alt="Innovare blog publishing preview" width={900} height={650} className="h-[360px] w-full rounded-[24px] object-cover object-top" /><div className="p-4"><p className="font-mono text-[8px] uppercase tracking-[.14em] text-zinc-500">SEO · Content · Publishing</p><h3 className="mt-2 text-lg font-semibold text-white">Technical content presented as a usable digital experience.</h3></div></SpotCard></Tilt></Reveal>
// // // // // // // //   </div></section>;
// // // // // // // // }

// // // // // // // // function Testimonials() {
// // // // // // // //   return <section id="testimonials" className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // // // // // //     <SectionHead n="08" kicker="Testimonials">Good work should be <Grad>remembered.</Grad></SectionHead>
// // // // // // // //     <div className="mt-14 grid gap-5 lg:grid-cols-2">
// // // // // // // //       {testimonials.map(([name, role, quote], i) => <Reveal key={name} delay={i * 0.1}><SpotCard className="h-full rounded-[28px] border border-white/10 bg-white/[.035] p-8 backdrop-blur-xl sm:p-10">
// // // // // // // //         <Quote className="text-emerald-400" size={30} />
// // // // // // // //         <div className="mt-6 text-sm tracking-[.2em] text-amber-300">★★★★★</div>
// // // // // // // //         <p className="mt-5 text-lg leading-8 tracking-[-.015em] text-zinc-200 sm:text-xl sm:leading-9">“{quote}”</p>
// // // // // // // //         <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6"><span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-emerald-500 to-cyan-400 text-sm font-bold text-white">{name[0]}</span><div><b className="block text-sm text-white">{name}</b><span className="mt-0.5 block text-[10px] text-zinc-500">{role}</span></div></div>
// // // // // // // //       </SpotCard></Reveal>)}
// // // // // // // //     </div>
// // // // // // // //   </div></section>;
// // // // // // // // }

// // // // // // // // function Contact() {
// // // // // // // //   return <section id="contact" className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // // // // // //     <Reveal><div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[.03] p-8 backdrop-blur-xl sm:p-14">
// // // // // // // //       <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-emerald-600/30 blur-[110px]" />
// // // // // // // //       <div className="pointer-events-none absolute -bottom-24 left-10 h-80 w-80 rounded-full bg-cyan-500/15 blur-[110px]" />
// // // // // // // //       <div className="relative flex items-center gap-4"><span className="av-outline font-mono text-5xl font-semibold leading-none sm:text-6xl">09</span><span className="h-px w-12 bg-gradient-to-r from-emerald-400/70 to-transparent" /><span className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">Contact</span></div>
// // // // // // // //       <h2 className="relative mt-8 max-w-5xl text-[clamp(46px,7.2vw,108px)] font-semibold leading-[.88] tracking-[-.07em] text-white">Let’s build something <Grad>worth showing.</Grad></h2>
// // // // // // // //       <div className="relative mt-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
// // // // // // // //         <p className="max-w-md text-sm leading-7 text-zinc-400">Available for digital marketing, website, content, social media and creative projects.</p>
// // // // // // // //         <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
// // // // // // // //           <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} href="mailto:hello@adityavarma.dev" className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-xs font-bold text-zinc-950 shadow-[0_0_50px_rgba(52,211,153,.35)] transition-colors hover:bg-emerald-200"><Mail size={14} /> hello@adityavarma.dev <ArrowRight size={14} /></motion.a>
// // // // // // // //           <div className="flex gap-2"><motion.a whileHover={{ y: -3 }} href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[.05] text-white transition-colors hover:border-emerald-400/70"><Linkedin size={15} /></motion.a><motion.a whileHover={{ y: -3 }} href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[.05] text-white transition-colors hover:border-emerald-400/70"><Instagram size={15} /></motion.a></div>
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </div></Reveal>
// // // // // // // //     <footer className="mt-10 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 font-mono text-[9px] uppercase tracking-[.14em] text-zinc-500 sm:flex-row"><span>© 2026 Aditya Varma</span><span>Digital Marketing · Web · Content · Creative</span></footer>
// // // // // // // //   </div></section>;
// // // // // // // // }

// // // // // // // // /* ------------------------------------------------------------------ */
// // // // // // // // /* PAGE                                                                */
// // // // // // // // /* ------------------------------------------------------------------ */

// // // // // // // // export default function Portfolio() {
// // // // // // // //   const [menu, setMenu] = useState(false);
// // // // // // // //   const [active, setActive] = useState("home");
// // // // // // // //   const [scrolled, setScrolled] = useState(false);
// // // // // // // //   const [showTop, setShowTop] = useState(false);

// // // // // // // //   useEffect(() => {
// // // // // // // //     const ids = ["home", ...navLinks.map(([, id]) => id)];
// // // // // // // //     const els = ids.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];
// // // // // // // //     const io = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }); }, { rootMargin: "-45% 0px -50% 0px" });
// // // // // // // //     els.forEach(el => io.observe(el));
// // // // // // // //     const onScroll = () => { setScrolled(window.scrollY > 24); setShowTop(window.scrollY > 700); };
// // // // // // // //     onScroll();
// // // // // // // //     window.addEventListener("scroll", onScroll, { passive: true });
// // // // // // // //     return () => { io.disconnect(); window.removeEventListener("scroll", onScroll); };
// // // // // // // //   }, []);

// // // // // // // //   return <main className="relative min-h-screen overflow-x-clip bg-[#04100d] text-zinc-100 selection:bg-emerald-500/40">
// // // // // // // //     <style>{CSS}</style>
// // // // // // // //     <Backdrop />
// // // // // // // //     <ParticleField />
// // // // // // // //     <CursorGlow />
// // // // // // // //     <div aria-hidden className="av-grain pointer-events-none fixed inset-0 z-[3]" />
// // // // // // // //     <ScrollProgress />

// // // // // // // //     <motion.header initial={{ y: -70, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, delay: 0.1, ease: EASE }} className={`fixed left-1/2 top-4 z-[60] flex w-[min(1180px,calc(100%-20px))] -translate-x-1/2 items-center justify-between rounded-2xl border px-3 py-2.5 backdrop-blur-2xl transition-all duration-500 ${scrolled ? "border-white/15 bg-[#09171a]/80 shadow-[0_18px_60px_rgba(0,0,0,.5)]" : "border-white/10 bg-white/[.04]"}`}>
// // // // // // // //       <a href="#home" className="flex items-center gap-2.5"><span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-400 text-[10px] font-bold text-white shadow-[0_0_20px_rgba(16,185,129,.5)]">AV</span><span><b className="block text-[11px] leading-none text-white">Aditya Varma</b><small className="mt-1 block text-[7px] uppercase tracking-[.12em] text-zinc-500">Digital Marketing Executive</small></span></a>
// // // // // // // //       <nav className="hidden items-center gap-1 lg:flex">{navLinks.map(([label, id]) => <a key={id} href={`#${id}`} className={`relative rounded-full px-3 py-1.5 text-[10px] font-semibold transition-colors ${active === id ? "text-white" : "text-zinc-400 hover:text-white"}`}>{active === id && <motion.span layoutId="nav-pill" transition={{ type: "spring", stiffness: 380, damping: 32 }} className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/10" />}{label}</a>)}<Link href="/work-samples" className="rounded-full px-3 py-1.5 text-[10px] font-semibold text-zinc-400 transition hover:text-white">Work Archive</Link></nav>
// // // // // // // //       <a href="#contact" className="hidden items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[10px] font-bold text-zinc-950 transition hover:bg-emerald-200 lg:inline-flex">Let’s talk <ArrowRight size={12} /></a>
// // // // // // // //       <button onClick={() => setMenu(!menu)} className="grid h-9 w-9 place-items-center rounded-xl border border-white/15 bg-white/5 text-white lg:hidden" aria-label="Toggle menu" aria-expanded={menu}>{menu ? <X size={16} /> : <Menu size={16} />}</button>
// // // // // // // //       <AnimatePresence>{menu && <motion.div initial={{ opacity: 0, y: -8, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8, scale: 0.97 }} transition={{ duration: 0.25, ease: EASE }} className="absolute right-0 top-14 w-64 origin-top-right rounded-2xl border border-white/15 bg-[#09171a]/95 p-2 shadow-2xl backdrop-blur-2xl lg:hidden">{navLinks.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenu(false)} className={`block rounded-xl px-3 py-3 text-xs font-semibold hover:bg-white/5 ${active === id ? "text-emerald-300" : "text-zinc-300"}`}>{label}</a>)}<Link href="/work-samples" onClick={() => setMenu(false)} className="block rounded-xl px-3 py-3 text-xs font-semibold text-zinc-300 hover:bg-white/5">Work Archive</Link></motion.div>}</AnimatePresence>
// // // // // // // //     </motion.header>

// // // // // // // //     <div className="relative z-10">
// // // // // // // //       <Hero />
// // // // // // // //       <About />
// // // // // // // //       <Experience />
// // // // // // // //       <Work />
// // // // // // // //       <ArchivePreview />
// // // // // // // //       <Skills />
// // // // // // // //       <Process />
// // // // // // // //       <Insights />
// // // // // // // //       <Testimonials />
// // // // // // // //       <Contact />
// // // // // // // //     </div>

// // // // // // // //     <AnimatePresence>{showTop && <motion.a href="#home" aria-label="Back to top" initial={{ opacity: 0, y: 16, scale: 0.8 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.8 }} whileHover={{ y: -3 }} className="fixed bottom-6 right-6 z-[60] grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-[#09171a]/80 text-white shadow-[0_10px_40px_rgba(0,0,0,.5)] backdrop-blur-xl transition-colors hover:border-emerald-400/70"><ArrowUp size={16} /></motion.a>}</AnimatePresence>
// // // // // // // //   </main>;
// // // // // // // // }
// // // // // // // "use client";

// // // // // // // import { ArrowDown, ArrowRight, ArrowUp, ExternalLink, Instagram, Linkedin, Mail, Menu, Quote, X } from "lucide-react";
// // // // // // // import { AnimatePresence, animate, motion, useInView, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
// // // // // // // import Link from "next/link";
// // // // // // // import Image from "next/image";
// // // // // // // import { useEffect, useRef, useState } from "react";

// // // // // // // const EASE = [0.16, 1, 0.3, 1] as const;

// // // // // // // /* ------------------------------------------------------------------ */
// // // // // // // /* DATA (unchanged content)                                            */
// // // // // // // /* ------------------------------------------------------------------ */

// // // // // // // const projects = [
// // // // // // //   { id: "01", company: "Innovare Biopharma LLP", label: "WEBSITE · SEO · CONTENT", title: "Building a digital home for aquaculture health.", description: "Website development, product presentation, blog publishing, SEO-focused content, social support and digital marketing execution.", image: "/work/websites/innovare-home.png", slug: "innovare-biopharma", link: "https://innovarebiopharma.com/", glow: "bg-emerald-500/25" },
// // // // // // //   { id: "02", company: "C-STAR Global", label: "EVENTS · CONTENT · CREATIVE", title: "Turning conference information into a complete digital experience.", description: "Conference communication, speaker data, landing pages, banners, videos, social publishing and conference publications.", image: "/work/websites/cstar-home.png", slug: "c-star-global", glow: "bg-indigo-500/25" },
// // // // // // //   { id: "03", company: "Ecorfy Technologies Pvt. Ltd.", label: "WEB · SOCIAL · TECHNOLOGY", title: "Making technology easier to understand and easier to publish.", description: "Website work and technology-focused digital communication across software, AI, social media and marketing content.", image: "/work/ecorfy/website-cover.png", slug: "ecorfy-technologies", link: "https://www.ecorfy.com/", glow: "bg-cyan-500/20" },
// // // // // // //   { id: "04", company: "Shreshta Pickles", label: "FREELANCE · WEBSITE", title: "A clean digital storefront for a traditional food brand.", description: "Freelance website development with a product-led layout, clear navigation and a focused brand presentation.", image: "/work/websites/shreshta-home.png", slug: "shreshta-pickles", link: "https://shreshtapickles.com/", glow: "bg-orange-500/20" },
// // // // // // // ];

// // // // // // // const experience = [
// // // // // // //   { company: "Innovare Biopharma LLP", role: "Digital Marketing Executive", dates: "April 2026 — Present", location: "Hyderabad, India", logo: "/companies/innovare-logo.jpg", current: true, description: "Digital marketing, website management, SEO-focused content, social media support and creative production for an aquaculture-focused brand.", points: ["Managed website content, landing pages and digital publishing", "Supported SEO, blogs, social media and campaign creatives", "Created and coordinated marketing assets across digital channels"], tags: ["Digital Marketing", "SEO", "Content", "Social Media"], href: "https://innovarebiopharma.com/" },
// // // // // // //   { company: "C-STAR Global Inc.", role: "Content Developer · Digital Marketing", dates: "April 2023 — February 2026", location: "Hyderabad, India", logo: "/companies/cstar-logo.jpg", description: "Worked across conference communication, website content, speaker data, creative production, videos, conference publications and social media publishing.", points: ["Managed conference and expo content from raw data to publishable assets", "Created banners, videos, posters, conference books and social content", "Supported websites, virtual conferences and scheduled social publishing"], tags: ["Content Development", "Events", "Social Media", "Creative"] },
// // // // // // //   { company: "Ecorfy Technologies Pvt. Ltd.", role: "Software Engineer", dates: "Earlier experience", location: "Hyderabad, India", logo: "/companies/ecorfy-logo.jpg", description: "Earlier technology experience supporting web development and digital communication projects in a technology-focused environment.", points: ["Worked on website and software-oriented digital projects", "Supported technology communication and online presentation", "Built technical experience that now strengthens marketing execution"], tags: ["Web", "Software", "Digital", "Technology"], href: "https://www.ecorfy.com/" },
// // // // // // // ];

// // // // // // // const skillGroups = [
// // // // // // //   { title: "Digital Marketing", items: ["SEO", "On-page SEO", "Technical SEO", "Off-page SEO", "Content Development", "Content Marketing", "Social Media Marketing", "Google Ads", "Meta Ads", "Performance Marketing", "Lead Generation", "Email Marketing", "Keyword Research"] },
// // // // // // //   { title: "Analytics & Automation", items: ["Google Analytics 4 (GA4)", "Google Tag Manager (GTM)", "Google Search Console", "n8n Automation", "AI Tools"] },
// // // // // // //   { title: "Creative & Publishing Tools", items: ["Canva", "Renderforest", "CapCut", "Filmora", "Publito", "Publer", "Swipe Pages", "WordPress", "Hostinger", "Open Mercato"] },
// // // // // // // ];

// // // // // // // const archive = [
// // // // // // //   ["/work/innovare/samples/hygiene.png", "Hygiene in Shrimp Farms", "Innovare", "Educational social creative"],
// // // // // // //   ["/work/ecorfy/samples/top-generative-ai.png", "Generative AI Development", "Ecorfy", "Social banner"],
// // // // // // //   ["/work/uploads/AP_Defence_Carousel.jpg", "AP Defence & Aerospace", "Carousel", "Carousel template"],
// // // // // // //   ["/work/uploads/India_infrastructure.jpg", "India AI Infrastructure Race", "Carousel", "Carousel template"],
// // // // // // //   ["/work/innovare/samples/nutrition.png", "Nutrition for Stronger Shrimp", "Innovare", "Educational social creative"],
// // // // // // //   ["/work/ecorfy/samples/transform-ideas.png", "Transform Ideas", "Ecorfy", "Generative AI social"],
// // // // // // //   ["/work/cstar/women-forum-2024.jpg", "Global Women Forum", "C-STAR", "Event banner"],
// // // // // // //   ["/work/cstar/global-technology-forum-2024.jpg", "Global Technology Forum", "C-STAR", "Event poster"],
// // // // // // //   ["/work/uploads/Book_Updated_3_.jpg", "World Women & Health Forum", "C-STAR", "Conference publication"],
// // // // // // //   ["/work/ecorfy/samples/software-development.png", "Software Development", "Ecorfy", "Social banner"],
// // // // // // // ];

// // // // // // // const testimonials = [
// // // // // // //   ["Ravindra Raju", "Founder & Owner · Shreshta Pickles", "Working with Aditya has been a great experience. He efficiently manages our website, handles updates whenever needed, and supports our business operations."],
// // // // // // //   ["Sitarama Raju", "CEO · Innovare Labs", "Aditya played an important role in supporting our digital marketing and promotional activities. His contributions to website development, content management, and conference promotions helped strengthen our brand presence."],
// // // // // // // ];

// // // // // // // const roles = ["Websites", "SEO", "Content", "Creative", "Events"];
// // // // // // // const navLinks = [["About", "about"], ["Experience", "experience"], ["Work", "work"], ["Skills", "skills"], ["Testimonials", "testimonials"], ["Contact", "contact"]];
// // // // // // // const totalSkills = skillGroups.reduce((a, g) => a + g.items.length, 0);

// // // // // // // /* ------------------------------------------------------------------ */
// // // // // // // /* GLOBAL CSS (self-contained — no globals.css dependency)             */
// // // // // // // /* ------------------------------------------------------------------ */

// // // // // // // const CSS = `
// // // // // // // .av-blob{position:fixed;border-radius:9999px;filter:blur(110px);will-change:transform;pointer-events:none}
// // // // // // // @keyframes av-drift-a{0%,100%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(14vw,9vh,0) scale(1.25)}}
// // // // // // // @keyframes av-drift-b{0%,100%{transform:translate3d(0,0,0) scale(1.1)}50%{transform:translate3d(-12vw,-8vh,0) scale(.9)}}
// // // // // // // @keyframes av-drift-c{0%,100%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(-8vw,12vh,0) scale(1.2)}}
// // // // // // // .av-a{animation:av-drift-a 26s ease-in-out infinite}
// // // // // // // .av-b{animation:av-drift-b 32s ease-in-out infinite}
// // // // // // // .av-c{animation:av-drift-c 38s ease-in-out infinite}
// // // // // // // .av-grain{background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");opacity:.07;mix-blend-mode:overlay}
// // // // // // // @keyframes av-spin{to{transform:rotate(360deg)}}
// // // // // // // .av-spin{animation:av-spin 48s linear infinite}
// // // // // // // .av-spin-rev{animation:av-spin 48s linear infinite reverse}
// // // // // // // .av-spin-slow{animation:av-spin 90s linear infinite reverse}
// // // // // // // @keyframes av-pulse{0%,100%{opacity:.55;transform:scale(1)}50%{opacity:.95;transform:scale(1.08)}}
// // // // // // // .av-pulse{animation:av-pulse 6s ease-in-out infinite}
// // // // // // // @keyframes av-shine{0%{background-position:0% 50%}100%{background-position:200% 50%}}
// // // // // // // .av-shine{background-size:200% 100%;animation:av-shine 7s linear infinite}
// // // // // // // @keyframes av-marq{to{transform:translateX(-50%)}}
// // // // // // // .av-marq{display:flex;width:max-content;animation:av-marq 48s linear infinite}
// // // // // // // .av-marq-rev{animation-direction:reverse;animation-duration:56s}
// // // // // // // .av-pausable:hover .av-marq{animation-play-state:paused}
// // // // // // // .av-spot{position:relative}
// // // // // // // .av-spot::before{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;opacity:0;transition:opacity .4s;background:radial-gradient(420px circle at var(--mx,50%) var(--my,50%),rgba(16,185,129,.16),transparent 45%)}
// // // // // // // .av-spot::after{content:"";position:absolute;inset:0;border-radius:inherit;padding:1px;pointer-events:none;opacity:0;transition:opacity .4s;background:radial-gradient(320px circle at var(--mx,50%) var(--my,50%),rgba(110,231,183,.75),transparent 45%);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#000 0 0) content-box exclude,linear-gradient(#000 0 0)}
// // // // // // // .av-spot:hover::before,.av-spot:hover::after{opacity:1}
// // // // // // // .av-outline{-webkit-text-stroke:1px rgba(255,255,255,.22);color:transparent}
// // // // // // // html{scroll-behavior:smooth}
// // // // // // // @media (prefers-reduced-motion:reduce){.av-a,.av-b,.av-c,.av-spin,.av-spin-rev,.av-spin-slow,.av-pulse,.av-shine,.av-marq{animation:none!important}html{scroll-behavior:auto}}
// // // // // // // `;

// // // // // // // /* ------------------------------------------------------------------ */
// // // // // // // /* BACKGROUND                                                          */
// // // // // // // /* ------------------------------------------------------------------ */

// // // // // // // function ParticleField() {
// // // // // // //   const ref = useRef<HTMLCanvasElement>(null);
// // // // // // //   useEffect(() => {
// // // // // // //     const canvas = ref.current;
// // // // // // //     if (!canvas) return;
// // // // // // //     const ctx = canvas.getContext("2d");
// // // // // // //     if (!ctx) return;
// // // // // // //     const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
// // // // // // //     const dpr = Math.min(window.devicePixelRatio || 1, 2);
// // // // // // //     const mouse = { x: -9999, y: -9999 };
// // // // // // //     type P = { x: number; y: number; vx: number; vy: number; r: number };
// // // // // // //     let ps: P[] = [];
// // // // // // //     let w = 0, h = 0, raf = 0;

// // // // // // //     const init = () => {
// // // // // // //       w = window.innerWidth; h = window.innerHeight;
// // // // // // //       canvas.width = w * dpr; canvas.height = h * dpr;
// // // // // // //       canvas.style.width = `${w}px`; canvas.style.height = `${h}px`;
// // // // // // //       ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
// // // // // // //       const n = Math.min(w < 768 ? 45 : 105, Math.floor((w * h) / 15000));
// // // // // // //       ps = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.28, vy: (Math.random() - 0.5) * 0.28, r: Math.random() * 1.4 + 0.5 }));
// // // // // // //     };

// // // // // // //     const frame = () => {
// // // // // // //       ctx.clearRect(0, 0, w, h);
// // // // // // //       for (let i = 0; i < ps.length; i++) {
// // // // // // //         const p = ps[i];
// // // // // // //         if (!reduce) {
// // // // // // //           p.x += p.vx; p.y += p.vy;
// // // // // // //           if (p.x < -10) p.x = w + 10; else if (p.x > w + 10) p.x = -10;
// // // // // // //           if (p.y < -10) p.y = h + 10; else if (p.y > h + 10) p.y = -10;
// // // // // // //         }
// // // // // // //         const mdx = p.x - mouse.x, mdy = p.y - mouse.y;
// // // // // // //         const md = Math.hypot(mdx, mdy);
// // // // // // //         if (md < 180) {
// // // // // // //           ctx.strokeStyle = `rgba(110,231,183,${(1 - md / 180) * 0.55})`;
// // // // // // //           ctx.lineWidth = 0.8;
// // // // // // //           ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
// // // // // // //           if (!reduce) { p.x += (mdx / md) * 0.35; p.y += (mdy / md) * 0.35; }
// // // // // // //         }
// // // // // // //         for (let j = i + 1; j < ps.length; j++) {
// // // // // // //           const q = ps[j];
// // // // // // //           const d = Math.hypot(p.x - q.x, p.y - q.y);
// // // // // // //           if (d < 125) {
// // // // // // //             ctx.strokeStyle = `rgba(16,185,129,${(1 - d / 125) * 0.28})`;
// // // // // // //             ctx.lineWidth = 0.6;
// // // // // // //             ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
// // // // // // //           }
// // // // // // //         }
// // // // // // //         ctx.fillStyle = "rgba(209,250,229,.75)";
// // // // // // //         ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
// // // // // // //       }
// // // // // // //       if (!reduce) raf = requestAnimationFrame(frame);
// // // // // // //     };

// // // // // // //     const onMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
// // // // // // //     const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };
// // // // // // //     const onResize = () => { init(); if (reduce) frame(); };
// // // // // // //     const onVis = () => { if (document.hidden) cancelAnimationFrame(raf); else if (!reduce) raf = requestAnimationFrame(frame); };

// // // // // // //     init(); frame();
// // // // // // //     window.addEventListener("mousemove", onMove, { passive: true });
// // // // // // //     window.addEventListener("mouseleave", onLeave);
// // // // // // //     window.addEventListener("resize", onResize);
// // // // // // //     document.addEventListener("visibilitychange", onVis);
// // // // // // //     return () => {
// // // // // // //       cancelAnimationFrame(raf);
// // // // // // //       window.removeEventListener("mousemove", onMove);
// // // // // // //       window.removeEventListener("mouseleave", onLeave);
// // // // // // //       window.removeEventListener("resize", onResize);
// // // // // // //       document.removeEventListener("visibilitychange", onVis);
// // // // // // //     };
// // // // // // //   }, []);
// // // // // // //   return <canvas ref={ref} aria-hidden className="fixed inset-0 z-[1] pointer-events-none" />;
// // // // // // // }

// // // // // // // function CursorGlow() {
// // // // // // //   const mx = useMotionValue(-600);
// // // // // // //   const my = useMotionValue(-600);
// // // // // // //   const sx = useSpring(mx, { stiffness: 90, damping: 20, mass: 0.6 });
// // // // // // //   const sy = useSpring(my, { stiffness: 90, damping: 20, mass: 0.6 });
// // // // // // //   const x = useTransform(sx, v => v - 280);
// // // // // // //   const y = useTransform(sy, v => v - 280);
// // // // // // //   useEffect(() => {
// // // // // // //     const move = (e: MouseEvent) => { mx.set(e.clientX); my.set(e.clientY); };
// // // // // // //     window.addEventListener("mousemove", move, { passive: true });
// // // // // // //     return () => window.removeEventListener("mousemove", move);
// // // // // // //   }, [mx, my]);
// // // // // // //   return <motion.div aria-hidden style={{ x, y }} className="pointer-events-none fixed left-0 top-0 z-[2] hidden h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,.17),transparent_62%)] lg:block" />;
// // // // // // // }

// // // // // // // function Backdrop() {
// // // // // // //   return <div aria-hidden className="pointer-events-none fixed inset-0 z-0 bg-[#04100d]">
// // // // // // //     <div className="av-blob av-a -left-[10vw] -top-[12vh] h-[55vw] w-[55vw] max-h-[760px] max-w-[760px] bg-emerald-700/35" />
// // // // // // //     <div className="av-blob av-b -right-[8vw] top-[18vh] h-[48vw] w-[48vw] max-h-[680px] max-w-[680px] bg-cyan-500/20" />
// // // // // // //     <div className="av-blob av-c bottom-[-18vh] left-[22vw] h-[50vw] w-[50vw] max-h-[700px] max-w-[700px] bg-teal-600/20" />
// // // // // // //     <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_72%)]" />
// // // // // // //     <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(7,6,13,.85)_100%)]" />
// // // // // // //   </div>;
// // // // // // // }

// // // // // // // /* ------------------------------------------------------------------ */
// // // // // // // /* PRIMITIVES                                                          */
// // // // // // // /* ------------------------------------------------------------------ */

// // // // // // // function ScrollProgress() {
// // // // // // //   const { scrollYProgress } = useScroll();
// // // // // // //   const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.3 });
// // // // // // //   return <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-300" />;
// // // // // // // }

// // // // // // // function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
// // // // // // //   const reduce = useReducedMotion();
// // // // // // //   return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 36, filter: "blur(10px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.85, delay, ease: EASE }}>{children}</motion.div>;
// // // // // // // }

// // // // // // // function SpotCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
// // // // // // //   const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
// // // // // // //     const r = e.currentTarget.getBoundingClientRect();
// // // // // // //     e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
// // // // // // //     e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
// // // // // // //   };
// // // // // // //   return <div onMouseMove={onMove} className={`av-spot ${className}`}>{children}</div>;
// // // // // // // }

// // // // // // // function Tilt({ children, className = "" }: { children: React.ReactNode; className?: string }) {
// // // // // // //   const reduce = useReducedMotion();
// // // // // // //   const ref = useRef<HTMLDivElement>(null);
// // // // // // //   const px = useMotionValue(0);
// // // // // // //   const py = useMotionValue(0);
// // // // // // //   const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [5, -5]), { stiffness: 200, damping: 20 });
// // // // // // //   const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-5, 5]), { stiffness: 200, damping: 20 });
// // // // // // //   const onMove = (e: React.MouseEvent) => {
// // // // // // //     if (reduce || !ref.current) return;
// // // // // // //     const r = ref.current.getBoundingClientRect();
// // // // // // //     px.set((e.clientX - r.left) / r.width - 0.5);
// // // // // // //     py.set((e.clientY - r.top) / r.height - 0.5);
// // // // // // //   };
// // // // // // //   return <motion.div ref={ref} onMouseMove={onMove} onMouseLeave={() => { px.set(0); py.set(0); }} style={{ rotateX, rotateY, transformPerspective: 1100 }} className={className}>{children}</motion.div>;
// // // // // // // }

// // // // // // // function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
// // // // // // //   const ref = useRef<HTMLSpanElement>(null);
// // // // // // //   const inView = useInView(ref, { once: true });
// // // // // // //   const reduce = useReducedMotion();
// // // // // // //   const [v, setV] = useState(0);
// // // // // // //   useEffect(() => {
// // // // // // //     if (!inView) return;
// // // // // // //     if (reduce) { setV(to); return; }
// // // // // // //     const c = animate(0, to, { duration: 1.6, ease: EASE, onUpdate: x => setV(Math.round(x)) });
// // // // // // //     return () => c.stop();
// // // // // // //   }, [inView, to, reduce]);
// // // // // // //   return <span ref={ref}>{String(v).padStart(2, "0")}{suffix}</span>;
// // // // // // // }

// // // // // // // function SectionHead({ n, kicker, children, sub }: { n: string; kicker: string; children: React.ReactNode; sub?: string }) {
// // // // // // //   return <Reveal>
// // // // // // //     <div className="flex items-center gap-4">
// // // // // // //       <span className="av-outline font-mono text-5xl font-semibold leading-none sm:text-6xl">{n}</span>
// // // // // // //       <span className="h-px w-12 bg-gradient-to-r from-emerald-400/70 to-transparent" />
// // // // // // //       <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">{kicker}</span>
// // // // // // //     </div>
// // // // // // //     <div className="mt-7 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
// // // // // // //       <h2 className="max-w-4xl text-[clamp(44px,6.6vw,92px)] font-semibold leading-[.9] tracking-[-.06em] text-white">{children}</h2>
// // // // // // //       {sub && <p className="max-w-sm text-sm leading-7 text-zinc-400">{sub}</p>}
// // // // // // //     </div>
// // // // // // //   </Reveal>;
// // // // // // // }

// // // // // // // const Grad = ({ children }: { children: React.ReactNode }) => <span className="av-shine bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">{children}</span>;

// // // // // // // /* ------------------------------------------------------------------ */
// // // // // // // /* HERO                                                                */
// // // // // // // /* ------------------------------------------------------------------ */

// // // // // // // function RotatingWord() {
// // // // // // //   const [i, setI] = useState(0);
// // // // // // //   useEffect(() => { const t = setInterval(() => setI(x => (x + 1) % roles.length), 2200); return () => clearInterval(t); }, []);
// // // // // // //   return <span className="relative inline-flex h-[1.4em] min-w-[7.5ch] items-center overflow-hidden align-bottom">
// // // // // // //     <AnimatePresence mode="wait">
// // // // // // //       <motion.span key={roles[i]} initial={{ y: "100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-100%", opacity: 0 }} transition={{ duration: 0.45, ease: EASE }} className="absolute left-0 font-semibold text-white">{roles[i]}</motion.span>
// // // // // // //     </AnimatePresence>
// // // // // // //   </span>;
// // // // // // // }

// // // // // // // function WordReveal({ text, delay = 0, grad = false }: { text: string; delay?: number; grad?: boolean }) {
// // // // // // //   const reduce = useReducedMotion();
// // // // // // //   return <>{text.split(" ").map((w, i) => <span key={`${w}-${i}`} className="inline-block overflow-hidden pb-[.16em] -mb-[.16em] align-bottom"><motion.span className="inline-block" initial={reduce ? false : { y: "115%", rotate: 5 }} animate={{ y: 0, rotate: 0 }} transition={{ duration: 1, delay: delay + i * 0.09, ease: EASE }}>{grad ? <Grad>{w}</Grad> : w}&nbsp;</motion.span></span>)}</>;
// // // // // // // }

// // // // // // // function Orbit() {
// // // // // // //   const chips: [string, string, number][] = [["SEO", "01", 0], ["CONTENT", "02", 90], ["CREATIVE", "03", 180], ["EXECUTE", "04", 270]];
// // // // // // //   return <div className="relative mx-auto aspect-square w-full max-w-[480px]">
// // // // // // //     <div className="av-pulse absolute inset-[16%] rounded-full bg-emerald-600/35 blur-3xl" />
// // // // // // //     <div className="av-pulse absolute inset-[30%] rounded-full bg-cyan-400/20 blur-3xl [animation-delay:-3s]" />
// // // // // // //     <div className="av-spin absolute inset-[3%] rounded-full border border-white/10">
// // // // // // //       {chips.map(([label, n, deg]) => <div key={label} className="absolute inset-0" style={{ transform: `rotate(${deg}deg)` }}>
// // // // // // //         <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
// // // // // // //           <div style={{ transform: `rotate(${-deg}deg)` }}><div className="av-spin-rev">
// // // // // // //             <div className="whitespace-nowrap rounded-xl border border-white/15 bg-white/[.08] px-3 py-2 font-mono text-[10px] text-white shadow-[0_10px_40px_rgba(16,185,129,.25)] backdrop-blur-md"><span className="mr-2 text-emerald-300">{n}</span>{label}</div>
// // // // // // //           </div></div>
// // // // // // //         </div>
// // // // // // //       </div>)}
// // // // // // //     </div>
// // // // // // //     <div className="av-spin-slow absolute inset-[20%] rounded-full border border-dashed border-emerald-300/25">
// // // // // // //       <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,.9)]" />
// // // // // // //       <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-teal-300 shadow-[0_0_14px_rgba(94,234,212,.9)]" />
// // // // // // //     </div>
// // // // // // //     <div className="absolute inset-[35%] grid place-items-center rounded-full border border-white/20 bg-[radial-gradient(circle_at_30%_25%,rgba(52,211,153,.55),rgba(24,16,48,.95)_62%)] text-center shadow-[0_0_80px_rgba(16,185,129,.45),inset_0_0_30px_rgba(255,255,255,.08)]">
// // // // // // //       <div><p className="font-mono text-[7px] uppercase tracking-[.2em] text-emerald-200/80 sm:text-[8px]">Digital workflow</p><strong className="mt-2 block text-xl font-semibold leading-[.95] tracking-[-.05em] text-white sm:text-2xl">IDEA<br />TO<br /><Grad>IMPACT.</Grad></strong></div>
// // // // // // //     </div>
// // // // // // //   </div>;
// // // // // // // }

// // // // // // // function Hero() {
// // // // // // //   const reduce = useReducedMotion();
// // // // // // //   const { scrollY } = useScroll();
// // // // // // //   const textY = useTransform(scrollY, [0, 700], [0, 70]);
// // // // // // //   const orbY = useTransform(scrollY, [0, 700], [0, 130]);
// // // // // // //   const fade = useTransform(scrollY, [0, 600], [1, 0.25]);
// // // // // // //   const stats: [number, string, string][] = [[2, "Years hands-on", "+"], [projects.length, "Featured projects", ""], [experience.length, "Companies", ""], [totalSkills, "Skills & tools", ""]];
// // // // // // //   return <section id="home" className="relative flex min-h-screen flex-col justify-center pb-16 pt-32 sm:pt-36">
// // // // // // //     <div className="mx-auto grid w-[min(1240px,calc(100%-32px))] items-center gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-8">
// // // // // // //       <motion.div style={{ y: reduce ? 0 : textY, opacity: reduce ? 1 : fade }}>
// // // // // // //         <motion.div initial={reduce ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }} className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[.05] px-4 py-2 font-mono text-[10px] uppercase tracking-[.16em] text-zinc-300 backdrop-blur-md">
// // // // // // //           <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" /></span>
// // // // // // //           Available for projects
// // // // // // //         </motion.div>
// // // // // // //         <h1 className="mt-8 max-w-5xl text-[clamp(54px,8.4vw,122px)] font-semibold leading-[.86] tracking-[-.07em] text-white">
// // // // // // //           <WordReveal text="I make digital work" delay={0.15} />
// // // // // // //           <WordReveal text="worth noticing." delay={0.55} grad />
// // // // // // //         </h1>
// // // // // // //         <motion.p initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1, ease: EASE }} className="mt-8 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">Digital Marketing Executive working across websites, SEO, social media, content development, creative production and event communication.</motion.p>
// // // // // // //         <motion.div initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.1, ease: EASE }} className="mt-6 flex items-center gap-3 text-lg text-zinc-500 sm:text-xl">Specialising in <RotatingWord /></motion.div>
// // // // // // //         <motion.div initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.2, ease: EASE }} className="mt-9 flex flex-wrap items-center gap-3">
// // // // // // //           <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} href="#work" className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-xs font-bold text-zinc-950 shadow-[0_0_50px_rgba(52,211,153,.35)] transition hover:bg-emerald-200">Explore real projects <ArrowRight size={14} className="transition group-hover:translate-x-1" /></motion.a>
// // // // // // //           <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}><Link href="/work-samples" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.05] px-6 py-3.5 text-xs font-bold text-white backdrop-blur-md transition hover:border-white/40">Open work archive <ArrowRight size={14} /></Link></motion.div>
// // // // // // //         </motion.div>
// // // // // // //       </motion.div>
// // // // // // //       <motion.div style={{ y: reduce ? 0 : orbY }} initial={reduce ? false : { opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.4, ease: EASE }}><Orbit /></motion.div>
// // // // // // //     </div>
// // // // // // //     <motion.div initial={reduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 1.4, ease: EASE }} className="mx-auto mt-16 w-[min(1240px,calc(100%-32px))]">
// // // // // // //       <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl md:grid-cols-4">
// // // // // // //         {stats.map(([n, label, suffix]) => <div key={label} className="bg-[#071612]/80 px-6 py-6"><div className="text-4xl font-semibold tracking-[-.05em] text-white sm:text-5xl"><CountUp to={n} suffix={suffix} /></div><p className="mt-2 font-mono text-[9px] uppercase tracking-[.16em] text-zinc-500">{label}</p></div>)}
// // // // // // //       </div>
// // // // // // //     </motion.div>
// // // // // // //     <a href="#about" aria-label="Scroll to about" className="mx-auto mt-10 hidden items-center gap-2 font-mono text-[9px] uppercase tracking-[.18em] text-zinc-500 sm:flex">Scroll to explore <motion.span animate={reduce ? undefined : { y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}><ArrowDown size={13} /></motion.span></a>
// // // // // // //   </section>;
// // // // // // // }

// // // // // // // /* ------------------------------------------------------------------ */
// // // // // // // /* SECTIONS                                                            */
// // // // // // // /* ------------------------------------------------------------------ */

// // // // // // // function About() {
// // // // // // //   const range = ["Websites", "SEO", "Social", "Content", "Creative", "Events", "Publishing", "Automation"];
// // // // // // //   return <section id="about" className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // // // // //     <SectionHead n="01" kicker="About me">I work where <Grad>marketing, content and execution</Grad> meet.</SectionHead>
// // // // // // //     <div className="mt-14 grid gap-5 lg:grid-cols-[1.25fr_.75fr]">
// // // // // // //       <Reveal><SpotCard className="h-full rounded-[28px] border border-white/10 bg-white/[.03] p-8 backdrop-blur-xl sm:p-10"><p className="text-xl leading-8 tracking-[-.02em] text-zinc-300 sm:text-2xl sm:leading-10">I enjoy taking a raw idea, messy information or business requirement and turning it into something structured, visual, useful and ready to publish — whether that is a website, campaign, social post, blog, conference asset or digital workflow.</p></SpotCard></Reveal>
// // // // // // //       <Reveal delay={0.1}><SpotCard className="h-full rounded-[28px] border border-white/10 bg-white/[.03] p-6 backdrop-blur-xl"><p className="font-mono text-[9px] uppercase tracking-[.16em] text-zinc-500">My working range</p>
// // // // // // //         <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }} className="mt-6 grid grid-cols-2 gap-2">{range.map((x, i) => <motion.span key={x} variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } } }} whileHover={{ y: -2 }} className="rounded-xl border border-white/10 bg-white/[.04] px-3 py-3 text-[10px] font-bold text-zinc-300 transition-colors hover:border-emerald-400/50 hover:text-white"><span className="mr-1.5 text-emerald-400">0{i + 1}</span>{x}</motion.span>)}</motion.div>
// // // // // // //       </SpotCard></Reveal>
// // // // // // //     </div>
// // // // // // //   </div></section>;
// // // // // // // }

// // // // // // // function Experience() {
// // // // // // //   const ref = useRef<HTMLDivElement>(null);
// // // // // // //   const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
// // // // // // //   const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 26 });
// // // // // // //   return <section id="experience" className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // // // // //     <SectionHead n="02" kicker="Career timeline" sub="Three stages of experience across technology, conference communication, content and digital marketing.">Where I’ve worked. <Grad>What I’ve done.</Grad></SectionHead>
// // // // // // //     <div ref={ref} className="relative mt-16 space-y-8">
// // // // // // //       <div className="absolute bottom-0 left-[7px] top-0 w-px bg-white/10 md:left-[187px]" />
// // // // // // //       <motion.div style={{ scaleY }} className="absolute bottom-0 left-[7px] top-0 w-px origin-top bg-gradient-to-b from-emerald-400 via-teal-300 to-cyan-300 shadow-[0_0_12px_rgba(52,211,153,.8)] md:left-[187px]" />
// // // // // // //       {experience.map((job, i) => <Reveal key={job.company} delay={0.05}>
// // // // // // //         <div className="relative grid gap-5 pl-9 md:grid-cols-[180px_1fr] md:gap-14 md:pl-0">
// // // // // // //           <span className={`absolute left-0 top-8 h-[15px] w-[15px] rounded-full border-2 bg-[#04100d] md:left-[180px] ${job.current ? "border-cyan-300 shadow-[0_0_16px_rgba(103,232,249,.9)]" : "border-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.6)]"}`} />
// // // // // // //           <div className="md:pt-7 md:text-right"><p className="font-mono text-[10px] uppercase tracking-[.14em] text-emerald-300">0{i + 1} / Experience</p><p className="mt-2 font-mono text-[10px] uppercase leading-5 tracking-[.08em] text-zinc-500">{job.dates}<br />{job.location}</p>{job.current && <span className="mt-3 inline-block rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 font-mono text-[8px] uppercase tracking-[.12em] text-cyan-200">Present</span>}</div>
// // // // // // //           <Tilt><SpotCard className="rounded-[26px] border border-white/10 bg-white/[.035] p-6 backdrop-blur-xl sm:p-8">
// // // // // // //             <div className="flex items-start gap-4"><div className="grid h-14 w-24 shrink-0 place-items-center overflow-hidden rounded-2xl border border-white/10 bg-white p-1.5 sm:w-28"><Image src={job.logo} alt={`${job.company} logo`} width={160} height={80} className="h-full w-full object-contain" /></div><div><h3 className="text-xl font-semibold tracking-[-.03em] text-white sm:text-2xl">{job.role}</h3><a href={job.href ?? "#"} target={job.href ? "_blank" : undefined} rel={job.href ? "noreferrer" : undefined} className="mt-1 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300 transition hover:text-white">{job.company}{job.href && <ExternalLink size={11} />}</a></div></div>
// // // // // // //             <p className="mt-6 text-sm leading-7 text-zinc-400">{job.description}</p>
// // // // // // //             <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-5">{job.points.map(p => <li key={p} className="flex gap-3 text-xs leading-6 text-zinc-300"><span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-emerald-400" />{p}</li>)}</ul>
// // // // // // //             <div className="mt-6 flex flex-wrap gap-2">{job.tags.map(t => <span key={t} className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[9px] font-semibold text-emerald-200">{t}</span>)}</div>
// // // // // // //           </SpotCard></Tilt>
// // // // // // //         </div>
// // // // // // //       </Reveal>)}
// // // // // // //     </div>
// // // // // // //   </div></section>;
// // // // // // // }

// // // // // // // function Work() {
// // // // // // //   return <section id="work" className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // // // // //     <SectionHead n="03" kicker="Selected work" sub="A selection of websites and digital experiences across aquaculture, conferences, technology and consumer brands.">Real projects. <Grad>Clear outcomes.</Grad></SectionHead>
// // // // // // //     <div className="mt-6"><Link href="/work-samples" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.05] px-5 py-2.5 text-xs font-bold text-white backdrop-blur-md transition hover:border-emerald-400/60">Explore all work <ArrowRight size={14} /></Link></div>
// // // // // // //     <div className="mt-14 space-y-8">
// // // // // // //       {projects.map((project, i) => <Reveal key={project.id}>
// // // // // // //         <SpotCard className="group relative rounded-[32px] border border-white/10 bg-white/[.03] p-4 backdrop-blur-xl sm:p-6">
// // // // // // //           <div className={`pointer-events-none absolute -z-10 h-72 w-72 rounded-full blur-[100px] ${project.glow} ${i % 2 ? "-left-10 top-10" : "-right-10 top-10"}`} />
// // // // // // //           <div className={`grid items-center gap-8 ${i % 2 ? "lg:grid-cols-[.9fr_1.1fr]" : "lg:grid-cols-[1.1fr_.9fr]"}`}>
// // // // // // //             <div className={i % 2 ? "lg:order-2" : ""}>
// // // // // // //               <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-[0_30px_80px_rgba(0,0,0,.5)]">
// // // // // // //                 <div className="flex items-center gap-2 border-b border-white/10 bg-zinc-900 px-4 py-3"><span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" /><span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" /><span className="ml-3 truncate rounded-md bg-white/5 px-3 py-1 font-mono text-[9px] text-zinc-500">{project.link ? project.link.replace("https://", "") : project.company}</span></div>
// // // // // // //                 <div className="flex h-[240px] items-center justify-center overflow-hidden bg-[#f4f4f5] sm:h-[330px]"><Image src={project.image} alt={`${project.company} website preview`} width={1100} height={760} className="h-full w-full object-contain object-center transition duration-700 ease-out group-hover:scale-[1.04]" /></div>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //             <div className="px-2 pb-2 lg:px-6">
// // // // // // //               <div className="flex items-center gap-3"><span className="av-outline font-mono text-4xl font-semibold">{project.id}</span><span className="rounded-full border border-white/10 bg-white/[.05] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[.12em] text-zinc-400">{project.label}</span></div>
// // // // // // //               <p className="mt-6 font-mono text-[10px] uppercase tracking-[.16em] text-emerald-300">{project.company}</p>
// // // // // // //               <h3 className="mt-3 text-3xl font-semibold leading-[1.05] tracking-[-.045em] text-white sm:text-4xl">{project.title}</h3>
// // // // // // //               <p className="mt-4 text-sm leading-7 text-zinc-400">{project.description}</p>
// // // // // // //               <div className="mt-7 flex flex-wrap gap-2.5"><Link href={`/work/${project.slug}`} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold text-zinc-950 transition hover:bg-emerald-200">View project <ArrowRight size={13} /></Link>{project.link && <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-xs font-bold text-white transition hover:border-white/50">Live website <ExternalLink size={13} /></a>}</div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </SpotCard>
// // // // // // //       </Reveal>)}
// // // // // // //     </div>
// // // // // // //   </div></section>;
// // // // // // // }

// // // // // // // function ArchivePreview() {
// // // // // // //   const rowOne = archive.slice(0, 5);
// // // // // // //   const rowTwo = archive.slice(5);
// // // // // // //   const tile = ([src, title, company, format]: string[], key: string) => <Link href="/work-samples" key={key} className="group mr-4 w-[220px] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[.04] backdrop-blur-md transition hover:-translate-y-1 hover:border-emerald-400/50 sm:w-[260px]"><div className="flex h-[150px] items-center justify-center overflow-hidden bg-[#f2f1ef] p-3 sm:h-[180px] sm:p-4"><Image src={src} alt={title} width={520} height={420} className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.05]" /></div><div className="px-4 py-3"><p className="truncate font-mono text-[8px] uppercase tracking-[.1em] text-zinc-500">{company} · {format}</p><h3 className="mt-1.5 truncate text-xs font-bold text-zinc-100">{title}</h3></div></Link>;
// // // // // // //   const row = (items: string[][], prefix: string) => [...items, ...items].map((it, i) => tile(it, `${prefix}-${i}`));
// // // // // // //   return <section className="relative overflow-hidden py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // // // // //     <SectionHead n="04" kicker="Creative archive" sub="Banners, carousel templates, event graphics and publications — moving gently so you can browse the range at a glance.">A closer look at <Grad>the creative work.</Grad></SectionHead>
// // // // // // //     <div className="mt-6"><Link href="/work-samples" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold text-zinc-950 transition hover:bg-emerald-200">View all samples <ArrowRight size={14} /></Link></div>
// // // // // // //   </div>
// // // // // // //     <div className="av-pausable relative mt-12 space-y-4">
// // // // // // //       <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#04100d] to-transparent sm:w-40" />
// // // // // // //       <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#04100d] to-transparent sm:w-40" />
// // // // // // //       <div className="av-marq">{row(rowOne, "a")}</div>
// // // // // // //       <div className="av-marq av-marq-rev">{row(rowTwo, "b")}</div>
// // // // // // //     </div>
// // // // // // //     <p className="mt-7 text-center text-[10px] text-zinc-500">Hover to pause · Select any sample to open the complete archive</p>
// // // // // // //   </section>;
// // // // // // // }

// // // // // // // function Skills() {
// // // // // // //   return <section id="skills" className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // // // // //     <SectionHead n="05" kicker="Skills & tools" sub="A straightforward overview of the marketing disciplines, measurement tools, creative apps and publishing platforms I work with.">The skills behind <Grad>the work.</Grad></SectionHead>
// // // // // // //     <div className="mt-14 grid gap-5 lg:grid-cols-3">
// // // // // // //       {skillGroups.map((group, gi) => <Reveal key={group.title} delay={gi * 0.08}><SpotCard className="h-full rounded-[28px] border border-white/10 bg-white/[.03] p-6 backdrop-blur-xl sm:p-7">
// // // // // // //         <div className="flex items-end justify-between border-b border-white/10 pb-4"><h3 className="text-lg font-semibold tracking-[-.03em] text-white">{group.title}</h3><span className="font-mono text-[9px] uppercase tracking-[.14em] text-zinc-500">{String(group.items.length).padStart(2, "0")} items</span></div>
// // // // // // //         <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03 } } }} className="mt-5 flex flex-wrap gap-2">{group.items.map(item => <motion.span key={item} variants={{ hidden: { opacity: 0, y: 12, scale: 0.94 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: EASE } } }} whileHover={{ y: -2 }} className="cursor-default rounded-full border border-white/10 bg-white/[.04] px-3.5 py-2 text-xs font-medium text-zinc-300 transition-colors hover:border-emerald-400/60 hover:bg-emerald-400/10 hover:text-white">{item}</motion.span>)}</motion.div>
// // // // // // //       </SpotCard></Reveal>)}
// // // // // // //     </div>
// // // // // // //   </div></section>;
// // // // // // // }

// // // // // // // function Process() {
// // // // // // //   const steps = [["01", "Understand", "Goal · audience · message"], ["02", "Structure", "Content · information · flow"], ["03", "Create", "Design · video · visual system"], ["04", "Execute", "Publish · schedule · maintain"]];
// // // // // // //   return <section className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // // // // //     <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-emerald-600/30 via-[#0a1f1b] to-cyan-500/10 p-8 backdrop-blur-xl sm:p-14">
// // // // // // //       <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_75%)]" />
// // // // // // //       <div className="relative"><SectionHead n="06" kicker="How I work">From brief to <Grad>publish-ready.</Grad></SectionHead>
// // // // // // //         <div className="relative mt-14 grid gap-3 md:grid-cols-4">
// // // // // // //           <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 1.5, ease: EASE }} className="pointer-events-none absolute left-[10%] right-[10%] top-[46px] hidden h-px origin-left bg-gradient-to-r from-emerald-300/60 via-teal-300/60 to-cyan-300/60 md:block" />
// // // // // // //           {steps.map(([n, title, desc], i) => <Reveal key={n} delay={i * 0.1}><motion.article whileHover={{ y: -6 }} transition={{ duration: 0.3, ease: EASE }} className="h-full rounded-[24px] border border-white/10 bg-white/[.05] p-6 backdrop-blur-xl transition-colors hover:bg-white/[.09]"><span className="grid h-10 w-10 place-items-center rounded-full border border-emerald-300/40 bg-[#0a1f1b] font-mono text-[10px] text-emerald-200 shadow-[0_0_20px_rgba(52,211,153,.4)]">{n}</span><h3 className="mt-12 text-2xl font-semibold tracking-[-.04em] text-white">{title}</h3><p className="mt-2 text-xs leading-5 text-zinc-400">{desc}</p></motion.article></Reveal>)}
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   </div></section>;
// // // // // // // }

// // // // // // // function Insights() {
// // // // // // //   return <section id="insights" className="relative py-28 sm:py-36"><div className="mx-auto grid w-[min(1240px,calc(100%-32px))] items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
// // // // // // //     <Reveal><div className="flex items-center gap-4"><span className="av-outline font-mono text-5xl font-semibold leading-none sm:text-6xl">07</span><span className="h-px w-12 bg-gradient-to-r from-emerald-400/70 to-transparent" /><span className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">Insights · publishing</span></div>
// // // // // // //       <h2 className="mt-7 text-[clamp(42px,6vw,88px)] font-semibold leading-[.92] tracking-[-.06em] text-white">Content is not decoration. <Grad>It is part of the product.</Grad></h2>
// // // // // // //       <p className="mt-7 max-w-xl text-sm leading-7 text-zinc-400">The portfolio can keep expanding with published articles, SEO work, case studies and content projects as more source material is added.</p></Reveal>
// // // // // // //     <Reveal delay={0.1}><Tilt><SpotCard className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[.04] p-3 shadow-[0_40px_100px_rgba(0,0,0,.5)] backdrop-blur-xl"><Image src="/work/innovare/blog.png" alt="Innovare blog publishing preview" width={900} height={650} className="h-[360px] w-full rounded-[24px] object-cover object-top" /><div className="p-4"><p className="font-mono text-[8px] uppercase tracking-[.14em] text-zinc-500">SEO · Content · Publishing</p><h3 className="mt-2 text-lg font-semibold text-white">Technical content presented as a usable digital experience.</h3></div></SpotCard></Tilt></Reveal>
// // // // // // //   </div></section>;
// // // // // // // }

// // // // // // // function Testimonials() {
// // // // // // //   return <section id="testimonials" className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // // // // //     <SectionHead n="08" kicker="Testimonials">Good work should be <Grad>remembered.</Grad></SectionHead>
// // // // // // //     <div className="mt-14 grid gap-5 lg:grid-cols-2">
// // // // // // //       {testimonials.map(([name, role, quote], i) => <Reveal key={name} delay={i * 0.1}><SpotCard className="h-full rounded-[28px] border border-white/10 bg-white/[.035] p-8 backdrop-blur-xl sm:p-10">
// // // // // // //         <Quote className="text-emerald-400" size={30} />
// // // // // // //         <div className="mt-6 text-sm tracking-[.2em] text-amber-300">★★★★★</div>
// // // // // // //         <p className="mt-5 text-lg leading-8 tracking-[-.015em] text-zinc-200 sm:text-xl sm:leading-9">“{quote}”</p>
// // // // // // //         <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6"><span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-emerald-500 to-cyan-400 text-sm font-bold text-white">{name[0]}</span><div><b className="block text-sm text-white">{name}</b><span className="mt-0.5 block text-[10px] text-zinc-500">{role}</span></div></div>
// // // // // // //       </SpotCard></Reveal>)}
// // // // // // //     </div>
// // // // // // //   </div></section>;
// // // // // // // }

// // // // // // // function Contact() {
// // // // // // //   return <section id="contact" className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // // // // //     <Reveal><div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[.03] p-8 backdrop-blur-xl sm:p-14">
// // // // // // //       <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-emerald-600/30 blur-[110px]" />
// // // // // // //       <div className="pointer-events-none absolute -bottom-24 left-10 h-80 w-80 rounded-full bg-cyan-500/15 blur-[110px]" />
// // // // // // //       <div className="relative flex items-center gap-4"><span className="av-outline font-mono text-5xl font-semibold leading-none sm:text-6xl">09</span><span className="h-px w-12 bg-gradient-to-r from-emerald-400/70 to-transparent" /><span className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">Contact</span></div>
// // // // // // //       <h2 className="relative mt-8 max-w-5xl text-[clamp(46px,7.2vw,108px)] font-semibold leading-[.88] tracking-[-.07em] text-white">Let’s build something <Grad>worth showing.</Grad></h2>
// // // // // // //       <div className="relative mt-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
// // // // // // //         <p className="max-w-md text-sm leading-7 text-zinc-400">Available for digital marketing, website, content, social media and creative projects.</p>
// // // // // // //         <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
// // // // // // //           <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} href="mailto:hello@adityavarma.dev" className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-xs font-bold text-zinc-950 shadow-[0_0_50px_rgba(52,211,153,.35)] transition-colors hover:bg-emerald-200"><Mail size={14} /> hello@adityavarma.dev <ArrowRight size={14} /></motion.a>
// // // // // // //           <div className="flex gap-2"><motion.a whileHover={{ y: -3 }} href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[.05] text-white transition-colors hover:border-emerald-400/70"><Linkedin size={15} /></motion.a><motion.a whileHover={{ y: -3 }} href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[.05] text-white transition-colors hover:border-emerald-400/70"><Instagram size={15} /></motion.a></div>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div></Reveal>
// // // // // // //     <footer className="mt-10 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 font-mono text-[9px] uppercase tracking-[.14em] text-zinc-500 sm:flex-row"><span>© 2026 Aditya Varma</span><span>Digital Marketing · Web · Content · Creative</span></footer>
// // // // // // //   </div></section>;
// // // // // // // }

// // // // // // // /* ------------------------------------------------------------------ */
// // // // // // // /* PAGE                                                                */
// // // // // // // /* ------------------------------------------------------------------ */

// // // // // // // export default function Portfolio() {
// // // // // // //   const [menu, setMenu] = useState(false);
// // // // // // //   const [active, setActive] = useState("home");
// // // // // // //   const [scrolled, setScrolled] = useState(false);
// // // // // // //   const [showTop, setShowTop] = useState(false);

// // // // // // //   useEffect(() => {
// // // // // // //     const ids = ["home", ...navLinks.map(([, id]) => id)];
// // // // // // //     const els = ids.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];
// // // // // // //     const io = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }); }, { rootMargin: "-45% 0px -50% 0px" });
// // // // // // //     els.forEach(el => io.observe(el));
// // // // // // //     const onScroll = () => { setScrolled(window.scrollY > 24); setShowTop(window.scrollY > 700); };
// // // // // // //     onScroll();
// // // // // // //     window.addEventListener("scroll", onScroll, { passive: true });
// // // // // // //     return () => { io.disconnect(); window.removeEventListener("scroll", onScroll); };
// // // // // // //   }, []);

// // // // // // //   return <main className="relative min-h-screen overflow-x-clip bg-[#04100d] text-zinc-100 selection:bg-emerald-500/40">
// // // // // // //     <style>{CSS}</style>
// // // // // // //     <Backdrop />
// // // // // // //     <ParticleField />
// // // // // // //     <CursorGlow />
// // // // // // //     <div aria-hidden className="av-grain pointer-events-none fixed inset-0 z-[3]" />
// // // // // // //     <ScrollProgress />

// // // // // // //     <motion.header initial={{ y: -70, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, delay: 0.1, ease: EASE }} className={`fixed left-1/2 top-4 z-[60] flex w-[min(1180px,calc(100%-20px))] -translate-x-1/2 items-center justify-between rounded-2xl border px-3 py-2.5 backdrop-blur-2xl transition-all duration-500 ${scrolled ? "border-white/15 bg-[#09171a]/80 shadow-[0_18px_60px_rgba(0,0,0,.5)]" : "border-white/10 bg-white/[.04]"}`}>
// // // // // // //       <a href="#home" className="flex items-center gap-2.5"><span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-400 text-[10px] font-bold text-white shadow-[0_0_20px_rgba(16,185,129,.5)]">AV</span><span><b className="block text-[11px] leading-none text-white">Aditya Varma</b><small className="mt-1 block text-[7px] uppercase tracking-[.12em] text-zinc-500">Digital Marketing Executive</small></span></a>
// // // // // // //       <nav className="hidden items-center gap-1 lg:flex">{navLinks.map(([label, id]) => <a key={id} href={`#${id}`} className={`relative rounded-full px-3 py-1.5 text-[10px] font-semibold transition-colors ${active === id ? "text-white" : "text-zinc-400 hover:text-white"}`}>{active === id && <motion.span layoutId="nav-pill" transition={{ type: "spring", stiffness: 380, damping: 32 }} className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/10" />}{label}</a>)}<Link href="/work-samples" className="rounded-full px-3 py-1.5 text-[10px] font-semibold text-zinc-400 transition hover:text-white">Work Archive</Link></nav>
// // // // // // //       <a href="#contact" className="hidden items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[10px] font-bold text-zinc-950 transition hover:bg-emerald-200 lg:inline-flex">Let’s talk <ArrowRight size={12} /></a>
// // // // // // //       <button onClick={() => setMenu(!menu)} className="grid h-9 w-9 place-items-center rounded-xl border border-white/15 bg-white/5 text-white lg:hidden" aria-label="Toggle menu" aria-expanded={menu}>{menu ? <X size={16} /> : <Menu size={16} />}</button>
// // // // // // //       <AnimatePresence>{menu && <motion.div initial={{ opacity: 0, y: -8, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8, scale: 0.97 }} transition={{ duration: 0.25, ease: EASE }} className="absolute right-0 top-14 w-64 origin-top-right rounded-2xl border border-white/15 bg-[#09171a]/95 p-2 shadow-2xl backdrop-blur-2xl lg:hidden">{navLinks.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenu(false)} className={`block rounded-xl px-3 py-3 text-xs font-semibold hover:bg-white/5 ${active === id ? "text-emerald-300" : "text-zinc-300"}`}>{label}</a>)}<Link href="/work-samples" onClick={() => setMenu(false)} className="block rounded-xl px-3 py-3 text-xs font-semibold text-zinc-300 hover:bg-white/5">Work Archive</Link></motion.div>}</AnimatePresence>
// // // // // // //     </motion.header>

// // // // // // //     <div className="relative z-10">
// // // // // // //       <Hero />
// // // // // // //       <About />
// // // // // // //       <Experience />
// // // // // // //       <Work />
// // // // // // //       <ArchivePreview />
// // // // // // //       <Skills />
// // // // // // //       <Process />
// // // // // // //       <Insights />
// // // // // // //       <Testimonials />
// // // // // // //       <Contact />
// // // // // // //     </div>

// // // // // // //     <AnimatePresence>{showTop && <motion.a href="#home" aria-label="Back to top" initial={{ opacity: 0, y: 16, scale: 0.8 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.8 }} whileHover={{ y: -3 }} className="fixed bottom-6 right-6 z-[60] grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-[#09171a]/80 text-white shadow-[0_10px_40px_rgba(0,0,0,.5)] backdrop-blur-xl transition-colors hover:border-emerald-400/70"><ArrowUp size={16} /></motion.a>}</AnimatePresence>
// // // // // // //   </main>;
// // // // // // // }
// // // // // // "use client";

// // // // // // import { ArrowDown, ArrowRight, ArrowUp, ExternalLink, Instagram, Linkedin, Mail, Menu, Quote, X } from "lucide-react";
// // // // // // import { AnimatePresence, animate, motion, useInView, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
// // // // // // import Link from "next/link";
// // // // // // import Image from "next/image";
// // // // // // import { useEffect, useRef, useState } from "react";

// // // // // // const EASE = [0.16, 1, 0.3, 1] as const;

// // // // // // /* ------------------------------------------------------------------ */
// // // // // // /* DATA (unchanged content)                                            */
// // // // // // /* ------------------------------------------------------------------ */

// // // // // // const projects = [
// // // // // //   { id: "01", company: "Innovare Biopharma LLP", label: "WEBSITE · SEO · CONTENT", title: "Building a digital home for aquaculture health.", description: "Website development, product presentation, blog publishing, SEO-focused content, social support and digital marketing execution.", image: "/work/websites/innovare-home.png", slug: "innovare-biopharma", link: "https://innovarebiopharma.com/", glow: "bg-emerald-500/25" },
// // // // // //   { id: "02", company: "C-STAR Global", label: "EVENTS · CONTENT · CREATIVE", title: "Turning conference information into a complete digital experience.", description: "Conference communication, speaker data, landing pages, banners, videos, social publishing and conference publications.", image: "/work/websites/cstar-home.png", slug: "c-star-global", glow: "bg-indigo-500/25" },
// // // // // //   { id: "03", company: "Ecorfy Technologies Pvt. Ltd.", label: "WEB · SOCIAL · TECHNOLOGY", title: "Making technology easier to understand and easier to publish.", description: "Website work and technology-focused digital communication across software, AI, social media and marketing content.", image: "/work/ecorfy/website-cover.png", slug: "ecorfy-technologies", link: "https://www.ecorfy.com/", glow: "bg-cyan-500/20" },
// // // // // //   { id: "04", company: "Shreshta Pickles", label: "FREELANCE · WEBSITE", title: "A clean digital storefront for a traditional food brand.", description: "Freelance website development with a product-led layout, clear navigation and a focused brand presentation.", image: "/work/websites/shreshta-home.png", slug: "shreshta-pickles", link: "https://shreshtapickles.com/", glow: "bg-orange-500/20" },
// // // // // // ];

// // // // // // const experience = [
// // // // // //   { company: "Innovare Biopharma LLP", role: "Digital Marketing Executive", dates: "April 2026 — Present", location: "Hyderabad, India", logo: "/companies/innovare-logo.png", current: true, description: "Digital marketing, website management, SEO-focused content, social media support and creative production for an aquaculture-focused brand.", points: ["Managed website content, landing pages and digital publishing", "Supported SEO, blogs, social media and campaign creatives", "Created and coordinated marketing assets across digital channels"], tags: ["Digital Marketing", "SEO", "Content", "Social Media"], href: "https://innovarebiopharma.com/" },
// // // // // //   { company: "C-STAR Global Inc.", role: "Content Developer · Digital Marketing", dates: "April 2023 — February 2026", location: "Hyderabad, India", logo: "/companies/cstar-logo.png", description: "Worked across conference communication, website content, speaker data, creative production, videos, conference publications and social media publishing.", points: ["Managed conference and expo content from raw data to publishable assets", "Created banners, videos, posters, conference books and social content", "Supported websites, virtual conferences and scheduled social publishing"], tags: ["Content Development", "Events", "Social Media", "Creative"] },
// // // // // //   { company: "Ecorfy Technologies Pvt. Ltd.", role: "Software Engineer", dates: "Earlier experience", location: "Hyderabad, India", logo: "/companies/ecorfy-logo.png", description: "Earlier technology experience supporting web development and digital communication projects in a technology-focused environment.", points: ["Worked on website and software-oriented digital projects", "Supported technology communication and online presentation", "Built technical experience that now strengthens marketing execution"], tags: ["Web", "Software", "Digital", "Technology"], href: "https://www.ecorfy.com/" },
// // // // // //   { company: "Codexbox", role: "Software Engineer", dates: "October 2022 — May 2023", location: "Remote", logo: "/companies/codexbox-logo.png", description: "Designed, deployed, and maintained robust cloud infrastructure across AWS, Microsoft Azure, and GCP. Automated cloud provisioning via Infrastructure as Code with Terraform, managed Docker/Kubernetes container systems, and implemented CI/CD pipelines.", points: ["Designed and maintained cloud infrastructure across AWS, Azure, and GCP", "Automated provisioning using Infrastructure as Code (IaC) with Terraform", "Managed Docker/Kubernetes container systems and CI/CD pipelines"], tags: ["AWS", "Azure", "GCP", "Terraform"] },
// // // // // //   { company: "Tech Connect Services Pvt. Ltd.", role: "Computer Aided Design Draftsman", dates: "December 2021 — September 2022", location: "Hyderabad, India", logo: "/companies/techconnect-logo.png", description: "Delivered high-precision 2D/3D CAD layouts and schematic technical drawings for Audio-Visual infrastructure on large commercial and government sites.", points: ["Delivered high-precision 2D/3D CAD layouts for AV infrastructure projects", "Produced schematic technical drawings for large commercial and government sites"], tags: ["AutoCAD", "2D/3D Design", "AV Systems"] },
// // // // // //   { company: "India Yamaha Motor Pvt. Ltd.", role: "Assistant Manager", type: "Part-time", dates: "May 2020 — November 2021", location: "Hyderabad, India", logo: "/companies/yamaha-logo.png", description: "Managed day-to-day service center operations, supervising technicians to maximize workflow productivity, handling customer concerns and inventory coordination.", points: ["Managed day-to-day service center operations and technician workflows", "Supervised teams to maximize productivity and turnaround time"], tags: ["Operations Management", "Customer Service", "Team Leadership"] },
// // // // // // ];

// // // // // // const skillGroups = [
// // // // // //   { title: "Digital Marketing", items: ["SEO", "On-page SEO", "Technical SEO", "Off-page SEO", "Content Development", "Content Marketing", "Social Media Marketing", "Google Ads", "Meta Ads", "Performance Marketing", "Lead Generation", "Email Marketing", "Keyword Research"] },
// // // // // //   { title: "Analytics & Automation", items: ["Google Analytics 4 (GA4)", "Google Tag Manager (GTM)", "Google Search Console", "n8n Automation", "AI Tools"] },
// // // // // //   { title: "Creative & Publishing Tools", items: ["Canva", "Renderforest", "CapCut", "Filmora", "Publito", "Publer", "Swipe Pages", "WordPress", "Hostinger", "Open Mercato"] },
// // // // // // ];

// // // // // // const archive = [
// // // // // //   ["/work/innovare/samples/hygiene.png", "Hygiene in Shrimp Farms", "Innovare", "Educational social creative"],
// // // // // //   ["/work/ecorfy/samples/top-generative-ai.png", "Generative AI Development", "Ecorfy", "Social banner"],
// // // // // //   ["/work/uploads/AP_Defence_Carousel.jpg", "AP Defence & Aerospace", "Carousel", "Carousel template"],
// // // // // //   ["/work/uploads/India_infrastructure.jpg", "India AI Infrastructure Race", "Carousel", "Carousel template"],
// // // // // //   ["/work/innovare/samples/nutrition.png", "Nutrition for Stronger Shrimp", "Innovare", "Educational social creative"],
// // // // // //   ["/work/ecorfy/samples/transform-ideas.png", "Transform Ideas", "Ecorfy", "Generative AI social"],
// // // // // //   ["/work/cstar/women-forum-2024.jpg", "Global Women Forum", "C-STAR", "Event banner"],
// // // // // //   ["/work/cstar/global-technology-forum-2024.jpg", "Global Technology Forum", "C-STAR", "Event poster"],
// // // // // //   ["/work/uploads/Book_Updated_3_.jpg", "World Women & Health Forum", "C-STAR", "Conference publication"],
// // // // // //   ["/work/ecorfy/samples/software-development.png", "Software Development", "Ecorfy", "Social banner"],
// // // // // // ];

// // // // // // const testimonials = [
// // // // // //   ["Ravindra Raju", "Founder & Owner · Shrestha Pickles", "Working with Aditya has been a great experience. He efficiently manages our website, handles updates whenever needed, and supports our business operations and maintaining accurate records. His professionalism and dedication make him a dependable partner for our business."],
// // // // // //   ["Ujeetha Yasaswi (Branch Manager)", "Manager · Yamaha Motors", "During his tenure as Assistant Manager, Aditya demonstrated strong leadership, organizational, and customer service skills. He efficiently managed billing and invoice processing, coordinated daily operations, handled customer service concerns, and ensured smooth communication between customers and service teams. His professionalism, problem-solving abilities, and commitment to delivering excellent customer experiences made him a valuable asset to our organization."],
// // // // // //   ["Sitarama Raju", "CEO · Innovare Labs", "Aditya played an important role in supporting our digital marketing and promotional activities. His contributions to website development, content management, and conference promotions helped strengthen our brand presence within the aquaculture industry. He consistently demonstrated professionalism, creativity, and a strong commitment to delivering quality work."],
// // // // // //   ["Varma Bhupathiraju", "CEO · C-STAR Global Inc", "Aditya was an integral part of our marketing and digital presence. He managed our website, supported design updates, created marketing content, and played a key role in promoting our international conferences. His ability to combine creativity, technical skills, and marketing expertise helped strengthen our brand and effectively engage our target audience."],
// // // // // //   ["Swathi Gurijala", "HR Manager · Ecorfy Technologies Pvt Ltd", "Aditya successfully developed and maintained our company website, ensuring it remained professional, user-friendly, and up to date. He consistently delivered high-quality work, met project deadlines, and demonstrated a strong commitment to supporting our business goals. His professionalism, problem-solving abilities, and attention to detail made him a valuable member of our team."],
// // // // // // ];

// // // // // // const roles = ["Websites", "SEO", "Content", "Creative", "Events"];
// // // // // // const navLinks = [["About", "about"], ["Experience", "experience"], ["Work", "work"], ["Skills", "skills"], ["Testimonials", "testimonials"], ["Contact", "contact"]];
// // // // // // const totalSkills = skillGroups.reduce((a, g) => a + g.items.length, 0);

// // // // // // /* ------------------------------------------------------------------ */
// // // // // // /* GLOBAL CSS (self-contained — no globals.css dependency)             */
// // // // // // /* ------------------------------------------------------------------ */

// // // // // // const CSS = `
// // // // // // .av-blob{position:fixed;border-radius:9999px;filter:blur(110px);will-change:transform;pointer-events:none}
// // // // // // @keyframes av-drift-a{0%,100%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(14vw,9vh,0) scale(1.25)}}
// // // // // // @keyframes av-drift-b{0%,100%{transform:translate3d(0,0,0) scale(1.1)}50%{transform:translate3d(-12vw,-8vh,0) scale(.9)}}
// // // // // // @keyframes av-drift-c{0%,100%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(-8vw,12vh,0) scale(1.2)}}
// // // // // // .av-a{animation:av-drift-a 26s ease-in-out infinite}
// // // // // // .av-b{animation:av-drift-b 32s ease-in-out infinite}
// // // // // // .av-c{animation:av-drift-c 38s ease-in-out infinite}
// // // // // // .av-grain{background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");opacity:.07;mix-blend-mode:overlay}
// // // // // // @keyframes av-spin{to{transform:rotate(360deg)}}
// // // // // // .av-spin{animation:av-spin 48s linear infinite}
// // // // // // .av-spin-rev{animation:av-spin 48s linear infinite reverse}
// // // // // // .av-spin-slow{animation:av-spin 90s linear infinite reverse}
// // // // // // @keyframes av-pulse{0%,100%{opacity:.55;transform:scale(1)}50%{opacity:.95;transform:scale(1.08)}}
// // // // // // .av-pulse{animation:av-pulse 6s ease-in-out infinite}
// // // // // // @keyframes av-shine{0%{background-position:0% 50%}100%{background-position:200% 50%}}
// // // // // // .av-shine{background-size:200% 100%;animation:av-shine 7s linear infinite}
// // // // // // @keyframes av-marq{to{transform:translateX(-50%)}}
// // // // // // .av-marq{display:flex;width:max-content;animation:av-marq 48s linear infinite}
// // // // // // .av-marq-rev{animation-direction:reverse;animation-duration:56s}
// // // // // // .av-pausable:hover .av-marq{animation-play-state:paused}
// // // // // // .av-spot{position:relative}
// // // // // // .av-spot::before{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;opacity:0;transition:opacity .4s;background:radial-gradient(420px circle at var(--mx,50%) var(--my,50%),rgba(16,185,129,.16),transparent 45%)}
// // // // // // .av-spot::after{content:"";position:absolute;inset:0;border-radius:inherit;padding:1px;pointer-events:none;opacity:0;transition:opacity .4s;background:radial-gradient(320px circle at var(--mx,50%) var(--my,50%),rgba(110,231,183,.75),transparent 45%);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#000 0 0) content-box exclude,linear-gradient(#000 0 0)}
// // // // // // .av-spot:hover::before,.av-spot:hover::after{opacity:1}
// // // // // // .av-outline{-webkit-text-stroke:1px rgba(255,255,255,.22);color:transparent}
// // // // // // html{scroll-behavior:smooth}
// // // // // // @media (prefers-reduced-motion:reduce){.av-a,.av-b,.av-c,.av-spin,.av-spin-rev,.av-spin-slow,.av-pulse,.av-shine,.av-marq{animation:none!important}html{scroll-behavior:auto}}
// // // // // // `;

// // // // // // /* ------------------------------------------------------------------ */
// // // // // // /* BACKGROUND                                                          */
// // // // // // /* ------------------------------------------------------------------ */

// // // // // // function ParticleField() {
// // // // // //   const ref = useRef<HTMLCanvasElement>(null);
// // // // // //   useEffect(() => {
// // // // // //     const canvas = ref.current;
// // // // // //     if (!canvas) return;
// // // // // //     const ctx = canvas.getContext("2d");
// // // // // //     if (!ctx) return;
// // // // // //     const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
// // // // // //     const dpr = Math.min(window.devicePixelRatio || 1, 2);
// // // // // //     const mouse = { x: -9999, y: -9999 };
// // // // // //     type P = { x: number; y: number; vx: number; vy: number; r: number };
// // // // // //     let ps: P[] = [];
// // // // // //     let w = 0, h = 0, raf = 0;

// // // // // //     const init = () => {
// // // // // //       w = window.innerWidth; h = window.innerHeight;
// // // // // //       canvas.width = w * dpr; canvas.height = h * dpr;
// // // // // //       canvas.style.width = `${w}px`; canvas.style.height = `${h}px`;
// // // // // //       ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
// // // // // //       const n = Math.min(w < 768 ? 45 : 105, Math.floor((w * h) / 15000));
// // // // // //       ps = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.28, vy: (Math.random() - 0.5) * 0.28, r: Math.random() * 1.4 + 0.5 }));
// // // // // //     };

// // // // // //     const frame = () => {
// // // // // //       ctx.clearRect(0, 0, w, h);
// // // // // //       for (let i = 0; i < ps.length; i++) {
// // // // // //         const p = ps[i];
// // // // // //         if (!reduce) {
// // // // // //           p.x += p.vx; p.y += p.vy;
// // // // // //           if (p.x < -10) p.x = w + 10; else if (p.x > w + 10) p.x = -10;
// // // // // //           if (p.y < -10) p.y = h + 10; else if (p.y > h + 10) p.y = -10;
// // // // // //         }
// // // // // //         const mdx = p.x - mouse.x, mdy = p.y - mouse.y;
// // // // // //         const md = Math.hypot(mdx, mdy);
// // // // // //         if (md < 180) {
// // // // // //           ctx.strokeStyle = `rgba(110,231,183,${(1 - md / 180) * 0.55})`;
// // // // // //           ctx.lineWidth = 0.8;
// // // // // //           ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
// // // // // //           if (!reduce) { p.x += (mdx / md) * 0.35; p.y += (mdy / md) * 0.35; }
// // // // // //         }
// // // // // //         for (let j = i + 1; j < ps.length; j++) {
// // // // // //           const q = ps[j];
// // // // // //           const d = Math.hypot(p.x - q.x, p.y - q.y);
// // // // // //           if (d < 125) {
// // // // // //             ctx.strokeStyle = `rgba(16,185,129,${(1 - d / 125) * 0.28})`;
// // // // // //             ctx.lineWidth = 0.6;
// // // // // //             ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
// // // // // //           }
// // // // // //         }
// // // // // //         ctx.fillStyle = "rgba(209,250,229,.75)";
// // // // // //         ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
// // // // // //       }
// // // // // //       if (!reduce) raf = requestAnimationFrame(frame);
// // // // // //     };

// // // // // //     const onMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
// // // // // //     const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };
// // // // // //     const onResize = () => { init(); if (reduce) frame(); };
// // // // // //     const onVis = () => { if (document.hidden) cancelAnimationFrame(raf); else if (!reduce) raf = requestAnimationFrame(frame); };

// // // // // //     init(); frame();
// // // // // //     window.addEventListener("mousemove", onMove, { passive: true });
// // // // // //     window.addEventListener("mouseleave", onLeave);
// // // // // //     window.addEventListener("resize", onResize);
// // // // // //     document.addEventListener("visibilitychange", onVis);
// // // // // //     return () => {
// // // // // //       cancelAnimationFrame(raf);
// // // // // //       window.removeEventListener("mousemove", onMove);
// // // // // //       window.removeEventListener("mouseleave", onLeave);
// // // // // //       window.removeEventListener("resize", onResize);
// // // // // //       document.removeEventListener("visibilitychange", onVis);
// // // // // //     };
// // // // // //   }, []);
// // // // // //   return <canvas ref={ref} aria-hidden className="fixed inset-0 z-[1] pointer-events-none" />;
// // // // // // }

// // // // // // function CursorGlow() {
// // // // // //   const mx = useMotionValue(-600);
// // // // // //   const my = useMotionValue(-600);
// // // // // //   const sx = useSpring(mx, { stiffness: 90, damping: 20, mass: 0.6 });
// // // // // //   const sy = useSpring(my, { stiffness: 90, damping: 20, mass: 0.6 });
// // // // // //   const x = useTransform(sx, v => v - 280);
// // // // // //   const y = useTransform(sy, v => v - 280);
// // // // // //   useEffect(() => {
// // // // // //     const move = (e: MouseEvent) => { mx.set(e.clientX); my.set(e.clientY); };
// // // // // //     window.addEventListener("mousemove", move, { passive: true });
// // // // // //     return () => window.removeEventListener("mousemove", move);
// // // // // //   }, [mx, my]);
// // // // // //   return <motion.div aria-hidden style={{ x, y }} className="pointer-events-none fixed left-0 top-0 z-[2] hidden h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,.17),transparent_62%)] lg:block" />;
// // // // // // }

// // // // // // function Backdrop() {
// // // // // //   return <div aria-hidden className="pointer-events-none fixed inset-0 z-0 bg-[#04100d]">
// // // // // //     <div className="av-blob av-a -left-[10vw] -top-[12vh] h-[55vw] w-[55vw] max-h-[760px] max-w-[760px] bg-emerald-700/35" />
// // // // // //     <div className="av-blob av-b -right-[8vw] top-[18vh] h-[48vw] w-[48vw] max-h-[680px] max-w-[680px] bg-cyan-500/20" />
// // // // // //     <div className="av-blob av-c bottom-[-18vh] left-[22vw] h-[50vw] w-[50vw] max-h-[700px] max-w-[700px] bg-teal-600/20" />
// // // // // //     <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_72%)]" />
// // // // // //     <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(7,6,13,.85)_100%)]" />
// // // // // //   </div>;
// // // // // // }

// // // // // // /* ------------------------------------------------------------------ */
// // // // // // /* PRIMITIVES                                                          */
// // // // // // /* ------------------------------------------------------------------ */

// // // // // // function ScrollProgress() {
// // // // // //   const { scrollYProgress } = useScroll();
// // // // // //   const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.3 });
// // // // // //   return <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-300" />;
// // // // // // }

// // // // // // function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
// // // // // //   const reduce = useReducedMotion();
// // // // // //   return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 36, filter: "blur(10px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.85, delay, ease: EASE }}>{children}</motion.div>;
// // // // // // }

// // // // // // function SpotCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
// // // // // //   const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
// // // // // //     const r = e.currentTarget.getBoundingClientRect();
// // // // // //     e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
// // // // // //     e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
// // // // // //   };
// // // // // //   return <div onMouseMove={onMove} className={`av-spot ${className}`}>{children}</div>;
// // // // // // }

// // // // // // function Tilt({ children, className = "" }: { children: React.ReactNode; className?: string }) {
// // // // // //   const reduce = useReducedMotion();
// // // // // //   const ref = useRef<HTMLDivElement>(null);
// // // // // //   const px = useMotionValue(0);
// // // // // //   const py = useMotionValue(0);
// // // // // //   const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [5, -5]), { stiffness: 200, damping: 20 });
// // // // // //   const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-5, 5]), { stiffness: 200, damping: 20 });
// // // // // //   const onMove = (e: React.MouseEvent) => {
// // // // // //     if (reduce || !ref.current) return;
// // // // // //     const r = ref.current.getBoundingClientRect();
// // // // // //     px.set((e.clientX - r.left) / r.width - 0.5);
// // // // // //     py.set((e.clientY - r.top) / r.height - 0.5);
// // // // // //   };
// // // // // //   return <motion.div ref={ref} onMouseMove={onMove} onMouseLeave={() => { px.set(0); py.set(0); }} style={{ rotateX, rotateY, transformPerspective: 1100 }} className={className}>{children}</motion.div>;
// // // // // // }

// // // // // // function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
// // // // // //   const ref = useRef<HTMLSpanElement>(null);
// // // // // //   const inView = useInView(ref, { once: true });
// // // // // //   const reduce = useReducedMotion();
// // // // // //   const [v, setV] = useState(0);
// // // // // //   useEffect(() => {
// // // // // //     if (!inView) return;
// // // // // //     if (reduce) { setV(to); return; }
// // // // // //     const c = animate(0, to, { duration: 1.6, ease: EASE, onUpdate: x => setV(Math.round(x)) });
// // // // // //     return () => c.stop();
// // // // // //   }, [inView, to, reduce]);
// // // // // //   return <span ref={ref}>{String(v).padStart(2, "0")}{suffix}</span>;
// // // // // // }

// // // // // // function SectionHead({ n, kicker, children, sub }: { n: string; kicker: string; children: React.ReactNode; sub?: string }) {
// // // // // //   return <Reveal>
// // // // // //     <div className="flex items-center gap-4">
// // // // // //       <span className="av-outline font-mono text-5xl font-semibold leading-none sm:text-6xl">{n}</span>
// // // // // //       <span className="h-px w-12 bg-gradient-to-r from-emerald-400/70 to-transparent" />
// // // // // //       <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">{kicker}</span>
// // // // // //     </div>
// // // // // //     <div className="mt-7 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
// // // // // //       <h2 className="max-w-4xl text-[clamp(44px,6.6vw,92px)] font-semibold leading-[.9] tracking-[-.06em] text-white">{children}</h2>
// // // // // //       {sub && <p className="max-w-sm text-sm leading-7 text-zinc-400">{sub}</p>}
// // // // // //     </div>
// // // // // //   </Reveal>;
// // // // // // }

// // // // // // const Grad = ({ children }: { children: React.ReactNode }) => <span className="av-shine bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">{children}</span>;

// // // // // // /* ------------------------------------------------------------------ */
// // // // // // /* HERO                                                                */
// // // // // // /* ------------------------------------------------------------------ */

// // // // // // function RotatingWord() {
// // // // // //   const [i, setI] = useState(0);
// // // // // //   useEffect(() => { const t = setInterval(() => setI(x => (x + 1) % roles.length), 2200); return () => clearInterval(t); }, []);
// // // // // //   return <span className="relative inline-flex h-[1.4em] min-w-[7.5ch] items-center overflow-hidden align-bottom">
// // // // // //     <AnimatePresence mode="wait">
// // // // // //       <motion.span key={roles[i]} initial={{ y: "100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-100%", opacity: 0 }} transition={{ duration: 0.45, ease: EASE }} className="absolute left-0 font-semibold text-white">{roles[i]}</motion.span>
// // // // // //     </AnimatePresence>
// // // // // //   </span>;
// // // // // // }

// // // // // // function WordReveal({ text, delay = 0, grad = false }: { text: string; delay?: number; grad?: boolean }) {
// // // // // //   const reduce = useReducedMotion();
// // // // // //   return <>{text.split(" ").map((w, i) => <span key={`${w}-${i}`} className="inline-block overflow-hidden pb-[.16em] -mb-[.16em] align-bottom"><motion.span className="inline-block" initial={reduce ? false : { y: "115%", rotate: 5 }} animate={{ y: 0, rotate: 0 }} transition={{ duration: 1, delay: delay + i * 0.09, ease: EASE }}>{grad ? <Grad>{w}</Grad> : w}&nbsp;</motion.span></span>)}</>;
// // // // // // }

// // // // // // function Orbit() {
// // // // // //   const chips: [string, string, number][] = [["SEO", "01", 0], ["CONTENT", "02", 90], ["CREATIVE", "03", 180], ["EXECUTE", "04", 270]];
// // // // // //   return <div className="relative mx-auto aspect-square w-full max-w-[480px]">
// // // // // //     <div className="av-pulse absolute inset-[16%] rounded-full bg-emerald-600/35 blur-3xl" />
// // // // // //     <div className="av-pulse absolute inset-[30%] rounded-full bg-cyan-400/20 blur-3xl [animation-delay:-3s]" />
// // // // // //     <div className="av-spin absolute inset-[3%] rounded-full border border-white/10">
// // // // // //       {chips.map(([label, n, deg]) => <div key={label} className="absolute inset-0" style={{ transform: `rotate(${deg}deg)` }}>
// // // // // //         <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
// // // // // //           <div style={{ transform: `rotate(${-deg}deg)` }}><div className="av-spin-rev">
// // // // // //             <div className="whitespace-nowrap rounded-xl border border-white/15 bg-white/[.08] px-3 py-2 font-mono text-[10px] text-white shadow-[0_10px_40px_rgba(16,185,129,.25)] backdrop-blur-md"><span className="mr-2 text-emerald-300">{n}</span>{label}</div>
// // // // // //           </div></div>
// // // // // //         </div>
// // // // // //       </div>)}
// // // // // //     </div>
// // // // // //     <div className="av-spin-slow absolute inset-[20%] rounded-full border border-dashed border-emerald-300/25">
// // // // // //       <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,.9)]" />
// // // // // //       <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-teal-300 shadow-[0_0_14px_rgba(94,234,212,.9)]" />
// // // // // //     </div>
// // // // // //     <div className="absolute inset-[35%] grid place-items-center rounded-full border border-white/20 bg-[radial-gradient(circle_at_30%_25%,rgba(52,211,153,.55),rgba(24,16,48,.95)_62%)] text-center shadow-[0_0_80px_rgba(16,185,129,.45),inset_0_0_30px_rgba(255,255,255,.08)]">
// // // // // //       <div><p className="font-mono text-[7px] uppercase tracking-[.2em] text-emerald-200/80 sm:text-[8px]">Digital workflow</p><strong className="mt-2 block text-xl font-semibold leading-[.95] tracking-[-.05em] text-white sm:text-2xl">IDEA<br />TO<br /><Grad>IMPACT.</Grad></strong></div>
// // // // // //     </div>
// // // // // //   </div>;
// // // // // // }

// // // // // // function Hero() {
// // // // // //   const reduce = useReducedMotion();
// // // // // //   const { scrollY } = useScroll();
// // // // // //   const textY = useTransform(scrollY, [0, 700], [0, 70]);
// // // // // //   const orbY = useTransform(scrollY, [0, 700], [0, 130]);
// // // // // //   const fade = useTransform(scrollY, [0, 600], [1, 0.25]);
// // // // // //   const stats: [number, string, string][] = [[2, "Years hands-on", "+"], [projects.length, "Featured projects", ""], [experience.length, "Companies", ""], [totalSkills, "Skills & tools", ""]];
// // // // // //   return <section id="home" className="relative flex min-h-screen flex-col justify-center pb-16 pt-32 sm:pt-36">
// // // // // //     <div className="mx-auto grid w-[min(1240px,calc(100%-32px))] items-center gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-8">
// // // // // //       <motion.div style={{ y: reduce ? 0 : textY, opacity: reduce ? 1 : fade }}>
// // // // // //         <motion.div initial={reduce ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }} className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[.05] px-4 py-2 font-mono text-[10px] uppercase tracking-[.16em] text-zinc-300 backdrop-blur-md">
// // // // // //           <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" /></span>
// // // // // //           Available for projects
// // // // // //         </motion.div>
// // // // // //         <h1 className="mt-8 max-w-5xl text-[clamp(54px,8.4vw,122px)] font-semibold leading-[.86] tracking-[-.07em] text-white">
// // // // // //           <WordReveal text="I make digital work" delay={0.15} />
// // // // // //           <WordReveal text="worth noticing." delay={0.55} grad />
// // // // // //         </h1>
// // // // // //         <motion.p initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1, ease: EASE }} className="mt-8 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">Digital Marketing Executive working across websites, SEO, social media, content development, creative production and event communication.</motion.p>
// // // // // //         <motion.div initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.1, ease: EASE }} className="mt-6 flex items-center gap-3 text-lg text-zinc-500 sm:text-xl">Specialising in <RotatingWord /></motion.div>
// // // // // //         <motion.div initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.2, ease: EASE }} className="mt-9 flex flex-wrap items-center gap-3">
// // // // // //           <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} href="#work" className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-xs font-bold text-zinc-950 shadow-[0_0_50px_rgba(52,211,153,.35)] transition hover:bg-emerald-200">Explore real projects <ArrowRight size={14} className="transition group-hover:translate-x-1" /></motion.a>
// // // // // //           <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}><Link href="/work-samples" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.05] px-6 py-3.5 text-xs font-bold text-white backdrop-blur-md transition hover:border-white/40">Open work archive <ArrowRight size={14} /></Link></motion.div>
// // // // // //         </motion.div>
// // // // // //       </motion.div>
// // // // // //       <motion.div style={{ y: reduce ? 0 : orbY }} initial={reduce ? false : { opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.4, ease: EASE }}><Orbit /></motion.div>
// // // // // //     </div>
// // // // // //     <motion.div initial={reduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 1.4, ease: EASE }} className="mx-auto mt-16 w-[min(1240px,calc(100%-32px))]">
// // // // // //       <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl md:grid-cols-4">
// // // // // //         {stats.map(([n, label, suffix]) => <div key={label} className="bg-[#071612]/80 px-6 py-6"><div className="text-4xl font-semibold tracking-[-.05em] text-white sm:text-5xl"><CountUp to={n} suffix={suffix} /></div><p className="mt-2 font-mono text-[9px] uppercase tracking-[.16em] text-zinc-500">{label}</p></div>)}
// // // // // //       </div>
// // // // // //     </motion.div>
// // // // // //     <a href="#about" aria-label="Scroll to about" className="mx-auto mt-10 hidden items-center gap-2 font-mono text-[9px] uppercase tracking-[.18em] text-zinc-500 sm:flex">Scroll to explore <motion.span animate={reduce ? undefined : { y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}><ArrowDown size={13} /></motion.span></a>
// // // // // //   </section>;
// // // // // // }

// // // // // // /* ------------------------------------------------------------------ */
// // // // // // /* SECTIONS                                                            */
// // // // // // /* ------------------------------------------------------------------ */

// // // // // // function About() {
// // // // // //   const range = ["Websites", "SEO", "Social", "Content", "Creative", "Events", "Publishing", "Automation"];
// // // // // //   return <section id="about" className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // // // //     <SectionHead n="01" kicker="About me">I work where <Grad>marketing, content and execution</Grad> meet.</SectionHead>
// // // // // //     <div className="mt-14 grid gap-5 lg:grid-cols-[1.25fr_.75fr]">
// // // // // //       <Reveal><SpotCard className="h-full rounded-[28px] border border-white/10 bg-white/[.03] p-8 backdrop-blur-xl sm:p-10"><p className="text-xl leading-8 tracking-[-.02em] text-zinc-300 sm:text-2xl sm:leading-10">I enjoy taking a raw idea, messy information or business requirement and turning it into something structured, visual, useful and ready to publish — whether that is a website, campaign, social post, blog, conference asset or digital workflow.</p></SpotCard></Reveal>
// // // // // //       <Reveal delay={0.1}><SpotCard className="h-full rounded-[28px] border border-white/10 bg-white/[.03] p-6 backdrop-blur-xl"><p className="font-mono text-[9px] uppercase tracking-[.16em] text-zinc-500">My working range</p>
// // // // // //         <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }} className="mt-6 grid grid-cols-2 gap-2">{range.map((x, i) => <motion.span key={x} variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } } }} whileHover={{ y: -2 }} className="rounded-xl border border-white/10 bg-white/[.04] px-3 py-3 text-[10px] font-bold text-zinc-300 transition-colors hover:border-emerald-400/50 hover:text-white"><span className="mr-1.5 text-emerald-400">0{i + 1}</span>{x}</motion.span>)}</motion.div>
// // // // // //       </SpotCard></Reveal>
// // // // // //     </div>
// // // // // //   </div></section>;
// // // // // // }

// // // // // // function Experience() {
// // // // // //   const ref = useRef<HTMLDivElement>(null);
// // // // // //   const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
// // // // // //   const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 26 });
// // // // // //   return <section id="experience" className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // // // //     <SectionHead n="02" kicker="Career timeline" sub="Six roles across digital marketing, content, software and cloud engineering, CAD design and service operations.">Where I’ve worked. <Grad>What I’ve done.</Grad></SectionHead>
// // // // // //     <div ref={ref} className="relative mt-16 space-y-8">
// // // // // //       <div className="absolute bottom-0 left-[7px] top-0 w-px bg-white/10 md:left-[187px]" />
// // // // // //       <motion.div style={{ scaleY }} className="absolute bottom-0 left-[7px] top-0 w-px origin-top bg-gradient-to-b from-emerald-400 via-teal-300 to-cyan-300 shadow-[0_0_12px_rgba(52,211,153,.8)] md:left-[187px]" />
// // // // // //       {experience.map((job, i) => <Reveal key={job.company} delay={0.05}>
// // // // // //         <div className="relative grid gap-5 pl-9 md:grid-cols-[180px_1fr] md:gap-14 md:pl-0">
// // // // // //           <span className={`absolute left-0 top-8 h-[15px] w-[15px] rounded-full border-2 bg-[#04100d] md:left-[180px] ${job.current ? "border-cyan-300 shadow-[0_0_16px_rgba(103,232,249,.9)]" : "border-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.6)]"}`} />
// // // // // //           <div className="md:pt-7 md:text-right"><p className="font-mono text-[10px] uppercase tracking-[.14em] text-emerald-300">0{i + 1} / Experience</p><p className="mt-2 font-mono text-[10px] uppercase leading-5 tracking-[.08em] text-zinc-500">{job.dates}<br />{job.location}</p>{"type" in job && job.type && <span className="mt-3 inline-block rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 font-mono text-[8px] uppercase tracking-[.12em] text-amber-200">{job.type}</span>}{job.current && <span className="mt-3 inline-block rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 font-mono text-[8px] uppercase tracking-[.12em] text-cyan-200">Present</span>}</div>
// // // // // //           <Tilt><SpotCard className="rounded-[26px] border border-white/10 bg-white/[.035] p-6 backdrop-blur-xl sm:p-8">
// // // // // //             <div className="flex items-start gap-4"><div className="grid h-14 w-24 shrink-0 place-items-center overflow-hidden rounded-2xl border border-white/10 bg-white p-1.5 sm:w-28"><Image src={job.logo} alt={`${job.company} logo`} width={160} height={80} className="h-full w-full object-contain" /></div><div><h3 className="text-xl font-semibold tracking-[-.03em] text-white sm:text-2xl">{job.role}</h3><a href={job.href ?? "#"} target={job.href ? "_blank" : undefined} rel={job.href ? "noreferrer" : undefined} className="mt-1 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300 transition hover:text-white">{job.company}{job.href && <ExternalLink size={11} />}</a></div></div>
// // // // // //             <p className="mt-6 text-sm leading-7 text-zinc-400">{job.description}</p>
// // // // // //             <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-5">{job.points.map(p => <li key={p} className="flex gap-3 text-xs leading-6 text-zinc-300"><span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-emerald-400" />{p}</li>)}</ul>
// // // // // //             <div className="mt-6 flex flex-wrap gap-2">{job.tags.map(t => <span key={t} className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[9px] font-semibold text-emerald-200">{t}</span>)}</div>
// // // // // //           </SpotCard></Tilt>
// // // // // //         </div>
// // // // // //       </Reveal>)}
// // // // // //     </div>
// // // // // //   </div></section>;
// // // // // // }

// // // // // // function Work() {
// // // // // //   return <section id="work" className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // // // //     <SectionHead n="03" kicker="Selected work" sub="A selection of websites and digital experiences across aquaculture, conferences, technology and consumer brands.">Real projects. <Grad>Clear outcomes.</Grad></SectionHead>
// // // // // //     <div className="mt-6"><Link href="/work-samples" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.05] px-5 py-2.5 text-xs font-bold text-white backdrop-blur-md transition hover:border-emerald-400/60">Explore all work <ArrowRight size={14} /></Link></div>
// // // // // //     <div className="mt-14 space-y-8">
// // // // // //       {projects.map((project, i) => <Reveal key={project.id}>
// // // // // //         <SpotCard className="group relative rounded-[32px] border border-white/10 bg-white/[.03] p-4 backdrop-blur-xl sm:p-6">
// // // // // //           <div className={`pointer-events-none absolute -z-10 h-72 w-72 rounded-full blur-[100px] ${project.glow} ${i % 2 ? "-left-10 top-10" : "-right-10 top-10"}`} />
// // // // // //           <div className={`grid items-center gap-8 ${i % 2 ? "lg:grid-cols-[.9fr_1.1fr]" : "lg:grid-cols-[1.1fr_.9fr]"}`}>
// // // // // //             <div className={i % 2 ? "lg:order-2" : ""}>
// // // // // //               <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-[0_30px_80px_rgba(0,0,0,.5)]">
// // // // // //                 <div className="flex items-center gap-2 border-b border-white/10 bg-zinc-900 px-4 py-3"><span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" /><span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" /><span className="ml-3 truncate rounded-md bg-white/5 px-3 py-1 font-mono text-[9px] text-zinc-500">{project.link ? project.link.replace("https://", "") : project.company}</span></div>
// // // // // //                 <div className="flex h-[240px] items-center justify-center overflow-hidden bg-[#f4f4f5] sm:h-[330px]"><Image src={project.image} alt={`${project.company} website preview`} width={1100} height={760} className="h-full w-full object-contain object-center transition duration-700 ease-out group-hover:scale-[1.04]" /></div>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //             <div className="px-2 pb-2 lg:px-6">
// // // // // //               <div className="flex items-center gap-3"><span className="av-outline font-mono text-4xl font-semibold">{project.id}</span><span className="rounded-full border border-white/10 bg-white/[.05] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[.12em] text-zinc-400">{project.label}</span></div>
// // // // // //               <p className="mt-6 font-mono text-[10px] uppercase tracking-[.16em] text-emerald-300">{project.company}</p>
// // // // // //               <h3 className="mt-3 text-3xl font-semibold leading-[1.05] tracking-[-.045em] text-white sm:text-4xl">{project.title}</h3>
// // // // // //               <p className="mt-4 text-sm leading-7 text-zinc-400">{project.description}</p>
// // // // // //               <div className="mt-7 flex flex-wrap gap-2.5"><Link href={`/work/${project.slug}`} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold text-zinc-950 transition hover:bg-emerald-200">View project <ArrowRight size={13} /></Link>{project.link && <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-xs font-bold text-white transition hover:border-white/50">Live website <ExternalLink size={13} /></a>}</div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </SpotCard>
// // // // // //       </Reveal>)}
// // // // // //     </div>
// // // // // //   </div></section>;
// // // // // // }

// // // // // // function ArchivePreview() {
// // // // // //   const rowOne = archive.slice(0, 5);
// // // // // //   const rowTwo = archive.slice(5);
// // // // // //   const tile = ([src, title, company, format]: string[], key: string) => <Link href="/work-samples" key={key} className="group mr-4 w-[220px] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[.04] backdrop-blur-md transition hover:-translate-y-1 hover:border-emerald-400/50 sm:w-[260px]"><div className="flex h-[150px] items-center justify-center overflow-hidden bg-[#f2f1ef] p-3 sm:h-[180px] sm:p-4"><Image src={src} alt={title} width={520} height={420} className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.05]" /></div><div className="px-4 py-3"><p className="truncate font-mono text-[8px] uppercase tracking-[.1em] text-zinc-500">{company} · {format}</p><h3 className="mt-1.5 truncate text-xs font-bold text-zinc-100">{title}</h3></div></Link>;
// // // // // //   const row = (items: string[][], prefix: string) => [...items, ...items].map((it, i) => tile(it, `${prefix}-${i}`));
// // // // // //   return <section className="relative overflow-hidden py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // // // //     <SectionHead n="04" kicker="Creative archive" sub="Banners, carousel templates, event graphics and publications — moving gently so you can browse the range at a glance.">A closer look at <Grad>the creative work.</Grad></SectionHead>
// // // // // //     <div className="mt-6"><Link href="/work-samples" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold text-zinc-950 transition hover:bg-emerald-200">View all samples <ArrowRight size={14} /></Link></div>
// // // // // //   </div>
// // // // // //     <div className="av-pausable relative mt-12 space-y-4">
// // // // // //       <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#04100d] to-transparent sm:w-40" />
// // // // // //       <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#04100d] to-transparent sm:w-40" />
// // // // // //       <div className="av-marq">{row(rowOne, "a")}</div>
// // // // // //       <div className="av-marq av-marq-rev">{row(rowTwo, "b")}</div>
// // // // // //     </div>
// // // // // //     <p className="mt-7 text-center text-[10px] text-zinc-500">Hover to pause · Select any sample to open the complete archive</p>
// // // // // //   </section>;
// // // // // // }

// // // // // // function Skills() {
// // // // // //   return <section id="skills" className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // // // //     <SectionHead n="05" kicker="Skills & tools" sub="A straightforward overview of the marketing disciplines, measurement tools, creative apps and publishing platforms I work with.">The skills behind <Grad>the work.</Grad></SectionHead>
// // // // // //     <div className="mt-14 grid gap-5 lg:grid-cols-3">
// // // // // //       {skillGroups.map((group, gi) => <Reveal key={group.title} delay={gi * 0.08}><SpotCard className="h-full rounded-[28px] border border-white/10 bg-white/[.03] p-6 backdrop-blur-xl sm:p-7">
// // // // // //         <div className="flex items-end justify-between border-b border-white/10 pb-4"><h3 className="text-lg font-semibold tracking-[-.03em] text-white">{group.title}</h3><span className="font-mono text-[9px] uppercase tracking-[.14em] text-zinc-500">{String(group.items.length).padStart(2, "0")} items</span></div>
// // // // // //         <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03 } } }} className="mt-5 flex flex-wrap gap-2">{group.items.map(item => <motion.span key={item} variants={{ hidden: { opacity: 0, y: 12, scale: 0.94 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: EASE } } }} whileHover={{ y: -2 }} className="cursor-default rounded-full border border-white/10 bg-white/[.04] px-3.5 py-2 text-xs font-medium text-zinc-300 transition-colors hover:border-emerald-400/60 hover:bg-emerald-400/10 hover:text-white">{item}</motion.span>)}</motion.div>
// // // // // //       </SpotCard></Reveal>)}
// // // // // //     </div>
// // // // // //   </div></section>;
// // // // // // }

// // // // // // function Process() {
// // // // // //   const steps = [["01", "Understand", "Goal · audience · message"], ["02", "Structure", "Content · information · flow"], ["03", "Create", "Design · video · visual system"], ["04", "Execute", "Publish · schedule · maintain"]];
// // // // // //   return <section className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // // // //     <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-emerald-600/30 via-[#0a1f1b] to-cyan-500/10 p-8 backdrop-blur-xl sm:p-14">
// // // // // //       <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_75%)]" />
// // // // // //       <div className="relative"><SectionHead n="06" kicker="How I work">From brief to <Grad>publish-ready.</Grad></SectionHead>
// // // // // //         <div className="relative mt-14 grid gap-3 md:grid-cols-4">
// // // // // //           <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 1.5, ease: EASE }} className="pointer-events-none absolute left-[10%] right-[10%] top-[46px] hidden h-px origin-left bg-gradient-to-r from-emerald-300/60 via-teal-300/60 to-cyan-300/60 md:block" />
// // // // // //           {steps.map(([n, title, desc], i) => <Reveal key={n} delay={i * 0.1}><motion.article whileHover={{ y: -6 }} transition={{ duration: 0.3, ease: EASE }} className="h-full rounded-[24px] border border-white/10 bg-white/[.05] p-6 backdrop-blur-xl transition-colors hover:bg-white/[.09]"><span className="grid h-10 w-10 place-items-center rounded-full border border-emerald-300/40 bg-[#0a1f1b] font-mono text-[10px] text-emerald-200 shadow-[0_0_20px_rgba(52,211,153,.4)]">{n}</span><h3 className="mt-12 text-2xl font-semibold tracking-[-.04em] text-white">{title}</h3><p className="mt-2 text-xs leading-5 text-zinc-400">{desc}</p></motion.article></Reveal>)}
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   </div></section>;
// // // // // // }

// // // // // // function Insights() {
// // // // // //   return <section id="insights" className="relative py-28 sm:py-36"><div className="mx-auto grid w-[min(1240px,calc(100%-32px))] items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
// // // // // //     <Reveal><div className="flex items-center gap-4"><span className="av-outline font-mono text-5xl font-semibold leading-none sm:text-6xl">07</span><span className="h-px w-12 bg-gradient-to-r from-emerald-400/70 to-transparent" /><span className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">Insights · publishing</span></div>
// // // // // //       <h2 className="mt-7 text-[clamp(42px,6vw,88px)] font-semibold leading-[.92] tracking-[-.06em] text-white">Content is not decoration. <Grad>It is part of the product.</Grad></h2>
// // // // // //       <p className="mt-7 max-w-xl text-sm leading-7 text-zinc-400">The portfolio can keep expanding with published articles, SEO work, case studies and content projects as more source material is added.</p></Reveal>
// // // // // //     <Reveal delay={0.1}><Tilt><SpotCard className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[.04] p-3 shadow-[0_40px_100px_rgba(0,0,0,.5)] backdrop-blur-xl"><Image src="/work/innovare/blog.png" alt="Innovare blog publishing preview" width={900} height={650} className="h-[360px] w-full rounded-[24px] object-cover object-top" /><div className="p-4"><p className="font-mono text-[8px] uppercase tracking-[.14em] text-zinc-500">SEO · Content · Publishing</p><h3 className="mt-2 text-lg font-semibold text-white">Technical content presented as a usable digital experience.</h3></div></SpotCard></Tilt></Reveal>
// // // // // //   </div></section>;
// // // // // // }

// // // // // // function Testimonials() {
// // // // // //   return <section id="testimonials" className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // // // //     <SectionHead n="08" kicker="Testimonials">Good work should be <Grad>remembered.</Grad></SectionHead>
// // // // // //     <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
// // // // // //       {testimonials.map(([name, role, quote], i) => <Reveal key={name} delay={(i % 3) * 0.1} className={i < 3 ? "lg:col-span-2" : "lg:col-span-3"}><SpotCard className="h-full rounded-[28px] border border-white/10 bg-white/[.035] p-7 backdrop-blur-xl sm:p-8">
// // // // // //         <Quote className="text-emerald-400" size={28} />
// // // // // //         <div className="mt-6 text-sm tracking-[.2em] text-amber-300">★★★★★</div>
// // // // // //         <p className="mt-5 text-[15px] leading-7 tracking-[-.01em] text-zinc-200 sm:text-base sm:leading-8">“{quote}”</p>
// // // // // //         <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-emerald-500 to-cyan-400 text-sm font-bold text-white">{name[0]}</span><div><b className="block text-sm text-white">{name}</b><span className="mt-0.5 block text-[10px] text-zinc-500">{role}</span></div></div>
// // // // // //       </SpotCard></Reveal>)}
// // // // // //     </div>
// // // // // //   </div></section>;
// // // // // // }

// // // // // // function Contact() {
// // // // // //   return <section id="contact" className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // // // //     <Reveal><div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[.03] p-8 backdrop-blur-xl sm:p-14">
// // // // // //       <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-emerald-600/30 blur-[110px]" />
// // // // // //       <div className="pointer-events-none absolute -bottom-24 left-10 h-80 w-80 rounded-full bg-cyan-500/15 blur-[110px]" />
// // // // // //       <div className="relative flex items-center gap-4"><span className="av-outline font-mono text-5xl font-semibold leading-none sm:text-6xl">09</span><span className="h-px w-12 bg-gradient-to-r from-emerald-400/70 to-transparent" /><span className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">Contact</span></div>
// // // // // //       <h2 className="relative mt-8 max-w-5xl text-[clamp(46px,7.2vw,108px)] font-semibold leading-[.88] tracking-[-.07em] text-white">Let’s build something <Grad>worth showing.</Grad></h2>
// // // // // //       <div className="relative mt-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
// // // // // //         <p className="max-w-md text-sm leading-7 text-zinc-400">Available for digital marketing, website, content, social media and creative projects.</p>
// // // // // //         <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
// // // // // //           <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} href="mailto:hello@adityavarma.dev" className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-xs font-bold text-zinc-950 shadow-[0_0_50px_rgba(52,211,153,.35)] transition-colors hover:bg-emerald-200"><Mail size={14} /> hello@adityavarma.dev <ArrowRight size={14} /></motion.a>
// // // // // //           <div className="flex gap-2"><motion.a whileHover={{ y: -3 }} href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[.05] text-white transition-colors hover:border-emerald-400/70"><Linkedin size={15} /></motion.a><motion.a whileHover={{ y: -3 }} href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[.05] text-white transition-colors hover:border-emerald-400/70"><Instagram size={15} /></motion.a></div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div></Reveal>
// // // // // //     <footer className="mt-10 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 font-mono text-[9px] uppercase tracking-[.14em] text-zinc-500 sm:flex-row"><span>© 2026 Aditya Varma</span><span>Digital Marketing · Web · Content · Creative</span></footer>
// // // // // //   </div></section>;
// // // // // // }

// // // // // // /* ------------------------------------------------------------------ */
// // // // // // /* PAGE                                                                */
// // // // // // /* ------------------------------------------------------------------ */

// // // // // // export default function Portfolio() {
// // // // // //   const [menu, setMenu] = useState(false);
// // // // // //   const [active, setActive] = useState("home");
// // // // // //   const [scrolled, setScrolled] = useState(false);
// // // // // //   const [showTop, setShowTop] = useState(false);

// // // // // //   useEffect(() => {
// // // // // //     const ids = ["home", ...navLinks.map(([, id]) => id)];
// // // // // //     const els = ids.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];
// // // // // //     const io = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }); }, { rootMargin: "-45% 0px -50% 0px" });
// // // // // //     els.forEach(el => io.observe(el));
// // // // // //     const onScroll = () => { setScrolled(window.scrollY > 24); setShowTop(window.scrollY > 700); };
// // // // // //     onScroll();
// // // // // //     window.addEventListener("scroll", onScroll, { passive: true });
// // // // // //     return () => { io.disconnect(); window.removeEventListener("scroll", onScroll); };
// // // // // //   }, []);

// // // // // //   return <main className="relative min-h-screen overflow-x-clip bg-[#04100d] text-zinc-100 selection:bg-emerald-500/40">
// // // // // //     <style>{CSS}</style>
// // // // // //     <Backdrop />
// // // // // //     <ParticleField />
// // // // // //     <CursorGlow />
// // // // // //     <div aria-hidden className="av-grain pointer-events-none fixed inset-0 z-[3]" />
// // // // // //     <ScrollProgress />

// // // // // //     <motion.header initial={{ y: -70, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, delay: 0.1, ease: EASE }} className={`fixed left-1/2 top-4 z-[60] flex w-[min(1180px,calc(100%-20px))] -translate-x-1/2 items-center justify-between rounded-2xl border px-3 py-2.5 backdrop-blur-2xl transition-all duration-500 ${scrolled ? "border-white/15 bg-[#09171a]/80 shadow-[0_18px_60px_rgba(0,0,0,.5)]" : "border-white/10 bg-white/[.04]"}`}>
// // // // // //       <a href="#home" className="flex items-center gap-2.5"><span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-400 text-[10px] font-bold text-white shadow-[0_0_20px_rgba(16,185,129,.5)]">AV</span><span><b className="block text-[11px] leading-none text-white">Aditya Varma</b><small className="mt-1 block text-[7px] uppercase tracking-[.12em] text-zinc-500">Digital Marketing Executive</small></span></a>
// // // // // //       <nav className="hidden items-center gap-1 lg:flex">{navLinks.map(([label, id]) => <a key={id} href={`#${id}`} className={`relative rounded-full px-3 py-1.5 text-[10px] font-semibold transition-colors ${active === id ? "text-white" : "text-zinc-400 hover:text-white"}`}>{active === id && <motion.span layoutId="nav-pill" transition={{ type: "spring", stiffness: 380, damping: 32 }} className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/10" />}{label}</a>)}<Link href="/work-samples" className="rounded-full px-3 py-1.5 text-[10px] font-semibold text-zinc-400 transition hover:text-white">Work Archive</Link></nav>
// // // // // //       <a href="#contact" className="hidden items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[10px] font-bold text-zinc-950 transition hover:bg-emerald-200 lg:inline-flex">Let’s talk <ArrowRight size={12} /></a>
// // // // // //       <button onClick={() => setMenu(!menu)} className="grid h-9 w-9 place-items-center rounded-xl border border-white/15 bg-white/5 text-white lg:hidden" aria-label="Toggle menu" aria-expanded={menu}>{menu ? <X size={16} /> : <Menu size={16} />}</button>
// // // // // //       <AnimatePresence>{menu && <motion.div initial={{ opacity: 0, y: -8, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8, scale: 0.97 }} transition={{ duration: 0.25, ease: EASE }} className="absolute right-0 top-14 w-64 origin-top-right rounded-2xl border border-white/15 bg-[#09171a]/95 p-2 shadow-2xl backdrop-blur-2xl lg:hidden">{navLinks.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenu(false)} className={`block rounded-xl px-3 py-3 text-xs font-semibold hover:bg-white/5 ${active === id ? "text-emerald-300" : "text-zinc-300"}`}>{label}</a>)}<Link href="/work-samples" onClick={() => setMenu(false)} className="block rounded-xl px-3 py-3 text-xs font-semibold text-zinc-300 hover:bg-white/5">Work Archive</Link></motion.div>}</AnimatePresence>
// // // // // //     </motion.header>

// // // // // //     <div className="relative z-10">
// // // // // //       <Hero />
// // // // // //       <About />
// // // // // //       <Experience />
// // // // // //       <Work />
// // // // // //       <ArchivePreview />
// // // // // //       <Skills />
// // // // // //       <Process />
// // // // // //       <Insights />
// // // // // //       <Testimonials />
// // // // // //       <Contact />
// // // // // //     </div>

// // // // // //     <AnimatePresence>{showTop && <motion.a href="#home" aria-label="Back to top" initial={{ opacity: 0, y: 16, scale: 0.8 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.8 }} whileHover={{ y: -3 }} className="fixed bottom-6 right-6 z-[60] grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-[#09171a]/80 text-white shadow-[0_10px_40px_rgba(0,0,0,.5)] backdrop-blur-xl transition-colors hover:border-emerald-400/70"><ArrowUp size={16} /></motion.a>}</AnimatePresence>
// // // // // //   </main>;
// // // // // // }
// // // // // "use client";

// // // // // import { ArrowDown, ArrowRight, ArrowUp, ExternalLink, Instagram, Linkedin, Mail, Menu, Quote, X } from "lucide-react";
// // // // // import { AnimatePresence, animate, motion, useInView, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
// // // // // import Link from "next/link";
// // // // // import Image from "next/image";
// // // // // import { useEffect, useRef, useState } from "react";

// // // // // const EASE = [0.16, 1, 0.3, 1] as const;

// // // // // /* ------------------------------------------------------------------ */
// // // // // /* DATA (unchanged content)                                            */
// // // // // /* ------------------------------------------------------------------ */

// // // // // const projects = [
// // // // //   { id: "01", company: "Innovare Biopharma LLP", label: "WEBSITE · SEO · CONTENT", title: "Building a digital home for aquaculture health.", description: "Website development, product presentation, blog publishing, SEO-focused content, social support and digital marketing execution.", image: "/work/websites/innovare-home.png", slug: "innovare-biopharma", link: "https://innovarebiopharma.com/", glow: "bg-emerald-500/25" },
// // // // //   { id: "02", company: "C-STAR Global", label: "EVENTS · CONTENT · CREATIVE", title: "Turning conference information into a complete digital experience.", description: "Conference communication, speaker data, landing pages, banners, videos, social publishing and conference publications.", image: "/work/websites/cstar-home.png", slug: "c-star-global", glow: "bg-indigo-500/25" },
// // // // //   { id: "03", company: "Ecorfy Technologies Pvt. Ltd.", label: "WEB · SOCIAL · TECHNOLOGY", title: "Making technology easier to understand and easier to publish.", description: "Website work and technology-focused digital communication across software, AI, social media and marketing content.", image: "/work/ecorfy/website-cover.png", slug: "ecorfy-technologies", link: "https://www.ecorfy.com/", glow: "bg-cyan-500/20" },
// // // // //   { id: "04", company: "Shreshta Pickles", label: "FREELANCE · WEBSITE", title: "A clean digital storefront for a traditional food brand.", description: "Freelance website development with a product-led layout, clear navigation and a focused brand presentation.", image: "/work/websites/shreshta-home.png", slug: "shreshta-pickles", link: "https://shreshtapickles.com/", glow: "bg-orange-500/20" },
// // // // // ];

// // // // // const experience = [
// // // // //   { company: "Innovare Biopharma LLP", role: "Digital Marketing Executive", dates: "April 2026 — Present", location: "Hyderabad, India", logo: "/companies/innovare-logo.png", current: true, description: "Digital marketing, website management, SEO-focused content, social media support and creative production for an aquaculture-focused brand.", points: ["Managed website content, landing pages and digital publishing", "Supported SEO, blogs, social media and campaign creatives", "Created and coordinated marketing assets across digital channels"], tags: ["Digital Marketing", "SEO", "Content", "Social Media"], href: "https://innovarebiopharma.com/" },
// // // // //   { company: "C-STAR Global Inc.", role: "Content Developer · Digital Marketing", dates: "April 2023 — February 2026", location: "Hyderabad, India", logo: "/companies/cstar-logo.png", description: "Worked across conference communication, website content, speaker data, creative production, videos, conference publications and social media publishing.", points: ["Managed conference and expo content from raw data to publishable assets", "Created banners, videos, posters, conference books and social content", "Supported websites, virtual conferences and scheduled social publishing"], tags: ["Content Development", "Events", "Social Media", "Creative"] },
// // // // //   { company: "Ecorfy Technologies Pvt. Ltd.", role: "Software Engineer", dates: "Earlier experience", location: "Hyderabad, India", logo: "/companies/ecorfy-logo.png", description: "Earlier technology experience supporting web development and digital communication projects in a technology-focused environment.", points: ["Worked on website and software-oriented digital projects", "Supported technology communication and online presentation", "Built technical experience that now strengthens marketing execution"], tags: ["Web", "Software", "Digital", "Technology"], href: "https://www.ecorfy.com/" },
// // // // //   { company: "Codexbox", role: "Software Engineer", dates: "October 2022 — May 2023", location: "Remote", logo: "/companies/codexbox-logo.png", description: "Designed, deployed, and maintained robust cloud infrastructure across AWS, Microsoft Azure, and GCP. Automated cloud provisioning via Infrastructure as Code with Terraform, managed Docker/Kubernetes container systems, and implemented CI/CD pipelines.", points: ["Designed and maintained cloud infrastructure across AWS, Azure, and GCP", "Automated provisioning using Infrastructure as Code (IaC) with Terraform", "Managed Docker/Kubernetes container systems and CI/CD pipelines"], tags: ["AWS", "Azure", "GCP", "Terraform"] },
// // // // //   { company: "Tech Connect Services Pvt. Ltd.", role: "Computer Aided Design Draftsman", dates: "December 2021 — September 2022", location: "Hyderabad, India", logo: "/companies/techconnect-logo.png", description: "Delivered high-precision 2D/3D CAD layouts and schematic technical drawings for Audio-Visual infrastructure on large commercial and government sites.", points: ["Delivered high-precision 2D/3D CAD layouts for AV infrastructure projects", "Produced schematic technical drawings for large commercial and government sites"], tags: ["AutoCAD", "2D/3D Design", "AV Systems"] },
// // // // //   { company: "India Yamaha Motor Pvt. Ltd.", role: "Assistant Manager", type: "Part-time", dates: "May 2020 — November 2021", location: "Hyderabad, India", logo: "/companies/yamaha-logo.png", description: "Managed day-to-day service center operations, supervising technicians to maximize workflow productivity, handling customer concerns and inventory coordination.", points: ["Managed day-to-day service center operations and technician workflows", "Supervised teams to maximize productivity and turnaround time"], tags: ["Operations Management", "Customer Service", "Team Leadership"] },
// // // // // ];

// // // // // const skillGroups = [
// // // // //   { title: "Digital Marketing", items: ["SEO", "On-page SEO", "Technical SEO", "Off-page SEO", "Content Development", "Content Marketing", "Social Media Marketing", "Google Ads", "Meta Ads", "Performance Marketing", "Lead Generation", "Email Marketing", "Keyword Research"] },
// // // // //   { title: "Analytics & Automation", items: ["Google Analytics 4 (GA4)", "Google Tag Manager (GTM)", "Google Search Console", "n8n Automation", "AI Tools"] },
// // // // //   { title: "Creative & Publishing Tools", items: ["Canva", "Renderforest", "CapCut", "Filmora", "Publito", "Publer", "Swipe Pages", "WordPress", "Hostinger", "Open Mercato"] },
// // // // // ];

// // // // // const archive = [
// // // // //   ["/work/innovare/samples/hygiene.png", "Hygiene in Shrimp Farms", "Innovare", "Educational social creative"],
// // // // //   ["/work/ecorfy/samples/top-generative-ai.png", "Generative AI Development", "Ecorfy", "Social banner"],
// // // // //   ["/work/uploads/AP_Defence_Carousel.jpg", "AP Defence & Aerospace", "Carousel", "Carousel template"],
// // // // //   ["/work/uploads/India_infrastructure.jpg", "India AI Infrastructure Race", "Carousel", "Carousel template"],
// // // // //   ["/work/innovare/samples/nutrition.png", "Nutrition for Stronger Shrimp", "Innovare", "Educational social creative"],
// // // // //   ["/work/ecorfy/samples/transform-ideas.png", "Transform Ideas", "Ecorfy", "Generative AI social"],
// // // // //   ["/work/cstar/women-forum-2024.jpg", "Global Women Forum", "C-STAR", "Event banner"],
// // // // //   ["/work/cstar/global-technology-forum-2024.jpg", "Global Technology Forum", "C-STAR", "Event poster"],
// // // // //   ["/work/uploads/Book_Updated_3_.jpg", "World Women & Health Forum", "C-STAR", "Conference publication"],
// // // // //   ["/work/ecorfy/samples/software-development.png", "Software Development", "Ecorfy", "Social banner"],
// // // // // ];

// // // // // const testimonials = [
// // // // //   ["Ravindra Raju", "Founder & Owner · Shrestha Pickles", "Working with Aditya has been a great experience. He efficiently manages our website, handles updates whenever needed, and supports our business operations and maintaining accurate records. His professionalism and dedication make him a dependable partner for our business."],
// // // // //   ["Ujeetha Yasaswi (Branch Manager)", "Manager · Yamaha Motors", "During his tenure as Assistant Manager, Aditya demonstrated strong leadership, organizational, and customer service skills. He efficiently managed billing and invoice processing, coordinated daily operations, handled customer service concerns, and ensured smooth communication between customers and service teams. His professionalism, problem-solving abilities, and commitment to delivering excellent customer experiences made him a valuable asset to our organization."],
// // // // //   ["Sitarama Raju", "CEO · Innovare Labs", "Aditya played an important role in supporting our digital marketing and promotional activities. His contributions to website development, content management, and conference promotions helped strengthen our brand presence within the aquaculture industry. He consistently demonstrated professionalism, creativity, and a strong commitment to delivering quality work."],
// // // // //   ["Varma Bhupathiraju", "CEO · C-STAR Global Inc", "Aditya was an integral part of our marketing and digital presence. He managed our website, supported design updates, created marketing content, and played a key role in promoting our international conferences. His ability to combine creativity, technical skills, and marketing expertise helped strengthen our brand and effectively engage our target audience."],
// // // // //   ["Swathi Gurijala", "HR Manager · Ecorfy Technologies Pvt Ltd", "Aditya successfully developed and maintained our company website, ensuring it remained professional, user-friendly, and up to date. He consistently delivered high-quality work, met project deadlines, and demonstrated a strong commitment to supporting our business goals. His professionalism, problem-solving abilities, and attention to detail made him a valuable member of our team."],
// // // // // ];

// // // // // const roles = ["Websites", "SEO", "Content", "Creative", "Events"];
// // // // // const navLinks = [["About", "about"], ["Experience", "experience"], ["Work", "work"], ["Skills", "skills"], ["Testimonials", "testimonials"], ["Contact", "contact"]];
// // // // // const totalSkills = skillGroups.reduce((a, g) => a + g.items.length, 0);

// // // // // /* ------------------------------------------------------------------ */
// // // // // /* GLOBAL CSS (self-contained — no globals.css dependency)             */
// // // // // /* ------------------------------------------------------------------ */

// // // // // const CSS = `
// // // // // .av-blob{position:fixed;border-radius:9999px;filter:blur(110px);will-change:transform;pointer-events:none}
// // // // // @keyframes av-drift-a{0%,100%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(14vw,9vh,0) scale(1.25)}}
// // // // // @keyframes av-drift-b{0%,100%{transform:translate3d(0,0,0) scale(1.1)}50%{transform:translate3d(-12vw,-8vh,0) scale(.9)}}
// // // // // @keyframes av-drift-c{0%,100%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(-8vw,12vh,0) scale(1.2)}}
// // // // // .av-a{animation:av-drift-a 26s ease-in-out infinite}
// // // // // .av-b{animation:av-drift-b 32s ease-in-out infinite}
// // // // // .av-c{animation:av-drift-c 38s ease-in-out infinite}
// // // // // .av-grain{background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");opacity:.07;mix-blend-mode:overlay}
// // // // // @keyframes av-spin{to{transform:rotate(360deg)}}
// // // // // .av-spin{animation:av-spin 48s linear infinite}
// // // // // .av-spin-rev{animation:av-spin 48s linear infinite reverse}
// // // // // .av-spin-slow{animation:av-spin 90s linear infinite reverse}
// // // // // @keyframes av-pulse{0%,100%{opacity:.55;transform:scale(1)}50%{opacity:.95;transform:scale(1.08)}}
// // // // // .av-pulse{animation:av-pulse 6s ease-in-out infinite}
// // // // // @keyframes av-shine{0%{background-position:0% 50%}100%{background-position:200% 50%}}
// // // // // .av-shine{background-size:200% 100%;animation:av-shine 7s linear infinite}
// // // // // @keyframes av-marq{to{transform:translateX(-50%)}}
// // // // // .av-marq{display:flex;width:max-content;animation:av-marq 48s linear infinite}
// // // // // .av-marq-rev{animation-direction:reverse;animation-duration:56s}
// // // // // .av-pausable:hover .av-marq{animation-play-state:paused}
// // // // // .av-spot{position:relative}
// // // // // .av-spot::before{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;opacity:0;transition:opacity .4s;background:radial-gradient(420px circle at var(--mx,50%) var(--my,50%),rgba(16,185,129,.16),transparent 45%)}
// // // // // .av-spot::after{content:"";position:absolute;inset:0;border-radius:inherit;padding:1px;pointer-events:none;opacity:0;transition:opacity .4s;background:radial-gradient(320px circle at var(--mx,50%) var(--my,50%),rgba(110,231,183,.75),transparent 45%);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#000 0 0) content-box exclude,linear-gradient(#000 0 0)}
// // // // // .av-spot:hover::before,.av-spot:hover::after{opacity:1}
// // // // // .av-outline{-webkit-text-stroke:1px rgba(255,255,255,.22);color:transparent}
// // // // // html{scroll-behavior:smooth}
// // // // // @media (prefers-reduced-motion:reduce){.av-a,.av-b,.av-c,.av-spin,.av-spin-rev,.av-spin-slow,.av-pulse,.av-shine,.av-marq{animation:none!important}html{scroll-behavior:auto}}
// // // // // `;

// // // // // /* ------------------------------------------------------------------ */
// // // // // /* BACKGROUND                                                          */
// // // // // /* ------------------------------------------------------------------ */

// // // // // function ParticleField() {
// // // // //   const ref = useRef<HTMLCanvasElement>(null);
// // // // //   useEffect(() => {
// // // // //     const canvas = ref.current;
// // // // //     if (!canvas) return;
// // // // //     const ctx = canvas.getContext("2d");
// // // // //     if (!ctx) return;
// // // // //     const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
// // // // //     const dpr = Math.min(window.devicePixelRatio || 1, 2);
// // // // //     const mouse = { x: -9999, y: -9999 };
// // // // //     type P = { x: number; y: number; vx: number; vy: number; r: number };
// // // // //     let ps: P[] = [];
// // // // //     let w = 0, h = 0, raf = 0;

// // // // //     const init = () => {
// // // // //       w = window.innerWidth; h = window.innerHeight;
// // // // //       canvas.width = w * dpr; canvas.height = h * dpr;
// // // // //       canvas.style.width = `${w}px`; canvas.style.height = `${h}px`;
// // // // //       ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
// // // // //       const n = Math.min(w < 768 ? 45 : 105, Math.floor((w * h) / 15000));
// // // // //       ps = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.28, vy: (Math.random() - 0.5) * 0.28, r: Math.random() * 1.4 + 0.5 }));
// // // // //     };

// // // // //     const frame = () => {
// // // // //       ctx.clearRect(0, 0, w, h);
// // // // //       for (let i = 0; i < ps.length; i++) {
// // // // //         const p = ps[i];
// // // // //         if (!reduce) {
// // // // //           p.x += p.vx; p.y += p.vy;
// // // // //           if (p.x < -10) p.x = w + 10; else if (p.x > w + 10) p.x = -10;
// // // // //           if (p.y < -10) p.y = h + 10; else if (p.y > h + 10) p.y = -10;
// // // // //         }
// // // // //         const mdx = p.x - mouse.x, mdy = p.y - mouse.y;
// // // // //         const md = Math.hypot(mdx, mdy);
// // // // //         if (md < 180) {
// // // // //           ctx.strokeStyle = `rgba(110,231,183,${(1 - md / 180) * 0.55})`;
// // // // //           ctx.lineWidth = 0.8;
// // // // //           ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
// // // // //           if (!reduce) { p.x += (mdx / md) * 0.35; p.y += (mdy / md) * 0.35; }
// // // // //         }
// // // // //         for (let j = i + 1; j < ps.length; j++) {
// // // // //           const q = ps[j];
// // // // //           const d = Math.hypot(p.x - q.x, p.y - q.y);
// // // // //           if (d < 125) {
// // // // //             ctx.strokeStyle = `rgba(16,185,129,${(1 - d / 125) * 0.28})`;
// // // // //             ctx.lineWidth = 0.6;
// // // // //             ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
// // // // //           }
// // // // //         }
// // // // //         ctx.fillStyle = "rgba(209,250,229,.75)";
// // // // //         ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
// // // // //       }
// // // // //       if (!reduce) raf = requestAnimationFrame(frame);
// // // // //     };

// // // // //     const onMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
// // // // //     const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };
// // // // //     const onResize = () => { init(); if (reduce) frame(); };
// // // // //     const onVis = () => { if (document.hidden) cancelAnimationFrame(raf); else if (!reduce) raf = requestAnimationFrame(frame); };

// // // // //     init(); frame();
// // // // //     window.addEventListener("mousemove", onMove, { passive: true });
// // // // //     window.addEventListener("mouseleave", onLeave);
// // // // //     window.addEventListener("resize", onResize);
// // // // //     document.addEventListener("visibilitychange", onVis);
// // // // //     return () => {
// // // // //       cancelAnimationFrame(raf);
// // // // //       window.removeEventListener("mousemove", onMove);
// // // // //       window.removeEventListener("mouseleave", onLeave);
// // // // //       window.removeEventListener("resize", onResize);
// // // // //       document.removeEventListener("visibilitychange", onVis);
// // // // //     };
// // // // //   }, []);
// // // // //   return <canvas ref={ref} aria-hidden className="fixed inset-0 z-[1] pointer-events-none" />;
// // // // // }

// // // // // function CursorGlow() {
// // // // //   const mx = useMotionValue(-600);
// // // // //   const my = useMotionValue(-600);
// // // // //   const sx = useSpring(mx, { stiffness: 90, damping: 20, mass: 0.6 });
// // // // //   const sy = useSpring(my, { stiffness: 90, damping: 20, mass: 0.6 });
// // // // //   const x = useTransform(sx, v => v - 280);
// // // // //   const y = useTransform(sy, v => v - 280);
// // // // //   useEffect(() => {
// // // // //     const move = (e: MouseEvent) => { mx.set(e.clientX); my.set(e.clientY); };
// // // // //     window.addEventListener("mousemove", move, { passive: true });
// // // // //     return () => window.removeEventListener("mousemove", move);
// // // // //   }, [mx, my]);
// // // // //   return <motion.div aria-hidden style={{ x, y }} className="pointer-events-none fixed left-0 top-0 z-[2] hidden h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,.17),transparent_62%)] lg:block" />;
// // // // // }

// // // // // function Backdrop() {
// // // // //   return <div aria-hidden className="pointer-events-none fixed inset-0 z-0 bg-[#04100d]">
// // // // //     <div className="av-blob av-a -left-[10vw] -top-[12vh] h-[55vw] w-[55vw] max-h-[760px] max-w-[760px] bg-emerald-700/35" />
// // // // //     <div className="av-blob av-b -right-[8vw] top-[18vh] h-[48vw] w-[48vw] max-h-[680px] max-w-[680px] bg-cyan-500/20" />
// // // // //     <div className="av-blob av-c bottom-[-18vh] left-[22vw] h-[50vw] w-[50vw] max-h-[700px] max-w-[700px] bg-teal-600/20" />
// // // // //     <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_72%)]" />
// // // // //     <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(7,6,13,.85)_100%)]" />
// // // // //   </div>;
// // // // // }

// // // // // /* ------------------------------------------------------------------ */
// // // // // /* PRIMITIVES                                                          */
// // // // // /* ------------------------------------------------------------------ */

// // // // // function ScrollProgress() {
// // // // //   const { scrollYProgress } = useScroll();
// // // // //   const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.3 });
// // // // //   return <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-300" />;
// // // // // }

// // // // // function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
// // // // //   const reduce = useReducedMotion();
// // // // //   return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 36, filter: "blur(10px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.85, delay, ease: EASE }}>{children}</motion.div>;
// // // // // }

// // // // // function SpotCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
// // // // //   const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
// // // // //     const r = e.currentTarget.getBoundingClientRect();
// // // // //     e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
// // // // //     e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
// // // // //   };
// // // // //   return <div onMouseMove={onMove} className={`av-spot ${className}`}>{children}</div>;
// // // // // }

// // // // // function Tilt({ children, className = "" }: { children: React.ReactNode; className?: string }) {
// // // // //   const reduce = useReducedMotion();
// // // // //   const ref = useRef<HTMLDivElement>(null);
// // // // //   const px = useMotionValue(0);
// // // // //   const py = useMotionValue(0);
// // // // //   const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [5, -5]), { stiffness: 200, damping: 20 });
// // // // //   const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-5, 5]), { stiffness: 200, damping: 20 });
// // // // //   const onMove = (e: React.MouseEvent) => {
// // // // //     if (reduce || !ref.current) return;
// // // // //     const r = ref.current.getBoundingClientRect();
// // // // //     px.set((e.clientX - r.left) / r.width - 0.5);
// // // // //     py.set((e.clientY - r.top) / r.height - 0.5);
// // // // //   };
// // // // //   return <motion.div ref={ref} onMouseMove={onMove} onMouseLeave={() => { px.set(0); py.set(0); }} style={{ rotateX, rotateY, transformPerspective: 1100 }} className={className}>{children}</motion.div>;
// // // // // }

// // // // // function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
// // // // //   const ref = useRef<HTMLSpanElement>(null);
// // // // //   const inView = useInView(ref, { once: true });
// // // // //   const reduce = useReducedMotion();
// // // // //   const [v, setV] = useState(0);
// // // // //   useEffect(() => {
// // // // //     if (!inView) return;
// // // // //     if (reduce) { setV(to); return; }
// // // // //     const c = animate(0, to, { duration: 1.6, ease: EASE, onUpdate: x => setV(Math.round(x)) });
// // // // //     return () => c.stop();
// // // // //   }, [inView, to, reduce]);
// // // // //   return <span ref={ref}>{String(v).padStart(2, "0")}{suffix}</span>;
// // // // // }

// // // // // function SectionHead({ n, kicker, children, sub }: { n: string; kicker: string; children: React.ReactNode; sub?: string }) {
// // // // //   return <Reveal>
// // // // //     <div className="flex items-center gap-4">
// // // // //       <span className="av-outline font-mono text-5xl font-semibold leading-none sm:text-6xl">{n}</span>
// // // // //       <span className="h-px w-12 bg-gradient-to-r from-emerald-400/70 to-transparent" />
// // // // //       <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">{kicker}</span>
// // // // //     </div>
// // // // //     <div className="mt-7 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
// // // // //       <h2 className="max-w-4xl text-[clamp(44px,6.6vw,92px)] font-semibold leading-[.9] tracking-[-.06em] text-white">{children}</h2>
// // // // //       {sub && <p className="max-w-sm text-sm leading-7 text-zinc-400">{sub}</p>}
// // // // //     </div>
// // // // //   </Reveal>;
// // // // // }

// // // // // const Grad = ({ children }: { children: React.ReactNode }) => <span className="av-shine bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">{children}</span>;

// // // // // /* ------------------------------------------------------------------ */
// // // // // /* HERO                                                                */
// // // // // /* ------------------------------------------------------------------ */

// // // // // function RotatingWord() {
// // // // //   const [i, setI] = useState(0);
// // // // //   useEffect(() => { const t = setInterval(() => setI(x => (x + 1) % roles.length), 2200); return () => clearInterval(t); }, []);
// // // // //   return <span className="relative inline-flex h-[1.4em] min-w-[7.5ch] items-center overflow-hidden align-bottom">
// // // // //     <AnimatePresence mode="wait">
// // // // //       <motion.span key={roles[i]} initial={{ y: "100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-100%", opacity: 0 }} transition={{ duration: 0.45, ease: EASE }} className="absolute left-0 font-semibold text-white">{roles[i]}</motion.span>
// // // // //     </AnimatePresence>
// // // // //   </span>;
// // // // // }

// // // // // function WordReveal({ text, delay = 0, grad = false }: { text: string; delay?: number; grad?: boolean }) {
// // // // //   const reduce = useReducedMotion();
// // // // //   return <>{text.split(" ").map((w, i) => <span key={`${w}-${i}`} className="inline-block overflow-hidden pb-[.16em] -mb-[.16em] align-bottom"><motion.span className="inline-block" initial={reduce ? false : { y: "115%", rotate: 5 }} animate={{ y: 0, rotate: 0 }} transition={{ duration: 1, delay: delay + i * 0.09, ease: EASE }}>{grad ? <Grad>{w}</Grad> : w}&nbsp;</motion.span></span>)}</>;
// // // // // }

// // // // // function Orbit() {
// // // // //   const chips: [string, string, number][] = [["SEO", "01", 0], ["CONTENT", "02", 90], ["CREATIVE", "03", 180], ["EXECUTE", "04", 270]];
// // // // //   return <div className="relative mx-auto aspect-square w-full max-w-[480px]">
// // // // //     <div className="av-pulse absolute inset-[16%] rounded-full bg-emerald-600/35 blur-3xl" />
// // // // //     <div className="av-pulse absolute inset-[30%] rounded-full bg-cyan-400/20 blur-3xl [animation-delay:-3s]" />
// // // // //     <div className="av-spin absolute inset-[3%] rounded-full border border-white/10">
// // // // //       {chips.map(([label, n, deg]) => <div key={label} className="absolute inset-0" style={{ transform: `rotate(${deg}deg)` }}>
// // // // //         <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
// // // // //           <div style={{ transform: `rotate(${-deg}deg)` }}><div className="av-spin-rev">
// // // // //             <div className="whitespace-nowrap rounded-xl border border-white/15 bg-white/[.08] px-3 py-2 font-mono text-[10px] text-white shadow-[0_10px_40px_rgba(16,185,129,.25)] backdrop-blur-md"><span className="mr-2 text-emerald-300">{n}</span>{label}</div>
// // // // //           </div></div>
// // // // //         </div>
// // // // //       </div>)}
// // // // //     </div>
// // // // //     <div className="av-spin-slow absolute inset-[20%] rounded-full border border-dashed border-emerald-300/25">
// // // // //       <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,.9)]" />
// // // // //       <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-teal-300 shadow-[0_0_14px_rgba(94,234,212,.9)]" />
// // // // //     </div>
// // // // //     <div className="absolute inset-[35%] grid place-items-center rounded-full border border-white/20 bg-[radial-gradient(circle_at_30%_25%,rgba(52,211,153,.55),rgba(24,16,48,.95)_62%)] text-center shadow-[0_0_80px_rgba(16,185,129,.45),inset_0_0_30px_rgba(255,255,255,.08)]">
// // // // //       <div><p className="font-mono text-[7px] uppercase tracking-[.2em] text-emerald-200/80 sm:text-[8px]">Digital workflow</p><strong className="mt-2 block text-xl font-semibold leading-[.95] tracking-[-.05em] text-white sm:text-2xl">IDEA<br />TO<br /><Grad>IMPACT.</Grad></strong></div>
// // // // //     </div>
// // // // //   </div>;
// // // // // }

// // // // // function Hero() {
// // // // //   const reduce = useReducedMotion();
// // // // //   const { scrollY } = useScroll();
// // // // //   const textY = useTransform(scrollY, [0, 700], [0, 70]);
// // // // //   const orbY = useTransform(scrollY, [0, 700], [0, 130]);
// // // // //   const fade = useTransform(scrollY, [0, 600], [1, 0.25]);
// // // // //   const stats: [number, string, string][] = [[2, "Years hands-on", "+"], [projects.length, "Featured projects", ""], [experience.length, "Companies", ""], [totalSkills, "Skills & tools", ""]];
// // // // //   return <section id="home" className="relative flex min-h-screen flex-col justify-center pb-16 pt-32 sm:pt-36">
// // // // //     <div className="mx-auto grid w-[min(1240px,calc(100%-32px))] items-center gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-8">
// // // // //       <motion.div style={{ y: reduce ? 0 : textY, opacity: reduce ? 1 : fade }}>
// // // // //         <motion.div initial={reduce ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }} className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[.05] px-4 py-2 font-mono text-[10px] uppercase tracking-[.16em] text-zinc-300 backdrop-blur-md">
// // // // //           <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" /></span>
// // // // //           Available for projects
// // // // //         </motion.div>
// // // // //         <h1 className="mt-8 max-w-5xl text-[clamp(54px,8.4vw,122px)] font-semibold leading-[.86] tracking-[-.07em] text-white">
// // // // //           <WordReveal text="I make digital work" delay={0.15} />
// // // // //           <WordReveal text="worth noticing." delay={0.55} grad />
// // // // //         </h1>
// // // // //         <motion.p initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1, ease: EASE }} className="mt-8 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">Digital Marketing Executive working across websites, SEO, social media, content development, creative production and event communication.</motion.p>
// // // // //         <motion.div initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.1, ease: EASE }} className="mt-6 flex items-center gap-3 text-lg text-zinc-500 sm:text-xl">Specialising in <RotatingWord /></motion.div>
// // // // //         <motion.div initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.2, ease: EASE }} className="mt-9 flex flex-wrap items-center gap-3">
// // // // //           <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} href="#work" className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-xs font-bold text-zinc-950 shadow-[0_0_50px_rgba(52,211,153,.35)] transition hover:bg-emerald-200">Explore real projects <ArrowRight size={14} className="transition group-hover:translate-x-1" /></motion.a>
// // // // //           <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}><Link href="/work-samples" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.05] px-6 py-3.5 text-xs font-bold text-white backdrop-blur-md transition hover:border-white/40">Open work archive <ArrowRight size={14} /></Link></motion.div>
// // // // //         </motion.div>
// // // // //       </motion.div>
// // // // //       <motion.div style={{ y: reduce ? 0 : orbY }} initial={reduce ? false : { opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.4, ease: EASE }}><Orbit /></motion.div>
// // // // //     </div>
// // // // //     <motion.div initial={reduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 1.4, ease: EASE }} className="mx-auto mt-16 w-[min(1240px,calc(100%-32px))]">
// // // // //       <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl md:grid-cols-4">
// // // // //         {stats.map(([n, label, suffix]) => <div key={label} className="bg-[#071612]/80 px-6 py-6"><div className="text-4xl font-semibold tracking-[-.05em] text-white sm:text-5xl"><CountUp to={n} suffix={suffix} /></div><p className="mt-2 font-mono text-[9px] uppercase tracking-[.16em] text-zinc-500">{label}</p></div>)}
// // // // //       </div>
// // // // //     </motion.div>
// // // // //     <a href="#about" aria-label="Scroll to about" className="mx-auto mt-10 hidden items-center gap-2 font-mono text-[9px] uppercase tracking-[.18em] text-zinc-500 sm:flex">Scroll to explore <motion.span animate={reduce ? undefined : { y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}><ArrowDown size={13} /></motion.span></a>
// // // // //   </section>;
// // // // // }

// // // // // /* ------------------------------------------------------------------ */
// // // // // /* SECTIONS                                                            */
// // // // // /* ------------------------------------------------------------------ */

// // // // // function About() {
// // // // //   const range = ["Websites", "SEO", "Social", "Content", "Creative", "Events", "Publishing", "Automation"];
// // // // //   return <section id="about" className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // // //     <SectionHead n="01" kicker="About me">I work where <Grad>marketing, content and execution</Grad> meet.</SectionHead>
// // // // //     <div className="mt-14 grid gap-5 lg:grid-cols-[1.25fr_.75fr]">
// // // // //       <Reveal><SpotCard className="h-full rounded-[28px] border border-white/10 bg-white/[.03] p-8 backdrop-blur-xl sm:p-10"><p className="text-xl leading-8 tracking-[-.02em] text-zinc-300 sm:text-2xl sm:leading-10">I enjoy taking a raw idea, messy information or business requirement and turning it into something structured, visual, useful and ready to publish — whether that is a website, campaign, social post, blog, conference asset or digital workflow.</p></SpotCard></Reveal>
// // // // //       <Reveal delay={0.1}><SpotCard className="h-full rounded-[28px] border border-white/10 bg-white/[.03] p-6 backdrop-blur-xl"><p className="font-mono text-[9px] uppercase tracking-[.16em] text-zinc-500">My working range</p>
// // // // //         <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }} className="mt-6 grid grid-cols-2 gap-2">{range.map((x, i) => <motion.span key={x} variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } } }} whileHover={{ y: -2 }} className="rounded-xl border border-white/10 bg-white/[.04] px-3 py-3 text-[10px] font-bold text-zinc-300 transition-colors hover:border-emerald-400/50 hover:text-white"><span className="mr-1.5 text-emerald-400">0{i + 1}</span>{x}</motion.span>)}</motion.div>
// // // // //       </SpotCard></Reveal>
// // // // //     </div>
// // // // //   </div></section>;
// // // // // }

// // // // // function Experience() {
// // // // //   const ref = useRef<HTMLDivElement>(null);
// // // // //   const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
// // // // //   const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 26 });
// // // // //   return <section id="experience" className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // // //     <SectionHead n="02" kicker="Career timeline" sub="Six roles across digital marketing, content, software and cloud engineering, CAD design and service operations.">Where I’ve worked. <Grad>What I’ve done.</Grad></SectionHead>
// // // // //     <div ref={ref} className="relative mt-16 space-y-8">
// // // // //       <div className="absolute bottom-0 left-[7px] top-0 w-px bg-white/10 md:left-[187px]" />
// // // // //       <motion.div style={{ scaleY }} className="absolute bottom-0 left-[7px] top-0 w-px origin-top bg-gradient-to-b from-emerald-400 via-teal-300 to-cyan-300 shadow-[0_0_12px_rgba(52,211,153,.8)] md:left-[187px]" />
// // // // //       {experience.map((job, i) => <Reveal key={job.company} delay={0.05}>
// // // // //         <div className="relative grid gap-5 pl-9 md:grid-cols-[180px_1fr] md:gap-14 md:pl-0">
// // // // //           <span className={`absolute left-0 top-8 h-[15px] w-[15px] rounded-full border-2 bg-[#04100d] md:left-[180px] ${job.current ? "border-cyan-300 shadow-[0_0_16px_rgba(103,232,249,.9)]" : "border-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.6)]"}`} />
// // // // //           <div className="md:pt-7 md:text-right"><p className="font-mono text-[10px] uppercase tracking-[.14em] text-emerald-300">0{i + 1} / Experience</p><p className="mt-2 font-mono text-[10px] uppercase leading-5 tracking-[.08em] text-zinc-500">{job.dates}<br />{job.location}</p>{"type" in job && job.type && <span className="mt-3 inline-block rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 font-mono text-[8px] uppercase tracking-[.12em] text-amber-200">{job.type}</span>}{job.current && <span className="mt-3 inline-block rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 font-mono text-[8px] uppercase tracking-[.12em] text-cyan-200">Present</span>}</div>
// // // // //           <Tilt><SpotCard className="rounded-[26px] border border-white/10 bg-white/[.035] p-6 backdrop-blur-xl sm:p-8">
// // // // //             <div className="flex items-start gap-4"><div className="relative h-16 w-28 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white sm:w-32"><Image src={job.logo} alt={`${job.company} logo`} fill sizes="128px" className="object-contain p-2" /></div><div><h3 className="text-xl font-semibold tracking-[-.03em] text-white sm:text-2xl">{job.role}</h3><a href={job.href ?? "#"} target={job.href ? "_blank" : undefined} rel={job.href ? "noreferrer" : undefined} className="mt-1 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300 transition hover:text-white">{job.company}{job.href && <ExternalLink size={11} />}</a></div></div>
// // // // //             <p className="mt-6 text-sm leading-7 text-zinc-400">{job.description}</p>
// // // // //             <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-5">{job.points.map(p => <li key={p} className="flex gap-3 text-xs leading-6 text-zinc-300"><span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-emerald-400" />{p}</li>)}</ul>
// // // // //             <div className="mt-6 flex flex-wrap gap-2">{job.tags.map(t => <span key={t} className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[9px] font-semibold text-emerald-200">{t}</span>)}</div>
// // // // //           </SpotCard></Tilt>
// // // // //         </div>
// // // // //       </Reveal>)}
// // // // //     </div>
// // // // //   </div></section>;
// // // // // }

// // // // // function Work() {
// // // // //   return <section id="work" className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // // //     <SectionHead n="03" kicker="Selected work" sub="A selection of websites and digital experiences across aquaculture, conferences, technology and consumer brands.">Real projects. <Grad>Clear outcomes.</Grad></SectionHead>
// // // // //     <div className="mt-6"><Link href="/work-samples" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.05] px-5 py-2.5 text-xs font-bold text-white backdrop-blur-md transition hover:border-emerald-400/60">Explore all work <ArrowRight size={14} /></Link></div>
// // // // //     <div className="mt-14 space-y-8">
// // // // //       {projects.map((project, i) => <Reveal key={project.id}>
// // // // //         <SpotCard className="group relative rounded-[32px] border border-white/10 bg-white/[.03] p-4 backdrop-blur-xl sm:p-6">
// // // // //           <div className={`pointer-events-none absolute -z-10 h-72 w-72 rounded-full blur-[100px] ${project.glow} ${i % 2 ? "-left-10 top-10" : "-right-10 top-10"}`} />
// // // // //           <div className={`grid items-center gap-8 ${i % 2 ? "lg:grid-cols-[.9fr_1.1fr]" : "lg:grid-cols-[1.1fr_.9fr]"}`}>
// // // // //             <div className={i % 2 ? "lg:order-2" : ""}>
// // // // //               <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-[0_30px_80px_rgba(0,0,0,.5)]">
// // // // //                 <div className="flex items-center gap-2 border-b border-white/10 bg-zinc-900 px-4 py-3"><span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" /><span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" /><span className="ml-3 truncate rounded-md bg-white/5 px-3 py-1 font-mono text-[9px] text-zinc-500">{project.link ? project.link.replace("https://", "") : project.company}</span></div>
// // // // //                 <div className="flex h-[240px] items-center justify-center overflow-hidden bg-[#f4f4f5] sm:h-[330px]"><Image src={project.image} alt={`${project.company} website preview`} width={1100} height={760} className="h-full w-full object-contain object-center transition duration-700 ease-out group-hover:scale-[1.04]" /></div>
// // // // //               </div>
// // // // //             </div>
// // // // //             <div className="px-2 pb-2 lg:px-6">
// // // // //               <div className="flex items-center gap-3"><span className="av-outline font-mono text-4xl font-semibold">{project.id}</span><span className="rounded-full border border-white/10 bg-white/[.05] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[.12em] text-zinc-400">{project.label}</span></div>
// // // // //               <p className="mt-6 font-mono text-[10px] uppercase tracking-[.16em] text-emerald-300">{project.company}</p>
// // // // //               <h3 className="mt-3 text-3xl font-semibold leading-[1.05] tracking-[-.045em] text-white sm:text-4xl">{project.title}</h3>
// // // // //               <p className="mt-4 text-sm leading-7 text-zinc-400">{project.description}</p>
// // // // //               <div className="mt-7 flex flex-wrap gap-2.5"><Link href={`/work/${project.slug}`} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold text-zinc-950 transition hover:bg-emerald-200">View project <ArrowRight size={13} /></Link>{project.link && <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-xs font-bold text-white transition hover:border-white/50">Live website <ExternalLink size={13} /></a>}</div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </SpotCard>
// // // // //       </Reveal>)}
// // // // //     </div>
// // // // //   </div></section>;
// // // // // }

// // // // // function ArchivePreview() {
// // // // //   const rowOne = archive.slice(0, 5);
// // // // //   const rowTwo = archive.slice(5);
// // // // //   const tile = ([src, title, company, format]: string[], key: string) => <Link href="/work-samples" key={key} className="group mr-4 w-[220px] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[.04] backdrop-blur-md transition hover:-translate-y-1 hover:border-emerald-400/50 sm:w-[260px]"><div className="flex h-[150px] items-center justify-center overflow-hidden bg-[#f2f1ef] p-3 sm:h-[180px] sm:p-4"><Image src={src} alt={title} width={520} height={420} className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.05]" /></div><div className="px-4 py-3"><p className="truncate font-mono text-[8px] uppercase tracking-[.1em] text-zinc-500">{company} · {format}</p><h3 className="mt-1.5 truncate text-xs font-bold text-zinc-100">{title}</h3></div></Link>;
// // // // //   const row = (items: string[][], prefix: string) => [...items, ...items].map((it, i) => tile(it, `${prefix}-${i}`));
// // // // //   return <section className="relative overflow-hidden py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // // //     <SectionHead n="04" kicker="Creative archive" sub="Banners, carousel templates, event graphics and publications — moving gently so you can browse the range at a glance.">A closer look at <Grad>the creative work.</Grad></SectionHead>
// // // // //     <div className="mt-6"><Link href="/work-samples" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold text-zinc-950 transition hover:bg-emerald-200">View all samples <ArrowRight size={14} /></Link></div>
// // // // //   </div>
// // // // //     <div className="av-pausable relative mt-12 space-y-4">
// // // // //       <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#04100d] to-transparent sm:w-40" />
// // // // //       <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#04100d] to-transparent sm:w-40" />
// // // // //       <div className="av-marq">{row(rowOne, "a")}</div>
// // // // //       <div className="av-marq av-marq-rev">{row(rowTwo, "b")}</div>
// // // // //     </div>
// // // // //     <p className="mt-7 text-center text-[10px] text-zinc-500">Hover to pause · Select any sample to open the complete archive</p>
// // // // //   </section>;
// // // // // }

// // // // // function Skills() {
// // // // //   return <section id="skills" className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // // //     <SectionHead n="05" kicker="Skills & tools" sub="A straightforward overview of the marketing disciplines, measurement tools, creative apps and publishing platforms I work with.">The skills behind <Grad>the work.</Grad></SectionHead>
// // // // //     <div className="mt-14 grid gap-5 lg:grid-cols-3">
// // // // //       {skillGroups.map((group, gi) => <Reveal key={group.title} delay={gi * 0.08}><SpotCard className="h-full rounded-[28px] border border-white/10 bg-white/[.03] p-6 backdrop-blur-xl sm:p-7">
// // // // //         <div className="flex items-end justify-between border-b border-white/10 pb-4"><h3 className="text-lg font-semibold tracking-[-.03em] text-white">{group.title}</h3><span className="font-mono text-[9px] uppercase tracking-[.14em] text-zinc-500">{String(group.items.length).padStart(2, "0")} items</span></div>
// // // // //         <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03 } } }} className="mt-5 flex flex-wrap gap-2">{group.items.map(item => <motion.span key={item} variants={{ hidden: { opacity: 0, y: 12, scale: 0.94 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: EASE } } }} whileHover={{ y: -2 }} className="cursor-default rounded-full border border-white/10 bg-white/[.04] px-3.5 py-2 text-xs font-medium text-zinc-300 transition-colors hover:border-emerald-400/60 hover:bg-emerald-400/10 hover:text-white">{item}</motion.span>)}</motion.div>
// // // // //       </SpotCard></Reveal>)}
// // // // //     </div>
// // // // //   </div></section>;
// // // // // }

// // // // // function Process() {
// // // // //   const steps = [["01", "Understand", "Goal · audience · message"], ["02", "Structure", "Content · information · flow"], ["03", "Create", "Design · video · visual system"], ["04", "Execute", "Publish · schedule · maintain"]];
// // // // //   return <section className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // // //     <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-emerald-600/30 via-[#0a1f1b] to-cyan-500/10 p-8 backdrop-blur-xl sm:p-14">
// // // // //       <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_75%)]" />
// // // // //       <div className="relative"><SectionHead n="06" kicker="How I work">From brief to <Grad>publish-ready.</Grad></SectionHead>
// // // // //         <div className="relative mt-14 grid gap-3 md:grid-cols-4">
// // // // //           <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 1.5, ease: EASE }} className="pointer-events-none absolute left-[10%] right-[10%] top-[46px] hidden h-px origin-left bg-gradient-to-r from-emerald-300/60 via-teal-300/60 to-cyan-300/60 md:block" />
// // // // //           {steps.map(([n, title, desc], i) => <Reveal key={n} delay={i * 0.1}><motion.article whileHover={{ y: -6 }} transition={{ duration: 0.3, ease: EASE }} className="h-full rounded-[24px] border border-white/10 bg-white/[.05] p-6 backdrop-blur-xl transition-colors hover:bg-white/[.09]"><span className="grid h-10 w-10 place-items-center rounded-full border border-emerald-300/40 bg-[#0a1f1b] font-mono text-[10px] text-emerald-200 shadow-[0_0_20px_rgba(52,211,153,.4)]">{n}</span><h3 className="mt-12 text-2xl font-semibold tracking-[-.04em] text-white">{title}</h3><p className="mt-2 text-xs leading-5 text-zinc-400">{desc}</p></motion.article></Reveal>)}
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   </div></section>;
// // // // // }

// // // // // function Insights() {
// // // // //   return <section id="insights" className="relative py-28 sm:py-36"><div className="mx-auto grid w-[min(1240px,calc(100%-32px))] items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
// // // // //     <Reveal><div className="flex items-center gap-4"><span className="av-outline font-mono text-5xl font-semibold leading-none sm:text-6xl">07</span><span className="h-px w-12 bg-gradient-to-r from-emerald-400/70 to-transparent" /><span className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">Insights · publishing</span></div>
// // // // //       <h2 className="mt-7 text-[clamp(42px,6vw,88px)] font-semibold leading-[.92] tracking-[-.06em] text-white">Content is not decoration. <Grad>It is part of the product.</Grad></h2>
// // // // //       <p className="mt-7 max-w-xl text-sm leading-7 text-zinc-400">The portfolio can keep expanding with published articles, SEO work, case studies and content projects as more source material is added.</p></Reveal>
// // // // //     <Reveal delay={0.1}><Tilt><SpotCard className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[.04] p-3 shadow-[0_40px_100px_rgba(0,0,0,.5)] backdrop-blur-xl"><Image src="/work/innovare/blog.png" alt="Innovare blog publishing preview" width={900} height={650} className="h-[360px] w-full rounded-[24px] object-cover object-top" /><div className="p-4"><p className="font-mono text-[8px] uppercase tracking-[.14em] text-zinc-500">SEO · Content · Publishing</p><h3 className="mt-2 text-lg font-semibold text-white">Technical content presented as a usable digital experience.</h3></div></SpotCard></Tilt></Reveal>
// // // // //   </div></section>;
// // // // // }

// // // // // function Testimonials() {
// // // // //   return <section id="testimonials" className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // // //     <SectionHead n="08" kicker="Testimonials">Good work should be <Grad>remembered.</Grad></SectionHead>
// // // // //     <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
// // // // //       {testimonials.map(([name, role, quote], i) => <Reveal key={name} delay={(i % 3) * 0.1} className={i < 3 ? "lg:col-span-2" : "lg:col-span-3"}><SpotCard className="h-full rounded-[28px] border border-white/10 bg-white/[.035] p-7 backdrop-blur-xl sm:p-8">
// // // // //         <Quote className="text-emerald-400" size={28} />
// // // // //         <div className="mt-6 text-sm tracking-[.2em] text-amber-300">★★★★★</div>
// // // // //         <p className="mt-5 text-[15px] leading-7 tracking-[-.01em] text-zinc-200 sm:text-base sm:leading-8">“{quote}”</p>
// // // // //         <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-emerald-500 to-cyan-400 text-sm font-bold text-white">{name[0]}</span><div><b className="block text-sm text-white">{name}</b><span className="mt-0.5 block text-[10px] text-zinc-500">{role}</span></div></div>
// // // // //       </SpotCard></Reveal>)}
// // // // //     </div>
// // // // //   </div></section>;
// // // // // }

// // // // // function Contact() {
// // // // //   return <section id="contact" className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // // //     <Reveal><div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[.03] p-8 backdrop-blur-xl sm:p-14">
// // // // //       <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-emerald-600/30 blur-[110px]" />
// // // // //       <div className="pointer-events-none absolute -bottom-24 left-10 h-80 w-80 rounded-full bg-cyan-500/15 blur-[110px]" />
// // // // //       <div className="relative flex items-center gap-4"><span className="av-outline font-mono text-5xl font-semibold leading-none sm:text-6xl">09</span><span className="h-px w-12 bg-gradient-to-r from-emerald-400/70 to-transparent" /><span className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">Contact</span></div>
// // // // //       <h2 className="relative mt-8 max-w-5xl text-[clamp(46px,7.2vw,108px)] font-semibold leading-[.88] tracking-[-.07em] text-white">Let’s build something <Grad>worth showing.</Grad></h2>
// // // // //       <div className="relative mt-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
// // // // //         <p className="max-w-md text-sm leading-7 text-zinc-400">Available for digital marketing, website, content, social media and creative projects.</p>
// // // // //         <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
// // // // //           <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} href="mailto:hello@adityavarma.dev" className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-xs font-bold text-zinc-950 shadow-[0_0_50px_rgba(52,211,153,.35)] transition-colors hover:bg-emerald-200"><Mail size={14} /> hello@adityavarma.dev <ArrowRight size={14} /></motion.a>
// // // // //           <div className="flex gap-2"><motion.a whileHover={{ y: -3 }} href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[.05] text-white transition-colors hover:border-emerald-400/70"><Linkedin size={15} /></motion.a><motion.a whileHover={{ y: -3 }} href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[.05] text-white transition-colors hover:border-emerald-400/70"><Instagram size={15} /></motion.a></div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div></Reveal>
// // // // //     <footer className="mt-10 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 font-mono text-[9px] uppercase tracking-[.14em] text-zinc-500 sm:flex-row"><span>© 2026 Aditya Varma</span><span>Digital Marketing · Web · Content · Creative</span></footer>
// // // // //   </div></section>;
// // // // // }

// // // // // /* ------------------------------------------------------------------ */
// // // // // /* PAGE                                                                */
// // // // // /* ------------------------------------------------------------------ */

// // // // // export default function Portfolio() {
// // // // //   const [menu, setMenu] = useState(false);
// // // // //   const [active, setActive] = useState("home");
// // // // //   const [scrolled, setScrolled] = useState(false);
// // // // //   const [showTop, setShowTop] = useState(false);

// // // // //   useEffect(() => {
// // // // //     const ids = ["home", ...navLinks.map(([, id]) => id)];
// // // // //     const els = ids.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];
// // // // //     const io = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }); }, { rootMargin: "-45% 0px -50% 0px" });
// // // // //     els.forEach(el => io.observe(el));
// // // // //     const onScroll = () => { setScrolled(window.scrollY > 24); setShowTop(window.scrollY > 700); };
// // // // //     onScroll();
// // // // //     window.addEventListener("scroll", onScroll, { passive: true });
// // // // //     return () => { io.disconnect(); window.removeEventListener("scroll", onScroll); };
// // // // //   }, []);

// // // // //   return <main className="relative min-h-screen overflow-x-clip bg-[#04100d] text-zinc-100 selection:bg-emerald-500/40">
// // // // //     <style>{CSS}</style>
// // // // //     <Backdrop />
// // // // //     <ParticleField />
// // // // //     <CursorGlow />
// // // // //     <div aria-hidden className="av-grain pointer-events-none fixed inset-0 z-[3]" />
// // // // //     <ScrollProgress />

// // // // //     <motion.header initial={{ y: -70, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, delay: 0.1, ease: EASE }} className={`fixed left-1/2 top-4 z-[60] flex w-[min(1180px,calc(100%-20px))] -translate-x-1/2 items-center justify-between rounded-2xl border px-3 py-2.5 backdrop-blur-2xl transition-all duration-500 ${scrolled ? "border-white/15 bg-[#09171a]/80 shadow-[0_18px_60px_rgba(0,0,0,.5)]" : "border-white/10 bg-white/[.04]"}`}>
// // // // //       <a href="#home" className="flex items-center gap-2.5"><span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-400 text-[10px] font-bold text-white shadow-[0_0_20px_rgba(16,185,129,.5)]">AV</span><span><b className="block text-[11px] leading-none text-white">Aditya Varma</b><small className="mt-1 block text-[7px] uppercase tracking-[.12em] text-zinc-500">Digital Marketing Executive</small></span></a>
// // // // //       <nav className="hidden items-center gap-1 lg:flex">{navLinks.map(([label, id]) => <a key={id} href={`#${id}`} className={`relative rounded-full px-3 py-1.5 text-[10px] font-semibold transition-colors ${active === id ? "text-white" : "text-zinc-400 hover:text-white"}`}>{active === id && <motion.span layoutId="nav-pill" transition={{ type: "spring", stiffness: 380, damping: 32 }} className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/10" />}{label}</a>)}<Link href="/work-samples" className="rounded-full px-3 py-1.5 text-[10px] font-semibold text-zinc-400 transition hover:text-white">Work Archive</Link></nav>
// // // // //       <a href="#contact" className="hidden items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[10px] font-bold text-zinc-950 transition hover:bg-emerald-200 lg:inline-flex">Let’s talk <ArrowRight size={12} /></a>
// // // // //       <button onClick={() => setMenu(!menu)} className="grid h-9 w-9 place-items-center rounded-xl border border-white/15 bg-white/5 text-white lg:hidden" aria-label="Toggle menu" aria-expanded={menu}>{menu ? <X size={16} /> : <Menu size={16} />}</button>
// // // // //       <AnimatePresence>{menu && <motion.div initial={{ opacity: 0, y: -8, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8, scale: 0.97 }} transition={{ duration: 0.25, ease: EASE }} className="absolute right-0 top-14 w-64 origin-top-right rounded-2xl border border-white/15 bg-[#09171a]/95 p-2 shadow-2xl backdrop-blur-2xl lg:hidden">{navLinks.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenu(false)} className={`block rounded-xl px-3 py-3 text-xs font-semibold hover:bg-white/5 ${active === id ? "text-emerald-300" : "text-zinc-300"}`}>{label}</a>)}<Link href="/work-samples" onClick={() => setMenu(false)} className="block rounded-xl px-3 py-3 text-xs font-semibold text-zinc-300 hover:bg-white/5">Work Archive</Link></motion.div>}</AnimatePresence>
// // // // //     </motion.header>

// // // // //     <div className="relative z-10">
// // // // //       <Hero />
// // // // //       <About />
// // // // //       <Experience />
// // // // //       <Work />
// // // // //       <ArchivePreview />
// // // // //       <Skills />
// // // // //       <Process />
// // // // //       <Insights />
// // // // //       <Testimonials />
// // // // //       <Contact />
// // // // //     </div>

// // // // //     <AnimatePresence>{showTop && <motion.a href="#home" aria-label="Back to top" initial={{ opacity: 0, y: 16, scale: 0.8 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.8 }} whileHover={{ y: -3 }} className="fixed bottom-6 right-6 z-[60] grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-[#09171a]/80 text-white shadow-[0_10px_40px_rgba(0,0,0,.5)] backdrop-blur-xl transition-colors hover:border-emerald-400/70"><ArrowUp size={16} /></motion.a>}</AnimatePresence>
// // // // //   </main>;
// // // // // }
// // // // "use client";

// // // // import { ArrowDown, ArrowRight, ArrowUp, ExternalLink, Instagram, Linkedin, Mail, Menu, Quote, X } from "lucide-react";
// // // // import { AnimatePresence, animate, motion, useInView, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
// // // // import Link from "next/link";
// // // // import Image from "next/image";
// // // // import { useEffect, useRef, useState } from "react";

// // // // const EASE = [0.16, 1, 0.3, 1] as const;

// // // // /* ------------------------------------------------------------------ */
// // // // /* DATA (unchanged content)                                            */
// // // // /* ------------------------------------------------------------------ */

// // // // const projects = [
// // // //   { id: "01", company: "Innovare Biopharma LLP", label: "WEBSITE · SEO · CONTENT", title: "Building a digital home for aquaculture health.", description: "Website development, product presentation, blog publishing, SEO-focused content, social support and digital marketing execution.", image: "/work/websites/innovare-home.png", slug: "innovare-biopharma", link: "https://innovarebiopharma.com/", glow: "bg-emerald-500/25" },
// // // //   { id: "02", company: "C-STAR Global", label: "EVENTS · CONTENT · CREATIVE", title: "Turning conference information into a complete digital experience.", description: "Conference communication, speaker data, landing pages, banners, videos, social publishing and conference publications.", image: "/work/websites/cstar-home.png", slug: "c-star-global", glow: "bg-indigo-500/25" },
// // // //   { id: "03", company: "Ecorfy Technologies Pvt. Ltd.", label: "WEB · SOCIAL · TECHNOLOGY", title: "Making technology easier to understand and easier to publish.", description: "Website work and technology-focused digital communication across software, AI, social media and marketing content.", image: "/work/ecorfy/website-cover.png", slug: "ecorfy-technologies", link: "https://www.ecorfy.com/", glow: "bg-cyan-500/20" },
// // // //   { id: "04", company: "Shreshta Pickles", label: "FREELANCE · WEBSITE", title: "A clean digital storefront for a traditional food brand.", description: "Freelance website development with a product-led layout, clear navigation and a focused brand presentation.", image: "/work/websites/shreshta-home.png", slug: "shreshta-pickles", link: "https://shreshtapickles.com/", glow: "bg-orange-500/20" },
// // // // ];

// // // // const experience = [
// // // //   { company: "Innovare Biopharma LLP", role: "Digital Marketing Executive", dates: "April 2026 — Present", location: "Hyderabad, India", logo: "/companies/innovare-logo.png", current: true, description: "Digital marketing, website management, SEO-focused content, social media support and creative production for an aquaculture-focused brand.", points: ["Managed website content, landing pages and digital publishing", "Supported SEO, blogs, social media and campaign creatives", "Created and coordinated marketing assets across digital channels"], tags: ["Digital Marketing", "SEO", "Content", "Social Media"], href: "https://innovarebiopharma.com/" },
// // // //   { company: "C-STAR Global Inc.", role: "Content Developer · Digital Marketing", dates: "April 2023 — February 2026", location: "Hyderabad, India", logo: "/companies/cstar-logo.png", description: "Worked across conference communication, website content, speaker data, creative production, videos, conference publications and social media publishing.", points: ["Managed conference and expo content from raw data to publishable assets", "Created banners, videos, posters, conference books and social content", "Supported websites, virtual conferences and scheduled social publishing"], tags: ["Content Development", "Events", "Social Media", "Creative"] },
// // // //   { company: "Ecorfy Technologies Pvt. Ltd.", role: "Software Engineer", dates: "Earlier experience", location: "Hyderabad, India", logo: "/companies/ecorfy-logo.png", description: "Earlier technology experience supporting web development and digital communication projects in a technology-focused environment.", points: ["Worked on website and software-oriented digital projects", "Supported technology communication and online presentation", "Built technical experience that now strengthens marketing execution"], tags: ["Web", "Software", "Digital", "Technology"], href: "https://www.ecorfy.com/" },
// // // //   { company: "Codexbox", role: "Software Engineer", dates: "October 2022 — May 2023", location: "Remote", logo: "/companies/codexbox-logo.png", description: "Designed, deployed, and maintained robust cloud infrastructure across AWS, Microsoft Azure, and GCP. Automated cloud provisioning via Infrastructure as Code with Terraform, managed Docker/Kubernetes container systems, and implemented CI/CD pipelines.", points: ["Designed and maintained cloud infrastructure across AWS, Azure, and GCP", "Automated provisioning using Infrastructure as Code (IaC) with Terraform", "Managed Docker/Kubernetes container systems and CI/CD pipelines"], tags: ["AWS", "Azure", "GCP", "Terraform"] },
// // // //   { company: "Tech Connect Services Pvt. Ltd.", role: "Computer Aided Design Draftsman", dates: "December 2021 — September 2022", location: "Hyderabad, India", logo: "/companies/techconnect-logo.png", description: "Delivered high-precision 2D/3D CAD layouts and schematic technical drawings for Audio-Visual infrastructure on large commercial and government sites.", points: ["Delivered high-precision 2D/3D CAD layouts for AV infrastructure projects", "Produced schematic technical drawings for large commercial and government sites"], tags: ["AutoCAD", "2D/3D Design", "AV Systems"] },
// // // //   { company: "India Yamaha Motor Pvt. Ltd.", role: "Assistant Manager", type: "Part-time", dates: "May 2020 — November 2021", location: "Hyderabad, India", logo: "/companies/yamaha-logo.png", description: "Managed day-to-day service center operations, supervising technicians to maximize workflow productivity, handling customer concerns and inventory coordination.", points: ["Managed day-to-day service center operations and technician workflows", "Supervised teams to maximize productivity and turnaround time"], tags: ["Operations Management", "Customer Service", "Team Leadership"] },
// // // // ];

// // // // const skillGroups = [
// // // //   { title: "Digital Marketing", items: ["SEO", "On-page SEO", "Technical SEO", "Off-page SEO", "Content Development", "Content Marketing", "Social Media Marketing", "Google Ads", "Meta Ads", "Performance Marketing", "Lead Generation", "Email Marketing", "Keyword Research"] },
// // // //   { title: "Analytics & Automation", items: ["Google Analytics 4 (GA4)", "Google Tag Manager (GTM)", "Google Search Console", "n8n Automation", "AI Tools"] },
// // // //   { title: "Creative & Publishing Tools", items: ["Canva", "Renderforest", "CapCut", "Filmora", "Publito", "Publer", "Swipe Pages", "WordPress", "Hostinger", "Open Mercato"] },
// // // // ];

// // // // const archive = [
// // // //   ["/work/innovare/samples/hygiene.png", "Hygiene in Shrimp Farms", "Innovare", "Educational social creative"],
// // // //   ["/work/ecorfy/samples/top-generative-ai.png", "Generative AI Development", "Ecorfy", "Social banner"],
// // // //   ["/work/uploads/AP_Defence_Carousel.jpg", "AP Defence & Aerospace", "Carousel", "Carousel template"],
// // // //   ["/work/uploads/India_infrastructure.jpg", "India AI Infrastructure Race", "Carousel", "Carousel template"],
// // // //   ["/work/innovare/samples/nutrition.png", "Nutrition for Stronger Shrimp", "Innovare", "Educational social creative"],
// // // //   ["/work/ecorfy/samples/transform-ideas.png", "Transform Ideas", "Ecorfy", "Generative AI social"],
// // // //   ["/work/cstar/women-forum-2024.jpg", "Global Women Forum", "C-STAR", "Event banner"],
// // // //   ["/work/cstar/global-technology-forum-2024.jpg", "Global Technology Forum", "C-STAR", "Event poster"],
// // // //   ["/work/uploads/Book_Updated_3_.jpg", "World Women & Health Forum", "C-STAR", "Conference publication"],
// // // //   ["/work/ecorfy/samples/software-development.png", "Software Development", "Ecorfy", "Social banner"],
// // // //   ["/work/ecorfy/samples/ecorfy-digital-marketing.jpg", "Digital Marketing Services", "Ecorfy", "Social banner"],
// // // //   ["/work/ecorfy/samples/ecorfy-outdated-software.jpg", "Struggling With Outdated Software?", "Ecorfy", "Social banner"],
// // // //   ["/work/ecorfy/samples/ecorfy-software-solutions.jpg", "Software Development Solutions", "Ecorfy", "Social banner"],
// // // //   ["/work/ecorfy/samples/ecorfy-genai-ml.jpg", "Generative AI & ML", "Ecorfy", "Social banner"],
// // // //   ["/work/ecorfy/samples/ecorfy-it-professionals-day.jpg", "National IT Professionals Day", "Ecorfy", "Awareness day creative"],
// // // // ];

// // // // const testimonials = [
// // // //   ["Ravindra Raju", "Founder & Owner · Shrestha Pickles", "Working with Aditya has been a great experience. He efficiently manages our website, handles updates whenever needed, and supports our business operations and maintaining accurate records. His professionalism and dedication make him a dependable partner for our business."],
// // // //   ["Ujeetha Yasaswi (Branch Manager)", "Manager · Yamaha Motors", "During his tenure as Assistant Manager, Aditya demonstrated strong leadership, organizational, and customer service skills. He efficiently managed billing and invoice processing, coordinated daily operations, handled customer service concerns, and ensured smooth communication between customers and service teams. His professionalism, problem-solving abilities, and commitment to delivering excellent customer experiences made him a valuable asset to our organization."],
// // // //   ["Sitarama Raju", "CEO · Innovare Labs", "Aditya played an important role in supporting our digital marketing and promotional activities. His contributions to website development, content management, and conference promotions helped strengthen our brand presence within the aquaculture industry. He consistently demonstrated professionalism, creativity, and a strong commitment to delivering quality work."],
// // // //   ["Varma Bhupathiraju", "CEO · C-STAR Global Inc", "Aditya was an integral part of our marketing and digital presence. He managed our website, supported design updates, created marketing content, and played a key role in promoting our international conferences. His ability to combine creativity, technical skills, and marketing expertise helped strengthen our brand and effectively engage our target audience."],
// // // //   ["Swathi Gurijala", "HR Manager · Ecorfy Technologies Pvt Ltd", "Aditya successfully developed and maintained our company website, ensuring it remained professional, user-friendly, and up to date. He consistently delivered high-quality work, met project deadlines, and demonstrated a strong commitment to supporting our business goals. His professionalism, problem-solving abilities, and attention to detail made him a valuable member of our team."],
// // // // ];

// // // // const roles = ["Websites", "SEO", "Content", "Creative", "Events"];
// // // // const navLinks = [["About", "about"], ["Experience", "experience"], ["Work", "work"], ["Skills", "skills"], ["Testimonials", "testimonials"], ["Contact", "contact"]];
// // // // const totalSkills = skillGroups.reduce((a, g) => a + g.items.length, 0);

// // // // /* ------------------------------------------------------------------ */
// // // // /* GLOBAL CSS (self-contained — no globals.css dependency)             */
// // // // /* ------------------------------------------------------------------ */

// // // // const CSS = `
// // // // .av-blob{position:fixed;border-radius:9999px;filter:blur(110px);will-change:transform;pointer-events:none}
// // // // @keyframes av-drift-a{0%,100%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(14vw,9vh,0) scale(1.25)}}
// // // // @keyframes av-drift-b{0%,100%{transform:translate3d(0,0,0) scale(1.1)}50%{transform:translate3d(-12vw,-8vh,0) scale(.9)}}
// // // // @keyframes av-drift-c{0%,100%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(-8vw,12vh,0) scale(1.2)}}
// // // // .av-a{animation:av-drift-a 26s ease-in-out infinite}
// // // // .av-b{animation:av-drift-b 32s ease-in-out infinite}
// // // // .av-c{animation:av-drift-c 38s ease-in-out infinite}
// // // // .av-grain{background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");opacity:.07;mix-blend-mode:overlay}
// // // // @keyframes av-spin{to{transform:rotate(360deg)}}
// // // // .av-spin{animation:av-spin 48s linear infinite}
// // // // .av-spin-rev{animation:av-spin 48s linear infinite reverse}
// // // // .av-spin-slow{animation:av-spin 90s linear infinite reverse}
// // // // @keyframes av-pulse{0%,100%{opacity:.55;transform:scale(1)}50%{opacity:.95;transform:scale(1.08)}}
// // // // .av-pulse{animation:av-pulse 6s ease-in-out infinite}
// // // // @keyframes av-shine{0%{background-position:0% 50%}100%{background-position:200% 50%}}
// // // // .av-shine{background-size:200% 100%;animation:av-shine 7s linear infinite}
// // // // @keyframes av-marq{to{transform:translateX(-50%)}}
// // // // .av-marq{display:flex;width:max-content;animation:av-marq 48s linear infinite}
// // // // .av-marq-rev{animation-direction:reverse;animation-duration:56s}
// // // // .av-pausable:hover .av-marq{animation-play-state:paused}
// // // // .av-spot{position:relative}
// // // // .av-spot::before{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;opacity:0;transition:opacity .4s;background:radial-gradient(420px circle at var(--mx,50%) var(--my,50%),rgba(16,185,129,.16),transparent 45%)}
// // // // .av-spot::after{content:"";position:absolute;inset:0;border-radius:inherit;padding:1px;pointer-events:none;opacity:0;transition:opacity .4s;background:radial-gradient(320px circle at var(--mx,50%) var(--my,50%),rgba(110,231,183,.75),transparent 45%);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#000 0 0) content-box exclude,linear-gradient(#000 0 0)}
// // // // .av-spot:hover::before,.av-spot:hover::after{opacity:1}
// // // // .av-outline{-webkit-text-stroke:1px rgba(255,255,255,.22);color:transparent}
// // // // html{scroll-behavior:smooth}
// // // // @media (prefers-reduced-motion:reduce){.av-a,.av-b,.av-c,.av-spin,.av-spin-rev,.av-spin-slow,.av-pulse,.av-shine,.av-marq{animation:none!important}html{scroll-behavior:auto}}
// // // // `;

// // // // /* ------------------------------------------------------------------ */
// // // // /* BACKGROUND                                                          */
// // // // /* ------------------------------------------------------------------ */

// // // // function ParticleField() {
// // // //   const ref = useRef<HTMLCanvasElement>(null);
// // // //   useEffect(() => {
// // // //     const canvas = ref.current;
// // // //     if (!canvas) return;
// // // //     const ctx = canvas.getContext("2d");
// // // //     if (!ctx) return;
// // // //     const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
// // // //     const dpr = Math.min(window.devicePixelRatio || 1, 2);
// // // //     const mouse = { x: -9999, y: -9999 };
// // // //     type P = { x: number; y: number; vx: number; vy: number; r: number };
// // // //     let ps: P[] = [];
// // // //     let w = 0, h = 0, raf = 0;

// // // //     const init = () => {
// // // //       w = window.innerWidth; h = window.innerHeight;
// // // //       canvas.width = w * dpr; canvas.height = h * dpr;
// // // //       canvas.style.width = `${w}px`; canvas.style.height = `${h}px`;
// // // //       ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
// // // //       const n = Math.min(w < 768 ? 45 : 105, Math.floor((w * h) / 15000));
// // // //       ps = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.28, vy: (Math.random() - 0.5) * 0.28, r: Math.random() * 1.4 + 0.5 }));
// // // //     };

// // // //     const frame = () => {
// // // //       ctx.clearRect(0, 0, w, h);
// // // //       for (let i = 0; i < ps.length; i++) {
// // // //         const p = ps[i];
// // // //         if (!reduce) {
// // // //           p.x += p.vx; p.y += p.vy;
// // // //           if (p.x < -10) p.x = w + 10; else if (p.x > w + 10) p.x = -10;
// // // //           if (p.y < -10) p.y = h + 10; else if (p.y > h + 10) p.y = -10;
// // // //         }
// // // //         const mdx = p.x - mouse.x, mdy = p.y - mouse.y;
// // // //         const md = Math.hypot(mdx, mdy);
// // // //         if (md < 180) {
// // // //           ctx.strokeStyle = `rgba(110,231,183,${(1 - md / 180) * 0.55})`;
// // // //           ctx.lineWidth = 0.8;
// // // //           ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
// // // //           if (!reduce) { p.x += (mdx / md) * 0.35; p.y += (mdy / md) * 0.35; }
// // // //         }
// // // //         for (let j = i + 1; j < ps.length; j++) {
// // // //           const q = ps[j];
// // // //           const d = Math.hypot(p.x - q.x, p.y - q.y);
// // // //           if (d < 125) {
// // // //             ctx.strokeStyle = `rgba(16,185,129,${(1 - d / 125) * 0.28})`;
// // // //             ctx.lineWidth = 0.6;
// // // //             ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
// // // //           }
// // // //         }
// // // //         ctx.fillStyle = "rgba(209,250,229,.75)";
// // // //         ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
// // // //       }
// // // //       if (!reduce) raf = requestAnimationFrame(frame);
// // // //     };

// // // //     const onMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
// // // //     const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };
// // // //     const onResize = () => { init(); if (reduce) frame(); };
// // // //     const onVis = () => { if (document.hidden) cancelAnimationFrame(raf); else if (!reduce) raf = requestAnimationFrame(frame); };

// // // //     init(); frame();
// // // //     window.addEventListener("mousemove", onMove, { passive: true });
// // // //     window.addEventListener("mouseleave", onLeave);
// // // //     window.addEventListener("resize", onResize);
// // // //     document.addEventListener("visibilitychange", onVis);
// // // //     return () => {
// // // //       cancelAnimationFrame(raf);
// // // //       window.removeEventListener("mousemove", onMove);
// // // //       window.removeEventListener("mouseleave", onLeave);
// // // //       window.removeEventListener("resize", onResize);
// // // //       document.removeEventListener("visibilitychange", onVis);
// // // //     };
// // // //   }, []);
// // // //   return <canvas ref={ref} aria-hidden className="fixed inset-0 z-[1] pointer-events-none" />;
// // // // }

// // // // function CursorGlow() {
// // // //   const mx = useMotionValue(-600);
// // // //   const my = useMotionValue(-600);
// // // //   const sx = useSpring(mx, { stiffness: 90, damping: 20, mass: 0.6 });
// // // //   const sy = useSpring(my, { stiffness: 90, damping: 20, mass: 0.6 });
// // // //   const x = useTransform(sx, v => v - 280);
// // // //   const y = useTransform(sy, v => v - 280);
// // // //   useEffect(() => {
// // // //     const move = (e: MouseEvent) => { mx.set(e.clientX); my.set(e.clientY); };
// // // //     window.addEventListener("mousemove", move, { passive: true });
// // // //     return () => window.removeEventListener("mousemove", move);
// // // //   }, [mx, my]);
// // // //   return <motion.div aria-hidden style={{ x, y }} className="pointer-events-none fixed left-0 top-0 z-[2] hidden h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,.17),transparent_62%)] lg:block" />;
// // // // }

// // // // function Backdrop() {
// // // //   return <div aria-hidden className="pointer-events-none fixed inset-0 z-0 bg-[#04100d]">
// // // //     <div className="av-blob av-a -left-[10vw] -top-[12vh] h-[55vw] w-[55vw] max-h-[760px] max-w-[760px] bg-emerald-700/35" />
// // // //     <div className="av-blob av-b -right-[8vw] top-[18vh] h-[48vw] w-[48vw] max-h-[680px] max-w-[680px] bg-cyan-500/20" />
// // // //     <div className="av-blob av-c bottom-[-18vh] left-[22vw] h-[50vw] w-[50vw] max-h-[700px] max-w-[700px] bg-teal-600/20" />
// // // //     <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_72%)]" />
// // // //     <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(7,6,13,.85)_100%)]" />
// // // //   </div>;
// // // // }

// // // // /* ------------------------------------------------------------------ */
// // // // /* PRIMITIVES                                                          */
// // // // /* ------------------------------------------------------------------ */

// // // // function ScrollProgress() {
// // // //   const { scrollYProgress } = useScroll();
// // // //   const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.3 });
// // // //   return <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-300" />;
// // // // }

// // // // function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
// // // //   const reduce = useReducedMotion();
// // // //   return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 36, filter: "blur(10px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.85, delay, ease: EASE }}>{children}</motion.div>;
// // // // }

// // // // function SpotCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
// // // //   const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
// // // //     const r = e.currentTarget.getBoundingClientRect();
// // // //     e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
// // // //     e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
// // // //   };
// // // //   return <div onMouseMove={onMove} className={`av-spot ${className}`}>{children}</div>;
// // // // }

// // // // function Tilt({ children, className = "" }: { children: React.ReactNode; className?: string }) {
// // // //   const reduce = useReducedMotion();
// // // //   const ref = useRef<HTMLDivElement>(null);
// // // //   const px = useMotionValue(0);
// // // //   const py = useMotionValue(0);
// // // //   const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [5, -5]), { stiffness: 200, damping: 20 });
// // // //   const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-5, 5]), { stiffness: 200, damping: 20 });
// // // //   const onMove = (e: React.MouseEvent) => {
// // // //     if (reduce || !ref.current) return;
// // // //     const r = ref.current.getBoundingClientRect();
// // // //     px.set((e.clientX - r.left) / r.width - 0.5);
// // // //     py.set((e.clientY - r.top) / r.height - 0.5);
// // // //   };
// // // //   return <motion.div ref={ref} onMouseMove={onMove} onMouseLeave={() => { px.set(0); py.set(0); }} style={{ rotateX, rotateY, transformPerspective: 1100 }} className={className}>{children}</motion.div>;
// // // // }

// // // // function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
// // // //   const ref = useRef<HTMLSpanElement>(null);
// // // //   const inView = useInView(ref, { once: true });
// // // //   const reduce = useReducedMotion();
// // // //   const [v, setV] = useState(0);
// // // //   useEffect(() => {
// // // //     if (!inView) return;
// // // //     if (reduce) { setV(to); return; }
// // // //     const c = animate(0, to, { duration: 1.6, ease: EASE, onUpdate: x => setV(Math.round(x)) });
// // // //     return () => c.stop();
// // // //   }, [inView, to, reduce]);
// // // //   return <span ref={ref}>{String(v).padStart(2, "0")}{suffix}</span>;
// // // // }

// // // // function SectionHead({ n, kicker, children, sub }: { n: string; kicker: string; children: React.ReactNode; sub?: string }) {
// // // //   return <Reveal>
// // // //     <div className="flex items-center gap-4">
// // // //       <span className="av-outline font-mono text-5xl font-semibold leading-none sm:text-6xl">{n}</span>
// // // //       <span className="h-px w-12 bg-gradient-to-r from-emerald-400/70 to-transparent" />
// // // //       <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">{kicker}</span>
// // // //     </div>
// // // //     <div className="mt-7 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
// // // //       <h2 className="max-w-4xl text-[clamp(44px,6.6vw,92px)] font-semibold leading-[.9] tracking-[-.06em] text-white">{children}</h2>
// // // //       {sub && <p className="max-w-sm text-sm leading-7 text-zinc-400">{sub}</p>}
// // // //     </div>
// // // //   </Reveal>;
// // // // }

// // // // const Grad = ({ children }: { children: React.ReactNode }) => <span className="av-shine bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">{children}</span>;

// // // // /* ------------------------------------------------------------------ */
// // // // /* HERO                                                                */
// // // // /* ------------------------------------------------------------------ */

// // // // function RotatingWord() {
// // // //   const [i, setI] = useState(0);
// // // //   useEffect(() => { const t = setInterval(() => setI(x => (x + 1) % roles.length), 2200); return () => clearInterval(t); }, []);
// // // //   return <span className="relative inline-flex h-[1.4em] min-w-[7.5ch] items-center overflow-hidden align-bottom">
// // // //     <AnimatePresence mode="wait">
// // // //       <motion.span key={roles[i]} initial={{ y: "100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-100%", opacity: 0 }} transition={{ duration: 0.45, ease: EASE }} className="absolute left-0 font-semibold text-white">{roles[i]}</motion.span>
// // // //     </AnimatePresence>
// // // //   </span>;
// // // // }

// // // // function WordReveal({ text, delay = 0, grad = false }: { text: string; delay?: number; grad?: boolean }) {
// // // //   const reduce = useReducedMotion();
// // // //   return <>{text.split(" ").map((w, i) => <span key={`${w}-${i}`} className="inline-block overflow-hidden pb-[.16em] -mb-[.16em] align-bottom"><motion.span className="inline-block" initial={reduce ? false : { y: "115%", rotate: 5 }} animate={{ y: 0, rotate: 0 }} transition={{ duration: 1, delay: delay + i * 0.09, ease: EASE }}>{grad ? <Grad>{w}</Grad> : w}&nbsp;</motion.span></span>)}</>;
// // // // }

// // // // function Orbit() {
// // // //   const chips: [string, string, number][] = [["SEO", "01", 0], ["CONTENT", "02", 90], ["CREATIVE", "03", 180], ["EXECUTE", "04", 270]];
// // // //   return <div className="relative mx-auto aspect-square w-full max-w-[480px]">
// // // //     <div className="av-pulse absolute inset-[16%] rounded-full bg-emerald-600/35 blur-3xl" />
// // // //     <div className="av-pulse absolute inset-[30%] rounded-full bg-cyan-400/20 blur-3xl [animation-delay:-3s]" />
// // // //     <div className="av-spin absolute inset-[3%] rounded-full border border-white/10">
// // // //       {chips.map(([label, n, deg]) => <div key={label} className="absolute inset-0" style={{ transform: `rotate(${deg}deg)` }}>
// // // //         <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
// // // //           <div style={{ transform: `rotate(${-deg}deg)` }}><div className="av-spin-rev">
// // // //             <div className="whitespace-nowrap rounded-xl border border-white/15 bg-white/[.08] px-3 py-2 font-mono text-[10px] text-white shadow-[0_10px_40px_rgba(16,185,129,.25)] backdrop-blur-md"><span className="mr-2 text-emerald-300">{n}</span>{label}</div>
// // // //           </div></div>
// // // //         </div>
// // // //       </div>)}
// // // //     </div>
// // // //     <div className="av-spin-slow absolute inset-[20%] rounded-full border border-dashed border-emerald-300/25">
// // // //       <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,.9)]" />
// // // //       <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-teal-300 shadow-[0_0_14px_rgba(94,234,212,.9)]" />
// // // //     </div>
// // // //     <div className="absolute inset-[35%] grid place-items-center rounded-full border border-white/20 bg-[radial-gradient(circle_at_30%_25%,rgba(52,211,153,.55),rgba(24,16,48,.95)_62%)] text-center shadow-[0_0_80px_rgba(16,185,129,.45),inset_0_0_30px_rgba(255,255,255,.08)]">
// // // //       <div><p className="font-mono text-[7px] uppercase tracking-[.2em] text-emerald-200/80 sm:text-[8px]">Digital workflow</p><strong className="mt-2 block text-xl font-semibold leading-[.95] tracking-[-.05em] text-white sm:text-2xl">IDEA<br />TO<br /><Grad>IMPACT.</Grad></strong></div>
// // // //     </div>
// // // //   </div>;
// // // // }

// // // // function Hero() {
// // // //   const reduce = useReducedMotion();
// // // //   const { scrollY } = useScroll();
// // // //   const textY = useTransform(scrollY, [0, 700], [0, 70]);
// // // //   const orbY = useTransform(scrollY, [0, 700], [0, 130]);
// // // //   const fade = useTransform(scrollY, [0, 600], [1, 0.25]);
// // // //   const stats: [number, string, string][] = [[2, "Years hands-on", "+"], [projects.length, "Featured projects", ""], [experience.length, "Companies", ""], [totalSkills, "Skills & tools", ""]];
// // // //   return <section id="home" className="relative flex min-h-screen flex-col justify-center pb-16 pt-32 sm:pt-36">
// // // //     <div className="mx-auto grid w-[min(1240px,calc(100%-32px))] items-center gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-8">
// // // //       <motion.div style={{ y: reduce ? 0 : textY, opacity: reduce ? 1 : fade }}>
// // // //         <motion.div initial={reduce ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }} className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[.05] px-4 py-2 font-mono text-[10px] uppercase tracking-[.16em] text-zinc-300 backdrop-blur-md">
// // // //           <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" /></span>
// // // //           Available for projects
// // // //         </motion.div>
// // // //         <h1 className="mt-8 max-w-5xl text-[clamp(54px,8.4vw,122px)] font-semibold leading-[.86] tracking-[-.07em] text-white">
// // // //           <WordReveal text="I make digital work" delay={0.15} />
// // // //           <WordReveal text="worth noticing." delay={0.55} grad />
// // // //         </h1>
// // // //         <motion.p initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1, ease: EASE }} className="mt-8 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">Digital Marketing Executive working across websites, SEO, social media, content development, creative production and event communication.</motion.p>
// // // //         <motion.div initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.1, ease: EASE }} className="mt-6 flex items-center gap-3 text-lg text-zinc-500 sm:text-xl">Specialising in <RotatingWord /></motion.div>
// // // //         <motion.div initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.2, ease: EASE }} className="mt-9 flex flex-wrap items-center gap-3">
// // // //           <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} href="#work" className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-xs font-bold text-zinc-950 shadow-[0_0_50px_rgba(52,211,153,.35)] transition hover:bg-emerald-200">Explore real projects <ArrowRight size={14} className="transition group-hover:translate-x-1" /></motion.a>
// // // //           <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}><Link href="/work-samples" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.05] px-6 py-3.5 text-xs font-bold text-white backdrop-blur-md transition hover:border-white/40">Open work archive <ArrowRight size={14} /></Link></motion.div>
// // // //         </motion.div>
// // // //       </motion.div>
// // // //       <motion.div style={{ y: reduce ? 0 : orbY }} initial={reduce ? false : { opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.4, ease: EASE }}><Orbit /></motion.div>
// // // //     </div>
// // // //     <motion.div initial={reduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 1.4, ease: EASE }} className="mx-auto mt-16 w-[min(1240px,calc(100%-32px))]">
// // // //       <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl md:grid-cols-4">
// // // //         {stats.map(([n, label, suffix]) => <div key={label} className="bg-[#071612]/80 px-6 py-6"><div className="text-4xl font-semibold tracking-[-.05em] text-white sm:text-5xl"><CountUp to={n} suffix={suffix} /></div><p className="mt-2 font-mono text-[9px] uppercase tracking-[.16em] text-zinc-500">{label}</p></div>)}
// // // //       </div>
// // // //     </motion.div>
// // // //     <a href="#about" aria-label="Scroll to about" className="mx-auto mt-10 hidden items-center gap-2 font-mono text-[9px] uppercase tracking-[.18em] text-zinc-500 sm:flex">Scroll to explore <motion.span animate={reduce ? undefined : { y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}><ArrowDown size={13} /></motion.span></a>
// // // //   </section>;
// // // // }

// // // // /* ------------------------------------------------------------------ */
// // // // /* SECTIONS                                                            */
// // // // /* ------------------------------------------------------------------ */

// // // // function About() {
// // // //   const range = ["Websites", "SEO", "Social", "Content", "Creative", "Events", "Publishing", "Automation"];
// // // //   return <section id="about" className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // //     <SectionHead n="01" kicker="About me">I work where <Grad>marketing, content and execution</Grad> meet.</SectionHead>
// // // //     <div className="mt-14 grid gap-5 lg:grid-cols-[1.25fr_.75fr]">
// // // //       <Reveal><SpotCard className="h-full rounded-[28px] border border-white/10 bg-white/[.03] p-8 backdrop-blur-xl sm:p-10"><p className="text-xl leading-8 tracking-[-.02em] text-zinc-300 sm:text-2xl sm:leading-10">I enjoy taking a raw idea, messy information or business requirement and turning it into something structured, visual, useful and ready to publish — whether that is a website, campaign, social post, blog, conference asset or digital workflow.</p></SpotCard></Reveal>
// // // //       <Reveal delay={0.1}><SpotCard className="h-full rounded-[28px] border border-white/10 bg-white/[.03] p-6 backdrop-blur-xl"><p className="font-mono text-[9px] uppercase tracking-[.16em] text-zinc-500">My working range</p>
// // // //         <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }} className="mt-6 grid grid-cols-2 gap-2">{range.map((x, i) => <motion.span key={x} variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } } }} whileHover={{ y: -2 }} className="rounded-xl border border-white/10 bg-white/[.04] px-3 py-3 text-[10px] font-bold text-zinc-300 transition-colors hover:border-emerald-400/50 hover:text-white"><span className="mr-1.5 text-emerald-400">0{i + 1}</span>{x}</motion.span>)}</motion.div>
// // // //       </SpotCard></Reveal>
// // // //     </div>
// // // //   </div></section>;
// // // // }

// // // // function Experience() {
// // // //   const ref = useRef<HTMLDivElement>(null);
// // // //   const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
// // // //   const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 26 });
// // // //   return <section id="experience" className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // //     <SectionHead n="02" kicker="Career timeline" sub="Six roles across digital marketing, content, software and cloud engineering, CAD design and service operations.">Where I’ve worked. <Grad>What I’ve done.</Grad></SectionHead>
// // // //     <div ref={ref} className="relative mt-16 space-y-8">
// // // //       <div className="absolute bottom-0 left-[7px] top-0 w-px bg-white/10 md:left-[187px]" />
// // // //       <motion.div style={{ scaleY }} className="absolute bottom-0 left-[7px] top-0 w-px origin-top bg-gradient-to-b from-emerald-400 via-teal-300 to-cyan-300 shadow-[0_0_12px_rgba(52,211,153,.8)] md:left-[187px]" />
// // // //       {experience.map((job, i) => <Reveal key={job.company} delay={0.05}>
// // // //         <div className="relative grid gap-5 pl-9 md:grid-cols-[180px_1fr] md:gap-14 md:pl-0">
// // // //           <span className={`absolute left-0 top-8 h-[15px] w-[15px] rounded-full border-2 bg-[#04100d] md:left-[180px] ${job.current ? "border-cyan-300 shadow-[0_0_16px_rgba(103,232,249,.9)]" : "border-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.6)]"}`} />
// // // //           <div className="md:pt-7 md:text-right"><p className="font-mono text-[10px] uppercase tracking-[.14em] text-emerald-300">0{i + 1} / Experience</p><p className="mt-2 font-mono text-[10px] uppercase leading-5 tracking-[.08em] text-zinc-500">{job.dates}<br />{job.location}</p>{"type" in job && job.type && <span className="mt-3 inline-block rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 font-mono text-[8px] uppercase tracking-[.12em] text-amber-200">{job.type}</span>}{job.current && <span className="mt-3 inline-block rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 font-mono text-[8px] uppercase tracking-[.12em] text-cyan-200">Present</span>}</div>
// // // //           <Tilt><SpotCard className="rounded-[26px] border border-white/10 bg-white/[.035] p-6 backdrop-blur-xl sm:p-8">
// // // //             <div className="flex items-start gap-4"><div className="relative h-12 w-20 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white sm:w-24"><Image src={job.logo} alt={`${job.company} logo`} fill sizes="96px" className="object-contain p-1.5" /></div><div><h3 className="text-xl font-semibold tracking-[-.03em] text-white sm:text-2xl">{job.role}</h3><a href={job.href ?? "#"} target={job.href ? "_blank" : undefined} rel={job.href ? "noreferrer" : undefined} className="mt-1 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300 transition hover:text-white">{job.company}{job.href && <ExternalLink size={11} />}</a></div></div>
// // // //             <p className="mt-6 text-sm leading-7 text-zinc-400">{job.description}</p>
// // // //             <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-5">{job.points.map(p => <li key={p} className="flex gap-3 text-xs leading-6 text-zinc-300"><span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-emerald-400" />{p}</li>)}</ul>
// // // //             <div className="mt-6 flex flex-wrap gap-2">{job.tags.map(t => <span key={t} className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[9px] font-semibold text-emerald-200">{t}</span>)}</div>
// // // //           </SpotCard></Tilt>
// // // //         </div>
// // // //       </Reveal>)}
// // // //     </div>
// // // //   </div></section>;
// // // // }

// // // // function Work() {
// // // //   return <section id="work" className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // //     <SectionHead n="03" kicker="Selected work" sub="A selection of websites and digital experiences across aquaculture, conferences, technology and consumer brands.">Real projects. <Grad>Clear outcomes.</Grad></SectionHead>
// // // //     <div className="mt-6"><Link href="/work-samples" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.05] px-5 py-2.5 text-xs font-bold text-white backdrop-blur-md transition hover:border-emerald-400/60">Explore all work <ArrowRight size={14} /></Link></div>
// // // //     <div className="mt-14 space-y-8">
// // // //       {projects.map((project, i) => <Reveal key={project.id}>
// // // //         <SpotCard className="group relative rounded-[32px] border border-white/10 bg-white/[.03] p-4 backdrop-blur-xl sm:p-6">
// // // //           <div className={`pointer-events-none absolute -z-10 h-72 w-72 rounded-full blur-[100px] ${project.glow} ${i % 2 ? "-left-10 top-10" : "-right-10 top-10"}`} />
// // // //           <div className={`grid items-center gap-8 ${i % 2 ? "lg:grid-cols-[.9fr_1.1fr]" : "lg:grid-cols-[1.1fr_.9fr]"}`}>
// // // //             <div className={i % 2 ? "lg:order-2" : ""}>
// // // //               <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-[0_30px_80px_rgba(0,0,0,.5)]">
// // // //                 <div className="flex items-center gap-2 border-b border-white/10 bg-zinc-900 px-4 py-3"><span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" /><span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" /><span className="ml-3 truncate rounded-md bg-white/5 px-3 py-1 font-mono text-[9px] text-zinc-500">{project.link ? project.link.replace("https://", "") : project.company}</span></div>
// // // //                 <div className="flex h-[240px] items-center justify-center overflow-hidden bg-[#f4f4f5] sm:h-[330px]"><Image src={project.image} alt={`${project.company} website preview`} width={1100} height={760} className="h-full w-full object-contain object-center transition duration-700 ease-out group-hover:scale-[1.04]" /></div>
// // // //               </div>
// // // //             </div>
// // // //             <div className="px-2 pb-2 lg:px-6">
// // // //               <div className="flex items-center gap-3"><span className="av-outline font-mono text-4xl font-semibold">{project.id}</span><span className="rounded-full border border-white/10 bg-white/[.05] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[.12em] text-zinc-400">{project.label}</span></div>
// // // //               <p className="mt-6 font-mono text-[10px] uppercase tracking-[.16em] text-emerald-300">{project.company}</p>
// // // //               <h3 className="mt-3 text-3xl font-semibold leading-[1.05] tracking-[-.045em] text-white sm:text-4xl">{project.title}</h3>
// // // //               <p className="mt-4 text-sm leading-7 text-zinc-400">{project.description}</p>
// // // //               <div className="mt-7 flex flex-wrap gap-2.5"><Link href={`/work/${project.slug}`} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold text-zinc-950 transition hover:bg-emerald-200">View project <ArrowRight size={13} /></Link>{project.link && <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-xs font-bold text-white transition hover:border-white/50">Live website <ExternalLink size={13} /></a>}</div>
// // // //             </div>
// // // //           </div>
// // // //         </SpotCard>
// // // //       </Reveal>)}
// // // //     </div>
// // // //   </div></section>;
// // // // }

// // // // function ArchivePreview() {
// // // //   const half = Math.ceil(archive.length / 2);
// // // //   const rowOne = archive.slice(0, half);
// // // //   const rowTwo = archive.slice(half);
// // // //   const tile = ([src, title, company, format]: string[], key: string) => <Link href="/work-samples" key={key} className="group mr-4 w-[220px] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[.04] backdrop-blur-md transition hover:-translate-y-1 hover:border-emerald-400/50 sm:w-[260px]"><div className="flex h-[150px] items-center justify-center overflow-hidden bg-[#f2f1ef] p-3 sm:h-[180px] sm:p-4"><Image src={src} alt={title} width={520} height={420} className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.05]" /></div><div className="px-4 py-3"><p className="truncate font-mono text-[8px] uppercase tracking-[.1em] text-zinc-500">{company} · {format}</p><h3 className="mt-1.5 truncate text-xs font-bold text-zinc-100">{title}</h3></div></Link>;
// // // //   const row = (items: string[][], prefix: string) => [...items, ...items].map((it, i) => tile(it, `${prefix}-${i}`));
// // // //   return <section className="relative overflow-hidden py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // //     <SectionHead n="04" kicker="Creative archive" sub="Banners, carousel templates, event graphics and publications — moving gently so you can browse the range at a glance.">A closer look at <Grad>the creative work.</Grad></SectionHead>
// // // //     <div className="mt-6"><Link href="/work-samples" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold text-zinc-950 transition hover:bg-emerald-200">View all samples <ArrowRight size={14} /></Link></div>
// // // //   </div>
// // // //     <div className="av-pausable relative mt-12 space-y-4">
// // // //       <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#04100d] to-transparent sm:w-40" />
// // // //       <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#04100d] to-transparent sm:w-40" />
// // // //       <div className="av-marq">{row(rowOne, "a")}</div>
// // // //       <div className="av-marq av-marq-rev">{row(rowTwo, "b")}</div>
// // // //     </div>
// // // //     <p className="mt-7 text-center text-[10px] text-zinc-500">Hover to pause · Select any sample to open the complete archive</p>
// // // //   </section>;
// // // // }

// // // // function Skills() {
// // // //   return <section id="skills" className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // //     <SectionHead n="05" kicker="Skills & tools" sub="A straightforward overview of the marketing disciplines, measurement tools, creative apps and publishing platforms I work with.">The skills behind <Grad>the work.</Grad></SectionHead>
// // // //     <div className="mt-14 grid gap-5 lg:grid-cols-3">
// // // //       {skillGroups.map((group, gi) => <Reveal key={group.title} delay={gi * 0.08}><SpotCard className="h-full rounded-[28px] border border-white/10 bg-white/[.03] p-6 backdrop-blur-xl sm:p-7">
// // // //         <div className="flex items-end justify-between border-b border-white/10 pb-4"><h3 className="text-lg font-semibold tracking-[-.03em] text-white">{group.title}</h3><span className="font-mono text-[9px] uppercase tracking-[.14em] text-zinc-500">{String(group.items.length).padStart(2, "0")} items</span></div>
// // // //         <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03 } } }} className="mt-5 flex flex-wrap gap-2">{group.items.map(item => <motion.span key={item} variants={{ hidden: { opacity: 0, y: 12, scale: 0.94 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: EASE } } }} whileHover={{ y: -2 }} className="cursor-default rounded-full border border-white/10 bg-white/[.04] px-3.5 py-2 text-xs font-medium text-zinc-300 transition-colors hover:border-emerald-400/60 hover:bg-emerald-400/10 hover:text-white">{item}</motion.span>)}</motion.div>
// // // //       </SpotCard></Reveal>)}
// // // //     </div>
// // // //   </div></section>;
// // // // }

// // // // function Process() {
// // // //   const steps = [["01", "Understand", "Goal · audience · message"], ["02", "Structure", "Content · information · flow"], ["03", "Create", "Design · video · visual system"], ["04", "Execute", "Publish · schedule · maintain"]];
// // // //   return <section className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // //     <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-emerald-600/30 via-[#0a1f1b] to-cyan-500/10 p-8 backdrop-blur-xl sm:p-14">
// // // //       <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_75%)]" />
// // // //       <div className="relative"><SectionHead n="06" kicker="How I work">From brief to <Grad>publish-ready.</Grad></SectionHead>
// // // //         <div className="relative mt-14 grid gap-3 md:grid-cols-4">
// // // //           <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 1.5, ease: EASE }} className="pointer-events-none absolute left-[10%] right-[10%] top-[46px] hidden h-px origin-left bg-gradient-to-r from-emerald-300/60 via-teal-300/60 to-cyan-300/60 md:block" />
// // // //           {steps.map(([n, title, desc], i) => <Reveal key={n} delay={i * 0.1}><motion.article whileHover={{ y: -6 }} transition={{ duration: 0.3, ease: EASE }} className="h-full rounded-[24px] border border-white/10 bg-white/[.05] p-6 backdrop-blur-xl transition-colors hover:bg-white/[.09]"><span className="grid h-10 w-10 place-items-center rounded-full border border-emerald-300/40 bg-[#0a1f1b] font-mono text-[10px] text-emerald-200 shadow-[0_0_20px_rgba(52,211,153,.4)]">{n}</span><h3 className="mt-12 text-2xl font-semibold tracking-[-.04em] text-white">{title}</h3><p className="mt-2 text-xs leading-5 text-zinc-400">{desc}</p></motion.article></Reveal>)}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   </div></section>;
// // // // }

// // // // function Insights() {
// // // //   return <section id="insights" className="relative py-28 sm:py-36"><div className="mx-auto grid w-[min(1240px,calc(100%-32px))] items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
// // // //     <Reveal><div className="flex items-center gap-4"><span className="av-outline font-mono text-5xl font-semibold leading-none sm:text-6xl">07</span><span className="h-px w-12 bg-gradient-to-r from-emerald-400/70 to-transparent" /><span className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">Insights · publishing</span></div>
// // // //       <h2 className="mt-7 text-[clamp(42px,6vw,88px)] font-semibold leading-[.92] tracking-[-.06em] text-white">Content is not decoration. <Grad>It is part of the product.</Grad></h2>
// // // //       <p className="mt-7 max-w-xl text-sm leading-7 text-zinc-400">The portfolio can keep expanding with published articles, SEO work, case studies and content projects as more source material is added.</p></Reveal>
// // // //     <Reveal delay={0.1}><Tilt><SpotCard className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[.04] p-3 shadow-[0_40px_100px_rgba(0,0,0,.5)] backdrop-blur-xl"><Image src="/work/innovare/blog.png" alt="Innovare blog publishing preview" width={900} height={650} className="h-[360px] w-full rounded-[24px] object-cover object-top" /><div className="p-4"><p className="font-mono text-[8px] uppercase tracking-[.14em] text-zinc-500">SEO · Content · Publishing</p><h3 className="mt-2 text-lg font-semibold text-white">Technical content presented as a usable digital experience.</h3></div></SpotCard></Tilt></Reveal>
// // // //   </div></section>;
// // // // }

// // // // function Testimonials() {
// // // //   return <section id="testimonials" className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // //     <SectionHead n="08" kicker="Testimonials">Good work should be <Grad>remembered.</Grad></SectionHead>
// // // //     <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
// // // //       {testimonials.map(([name, role, quote], i) => <Reveal key={name} delay={(i % 3) * 0.1} className={i < 3 ? "lg:col-span-2" : "lg:col-span-3"}><SpotCard className="h-full rounded-[28px] border border-white/10 bg-white/[.035] p-7 backdrop-blur-xl sm:p-8">
// // // //         <Quote className="text-emerald-400" size={28} />
// // // //         <div className="mt-6 text-sm tracking-[.2em] text-amber-300">★★★★★</div>
// // // //         <p className="mt-5 text-[15px] leading-7 tracking-[-.01em] text-zinc-200 sm:text-base sm:leading-8">“{quote}”</p>
// // // //         <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-emerald-500 to-cyan-400 text-sm font-bold text-white">{name[0]}</span><div><b className="block text-sm text-white">{name}</b><span className="mt-0.5 block text-[10px] text-zinc-500">{role}</span></div></div>
// // // //       </SpotCard></Reveal>)}
// // // //     </div>
// // // //   </div></section>;
// // // // }

// // // // function Contact() {
// // // //   return <section id="contact" className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // // //     <Reveal><div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[.03] p-8 backdrop-blur-xl sm:p-14">
// // // //       <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-emerald-600/30 blur-[110px]" />
// // // //       <div className="pointer-events-none absolute -bottom-24 left-10 h-80 w-80 rounded-full bg-cyan-500/15 blur-[110px]" />
// // // //       <div className="relative flex items-center gap-4"><span className="av-outline font-mono text-5xl font-semibold leading-none sm:text-6xl">09</span><span className="h-px w-12 bg-gradient-to-r from-emerald-400/70 to-transparent" /><span className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">Contact</span></div>
// // // //       <h2 className="relative mt-8 max-w-5xl text-[clamp(46px,7.2vw,108px)] font-semibold leading-[.88] tracking-[-.07em] text-white">Let’s build something <Grad>worth showing.</Grad></h2>
// // // //       <div className="relative mt-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
// // // //         <p className="max-w-md text-sm leading-7 text-zinc-400">Available for digital marketing, website, content, social media and creative projects.</p>
// // // //         <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
// // // //           <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} href="mailto:hello@adityavarma.dev" className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-xs font-bold text-zinc-950 shadow-[0_0_50px_rgba(52,211,153,.35)] transition-colors hover:bg-emerald-200"><Mail size={14} /> hello@adityavarma.dev <ArrowRight size={14} /></motion.a>
// // // //           <div className="flex gap-2"><motion.a whileHover={{ y: -3 }} href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[.05] text-white transition-colors hover:border-emerald-400/70"><Linkedin size={15} /></motion.a><motion.a whileHover={{ y: -3 }} href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[.05] text-white transition-colors hover:border-emerald-400/70"><Instagram size={15} /></motion.a></div>
// // // //         </div>
// // // //       </div>
// // // //     </div></Reveal>
// // // //     <footer className="mt-10 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 font-mono text-[9px] uppercase tracking-[.14em] text-zinc-500 sm:flex-row"><span>© 2026 Aditya Varma</span><span>Digital Marketing · Web · Content · Creative</span></footer>
// // // //   </div></section>;
// // // // }

// // // // /* ------------------------------------------------------------------ */
// // // // /* PAGE                                                                */
// // // // /* ------------------------------------------------------------------ */

// // // // export default function Portfolio() {
// // // //   const [menu, setMenu] = useState(false);
// // // //   const [active, setActive] = useState("home");
// // // //   const [scrolled, setScrolled] = useState(false);
// // // //   const [showTop, setShowTop] = useState(false);

// // // //   useEffect(() => {
// // // //     const ids = ["home", ...navLinks.map(([, id]) => id)];
// // // //     const els = ids.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];
// // // //     const io = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }); }, { rootMargin: "-45% 0px -50% 0px" });
// // // //     els.forEach(el => io.observe(el));
// // // //     const onScroll = () => { setScrolled(window.scrollY > 24); setShowTop(window.scrollY > 700); };
// // // //     onScroll();
// // // //     window.addEventListener("scroll", onScroll, { passive: true });
// // // //     return () => { io.disconnect(); window.removeEventListener("scroll", onScroll); };
// // // //   }, []);

// // // //   return <main className="relative min-h-screen overflow-x-clip bg-[#04100d] text-zinc-100 selection:bg-emerald-500/40">
// // // //     <style>{CSS}</style>
// // // //     <Backdrop />
// // // //     <ParticleField />
// // // //     <CursorGlow />
// // // //     <div aria-hidden className="av-grain pointer-events-none fixed inset-0 z-[3]" />
// // // //     <ScrollProgress />

// // // //     <motion.header initial={{ y: -70, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, delay: 0.1, ease: EASE }} className={`fixed left-1/2 top-4 z-[60] flex w-[min(1180px,calc(100%-20px))] -translate-x-1/2 items-center justify-between rounded-2xl border px-3 py-2.5 backdrop-blur-2xl transition-all duration-500 ${scrolled ? "border-white/15 bg-[#09171a]/80 shadow-[0_18px_60px_rgba(0,0,0,.5)]" : "border-white/10 bg-white/[.04]"}`}>
// // // //       <a href="#home" className="flex items-center gap-2.5"><span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-400 text-[10px] font-bold text-white shadow-[0_0_20px_rgba(16,185,129,.5)]">AV</span><span><b className="block text-[11px] leading-none text-white">Aditya Varma</b><small className="mt-1 block text-[7px] uppercase tracking-[.12em] text-zinc-500">Digital Marketing Executive</small></span></a>
// // // //       <nav className="hidden items-center gap-1 lg:flex">{navLinks.map(([label, id]) => <a key={id} href={`#${id}`} className={`relative rounded-full px-3 py-1.5 text-[10px] font-semibold transition-colors ${active === id ? "text-white" : "text-zinc-400 hover:text-white"}`}>{active === id && <motion.span layoutId="nav-pill" transition={{ type: "spring", stiffness: 380, damping: 32 }} className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/10" />}{label}</a>)}<Link href="/work-samples" className="rounded-full px-3 py-1.5 text-[10px] font-semibold text-zinc-400 transition hover:text-white">Work Archive</Link></nav>
// // // //       <a href="#contact" className="hidden items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[10px] font-bold text-zinc-950 transition hover:bg-emerald-200 lg:inline-flex">Let’s talk <ArrowRight size={12} /></a>
// // // //       <button onClick={() => setMenu(!menu)} className="grid h-9 w-9 place-items-center rounded-xl border border-white/15 bg-white/5 text-white lg:hidden" aria-label="Toggle menu" aria-expanded={menu}>{menu ? <X size={16} /> : <Menu size={16} />}</button>
// // // //       <AnimatePresence>{menu && <motion.div initial={{ opacity: 0, y: -8, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8, scale: 0.97 }} transition={{ duration: 0.25, ease: EASE }} className="absolute right-0 top-14 w-64 origin-top-right rounded-2xl border border-white/15 bg-[#09171a]/95 p-2 shadow-2xl backdrop-blur-2xl lg:hidden">{navLinks.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenu(false)} className={`block rounded-xl px-3 py-3 text-xs font-semibold hover:bg-white/5 ${active === id ? "text-emerald-300" : "text-zinc-300"}`}>{label}</a>)}<Link href="/work-samples" onClick={() => setMenu(false)} className="block rounded-xl px-3 py-3 text-xs font-semibold text-zinc-300 hover:bg-white/5">Work Archive</Link></motion.div>}</AnimatePresence>
// // // //     </motion.header>

// // // //     <div className="relative z-10">
// // // //       <Hero />
// // // //       <About />
// // // //       <Experience />
// // // //       <Work />
// // // //       <ArchivePreview />
// // // //       <Skills />
// // // //       <Process />
// // // //       <Insights />
// // // //       <Testimonials />
// // // //       <Contact />
// // // //     </div>

// // // //     <AnimatePresence>{showTop && <motion.a href="#home" aria-label="Back to top" initial={{ opacity: 0, y: 16, scale: 0.8 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.8 }} whileHover={{ y: -3 }} className="fixed bottom-6 right-6 z-[60] grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-[#09171a]/80 text-white shadow-[0_10px_40px_rgba(0,0,0,.5)] backdrop-blur-xl transition-colors hover:border-emerald-400/70"><ArrowUp size={16} /></motion.a>}</AnimatePresence>
// // // //   </main>;
// // // // }
// // // "use client";

// // // import { ArrowDown, ArrowRight, ArrowUp, ExternalLink, Instagram, Linkedin, Mail, Menu, Quote, X } from "lucide-react";
// // // import { AnimatePresence, animate, motion, useInView, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
// // // import Link from "next/link";
// // // import Image from "next/image";
// // // import { useEffect, useRef, useState } from "react";

// // // const EASE = [0.16, 1, 0.3, 1] as const;

// // // /* ------------------------------------------------------------------ */
// // // /* DATA (unchanged content)                                            */
// // // /* ------------------------------------------------------------------ */

// // // const projects = [
// // //   { id: "01", company: "Innovare Biopharma LLP", label: "WEBSITE · SEO · CONTENT", title: "Building a digital home for aquaculture health.", description: "Website development, product presentation, blog publishing, SEO-focused content, social support and digital marketing execution.", image: "/work/websites/innovare-home.png", slug: "innovare-biopharma", link: "https://innovarebiopharma.com/", glow: "bg-emerald-500/25" },
// // //   { id: "02", company: "C-STAR Global", label: "EVENTS · CONTENT · CREATIVE", title: "Turning conference information into a complete digital experience.", description: "Conference communication, speaker data, landing pages, banners, videos, social publishing and conference publications.", image: "/work/websites/cstar-home.png", slug: "c-star-global", glow: "bg-indigo-500/25" },
// // //   { id: "03", company: "Ecorfy Technologies Pvt. Ltd.", label: "WEB · SOCIAL · TECHNOLOGY", title: "Making technology easier to understand and easier to publish.", description: "Website work and technology-focused digital communication across software, AI, social media and marketing content.", image: "/work/ecorfy/website-cover.png", slug: "ecorfy-technologies", link: "https://www.ecorfy.com/", glow: "bg-cyan-500/20" },
// // //   { id: "04", company: "Shreshta Pickles", label: "FREELANCE · WEBSITE", title: "A clean digital storefront for a traditional food brand.", description: "Freelance website development with a product-led layout, clear navigation and a focused brand presentation.", image: "/work/websites/shreshta-home.png", slug: "shreshta-pickles", link: "https://shreshtapickles.com/", glow: "bg-orange-500/20" },
// // // ];

// // // const experience = [
// // //   { company: "Innovare Biopharma LLP", role: "Digital Marketing Executive", dates: "April 2026 — Present", location: "Hyderabad, India", logo: "/companies/innovare-logo.png", current: true, description: "Digital marketing, website management, SEO-focused content, social media support and creative production for an aquaculture-focused brand.", points: ["Managed website content, landing pages and digital publishing", "Supported SEO, blogs, social media and campaign creatives", "Created and coordinated marketing assets across digital channels"], tags: ["Digital Marketing", "SEO", "Content", "Social Media"], href: "https://innovarebiopharma.com/" },
// // //   { company: "C-STAR Global Inc.", role: "Content Developer · Digital Marketing", dates: "April 2023 — February 2026", location: "Hyderabad, India", logo: "/companies/cstar-logo.png", description: "Worked across conference communication, website content, speaker data, creative production, videos, conference publications and social media publishing.", points: ["Managed conference and expo content from raw data to publishable assets", "Created banners, videos, posters, conference books and social content", "Supported websites, virtual conferences and scheduled social publishing"], tags: ["Content Development", "Events", "Social Media", "Creative"] },
// // //   { company: "Ecorfy Technologies Pvt. Ltd.", role: "Software Engineer", dates: "Earlier experience", location: "Hyderabad, India", logo: "/companies/ecorfy-logo.png", description: "Earlier technology experience supporting web development and digital communication projects in a technology-focused environment.", points: ["Worked on website and software-oriented digital projects", "Supported technology communication and online presentation", "Built technical experience that now strengthens marketing execution"], tags: ["Web", "Software", "Digital", "Technology"], href: "https://www.ecorfy.com/" },
// // //   { company: "Codexbox", role: "Software Engineer", dates: "October 2022 — May 2023", location: "Remote", logo: "/companies/codexbox-logo.png", description: "Designed, deployed, and maintained robust cloud infrastructure across AWS, Microsoft Azure, and GCP. Automated cloud provisioning via Infrastructure as Code with Terraform, managed Docker/Kubernetes container systems, and implemented CI/CD pipelines.", points: ["Designed and maintained cloud infrastructure across AWS, Azure, and GCP", "Automated provisioning using Infrastructure as Code (IaC) with Terraform", "Managed Docker/Kubernetes container systems and CI/CD pipelines"], tags: ["AWS", "Azure", "GCP", "Terraform"] },
// // //   { company: "Tech Connect Services Pvt. Ltd.", role: "Computer Aided Design Draftsman", dates: "December 2021 — September 2022", location: "Hyderabad, India", logo: "/companies/techconnect-logo.png", description: "Delivered high-precision 2D/3D CAD layouts and schematic technical drawings for Audio-Visual infrastructure on large commercial and government sites.", points: ["Delivered high-precision 2D/3D CAD layouts for AV infrastructure projects", "Produced schematic technical drawings for large commercial and government sites"], tags: ["AutoCAD", "2D/3D Design", "AV Systems"] },
// // //   { company: "India Yamaha Motor Pvt. Ltd.", role: "Assistant Manager", type: "Part-time", dates: "May 2020 — November 2021", location: "Hyderabad, India", logo: "/companies/yamaha-logo.png", description: "Managed day-to-day service center operations, supervising technicians to maximize workflow productivity, handling customer concerns and inventory coordination.", points: ["Managed day-to-day service center operations and technician workflows", "Supervised teams to maximize productivity and turnaround time"], tags: ["Operations Management", "Customer Service", "Team Leadership"] },
// // // ];

// // // const skillGroups = [
// // //   { title: "Digital Marketing", items: ["SEO", "On-page SEO", "Technical SEO", "Off-page SEO", "Content Development", "Content Marketing", "Social Media Marketing", "Google Ads", "Meta Ads", "Performance Marketing", "Lead Generation", "Email Marketing", "Keyword Research"] },
// // //   { title: "Analytics & Automation", items: ["Google Analytics 4 (GA4)", "Google Tag Manager (GTM)", "Google Search Console", "n8n Automation", "AI Tools"] },
// // //   { title: "Creative & Publishing Tools", items: ["Canva", "Renderforest", "CapCut", "Filmora", "Publito", "Publer", "Swipe Pages", "WordPress", "Hostinger", "Open Mercato"] },
// // // ];

// // // const archive = [
// // //   ["/work/innovare/samples/hygiene.png", "Hygiene in Shrimp Farms", "Innovare", "Educational social creative"],
// // //   ["/work/ecorfy/samples/top-generative-ai.png", "Generative AI Development", "Ecorfy", "Social banner"],
// // //   ["/work/uploads/AP_Defence_Carousel.jpg", "AP Defence & Aerospace", "Carousel", "Carousel template"],
// // //   ["/work/uploads/India_infrastructure.jpg", "India AI Infrastructure Race", "Carousel", "Carousel template"],
// // //   ["/work/innovare/samples/nutrition.png", "Nutrition for Stronger Shrimp", "Innovare", "Educational social creative"],
// // //   ["/work/ecorfy/samples/transform-ideas.png", "Transform Ideas", "Ecorfy", "Generative AI social"],
// // //   ["/work/cstar/women-forum-2024.jpg", "Global Women Forum", "C-STAR", "Event banner"],
// // //   ["/work/cstar/global-technology-forum-2024.jpg", "Global Technology Forum", "C-STAR", "Event poster"],
// // //   ["/work/uploads/Book_Updated_3_.jpg", "World Women & Health Forum", "C-STAR", "Conference publication"],
// // //   ["/work/ecorfy/samples/software-development.png", "Software Development", "Ecorfy", "Social banner"],
// // //   ["/work/ecorfy/samples/ecorfy-digital-marketing.jpg", "Digital Marketing Services", "Ecorfy", "Social banner"],
// // //   ["/work/ecorfy/samples/ecorfy-outdated-software.jpg", "Struggling With Outdated Software?", "Ecorfy", "Social banner"],
// // //   ["/work/ecorfy/samples/ecorfy-software-solutions.jpg", "Software Development Solutions", "Ecorfy", "Social banner"],
// // //   ["/work/ecorfy/samples/ecorfy-genai-ml.jpg", "Generative AI & ML", "Ecorfy", "Social banner"],
// // //   ["/work/ecorfy/samples/ecorfy-it-professionals-day.jpg", "National IT Professionals Day", "Ecorfy", "Awareness day creative"],
// // // ];

// // // const testimonials = [
// // //   ["Ravindra Raju", "Founder & Owner · Shrestha Pickles", "Working with Aditya has been a great experience. He efficiently manages our website, handles updates whenever needed, and supports our business operations and maintaining accurate records. His professionalism and dedication make him a dependable partner for our business."],
// // //   ["Ujeetha Yasaswi (Branch Manager)", "Manager · Yamaha Motors", "During his tenure as Assistant Manager, Aditya demonstrated strong leadership, organizational, and customer service skills. He efficiently managed billing and invoice processing, coordinated daily operations, handled customer service concerns, and ensured smooth communication between customers and service teams. His professionalism, problem-solving abilities, and commitment to delivering excellent customer experiences made him a valuable asset to our organization."],
// // //   ["Sitarama Raju", "CEO · Innovare Labs", "Aditya played an important role in supporting our digital marketing and promotional activities. His contributions to website development, content management, and conference promotions helped strengthen our brand presence within the aquaculture industry. He consistently demonstrated professionalism, creativity, and a strong commitment to delivering quality work."],
// // //   ["Varma Bhupathiraju", "CEO · C-STAR Global Inc", "Aditya was an integral part of our marketing and digital presence. He managed our website, supported design updates, created marketing content, and played a key role in promoting our international conferences. His ability to combine creativity, technical skills, and marketing expertise helped strengthen our brand and effectively engage our target audience."],
// // //   ["Swathi Gurijala", "HR Manager · Ecorfy Technologies Pvt Ltd", "Aditya successfully developed and maintained our company website, ensuring it remained professional, user-friendly, and up to date. He consistently delivered high-quality work, met project deadlines, and demonstrated a strong commitment to supporting our business goals. His professionalism, problem-solving abilities, and attention to detail made him a valuable member of our team."],
// // // ];

// // // const roles = ["Websites", "SEO", "Content", "Creative", "Events"];
// // // const navLinks = [["About", "about"], ["Experience", "experience"], ["Work", "work"], ["Skills", "skills"], ["Testimonials", "testimonials"], ["Contact", "contact"]];
// // // const totalSkills = skillGroups.reduce((a, g) => a + g.items.length, 0);

// // // /* ------------------------------------------------------------------ */
// // // /* GLOBAL CSS (self-contained — no globals.css dependency)             */
// // // /* ------------------------------------------------------------------ */

// // // const CSS = `
// // // .av-blob{position:fixed;border-radius:9999px;filter:blur(110px);will-change:transform;pointer-events:none}
// // // @keyframes av-drift-a{0%,100%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(14vw,9vh,0) scale(1.25)}}
// // // @keyframes av-drift-b{0%,100%{transform:translate3d(0,0,0) scale(1.1)}50%{transform:translate3d(-12vw,-8vh,0) scale(.9)}}
// // // @keyframes av-drift-c{0%,100%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(-8vw,12vh,0) scale(1.2)}}
// // // .av-a{animation:av-drift-a 26s ease-in-out infinite}
// // // .av-b{animation:av-drift-b 32s ease-in-out infinite}
// // // .av-c{animation:av-drift-c 38s ease-in-out infinite}
// // // .av-grain{background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");opacity:.07;mix-blend-mode:overlay}
// // // @keyframes av-spin{to{transform:rotate(360deg)}}
// // // .av-spin{animation:av-spin 48s linear infinite}
// // // .av-spin-rev{animation:av-spin 48s linear infinite reverse}
// // // .av-spin-slow{animation:av-spin 90s linear infinite reverse}
// // // @keyframes av-pulse{0%,100%{opacity:.55;transform:scale(1)}50%{opacity:.95;transform:scale(1.08)}}
// // // .av-pulse{animation:av-pulse 6s ease-in-out infinite}
// // // @keyframes av-shine{0%{background-position:0% 50%}100%{background-position:200% 50%}}
// // // .av-shine{background-size:200% 100%;animation:av-shine 7s linear infinite}
// // // @keyframes av-marq{to{transform:translateX(-50%)}}
// // // .av-marq{display:flex;width:max-content;animation:av-marq 48s linear infinite}
// // // .av-marq-rev{animation-direction:reverse;animation-duration:56s}
// // // .av-pausable:hover .av-marq{animation-play-state:paused}
// // // .av-spot{position:relative}
// // // .av-spot::before{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;opacity:0;transition:opacity .4s;background:radial-gradient(420px circle at var(--mx,50%) var(--my,50%),rgba(16,185,129,.16),transparent 45%)}
// // // .av-spot::after{content:"";position:absolute;inset:0;border-radius:inherit;padding:1px;pointer-events:none;opacity:0;transition:opacity .4s;background:radial-gradient(320px circle at var(--mx,50%) var(--my,50%),rgba(110,231,183,.75),transparent 45%);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#000 0 0) content-box exclude,linear-gradient(#000 0 0)}
// // // .av-spot:hover::before,.av-spot:hover::after{opacity:1}
// // // .av-outline{-webkit-text-stroke:1px rgba(255,255,255,.22);color:transparent}
// // // html{scroll-behavior:smooth}
// // // @media (prefers-reduced-motion:reduce){.av-a,.av-b,.av-c,.av-spin,.av-spin-rev,.av-spin-slow,.av-pulse,.av-shine,.av-marq{animation:none!important}html{scroll-behavior:auto}}
// // // `;

// // // /* ------------------------------------------------------------------ */
// // // /* BACKGROUND                                                          */
// // // /* ------------------------------------------------------------------ */

// // // function ParticleField() {
// // //   const ref = useRef<HTMLCanvasElement>(null);
// // //   useEffect(() => {
// // //     const canvas = ref.current;
// // //     if (!canvas) return;
// // //     const ctx = canvas.getContext("2d");
// // //     if (!ctx) return;
// // //     const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
// // //     const dpr = Math.min(window.devicePixelRatio || 1, 2);
// // //     const mouse = { x: -9999, y: -9999 };
// // //     type P = { x: number; y: number; vx: number; vy: number; r: number };
// // //     let ps: P[] = [];
// // //     let w = 0, h = 0, raf = 0;

// // //     const init = () => {
// // //       w = window.innerWidth; h = window.innerHeight;
// // //       canvas.width = w * dpr; canvas.height = h * dpr;
// // //       canvas.style.width = `${w}px`; canvas.style.height = `${h}px`;
// // //       ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
// // //       const n = Math.min(w < 768 ? 45 : 105, Math.floor((w * h) / 15000));
// // //       ps = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.28, vy: (Math.random() - 0.5) * 0.28, r: Math.random() * 1.4 + 0.5 }));
// // //     };

// // //     const frame = () => {
// // //       ctx.clearRect(0, 0, w, h);
// // //       for (let i = 0; i < ps.length; i++) {
// // //         const p = ps[i];
// // //         if (!reduce) {
// // //           p.x += p.vx; p.y += p.vy;
// // //           if (p.x < -10) p.x = w + 10; else if (p.x > w + 10) p.x = -10;
// // //           if (p.y < -10) p.y = h + 10; else if (p.y > h + 10) p.y = -10;
// // //         }
// // //         const mdx = p.x - mouse.x, mdy = p.y - mouse.y;
// // //         const md = Math.hypot(mdx, mdy);
// // //         if (md < 180) {
// // //           ctx.strokeStyle = `rgba(110,231,183,${(1 - md / 180) * 0.55})`;
// // //           ctx.lineWidth = 0.8;
// // //           ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
// // //           if (!reduce) { p.x += (mdx / md) * 0.35; p.y += (mdy / md) * 0.35; }
// // //         }
// // //         for (let j = i + 1; j < ps.length; j++) {
// // //           const q = ps[j];
// // //           const d = Math.hypot(p.x - q.x, p.y - q.y);
// // //           if (d < 125) {
// // //             ctx.strokeStyle = `rgba(16,185,129,${(1 - d / 125) * 0.28})`;
// // //             ctx.lineWidth = 0.6;
// // //             ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
// // //           }
// // //         }
// // //         ctx.fillStyle = "rgba(209,250,229,.75)";
// // //         ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
// // //       }
// // //       if (!reduce) raf = requestAnimationFrame(frame);
// // //     };

// // //     const onMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
// // //     const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };
// // //     const onResize = () => { init(); if (reduce) frame(); };
// // //     const onVis = () => { if (document.hidden) cancelAnimationFrame(raf); else if (!reduce) raf = requestAnimationFrame(frame); };

// // //     init(); frame();
// // //     window.addEventListener("mousemove", onMove, { passive: true });
// // //     window.addEventListener("mouseleave", onLeave);
// // //     window.addEventListener("resize", onResize);
// // //     document.addEventListener("visibilitychange", onVis);
// // //     return () => {
// // //       cancelAnimationFrame(raf);
// // //       window.removeEventListener("mousemove", onMove);
// // //       window.removeEventListener("mouseleave", onLeave);
// // //       window.removeEventListener("resize", onResize);
// // //       document.removeEventListener("visibilitychange", onVis);
// // //     };
// // //   }, []);
// // //   return <canvas ref={ref} aria-hidden className="fixed inset-0 z-[1] pointer-events-none" />;
// // // }

// // // function CursorGlow() {
// // //   const mx = useMotionValue(-600);
// // //   const my = useMotionValue(-600);
// // //   const sx = useSpring(mx, { stiffness: 90, damping: 20, mass: 0.6 });
// // //   const sy = useSpring(my, { stiffness: 90, damping: 20, mass: 0.6 });
// // //   const x = useTransform(sx, v => v - 280);
// // //   const y = useTransform(sy, v => v - 280);
// // //   useEffect(() => {
// // //     const move = (e: MouseEvent) => { mx.set(e.clientX); my.set(e.clientY); };
// // //     window.addEventListener("mousemove", move, { passive: true });
// // //     return () => window.removeEventListener("mousemove", move);
// // //   }, [mx, my]);
// // //   return <motion.div aria-hidden style={{ x, y }} className="pointer-events-none fixed left-0 top-0 z-[2] hidden h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,.17),transparent_62%)] lg:block" />;
// // // }

// // // function Backdrop() {
// // //   return <div aria-hidden className="pointer-events-none fixed inset-0 z-0 bg-[#04100d]">
// // //     <div className="av-blob av-a -left-[10vw] -top-[12vh] h-[55vw] w-[55vw] max-h-[760px] max-w-[760px] bg-emerald-700/35" />
// // //     <div className="av-blob av-b -right-[8vw] top-[18vh] h-[48vw] w-[48vw] max-h-[680px] max-w-[680px] bg-cyan-500/20" />
// // //     <div className="av-blob av-c bottom-[-18vh] left-[22vw] h-[50vw] w-[50vw] max-h-[700px] max-w-[700px] bg-teal-600/20" />
// // //     <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_72%)]" />
// // //     <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(7,6,13,.85)_100%)]" />
// // //   </div>;
// // // }

// // // /* ------------------------------------------------------------------ */
// // // /* PRIMITIVES                                                          */
// // // /* ------------------------------------------------------------------ */

// // // function ScrollProgress() {
// // //   const { scrollYProgress } = useScroll();
// // //   const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.3 });
// // //   return <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-300" />;
// // // }

// // // function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
// // //   const reduce = useReducedMotion();
// // //   return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 36, filter: "blur(10px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.85, delay, ease: EASE }}>{children}</motion.div>;
// // // }

// // // function SpotCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
// // //   const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
// // //     const r = e.currentTarget.getBoundingClientRect();
// // //     e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
// // //     e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
// // //   };
// // //   return <div onMouseMove={onMove} className={`av-spot ${className}`}>{children}</div>;
// // // }

// // // function Tilt({ children, className = "" }: { children: React.ReactNode; className?: string }) {
// // //   const reduce = useReducedMotion();
// // //   const ref = useRef<HTMLDivElement>(null);
// // //   const px = useMotionValue(0);
// // //   const py = useMotionValue(0);
// // //   const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [5, -5]), { stiffness: 200, damping: 20 });
// // //   const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-5, 5]), { stiffness: 200, damping: 20 });
// // //   const onMove = (e: React.MouseEvent) => {
// // //     if (reduce || !ref.current) return;
// // //     const r = ref.current.getBoundingClientRect();
// // //     px.set((e.clientX - r.left) / r.width - 0.5);
// // //     py.set((e.clientY - r.top) / r.height - 0.5);
// // //   };
// // //   return <motion.div ref={ref} onMouseMove={onMove} onMouseLeave={() => { px.set(0); py.set(0); }} style={{ rotateX, rotateY, transformPerspective: 1100 }} className={className}>{children}</motion.div>;
// // // }

// // // function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
// // //   const ref = useRef<HTMLSpanElement>(null);
// // //   const inView = useInView(ref, { once: true });
// // //   const reduce = useReducedMotion();
// // //   const [v, setV] = useState(0);
// // //   useEffect(() => {
// // //     if (!inView) return;
// // //     if (reduce) { setV(to); return; }
// // //     const c = animate(0, to, { duration: 1.6, ease: EASE, onUpdate: x => setV(Math.round(x)) });
// // //     return () => c.stop();
// // //   }, [inView, to, reduce]);
// // //   return <span ref={ref}>{String(v).padStart(2, "0")}{suffix}</span>;
// // // }

// // // function SectionHead({ n, kicker, children, sub }: { n: string; kicker: string; children: React.ReactNode; sub?: string }) {
// // //   return <Reveal>
// // //     <div className="flex items-center gap-4">
// // //       <span className="av-outline font-mono text-5xl font-semibold leading-none sm:text-6xl">{n}</span>
// // //       <span className="h-px w-12 bg-gradient-to-r from-emerald-400/70 to-transparent" />
// // //       <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">{kicker}</span>
// // //     </div>
// // //     <div className="mt-7 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
// // //       <h2 className="max-w-4xl text-[clamp(44px,6.6vw,92px)] font-semibold leading-[.9] tracking-[-.06em] text-white">{children}</h2>
// // //       {sub && <p className="max-w-sm text-sm leading-7 text-zinc-400">{sub}</p>}
// // //     </div>
// // //   </Reveal>;
// // // }

// // // const Grad = ({ children }: { children: React.ReactNode }) => <span className="av-shine bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">{children}</span>;

// // // /* ------------------------------------------------------------------ */
// // // /* HERO                                                                */
// // // /* ------------------------------------------------------------------ */

// // // function RotatingWord() {
// // //   const [i, setI] = useState(0);
// // //   useEffect(() => { const t = setInterval(() => setI(x => (x + 1) % roles.length), 2200); return () => clearInterval(t); }, []);
// // //   return <span className="relative inline-flex h-[1.4em] min-w-[7.5ch] items-center overflow-hidden align-bottom">
// // //     <AnimatePresence mode="wait">
// // //       <motion.span key={roles[i]} initial={{ y: "100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-100%", opacity: 0 }} transition={{ duration: 0.45, ease: EASE }} className="absolute left-0 font-semibold text-white">{roles[i]}</motion.span>
// // //     </AnimatePresence>
// // //   </span>;
// // // }

// // // function WordReveal({ text, delay = 0, grad = false }: { text: string; delay?: number; grad?: boolean }) {
// // //   const reduce = useReducedMotion();
// // //   return <>{text.split(" ").map((w, i) => <span key={`${w}-${i}`} className="inline-block overflow-hidden pb-[.16em] -mb-[.16em] align-bottom"><motion.span className="inline-block" initial={reduce ? false : { y: "115%", rotate: 5 }} animate={{ y: 0, rotate: 0 }} transition={{ duration: 1, delay: delay + i * 0.09, ease: EASE }}>{grad ? <Grad>{w}</Grad> : w}&nbsp;</motion.span></span>)}</>;
// // // }

// // // function Orbit() {
// // //   const chips: [string, string, number][] = [["SEO", "01", 0], ["CONTENT", "02", 90], ["CREATIVE", "03", 180], ["EXECUTE", "04", 270]];
// // //   return <div className="relative mx-auto aspect-square w-full max-w-[480px]">
// // //     <div className="av-pulse absolute inset-[16%] rounded-full bg-emerald-600/35 blur-3xl" />
// // //     <div className="av-pulse absolute inset-[30%] rounded-full bg-cyan-400/20 blur-3xl [animation-delay:-3s]" />
// // //     <div className="av-spin absolute inset-[3%] rounded-full border border-white/10">
// // //       {chips.map(([label, n, deg]) => <div key={label} className="absolute inset-0" style={{ transform: `rotate(${deg}deg)` }}>
// // //         <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
// // //           <div style={{ transform: `rotate(${-deg}deg)` }}><div className="av-spin-rev">
// // //             <div className="whitespace-nowrap rounded-xl border border-white/15 bg-white/[.08] px-3 py-2 font-mono text-[10px] text-white shadow-[0_10px_40px_rgba(16,185,129,.25)] backdrop-blur-md"><span className="mr-2 text-emerald-300">{n}</span>{label}</div>
// // //           </div></div>
// // //         </div>
// // //       </div>)}
// // //     </div>
// // //     <div className="av-spin-slow absolute inset-[20%] rounded-full border border-dashed border-emerald-300/25">
// // //       <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,.9)]" />
// // //       <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-teal-300 shadow-[0_0_14px_rgba(94,234,212,.9)]" />
// // //     </div>
// // //     <div className="absolute inset-[35%] grid place-items-center rounded-full border border-white/20 bg-[radial-gradient(circle_at_30%_25%,rgba(52,211,153,.55),rgba(24,16,48,.95)_62%)] text-center shadow-[0_0_80px_rgba(16,185,129,.45),inset_0_0_30px_rgba(255,255,255,.08)]">
// // //       <div><p className="font-mono text-[7px] uppercase tracking-[.2em] text-emerald-200/80 sm:text-[8px]">Digital workflow</p><strong className="mt-2 block text-xl font-semibold leading-[.95] tracking-[-.05em] text-white sm:text-2xl">IDEA<br />TO<br /><Grad>IMPACT.</Grad></strong></div>
// // //     </div>
// // //   </div>;
// // // }

// // // function Hero() {
// // //   const reduce = useReducedMotion();
// // //   const { scrollY } = useScroll();
// // //   const textY = useTransform(scrollY, [0, 700], [0, 70]);
// // //   const orbY = useTransform(scrollY, [0, 700], [0, 130]);
// // //   const fade = useTransform(scrollY, [0, 600], [1, 0.25]);
// // //   const stats: [number, string, string][] = [[2, "Years hands-on", "+"], [projects.length, "Featured projects", ""], [experience.length, "Companies", ""], [totalSkills, "Skills & tools", ""]];
// // //   return <section id="home" className="relative flex min-h-screen flex-col justify-center pb-16 pt-32 sm:pt-36">
// // //     <div className="mx-auto grid w-[min(1240px,calc(100%-32px))] items-center gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-8">
// // //       <motion.div style={{ y: reduce ? 0 : textY, opacity: reduce ? 1 : fade }}>
// // //         <motion.div initial={reduce ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }} className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[.05] px-4 py-2 font-mono text-[10px] uppercase tracking-[.16em] text-zinc-300 backdrop-blur-md">
// // //           <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" /></span>
// // //           Available for projects
// // //         </motion.div>
// // //         <h1 className="mt-8 max-w-5xl text-[clamp(54px,8.4vw,122px)] font-semibold leading-[.86] tracking-[-.07em] text-white">
// // //           <WordReveal text="I make digital work" delay={0.15} />
// // //           <WordReveal text="worth noticing." delay={0.55} grad />
// // //         </h1>
// // //         <motion.p initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1, ease: EASE }} className="mt-8 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">Digital Marketing Executive working across websites, SEO, social media, content development, creative production and event communication.</motion.p>
// // //         <motion.div initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.1, ease: EASE }} className="mt-6 flex items-center gap-3 text-lg text-zinc-500 sm:text-xl">Specialising in <RotatingWord /></motion.div>
// // //         <motion.div initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.2, ease: EASE }} className="mt-9 flex flex-wrap items-center gap-3">
// // //           <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} href="#work" className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-xs font-bold text-zinc-950 shadow-[0_0_50px_rgba(52,211,153,.35)] transition hover:bg-emerald-200">Explore real projects <ArrowRight size={14} className="transition group-hover:translate-x-1" /></motion.a>
// // //           <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}><Link href="/work-samples" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.05] px-6 py-3.5 text-xs font-bold text-white backdrop-blur-md transition hover:border-white/40">Open work archive <ArrowRight size={14} /></Link></motion.div>
// // //         </motion.div>
// // //       </motion.div>
// // //       <motion.div style={{ y: reduce ? 0 : orbY }} initial={reduce ? false : { opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.4, ease: EASE }}><Orbit /></motion.div>
// // //     </div>
// // //     <motion.div initial={reduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 1.4, ease: EASE }} className="mx-auto mt-16 w-[min(1240px,calc(100%-32px))]">
// // //       <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl md:grid-cols-4">
// // //         {stats.map(([n, label, suffix]) => <div key={label} className="bg-[#071612]/80 px-6 py-6"><div className="text-4xl font-semibold tracking-[-.05em] text-white sm:text-5xl"><CountUp to={n} suffix={suffix} /></div><p className="mt-2 font-mono text-[9px] uppercase tracking-[.16em] text-zinc-500">{label}</p></div>)}
// // //       </div>
// // //     </motion.div>
// // //     <a href="#about" aria-label="Scroll to about" className="mx-auto mt-10 hidden items-center gap-2 font-mono text-[9px] uppercase tracking-[.18em] text-zinc-500 sm:flex">Scroll to explore <motion.span animate={reduce ? undefined : { y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}><ArrowDown size={13} /></motion.span></a>
// // //   </section>;
// // // }

// // // /* ------------------------------------------------------------------ */
// // // /* SECTIONS                                                            */
// // // /* ------------------------------------------------------------------ */

// // // function About() {
// // //   const range = ["Websites", "SEO", "Social", "Content", "Creative", "Events", "Publishing", "Automation"];
// // //   return <section id="about" className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // //     <SectionHead n="01" kicker="About me">I work where <Grad>marketing, content and execution</Grad> meet.</SectionHead>
// // //     <div className="mt-14 grid gap-5 lg:grid-cols-[1.25fr_.75fr]">
// // //       <Reveal><SpotCard className="h-full rounded-[28px] border border-white/10 bg-white/[.03] p-8 backdrop-blur-xl sm:p-10"><p className="text-xl leading-8 tracking-[-.02em] text-zinc-300 sm:text-2xl sm:leading-10">I enjoy taking a raw idea, messy information or business requirement and turning it into something structured, visual, useful and ready to publish — whether that is a website, campaign, social post, blog, conference asset or digital workflow.</p></SpotCard></Reveal>
// // //       <Reveal delay={0.1}><SpotCard className="h-full rounded-[28px] border border-white/10 bg-white/[.03] p-6 backdrop-blur-xl"><p className="font-mono text-[9px] uppercase tracking-[.16em] text-zinc-500">My working range</p>
// // //         <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }} className="mt-6 grid grid-cols-2 gap-2">{range.map((x, i) => <motion.span key={x} variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } } }} whileHover={{ y: -2 }} className="rounded-xl border border-white/10 bg-white/[.04] px-3 py-3 text-[10px] font-bold text-zinc-300 transition-colors hover:border-emerald-400/50 hover:text-white"><span className="mr-1.5 text-emerald-400">0{i + 1}</span>{x}</motion.span>)}</motion.div>
// // //       </SpotCard></Reveal>
// // //     </div>
// // //   </div></section>;
// // // }

// // // function Experience() {
// // //   const ref = useRef<HTMLDivElement>(null);
// // //   const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
// // //   const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 26 });
// // //   return <section id="experience" className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // //     <SectionHead n="02" kicker="Career timeline" sub="Six roles across digital marketing, content, software and cloud engineering, CAD design and service operations.">Where I’ve worked. <Grad>What I’ve done.</Grad></SectionHead>
// // //     <div ref={ref} className="relative mt-16 space-y-8">
// // //       <div className="absolute bottom-0 left-[7px] top-0 w-px bg-white/10 md:left-[187px]" />
// // //       <motion.div style={{ scaleY }} className="absolute bottom-0 left-[7px] top-0 w-px origin-top bg-gradient-to-b from-emerald-400 via-teal-300 to-cyan-300 shadow-[0_0_12px_rgba(52,211,153,.8)] md:left-[187px]" />
// // //       {experience.map((job, i) => <Reveal key={job.company} delay={0.05}>
// // //         <div className="relative grid gap-5 pl-9 md:grid-cols-[180px_1fr] md:gap-14 md:pl-0">
// // //           <span className={`absolute left-0 top-8 h-[15px] w-[15px] rounded-full border-2 bg-[#04100d] md:left-[180px] ${job.current ? "border-cyan-300 shadow-[0_0_16px_rgba(103,232,249,.9)]" : "border-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.6)]"}`} />
// // //           <div className="md:pt-7 md:text-right"><p className="font-mono text-[10px] uppercase tracking-[.14em] text-emerald-300">0{i + 1} / Experience</p><p className="mt-2 font-mono text-[10px] uppercase leading-5 tracking-[.08em] text-zinc-500">{job.dates}<br />{job.location}</p>{"type" in job && job.type && <span className="mt-3 inline-block rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 font-mono text-[8px] uppercase tracking-[.12em] text-amber-200">{job.type}</span>}{job.current && <span className="mt-3 inline-block rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 font-mono text-[8px] uppercase tracking-[.12em] text-cyan-200">Present</span>}</div>
// // //           <Tilt><SpotCard className="rounded-[26px] border border-white/10 bg-white/[.035] p-6 backdrop-blur-xl sm:p-8">
// // //             <div className="flex items-start gap-4"><div className="relative h-12 w-20 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white sm:w-24"><Image src={job.logo} alt={`${job.company} logo`} fill sizes="96px" className="object-contain p-1.5" /></div><div><h3 className="text-xl font-semibold tracking-[-.03em] text-white sm:text-2xl">{job.role}</h3><a href={job.href ?? "#"} target={job.href ? "_blank" : undefined} rel={job.href ? "noreferrer" : undefined} className="mt-1 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300 transition hover:text-white">{job.company}{job.href && <ExternalLink size={11} />}</a></div></div>
// // //             <p className="mt-6 text-sm leading-7 text-zinc-400">{job.description}</p>
// // //             <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-5">{job.points.map(p => <li key={p} className="flex gap-3 text-xs leading-6 text-zinc-300"><span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-emerald-400" />{p}</li>)}</ul>
// // //             <div className="mt-6 flex flex-wrap gap-2">{job.tags.map(t => <span key={t} className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[9px] font-semibold text-emerald-200">{t}</span>)}</div>
// // //           </SpotCard></Tilt>
// // //         </div>
// // //       </Reveal>)}
// // //     </div>
// // //   </div></section>;
// // // }

// // // function Work() {
// // //   return <section id="work" className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // //     <SectionHead n="03" kicker="Selected work" sub="A selection of websites and digital experiences across aquaculture, conferences, technology and consumer brands.">Real projects. <Grad>Clear outcomes.</Grad></SectionHead>
// // //     <div className="mt-6"><Link href="/work-samples" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.05] px-5 py-2.5 text-xs font-bold text-white backdrop-blur-md transition hover:border-emerald-400/60">Explore all work <ArrowRight size={14} /></Link></div>
// // //     <div className="mt-14 space-y-8">
// // //       {projects.map((project, i) => <Reveal key={project.id}>
// // //         <SpotCard className="group relative rounded-[32px] border border-white/10 bg-white/[.03] p-4 backdrop-blur-xl sm:p-6">
// // //           <div className={`pointer-events-none absolute -z-10 h-72 w-72 rounded-full blur-[100px] ${project.glow} ${i % 2 ? "-left-10 top-10" : "-right-10 top-10"}`} />
// // //           <div className={`grid items-center gap-8 ${i % 2 ? "lg:grid-cols-[.9fr_1.1fr]" : "lg:grid-cols-[1.1fr_.9fr]"}`}>
// // //             <div className={i % 2 ? "lg:order-2" : ""}>
// // //               <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-[0_30px_80px_rgba(0,0,0,.5)]">
// // //                 <div className="flex items-center gap-2 border-b border-white/10 bg-zinc-900 px-4 py-3"><span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" /><span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" /><span className="ml-3 truncate rounded-md bg-white/5 px-3 py-1 font-mono text-[9px] text-zinc-500">{project.link ? project.link.replace("https://", "") : project.company}</span></div>
// // //                 <div className="flex h-[240px] items-center justify-center overflow-hidden bg-[#f4f4f5] sm:h-[330px]"><Image src={project.image} alt={`${project.company} website preview`} width={1100} height={760} className="h-full w-full object-contain object-center transition duration-700 ease-out group-hover:scale-[1.04]" /></div>
// // //               </div>
// // //             </div>
// // //             <div className="px-2 pb-2 lg:px-6">
// // //               <div className="flex items-center gap-3"><span className="av-outline font-mono text-4xl font-semibold">{project.id}</span><span className="rounded-full border border-white/10 bg-white/[.05] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[.12em] text-zinc-400">{project.label}</span></div>
// // //               <p className="mt-6 font-mono text-[10px] uppercase tracking-[.16em] text-emerald-300">{project.company}</p>
// // //               <h3 className="mt-3 text-3xl font-semibold leading-[1.05] tracking-[-.045em] text-white sm:text-4xl">{project.title}</h3>
// // //               <p className="mt-4 text-sm leading-7 text-zinc-400">{project.description}</p>
// // //               <div className="mt-7 flex flex-wrap gap-2.5"><Link href={`/work/${project.slug}`} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold text-zinc-950 transition hover:bg-emerald-200">View project <ArrowRight size={13} /></Link>{project.link && <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-xs font-bold text-white transition hover:border-white/50">Live website <ExternalLink size={13} /></a>}</div>
// // //             </div>
// // //           </div>
// // //         </SpotCard>
// // //       </Reveal>)}
// // //     </div>
// // //   </div></section>;
// // // }

// // // function ArchivePreview() {
// // //   const half = Math.ceil(archive.length / 2);
// // //   const rowOne = archive.slice(0, half);
// // //   const rowTwo = archive.slice(half);
// // //   const tile = ([src, title, company, format]: string[], key: string) => <Link href="/work-samples" key={key} className="group mr-4 w-[220px] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[.04] backdrop-blur-md transition hover:-translate-y-1 hover:border-emerald-400/50 sm:w-[260px]"><div className="flex h-[150px] items-center justify-center overflow-hidden bg-[#f2f1ef] p-3 sm:h-[180px] sm:p-4"><Image src={src} alt={title} width={520} height={420} className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.05]" /></div><div className="px-4 py-3"><p className="truncate font-mono text-[8px] uppercase tracking-[.1em] text-zinc-500">{company} · {format}</p><h3 className="mt-1.5 truncate text-xs font-bold text-zinc-100">{title}</h3></div></Link>;
// // //   const row = (items: string[][], prefix: string) => [...items, ...items].map((it, i) => tile(it, `${prefix}-${i}`));
// // //   return <section className="relative overflow-hidden py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // //     <SectionHead n="04" kicker="Creative archive" sub="Banners, carousel templates, event graphics and publications — moving gently so you can browse the range at a glance.">A closer look at <Grad>the creative work.</Grad></SectionHead>
// // //     <div className="mt-6"><Link href="/work-samples" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold text-zinc-950 transition hover:bg-emerald-200">View all samples <ArrowRight size={14} /></Link></div>
// // //   </div>
// // //     <div className="av-pausable relative mt-12 space-y-4">
// // //       <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#04100d] to-transparent sm:w-40" />
// // //       <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#04100d] to-transparent sm:w-40" />
// // //       <div className="av-marq">{row(rowOne, "a")}</div>
// // //       <div className="av-marq av-marq-rev">{row(rowTwo, "b")}</div>
// // //     </div>
// // //     <p className="mt-7 text-center text-[10px] text-zinc-500">Hover to pause · Select any sample to open the complete archive</p>
// // //   </section>;
// // // }

// // // function Skills() {
// // //   return <section id="skills" className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // //     <SectionHead n="05" kicker="Skills & tools" sub="A straightforward overview of the marketing disciplines, measurement tools, creative apps and publishing platforms I work with.">The skills behind <Grad>the work.</Grad></SectionHead>
// // //     <div className="mt-14 grid gap-5 lg:grid-cols-3">
// // //       {skillGroups.map((group, gi) => <Reveal key={group.title} delay={gi * 0.08}><SpotCard className="h-full rounded-[28px] border border-white/10 bg-white/[.03] p-6 backdrop-blur-xl sm:p-7">
// // //         <div className="flex items-end justify-between border-b border-white/10 pb-4"><h3 className="text-lg font-semibold tracking-[-.03em] text-white">{group.title}</h3><span className="font-mono text-[9px] uppercase tracking-[.14em] text-zinc-500">{String(group.items.length).padStart(2, "0")} items</span></div>
// // //         <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03 } } }} className="mt-5 flex flex-wrap gap-2">{group.items.map(item => <motion.span key={item} variants={{ hidden: { opacity: 0, y: 12, scale: 0.94 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: EASE } } }} whileHover={{ y: -2 }} className="cursor-default rounded-full border border-white/10 bg-white/[.04] px-3.5 py-2 text-xs font-medium text-zinc-300 transition-colors hover:border-emerald-400/60 hover:bg-emerald-400/10 hover:text-white">{item}</motion.span>)}</motion.div>
// // //       </SpotCard></Reveal>)}
// // //     </div>
// // //   </div></section>;
// // // }

// // // function Process() {
// // //   const steps = [["01", "Understand", "Goal · audience · message"], ["02", "Structure", "Content · information · flow"], ["03", "Create", "Design · video · visual system"], ["04", "Execute", "Publish · schedule · maintain"]];
// // //   return <section className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // //     <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-emerald-600/30 via-[#0a1f1b] to-cyan-500/10 p-8 backdrop-blur-xl sm:p-14">
// // //       <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_75%)]" />
// // //       <div className="relative"><SectionHead n="06" kicker="How I work">From brief to <Grad>publish-ready.</Grad></SectionHead>
// // //         <div className="relative mt-14 grid gap-3 md:grid-cols-4">
// // //           <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 1.5, ease: EASE }} className="pointer-events-none absolute left-[10%] right-[10%] top-[46px] hidden h-px origin-left bg-gradient-to-r from-emerald-300/60 via-teal-300/60 to-cyan-300/60 md:block" />
// // //           {steps.map(([n, title, desc], i) => <Reveal key={n} delay={i * 0.1}><motion.article whileHover={{ y: -6 }} transition={{ duration: 0.3, ease: EASE }} className="h-full rounded-[24px] border border-white/10 bg-white/[.05] p-6 backdrop-blur-xl transition-colors hover:bg-white/[.09]"><span className="grid h-10 w-10 place-items-center rounded-full border border-emerald-300/40 bg-[#0a1f1b] font-mono text-[10px] text-emerald-200 shadow-[0_0_20px_rgba(52,211,153,.4)]">{n}</span><h3 className="mt-12 text-2xl font-semibold tracking-[-.04em] text-white">{title}</h3><p className="mt-2 text-xs leading-5 text-zinc-400">{desc}</p></motion.article></Reveal>)}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   </div></section>;
// // // }

// // // function Insights() {
// // //   return <section id="insights" className="relative py-28 sm:py-36"><div className="mx-auto grid w-[min(1240px,calc(100%-32px))] items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
// // //     <Reveal><div className="flex items-center gap-4"><span className="av-outline font-mono text-5xl font-semibold leading-none sm:text-6xl">07</span><span className="h-px w-12 bg-gradient-to-r from-emerald-400/70 to-transparent" /><span className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">Insights · publishing</span></div>
// // //       <h2 className="mt-7 text-[clamp(42px,6vw,88px)] font-semibold leading-[.92] tracking-[-.06em] text-white">Content is not decoration. <Grad>It is part of the product.</Grad></h2>
// // //       <p className="mt-7 max-w-xl text-sm leading-7 text-zinc-400">The portfolio can keep expanding with published articles, SEO work, case studies and content projects as more source material is added.</p></Reveal>
// // //     <Reveal delay={0.1}><Tilt><SpotCard className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[.04] p-3 shadow-[0_40px_100px_rgba(0,0,0,.5)] backdrop-blur-xl"><Image src="/work/innovare/blog.png" alt="Innovare blog publishing preview" width={900} height={650} className="h-[360px] w-full rounded-[24px] object-cover object-top" /><div className="p-4"><p className="font-mono text-[8px] uppercase tracking-[.14em] text-zinc-500">SEO · Content · Publishing</p><h3 className="mt-2 text-lg font-semibold text-white">Technical content presented as a usable digital experience.</h3></div></SpotCard></Tilt></Reveal>
// // //   </div></section>;
// // // }

// // // function Testimonials() {
// // //   return <section id="testimonials" className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // //     <SectionHead n="08" kicker="Testimonials">Good work should be <Grad>remembered.</Grad></SectionHead>
// // //     <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
// // //       {testimonials.map(([name, role, quote], i) => <Reveal key={name} delay={(i % 3) * 0.1} className={i < 3 ? "lg:col-span-2" : "lg:col-span-3"}><SpotCard className="h-full rounded-[28px] border border-white/10 bg-white/[.035] p-7 backdrop-blur-xl sm:p-8">
// // //         <Quote className="text-emerald-400" size={28} />
// // //         <div className="mt-6 text-sm tracking-[.2em] text-amber-300">★★★★★</div>
// // //         <p className="mt-5 text-[15px] leading-7 tracking-[-.01em] text-zinc-200 sm:text-base sm:leading-8">“{quote}”</p>
// // //         <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-emerald-500 to-cyan-400 text-sm font-bold text-white">{name[0]}</span><div><b className="block text-sm text-white">{name}</b><span className="mt-0.5 block text-[10px] text-zinc-500">{role}</span></div></div>
// // //       </SpotCard></Reveal>)}
// // //     </div>
// // //   </div></section>;
// // // }

// // // function Contact() {
// // //   return <section id="contact" className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// // //     <Reveal><div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[.03] p-8 backdrop-blur-xl sm:p-14">
// // //       <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-emerald-600/30 blur-[110px]" />
// // //       <div className="pointer-events-none absolute -bottom-24 left-10 h-80 w-80 rounded-full bg-cyan-500/15 blur-[110px]" />
// // //       <div className="relative flex items-center gap-4"><span className="av-outline font-mono text-5xl font-semibold leading-none sm:text-6xl">09</span><span className="h-px w-12 bg-gradient-to-r from-emerald-400/70 to-transparent" /><span className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">Contact</span></div>
// // //       <h2 className="relative mt-8 max-w-5xl text-[clamp(46px,7.2vw,108px)] font-semibold leading-[.88] tracking-[-.07em] text-white">Let’s build something <Grad>worth showing.</Grad></h2>
// // //       <div className="relative mt-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
// // //         <p className="max-w-md text-sm leading-7 text-zinc-400">Available for digital marketing, website, content, social media and creative projects.</p>
// // //         <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
// // //           <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} href="mailto:hello@adityavarma.dev" className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-xs font-bold text-zinc-950 shadow-[0_0_50px_rgba(52,211,153,.35)] transition-colors hover:bg-emerald-200"><Mail size={14} /> hello@adityavarma.dev <ArrowRight size={14} /></motion.a>
// // //           <div className="flex gap-2"><motion.a whileHover={{ y: -3 }} href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[.05] text-white transition-colors hover:border-emerald-400/70"><Linkedin size={15} /></motion.a><motion.a whileHover={{ y: -3 }} href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[.05] text-white transition-colors hover:border-emerald-400/70"><Instagram size={15} /></motion.a></div>
// // //         </div>
// // //       </div>
// // //     </div></Reveal>
// // //     <footer className="mt-10 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 font-mono text-[9px] uppercase tracking-[.14em] text-zinc-500 sm:flex-row"><span>© 2026 Aditya Varma</span><span>Digital Marketing · Web · Content · Creative</span></footer>
// // //   </div></section>;
// // // }

// // // /* ------------------------------------------------------------------ */
// // // /* PAGE                                                                */
// // // /* ------------------------------------------------------------------ */

// // // export default function Portfolio() {
// // //   const [menu, setMenu] = useState(false);
// // //   const [active, setActive] = useState("home");
// // //   const [scrolled, setScrolled] = useState(false);
// // //   const [showTop, setShowTop] = useState(false);

// // //   useEffect(() => {
// // //     const ids = ["home", ...navLinks.map(([, id]) => id)];
// // //     const els = ids.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];
// // //     const io = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }); }, { rootMargin: "-45% 0px -50% 0px" });
// // //     els.forEach(el => io.observe(el));
// // //     const onScroll = () => { setScrolled(window.scrollY > 24); setShowTop(window.scrollY > 700); };
// // //     onScroll();
// // //     window.addEventListener("scroll", onScroll, { passive: true });
// // //     return () => { io.disconnect(); window.removeEventListener("scroll", onScroll); };
// // //   }, []);

// // //   return <main className="relative min-h-screen overflow-x-clip bg-[#04100d] text-zinc-100 selection:bg-emerald-500/40">
// // //     <style>{CSS}</style>
// // //     <Backdrop />
// // //     <ParticleField />
// // //     <CursorGlow />
// // //     <div aria-hidden className="av-grain pointer-events-none fixed inset-0 z-[3]" />
// // //     <ScrollProgress />

// // //     <motion.header style={{ x: "-50%" }} initial={{ y: -70, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, delay: 0.1, ease: EASE }} className={`fixed left-1/2 top-4 z-[60] flex w-[min(1180px,calc(100%-20px))] items-center justify-between rounded-2xl border px-3 py-2.5 backdrop-blur-2xl transition-all duration-500 ${scrolled ? "border-white/15 bg-[#09171a]/80 shadow-[0_18px_60px_rgba(0,0,0,.5)]" : "border-white/10 bg-white/[.04]"}`}>
// // //       <a href="#home" className="flex items-center gap-2.5"><span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-400 text-[10px] font-bold text-white shadow-[0_0_20px_rgba(16,185,129,.5)]">AV</span><span><b className="block text-[11px] leading-none text-white">Aditya Varma</b><small className="mt-1 block text-[7px] uppercase tracking-[.12em] text-zinc-500">Digital Marketing Executive</small></span></a>
// // //       <nav className="hidden items-center gap-1 lg:flex">{navLinks.map(([label, id]) => <a key={id} href={`#${id}`} className={`relative rounded-full px-3 py-1.5 text-[10px] font-semibold transition-colors ${active === id ? "text-white" : "text-zinc-400 hover:text-white"}`}>{active === id && <motion.span layoutId="nav-pill" transition={{ type: "spring", stiffness: 380, damping: 32 }} className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/10" />}{label}</a>)}<Link href="/work-samples" className="rounded-full px-3 py-1.5 text-[10px] font-semibold text-zinc-400 transition hover:text-white">Work Archive</Link></nav>
// // //       <a href="#contact" className="hidden items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[10px] font-bold text-zinc-950 transition hover:bg-emerald-200 lg:inline-flex">Let’s talk <ArrowRight size={12} /></a>
// // //       <button onClick={() => setMenu(!menu)} className="grid h-9 w-9 place-items-center rounded-xl border border-white/15 bg-white/5 text-white lg:hidden" aria-label="Toggle menu" aria-expanded={menu}>{menu ? <X size={16} /> : <Menu size={16} />}</button>
// // //       <AnimatePresence>{menu && <motion.div initial={{ opacity: 0, y: -8, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8, scale: 0.97 }} transition={{ duration: 0.25, ease: EASE }} className="absolute right-0 top-14 w-64 origin-top-right rounded-2xl border border-white/15 bg-[#09171a]/95 p-2 shadow-2xl backdrop-blur-2xl lg:hidden">{navLinks.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenu(false)} className={`block rounded-xl px-3 py-3 text-xs font-semibold hover:bg-white/5 ${active === id ? "text-emerald-300" : "text-zinc-300"}`}>{label}</a>)}<Link href="/work-samples" onClick={() => setMenu(false)} className="block rounded-xl px-3 py-3 text-xs font-semibold text-zinc-300 hover:bg-white/5">Work Archive</Link></motion.div>}</AnimatePresence>
// // //     </motion.header>

// // //     <div className="relative z-10">
// // //       <Hero />
// // //       <About />
// // //       <Experience />
// // //       <Work />
// // //       <ArchivePreview />
// // //       <Skills />
// // //       <Process />
// // //       <Insights />
// // //       <Testimonials />
// // //       <Contact />
// // //     </div>

// // //     <AnimatePresence>{showTop && <motion.a href="#home" aria-label="Back to top" initial={{ opacity: 0, y: 16, scale: 0.8 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.8 }} whileHover={{ y: -3 }} className="fixed bottom-6 right-6 z-[60] grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-[#09171a]/80 text-white shadow-[0_10px_40px_rgba(0,0,0,.5)] backdrop-blur-xl transition-colors hover:border-emerald-400/70"><ArrowUp size={16} /></motion.a>}</AnimatePresence>
// // //   </main>;
// // // }
// // "use client";

// // import { ArrowDown, ArrowRight, ArrowUp, ExternalLink, Instagram, Linkedin, Mail, Menu, Quote, X } from "lucide-react";
// // import { AnimatePresence, animate, motion, useInView, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
// // import Link from "next/link";
// // import Image from "next/image";
// // import { useEffect, useRef, useState } from "react";

// // const EASE = [0.16, 1, 0.3, 1] as const;

// // /* ------------------------------------------------------------------ */
// // /* DATA (unchanged content)                                            */
// // /* ------------------------------------------------------------------ */

// // const projects = [
// //   { id: "01", company: "Innovare Biopharma LLP", label: "WEBSITE · SEO · CONTENT", title: "Building a digital home for aquaculture health.", description: "Website development, product presentation, blog publishing, SEO-focused content, social support and digital marketing execution.", image: "/work/websites/innovare-home.png", slug: "innovare-biopharma", link: "https://innovarebiopharma.com/", glow: "bg-emerald-500/25" },
// //   { id: "02", company: "C-STAR Global", label: "EVENTS · CONTENT · CREATIVE", title: "Turning conference information into a complete digital experience.", description: "Conference communication, speaker data, landing pages, banners, videos, social publishing and conference publications.", image: "/work/websites/cstar-home.png", slug: "c-star-global", glow: "bg-indigo-500/25" },
// //   { id: "03", company: "Ecorfy Technologies Pvt. Ltd.", label: "WEB · SOCIAL · TECHNOLOGY", title: "Making technology easier to understand and easier to publish.", description: "Website work and technology-focused digital communication across software, AI, social media and marketing content.", image: "/work/ecorfy/website-cover.png", slug: "ecorfy-technologies", link: "https://www.ecorfy.com/", glow: "bg-cyan-500/20" },
// //   { id: "04", company: "Shreshta Pickles", label: "FREELANCE · WEBSITE", title: "A clean digital storefront for a traditional food brand.", description: "Freelance website development with a product-led layout, clear navigation and a focused brand presentation.", image: "/work/websites/shreshta-home.png", slug: "shreshta-pickles", link: "https://shreshtapickles.com/", glow: "bg-orange-500/20" },
// // ];

// // const experience = [
// //   { company: "Innovare Biopharma LLP", role: "Digital Marketing Executive", dates: "April 2026 — Present", location: "Hyderabad, India", logo: "/companies/innovare-logo.png", current: true, description: "Digital marketing, website management, SEO-focused content, social media support and creative production for an aquaculture-focused brand.", points: ["Managed website content, landing pages and digital publishing", "Supported SEO, blogs, social media and campaign creatives", "Created and coordinated marketing assets across digital channels"], tags: ["Digital Marketing", "SEO", "Content", "Social Media"], href: "https://innovarebiopharma.com/" },
// //   { company: "C-STAR Global Inc.", role: "Content Developer · Digital Marketing", dates: "April 2023 — February 2026", location: "Hyderabad, India", logo: "/companies/cstar-logo.png", description: "Worked across conference communication, website content, speaker data, creative production, videos, conference publications and social media publishing.", points: ["Managed conference and expo content from raw data to publishable assets", "Created banners, videos, posters, conference books and social content", "Supported websites, virtual conferences and scheduled social publishing"], tags: ["Content Development", "Events", "Social Media", "Creative"] },
// //   { company: "Ecorfy Technologies Pvt. Ltd.", role: "Software Engineer", dates: "Earlier experience", location: "Hyderabad, India", logo: "/companies/ecorfy-logo.png", description: "Earlier technology experience supporting web development and digital communication projects in a technology-focused environment.", points: ["Worked on website and software-oriented digital projects", "Supported technology communication and online presentation", "Built technical experience that now strengthens marketing execution"], tags: ["Web", "Software", "Digital", "Technology"], href: "https://www.ecorfy.com/" },
// //   { company: "Codexbox", role: "Software Engineer", dates: "October 2022 — May 2023", location: "Remote", logo: "/companies/codexbox-logo.png", description: "Designed, deployed, and maintained robust cloud infrastructure across AWS, Microsoft Azure, and GCP. Automated cloud provisioning via Infrastructure as Code with Terraform, managed Docker/Kubernetes container systems, and implemented CI/CD pipelines.", points: ["Designed and maintained cloud infrastructure across AWS, Azure, and GCP", "Automated provisioning using Infrastructure as Code (IaC) with Terraform", "Managed Docker/Kubernetes container systems and CI/CD pipelines"], tags: ["AWS", "Azure", "GCP", "Terraform"] },
// //   { company: "Tech Connect Services Pvt. Ltd.", role: "Computer Aided Design Draftsman", dates: "December 2021 — September 2022", location: "Hyderabad, India", logo: "/companies/techconnect-logo.png", description: "Delivered high-precision 2D/3D CAD layouts and schematic technical drawings for Audio-Visual infrastructure on large commercial and government sites.", points: ["Delivered high-precision 2D/3D CAD layouts for AV infrastructure projects", "Produced schematic technical drawings for large commercial and government sites"], tags: ["AutoCAD", "2D/3D Design", "AV Systems"] },
// //   { company: "India Yamaha Motor Pvt. Ltd.", role: "Assistant Manager", type: "Part-time", dates: "May 2020 — November 2021", location: "Hyderabad, India", logo: "/companies/yamaha-logo.png", description: "Managed day-to-day service center operations, supervising technicians to maximize workflow productivity, handling customer concerns and inventory coordination.", points: ["Managed day-to-day service center operations and technician workflows", "Supervised teams to maximize productivity and turnaround time"], tags: ["Operations Management", "Customer Service", "Team Leadership"] },
// // ];

// // const skillGroups = [
// //   { title: "Digital Marketing", items: ["SEO", "On-page SEO", "Technical SEO", "Off-page SEO", "Content Development", "Content Marketing", "Social Media Marketing", "Google Ads", "Meta Ads", "Performance Marketing", "Lead Generation", "Email Marketing", "Keyword Research"] },
// //   { title: "Analytics & Automation", items: ["Google Analytics 4 (GA4)", "Google Tag Manager (GTM)", "Google Search Console", "n8n Automation", "AI Tools"] },
// //   { title: "Creative & Publishing Tools", items: ["Canva", "Renderforest", "CapCut", "Filmora", "Publito", "Publer", "Swipe Pages", "WordPress", "Hostinger", "Open Mercato"] },
// // ];

// // const archive = [
// //   ["/work/innovare/samples/hygiene.png", "Hygiene in Shrimp Farms", "Innovare", "Educational social creative"],
// //   ["/work/ecorfy/samples/top-generative-ai.png", "Generative AI Development", "Ecorfy", "Social banner"],
// //   ["/work/uploads/AP_Defence_Carousel.jpg", "AP Defence & Aerospace", "Carousel", "Carousel template"],
// //   ["/work/uploads/India_infrastructure.jpg", "India AI Infrastructure Race", "Carousel", "Carousel template"],
// //   ["/work/innovare/samples/nutrition.png", "Nutrition for Stronger Shrimp", "Innovare", "Educational social creative"],
// //   ["/work/ecorfy/samples/transform-ideas.png", "Transform Ideas", "Ecorfy", "Generative AI social"],
// //   ["/work/cstar/women-forum-2024.jpg", "Global Women Forum", "C-STAR", "Event banner"],
// //   ["/work/cstar/global-technology-forum-2024.jpg", "Global Technology Forum", "C-STAR", "Event poster"],
// //   ["/work/uploads/Book_Updated_3_.jpg", "World Women & Health Forum", "C-STAR", "Conference publication"],
// //   ["/work/ecorfy/samples/software-development.png", "Software Development", "Ecorfy", "Social banner"],
// //   ["/work/ecorfy/samples/ecorfy-digital-marketing.jpg", "Digital Marketing Services", "Ecorfy", "Social banner"],
// //   ["/work/ecorfy/samples/ecorfy-outdated-software.jpg", "Struggling With Outdated Software?", "Ecorfy", "Social banner"],
// //   ["/work/ecorfy/samples/ecorfy-software-solutions.jpg", "Software Development Solutions", "Ecorfy", "Social banner"],
// //   ["/work/ecorfy/samples/ecorfy-genai-ml.jpg", "Generative AI & ML", "Ecorfy", "Social banner"],
// //   ["/work/ecorfy/samples/ecorfy-it-professionals-day.jpg", "National IT Professionals Day", "Ecorfy", "Awareness day creative"],
// // ];

// // const testimonials = [
// //   ["Ravindra Raju", "Founder & Owner · Shrestha Pickles", "Working with Aditya has been a great experience. He efficiently manages our website, handles updates whenever needed, and supports our business operations and maintaining accurate records. His professionalism and dedication make him a dependable partner for our business."],
// //   ["Ujeetha Yasaswi (Branch Manager)", "Manager · Yamaha Motors", "During his tenure as Assistant Manager, Aditya demonstrated strong leadership, organizational, and customer service skills. He efficiently managed billing and invoice processing, coordinated daily operations, handled customer service concerns, and ensured smooth communication between customers and service teams. His professionalism, problem-solving abilities, and commitment to delivering excellent customer experiences made him a valuable asset to our organization."],
// //   ["Sitarama Raju", "CEO · Innovare Labs", "Aditya played an important role in supporting our digital marketing and promotional activities. His contributions to website development, content management, and conference promotions helped strengthen our brand presence within the aquaculture industry. He consistently demonstrated professionalism, creativity, and a strong commitment to delivering quality work."],
// //   ["Varma Bhupathiraju", "CEO · C-STAR Global Inc", "Aditya was an integral part of our marketing and digital presence. He managed our website, supported design updates, created marketing content, and played a key role in promoting our international conferences. His ability to combine creativity, technical skills, and marketing expertise helped strengthen our brand and effectively engage our target audience."],
// //   ["Swathi Gurijala", "HR Manager · Ecorfy Technologies Pvt Ltd", "Aditya successfully developed and maintained our company website, ensuring it remained professional, user-friendly, and up to date. He consistently delivered high-quality work, met project deadlines, and demonstrated a strong commitment to supporting our business goals. His professionalism, problem-solving abilities, and attention to detail made him a valuable member of our team."],
// // ];

// // const roles = ["Websites", "SEO", "Content", "Creative", "Events"];
// // const navLinks = [["About", "about"], ["Experience", "experience"], ["Work", "work"], ["Skills", "skills"], ["Testimonials", "testimonials"], ["Contact", "contact"]];
// // const totalSkills = skillGroups.reduce((a, g) => a + g.items.length, 0);

// // /* ------------------------------------------------------------------ */
// // /* GLOBAL CSS (self-contained — no globals.css dependency)             */
// // /* ------------------------------------------------------------------ */

// // const CSS = `
// // .av-blob{position:fixed;border-radius:9999px;filter:blur(110px);will-change:transform;pointer-events:none}
// // @keyframes av-drift-a{0%,100%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(14vw,9vh,0) scale(1.25)}}
// // @keyframes av-drift-b{0%,100%{transform:translate3d(0,0,0) scale(1.1)}50%{transform:translate3d(-12vw,-8vh,0) scale(.9)}}
// // @keyframes av-drift-c{0%,100%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(-8vw,12vh,0) scale(1.2)}}
// // .av-a{animation:av-drift-a 26s ease-in-out infinite}
// // .av-b{animation:av-drift-b 32s ease-in-out infinite}
// // .av-c{animation:av-drift-c 38s ease-in-out infinite}
// // .av-grain{background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");opacity:.07;mix-blend-mode:overlay}
// // @keyframes av-spin{to{transform:rotate(360deg)}}
// // .av-spin{animation:av-spin 48s linear infinite}
// // .av-spin-rev{animation:av-spin 48s linear infinite reverse}
// // .av-spin-slow{animation:av-spin 90s linear infinite reverse}
// // @keyframes av-pulse{0%,100%{opacity:.55;transform:scale(1)}50%{opacity:.95;transform:scale(1.08)}}
// // .av-pulse{animation:av-pulse 6s ease-in-out infinite}
// // @keyframes av-shine{0%{background-position:0% 50%}100%{background-position:200% 50%}}
// // .av-shine{background-size:200% 100%;animation:av-shine 7s linear infinite}
// // @keyframes av-marq{to{transform:translateX(-50%)}}
// // .av-marq{display:flex;width:max-content;animation:av-marq 48s linear infinite}
// // .av-marq-rev{animation-direction:reverse;animation-duration:56s}
// // .av-pausable:hover .av-marq{animation-play-state:paused}
// // .av-spot{position:relative}
// // .av-spot::before{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;opacity:0;transition:opacity .4s;background:radial-gradient(420px circle at var(--mx,50%) var(--my,50%),rgba(16,185,129,.16),transparent 45%)}
// // .av-spot::after{content:"";position:absolute;inset:0;border-radius:inherit;padding:1px;pointer-events:none;opacity:0;transition:opacity .4s;background:radial-gradient(320px circle at var(--mx,50%) var(--my,50%),rgba(110,231,183,.75),transparent 45%);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#000 0 0) content-box exclude,linear-gradient(#000 0 0)}
// // .av-spot:hover::before,.av-spot:hover::after{opacity:1}
// // .av-outline{-webkit-text-stroke:1px rgba(255,255,255,.22);color:transparent}
// // html{scroll-behavior:smooth}
// // @media (prefers-reduced-motion:reduce){.av-a,.av-b,.av-c,.av-spin,.av-spin-rev,.av-spin-slow,.av-pulse,.av-shine,.av-marq{animation:none!important}html{scroll-behavior:auto}}
// // `;

// // /* ------------------------------------------------------------------ */
// // /* BACKGROUND                                                          */
// // /* ------------------------------------------------------------------ */

// // function ParticleField() {
// //   const ref = useRef<HTMLCanvasElement>(null);
// //   useEffect(() => {
// //     const canvas = ref.current;
// //     if (!canvas) return;
// //     const ctx = canvas.getContext("2d");
// //     if (!ctx) return;
// //     const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
// //     const dpr = Math.min(window.devicePixelRatio || 1, 2);
// //     const mouse = { x: -9999, y: -9999 };
// //     type P = { x: number; y: number; vx: number; vy: number; r: number };
// //     let ps: P[] = [];
// //     let w = 0, h = 0, raf = 0;

// //     const init = () => {
// //       w = window.innerWidth; h = window.innerHeight;
// //       canvas.width = w * dpr; canvas.height = h * dpr;
// //       canvas.style.width = `${w}px`; canvas.style.height = `${h}px`;
// //       ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
// //       const n = Math.min(w < 768 ? 45 : 105, Math.floor((w * h) / 15000));
// //       ps = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.28, vy: (Math.random() - 0.5) * 0.28, r: Math.random() * 1.4 + 0.5 }));
// //     };

// //     const frame = () => {
// //       ctx.clearRect(0, 0, w, h);
// //       for (let i = 0; i < ps.length; i++) {
// //         const p = ps[i];
// //         if (!reduce) {
// //           p.x += p.vx; p.y += p.vy;
// //           if (p.x < -10) p.x = w + 10; else if (p.x > w + 10) p.x = -10;
// //           if (p.y < -10) p.y = h + 10; else if (p.y > h + 10) p.y = -10;
// //         }
// //         const mdx = p.x - mouse.x, mdy = p.y - mouse.y;
// //         const md = Math.hypot(mdx, mdy);
// //         if (md < 180) {
// //           ctx.strokeStyle = `rgba(110,231,183,${(1 - md / 180) * 0.55})`;
// //           ctx.lineWidth = 0.8;
// //           ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
// //           if (!reduce) { p.x += (mdx / md) * 0.35; p.y += (mdy / md) * 0.35; }
// //         }
// //         for (let j = i + 1; j < ps.length; j++) {
// //           const q = ps[j];
// //           const d = Math.hypot(p.x - q.x, p.y - q.y);
// //           if (d < 125) {
// //             ctx.strokeStyle = `rgba(16,185,129,${(1 - d / 125) * 0.28})`;
// //             ctx.lineWidth = 0.6;
// //             ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
// //           }
// //         }
// //         ctx.fillStyle = "rgba(209,250,229,.75)";
// //         ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
// //       }
// //       if (!reduce) raf = requestAnimationFrame(frame);
// //     };

// //     const onMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
// //     const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };
// //     const onResize = () => { init(); if (reduce) frame(); };
// //     const onVis = () => { if (document.hidden) cancelAnimationFrame(raf); else if (!reduce) raf = requestAnimationFrame(frame); };

// //     init(); frame();
// //     window.addEventListener("mousemove", onMove, { passive: true });
// //     window.addEventListener("mouseleave", onLeave);
// //     window.addEventListener("resize", onResize);
// //     document.addEventListener("visibilitychange", onVis);
// //     return () => {
// //       cancelAnimationFrame(raf);
// //       window.removeEventListener("mousemove", onMove);
// //       window.removeEventListener("mouseleave", onLeave);
// //       window.removeEventListener("resize", onResize);
// //       document.removeEventListener("visibilitychange", onVis);
// //     };
// //   }, []);
// //   return <canvas ref={ref} aria-hidden className="fixed inset-0 z-[1] pointer-events-none" />;
// // }

// // function CursorGlow() {
// //   const mx = useMotionValue(-600);
// //   const my = useMotionValue(-600);
// //   const sx = useSpring(mx, { stiffness: 90, damping: 20, mass: 0.6 });
// //   const sy = useSpring(my, { stiffness: 90, damping: 20, mass: 0.6 });
// //   const x = useTransform(sx, v => v - 280);
// //   const y = useTransform(sy, v => v - 280);
// //   useEffect(() => {
// //     const move = (e: MouseEvent) => { mx.set(e.clientX); my.set(e.clientY); };
// //     window.addEventListener("mousemove", move, { passive: true });
// //     return () => window.removeEventListener("mousemove", move);
// //   }, [mx, my]);
// //   return <motion.div aria-hidden style={{ x, y }} className="pointer-events-none fixed left-0 top-0 z-[2] hidden h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,.17),transparent_62%)] lg:block" />;
// // }

// // function Backdrop() {
// //   return <div aria-hidden className="pointer-events-none fixed inset-0 z-0 bg-[#04100d]">
// //     <div className="av-blob av-a -left-[10vw] -top-[12vh] h-[55vw] w-[55vw] max-h-[760px] max-w-[760px] bg-emerald-700/35" />
// //     <div className="av-blob av-b -right-[8vw] top-[18vh] h-[48vw] w-[48vw] max-h-[680px] max-w-[680px] bg-cyan-500/20" />
// //     <div className="av-blob av-c bottom-[-18vh] left-[22vw] h-[50vw] w-[50vw] max-h-[700px] max-w-[700px] bg-teal-600/20" />
// //     <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_72%)]" />
// //     <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(7,6,13,.85)_100%)]" />
// //   </div>;
// // }

// // /* ------------------------------------------------------------------ */
// // /* PRIMITIVES                                                          */
// // /* ------------------------------------------------------------------ */

// // function ScrollProgress() {
// //   const { scrollYProgress } = useScroll();
// //   const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.3 });
// //   return <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-300" />;
// // }

// // function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
// //   const reduce = useReducedMotion();
// //   return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 36, filter: "blur(10px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.85, delay, ease: EASE }}>{children}</motion.div>;
// // }

// // function SpotCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
// //   const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
// //     const r = e.currentTarget.getBoundingClientRect();
// //     e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
// //     e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
// //   };
// //   return <div onMouseMove={onMove} className={`av-spot ${className}`}>{children}</div>;
// // }

// // function Tilt({ children, className = "" }: { children: React.ReactNode; className?: string }) {
// //   const reduce = useReducedMotion();
// //   const ref = useRef<HTMLDivElement>(null);
// //   const px = useMotionValue(0);
// //   const py = useMotionValue(0);
// //   const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [5, -5]), { stiffness: 200, damping: 20 });
// //   const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-5, 5]), { stiffness: 200, damping: 20 });
// //   const onMove = (e: React.MouseEvent) => {
// //     if (reduce || !ref.current) return;
// //     const r = ref.current.getBoundingClientRect();
// //     px.set((e.clientX - r.left) / r.width - 0.5);
// //     py.set((e.clientY - r.top) / r.height - 0.5);
// //   };
// //   return <motion.div ref={ref} onMouseMove={onMove} onMouseLeave={() => { px.set(0); py.set(0); }} style={{ rotateX, rotateY, transformPerspective: 1100 }} className={className}>{children}</motion.div>;
// // }

// // function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
// //   const ref = useRef<HTMLSpanElement>(null);
// //   const inView = useInView(ref, { once: true });
// //   const reduce = useReducedMotion();
// //   const [v, setV] = useState(0);
// //   useEffect(() => {
// //     if (!inView) return;
// //     if (reduce) { setV(to); return; }
// //     const c = animate(0, to, { duration: 1.6, ease: EASE, onUpdate: x => setV(Math.round(x)) });
// //     return () => c.stop();
// //   }, [inView, to, reduce]);
// //   return <span ref={ref}>{String(v).padStart(2, "0")}{suffix}</span>;
// // }

// // function SectionHead({ n, kicker, children, sub }: { n: string; kicker: string; children: React.ReactNode; sub?: string }) {
// //   return <Reveal>
// //     <div className="flex items-center gap-4">
// //       <span className="av-outline font-mono text-5xl font-semibold leading-none sm:text-6xl">{n}</span>
// //       <span className="h-px w-12 bg-gradient-to-r from-emerald-400/70 to-transparent" />
// //       <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">{kicker}</span>
// //     </div>
// //     <div className="mt-7 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
// //       <h2 className="max-w-4xl text-[clamp(44px,6.6vw,92px)] font-semibold leading-[.9] tracking-[-.06em] text-white">{children}</h2>
// //       {sub && <p className="max-w-sm text-sm leading-7 text-zinc-400">{sub}</p>}
// //     </div>
// //   </Reveal>;
// // }

// // const Grad = ({ children }: { children: React.ReactNode }) => <span className="av-shine bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">{children}</span>;

// // /* ------------------------------------------------------------------ */
// // /* HERO                                                                */
// // /* ------------------------------------------------------------------ */

// // function RotatingWord() {
// //   const [i, setI] = useState(0);
// //   useEffect(() => { const t = setInterval(() => setI(x => (x + 1) % roles.length), 2200); return () => clearInterval(t); }, []);
// //   return <span className="relative inline-flex h-[1.4em] min-w-[7.5ch] items-center overflow-hidden align-bottom">
// //     <AnimatePresence mode="wait">
// //       <motion.span key={roles[i]} initial={{ y: "100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-100%", opacity: 0 }} transition={{ duration: 0.45, ease: EASE }} className="absolute left-0 font-semibold text-white">{roles[i]}</motion.span>
// //     </AnimatePresence>
// //   </span>;
// // }

// // function WordReveal({ text, delay = 0, grad = false }: { text: string; delay?: number; grad?: boolean }) {
// //   const reduce = useReducedMotion();
// //   return <>{text.split(" ").map((w, i) => <span key={`${w}-${i}`} className="inline-block overflow-hidden pb-[.16em] -mb-[.16em] align-bottom"><motion.span className="inline-block" initial={reduce ? false : { y: "115%", rotate: 5 }} animate={{ y: 0, rotate: 0 }} transition={{ duration: 1, delay: delay + i * 0.09, ease: EASE }}>{grad ? <Grad>{w}</Grad> : w}&nbsp;</motion.span></span>)}</>;
// // }

// // function Orbit() {
// //   const chips: [string, string, number][] = [["SEO", "01", 0], ["CONTENT", "02", 90], ["CREATIVE", "03", 180], ["EXECUTE", "04", 270]];
// //   return <div className="relative mx-auto aspect-square w-full max-w-[480px]">
// //     <div className="av-pulse absolute inset-[16%] rounded-full bg-emerald-600/35 blur-3xl" />
// //     <div className="av-pulse absolute inset-[30%] rounded-full bg-cyan-400/20 blur-3xl [animation-delay:-3s]" />
// //     <div className="av-spin absolute inset-[3%] rounded-full border border-white/10">
// //       {chips.map(([label, n, deg]) => <div key={label} className="absolute inset-0" style={{ transform: `rotate(${deg}deg)` }}>
// //         <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
// //           <div style={{ transform: `rotate(${-deg}deg)` }}><div className="av-spin-rev">
// //             <div className="whitespace-nowrap rounded-xl border border-white/15 bg-white/[.08] px-3 py-2 font-mono text-[10px] text-white shadow-[0_10px_40px_rgba(16,185,129,.25)] backdrop-blur-md"><span className="mr-2 text-emerald-300">{n}</span>{label}</div>
// //           </div></div>
// //         </div>
// //       </div>)}
// //     </div>
// //     <div className="av-spin-slow absolute inset-[20%] rounded-full border border-dashed border-emerald-300/25">
// //       <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,.9)]" />
// //       <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-teal-300 shadow-[0_0_14px_rgba(94,234,212,.9)]" />
// //     </div>
// //     <div className="absolute inset-[35%] grid place-items-center rounded-full border border-white/20 bg-[radial-gradient(circle_at_30%_25%,rgba(52,211,153,.55),rgba(24,16,48,.95)_62%)] text-center shadow-[0_0_80px_rgba(16,185,129,.45),inset_0_0_30px_rgba(255,255,255,.08)]">
// //       <div><p className="font-mono text-[7px] uppercase tracking-[.2em] text-emerald-200/80 sm:text-[8px]">Digital workflow</p><strong className="mt-2 block text-xl font-semibold leading-[.95] tracking-[-.05em] text-white sm:text-2xl">IDEA<br />TO<br /><Grad>IMPACT.</Grad></strong></div>
// //     </div>
// //   </div>;
// // }

// // function Hero() {
// //   const reduce = useReducedMotion();
// //   const { scrollY } = useScroll();
// //   const textY = useTransform(scrollY, [0, 700], [0, 70]);
// //   const orbY = useTransform(scrollY, [0, 700], [0, 130]);
// //   const fade = useTransform(scrollY, [0, 600], [1, 0.25]);
// //   const stats: [number, string, string][] = [[2, "Years hands-on", "+"], [projects.length, "Featured projects", ""], [experience.length, "Companies", ""], [totalSkills, "Skills & tools", ""]];
// //   return <section id="home" className="relative flex min-h-screen flex-col justify-center pb-16 pt-32 sm:pt-36">
// //     <div className="mx-auto grid w-[min(1240px,calc(100%-32px))] items-center gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-8">
// //       <motion.div style={{ y: reduce ? 0 : textY, opacity: reduce ? 1 : fade }}>
// //         <motion.div initial={reduce ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }} className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[.05] px-4 py-2 font-mono text-[10px] uppercase tracking-[.16em] text-zinc-300 backdrop-blur-md">
// //           <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" /></span>
// //           Available for projects
// //         </motion.div>
// //         <h1 className="mt-8 max-w-5xl text-[clamp(54px,8.4vw,122px)] font-semibold leading-[.86] tracking-[-.07em] text-white">
// //           <WordReveal text="I make digital work" delay={0.15} />
// //           <WordReveal text="worth noticing." delay={0.55} grad />
// //         </h1>
// //         <motion.p initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1, ease: EASE }} className="mt-8 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">Digital Marketing Executive working across websites, SEO, social media, content development, creative production and event communication.</motion.p>
// //         <motion.div initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.1, ease: EASE }} className="mt-6 flex items-center gap-3 text-lg text-zinc-500 sm:text-xl">Specialising in <RotatingWord /></motion.div>
// //         <motion.div initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.2, ease: EASE }} className="mt-9 flex flex-wrap items-center gap-3">
// //           <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} href="#work" className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-xs font-bold text-zinc-950 shadow-[0_0_50px_rgba(52,211,153,.35)] transition hover:bg-emerald-200">Explore real projects <ArrowRight size={14} className="transition group-hover:translate-x-1" /></motion.a>
// //           <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}><Link href="/work-samples" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.05] px-6 py-3.5 text-xs font-bold text-white backdrop-blur-md transition hover:border-white/40">Open work archive <ArrowRight size={14} /></Link></motion.div>
// //         </motion.div>
// //       </motion.div>
// //       <motion.div style={{ y: reduce ? 0 : orbY }} initial={reduce ? false : { opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.4, ease: EASE }}><Orbit /></motion.div>
// //     </div>
// //     <motion.div initial={reduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 1.4, ease: EASE }} className="mx-auto mt-16 w-[min(1240px,calc(100%-32px))]">
// //       <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl md:grid-cols-4">
// //         {stats.map(([n, label, suffix]) => <div key={label} className="bg-[#071612]/80 px-6 py-6"><div className="text-4xl font-semibold tracking-[-.05em] text-white sm:text-5xl"><CountUp to={n} suffix={suffix} /></div><p className="mt-2 font-mono text-[9px] uppercase tracking-[.16em] text-zinc-500">{label}</p></div>)}
// //       </div>
// //     </motion.div>
// //     <a href="#about" aria-label="Scroll to about" className="mx-auto mt-10 hidden items-center gap-2 font-mono text-[9px] uppercase tracking-[.18em] text-zinc-500 sm:flex">Scroll to explore <motion.span animate={reduce ? undefined : { y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}><ArrowDown size={13} /></motion.span></a>
// //   </section>;
// // }

// // /* ------------------------------------------------------------------ */
// // /* SECTIONS                                                            */
// // /* ------------------------------------------------------------------ */

// // function About() {
// //   const range = ["Websites", "SEO", "Social", "Content", "Creative", "Events", "Publishing", "Automation"];
// //   return <section id="about" className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// //     <SectionHead n="01" kicker="About me">I work where <Grad>marketing, content and execution</Grad> meet.</SectionHead>
// //     <div className="mt-14 grid gap-5 lg:grid-cols-[1.25fr_.75fr]">
// //       <Reveal><SpotCard className="h-full rounded-[28px] border border-white/10 bg-white/[.03] p-8 backdrop-blur-xl sm:p-10"><p className="text-xl leading-8 tracking-[-.02em] text-zinc-300 sm:text-2xl sm:leading-10">I enjoy taking a raw idea, messy information or business requirement and turning it into something structured, visual, useful and ready to publish — whether that is a website, campaign, social post, blog, conference asset or digital workflow.</p></SpotCard></Reveal>
// //       <Reveal delay={0.1}><SpotCard className="h-full rounded-[28px] border border-white/10 bg-white/[.03] p-6 backdrop-blur-xl"><p className="font-mono text-[9px] uppercase tracking-[.16em] text-zinc-500">My working range</p>
// //         <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }} className="mt-6 grid grid-cols-2 gap-2">{range.map((x, i) => <motion.span key={x} variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } } }} whileHover={{ y: -2 }} className="rounded-xl border border-white/10 bg-white/[.04] px-3 py-3 text-[10px] font-bold text-zinc-300 transition-colors hover:border-emerald-400/50 hover:text-white"><span className="mr-1.5 text-emerald-400">0{i + 1}</span>{x}</motion.span>)}</motion.div>
// //       </SpotCard></Reveal>
// //     </div>
// //   </div></section>;
// // }

// // function Experience() {
// //   const ref = useRef<HTMLDivElement>(null);
// //   const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
// //   const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 26 });
// //   return <section id="experience" className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// //     <SectionHead n="02" kicker="Career timeline" sub="Six roles across digital marketing, content, software and cloud engineering, CAD design and service operations.">Where I’ve worked. <Grad>What I’ve done.</Grad></SectionHead>
// //     <div ref={ref} className="relative mt-16 space-y-8">
// //       <div className="absolute bottom-0 left-[7px] top-0 w-px bg-white/10 md:left-[187px]" />
// //       <motion.div style={{ scaleY }} className="absolute bottom-0 left-[7px] top-0 w-px origin-top bg-gradient-to-b from-emerald-400 via-teal-300 to-cyan-300 shadow-[0_0_12px_rgba(52,211,153,.8)] md:left-[187px]" />
// //       {experience.map((job, i) => <Reveal key={job.company} delay={0.05}>
// //         <div className="relative grid gap-5 pl-9 md:grid-cols-[180px_1fr] md:gap-14 md:pl-0">
// //           <span className={`absolute left-0 top-8 h-[15px] w-[15px] rounded-full border-2 bg-[#04100d] md:left-[180px] ${job.current ? "border-cyan-300 shadow-[0_0_16px_rgba(103,232,249,.9)]" : "border-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.6)]"}`} />
// //           <div className="md:pt-7 md:text-right"><p className="font-mono text-[10px] uppercase tracking-[.14em] text-emerald-300">0{i + 1} / Experience</p><p className="mt-2 font-mono text-[10px] uppercase leading-5 tracking-[.08em] text-zinc-500">{job.dates}<br />{job.location}</p>{"type" in job && job.type && <span className="mt-3 inline-block rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 font-mono text-[8px] uppercase tracking-[.12em] text-amber-200">{job.type}</span>}{job.current && <span className="mt-3 inline-block rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 font-mono text-[8px] uppercase tracking-[.12em] text-cyan-200">Present</span>}</div>
// //           <Tilt><SpotCard className="rounded-[26px] border border-white/10 bg-white/[.035] p-6 backdrop-blur-xl sm:p-8">
// //             <div className="flex items-start gap-4"><div className="relative h-12 w-20 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white sm:w-24"><Image src={job.logo} alt={`${job.company} logo`} fill sizes="96px" className="object-contain p-1.5" /></div><div><h3 className="text-xl font-semibold tracking-[-.03em] text-white sm:text-2xl">{job.role}</h3><a href={job.href ?? "#"} target={job.href ? "_blank" : undefined} rel={job.href ? "noreferrer" : undefined} className="mt-1 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300 transition hover:text-white">{job.company}{job.href && <ExternalLink size={11} />}</a></div></div>
// //             <p className="mt-6 text-sm leading-7 text-zinc-400">{job.description}</p>
// //             <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-5">{job.points.map(p => <li key={p} className="flex gap-3 text-xs leading-6 text-zinc-300"><span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-emerald-400" />{p}</li>)}</ul>
// //             <div className="mt-6 flex flex-wrap gap-2">{job.tags.map(t => <span key={t} className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[9px] font-semibold text-emerald-200">{t}</span>)}</div>
// //           </SpotCard></Tilt>
// //         </div>
// //       </Reveal>)}
// //     </div>
// //   </div></section>;
// // }

// // function Work() {
// //   return <section id="work" className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// //     <SectionHead n="03" kicker="Selected work" sub="A selection of websites and digital experiences across aquaculture, conferences, technology and consumer brands.">Real projects. <Grad>Clear outcomes.</Grad></SectionHead>
// //     <div className="mt-6"><Link href="/work-samples" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.05] px-5 py-2.5 text-xs font-bold text-white backdrop-blur-md transition hover:border-emerald-400/60">Explore all work <ArrowRight size={14} /></Link></div>
// //     <div className="mt-14 space-y-8">
// //       {projects.map((project, i) => <Reveal key={project.id}>
// //         <SpotCard className="group relative rounded-[32px] border border-white/10 bg-white/[.03] p-4 backdrop-blur-xl sm:p-6">
// //           <div className={`pointer-events-none absolute -z-10 h-72 w-72 rounded-full blur-[100px] ${project.glow} ${i % 2 ? "-left-10 top-10" : "-right-10 top-10"}`} />
// //           <div className={`grid items-center gap-8 ${i % 2 ? "lg:grid-cols-[.9fr_1.1fr]" : "lg:grid-cols-[1.1fr_.9fr]"}`}>
// //             <div className={i % 2 ? "lg:order-2" : ""}>
// //               <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-[0_30px_80px_rgba(0,0,0,.5)]">
// //                 <div className="flex items-center gap-2 border-b border-white/10 bg-zinc-900 px-4 py-3"><span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" /><span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" /><span className="ml-3 truncate rounded-md bg-white/5 px-3 py-1 font-mono text-[9px] text-zinc-500">{project.link ? project.link.replace("https://", "") : project.company}</span></div>
// //                 <div className="flex h-[240px] items-center justify-center overflow-hidden bg-[#f4f4f5] sm:h-[330px]"><Image src={project.image} alt={`${project.company} website preview`} width={1100} height={760} className="h-full w-full object-contain object-center transition duration-700 ease-out group-hover:scale-[1.04]" /></div>
// //               </div>
// //             </div>
// //             <div className="px-2 pb-2 lg:px-6">
// //               <div className="flex items-center gap-3"><span className="av-outline font-mono text-4xl font-semibold">{project.id}</span><span className="rounded-full border border-white/10 bg-white/[.05] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[.12em] text-zinc-400">{project.label}</span></div>
// //               <p className="mt-6 font-mono text-[10px] uppercase tracking-[.16em] text-emerald-300">{project.company}</p>
// //               <h3 className="mt-3 text-3xl font-semibold leading-[1.05] tracking-[-.045em] text-white sm:text-4xl">{project.title}</h3>
// //               <p className="mt-4 text-sm leading-7 text-zinc-400">{project.description}</p>
// //               <div className="mt-7 flex flex-wrap gap-2.5"><Link href={`/work/${project.slug}`} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold text-zinc-950 transition hover:bg-emerald-200">View project <ArrowRight size={13} /></Link>{project.link && <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-xs font-bold text-white transition hover:border-white/50">Live website <ExternalLink size={13} /></a>}</div>
// //             </div>
// //           </div>
// //         </SpotCard>
// //       </Reveal>)}
// //     </div>
// //   </div></section>;
// // }

// // function ArchivePreview() {
// //   const half = Math.ceil(archive.length / 2);
// //   const rowOne = archive.slice(0, half);
// //   const rowTwo = archive.slice(half);
// //   const tile = ([src, title, company, format]: string[], key: string) => <Link href="/work-samples" key={key} className="group mr-4 w-[220px] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[.04] backdrop-blur-md transition hover:-translate-y-1 hover:border-emerald-400/50 sm:w-[260px]"><div className="flex h-[150px] items-center justify-center overflow-hidden bg-[#f2f1ef] p-3 sm:h-[180px] sm:p-4"><Image src={src} alt={title} width={520} height={420} className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.05]" /></div><div className="px-4 py-3"><p className="truncate font-mono text-[8px] uppercase tracking-[.1em] text-zinc-500">{company} · {format}</p><h3 className="mt-1.5 truncate text-xs font-bold text-zinc-100">{title}</h3></div></Link>;
// //   const row = (items: string[][], prefix: string) => [...items, ...items].map((it, i) => tile(it, `${prefix}-${i}`));
// //   return <section className="relative overflow-hidden py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// //     <SectionHead n="04" kicker="Creative archive" sub="Banners, carousel templates, event graphics and publications — moving gently so you can browse the range at a glance.">A closer look at <Grad>the creative work.</Grad></SectionHead>
// //     <div className="mt-6"><Link href="/work-samples" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold text-zinc-950 transition hover:bg-emerald-200">View all samples <ArrowRight size={14} /></Link></div>
// //   </div>
// //     <div className="av-pausable relative mt-12 space-y-4">
// //       <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#04100d] to-transparent sm:w-40" />
// //       <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#04100d] to-transparent sm:w-40" />
// //       <div className="av-marq">{row(rowOne, "a")}</div>
// //       <div className="av-marq av-marq-rev">{row(rowTwo, "b")}</div>
// //     </div>
// //     <p className="mt-7 text-center text-[10px] text-zinc-500">Hover to pause · Select any sample to open the complete archive</p>
// //   </section>;
// // }

// // function Skills() {
// //   return <section id="skills" className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// //     <SectionHead n="05" kicker="Skills & tools" sub="A straightforward overview of the marketing disciplines, measurement tools, creative apps and publishing platforms I work with.">The skills behind <Grad>the work.</Grad></SectionHead>
// //     <div className="mt-14 grid gap-5 lg:grid-cols-3">
// //       {skillGroups.map((group, gi) => <Reveal key={group.title} delay={gi * 0.08}><SpotCard className="h-full rounded-[28px] border border-white/10 bg-white/[.03] p-6 backdrop-blur-xl sm:p-7">
// //         <div className="flex items-end justify-between border-b border-white/10 pb-4"><h3 className="text-lg font-semibold tracking-[-.03em] text-white">{group.title}</h3><span className="font-mono text-[9px] uppercase tracking-[.14em] text-zinc-500">{String(group.items.length).padStart(2, "0")} items</span></div>
// //         <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03 } } }} className="mt-5 flex flex-wrap gap-2">{group.items.map(item => <motion.span key={item} variants={{ hidden: { opacity: 0, y: 12, scale: 0.94 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: EASE } } }} whileHover={{ y: -2 }} className="cursor-default rounded-full border border-white/10 bg-white/[.04] px-3.5 py-2 text-xs font-medium text-zinc-300 transition-colors hover:border-emerald-400/60 hover:bg-emerald-400/10 hover:text-white">{item}</motion.span>)}</motion.div>
// //       </SpotCard></Reveal>)}
// //     </div>
// //   </div></section>;
// // }

// // function Process() {
// //   const steps = [["01", "Understand", "Goal · audience · message"], ["02", "Structure", "Content · information · flow"], ["03", "Create", "Design · video · visual system"], ["04", "Execute", "Publish · schedule · maintain"]];
// //   return <section className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// //     <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-emerald-600/30 via-[#0a1f1b] to-cyan-500/10 p-8 backdrop-blur-xl sm:p-14">
// //       <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_75%)]" />
// //       <div className="relative"><SectionHead n="06" kicker="How I work">From brief to <Grad>publish-ready.</Grad></SectionHead>
// //         <div className="relative mt-14 grid gap-3 md:grid-cols-4">
// //           <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 1.5, ease: EASE }} className="pointer-events-none absolute left-[10%] right-[10%] top-[46px] hidden h-px origin-left bg-gradient-to-r from-emerald-300/60 via-teal-300/60 to-cyan-300/60 md:block" />
// //           {steps.map(([n, title, desc], i) => <Reveal key={n} delay={i * 0.1}><motion.article whileHover={{ y: -6 }} transition={{ duration: 0.3, ease: EASE }} className="h-full rounded-[24px] border border-white/10 bg-white/[.05] p-6 backdrop-blur-xl transition-colors hover:bg-white/[.09]"><span className="grid h-10 w-10 place-items-center rounded-full border border-emerald-300/40 bg-[#0a1f1b] font-mono text-[10px] text-emerald-200 shadow-[0_0_20px_rgba(52,211,153,.4)]">{n}</span><h3 className="mt-12 text-2xl font-semibold tracking-[-.04em] text-white">{title}</h3><p className="mt-2 text-xs leading-5 text-zinc-400">{desc}</p></motion.article></Reveal>)}
// //         </div>
// //       </div>
// //     </div>
// //   </div></section>;
// // }

// // function Insights() {
// //   return <section id="insights" className="relative py-28 sm:py-36"><div className="mx-auto grid w-[min(1240px,calc(100%-32px))] items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
// //     <Reveal><div className="flex items-center gap-4"><span className="av-outline font-mono text-5xl font-semibold leading-none sm:text-6xl">07</span><span className="h-px w-12 bg-gradient-to-r from-emerald-400/70 to-transparent" /><span className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">Insights · publishing</span></div>
// //       <h2 className="mt-7 text-[clamp(42px,6vw,88px)] font-semibold leading-[.92] tracking-[-.06em] text-white">Content is not decoration. <Grad>It is part of the product.</Grad></h2>
// //       <p className="mt-7 max-w-xl text-sm leading-7 text-zinc-400">The portfolio can keep expanding with published articles, SEO work, case studies and content projects as more source material is added.</p></Reveal>
// //     <Reveal delay={0.1}><Tilt><SpotCard className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[.04] p-3 shadow-[0_40px_100px_rgba(0,0,0,.5)] backdrop-blur-xl"><Image src="/work/innovare/blog.png" alt="Innovare blog publishing preview" width={900} height={650} className="h-[360px] w-full rounded-[24px] object-cover object-top" /><div className="p-4"><p className="font-mono text-[8px] uppercase tracking-[.14em] text-zinc-500">SEO · Content · Publishing</p><h3 className="mt-2 text-lg font-semibold text-white">Technical content presented as a usable digital experience.</h3></div></SpotCard></Tilt></Reveal>
// //   </div></section>;
// // }

// // function Testimonials() {
// //   const card = ([name, role, quote]: string[], key: string) => <SpotCard key={key} className="mr-5 flex w-[320px] shrink-0 flex-col rounded-[28px] border border-white/10 bg-white/[.035] p-7 backdrop-blur-xl transition-colors hover:border-emerald-400/30 sm:w-[420px] sm:p-8">
// //     <Quote className="text-emerald-400" size={28} />
// //     <div className="mt-6 text-sm tracking-[.2em] text-amber-300">★★★★★</div>
// //     <p className="mt-5 flex-1 whitespace-normal text-[15px] leading-7 tracking-[-.01em] text-zinc-200 sm:text-base sm:leading-8">“{quote}”</p>
// //     <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-emerald-500 to-cyan-400 text-sm font-bold text-white">{name[0]}</span><div className="whitespace-normal"><b className="block text-sm text-white">{name}</b><span className="mt-0.5 block text-[10px] text-zinc-500">{role}</span></div></div>
// //   </SpotCard>;
// //   const row = (list: string[][], prefix: string) => [...list, ...list].map((t, i) => card(t, `${prefix}-${i}`));
// //   const reversed = [...testimonials].reverse();
// //   return <section id="testimonials" className="relative overflow-hidden py-28 sm:py-36">
// //     <div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// //       <SectionHead n="08" kicker="Testimonials" sub="Words from the founders, managers and teams I’ve worked with — scrolling continuously. Hover to pause.">Good work should be <Grad>remembered.</Grad></SectionHead>
// //     </div>
// //     <div className="av-pausable relative mt-14 space-y-5">
// //       <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#04100d] to-transparent sm:w-40" />
// //       <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#04100d] to-transparent sm:w-40" />
// //       <div className="av-marq items-stretch" style={{ animationDuration: "90s" }}>{row(testimonials, "a")}</div>
// //       <div className="av-marq av-marq-rev items-stretch" style={{ animationDuration: "105s" }}>{row(reversed, "b")}</div>
// //     </div>
// //   </section>;
// // }

// // function Contact() {
// //   return <section id="contact" className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
// //     <Reveal><div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[.03] p-8 backdrop-blur-xl sm:p-14">
// //       <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-emerald-600/30 blur-[110px]" />
// //       <div className="pointer-events-none absolute -bottom-24 left-10 h-80 w-80 rounded-full bg-cyan-500/15 blur-[110px]" />
// //       <div className="relative flex items-center gap-4"><span className="av-outline font-mono text-5xl font-semibold leading-none sm:text-6xl">09</span><span className="h-px w-12 bg-gradient-to-r from-emerald-400/70 to-transparent" /><span className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">Contact</span></div>
// //       <h2 className="relative mt-8 max-w-5xl text-[clamp(46px,7.2vw,108px)] font-semibold leading-[.88] tracking-[-.07em] text-white">Let’s build something <Grad>worth showing.</Grad></h2>
// //       <div className="relative mt-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
// //         <p className="max-w-md text-sm leading-7 text-zinc-400">Available for digital marketing, website, content, social media and creative projects.</p>
// //         <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
// //           <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} href="mailto:hello@adityavarma.dev" className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-xs font-bold text-zinc-950 shadow-[0_0_50px_rgba(52,211,153,.35)] transition-colors hover:bg-emerald-200"><Mail size={14} /> hello@adityavarma.dev <ArrowRight size={14} /></motion.a>
// //           <div className="flex gap-2"><motion.a whileHover={{ y: -3 }} href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[.05] text-white transition-colors hover:border-emerald-400/70"><Linkedin size={15} /></motion.a><motion.a whileHover={{ y: -3 }} href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[.05] text-white transition-colors hover:border-emerald-400/70"><Instagram size={15} /></motion.a></div>
// //         </div>
// //       </div>
// //     </div></Reveal>
// //     <footer className="mt-10 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 font-mono text-[9px] uppercase tracking-[.14em] text-zinc-500 sm:flex-row"><span>© 2026 Aditya Varma</span><span>Digital Marketing · Web · Content · Creative</span></footer>
// //   </div></section>;
// // }

// // /* ------------------------------------------------------------------ */
// // /* PAGE                                                                */
// // /* ------------------------------------------------------------------ */

// // export default function Portfolio() {
// //   const [menu, setMenu] = useState(false);
// //   const [active, setActive] = useState("home");
// //   const [scrolled, setScrolled] = useState(false);
// //   const [showTop, setShowTop] = useState(false);

// //   useEffect(() => {
// //     const ids = ["home", ...navLinks.map(([, id]) => id)];
// //     const els = ids.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];
// //     const io = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }); }, { rootMargin: "-45% 0px -50% 0px" });
// //     els.forEach(el => io.observe(el));
// //     const onScroll = () => { setScrolled(window.scrollY > 24); setShowTop(window.scrollY > 700); };
// //     onScroll();
// //     window.addEventListener("scroll", onScroll, { passive: true });
// //     return () => { io.disconnect(); window.removeEventListener("scroll", onScroll); };
// //   }, []);

// //   return <main className="relative min-h-screen overflow-x-clip bg-[#04100d] text-zinc-100 selection:bg-emerald-500/40">
// //     <style>{CSS}</style>
// //     <Backdrop />
// //     <ParticleField />
// //     <CursorGlow />
// //     <div aria-hidden className="av-grain pointer-events-none fixed inset-0 z-[3]" />
// //     <ScrollProgress />

// //     <motion.header style={{ x: "-50%" }} initial={{ y: -70, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, delay: 0.1, ease: EASE }} className={`fixed left-1/2 top-4 z-[60] flex w-[min(1180px,calc(100%-20px))] items-center justify-between rounded-2xl border px-3 py-2.5 backdrop-blur-2xl transition-all duration-500 ${scrolled ? "border-white/15 bg-[#09171a]/80 shadow-[0_18px_60px_rgba(0,0,0,.5)]" : "border-white/10 bg-white/[.04]"}`}>
// //       <a href="#home" className="flex items-center gap-2.5"><span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-400 text-[10px] font-bold text-white shadow-[0_0_20px_rgba(16,185,129,.5)]">AV</span><span><b className="block text-[11px] leading-none text-white">Aditya Varma</b><small className="mt-1 block text-[7px] uppercase tracking-[.12em] text-zinc-500">Digital Marketing Executive</small></span></a>
// //       <nav className="hidden items-center gap-1 lg:flex">{navLinks.map(([label, id]) => <a key={id} href={`#${id}`} className={`relative rounded-full px-3 py-1.5 text-[10px] font-semibold transition-colors ${active === id ? "text-white" : "text-zinc-400 hover:text-white"}`}>{active === id && <motion.span layoutId="nav-pill" transition={{ type: "spring", stiffness: 380, damping: 32 }} className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/10" />}{label}</a>)}<Link href="/work-samples" className="rounded-full px-3 py-1.5 text-[10px] font-semibold text-zinc-400 transition hover:text-white">Work Archive</Link></nav>
// //       <a href="#contact" className="hidden items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[10px] font-bold text-zinc-950 transition hover:bg-emerald-200 lg:inline-flex">Let’s talk <ArrowRight size={12} /></a>
// //       <button onClick={() => setMenu(!menu)} className="grid h-9 w-9 place-items-center rounded-xl border border-white/15 bg-white/5 text-white lg:hidden" aria-label="Toggle menu" aria-expanded={menu}>{menu ? <X size={16} /> : <Menu size={16} />}</button>
// //       <AnimatePresence>{menu && <motion.div initial={{ opacity: 0, y: -8, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8, scale: 0.97 }} transition={{ duration: 0.25, ease: EASE }} className="absolute right-0 top-14 w-64 origin-top-right rounded-2xl border border-white/15 bg-[#09171a]/95 p-2 shadow-2xl backdrop-blur-2xl lg:hidden">{navLinks.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenu(false)} className={`block rounded-xl px-3 py-3 text-xs font-semibold hover:bg-white/5 ${active === id ? "text-emerald-300" : "text-zinc-300"}`}>{label}</a>)}<Link href="/work-samples" onClick={() => setMenu(false)} className="block rounded-xl px-3 py-3 text-xs font-semibold text-zinc-300 hover:bg-white/5">Work Archive</Link></motion.div>}</AnimatePresence>
// //     </motion.header>

// //     <div className="relative z-10">
// //       <Hero />
// //       <About />
// //       <Experience />
// //       <Work />
// //       <ArchivePreview />
// //       <Skills />
// //       <Process />
// //       <Insights />
// //       <Testimonials />
// //       <Contact />
// //     </div>

// //     <AnimatePresence>{showTop && <motion.a href="#home" aria-label="Back to top" initial={{ opacity: 0, y: 16, scale: 0.8 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.8 }} whileHover={{ y: -3 }} className="fixed bottom-6 right-6 z-[60] grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-[#09171a]/80 text-white shadow-[0_10px_40px_rgba(0,0,0,.5)] backdrop-blur-xl transition-colors hover:border-emerald-400/70"><ArrowUp size={16} /></motion.a>}</AnimatePresence>
// //   </main>;
// // }
// "use client";

// import { ArrowDown, ArrowRight, ArrowUp, ExternalLink, Instagram, Linkedin, Mail, Menu, Quote, X } from "lucide-react";
// import { AnimatePresence, animate, motion, useInView, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";
// import { useEffect, useRef, useState } from "react";

// const EASE = [0.16, 1, 0.3, 1] as const;

// /* ------------------------------------------------------------------ */
// /* DATA (unchanged content)                                            */
// /* ------------------------------------------------------------------ */

// const projects = [
//   { id: "01", company: "Innovare Biopharma LLP", label: "WEBSITE · SEO · CONTENT", title: "Building a digital home for aquaculture health.", description: "Website development, product presentation, blog publishing, SEO-focused content, social support and digital marketing execution.", image: "/work/websites/innovare-home.png", slug: "innovare-biopharma", link: "https://innovarebiopharma.com/", glow: "bg-emerald-500/25" },
//   { id: "02", company: "C-STAR Global", label: "EVENTS · CONTENT · CREATIVE", title: "Turning conference information into a complete digital experience.", description: "Conference communication, speaker data, landing pages, banners, videos, social publishing and conference publications.", image: "/work/websites/cstar-home.png", slug: "c-star-global", glow: "bg-indigo-500/25" },
//   { id: "03", company: "Ecorfy Technologies Pvt. Ltd.", label: "WEB · SOCIAL · TECHNOLOGY", title: "Making technology easier to understand and easier to publish.", description: "Website work and technology-focused digital communication across software, AI, social media and marketing content.", image: "/work/ecorfy/website-cover.png", slug: "ecorfy-technologies", link: "https://www.ecorfy.com/", glow: "bg-cyan-500/20" },
//   { id: "04", company: "Shreshta Pickles", label: "FREELANCE · WEBSITE", title: "A clean digital storefront for a traditional food brand.", description: "Freelance website development with a product-led layout, clear navigation and a focused brand presentation.", image: "/work/websites/shreshta-home.png", slug: "shreshta-pickles", link: "https://shreshtapickles.com/", glow: "bg-orange-500/20" },
// ];

// const experience = [
//   { company: "Innovare Biopharma LLP", role: "Digital Marketing Executive", dates: "April 2026 — Present", location: "Hyderabad, India", logo: "/companies/innovare-logo.png", current: true, description: "Digital marketing, website management, SEO-focused content, social media support and creative production for an aquaculture-focused brand.", points: ["Managed website content, landing pages and digital publishing", "Supported SEO, blogs, social media and campaign creatives", "Created and coordinated marketing assets across digital channels"], tags: ["Digital Marketing", "SEO", "Content", "Social Media"], href: "https://innovarebiopharma.com/" },
//   { company: "C-STAR Global Inc.", role: "Content Developer · Digital Marketing", dates: "April 2023 — February 2026", location: "Hyderabad, India", logo: "/companies/cstar-logo.png", description: "Worked across conference communication, website content, speaker data, creative production, videos, conference publications and social media publishing.", points: ["Managed conference and expo content from raw data to publishable assets", "Created banners, videos, posters, conference books and social content", "Supported websites, virtual conferences and scheduled social publishing"], tags: ["Content Development", "Events", "Social Media", "Creative"] },
//   { company: "Ecorfy Technologies Pvt. Ltd.", role: "Software Engineer", dates: "Earlier experience", location: "Hyderabad, India", logo: "/companies/ecorfy-logo.png", description: "Earlier technology experience supporting web development and digital communication projects in a technology-focused environment.", points: ["Worked on website and software-oriented digital projects", "Supported technology communication and online presentation", "Built technical experience that now strengthens marketing execution"], tags: ["Web", "Software", "Digital", "Technology"], href: "https://www.ecorfy.com/" },
//   { company: "Codexbox", role: "Software Engineer", dates: "October 2022 — May 2023", location: "Remote", logo: "/companies/codexbox-logo.png", description: "Designed, deployed, and maintained robust cloud infrastructure across AWS, Microsoft Azure, and GCP. Automated cloud provisioning via Infrastructure as Code with Terraform, managed Docker/Kubernetes container systems, and implemented CI/CD pipelines.", points: ["Designed and maintained cloud infrastructure across AWS, Azure, and GCP", "Automated provisioning using Infrastructure as Code (IaC) with Terraform", "Managed Docker/Kubernetes container systems and CI/CD pipelines"], tags: ["AWS", "Azure", "GCP", "Terraform"] },
//   { company: "Tech Connect Services Pvt. Ltd.", role: "Computer Aided Design Draftsman", dates: "December 2021 — September 2022", location: "Hyderabad, India", logo: "/companies/techconnect-logo.png", description: "Delivered high-precision 2D/3D CAD layouts and schematic technical drawings for Audio-Visual infrastructure on large commercial and government sites.", points: ["Delivered high-precision 2D/3D CAD layouts for AV infrastructure projects", "Produced schematic technical drawings for large commercial and government sites"], tags: ["AutoCAD", "2D/3D Design", "AV Systems"] },
//   { company: "India Yamaha Motor Pvt. Ltd.", role: "Assistant Manager", type: "Part-time", dates: "May 2020 — November 2021", location: "Hyderabad, India", logo: "/companies/yamaha-logo.png", description: "Managed day-to-day service center operations, supervising technicians to maximize workflow productivity, handling customer concerns and inventory coordination.", points: ["Managed day-to-day service center operations and technician workflows", "Supervised teams to maximize productivity and turnaround time"], tags: ["Operations Management", "Customer Service", "Team Leadership"] },
// ];

// const skillGroups = [
//   { title: "Digital Marketing", items: ["SEO", "On-page SEO", "Technical SEO", "Off-page SEO", "Content Development", "Content Marketing", "Social Media Marketing", "Google Ads", "Meta Ads", "Performance Marketing", "Lead Generation", "Email Marketing", "Keyword Research"] },
//   { title: "Analytics & Automation", items: ["Google Analytics 4 (GA4)", "Google Tag Manager (GTM)", "Google Search Console", "n8n Automation", "AI Tools"] },
//   { title: "Creative & Publishing Tools", items: ["Canva", "Renderforest", "CapCut", "Filmora", "Publito", "Publer", "Swipe Pages", "WordPress", "Hostinger", "Open Mercato"] },
// ];

// const archive = [
//   ["/work/innovare/samples/hygiene.png", "Hygiene in Shrimp Farms", "Innovare", "Educational social creative"],
//   ["/work/ecorfy/samples/top-generative-ai.png", "Generative AI Development", "Ecorfy", "Social banner"],
//   ["/work/uploads/AP_Defence_Carousel.jpg", "AP Defence & Aerospace", "Carousel", "Carousel template"],
//   ["/work/uploads/India_infrastructure.jpg", "India AI Infrastructure Race", "Carousel", "Carousel template"],
//   ["/work/innovare/samples/nutrition.png", "Nutrition for Stronger Shrimp", "Innovare", "Educational social creative"],
//   ["/work/ecorfy/samples/transform-ideas.png", "Transform Ideas", "Ecorfy", "Generative AI social"],
//   ["/work/cstar/women-forum-2024.jpg", "Global Women Forum", "C-STAR", "Event banner"],
//   ["/work/cstar/global-technology-forum-2024.jpg", "Global Technology Forum", "C-STAR", "Event poster"],
//   ["/work/uploads/Book_Updated_3_.jpg", "World Women & Health Forum", "C-STAR", "Conference publication"],
//   ["/work/ecorfy/samples/software-development.png", "Software Development", "Ecorfy", "Social banner"],
//   ["/work/ecorfy/samples/ecorfy-digital-marketing.jpg", "Digital Marketing Services", "Ecorfy", "Social banner"],
//   ["/work/ecorfy/samples/ecorfy-outdated-software.jpg", "Struggling With Outdated Software?", "Ecorfy", "Social banner"],
//   ["/work/ecorfy/samples/ecorfy-software-solutions.jpg", "Software Development Solutions", "Ecorfy", "Social banner"],
//   ["/work/ecorfy/samples/ecorfy-genai-ml.jpg", "Generative AI & ML", "Ecorfy", "Social banner"],
//   ["/work/ecorfy/samples/ecorfy-it-professionals-day.jpg", "National IT Professionals Day", "Ecorfy", "Awareness day creative"],
// ];

// const testimonials = [
//   ["Ravindra Raju", "Founder & Owner · Shrestha Pickles", "Working with Aditya has been a great experience. He efficiently manages our website, handles updates whenever needed, and supports our business operations and maintaining accurate records. His professionalism and dedication make him a dependable partner for our business."],
//   ["Ujeetha Yasaswi (Branch Manager)", "Manager · Yamaha Motors", "During his tenure as Assistant Manager, Aditya demonstrated strong leadership, organizational, and customer service skills. He efficiently managed billing and invoice processing, coordinated daily operations, handled customer service concerns, and ensured smooth communication between customers and service teams. His professionalism, problem-solving abilities, and commitment to delivering excellent customer experiences made him a valuable asset to our organization."],
//   ["Sitarama Raju", "CEO · Innovare Labs", "Aditya played an important role in supporting our digital marketing and promotional activities. His contributions to website development, content management, and conference promotions helped strengthen our brand presence within the aquaculture industry. He consistently demonstrated professionalism, creativity, and a strong commitment to delivering quality work."],
//   ["Varma Bhupathiraju", "CEO · C-STAR Global Inc", "Aditya was an integral part of our marketing and digital presence. He managed our website, supported design updates, created marketing content, and played a key role in promoting our international conferences. His ability to combine creativity, technical skills, and marketing expertise helped strengthen our brand and effectively engage our target audience."],
//   ["Swathi Gurijala", "HR Manager · Ecorfy Technologies Pvt Ltd", "Aditya successfully developed and maintained our company website, ensuring it remained professional, user-friendly, and up to date. He consistently delivered high-quality work, met project deadlines, and demonstrated a strong commitment to supporting our business goals. His professionalism, problem-solving abilities, and attention to detail made him a valuable member of our team."],
// ];

// const roles = ["Websites", "SEO", "Content", "Creative", "Events"];
// const navLinks = [["About", "about"], ["Experience", "experience"], ["Work", "work"], ["Skills", "skills"], ["Testimonials", "testimonials"], ["Contact", "contact"]];
// const totalSkills = skillGroups.reduce((a, g) => a + g.items.length, 0);

// /* ------------------------------------------------------------------ */
// /* GLOBAL CSS (self-contained — no globals.css dependency)             */
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

// /* ------------------------------------------------------------------ */
// /* BACKGROUND                                                          */
// /* ------------------------------------------------------------------ */

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

// function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
//   const reduce = useReducedMotion();
//   return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 36, filter: "blur(10px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.85, delay, ease: EASE }}>{children}</motion.div>;
// }

// function SpotCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
//   const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     const r = e.currentTarget.getBoundingClientRect();
//     e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
//     e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
//   };
//   return <div onMouseMove={onMove} className={`av-spot ${className}`}>{children}</div>;
// }

// function Tilt({ children, className = "" }: { children: React.ReactNode; className?: string }) {
//   const reduce = useReducedMotion();
//   const ref = useRef<HTMLDivElement>(null);
//   const px = useMotionValue(0);
//   const py = useMotionValue(0);
//   const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [5, -5]), { stiffness: 200, damping: 20 });
//   const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-5, 5]), { stiffness: 200, damping: 20 });
//   const onMove = (e: React.MouseEvent) => {
//     if (reduce || !ref.current) return;
//     const r = ref.current.getBoundingClientRect();
//     px.set((e.clientX - r.left) / r.width - 0.5);
//     py.set((e.clientY - r.top) / r.height - 0.5);
//   };
//   return <motion.div ref={ref} onMouseMove={onMove} onMouseLeave={() => { px.set(0); py.set(0); }} style={{ rotateX, rotateY, transformPerspective: 1100 }} className={className}>{children}</motion.div>;
// }

// function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
//   const ref = useRef<HTMLSpanElement>(null);
//   const inView = useInView(ref, { once: true });
//   const reduce = useReducedMotion();
//   const [v, setV] = useState(0);
//   useEffect(() => {
//     if (!inView) return;
//     if (reduce) { setV(to); return; }
//     const c = animate(0, to, { duration: 1.6, ease: EASE, onUpdate: x => setV(Math.round(x)) });
//     return () => c.stop();
//   }, [inView, to, reduce]);
//   return <span ref={ref}>{String(v).padStart(2, "0")}{suffix}</span>;
// }

// function SectionHead({ n, kicker, children, sub }: { n: string; kicker: string; children: React.ReactNode; sub?: string }) {
//   return <Reveal>
//     <div className="flex items-center gap-4">
//       <span className="av-outline font-mono text-5xl font-semibold leading-none sm:text-6xl">{n}</span>
//       <span className="h-px w-12 bg-gradient-to-r from-emerald-400/70 to-transparent" />
//       <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">{kicker}</span>
//     </div>
//     <div className="mt-7 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
//       <h2 className="max-w-4xl text-[clamp(44px,6.6vw,92px)] font-semibold leading-[.9] tracking-[-.06em] text-white">{children}</h2>
//       {sub && <p className="max-w-sm text-sm leading-7 text-zinc-400">{sub}</p>}
//     </div>
//   </Reveal>;
// }

// const Grad = ({ children }: { children: React.ReactNode }) => <span className="av-shine bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">{children}</span>;

// /* ------------------------------------------------------------------ */
// /* HERO                                                                */
// /* ------------------------------------------------------------------ */

// function RotatingWord() {
//   const [i, setI] = useState(0);
//   useEffect(() => { const t = setInterval(() => setI(x => (x + 1) % roles.length), 2200); return () => clearInterval(t); }, []);
//   return <span className="relative inline-flex h-[1.4em] min-w-[7.5ch] items-center overflow-hidden align-bottom">
//     <AnimatePresence mode="wait">
//       <motion.span key={roles[i]} initial={{ y: "100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-100%", opacity: 0 }} transition={{ duration: 0.45, ease: EASE }} className="absolute left-0 font-semibold text-white">{roles[i]}</motion.span>
//     </AnimatePresence>
//   </span>;
// }

// function WordReveal({ text, delay = 0, grad = false }: { text: string; delay?: number; grad?: boolean }) {
//   const reduce = useReducedMotion();
//   return <>{text.split(" ").map((w, i) => <span key={`${w}-${i}`} className="inline-block overflow-hidden pb-[.16em] -mb-[.16em] align-bottom"><motion.span className="inline-block" initial={reduce ? false : { y: "115%", rotate: 5 }} animate={{ y: 0, rotate: 0 }} transition={{ duration: 1, delay: delay + i * 0.09, ease: EASE }}>{grad ? <Grad>{w}</Grad> : w}&nbsp;</motion.span></span>)}</>;
// }

// function Orbit() {
//   const chips: [string, string, number][] = [["SEO", "01", 0], ["CONTENT", "02", 90], ["CREATIVE", "03", 180], ["EXECUTE", "04", 270]];
//   return <div className="relative mx-auto aspect-square w-full max-w-[480px]">
//     <div className="av-pulse absolute inset-[16%] rounded-full bg-emerald-600/35 blur-3xl" />
//     <div className="av-pulse absolute inset-[30%] rounded-full bg-cyan-400/20 blur-3xl [animation-delay:-3s]" />
//     <div className="av-spin absolute inset-[3%] rounded-full border border-white/10">
//       {chips.map(([label, n, deg]) => <div key={label} className="absolute inset-0" style={{ transform: `rotate(${deg}deg)` }}>
//         <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
//           <div style={{ transform: `rotate(${-deg}deg)` }}><div className="av-spin-rev">
//             <div className="whitespace-nowrap rounded-xl border border-white/15 bg-white/[.08] px-3 py-2 font-mono text-[10px] text-white shadow-[0_10px_40px_rgba(16,185,129,.25)] backdrop-blur-md"><span className="mr-2 text-emerald-300">{n}</span>{label}</div>
//           </div></div>
//         </div>
//       </div>)}
//     </div>
//     <div className="av-spin-slow absolute inset-[20%] rounded-full border border-dashed border-emerald-300/25">
//       <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,.9)]" />
//       <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-teal-300 shadow-[0_0_14px_rgba(94,234,212,.9)]" />
//     </div>
//     <div className="absolute inset-[35%] grid place-items-center rounded-full border border-white/20 bg-[radial-gradient(circle_at_30%_25%,rgba(52,211,153,.55),rgba(24,16,48,.95)_62%)] text-center shadow-[0_0_80px_rgba(16,185,129,.45),inset_0_0_30px_rgba(255,255,255,.08)]">
//       <div><p className="font-mono text-[7px] uppercase tracking-[.2em] text-emerald-200/80 sm:text-[8px]">Digital workflow</p><strong className="mt-2 block text-xl font-semibold leading-[.95] tracking-[-.05em] text-white sm:text-2xl">IDEA<br />TO<br /><Grad>IMPACT.</Grad></strong></div>
//     </div>
//   </div>;
// }

// function Hero() {
//   const reduce = useReducedMotion();
//   const { scrollY } = useScroll();
//   const textY = useTransform(scrollY, [0, 700], [0, 70]);
//   const orbY = useTransform(scrollY, [0, 700], [0, 130]);
//   const fade = useTransform(scrollY, [0, 600], [1, 0.25]);
//   const stats: [number, string, string][] = [[2, "Years hands-on", "+"], [projects.length, "Featured projects", ""], [experience.length, "Companies", ""], [totalSkills, "Skills & tools", ""]];
//   return <section id="home" className="relative flex min-h-screen flex-col justify-center pb-16 pt-32 sm:pt-36">
//     <div className="mx-auto grid w-[min(1240px,calc(100%-32px))] items-center gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-8">
//       <motion.div style={{ y: reduce ? 0 : textY, opacity: reduce ? 1 : fade }}>
//         <motion.div initial={reduce ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }} className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[.05] px-4 py-2 font-mono text-[10px] uppercase tracking-[.16em] text-zinc-300 backdrop-blur-md">
//           <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" /></span>
//           Available for projects
//         </motion.div>
//         <h1 className="mt-8 max-w-5xl text-[clamp(54px,8.4vw,122px)] font-semibold leading-[.86] tracking-[-.07em] text-white">
//           <WordReveal text="I make digital work" delay={0.15} />
//           <WordReveal text="worth noticing." delay={0.55} grad />
//         </h1>
//         <motion.p initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1, ease: EASE }} className="mt-8 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">Digital Marketing Executive working across websites, SEO, social media, content development, creative production and event communication.</motion.p>
//         <motion.div initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.1, ease: EASE }} className="mt-6 flex items-center gap-3 text-lg text-zinc-500 sm:text-xl">Specialising in <RotatingWord /></motion.div>
//         <motion.div initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.2, ease: EASE }} className="mt-9 flex flex-wrap items-center gap-3">
//           <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} href="#work" className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-xs font-bold text-zinc-950 shadow-[0_0_50px_rgba(52,211,153,.35)] transition hover:bg-emerald-200">Explore real projects <ArrowRight size={14} className="transition group-hover:translate-x-1" /></motion.a>
//           <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}><Link href="/work-samples" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.05] px-6 py-3.5 text-xs font-bold text-white backdrop-blur-md transition hover:border-white/40">Open work archive <ArrowRight size={14} /></Link></motion.div>
//         </motion.div>
//       </motion.div>
//       <motion.div style={{ y: reduce ? 0 : orbY }} initial={reduce ? false : { opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.4, ease: EASE }}><Orbit /></motion.div>
//     </div>
//     <motion.div initial={reduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 1.4, ease: EASE }} className="mx-auto mt-16 w-[min(1240px,calc(100%-32px))]">
//       <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl md:grid-cols-4">
//         {stats.map(([n, label, suffix]) => <div key={label} className="bg-[#071612]/80 px-6 py-6"><div className="text-4xl font-semibold tracking-[-.05em] text-white sm:text-5xl"><CountUp to={n} suffix={suffix} /></div><p className="mt-2 font-mono text-[9px] uppercase tracking-[.16em] text-zinc-500">{label}</p></div>)}
//       </div>
//     </motion.div>
//     <a href="#about" aria-label="Scroll to about" className="mx-auto mt-10 hidden items-center gap-2 font-mono text-[9px] uppercase tracking-[.18em] text-zinc-500 sm:flex">Scroll to explore <motion.span animate={reduce ? undefined : { y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}><ArrowDown size={13} /></motion.span></a>
//   </section>;
// }

// /* ------------------------------------------------------------------ */
// /* SECTIONS                                                            */
// /* ------------------------------------------------------------------ */

// function About() {
//   const range = ["Websites", "SEO", "Social", "Content", "Creative", "Events", "Publishing", "Automation"];
//   return <section id="about" className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
//     <SectionHead n="01" kicker="About me">I work where <Grad>marketing, content and execution</Grad> meet.</SectionHead>
//     <div className="mt-14 grid gap-5 lg:grid-cols-[1.25fr_.75fr]">
//       <Reveal><SpotCard className="h-full rounded-[28px] border border-white/10 bg-white/[.03] p-8 backdrop-blur-xl sm:p-10"><p className="text-xl leading-8 tracking-[-.02em] text-zinc-300 sm:text-2xl sm:leading-10">I enjoy taking a raw idea, messy information or business requirement and turning it into something structured, visual, useful and ready to publish — whether that is a website, campaign, social post, blog, conference asset or digital workflow.</p></SpotCard></Reveal>
//       <Reveal delay={0.1}><SpotCard className="h-full rounded-[28px] border border-white/10 bg-white/[.03] p-6 backdrop-blur-xl"><p className="font-mono text-[9px] uppercase tracking-[.16em] text-zinc-500">My working range</p>
//         <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }} className="mt-6 grid grid-cols-2 gap-2">{range.map((x, i) => <motion.span key={x} variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } } }} whileHover={{ y: -2 }} className="rounded-xl border border-white/10 bg-white/[.04] px-3 py-3 text-[10px] font-bold text-zinc-300 transition-colors hover:border-emerald-400/50 hover:text-white"><span className="mr-1.5 text-emerald-400">0{i + 1}</span>{x}</motion.span>)}</motion.div>
//       </SpotCard></Reveal>
//     </div>
//   </div></section>;
// }

// function Experience() {
//   const ref = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
//   const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 26 });
//   return <section id="experience" className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
//     <SectionHead n="02" kicker="Career timeline" sub="Six roles across digital marketing, content, software and cloud engineering, CAD design and service operations.">Where I’ve worked. <Grad>What I’ve done.</Grad></SectionHead>
//     <div ref={ref} className="relative mt-16 space-y-8">
//       <div className="absolute bottom-0 left-[7px] top-0 w-px bg-white/10 md:left-[187px]" />
//       <motion.div style={{ scaleY }} className="absolute bottom-0 left-[7px] top-0 w-px origin-top bg-gradient-to-b from-emerald-400 via-teal-300 to-cyan-300 shadow-[0_0_12px_rgba(52,211,153,.8)] md:left-[187px]" />
//       {experience.map((job, i) => <Reveal key={job.company} delay={0.05}>
//         <div className="relative grid gap-5 pl-9 md:grid-cols-[180px_1fr] md:gap-14 md:pl-0">
//           <span className={`absolute left-0 top-8 h-[15px] w-[15px] rounded-full border-2 bg-[#04100d] md:left-[180px] ${job.current ? "border-cyan-300 shadow-[0_0_16px_rgba(103,232,249,.9)]" : "border-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.6)]"}`} />
//           <div className="md:pt-7 md:text-right"><p className="font-mono text-[10px] uppercase tracking-[.14em] text-emerald-300">0{i + 1} / Experience</p><p className="mt-2 font-mono text-[10px] uppercase leading-5 tracking-[.08em] text-zinc-500">{job.dates}<br />{job.location}</p>{"type" in job && job.type && <span className="mt-3 inline-block rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 font-mono text-[8px] uppercase tracking-[.12em] text-amber-200">{job.type}</span>}{job.current && <span className="mt-3 inline-block rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 font-mono text-[8px] uppercase tracking-[.12em] text-cyan-200">Present</span>}</div>
//           <Tilt><SpotCard className="rounded-[26px] border border-white/10 bg-white/[.035] p-6 backdrop-blur-xl sm:p-8">
//             <div className="flex items-start gap-4"><div className="relative h-12 w-20 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white sm:w-24"><Image src={job.logo} alt={`${job.company} logo`} fill sizes="96px" className="object-contain p-1.5" /></div><div><h3 className="text-xl font-semibold tracking-[-.03em] text-white sm:text-2xl">{job.role}</h3><a href={job.href ?? "#"} target={job.href ? "_blank" : undefined} rel={job.href ? "noreferrer" : undefined} className="mt-1 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300 transition hover:text-white">{job.company}{job.href && <ExternalLink size={11} />}</a></div></div>
//             <p className="mt-6 text-sm leading-7 text-zinc-400">{job.description}</p>
//             <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-5">{job.points.map(p => <li key={p} className="flex gap-3 text-xs leading-6 text-zinc-300"><span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-emerald-400" />{p}</li>)}</ul>
//             <div className="mt-6 flex flex-wrap gap-2">{job.tags.map(t => <span key={t} className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[9px] font-semibold text-emerald-200">{t}</span>)}</div>
//           </SpotCard></Tilt>
//         </div>
//       </Reveal>)}
//     </div>
//   </div></section>;
// }

// function Work() {
//   return <section id="work" className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
//     <SectionHead n="03" kicker="Selected work" sub="A selection of websites and digital experiences across aquaculture, conferences, technology and consumer brands.">Real projects. <Grad>Clear outcomes.</Grad></SectionHead>
//     <div className="mt-6"><Link href="/work-samples" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.05] px-5 py-2.5 text-xs font-bold text-white backdrop-blur-md transition hover:border-emerald-400/60">Explore all work <ArrowRight size={14} /></Link></div>
//     <div className="mt-14 space-y-8">
//       {projects.map((project, i) => <Reveal key={project.id}>
//         <SpotCard className="group relative rounded-[32px] border border-white/10 bg-white/[.03] p-4 backdrop-blur-xl sm:p-6">
//           <div className={`pointer-events-none absolute -z-10 h-72 w-72 rounded-full blur-[100px] ${project.glow} ${i % 2 ? "-left-10 top-10" : "-right-10 top-10"}`} />
//           <div className={`grid items-center gap-8 ${i % 2 ? "lg:grid-cols-[.9fr_1.1fr]" : "lg:grid-cols-[1.1fr_.9fr]"}`}>
//             <div className={i % 2 ? "lg:order-2" : ""}>
//               <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-[0_30px_80px_rgba(0,0,0,.5)]">
//                 <div className="flex items-center gap-2 border-b border-white/10 bg-zinc-900 px-4 py-3"><span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" /><span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" /><span className="ml-3 truncate rounded-md bg-white/5 px-3 py-1 font-mono text-[9px] text-zinc-500">{project.link ? project.link.replace("https://", "") : project.company}</span></div>
//                 <div className="flex h-[240px] items-center justify-center overflow-hidden bg-[#f4f4f5] sm:h-[330px]"><Image src={project.image} alt={`${project.company} website preview`} width={1100} height={760} className="h-full w-full object-contain object-center transition duration-700 ease-out group-hover:scale-[1.04]" /></div>
//               </div>
//             </div>
//             <div className="px-2 pb-2 lg:px-6">
//               <div className="flex items-center gap-3"><span className="av-outline font-mono text-4xl font-semibold">{project.id}</span><span className="rounded-full border border-white/10 bg-white/[.05] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[.12em] text-zinc-400">{project.label}</span></div>
//               <p className="mt-6 font-mono text-[10px] uppercase tracking-[.16em] text-emerald-300">{project.company}</p>
//               <h3 className="mt-3 text-3xl font-semibold leading-[1.05] tracking-[-.045em] text-white sm:text-4xl">{project.title}</h3>
//               <p className="mt-4 text-sm leading-7 text-zinc-400">{project.description}</p>
//               <div className="mt-7 flex flex-wrap gap-2.5"><Link href={`/work/${project.slug}`} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold text-zinc-950 transition hover:bg-emerald-200">View project <ArrowRight size={13} /></Link>{project.link && <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-xs font-bold text-white transition hover:border-white/50">Live website <ExternalLink size={13} /></a>}</div>
//             </div>
//           </div>
//         </SpotCard>
//       </Reveal>)}
//     </div>
//   </div></section>;
// }

// function ArchivePreview() {
//   const half = Math.ceil(archive.length / 2);
//   const rowOne = archive.slice(0, half);
//   const rowTwo = archive.slice(half);
//   const tile = ([src, title, company, format]: string[], key: string) => <Link href="/work-samples" key={key} className="group mr-4 w-[220px] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[.04] backdrop-blur-md transition hover:-translate-y-1 hover:border-emerald-400/50 sm:w-[260px]"><div className="flex h-[150px] items-center justify-center overflow-hidden bg-[#f2f1ef] p-3 sm:h-[180px] sm:p-4"><Image src={src} alt={title} width={520} height={420} className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.05]" /></div><div className="px-4 py-3"><p className="truncate font-mono text-[8px] uppercase tracking-[.1em] text-zinc-500">{company} · {format}</p><h3 className="mt-1.5 truncate text-xs font-bold text-zinc-100">{title}</h3></div></Link>;
//   const row = (items: string[][], prefix: string) => [...items, ...items].map((it, i) => tile(it, `${prefix}-${i}`));
//   return <section className="relative overflow-hidden py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
//     <SectionHead n="04" kicker="Creative archive" sub="Banners, carousel templates, event graphics and publications — moving gently so you can browse the range at a glance.">A closer look at <Grad>the creative work.</Grad></SectionHead>
//     <div className="mt-6"><Link href="/work-samples" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold text-zinc-950 transition hover:bg-emerald-200">View all samples <ArrowRight size={14} /></Link></div>
//   </div>
//     <div className="av-pausable relative mt-12 space-y-4">
//       <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#04100d] to-transparent sm:w-40" />
//       <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#04100d] to-transparent sm:w-40" />
//       <div className="av-marq">{row(rowOne, "a")}</div>
//       <div className="av-marq av-marq-rev">{row(rowTwo, "b")}</div>
//     </div>
//     <p className="mt-7 text-center text-[10px] text-zinc-500">Hover to pause · Select any sample to open the complete archive</p>
//   </section>;
// }

// function Skills() {
//   return <section id="skills" className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
//     <SectionHead n="05" kicker="Skills & tools" sub="A straightforward overview of the marketing disciplines, measurement tools, creative apps and publishing platforms I work with.">The skills behind <Grad>the work.</Grad></SectionHead>
//     <div className="mt-14 grid gap-5 lg:grid-cols-3">
//       {skillGroups.map((group, gi) => <Reveal key={group.title} delay={gi * 0.08}><SpotCard className="h-full rounded-[28px] border border-white/10 bg-white/[.03] p-6 backdrop-blur-xl sm:p-7">
//         <div className="flex items-end justify-between border-b border-white/10 pb-4"><h3 className="text-lg font-semibold tracking-[-.03em] text-white">{group.title}</h3><span className="font-mono text-[9px] uppercase tracking-[.14em] text-zinc-500">{String(group.items.length).padStart(2, "0")} items</span></div>
//         <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03 } } }} className="mt-5 flex flex-wrap gap-2">{group.items.map(item => <motion.span key={item} variants={{ hidden: { opacity: 0, y: 12, scale: 0.94 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: EASE } } }} whileHover={{ y: -2 }} className="cursor-default rounded-full border border-white/10 bg-white/[.04] px-3.5 py-2 text-xs font-medium text-zinc-300 transition-colors hover:border-emerald-400/60 hover:bg-emerald-400/10 hover:text-white">{item}</motion.span>)}</motion.div>
//       </SpotCard></Reveal>)}
//     </div>
//   </div></section>;
// }

// function Process() {
//   const steps = [["01", "Understand", "Goal · audience · message"], ["02", "Structure", "Content · information · flow"], ["03", "Create", "Design · video · visual system"], ["04", "Execute", "Publish · schedule · maintain"]];
//   return <section className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
//     <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-emerald-600/30 via-[#0a1f1b] to-cyan-500/10 p-8 backdrop-blur-xl sm:p-14">
//       <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_75%)]" />
//       <div className="relative"><SectionHead n="06" kicker="How I work">From brief to <Grad>publish-ready.</Grad></SectionHead>
//         <div className="relative mt-14 grid gap-3 md:grid-cols-4">
//           <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 1.5, ease: EASE }} className="pointer-events-none absolute left-[10%] right-[10%] top-[46px] hidden h-px origin-left bg-gradient-to-r from-emerald-300/60 via-teal-300/60 to-cyan-300/60 md:block" />
//           {steps.map(([n, title, desc], i) => <Reveal key={n} delay={i * 0.1}><motion.article whileHover={{ y: -6 }} transition={{ duration: 0.3, ease: EASE }} className="h-full rounded-[24px] border border-white/10 bg-white/[.05] p-6 backdrop-blur-xl transition-colors hover:bg-white/[.09]"><span className="grid h-10 w-10 place-items-center rounded-full border border-emerald-300/40 bg-[#0a1f1b] font-mono text-[10px] text-emerald-200 shadow-[0_0_20px_rgba(52,211,153,.4)]">{n}</span><h3 className="mt-12 text-2xl font-semibold tracking-[-.04em] text-white">{title}</h3><p className="mt-2 text-xs leading-5 text-zinc-400">{desc}</p></motion.article></Reveal>)}
//         </div>
//       </div>
//     </div>
//   </div></section>;
// }

// function Insights() {
//   return <section id="insights" className="relative py-28 sm:py-36"><div className="mx-auto grid w-[min(1240px,calc(100%-32px))] items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
//     <Reveal><div className="flex items-center gap-4"><span className="av-outline font-mono text-5xl font-semibold leading-none sm:text-6xl">07</span><span className="h-px w-12 bg-gradient-to-r from-emerald-400/70 to-transparent" /><span className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">Insights · publishing</span></div>
//       <h2 className="mt-7 text-[clamp(42px,6vw,88px)] font-semibold leading-[.92] tracking-[-.06em] text-white">Content is not decoration. <Grad>It is part of the product.</Grad></h2>
//       <p className="mt-7 max-w-xl text-sm leading-7 text-zinc-400">The portfolio can keep expanding with published articles, SEO work, case studies and content projects as more source material is added.</p></Reveal>
//     <Reveal delay={0.1}><Tilt><SpotCard className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[.04] p-3 shadow-[0_40px_100px_rgba(0,0,0,.5)] backdrop-blur-xl"><Image src="/work/innovare/blog.png" alt="Innovare blog publishing preview" width={900} height={650} className="h-[360px] w-full rounded-[24px] object-cover object-top" /><div className="p-4"><p className="font-mono text-[8px] uppercase tracking-[.14em] text-zinc-500">SEO · Content · Publishing</p><h3 className="mt-2 text-lg font-semibold text-white">Technical content presented as a usable digital experience.</h3></div></SpotCard></Tilt></Reveal>
//   </div></section>;
// }

// function Testimonials() {
//   const card = ([name, role, quote]: string[], key: string) => <SpotCard key={key} className="mr-5 flex w-[320px] shrink-0 flex-col rounded-[28px] border border-white/10 bg-white/[.035] p-7 backdrop-blur-xl transition-colors hover:border-emerald-400/30 sm:w-[420px] sm:p-8">
//     <Quote className="text-emerald-400" size={28} />
//     <div className="mt-6 text-sm tracking-[.2em] text-amber-300">★★★★★</div>
//     <p className="mt-5 flex-1 whitespace-normal text-[15px] leading-7 tracking-[-.01em] text-zinc-200 sm:text-base sm:leading-8">“{quote}”</p>
//     <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-emerald-500 to-cyan-400 text-sm font-bold text-white">{name[0]}</span><div className="whitespace-normal"><b className="block text-sm text-white">{name}</b><span className="mt-0.5 block text-[10px] text-zinc-500">{role}</span></div></div>
//   </SpotCard>;
//   const row = (list: string[][], prefix: string) => [...list, ...list].map((t, i) => card(t, `${prefix}-${i}`));
//   return <section id="testimonials" className="relative overflow-hidden py-28 sm:py-36">
//     <div className="mx-auto w-[min(1240px,calc(100%-32px))]">
//       <SectionHead n="08" kicker="Testimonials" sub="Words from the founders, managers and teams I’ve worked with — scrolling continuously. Hover to pause.">Good work should be <Grad>remembered.</Grad></SectionHead>
//     </div>
//     <div className="av-pausable relative mt-14">
//       <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#04100d] to-transparent sm:w-40" />
//       <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#04100d] to-transparent sm:w-40" />
//       <div className="av-marq items-stretch" style={{ animationDuration: "80s" }}>{row(testimonials, "a")}</div>
//     </div>
//   </section>;
// }

// function Contact() {
//   return <section id="contact" className="relative py-28 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
//     <Reveal><div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[.03] p-8 backdrop-blur-xl sm:p-14">
//       <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-emerald-600/30 blur-[110px]" />
//       <div className="pointer-events-none absolute -bottom-24 left-10 h-80 w-80 rounded-full bg-cyan-500/15 blur-[110px]" />
//       <div className="relative flex items-center gap-4"><span className="av-outline font-mono text-5xl font-semibold leading-none sm:text-6xl">09</span><span className="h-px w-12 bg-gradient-to-r from-emerald-400/70 to-transparent" /><span className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">Contact</span></div>
//       <h2 className="relative mt-8 max-w-5xl text-[clamp(46px,7.2vw,108px)] font-semibold leading-[.88] tracking-[-.07em] text-white">Let’s build something <Grad>worth showing.</Grad></h2>
//       <div className="relative mt-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
//         <p className="max-w-md text-sm leading-7 text-zinc-400">Available for digital marketing, website, content, social media and creative projects.</p>
//         <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
//           <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} href="mailto:hello@adityavarma.dev" className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-xs font-bold text-zinc-950 shadow-[0_0_50px_rgba(52,211,153,.35)] transition-colors hover:bg-emerald-200"><Mail size={14} /> hello@adityavarma.dev <ArrowRight size={14} /></motion.a>
//           <div className="flex gap-2"><motion.a whileHover={{ y: -3 }} href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[.05] text-white transition-colors hover:border-emerald-400/70"><Linkedin size={15} /></motion.a><motion.a whileHover={{ y: -3 }} href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[.05] text-white transition-colors hover:border-emerald-400/70"><Instagram size={15} /></motion.a></div>
//         </div>
//       </div>
//     </div></Reveal>
//     <footer className="mt-10 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 font-mono text-[9px] uppercase tracking-[.14em] text-zinc-500 sm:flex-row"><span>© 2026 Aditya Varma</span><span>Digital Marketing · Web · Content · Creative</span></footer>
//   </div></section>;
// }

// /* ------------------------------------------------------------------ */
// /* PAGE                                                                */
// /* ------------------------------------------------------------------ */

// export default function Portfolio() {
//   const [menu, setMenu] = useState(false);
//   const [active, setActive] = useState("home");
//   const [scrolled, setScrolled] = useState(false);
//   const [showTop, setShowTop] = useState(false);

//   useEffect(() => {
//     const ids = ["home", ...navLinks.map(([, id]) => id)];
//     const els = ids.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];
//     const io = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }); }, { rootMargin: "-45% 0px -50% 0px" });
//     els.forEach(el => io.observe(el));
//     const onScroll = () => { setScrolled(window.scrollY > 24); setShowTop(window.scrollY > 700); };
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => { io.disconnect(); window.removeEventListener("scroll", onScroll); };
//   }, []);

//   return <main className="relative min-h-screen overflow-x-clip bg-[#04100d] text-zinc-100 selection:bg-emerald-500/40">
//     <style>{CSS}</style>
//     <Backdrop />
//     <ParticleField />
//     <CursorGlow />
//     <div aria-hidden className="av-grain pointer-events-none fixed inset-0 z-[3]" />
//     <ScrollProgress />

//     <motion.header style={{ x: "-50%" }} initial={{ y: -70, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, delay: 0.1, ease: EASE }} className={`fixed left-1/2 top-4 z-[60] flex w-[min(1180px,calc(100%-20px))] items-center justify-between rounded-2xl border px-3 py-2.5 backdrop-blur-2xl transition-all duration-500 ${scrolled ? "border-white/15 bg-[#09171a]/80 shadow-[0_18px_60px_rgba(0,0,0,.5)]" : "border-white/10 bg-white/[.04]"}`}>
//       <a href="#home" className="flex items-center gap-2.5"><span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-400 text-[10px] font-bold text-white shadow-[0_0_20px_rgba(16,185,129,.5)]">AV</span><span><b className="block text-[11px] leading-none text-white">Aditya Varma</b><small className="mt-1 block text-[7px] uppercase tracking-[.12em] text-zinc-500">Digital Marketing Executive</small></span></a>
//       <nav className="hidden items-center gap-1 lg:flex">{navLinks.map(([label, id]) => <a key={id} href={`#${id}`} className={`relative rounded-full px-3 py-1.5 text-[10px] font-semibold transition-colors ${active === id ? "text-white" : "text-zinc-400 hover:text-white"}`}>{active === id && <motion.span layoutId="nav-pill" transition={{ type: "spring", stiffness: 380, damping: 32 }} className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/10" />}{label}</a>)}<Link href="/work-samples" className="rounded-full px-3 py-1.5 text-[10px] font-semibold text-zinc-400 transition hover:text-white">Work Archive</Link></nav>
//       <a href="#contact" className="hidden items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[10px] font-bold text-zinc-950 transition hover:bg-emerald-200 lg:inline-flex">Let’s talk <ArrowRight size={12} /></a>
//       <button onClick={() => setMenu(!menu)} className="grid h-9 w-9 place-items-center rounded-xl border border-white/15 bg-white/5 text-white lg:hidden" aria-label="Toggle menu" aria-expanded={menu}>{menu ? <X size={16} /> : <Menu size={16} />}</button>
//       <AnimatePresence>{menu && <motion.div initial={{ opacity: 0, y: -8, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8, scale: 0.97 }} transition={{ duration: 0.25, ease: EASE }} className="absolute right-0 top-14 w-64 origin-top-right rounded-2xl border border-white/15 bg-[#09171a]/95 p-2 shadow-2xl backdrop-blur-2xl lg:hidden">{navLinks.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenu(false)} className={`block rounded-xl px-3 py-3 text-xs font-semibold hover:bg-white/5 ${active === id ? "text-emerald-300" : "text-zinc-300"}`}>{label}</a>)}<Link href="/work-samples" onClick={() => setMenu(false)} className="block rounded-xl px-3 py-3 text-xs font-semibold text-zinc-300 hover:bg-white/5">Work Archive</Link></motion.div>}</AnimatePresence>
//     </motion.header>

//     <div className="relative z-10">
//       <Hero />
//       <About />
//       <Experience />
//       <Work />
//       <ArchivePreview />
//       <Skills />
//       <Process />
//       <Insights />
//       <Testimonials />
//       <Contact />
//     </div>

//     <AnimatePresence>{showTop && <motion.a href="#home" aria-label="Back to top" initial={{ opacity: 0, y: 16, scale: 0.8 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.8 }} whileHover={{ y: -3 }} className="fixed bottom-6 right-6 z-[60] grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-[#09171a]/80 text-white shadow-[0_10px_40px_rgba(0,0,0,.5)] backdrop-blur-xl transition-colors hover:border-emerald-400/70"><ArrowUp size={16} /></motion.a>}</AnimatePresence>
//   </main>;
// }
"use client";

import { ArrowDown, ArrowRight, ArrowUp, ExternalLink, Instagram, Linkedin, Mail, Menu, Quote, X } from "lucide-react";
import { AnimatePresence, animate, motion, useInView, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

/* ------------------------------------------------------------------ */
/* DATA (unchanged content)                                            */
/* ------------------------------------------------------------------ */

const projects = [
  { id: "01", company: "Innovare Biopharma LLP", label: "WEBSITE · SEO · CONTENT", title: "Building a digital home for aquaculture health.", description: "Website development, product presentation, blog publishing, SEO-focused content, social support and digital marketing execution.", image: "/work/websites/innovare-home.png", slug: "innovare-biopharma", link: "https://innovarebiopharma.com/", glow: "bg-emerald-500/25" },
  { id: "02", company: "C-STAR Global", label: "EVENTS · CONTENT · CREATIVE", title: "Turning conference information into a complete digital experience.", description: "Conference communication, speaker data, landing pages, banners, videos, social publishing and conference publications.", image: "/work/websites/cstar-home.png", slug: "c-star-global", glow: "bg-indigo-500/25" },
  { id: "03", company: "Ecorfy Technologies Pvt. Ltd.", label: "WEB · SOCIAL · TECHNOLOGY", title: "Making technology easier to understand and easier to publish.", description: "Website work and technology-focused digital communication across software, AI, social media and marketing content.", image: "/work/ecorfy/website-cover.png", slug: "ecorfy-technologies", link: "https://www.ecorfy.com/", glow: "bg-cyan-500/20" },
  { id: "04", company: "Shreshta Pickles", label: "FREELANCE · WEBSITE", title: "A clean digital storefront for a traditional food brand.", description: "Freelance website development with a product-led layout, clear navigation and a focused brand presentation.", image: "/work/websites/shreshta-home.png", slug: "shreshta-pickles", link: "https://shreshtapickles.com/", glow: "bg-orange-500/20" },
];

const experience = [
  { company: "Innovare Biopharma LLP", role: "Digital Marketing Executive", dates: "April 2026 — Present", location: "Hyderabad, India", logo: "/companies/innovare-logo.png", current: true, description: "Digital marketing, website management, SEO-focused content, social media support and creative production for an aquaculture-focused brand.", points: ["Managed website content, landing pages and digital publishing", "Supported SEO, blogs, social media and campaign creatives", "Created and coordinated marketing assets across digital channels"], tags: ["Digital Marketing", "SEO", "Content", "Social Media"], href: "https://innovarebiopharma.com/" },
  { company: "C-STAR Global Inc.", role: "Content Developer · Digital Marketing", dates: "April 2023 — February 2026", location: "Hyderabad, India", logo: "/companies/cstar-logo.png", description: "Worked across conference communication, website content, speaker data, creative production, videos, conference publications and social media publishing.", points: ["Managed conference and expo content from raw data to publishable assets", "Created banners, videos, posters, conference books and social content", "Supported websites, virtual conferences and scheduled social publishing"], tags: ["Content Development", "Events", "Social Media", "Creative"] },
  { company: "Ecorfy Technologies Pvt. Ltd.", role: "Software Engineer", dates: "Earlier experience", location: "Hyderabad, India", logo: "/companies/ecorfy-logo.png", description: "Earlier technology experience supporting web development and digital communication projects in a technology-focused environment.", points: ["Worked on website and software-oriented digital projects", "Supported technology communication and online presentation", "Built technical experience that now strengthens marketing execution"], tags: ["Web", "Software", "Digital", "Technology"], href: "https://www.ecorfy.com/" },
  { company: "Codexbox", role: "Software Engineer", dates: "October 2022 — May 2023", location: "Remote", logo: "/companies/codexbox-logo.png", description: "Designed, deployed, and maintained robust cloud infrastructure across AWS, Microsoft Azure, and GCP. Automated cloud provisioning via Infrastructure as Code with Terraform, managed Docker/Kubernetes container systems, and implemented CI/CD pipelines.", points: ["Designed and maintained cloud infrastructure across AWS, Azure, and GCP", "Automated provisioning using Infrastructure as Code (IaC) with Terraform", "Managed Docker/Kubernetes container systems and CI/CD pipelines"], tags: ["AWS", "Azure", "GCP", "Terraform"] },
  { company: "Tech Connect Services Pvt. Ltd.", role: "Computer Aided Design Draftsman", dates: "December 2021 — September 2022", location: "Hyderabad, India", logo: "/companies/techconnect-logo.png", description: "Delivered high-precision 2D/3D CAD layouts and schematic technical drawings for Audio-Visual infrastructure on large commercial and government sites.", points: ["Delivered high-precision 2D/3D CAD layouts for AV infrastructure projects", "Produced schematic technical drawings for large commercial and government sites"], tags: ["AutoCAD", "2D/3D Design", "AV Systems"] },
  { company: "India Yamaha Motor Pvt. Ltd.", role: "Assistant Manager", type: "Part-time", dates: "May 2020 — November 2021", location: "Hyderabad, India", logo: "/companies/yamaha-logo.png", description: "Managed day-to-day service center operations, supervising technicians to maximize workflow productivity, handling customer concerns and inventory coordination.", points: ["Managed day-to-day service center operations and technician workflows", "Supervised teams to maximize productivity and turnaround time"], tags: ["Operations Management", "Customer Service", "Team Leadership"] },
];

const skillGroups = [
  { title: "Digital Marketing", items: ["SEO", "On-page SEO", "Technical SEO", "Off-page SEO", "Content Development", "Content Marketing", "Social Media Marketing", "Google Ads", "Meta Ads", "Performance Marketing", "Lead Generation", "Email Marketing", "Keyword Research"] },
  { title: "Analytics & Automation", items: ["Google Analytics 4 (GA4)", "Google Tag Manager (GTM)", "Google Search Console", "n8n Automation", "AI Tools"] },
  { title: "Creative & Publishing Tools", items: ["Canva", "Renderforest", "CapCut", "Filmora", "Publito", "Publer", "Swipe Pages", "WordPress", "Hostinger", "Open Mercato"] },
];

const archive = [
  ["/work/innovare/samples/hygiene.png", "Hygiene in Shrimp Farms", "Innovare", "Educational social creative"],
  ["/work/ecorfy/samples/top-generative-ai.png", "Generative AI Development", "Ecorfy", "Social banner"],
  ["/work/uploads/AP_Defence_Carousel.jpg", "AP Defence & Aerospace", "Carousel", "Carousel template"],
  ["/work/uploads/India_infrastructure.jpg", "India AI Infrastructure Race", "Carousel", "Carousel template"],
  ["/work/innovare/samples/nutrition.png", "Nutrition for Stronger Shrimp", "Innovare", "Educational social creative"],
  ["/work/ecorfy/samples/transform-ideas.png", "Transform Ideas", "Ecorfy", "Generative AI social"],
  ["/work/cstar/women-forum-2024.jpg", "Global Women Forum", "C-STAR", "Event banner"],
  ["/work/cstar/global-technology-forum-2024.jpg", "Global Technology Forum", "C-STAR", "Event poster"],
  ["/work/uploads/Book_Updated_3_.jpg", "World Women & Health Forum", "C-STAR", "Conference publication"],
  ["/work/ecorfy/samples/software-development.png", "Software Development", "Ecorfy", "Social banner"],
  ["/work/ecorfy/samples/ecorfy-digital-marketing.jpg", "Digital Marketing Services", "Ecorfy", "Social banner"],
  ["/work/ecorfy/samples/ecorfy-outdated-software.jpg", "Struggling With Outdated Software?", "Ecorfy", "Social banner"],
  ["/work/ecorfy/samples/ecorfy-software-solutions.jpg", "Software Development Solutions", "Ecorfy", "Social banner"],
  ["/work/ecorfy/samples/ecorfy-genai-ml.jpg", "Generative AI & ML", "Ecorfy", "Social banner"],
  ["/work/ecorfy/samples/ecorfy-it-professionals-day.jpg", "National IT Professionals Day", "Ecorfy", "Awareness day creative"],
];

const testimonials = [
  ["Ravindra Raju", "Founder & Owner · Shrestha Pickles", "Working with Aditya has been a great experience. He efficiently manages our website, handles updates whenever needed, and supports our business operations and maintaining accurate records. His professionalism and dedication make him a dependable partner for our business."],
  ["Ujeetha Yasaswi (Branch Manager)", "Manager · Yamaha Motors", "During his tenure as Assistant Manager, Aditya demonstrated strong leadership, organizational, and customer service skills. He efficiently managed billing and invoice processing, coordinated daily operations, handled customer service concerns, and ensured smooth communication between customers and service teams. His professionalism, problem-solving abilities, and commitment to delivering excellent customer experiences made him a valuable asset to our organization."],
  ["Sitarama Raju", "CEO · Innovare Labs", "Aditya played an important role in supporting our digital marketing and promotional activities. His contributions to website development, content management, and conference promotions helped strengthen our brand presence within the aquaculture industry. He consistently demonstrated professionalism, creativity, and a strong commitment to delivering quality work."],
  ["Varma Bhupathiraju", "CEO · C-STAR Global Inc", "Aditya was an integral part of our marketing and digital presence. He managed our website, supported design updates, created marketing content, and played a key role in promoting our international conferences. His ability to combine creativity, technical skills, and marketing expertise helped strengthen our brand and effectively engage our target audience."],
  ["Swathi Gurijala", "HR Manager · Ecorfy Technologies Pvt Ltd", "Aditya successfully developed and maintained our company website, ensuring it remained professional, user-friendly, and up to date. He consistently delivered high-quality work, met project deadlines, and demonstrated a strong commitment to supporting our business goals. His professionalism, problem-solving abilities, and attention to detail made him a valuable member of our team."],
];

/** Blogs written for other companies. Add individual posts here and they appear automatically as cards. */
const blogs: { company: string; title: string; description: string; url: string; tag: string }[] = [
  { company: "C-STAR Global", title: "C-STAR Global blog", description: "Articles I wrote for C-STAR Global on conferences, speaking opportunities, global forums and industry trends.", url: "https://www.cstar.global/blog", tag: "Conferences · Events · Insights" },
];

const roles = ["Websites", "SEO", "Content", "Creative", "Events"];
const navLinks = [["About", "about"], ["Experience", "experience"], ["Work", "work"], ["Skills", "skills"], ["Blogs", "blogs"], ["Testimonials", "testimonials"], ["Contact", "contact"]];
const totalSkills = skillGroups.reduce((a, g) => a + g.items.length, 0);

/* ------------------------------------------------------------------ */
/* GLOBAL CSS (self-contained — no globals.css dependency)             */
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
.av-spot{position:relative}
.av-spot::before{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;opacity:0;transition:opacity .4s;background:radial-gradient(420px circle at var(--mx,50%) var(--my,50%),rgba(16,185,129,.16),transparent 45%)}
.av-spot::after{content:"";position:absolute;inset:0;border-radius:inherit;padding:1px;pointer-events:none;opacity:0;transition:opacity .4s;background:radial-gradient(320px circle at var(--mx,50%) var(--my,50%),rgba(110,231,183,.75),transparent 45%);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#000 0 0) content-box exclude,linear-gradient(#000 0 0)}
.av-spot:hover::before,.av-spot:hover::after{opacity:1}
.av-outline{-webkit-text-stroke:1px rgba(255,255,255,.22);color:transparent}
html{scroll-behavior:smooth}
@media (prefers-reduced-motion:reduce){.av-a,.av-b,.av-c,.av-spin,.av-spin-rev,.av-spin-slow,.av-pulse,.av-shine,.av-marq{animation:none!important}html{scroll-behavior:auto}}
`;

/* ------------------------------------------------------------------ */
/* BACKGROUND                                                          */
/* ------------------------------------------------------------------ */

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
  useEffect(() => {
    const move = (e: MouseEvent) => { mx.set(e.clientX); my.set(e.clientY); };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [mx, my]);
  return <motion.div aria-hidden style={{ x, y }} className="pointer-events-none fixed left-0 top-0 z-[2] hidden h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,.17),transparent_62%)] lg:block" />;
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
  return <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-300" />;
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 36, filter: "blur(10px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.85, delay, ease: EASE }}>{children}</motion.div>;
}

function SpotCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return <div onMouseMove={onMove} className={`av-spot ${className}`}>{children}</div>;
}

function Tilt({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [5, -5]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-5, 5]), { stiffness: 200, damping: 20 });
  const onMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };
  return <motion.div ref={ref} onMouseMove={onMove} onMouseLeave={() => { px.set(0); py.set(0); }} style={{ rotateX, rotateY, transformPerspective: 1100 }} className={className}>{children}</motion.div>;
}

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    if (reduce) { setV(to); return; }
    const c = animate(0, to, { duration: 1.6, ease: EASE, onUpdate: x => setV(Math.round(x)) });
    return () => c.stop();
  }, [inView, to, reduce]);
  return <span ref={ref}>{String(v).padStart(2, "0")}{suffix}</span>;
}

function SectionHead({ n, kicker, children, sub }: { n: string; kicker: string; children: React.ReactNode; sub?: string }) {
  return <Reveal>
    <div className="flex items-center gap-4">
      <span className="av-outline font-mono text-5xl font-semibold leading-none sm:text-6xl">{n}</span>
      <span className="h-px w-12 bg-gradient-to-r from-emerald-400/70 to-transparent" />
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">{kicker}</span>
    </div>
    <div className="mt-7 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
      <h2 className="max-w-4xl text-[clamp(34px,6.6vw,92px)] font-semibold leading-[.9] tracking-[-.06em] text-white">{children}</h2>
      {sub && <p className="max-w-sm text-sm leading-7 text-zinc-400">{sub}</p>}
    </div>
  </Reveal>;
}

const Grad = ({ children }: { children: React.ReactNode }) => <span className="av-shine bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">{children}</span>;

/* ------------------------------------------------------------------ */
/* HERO                                                                */
/* ------------------------------------------------------------------ */

function RotatingWord() {
  const [i, setI] = useState(0);
  useEffect(() => { const t = setInterval(() => setI(x => (x + 1) % roles.length), 2200); return () => clearInterval(t); }, []);
  return <span className="relative inline-flex h-[1.4em] min-w-[7.5ch] items-center overflow-hidden align-bottom">
    <AnimatePresence mode="wait">
      <motion.span key={roles[i]} initial={{ y: "100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-100%", opacity: 0 }} transition={{ duration: 0.45, ease: EASE }} className="absolute left-0 font-semibold text-white">{roles[i]}</motion.span>
    </AnimatePresence>
  </span>;
}

function WordReveal({ text, delay = 0, grad = false }: { text: string; delay?: number; grad?: boolean }) {
  const reduce = useReducedMotion();
  return <>{text.split(" ").map((w, i) => <span key={`${w}-${i}`} className="inline-block overflow-hidden pb-[.16em] -mb-[.16em] align-bottom"><motion.span className="inline-block" initial={reduce ? false : { y: "115%", rotate: 5 }} animate={{ y: 0, rotate: 0 }} transition={{ duration: 1, delay: delay + i * 0.09, ease: EASE }}>{grad ? <Grad>{w}</Grad> : w}&nbsp;</motion.span></span>)}</>;
}

function Orbit() {
  const chips: [string, string, number][] = [["SEO", "01", 0], ["CONTENT", "02", 90], ["CREATIVE", "03", 180], ["EXECUTE", "04", 270]];
  return <div className="relative mx-auto aspect-square w-full max-w-[480px]">
    <div className="av-pulse absolute inset-[16%] rounded-full bg-emerald-600/35 blur-3xl" />
    <div className="av-pulse absolute inset-[30%] rounded-full bg-cyan-400/20 blur-3xl [animation-delay:-3s]" />
    <div className="av-spin absolute inset-[3%] rounded-full border border-white/10">
      {chips.map(([label, n, deg]) => <div key={label} className="absolute inset-0" style={{ transform: `rotate(${deg}deg)` }}>
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
          <div style={{ transform: `rotate(${-deg}deg)` }}><div className="av-spin-rev">
            <div className="whitespace-nowrap rounded-xl border border-white/15 bg-white/[.08] px-2 py-1.5 font-mono text-[8px] text-white sm:px-3 sm:py-2 sm:text-[10px] shadow-[0_10px_40px_rgba(16,185,129,.25)] backdrop-blur-md"><span className="mr-2 text-emerald-300">{n}</span>{label}</div>
          </div></div>
        </div>
      </div>)}
    </div>
    <div className="av-spin-slow absolute inset-[20%] rounded-full border border-dashed border-emerald-300/25">
      <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,.9)]" />
      <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-teal-300 shadow-[0_0_14px_rgba(94,234,212,.9)]" />
    </div>
    <div className="absolute inset-[35%] grid place-items-center rounded-full border border-white/20 bg-[radial-gradient(circle_at_30%_25%,rgba(52,211,153,.55),rgba(24,16,48,.95)_62%)] text-center shadow-[0_0_80px_rgba(16,185,129,.45),inset_0_0_30px_rgba(255,255,255,.08)]">
      <div><p className="font-mono text-[7px] uppercase tracking-[.2em] text-emerald-200/80 sm:text-[8px]">Digital workflow</p><strong className="mt-2 block text-xl font-semibold leading-[.95] tracking-[-.05em] text-white sm:text-2xl">IDEA<br />TO<br /><Grad>IMPACT.</Grad></strong></div>
    </div>
  </div>;
}

function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 700], [0, 70]);
  const orbY = useTransform(scrollY, [0, 700], [0, 130]);
  const fade = useTransform(scrollY, [0, 600], [1, 0.25]);
  const stats: [number, string, string][] = [[2, "Years hands-on", "+"], [projects.length, "Featured projects", ""], [experience.length, "Companies", ""], [totalSkills, "Skills & tools", ""]];
  return <section id="home" className="relative flex min-h-screen flex-col justify-center pb-16 pt-32 sm:pt-36">
    <div className="mx-auto grid w-[min(1240px,calc(100%-32px))] items-center gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-8">
      <motion.div style={{ y: reduce ? 0 : textY, opacity: reduce ? 1 : fade }}>
        <motion.div initial={reduce ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }} className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[.05] px-4 py-2 font-mono text-[10px] uppercase tracking-[.16em] text-zinc-300 backdrop-blur-md">
          <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" /></span>
          Available for projects
        </motion.div>
        <h1 className="mt-8 max-w-5xl text-[clamp(40px,8.4vw,122px)] font-semibold leading-[.86] tracking-[-.07em] text-white">
          <WordReveal text="I make digital work" delay={0.15} />
          <WordReveal text="worth noticing." delay={0.55} grad />
        </h1>
        <motion.p initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1, ease: EASE }} className="mt-8 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">Digital Marketing Executive working across websites, SEO, social media, content development, creative production and event communication.</motion.p>
        <motion.div initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.1, ease: EASE }} className="mt-6 flex flex-wrap items-center gap-x-3 text-base text-zinc-500 sm:text-xl">Specialising in <RotatingWord /></motion.div>
        <motion.div initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.2, ease: EASE }} className="mt-9 flex flex-wrap items-center gap-3">
          <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} href="#work" className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-xs font-bold text-zinc-950 shadow-[0_0_50px_rgba(52,211,153,.35)] transition hover:bg-emerald-200">Explore real projects <ArrowRight size={14} className="transition group-hover:translate-x-1" /></motion.a>
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}><Link href="/work-samples" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.05] px-6 py-3.5 text-xs font-bold text-white backdrop-blur-md transition hover:border-white/40">Open work archive <ArrowRight size={14} /></Link></motion.div>
        </motion.div>
      </motion.div>
      <motion.div style={{ y: reduce ? 0 : orbY }} initial={reduce ? false : { opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.4, ease: EASE }}><Orbit /></motion.div>
    </div>
    <motion.div initial={reduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 1.4, ease: EASE }} className="mx-auto mt-16 w-[min(1240px,calc(100%-32px))]">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl md:grid-cols-4">
        {stats.map(([n, label, suffix]) => <div key={label} className="bg-[#071612]/80 px-6 py-6"><div className="text-4xl font-semibold tracking-[-.05em] text-white sm:text-5xl"><CountUp to={n} suffix={suffix} /></div><p className="mt-2 font-mono text-[9px] uppercase tracking-[.16em] text-zinc-500">{label}</p></div>)}
      </div>
    </motion.div>
    <a href="#about" aria-label="Scroll to about" className="mx-auto mt-10 hidden items-center gap-2 font-mono text-[9px] uppercase tracking-[.18em] text-zinc-500 sm:flex">Scroll to explore <motion.span animate={reduce ? undefined : { y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}><ArrowDown size={13} /></motion.span></a>
  </section>;
}

/* ------------------------------------------------------------------ */
/* SECTIONS                                                            */
/* ------------------------------------------------------------------ */

function About() {
  const range = ["Websites", "SEO", "Social", "Content", "Creative", "Events", "Publishing", "Automation"];
  return <section id="about" className="relative py-20 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
    <SectionHead n="01" kicker="About me">I work where <Grad>marketing, content and execution</Grad> meet.</SectionHead>
    <div className="mt-14 grid gap-5 lg:grid-cols-[1.25fr_.75fr]">
      <Reveal><SpotCard className="h-full rounded-[28px] border border-white/10 bg-white/[.03] p-8 backdrop-blur-xl sm:p-10"><p className="text-xl leading-8 tracking-[-.02em] text-zinc-300 sm:text-2xl sm:leading-10">I enjoy taking a raw idea, messy information or business requirement and turning it into something structured, visual, useful and ready to publish — whether that is a website, campaign, social post, blog, conference asset or digital workflow.</p></SpotCard></Reveal>
      <Reveal delay={0.1}><SpotCard className="h-full rounded-[28px] border border-white/10 bg-white/[.03] p-6 backdrop-blur-xl"><p className="font-mono text-[9px] uppercase tracking-[.16em] text-zinc-500">My working range</p>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }} className="mt-6 grid grid-cols-2 gap-2">{range.map((x, i) => <motion.span key={x} variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } } }} whileHover={{ y: -2 }} className="rounded-xl border border-white/10 bg-white/[.04] px-3 py-3 text-[10px] font-bold text-zinc-300 transition-colors hover:border-emerald-400/50 hover:text-white"><span className="mr-1.5 text-emerald-400">0{i + 1}</span>{x}</motion.span>)}</motion.div>
      </SpotCard></Reveal>
    </div>
  </div></section>;
}

/** Logo with no backing plate: floats in 3D, tilts toward the cursor, casts a soft ground shadow. */
function Logo3D({ src, alt }: { src: string; alt: string }) {
  const reduce = useReducedMotion();
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [22, -22]), { stiffness: 180, damping: 16 });
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-28, 28]), { stiffness: 180, damping: 16 });
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };
  return <div onMouseMove={onMove} onMouseLeave={() => { px.set(0); py.set(0); }} className="shrink-0 p-1" style={{ perspective: 500 }}>
    <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} animate={reduce ? undefined : { y: [0, -5, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="relative h-12 w-20 sm:h-14 sm:w-24">
      <div aria-hidden className="absolute inset-x-1 -bottom-3 h-3 rounded-[50%] bg-black/70 blur-md" style={{ transform: "translateZ(-30px) rotateX(80deg)" }} />
      <div aria-hidden className="absolute inset-0 opacity-40" style={{ transform: "translateZ(-12px)", filter: "brightness(0) blur(1px)" }}><Image src={src} alt="" fill sizes="96px" className="object-contain object-left" /></div>
      <div className="absolute inset-0" style={{ transform: "translateZ(24px)", filter: "drop-shadow(0 0 1px rgba(255,255,255,.55)) drop-shadow(0 10px 12px rgba(0,0,0,.55))" }}><Image src={src} alt={alt} fill sizes="96px" className="object-contain object-left" /></div>
    </motion.div>
  </div>;
}

function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 26 });
  return <section id="experience" className="relative py-20 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
    <SectionHead n="02" kicker="Career timeline" sub="Six roles across digital marketing, content, software and cloud engineering, CAD design and service operations.">Where I’ve worked. <Grad>What I’ve done.</Grad></SectionHead>
    <div ref={ref} className="relative mt-16 space-y-8">
      <div className="absolute bottom-0 left-[7px] top-0 w-px bg-white/10 md:left-[187px]" />
      <motion.div style={{ scaleY }} className="absolute bottom-0 left-[7px] top-0 w-px origin-top bg-gradient-to-b from-emerald-400 via-teal-300 to-cyan-300 shadow-[0_0_12px_rgba(52,211,153,.8)] md:left-[187px]" />
      {experience.map((job, i) => <Reveal key={job.company} delay={0.05}>
        <div className="relative grid gap-5 pl-9 md:grid-cols-[180px_1fr] md:gap-14 md:pl-0">
          <span className={`absolute left-0 top-8 h-[15px] w-[15px] rounded-full border-2 bg-[#04100d] md:left-[180px] ${job.current ? "border-cyan-300 shadow-[0_0_16px_rgba(103,232,249,.9)]" : "border-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.6)]"}`} />
          <div className="md:pt-7 md:text-right"><p className="font-mono text-[10px] uppercase tracking-[.14em] text-emerald-300">0{i + 1} / Experience</p><p className="mt-2 font-mono text-[10px] uppercase leading-5 tracking-[.08em] text-zinc-500">{job.dates}<br />{job.location}</p>{"type" in job && job.type && <span className="mt-3 inline-block rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 font-mono text-[8px] uppercase tracking-[.12em] text-amber-200">{job.type}</span>}{job.current && <span className="mt-3 inline-block rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 font-mono text-[8px] uppercase tracking-[.12em] text-cyan-200">Present</span>}</div>
          <Tilt><SpotCard className="rounded-[22px] border border-white/10 bg-white/[.035] p-5 backdrop-blur-xl sm:rounded-[26px] sm:p-8">
            <div className="flex items-start gap-4"><Logo3D src={job.logo} alt={`${job.company} logo`} /><div><h3 className="text-xl font-semibold tracking-[-.03em] text-white sm:text-2xl">{job.role}</h3><a href={job.href ?? "#"} target={job.href ? "_blank" : undefined} rel={job.href ? "noreferrer" : undefined} className="mt-1 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300 transition hover:text-white">{job.company}{job.href && <ExternalLink size={11} />}</a></div></div>
            <p className="mt-6 text-sm leading-7 text-zinc-400">{job.description}</p>
            <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-5">{job.points.map(p => <li key={p} className="flex gap-3 text-xs leading-6 text-zinc-300"><span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-emerald-400" />{p}</li>)}</ul>
            <div className="mt-6 flex flex-wrap gap-2">{job.tags.map(t => <span key={t} className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[9px] font-semibold text-emerald-200">{t}</span>)}</div>
          </SpotCard></Tilt>
        </div>
      </Reveal>)}
    </div>
  </div></section>;
}

function Work() {
  return <section id="work" className="relative py-20 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
    <SectionHead n="03" kicker="Selected work" sub="A selection of websites and digital experiences across aquaculture, conferences, technology and consumer brands.">Real projects. <Grad>Clear outcomes.</Grad></SectionHead>
    <div className="mt-6"><Link href="/work-samples" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.05] px-5 py-2.5 text-xs font-bold text-white backdrop-blur-md transition hover:border-emerald-400/60">Explore all work <ArrowRight size={14} /></Link></div>
    <div className="mt-14 space-y-8">
      {projects.map((project, i) => <Reveal key={project.id}>
        <SpotCard className="group relative rounded-[24px] border border-white/10 bg-white/[.03] p-3 backdrop-blur-xl sm:rounded-[32px] sm:p-6">
          <div className={`pointer-events-none absolute -z-10 h-72 w-72 rounded-full blur-[100px] ${project.glow} ${i % 2 ? "-left-10 top-10" : "-right-10 top-10"}`} />
          <div className={`grid items-center gap-8 ${i % 2 ? "lg:grid-cols-[.9fr_1.1fr]" : "lg:grid-cols-[1.1fr_.9fr]"}`}>
            <div className={i % 2 ? "lg:order-2" : ""}>
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-[0_30px_80px_rgba(0,0,0,.5)]">
                <div className="flex items-center gap-2 border-b border-white/10 bg-zinc-900 px-4 py-3"><span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" /><span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" /><span className="ml-3 truncate rounded-md bg-white/5 px-3 py-1 font-mono text-[9px] text-zinc-500">{project.link ? project.link.replace("https://", "") : project.company}</span></div>
                <div className="flex h-[200px] items-center justify-center overflow-hidden bg-[#f4f4f5] sm:h-[330px]"><Image src={project.image} alt={`${project.company} website preview`} width={1100} height={760} className="h-full w-full object-contain object-center transition duration-700 ease-out group-hover:scale-[1.04]" /></div>
              </div>
            </div>
            <div className="px-2 pb-2 lg:px-6">
              <div className="flex items-center gap-3"><span className="av-outline font-mono text-4xl font-semibold">{project.id}</span><span className="rounded-full border border-white/10 bg-white/[.05] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[.12em] text-zinc-400">{project.label}</span></div>
              <p className="mt-6 font-mono text-[10px] uppercase tracking-[.16em] text-emerald-300">{project.company}</p>
              <h3 className="mt-3 text-3xl font-semibold leading-[1.05] tracking-[-.045em] text-white sm:text-4xl">{project.title}</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-400">{project.description}</p>
              <div className="mt-7 flex flex-wrap gap-2.5"><Link href={`/work/${project.slug}`} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold text-zinc-950 transition hover:bg-emerald-200">View project <ArrowRight size={13} /></Link>{project.link && <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-xs font-bold text-white transition hover:border-white/50">Live website <ExternalLink size={13} /></a>}</div>
            </div>
          </div>
        </SpotCard>
      </Reveal>)}
    </div>
  </div></section>;
}

function ArchivePreview() {
  const half = Math.ceil(archive.length / 2);
  const rowOne = archive.slice(0, half);
  const rowTwo = archive.slice(half);
  const tile = ([src, title, company, format]: string[], key: string) => <Link href="/work-samples" key={key} className="group mr-4 w-[220px] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[.04] backdrop-blur-md transition hover:-translate-y-1 hover:border-emerald-400/50 sm:w-[260px]"><div className="flex h-[150px] items-center justify-center overflow-hidden bg-[#f2f1ef] p-3 sm:h-[180px] sm:p-4"><Image src={src} alt={title} width={520} height={420} className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.05]" /></div><div className="px-4 py-3"><p className="truncate font-mono text-[8px] uppercase tracking-[.1em] text-zinc-500">{company} · {format}</p><h3 className="mt-1.5 truncate text-xs font-bold text-zinc-100">{title}</h3></div></Link>;
  const row = (items: string[][], prefix: string) => [...items, ...items].map((it, i) => tile(it, `${prefix}-${i}`));
  return <section className="relative overflow-hidden py-20 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
    <SectionHead n="04" kicker="Creative archive" sub="Banners, carousel templates, event graphics and publications — moving gently so you can browse the range at a glance.">A closer look at <Grad>the creative work.</Grad></SectionHead>
    <div className="mt-6"><Link href="/work-samples" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold text-zinc-950 transition hover:bg-emerald-200">View all samples <ArrowRight size={14} /></Link></div>
  </div>
    <div className="av-pausable relative mt-12 space-y-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#04100d] to-transparent sm:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#04100d] to-transparent sm:w-40" />
      <div className="av-marq">{row(rowOne, "a")}</div>
      <div className="av-marq av-marq-rev">{row(rowTwo, "b")}</div>
    </div>
    <p className="mt-7 text-center text-[10px] text-zinc-500">Hover to pause · Select any sample to open the complete archive</p>
  </section>;
}

function Skills() {
  return <section id="skills" className="relative py-20 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
    <SectionHead n="05" kicker="Skills & tools" sub="A straightforward overview of the marketing disciplines, measurement tools, creative apps and publishing platforms I work with.">The skills behind <Grad>the work.</Grad></SectionHead>
    <div className="mt-14 grid gap-5 lg:grid-cols-3">
      {skillGroups.map((group, gi) => <Reveal key={group.title} delay={gi * 0.08}><SpotCard className="h-full rounded-[28px] border border-white/10 bg-white/[.03] p-6 backdrop-blur-xl sm:p-7">
        <div className="flex items-end justify-between border-b border-white/10 pb-4"><h3 className="text-lg font-semibold tracking-[-.03em] text-white">{group.title}</h3><span className="font-mono text-[9px] uppercase tracking-[.14em] text-zinc-500">{String(group.items.length).padStart(2, "0")} items</span></div>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03 } } }} className="mt-5 flex flex-wrap gap-2">{group.items.map(item => <motion.span key={item} variants={{ hidden: { opacity: 0, y: 12, scale: 0.94 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: EASE } } }} whileHover={{ y: -2 }} className="cursor-default rounded-full border border-white/10 bg-white/[.04] px-3.5 py-2 text-xs font-medium text-zinc-300 transition-colors hover:border-emerald-400/60 hover:bg-emerald-400/10 hover:text-white">{item}</motion.span>)}</motion.div>
      </SpotCard></Reveal>)}
    </div>
  </div></section>;
}

function Process() {
  const steps = [["01", "Understand", "Goal · audience · message"], ["02", "Structure", "Content · information · flow"], ["03", "Create", "Design · video · visual system"], ["04", "Execute", "Publish · schedule · maintain"]];
  return <section className="relative py-20 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
    <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-emerald-600/30 via-[#0a1f1b] to-cyan-500/10 p-5 backdrop-blur-xl sm:rounded-[40px] sm:p-14">
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_75%)]" />
      <div className="relative"><SectionHead n="06" kicker="How I work">From brief to <Grad>publish-ready.</Grad></SectionHead>
        <div className="relative mt-14 grid gap-3 md:grid-cols-4">
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 1.5, ease: EASE }} className="pointer-events-none absolute left-[10%] right-[10%] top-[46px] hidden h-px origin-left bg-gradient-to-r from-emerald-300/60 via-teal-300/60 to-cyan-300/60 md:block" />
          {steps.map(([n, title, desc], i) => <Reveal key={n} delay={i * 0.1}><motion.article whileHover={{ y: -6 }} transition={{ duration: 0.3, ease: EASE }} className="h-full rounded-[24px] border border-white/10 bg-white/[.05] p-6 backdrop-blur-xl transition-colors hover:bg-white/[.09]"><span className="grid h-10 w-10 place-items-center rounded-full border border-emerald-300/40 bg-[#0a1f1b] font-mono text-[10px] text-emerald-200 shadow-[0_0_20px_rgba(52,211,153,.4)]">{n}</span><h3 className="mt-12 text-2xl font-semibold tracking-[-.04em] text-white">{title}</h3><p className="mt-2 text-xs leading-5 text-zinc-400">{desc}</p></motion.article></Reveal>)}
        </div>
      </div>
    </div>
  </div></section>;
}

function Insights() {
  return <section id="insights" className="relative py-20 sm:py-36"><div className="mx-auto grid w-[min(1240px,calc(100%-32px))] items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
    <Reveal><div className="flex items-center gap-4"><span className="av-outline font-mono text-5xl font-semibold leading-none sm:text-6xl">07</span><span className="h-px w-12 bg-gradient-to-r from-emerald-400/70 to-transparent" /><span className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">Insights · publishing</span></div>
      <h2 className="mt-7 text-[clamp(34px,6vw,88px)] font-semibold leading-[.92] tracking-[-.06em] text-white">Content is not decoration. <Grad>It is part of the product.</Grad></h2>
      <p className="mt-7 max-w-xl text-sm leading-7 text-zinc-400">The portfolio can keep expanding with published articles, SEO work, case studies and content projects as more source material is added.</p></Reveal>
    <Reveal delay={0.1}><Tilt><SpotCard className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[.04] p-3 shadow-[0_40px_100px_rgba(0,0,0,.5)] backdrop-blur-xl"><Image src="/work/innovare/blog.png" alt="Innovare blog publishing preview" width={900} height={650} className="h-[240px] w-full rounded-[24px] object-cover object-top sm:h-[360px]" /><div className="p-4"><p className="font-mono text-[8px] uppercase tracking-[.14em] text-zinc-500">SEO · Content · Publishing</p><h3 className="mt-2 text-lg font-semibold text-white">Technical content presented as a usable digital experience.</h3></div></SpotCard></Tilt></Reveal>
  </div></section>;
}

function Blogs() {
  return <section id="blogs" className="relative py-20 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
    <SectionHead n="08" kicker="Writing" sub="Blogs I’ve written for the companies I’ve worked with, published on their own websites.">Words that <Grad>work for brands.</Grad></SectionHead>
    <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {blogs.map((b, i) => <Reveal key={b.url} delay={i * 0.08}><Tilt><SpotCard className="group relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-white/[.035] p-7 backdrop-blur-xl sm:p-8">
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-500/20 blur-[80px] transition duration-700 group-hover:bg-emerald-400/35" />
        <div className="relative flex h-full flex-col">
          <div className="flex items-center justify-between gap-3"><span className="rounded-full border border-white/10 bg-white/[.05] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[.12em] text-zinc-400">{b.tag}</span><span className="av-outline font-mono text-3xl font-semibold">0{i + 1}</span></div>
          <p className="mt-8 font-mono text-[10px] uppercase tracking-[.16em] text-emerald-300">{b.company}</p>
          <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-.035em] text-white sm:text-3xl">{b.title}</h3>
          <p className="mt-4 flex-1 text-sm leading-7 text-zinc-400">{b.description}</p>
          <a href={b.url} target="_blank" rel="noreferrer" className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold text-zinc-950 transition hover:bg-emerald-200">Read the blog <ExternalLink size={13} /></a>
        </div>
      </SpotCard></Tilt></Reveal>)}
    </div>
  </div></section>;
}

function Testimonials() {
  const card = ([name, role, quote]: string[], key: string) => <SpotCard key={key} className="mr-5 flex w-[82vw] max-w-[420px] shrink-0 flex-col rounded-[28px] border border-white/10 bg-white/[.035] p-7 backdrop-blur-xl transition-colors hover:border-emerald-400/30 sm:w-[420px] sm:p-8">
    <Quote className="text-emerald-400" size={28} />
    <div className="mt-6 text-sm tracking-[.2em] text-amber-300">★★★★★</div>
    <p className="mt-5 flex-1 whitespace-normal text-[15px] leading-7 tracking-[-.01em] text-zinc-200 sm:text-base sm:leading-8">“{quote}”</p>
    <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-emerald-500 to-cyan-400 text-sm font-bold text-white">{name[0]}</span><div className="whitespace-normal"><b className="block text-sm text-white">{name}</b><span className="mt-0.5 block text-[10px] text-zinc-500">{role}</span></div></div>
  </SpotCard>;
  const row = (list: string[][], prefix: string) => [...list, ...list].map((t, i) => card(t, `${prefix}-${i}`));
  return <section id="testimonials" className="relative overflow-hidden py-20 sm:py-36">
    <div className="mx-auto w-[min(1240px,calc(100%-32px))]">
      <SectionHead n="09" kicker="Testimonials" sub="Words from the founders, managers and teams I’ve worked with — scrolling continuously. Hover to pause.">Good work should be <Grad>remembered.</Grad></SectionHead>
    </div>
    <div className="av-pausable relative mt-14">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#04100d] to-transparent sm:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#04100d] to-transparent sm:w-40" />
      <div className="av-marq items-stretch" style={{ animationDuration: "80s" }}>{row(testimonials, "a")}</div>
    </div>
  </section>;
}

function Contact() {
  return <section id="contact" className="relative py-20 sm:py-36"><div className="mx-auto w-[min(1240px,calc(100%-32px))]">
    <Reveal><div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[.03] p-6 backdrop-blur-xl sm:rounded-[40px] sm:p-14">
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-emerald-600/30 blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-24 left-10 h-80 w-80 rounded-full bg-cyan-500/15 blur-[110px]" />
      <div className="relative flex items-center gap-4"><span className="av-outline font-mono text-5xl font-semibold leading-none sm:text-6xl">10</span><span className="h-px w-12 bg-gradient-to-r from-emerald-400/70 to-transparent" /><span className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">Contact</span></div>
      <h2 className="relative mt-8 max-w-5xl text-[clamp(36px,7.2vw,108px)] font-semibold leading-[.88] tracking-[-.07em] text-white">Let’s build something <Grad>worth showing.</Grad></h2>
      <div className="relative mt-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <p className="max-w-md text-sm leading-7 text-zinc-400">Available for digital marketing, website, content, social media and creative projects.</p>
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} href="mailto:adityaprime4705@gmail.com" className="inline-flex max-w-full items-center gap-2 break-all rounded-full bg-white px-4 py-3.5 text-[11px] font-bold text-zinc-950 shadow-[0_0_50px_rgba(52,211,153,.35)] transition-colors hover:bg-emerald-200 sm:gap-3 sm:px-6 sm:text-xs"><Mail size={14} /> adityaprime4705@gmail.com <ArrowRight size={14} /></motion.a>
          <div className="flex gap-2"><motion.a whileHover={{ y: -3 }} href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[.05] text-white transition-colors hover:border-emerald-400/70"><Linkedin size={15} /></motion.a><motion.a whileHover={{ y: -3 }} href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[.05] text-white transition-colors hover:border-emerald-400/70"><Instagram size={15} /></motion.a></div>
        </div>z
      </div>
    </div></Reveal>
    <footer className="mt-10 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 font-mono text-[9px] uppercase tracking-[.14em] text-zinc-500 sm:flex-row"><span>© 2026 Aditya Varma</span><span>Digital Marketing · Web · Content · Creative</span></footer>
  </div></section>;
}

/* ------------------------------------------------------------------ */
/* PAGE                                                                */
/* ------------------------------------------------------------------ */

export default function Portfolio() {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const ids = ["home", ...navLinks.map(([, id]) => id)];
    const els = ids.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }); }, { rootMargin: "-45% 0px -50% 0px" });
    els.forEach(el => io.observe(el));
    const onScroll = () => { setScrolled(window.scrollY > 24); setShowTop(window.scrollY > 700); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { io.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

  return <main className="relative min-h-screen overflow-x-clip bg-[#04100d] text-zinc-100 selection:bg-emerald-500/40">
    <style>{CSS}</style>
    <Backdrop />
    <ParticleField />
    <CursorGlow />
    <div aria-hidden className="av-grain pointer-events-none fixed inset-0 z-[3]" />
    <ScrollProgress />

    <motion.header style={{ x: "-50%" }} initial={{ y: -70, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, delay: 0.1, ease: EASE }} className={`fixed left-1/2 top-4 z-[60] flex w-[min(1180px,calc(100%-20px))] items-center justify-between rounded-2xl border px-3 py-2.5 backdrop-blur-2xl transition-all duration-500 ${scrolled ? "border-white/15 bg-[#09171a]/80 shadow-[0_18px_60px_rgba(0,0,0,.5)]" : "border-white/10 bg-white/[.04]"}`}>
      <a href="#home" className="flex items-center gap-2.5"><span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-400 text-[10px] font-bold text-white shadow-[0_0_20px_rgba(16,185,129,.5)]">AV</span><span><b className="block text-[11px] leading-none text-white">Aditya Varma</b><small className="mt-1 block text-[7px] uppercase tracking-[.12em] text-zinc-500">Digital Marketing Executive</small></span></a>
      <nav className="hidden items-center gap-1 lg:flex">{navLinks.map(([label, id]) => <a key={id} href={`#${id}`} className={`relative rounded-full px-3 py-1.5 text-[10px] font-semibold transition-colors ${active === id ? "text-white" : "text-zinc-400 hover:text-white"}`}>{active === id && <motion.span layoutId="nav-pill" transition={{ type: "spring", stiffness: 380, damping: 32 }} className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/10" />}{label}</a>)}<Link href="/work-samples" className="rounded-full px-3 py-1.5 text-[10px] font-semibold text-zinc-400 transition hover:text-white">Work Archive</Link></nav>
      <a href="#contact" className="hidden items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[10px] font-bold text-zinc-950 transition hover:bg-emerald-200 lg:inline-flex">Let’s talk <ArrowRight size={12} /></a>
      <button onClick={() => setMenu(!menu)} className="grid h-9 w-9 place-items-center rounded-xl border border-white/15 bg-white/5 text-white lg:hidden" aria-label="Toggle menu" aria-expanded={menu}>{menu ? <X size={16} /> : <Menu size={16} />}</button>
      <AnimatePresence>{menu && <motion.div initial={{ opacity: 0, y: -8, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8, scale: 0.97 }} transition={{ duration: 0.25, ease: EASE }} className="absolute right-0 top-14 w-64 origin-top-right rounded-2xl border border-white/15 bg-[#09171a]/95 p-2 shadow-2xl backdrop-blur-2xl lg:hidden">{navLinks.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenu(false)} className={`block rounded-xl px-3 py-3 text-xs font-semibold hover:bg-white/5 ${active === id ? "text-emerald-300" : "text-zinc-300"}`}>{label}</a>)}<Link href="/work-samples" onClick={() => setMenu(false)} className="block rounded-xl px-3 py-3 text-xs font-semibold text-zinc-300 hover:bg-white/5">Work Archive</Link></motion.div>}</AnimatePresence>
    </motion.header>

    <div className="relative z-10">
      <Hero />
      <About />
      <Experience />
      <Work />
      <ArchivePreview />
      <Skills />
      <Process />
      <Insights />
      <Blogs />
      <Testimonials />
      <Contact />
    </div>

    <AnimatePresence>{showTop && <motion.a href="#home" aria-label="Back to top" initial={{ opacity: 0, y: 16, scale: 0.8 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.8 }} whileHover={{ y: -3 }} className="fixed bottom-6 right-6 z-[60] grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-[#09171a]/80 text-white shadow-[0_10px_40px_rgba(0,0,0,.5)] backdrop-blur-xl transition-colors hover:border-emerald-400/70"><ArrowUp size={16} /></motion.a>}</AnimatePresence>
  </main>;
}