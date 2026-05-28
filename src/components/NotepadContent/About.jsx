import React from 'react'

function About({ content }) {
  return (
    <div className="notepad-content">
      <h2>About</h2>

      {content.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

export default About;
