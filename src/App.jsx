import { useEffect, useRef, useState } from 'react'
import profileImage from './assets/profile_image.jpg'
import afrilanceImage from './assets/afrilance-generated.jpeg'
import impactImage from './assets/impact-generated.jpeg'
import perzsiImage from './assets/perzsi-ai-generated.jpeg'
import ptaeImage from './assets/ptae-generated.jpeg'
import testimonialPainelConstru from './assets/testimonial-painelconstru.jpg'
import testimonialPerzsi from './assets/testimonial-perzsi.jpeg'
import testimonialUpwork from './assets/testimonial-upwork.jpg'
import testimonialUpworkTwo from './assets/testimonial-upwork-2.jpg'

const projects = [
  {
    slug: 'afrilance', title: 'AfriLance', kicker: 'FULL-STACK MARKETPLACE', year: '2025—26', image: afrilanceImage, imageAlt: 'AfriLance freelance marketplace interface',
    summary: 'A full-stack freelance marketplace designed to connect African talent with meaningful work.',
    problem: 'AfriLance was built as a product-led response to uneven access to freelance work and talent discovery across African markets. The product needed a clear workflow for clients, freelancers, and administrators without losing trust around access, files, or project data.',
    contribution: 'Built the product foundation across the React frontend and Supabase-backed data layer, including project discovery, gig management, role-based experiences, regional categorization, authentication, and secure upload patterns.',
    architecture: 'The application uses React for the product interface, Supabase for authentication and PostgreSQL-backed storage, and row-level security to keep client, freelancer, and administrative data access separated. The UI is organized around marketplace discovery and project operations rather than a generic admin template.',
    signals: ['End-to-end marketplace workflow', 'Role-based access control', 'Regional categorization across 54 countries', 'Secure file upload patterns'],
    stack: ['React', 'Supabase', 'PostgreSQL', 'Row-level security', 'Tailwind CSS'],
    link: 'https://github.com/OMA-B/afrilance', private: true,
  },
  {
    slug: 'perzsi-ai-scraper', title: 'Perzsi AI Scraper', kicker: 'AI ENGINEERING / BACKEND', year: '2026', image: perzsiImage, imageAlt: 'Perzsi AI Scraper administration interface',
    summary: 'A FastAPI-administered e-commerce extraction platform with staged review and publish workflows.',
    problem: 'Product extraction needed a more reliable operational loop: discover and collect data, run structured extraction, inspect failures, and promote clean records into production instead of relying on an opaque one-shot scrape.',
    contribution: 'Worked on the FastAPI application structure, authenticated admin workflow, project and product operations, scrape-start controls, failure inspection, restart paths, and staged review/edit/publish screens.',
    architecture: 'The backend is organized around FastAPI APIs, authentication and role-aware application modules, database access, and a React admin surface. The workflow separates collection, AI-assisted extraction, validation, human review, and publication so operators can intervene at each stage.',
    signals: ['Manual, single, and bulk scrape starts', 'Failure inspection and restart flows', 'Staged review/edit/publish workflow', 'FastAPI + MySQL backend'],
    stack: ['FastAPI', 'MySQL', 'Crawl4AI', 'OpenAI API', 'LangChain', 'Docker'],
    link: 'https://github.com/OMA-B/perzsi_ai_scraper', private: true,
  },
  {
    slug: 'impact-product-automate', title: 'Impact Product Automate', kicker: 'DATA OPERATIONS / FULL-STACK', year: '2025', image: impactImage, imageAlt: 'Impact Product Automate operations dashboard',
    summary: 'An internal operations platform that turns affiliate API data into reviewable, manageable catalog workflows.',
    problem: 'Affiliate systems expose nested, paginated, and inconsistent data. Operations teams need a repeatable way to fetch, normalize, review, edit, export, and re-import stores, catalogs, banners, coupons, and products without manually handling every payload.',
    contribution: 'Built the operational workflow around Impact API ingestion, ETL utilities, normalized data structures, filtering, review, editing, downloads, uploads, and bulk operations.',
    architecture: 'The project combines Python data-processing utilities with an application and browser dashboard. Docker and Nginx deployment material supports packaging the backend and frontend behind a production-oriented service boundary.',
    signals: ['Impact API data ingestion', 'ETL and JSON/CSV conversion utilities', 'Bulk review and correction workflows', 'Containerized deployment path'],
    stack: ['Python', 'React', 'Django', 'PostgreSQL', 'Docker', 'Nginx'],
    link: 'https://github.com/OMA-B/impact_prod_automate', private: true,
  },
  {
    slug: 'perzsi-track', title: 'Perzsi Tracking & Attribution Engine (PTAE)', kicker: 'PLATFORM / ATTRIBUTION', year: '2026', image: ptaeImage, imageAlt: 'Perzsi Tracking and Attribution Engine dashboard',
    summary: 'A tracking and attribution platform focused on reliable event ingestion, operational visibility, and production hardening.',
    problem: 'Marketing teams need trustworthy click and conversion signals. The platform needed to combine event intake, processing, attribution, reporting access, and operational safeguards instead of treating tracking as a simple redirect endpoint.',
    contribution: 'Contributed to the platform architecture and implementation across tracking workflows, backend services, persistence, reporting access, and the operational tooling that makes event behavior easier to inspect and maintain.',
    architecture: 'The platform is organized as a production-oriented tracking service with API and event-processing boundaries, persistence, attribution logic, and operational reporting. The project emphasizes visibility and failure handling as first-class concerns.',
    signals: ['Event ingestion and attribution workflows', 'Backend service boundaries', 'Reporting and operational visibility', 'Production-oriented safeguards'],
    stack: ['Python', 'FastAPI', 'MySQL', 'Redis', 'Celery', 'Docker'],
    link: 'https://github.com/OMA-B/perzsi_track', private: true,
  },
]

