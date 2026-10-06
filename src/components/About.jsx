import './About.css';

const About = ({ info }) => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text-container">
            <p className="about-text">{info.about}</p>
          </div>
          
          <div className="about-card card">
            <div className="profile-placeholder">
              <span className="profile-initial">{info.name.charAt(0)}</span>
            </div>
            <h3 className="profile-name">{info.name}</h3>
            <p className="profile-role">{info.role}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
