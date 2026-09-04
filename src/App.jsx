import { useState, useEffect } from 'react'

// Navigation Component
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: '01_ABOUT', href: '#about' },
    { label: '02_PROJECTS', href: '#projects' },
    { label: '03_SKILLS', href: '#skills' },
    { label: '04_CONTACT', href: '#contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-terminal-bg/95 backdrop-blur-sm border-b border-terminal-border' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-1 text-terminal-accent font-bold">
          <span className="text-terminal-muted">[</span>
          <span>OMA-B</span>
          <span className="text-terminal-muted">]</span>
        </a>
        
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="nav-link">{item.label}</a>
            </li>
          ))}
        </ul>

        <button 
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={`w-6 h-0.5 bg-terminal-text transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-terminal-text transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-terminal-text transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-terminal-bg border-b border-terminal-border px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="nav-link block py-2" onClick={() => setIsMobileMenuOpen(false)}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

// Hero Section
function Hero() {
  const [displayText, setDisplayText] = useState('')
  const role = 'AI Software Engineer'

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= role.length) {
        setDisplayText(role.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Circuit board background effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#00ff41 1px, transparent 1px), linear-gradient(90deg, #00ff41 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-3xl">
          <div className="text-terminal-accent text-sm tracking-widest mb-4">// SYSTEM ONLINE</div>
          
          <h1 className="text-display text-5xl md:text-7xl font-bold mb-4 leading-tight">
            <span className="text-terminal-text">Michael</span>
            <br />
            <span className="text-terminal-accent">Adeshina</span>
          </h1>

          <div className="text-xl md:text-2xl text-terminal-muted mb-6 h-8">
            <span>{displayText}</span>
            <span className="animate-blink text-terminal-accent">_</span>
          </div>

          <p className="text-terminal-muted text-lg mb-8 max-w-xl">
            I build intelligent backend systems that scale. Specializing in AI-powered applications, 
            data engineering, and full-stack development.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">EXPLORE_WORK</a>
            <a href="#contact" className="btn-secondary">INITIALIZE_CONTACT</a>
          </div>
        </div>
      </div>

      {/* Decorative lines */}
      <div className="absolute right-0 top-1/4 w-32 h-px bg-gradient-to-l from-terminal-accent to-transparent opacity-30"></div>
      <div className="absolute right-0 top-1/3 w-48 h-px bg-gradient-to-l from-terminal-muted to-transparent opacity-20"></div>
      <div className="absolute right-0 top-1/2 w-24 h-px bg-gradient-to-l from-terminal-accent to-transparent opacity-30"></div>
    </section>
  )
}

// About Section
function About() {
  return (
    <section id="about" className="border-t border-terminal-border">
      <div className="section-container">
        <div className="section-header">
          <span className="section-number">01</span>
          <h2 className="section-title">ABOUT_ME</h2>
          <div className="section-line"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <div className="w-full aspect-square bg-terminal-surface border border-terminal-border flex items-center justify-center">
              <div className="text-center">
                <span className="text-4xl text-terminal-muted">[IMG]</span>
                <p className="text-terminal-muted text-sm mt-2">Photo Placeholder</p>
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-full h-full border border-terminal-accent -z-10"></div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-terminal-text mb-4">
              Engineer of Intelligent Systems
            </h3>
            
            <p className="text-terminal-muted mb-4">
              AI Software Engineer with 3+ years of experience building production-grade systems. 
              I specialize in backend development, AI/ML integration, and data engineering — 
              transforming complex business requirements into scalable, reliable software solutions.
            </p>
            
            <p className="text-terminal-muted mb-6">
              Previously freelanced for international clients, delivering end-to-end solutions 
              ranging from AI-powered web scrapers to real-time tracking engines handling 10K+ events/sec. 
              Now seeking to bring my expertise to a high-impact engineering team.
            </p>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 border border-terminal-border">
                <div className="text-2xl font-bold text-terminal-accent">50+</div>
                <div className="text-xs text-terminal-muted mt-1">Projects Delivered</div>
              </div>
              <div className="text-center p-4 border border-terminal-border">
                <div className="text-2xl font-bold text-terminal-accent">3+</div>
                <div className="text-xs text-terminal-muted mt-1">Years Experience</div>
              </div>
              <div className="text-center p-4 border border-terminal-border">
                <div className="text-2xl font-bold text-terminal-accent">100%</div>
                <div className="text-xs text-terminal-muted mt-1">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Projects Section
function Projects() {
  const projects = [
    {
      title: 'Perzsi Tracking & Attribution Engine',
      category: 'SYSTEM DESIGN & BACKEND',
      description: 'Built a complete tracking and attribution system that handles 10K+ clicks/sec with sub-50ms latency. Features real-time click tracking, conversion attribution, UTM parameter support, and automated reporting APIs.',
      tech: ['FastAPI', 'MySQL', 'Redis', 'Celery', 'Docker'],
      github: 'https://github.com/OMA-B',
      demo: '#'
    },
    {
      title: 'AI-Powered Web Scraper',
      category: 'AI ENGINEERING',
      description: 'Developed an intelligent web scraping backend using Crawl4AI and GPT for structured data extraction. Features async processing, automated pagination discovery, and LLM-based content extraction with configurable models.',
      tech: ['FastAPI', 'Crawl4AI', 'OpenAI API', 'SQLAlchemy', 'Docker'],
      github: 'https://github.com/OMA-B',
      demo: '#'
    },
    {
      title: 'Impact Product Automate',
      category: 'FULL-STACK & DATA',
      description: 'Created an ETL pipeline and web dashboard for affiliate marketing data management. Automates data fetching from Impact API, processes 100K+ records, and provides an interactive dashboard with bulk operations.',
      tech: ['Python', 'Django', 'React', 'Pandas', 'PostgreSQL'],
      github: 'https://github.com/OMA-B',
      demo: '#'
    },
    {
      title: 'AfriLance Marketplace',
      category: 'FULL-STACK SAAS',
      description: 'Designed and built a freelance marketplace platform for African talent. Features role-based authentication, gig management, regional categorization across 54 countries, and secure file uploads with PostgreSQL RLS.',
      tech: ['React', 'Supabase', 'PostgreSQL', 'TailwindCSS', 'RLS'],
      github: 'https://github.com/OMA-B',
      demo: '#'
    }
  ]

  return (
    <section id="projects" className="border-t border-terminal-border">
      <div className="section-container">
        <div className="section-header">
          <span className="section-number">02</span>
          <h2 className="section-title">PROJECT_LOG</h2>
          <div className="section-line"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <article key={index} className="group border border-terminal-border bg-terminal-surface p-6 hover:border-terminal-accent transition-colors duration-300">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-terminal-accent tracking-wider">{project.category}</span>
                <span className="text-xs text-terminal-muted">2024</span>
              </div>

              <h3 className="text-lg font-bold text-terminal-text mb-3 group-hover:text-terminal-accent transition-colors">
                {project.title}
              </h3>

              <p className="text-sm text-terminal-muted mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span key={i} className="skill-tag">{t}</span>
                ))}
              </div>

              <div className="flex gap-4">
                <a href={project.github} target="_blank" rel="noopener" className="text-xs text-terminal-muted hover:text-terminal-accent transition-colors">
                  GITHUB →
                </a>
                <a href={project.demo} className="text-xs text-terminal-muted hover:text-terminal-accent transition-colors">
                  WALKTHROUGH →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

// Skills Section
function Skills() {
  const skillCategories = [
    {
      title: 'BACKEND DEVELOPMENT',
      skills: ['Python', 'FastAPI', 'Django', 'REST APIs', 'AsyncIO', 'SQLAlchemy', 'Celery']
    },
    {
      title: 'AI & MACHINE LEARNING',
      skills: ['OpenAI API', 'LangChain', 'RAG', 'NLP', 'Crawl4AI', 'Prompt Engineering']
    },
    {
      title: 'DATA & INFRASTRUCTURE',
      skills: ['MySQL', 'PostgreSQL', 'Redis', 'Docker', 'ETL Pipelines', 'Pandas']
    },
    {
      title: 'FRONTEND & FULL-STACK',
      skills: ['React', 'TailwindCSS', 'Supabase', 'HTML/CSS/JS', 'Responsive Design']
    }
  ]

  return (
    <section id="skills" className="border-t border-terminal-border">
      <div className="section-container">
        <div className="section-header">
          <span className="section-number">03</span>
          <h2 className="section-title">TECH_STACK</h2>
          <div className="section-line"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="p-6 border border-terminal-border">
              <h3 className="text-sm font-bold text-terminal-accent tracking-wider mb-4 flex items-center gap-2">
                <span className="text-terminal-muted">▶</span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Section
function Contact() {
  return (
    <section id="contact" className="border-t border-terminal-border">
      <div className="section-container">
        <div className="section-header">
          <span className="section-number">04</span>
          <h2 className="section-title">INITIALIZE_LINK</h2>
          <div className="section-line"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold text-terminal-text mb-4">
              Let's Build Something<br />
              <span className="text-terminal-accent">Intelligent</span> Together
            </h3>
            
            <p className="text-terminal-muted mb-8">
              I'm currently open to AI Software Engineer positions — both contract-to-hire and full-time. 
              If you're looking for someone who can design, build, and deploy AI-powered backend systems, 
              let's talk.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <span className="text-xs text-terminal-muted w-16">EMAIL:</span>
                <a href="mailto:michaelking4christ@gmail.com" className="text-terminal-text hover:text-terminal-accent transition-colors">
                  michaelking4christ@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs text-terminal-muted w-16">LOCATION:</span>
                <span className="text-terminal-text">Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs text-terminal-muted w-16">STATUS:</span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-terminal-accent rounded-full animate-pulse"></span>
                  <span className="text-terminal-accent">Available for Opportunities</span>
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/OMA-B" target="_blank" rel="noopener" className="btn-secondary">GITHUB</a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener" className="btn-secondary">LINKEDIN</a>
            </div>
          </div>

          {/* Contact Form - Visual Only */}
          <div className="p-6 border border-terminal-border bg-terminal-surface">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs text-terminal-muted mb-2">NAME_</label>
                <input type="text" className="w-full bg-terminal-bg border border-terminal-border px-4 py-3 text-sm text-terminal-text focus:border-terminal-accent focus:outline-none transition-colors" placeholder="Enter your name" />
              </div>
              <div>
                <label className="block text-xs text-terminal-muted mb-2">EMAIL_</label>
                <input type="email" className="w-full bg-terminal-bg border border-terminal-border px-4 py-3 text-sm text-terminal-text focus:border-terminal-accent focus:outline-none transition-colors" placeholder="Enter your email" />
              </div>
              <div>
                <label className="block text-xs text-terminal-muted mb-2">SUBJECT_</label>
                <input type="text" className="w-full bg-terminal-bg border border-terminal-border px-4 py-3 text-sm text-terminal-text focus:border-terminal-accent focus:outline-none transition-colors" placeholder="Project inquiry" />
              </div>
              <div>
                <label className="block text-xs text-terminal-muted mb-2">MESSAGE_</label>
                <textarea className="w-full bg-terminal-bg border border-terminal-border px-4 py-3 text-sm text-terminal-text focus:border-terminal-accent focus:outline-none transition-colors resize-none" rows="4" placeholder="Tell me about the opportunity..."></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">TRANSMIT_MESSAGE</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="border-t border-terminal-border py-8">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="text-terminal-accent font-bold">[OMA-B]</span>
          <span className="text-xs text-terminal-muted">© 2026 Michael Adeshina</span>
        </div>
        <div className="text-xs text-terminal-muted text-center md:text-right">
          Engineered with precision. Powered by AI.
        </div>
      </div>
    </footer>
  )
}

// Scroll to Top Button
function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 500)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <button 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 w-12 h-12 border border-terminal-accent text-terminal-accent hover:bg-terminal-accent hover:text-terminal-bg transition-all duration-200 flex items-center justify-center z-50"
      aria-label="Scroll to top"
    >
      ↑
    </button>
  )
}

// Main App Component
function App() {
  return (
    <div className="min-h-screen bg-terminal-bg text-terminal-text">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <ScrollTop />
    </div>
  )
}

export default App