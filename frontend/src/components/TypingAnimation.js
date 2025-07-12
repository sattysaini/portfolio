import React, { useState, useEffect } from 'react';
import './TypingAnimation.css';

const TypingAnimation = ({ texts, typingSpeed = 100, deletingSpeed = 50, pauseDuration = 2000 }) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (!texts || texts.length === 0) return;

        if (isPaused) {
            const pauseTimeout = setTimeout(() => {
                setIsPaused(false);
                setIsDeleting(true);
            }, pauseDuration);
            return () => clearTimeout(pauseTimeout);
        }

        const timeout = setTimeout(() => {
            const fullText = texts[currentTextIndex];

            if (isDeleting) {
                setCurrentText(prev => prev.slice(0, -1));
                
                if (currentText === '') {
                    setIsDeleting(false);
                    setCurrentTextIndex(prev => (prev + 1) % texts.length);
                }
            } else {
                setCurrentText(fullText.slice(0, currentText.length + 1));
                
                if (currentText === fullText) {
                    setIsPaused(true);
                }
            }
        }, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, isPaused, currentTextIndex, texts, typingSpeed, deletingSpeed, pauseDuration]);

    return (
        <span className="typing-animation">
            {currentText}
            <span className="cursor">|</span>
        </span>
    );
};

export default TypingAnimation;