const experiences = [
  { company: 'Perzsi LLC', role: 'AI Software Engineer', period: 'Sep 2025 — Present', location: 'Texas, United States', details: ['Developed and managed backend products and services.', 'Integrated AI capabilities into operational workflows.'] },
  { company: 'Perzsi LLC', role: 'Automation Engineer', period: 'Aug 2024 — Sep 2025', location: 'Texas, United States', details: ['Built automation pipelines and scraping tools.', 'Integrated APIs into repeatable business workflows.'] },
  { company: 'Upwork', role: 'Automation Expert · Python Developer', period: 'Mar 2023 — Jan 2025', location: 'United States', details: ['Delivered automation projects, including a search-engine crawler.', 'Worked with clients on Python, data extraction, and workflow solutions.'] },
  { company: 'Painel de Preços da Construção', role: 'Automation Expert · Backend', period: 'Jul 2023 — Oct 2024', location: 'Rio Grande do Sul, Brazil', details: ['Re-engineered data, uploaded it to databases, and supported backend automation workflows.', 'Supervised marketing operations alongside data management.'] },
  { company: 'AI Community Africa', role: 'Teaching Assistant', period: 'Aug 2024 — Mar 2025', location: 'Lagos State, Nigeria', details: ['Shared recently developed data-science and AI skills with the community.', 'Supported learners through practical data and machine-learning concepts.'] },
  { company: 'Upwork', role: 'Frontend Developer', period: 'Jun 2022 — Jul 2023', location: 'United States', details: ['Built freelance front-end web experiences for international clients.', 'Developed responsive interfaces from early concept through delivery.'] },
]

function Loader() {
  const [isHidden, setIsHidden] = useState(false)
  useEffect(() => { const timer = setTimeout(() => setIsHidden(true), 2000); return () => clearTimeout(timer) }, [])
  return <div className={`loader ${isHidden ? 'hidden' : ''}`} aria-hidden="true"><div className="loader-content"><div className="loader-bar" /><span>INITIALIZING SYSTEM...</span></div></div>
}

