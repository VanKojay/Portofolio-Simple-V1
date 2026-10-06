import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';
import './Contact.css';

const Contact = ({ info }) => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-container card">
          <h2 className="contact-title">Let's Connect</h2>
          <p className="contact-description">
            Tertarik untuk berkolaborasi atau sekadar ingin menyapa? 
            Jangan ragu untuk menghubungi saya melalui salah satu platform di bawah ini.
          </p>
          
          <div className="contact-links">
            <a href={`mailto:${info.email}`} className="contact-item">
              <div className="contact-icon-wrapper">
                <Mail size={24} />
              </div>
              <span>Email</span>
            </a>
            
            <a href={info.github} target="_blank" rel="noopener noreferrer" className="contact-item">
              <div className="contact-icon-wrapper">
                <GithubIcon size={24} />
              </div>
              <span>GitHub</span>
            </a>
            
            <a href={info.linkedin} target="_blank" rel="noopener noreferrer" className="contact-item">
              <div className="contact-icon-wrapper">
                <LinkedinIcon size={24} />
              </div>
              <span>LinkedIn</span>
            </a>
            
            <a href={info.instagram} target="_blank" rel="noopener noreferrer" className="contact-item">
              <div className="contact-icon-wrapper">
                <InstagramIcon size={24} />
              </div>
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
