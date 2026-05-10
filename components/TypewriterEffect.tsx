"use client";

import { useEffect, useState } from "react";

export default function TypewriterEffect() {
  const [text, setText] = useState("");
  const typingPhrases = [
    "AI/MLE Intern Candidate",
    "Incoming NYU MSCS",
    "Agentic AI Developer",
    "Barcelona Fan",
  ];

  useEffect(() => {
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timer: NodeJS.Timeout;

    const type = () => {
      const currentPhrase = typingPhrases[phraseIndex];

      if (isDeleting) {
        setText(currentPhrase.substring(0, charIndex - 1));
        charIndex -= 1;
      } else {
        setText(currentPhrase.substring(0, charIndex + 1));
        charIndex += 1;
      }

      let typeSpeed = isDeleting ? 30 : 60;

      if (!isDeleting && charIndex === currentPhrase.length) {
        typeSpeed = 1500; // Pause at end
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % typingPhrases.length;
        typeSpeed = 500; // Pause before starting new
      }

      timer = setTimeout(type, typeSpeed);
    };

    timer = setTimeout(type, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <span className="typing-text" id="typed-text">
      {text}
    </span>
  );
}
