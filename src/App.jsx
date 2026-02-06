import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, Linkedin, Twitter, Instagram, Code2, Folder, 
  Mail, MapPin, User, Briefcase, Plane, ArrowUp, Send, Quote,
  GraduationCap, Terminal, CheckCircle2, Globe, Database
} from 'lucide-react';
import './App.css';

// 1. إعداد البيانات الموحدة
const socialLinks = [
  { icon: <Linkedin size={24} />, url: "https://www.linkedin.com/in/ahmedmostafaalsabbahy/", label: "LinkedIn" },
  { icon: <Github size={24} />, url: "https://github.com/alsabbahy", label: "Github" },
  { icon: <Twitter size={24} />, url: "https://x.com/code__chronicle", label: "Twitter" },
  { icon: <Instagram size={24} />, url: "https://www.instagram.com/sabbahy.codes/", label: "Instagram" },
  { icon: <Database size={24} />, url: "https://stackoverflow.com/users/13487030/ahmed-alsabbahy", label: "StackOverflow" }
];

const testimonials = [
  { text: "Ahmed is a top-tier engineer. His ability to design secure and efficient backend solutions using FastAPI is truly impressive.", author: "Technical Lead" },
  { text: "Collaborating with Ahmed has been a great experience. He is technically sound and a great mentor to others.", author: "Project Manager" },
  { text: "Ahmed delivers high-quality code with great attention to detail and performance optimization.", author: "Senior Architect" }
];

