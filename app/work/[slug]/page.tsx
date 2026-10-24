// import Link from "next/link";
// import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
// import { notFound } from "next/navigation";

// const data = {
//   "innovare-biopharma": {
//     company: "Innovare Biopharma LLP",
//     eyebrow: "01 · DIGITAL MARKETING / WEB / SEO",
//     title: "Building a digital presence around website, search, content and product communication.",
//     intro: "A hands-on digital marketing project spanning website work, social media, SEO, Meta Ads, content, product communication and expo promotions.",
//     tags: ["Website", "SMM", "SEO", "Meta Ads", "Digital Marketing", "Product Design", "Blogs", "Expo Events"],
//     images: ["/work/innovare/home.png", "/work/innovare/products.png", "/work/innovare/blog.png", "/work/innovare/insights.png"],
//     bullets: ["Website development and ongoing website work", "Social Media Marketing and digital content", "SEO implementation and search-focused content", "Meta Ads and paid digital promotion", "Product design and product presentation", "Expo/event promotional work", "Blog development and publishing"],
//     link: "https://innovarebiopharma.com/",
//     cta: "Visit Innovare Biopharma",
//   },
//   "c-star-global": {
//     company: "C-STAR Global",
//     eyebrow: "02 · CONFERENCE / CONTENT / EVENT MARKETING",
//     title: "From raw conference information to structured content, event media and post-event communication.",
//     intro: "A complete conference-content workflow covering speaker information, content structuring, event creatives, video, virtual events, publications and social publishing.",
//     tags: ["Content Development", "Speaker Data", "Banners", "Intro Video", "Virtual Events", "Conference Book", "Video Editing", "Social Scheduling"],
//     images: [],
//     bullets: ["Collected and organized speaker information", "Converted raw content into useful, structured content", "Created conference and event banners", "Created intro and promotional videos", "Handled virtual event content and coordination", "Created conference books/publication material", "Edited raw event footage into key-takeaway clips", "Planned and scheduled social media publishing"],
//   },
//   "ecorfy-technologies": {
//     company: "Ecorfy Technologies Pvt. Ltd.",
//     eyebrow: "03 · SOFTWARE DEVELOPMENT / SOCIAL MEDIA",
//     title: "Technical development combined with technology-focused social communication.",
//     intro: "Worked as a software developer while also supporting social media posting and digital communication for a technology-focused company.",
//     tags: ["Software Development", "Social Media", "Digital Content", "Technology Marketing"],
//     images: ["/work/ecorfy/ai.png", "/work/ecorfy/software.png", "/work/ecorfy/outdated.png", "/work/ecorfy/digital-marketing.png"],
//     bullets: ["Software development work", "Social media posting and publishing", "Technology-focused promotional content", "Service-focused creative communication"],
//     link: "https://www.ecorfy.com/",
//     cta: "Visit Ecorfy",
//   },
//   "shreshta-pickles": {
//     company: "Shreshta Pickles",
//     eyebrow: "04 · FREELANCE / WORDPRESS",
//     title: "A product-focused WordPress experience for a food brand.",
//     intro: "Freelance WordPress website development focused on product presentation, website structure and an e-commerce-oriented customer experience.",
//     tags: ["WordPress", "WooCommerce", "Product Pages", "Freelance"],
//     images: ["/work/shreshta/portfolio-preview.png"],
//     bullets: ["WordPress website development", "Website structure and page development", "Product and category presentation", "E-commerce-oriented website structure", "Content placement and formatting", "Responsive website presentation"],
//     link: "https://shreshtapickles.com/",
//     cta: "Visit Shreshta Pickles",
//   },
// } as const;

// export function generateStaticParams() { return Object.keys(data).map((slug) => ({ slug })); }

// export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
//   const { slug } = await params;
//   const project = data[slug as keyof typeof data];
//   if (!project) notFound();
//   return <main className="detail-page">
//     <header className="detail-nav shell"><Link href="/#work" className="back-link"><ArrowLeft size={15} /> Back to work</Link><span>ADITYA VARMA · SELECTED WORK</span></header>
//     <section className="detail-hero shell"><span className="eyebrow"><i /> {project.eyebrow}</span><h1>{project.title}</h1><p>{project.intro}</p><div className="detail-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>{project.link && <a className="primary-btn" href={project.link} target="_blank" rel="noreferrer">{project.cta} <ExternalLink size={15} /></a>}</section>
//     {project.images.length ? <section className="detail-gallery shell">{project.images.map((src, i) => <div className={`gallery-frame gallery-${i + 1}`} key={src}><img src={src} alt={`${project.company} work sample ${i + 1}`} /></div>)}</section> : <section className="process-visual shell"><div className="process-grid" />{["RAW CONTENT", "SPEAKER DATA", "CREATIVE", "EVENT", "VIDEO", "SOCIAL"].map((x, i) => <div className={`process-node process-${i + 1}`} key={x}><small>0{i + 1}</small><b>{x}</b></div>)}<div className="process-center"><span>C-STAR GLOBAL</span><strong>CONTENT<br />ENGINE</strong><small>structure · create · publish</small></div></section>}
//     <section className="detail-body shell"><div><span className="eyebrow"><i /> My contribution</span><h2>What I worked on.</h2></div><div className="detail-list">{project.bullets.map((x, i) => <div key={x}><span>0{i + 1}</span><p>{x}</p></div>)}</div></section>
//     <section className="detail-next shell"><span>Next project</span><Link href={slug === "shreshta-pickles" ? "/work/innovare-biopharma" : slug === "innovare-biopharma" ? "/work/c-star-global" : slug === "c-star-global" ? "/work/ecorfy-technologies" : "/work/shreshta-pickles"}>Explore another project <ArrowRight size={15} /></Link></section>
//   </main>;
// }

