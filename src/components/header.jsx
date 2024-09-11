import React, { useState, useEffect } from 'react';

const Header = () => {
  const texts = [
    "Sustainable Fertilizer Optimizer",
    "Optimize Your Crop Yield",
    "Eco-friendly Fertilizer Solutions",
    "Boost Your Harvest with Precision"
  ];

  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const typingSpeed = 50; // Speed for typing effect
  const delay = 500; // Time before switching texts

  useEffect(() => {
    let typingInterval;
    if (!isDeleting && charIndex < texts[currentIndex].length) {
      // Typing characters
      typingInterval = setTimeout(() => {
        setCurrentText((prev) => prev + texts[currentIndex].charAt(charIndex));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      // Deleting characters
      typingInterval = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
        setCharIndex(charIndex - 1);
      }, typingSpeed);
    } else {
      // Pause before switching to the next text or starting deletion
      const pause = setTimeout(() => {
        setIsDeleting(!isDeleting);
        if (!isDeleting) {
          // Move to the next text
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }, delay);
      return () => clearTimeout(pause);
    }

    return () => clearTimeout(typingInterval);
  }, [charIndex, isDeleting, currentIndex]);

  return (
    <header className="bg-green-600 text-white p-4 shadow-md">
      <h1 className="text-3xl font-bold text-center">{currentText}</h1>
    </header>
  );
};

export default Header;