const projects = [
  { title: "React Resume", image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop", link: "https://reactresume.com/", description: "Modern professional resume builder." },
  { title: "LXT Platform", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop", link: "#", description: "Data platform for AI training." },
  { title: "Backend Architecture", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop", link: "#", description: "Scalable microservices solutions." }
];

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  // منطق التغيير التلقائي للـ Testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="app-container">
      {/* 1. Navbar */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">Ahmed.Dev</div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Work</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="/resume.pdf" target="_blank" className="nav-btn-cv">Resume</a></li>
          </ul>
        </div>
      </nav>

      {/* 2. Intro Banner */}
      <section className="intro-banner">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="intro-content">
          <p className="intro-title">Who am I?</p>
          <h1 className="intro-name">I'm Ahmed AlSabbahy.</h1>
          <p className="intro-text">
            I'm an Egyptian <strong>Senior Software Engineer</strong> at <a href="https://lxt.ai" target="_blank" className="highlight">LXT</a>.
          </p>
          
          {/* الأيقونات في البنر مع التوسيط */}
          <div className="banner-socials">
            {socialLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="banner-social-link"
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="action-buttons">
            <a href="/racat/resume.pdf" target="_blank" className="btn-primary"><Folder size={18} /> Resume (PDF)</a>
            <a href="#contact" className="btn-outline"><Mail size={18} /> Contact</a>
          </div>
        </motion.div>
      </section>

      {/* 3. About Section */}
      <section className="about-full-section" id="about">
        <div className="about-container">
          <h2>About me</h2>
          <p className="about-description">Senior Backend Engineer specialized in FastAPI, Cloud Development, and Clean Code.</p>
          <div className="personal-info-grid">
            <div className="info-item"><MapPin size={20} color="#64ffda"/> <div><span className="info-label">Location</span><span className="info-value">Cairo, Egypt</span></div></div>
            <div className="info-item"><User size={20} color="#64ffda"/> <div><span className="info-label">Nationality</span><span className="info-value">Egyptian</span></div></div>
            <div className="info-item"><Briefcase size={20} color="#64ffda"/> <div><span className="info-label">Employment</span><span className="info-value">LXT, inc.</span></div></div>
            <div className="info-item"><Plane size={20} color="#64ffda"/> <div><span className="info-label">Hobbies</span><span className="info-value">Gym, Traveling, Reading</span></div></div>
          </div>
        </div>
      </section>

      {/* 4. Professional Details */}
      <section className="pro-details-section" id="experience">
        <div className="section-container">
          <div className="pro-grid">
            <div className="pro-column">
              <h3 className="column-title"><Briefcase size={22} color="#64ffda" /> Experience</h3>
              <div className="timeline">
                <div className="timeline-item">
                  <h4>Senior Software Engineer</h4>
                  <p className="company">LXT, inc. | 2022 - Present</p>
                  <p className="desc">Developing and maintaining core data platform using FastAPI.</p>
                </div>
                <div className="timeline-item">
                  <h4>Software Engineer</h4>
                  <p className="company">Sword Egypt | 2020 - 2022</p>
                </div>
              </div>
              <h3 className="column-title" style={{marginTop: '40px'}}><GraduationCap size={22} color="#64ffda" /> Education</h3>
              <div className="timeline">
                <div className="timeline-item">
                  <h4>B.Sc. in Computer Engineering</h4>
                  <p className="company">Modern Academy for Engineering</p>
                </div>
              </div>
            </div>
            <div className="pro-column">
              <h3 className="column-title"><Terminal size={22} color="#64ffda" /> Skills</h3>
              <div className="skills-grid">
                {['Python', 'FastAPI', 'React', 'Cloud (AWS)', 'Docker', 'PostgreSQL', 'Clean Architecture', 'Git'].map((skill) => (
                  <div key={skill} className="skill-tag">
                    <CheckCircle2 size={14} color="#64ffda" /> {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Projects Section */}
      <section className="projects-section" id="projects">
        <div className="section-container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <a href={project.link} target="_blank" rel="noopener noreferrer" key={index} className="project-card">
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="project-overlay">View Project <Globe size={18} style={{marginLeft: '8px'}} /></div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="testimonials-section">
        <div className="testimonial-box">
          <Quote size={35} className="quote-icon" style={{color: '#64ffda', marginBottom: '20px', display: 'block', margin: '0 auto'}} />
          <div className="testimonial-wrapper">
            <AnimatePresence mode='wait'>
              <motion.div key={activeIndex} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}>
                <p className="testimonial-text">"{testimonials[activeIndex].text}"</p>
                <h4 className="testimonial-author">-- {testimonials[activeIndex].author}</h4>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="dots-container">
            {testimonials.map((_, index) => (
              <button key={index} className={`dot ${index === activeIndex ? 'active' : ''}`} onClick={() => setActiveIndex(index)} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Contact Section */}
      <section className="contact-section" id="contact">
        <div className="contact-container">
          <div className="contact-form-side">
            <h2>Get in touch.</h2>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Name" className="form-input" required />
              <input type="email" placeholder="Email" className="form-input" required />
              <textarea placeholder="Message" rows="4" className="form-input" required></textarea>
              <button type="submit" className="btn-primary" style={{width: '100%', justifyContent: 'center'}}><Send size={18} /> Send Message</button>
            </form>
          </div>
          <div className="contact-details-side">
            <div className="detail-item"><Mail color="#64ffda" /> <div><h4>Email</h4><p>ahmed@sabbahy.codes</p></div></div>
            <div className="detail-item"><MapPin color="#64ffda" /> <div><h4>Location</h4><p>6th of October City, Giza</p></div></div>
            <div className="detail-item"><Github color="#64ffda" /> <div><h4>Github</h4><p>alsabbahy</p></div></div>
          </div>
        </div>
      </section>

      {/* 8. Footer */}
      <footer className="footer-final">
        <button className="scroll-top-btn" onClick={scrollToTop}><ArrowUp size={24} /></button>
        <div className="footer-socials">
          {socialLinks.map((social, index) => (
            <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="banner-social-link">
              {React.cloneElement(social.icon, { size: 20 })}
            </a>
          ))}
        </div>
        <p style={{marginTop: '20px', color: '#8892b0', fontSize: '0.8rem'}}>Ahmed AlSabbahy &copy; 2026</p>
      </footer>
    </div>
  );
}

export default App;