function CircuitCanvas() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current; const ctx = canvas.getContext('2d'); let particles = []; let animationId; let width = 0; let height = 0
    const resize = () => { width = document.documentElement.clientWidth || window.innerWidth; height = window.innerHeight || document.documentElement.clientHeight; const ratio = Math.min(window.devicePixelRatio || 1, 2); canvas.width = width * ratio; canvas.height = height * ratio; canvas.style.width = `${width}px`; canvas.style.height = `${height}px`; ctx.setTransform(ratio, 0, 0, ratio, 0, 0); particles = Array.from({ length: 50 }, () => ({ x: Math.random() * width, y: Math.random() * height, vx: (Math.random() - .5) * .5, vy: (Math.random() - .5) * .5, size: Math.random() * 2 + 1 })) }
    const animate = () => { ctx.clearRect(0, 0, width, height); particles.forEach(p => { p.x += p.vx; p.y += p.vy; if (p.x < 0 || p.x > width) p.vx *= -1; if (p.y < 0 || p.y > height) p.vy *= -1; ctx.beginPath(); ctx.fillStyle = '#00d4ff'; ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill() }); ctx.strokeStyle = 'rgba(0,212,255,.15)'; for (let i = 0; i < particles.length; i++) for (let j = i + 1; j < particles.length; j++) { const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y; if (Math.sqrt(dx * dx + dy * dy) < 150) { ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y); ctx.stroke() } } animationId = requestAnimationFrame(animate) }
    resize(); animate(); window.addEventListener('resize', resize); return () => { cancelAnimationFrame(animationId); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={canvasRef} id="circuitCanvas" aria-hidden="true" />
}

function Navbar() {
  const [open, setOpen] = useState(false)
  return <nav className="nav-bar"><div className="nav-container"><a href="/#hero" className="nav-logo" onClick={() => setOpen(false)}><span className="logo-bracket">[</span><span>OMA-B</span><span className="logo-bracket">]</span></a><button className="nav-toggle" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /><span /></button><ul className={`nav-links ${open ? 'active' : ''}`}>{[['About','/#about'],['Experience','/#experience'],['Work','/#projects'],['Stack','/#skills'],['Contact','/#contact']].map(([label, href]) => <li key={href}><a href={href} onClick={() => setOpen(false)}>{label}</a></li>)}</ul></div></nav>
}

function Hero() {
  return <section className="hero" id="hero"><div className="hero-content"><div className="hero-tag">// AVAILABLE FOR OPPORTUNITIES</div><h1 className="hero-title"><span>Michael</span><span>Adeshina</span></h1><div className="hero-role">AI Software Engineer</div><p className="hero-description">I design and build reliable backend systems, AI-powered applications, and data pipelines that turn complex operational problems into dependable software.</p><div className="hero-cta"><a href="#projects" className="btn btn-primary">VIEW SELECTED WORK →</a><a href="#contact" className="btn btn-secondary">EMAIL MICHAEL</a></div></div></section>
}

