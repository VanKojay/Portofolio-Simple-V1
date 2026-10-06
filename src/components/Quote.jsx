import './Quote.css';

const Quote = ({ quote }) => {
  return (
    <section className="quote">
      <div className="container">
        <div className="quote-content">
          <span className="quote-mark">"</span>
          <p className="quote-text">{quote}</p>
          <span className="quote-mark">"</span>
        </div>
      </div>
    </section>
  );
};

export default Quote;