import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";

type Project = {
  company: string; eyebrow: string; title: string; intro: string;
  tags: string[]; images: string[]; bullets: string[];
  link?: string; cta?: string;
};

const data: Record<string, Project> = {
  "innovare-biopharma": {
    company: "Innovare Biopharma LLP",
    eyebrow: "01 · DIGITAL MARKETING / WEB / SEO",
    title: "Building a digital presence around website, search, content and product communication.",
    intro: "A hands-on digital marketing project spanning website work, social media, SEO, Meta Ads, content, product communication and expo promotions.",
    tags: ["Website", "SMM", "SEO", "Meta Ads", "Digital Marketing", "Product Design", "Blogs", "Expo Events"],
    images: ["/work/innovare/home.png", "/work/innovare/products.png", "/work/innovare/blog.png", "/work/innovare/insights.png"],
    bullets: ["Website development and ongoing website work", "Social Media Marketing and digital content", "SEO implementation and search-focused content", "Meta Ads and paid digital promotion", "Product design and product presentation", "Expo/event promotional work", "Blog development and publishing"],
    link: "https://innovarebiopharma.com/",
    cta: "Visit Innovare Biopharma",
  },
  "c-star-global": {
    company: "C-STAR Global",
    eyebrow: "02 · CONFERENCE / CONTENT / EVENT MARKETING",
    title: "From raw conference information to structured content, event media and post-event communication.",
    intro: "A complete conference-content workflow covering speaker information, content structuring, event creatives, video, virtual events, publications and social publishing.",
    tags: ["Content Development", "Speaker Data", "Banners", "Intro Video", "Virtual Events", "Conference Book", "Video Editing", "Social Scheduling"],
    images: [],
    bullets: ["Collected and organized speaker information", "Converted raw content into useful, structured content", "Created conference and event banners", "Created intro and promotional videos", "Handled virtual event content and coordination", "Created conference books/publication material", "Edited raw event footage into key-takeaway clips", "Planned and scheduled social media publishing"],
  },
  "ecorfy-technologies": {
    company: "Ecorfy Technologies Pvt. Ltd.",
    eyebrow: "03 · SOFTWARE DEVELOPMENT / SOCIAL MEDIA",
    title: "Technical development combined with technology-focused social communication.",
    intro: "Worked as a software developer while also supporting social media posting and digital communication for a technology-focused company.",
    tags: ["Software Development", "Social Media", "Digital Content", "Technology Marketing"],
    images: ["/work/ecorfy/ai.png", "/work/ecorfy/software.png", "/work/ecorfy/outdated.png", "/work/ecorfy/digital-marketing.png"],
    bullets: ["Software development work", "Social media posting and publishing", "Technology-focused promotional content", "Service-focused creative communication"],
    link: "https://www.ecorfy.com/",
    cta: "Visit Ecorfy",
  },
  "shreshta-pickles": {
    company: "Shreshta Pickles",
    eyebrow: "04 · FREELANCE / WORDPRESS",
    title: "A product-focused WordPress experience for a food brand.",
    intro: "Freelance WordPress website development focused on product presentation, website structure and an e-commerce-oriented customer experience.",
    tags: ["WordPress", "WooCommerce", "Product Pages", "Freelance"],
    images: ["/work/shreshta/portfolio-preview.png"],
    bullets: ["WordPress website development", "Website structure and page development", "Product and category presentation", "E-commerce-oriented website structure", "Content placement and formatting", "Responsive website presentation"],
    link: "https://shreshtapickles.com/",
    cta: "Visit Shreshta Pickles",
  },
};

export function generateStaticParams() { return Object.keys(data).map((slug) => ({ slug })); }

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = data[slug];
  if (!project) notFound();
  return <main className="detail-page">
    <header className="detail-nav shell"><Link href="/#work" className="back-link"><ArrowLeft size={15} /> Back to work</Link><span>ADITYA VARMA · SELECTED WORK</span></header>
    <section className="detail-hero shell"><span className="eyebrow"><i /> {project.eyebrow}</span><h1>{project.title}</h1><p>{project.intro}</p><div className="detail-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>{project.link && <a className="primary-btn" href={project.link} target="_blank" rel="noreferrer">{project.cta} <ExternalLink size={15} /></a>}</section>
    {project.images.length ? <section className="detail-gallery shell">{project.images.map((src, i) => <div className={`gallery-frame gallery-${i + 1}`} key={src}><img src={src} alt={`${project.company} work sample ${i + 1}`} /></div>)}</section> : <section className="process-visual shell"><div className="process-grid" />{["RAW CONTENT", "SPEAKER DATA", "CREATIVE", "EVENT", "VIDEO", "SOCIAL"].map((x, i) => <div className={`process-node process-${i + 1}`} key={x}><small>0{i + 1}</small><b>{x}</b></div>)}<div className="process-center"><span>C-STAR GLOBAL</span><strong>CONTENT<br />ENGINE</strong><small>structure · create · publish</small></div></section>}
    <section className="detail-body shell"><div><span className="eyebrow"><i /> My contribution</span><h2>What I worked on.</h2></div><div className="detail-list">{project.bullets.map((x, i) => <div key={x}><span>0{i + 1}</span><p>{x}</p></div>)}</div></section>
    <section className="detail-next shell"><span>Next project</span><Link href={slug === "shreshta-pickles" ? "/work/innovare-biopharma" : slug === "innovare-biopharma" ? "/work/c-star-global" : slug === "c-star-global" ? "/work/ecorfy-technologies" : "/work/shreshta-pickles"}>Explore another project <ArrowRight size={15} /></Link></section>
  </main>;
}