function About() { return <section className="about" id="about"><div className="section-container"><div className="section-header"><span className="section-number">01</span><h2 className="section-title">ABOUT_ME</h2><div className="section-line" /></div><div className="about-grid"><div className="about-image-container"><img src={profileImage} alt="Michael Adeshina" /><div className="image-frame" /></div><div className="about-content"><h3>Engineer of intelligent systems.</h3><p>I build the systems behind useful products: backend services, extraction and tracking platforms, data operations tools, and full-stack experiences. My focus is on making complex workflows understandable, observable, and maintainable.</p><p>With 3+ years of experience across software projects and international freelance work, I bring an owner’s mindset to every layer—from API design and data modeling to interface quality and deployment.</p><div className="about-stats"><div><strong>3+</strong><span>Years experience</span></div><div><strong>30+</strong><span>Projects delivered</span></div><div><strong>10K+</strong><span>Events / second signal</span></div></div></div></div></div></section> }
function Projects() { return <section className="projects" id="projects"><div className="section-container"><div className="section-header"><span className="section-number">03</span><h2 className="section-title">SELECTED_WORK</h2><div className="section-line" /></div><div className="projects-grid">{projects.map(project => <article className="project-card" key={project.slug}><div className="project-card-inner"><div className="project-image"><img src={project.image} alt={project.imageAlt} /><div className="project-overlay" /></div><div className="project-content"><div className="project-meta"><span>{project.kicker}</span><span>{project.year}</span></div><h3>{project.title}</h3><p>{project.summary}</p><div className="project-tech">{project.stack.slice(0, 3).map(tech => <span key={tech}>{tech}</span>)}</div><div className="project-links"><a href={`/projects/${project.slug}`} className="project-link">VIEW_CASE_STUDY →</a></div></div></div></article>)}</div></div></section> }
function Skills() { const groups = [['BACKEND', ['Python', 'FastAPI', 'Django', 'REST APIs', 'AsyncIO', 'SQLAlchemy', 'Celery']], ['AI & DATA', ['OpenAI API', 'LangChain', 'RAG', 'Crawl4AI', 'Pandas', 'PostgreSQL']], ['INFRASTRUCTURE', ['MySQL', 'Redis', 'Docker', 'Nginx', 'ETL Pipelines', 'Testing']], ['FRONTEND', ['React', 'JavaScript', 'HTML/CSS', 'Responsive Design', 'Tailwind CSS']]]; return <section className="skills" id="skills"><div className="section-container"><div className="section-header"><span className="section-number">04</span><h2 className="section-title">TECH_STACK</h2><div className="section-line" /></div><div className="skills-container">{groups.map(([title, skills]) => <div className="skill-category" key={title}><h3><span>▶</span>{title}</h3><div className="skill-tags">{skills.map(skill => <span key={skill}>{skill}</span>)}</div></div>)}</div></div></section> }
function Contact() {
  const [status, setStatus] = useState('idle')
  const handleSubmit = (event) => { const form = event.currentTarget; setStatus('sending'); window.setTimeout(() => { form.reset(); setStatus('sent') }, 900) }
  return <section className="contact" id="contact"><div className="section-container"><div className="section-header"><span className="section-number">06</span><h2 className="section-title">START_A_CONVERSATION</h2><div className="section-line" /></div><div className="contact-container"><div className="contact-info"><h3>Have a difficult system to build?</h3><p>I’m currently open to AI Software Engineer and AI Automation Engineer opportunities, contract-to-hire engagements, and full-time roles.</p><div className="contact-details"><div><span>EMAIL</span><a href="mailto:michaelking4christ@gmail.com">michaelking4christ@gmail.com</a></div><div><span>LOCATION</span><strong>Lagos, Nigeria</strong></div><div><span>STATUS</span><strong><i className="status-dot" /> Available for opportunities</strong></div></div><div className="social-links"><a href="https://github.com/OMA-B/" target="_blank" rel="noreferrer">GITHUB ↗</a><a href="https://www.linkedin.com/in/oma-brayn/" target="_blank" rel="noreferrer">LINKEDIN ↗</a></div></div><form className="contact-form" action="https://formsubmit.co/3ee687df75a8597f16e0dbf9a4bfa5a1" method="POST" target="formsubmit-frame" onSubmit={handleSubmit}><input type="hidden" name="_subject" value="New portfolio inquiry" /><input type="hidden" name="_captcha" value="false" /><div className="form-group"><label htmlFor="name">NAME_</label><input id="name" name="name" type="text" placeholder="Your name" required /></div><div className="form-group"><label htmlFor="email">EMAIL_</label><input id="email" name="email" type="email" placeholder="you@company.com" required /></div><div className="form-group"><label htmlFor="subject">SUBJECT_</label><input id="subject" name="subject" type="text" placeholder="Project inquiry" required /></div><div className="form-group"><label htmlFor="message">MESSAGE_</label><textarea id="message" name="message" placeholder="Tell me about the opportunity..." required /></div><button className="btn btn-primary btn-submit" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'TRANSMITTING...' : status === 'sent' ? 'MESSAGE_SENT ✓' : 'TRANSMIT_MESSAGE →'}</button>{status === 'sent' && <p className="form-status" role="status">Thanks — your message is on its way.</p>}</form><iframe name="formsubmit-frame" title="Form submission" className="form-frame" /></div></div></section>
}
function Testimonials() {
  const [active, setActive] = useState(null)
  const items = [{ image: testimonialPainelConstru, label: 'Client remark' }, { image: testimonialPerzsi, label: 'Client remark' }, { image: testimonialUpwork, label: 'Client remark' }, { image: testimonialUpworkTwo, label: 'Client remark' }]
  useEffect(() => { if (!active) return undefined; const closeOnEscape = (event) => { if (event.key === 'Escape') setActive(null) }; document.addEventListener('keydown', closeOnEscape); return () => document.removeEventListener('keydown', closeOnEscape) }, [active])
  return <section className="testimonials" id="testimonials"><div className="section-container"><div className="section-header"><span className="section-number">05</span><h2 className="section-title">CLIENT_REMARKS</h2><div className="section-line" /></div><div className="testimonials-grid">{items.map((item, index) => <button className="testimonial-card" type="button" key={item.image} onClick={() => setActive({ ...item, index })}><img src={item.image} alt={`${item.label} ${index + 1}`} loading="lazy" /><span>{item.label} · VIEW REMARK ↗</span></button>)}</div></div>{active && <div className="modal-backdrop" role="presentation" onClick={() => setActive(null)}><div className="remark-modal" role="dialog" aria-modal="true" aria-label={`Client remark ${active.index + 1}`} onClick={(event) => event.stopPropagation()}><button className="modal-close" type="button" onClick={() => setActive(null)} aria-label="Close client remark">×</button><img src={active.image} alt={`Client remark ${active.index + 1}`} /><p>Client remark {active.index + 1}</p></div></div>}</section>
}
function Footer() { return <footer className="footer"><div className="footer-content"><span>[OMA-B]</span><span>© 2026 Michael Adeshina</span><span>Engineered with precision. Powered by AI.</span></div></footer> }
function ProjectPage({ project }) { return <><div className="case-page"><Navbar /><main className="case-main"><a className="back-link" href="/#projects">← BACK TO SELECTED WORK</a><div className="case-header"><div><span className="hero-tag">{project.kicker}</span><h1>{project.title}</h1><p>{project.summary}</p></div><img src={project.image} alt={project.imageAlt} /></div><div className="case-grid"><aside><span>YEAR</span><strong>{project.year}</strong><span>ACCESS</span><strong>Private project</strong><span>REPOSITORY</span><a href={project.link} target="_blank" rel="noreferrer">GitHub profile ↗</a></aside><article><section><h2>01 / CONTEXT</h2><p>{project.problem}</p></section><section><h2>02 / MY CONTRIBUTION</h2><p>{project.contribution}</p></section><section><h2>03 / ARCHITECTURE</h2><p>{project.architecture}</p></section><section><h2>04 / TECHNICAL SIGNALS</h2><ul>{project.signals.map(signal => <li key={signal}>{signal}</li>)}</ul></section><section><h2>05 / STACK</h2><div className="case-tags">{project.stack.map(tech => <span key={tech}>{tech}</span>)}</div></section><section className="private-note"><h2>DEMO STATUS</h2><p>This project is currently private. Screenshots and a focused product walkthrough will be added here soon.</p></section></article></div></main><Footer /></div></> }
function ScrollTop() { const [visible, setVisible] = useState(false); useEffect(() => { const onScroll = () => setVisible(window.scrollY > 300); window.addEventListener('scroll', onScroll); return () => window.removeEventListener('scroll', onScroll) }, []); return visible ? <button className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to top">↑</button> : null }

function Experience() {
  return <section className="experience" id="experience"><div className="section-container"><div className="section-header"><span className="section-number">02</span><h2 className="section-title">EXPERIENCE</h2><div className="section-line" /></div><div className="experience-list">{experiences.map(item => <article className="experience-item" key={`${item.company}-${item.period}`}><div className="experience-item-header"><div><h3>{item.role}</h3><strong>{item.company}</strong></div><div className="experience-period"><span>{item.period}</span><small>{item.location}</small></div></div><ul>{item.details.map(detail => <li key={detail}>{detail}</li>)}</ul></article>)}</div></div></section>
}

function App() {
  const [path] = useState(window.location.pathname)
  const project = projects.find(item => path === `/projects/${item.slug}` || path === `/projects/${item.slug}/`)
  useEffect(() => { if (path !== '/') window.scrollTo(0, 0) }, [path])
  if (project) return <ProjectPage project={project} />
  return <><Loader /><CircuitCanvas /><Navbar /><main><Hero /><About /><Experience /><Projects /><Skills /><Testimonials /><Contact /></main><Footer /><ScrollTop /></>
}

export default App
