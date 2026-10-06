import './Footer.css';

const Footer = ({ name }) => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>© {year} {name}. Built with passion and blue.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
