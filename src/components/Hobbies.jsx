import { Fish as FishIcon, Code as CodeIcon } from 'lucide-react';
import { FootballIcon } from './Icons';
import './Hobbies.css';

const iconMap = {
  football: <FootballIcon size={32} className="hobby-icon" />,
  fishing: <FishIcon size={32} className="hobby-icon" />,
  code: <CodeIcon size={32} className="hobby-icon" />
};

const Hobbies = ({ hobbies }) => {
  return (
    <section id="hobby" className="hobbies">
      <div className="container">
        <h2 className="section-title">My Hobbies</h2>
        
        <div className="hobbies-grid">
          {hobbies.map((hobby) => (
            <div key={hobby.id} className="card hobby-card">
              <div className="hobby-icon-wrapper">
                {iconMap[hobby.icon] || <CodeIcon size={32} className="hobby-icon" />}
              </div>
              <h3 className="hobby-title">{hobby.title}</h3>
              <p className="hobby-description">{hobby.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
