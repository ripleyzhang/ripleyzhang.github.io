import React from 'react'

function About({ content }) {
  return (
    <div className="notepad-content">
      <h1>About</h1>

      {content.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

export default About;
