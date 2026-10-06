import { ArrowRight, Mail } from 'lucide-react';
import './Hero.css';

const Hero = ({ info }) => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-greeting">Hi, I'm</p>
          <h1 className="hero-title">{info.name}</h1>
          <h2 className="hero-subtitle">{info.role}</h2>
          <p className="hero-description">{info.shortDesc}</p>
          
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View My Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me <Mail size={18} />
            </a>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="hero-shape">
            {/* Simple abstract shapes instead of heavy images */}
            <div className="shape-circle primary"></div>
            <div className="shape-circle secondary"></div>
            <div className="shape-dots"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
