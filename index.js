<!-- Confetti effect script -->

// Particle animation
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('particles-container');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Random properties
        const size = Math.random() * 5 + 2;
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        const opacity = Math.random() * 0.5 + 0.1;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}px`;
        particle.style.top = `${posY}px`;
        particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
        particle.style.opacity = opacity;

        container.appendChild(particle);
    }

    // CTA button effect
    const ctaButton = document.getElementById('cta-button');
    ctaButton.addEventListener('click', () => {
        createConfetti();
        // Simulate navigation after animation
        setTimeout(() => {
            alert('Welcome! Let\'s get started on your journey.');
        }, 1000);
    });

    // Confetti function
    function createConfetti() {
        const colors = ['#3b82f6', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b'];

        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('particle');

            const size = Math.random() * 10 + 5;
            const posX = Math.random() * window.innerWidth;
            const color = colors[Math.floor(Math.random() * colors.length)];

            confetti.style.width = `${size}px`;
            confetti.style.height = `${size}px`;
            confetti.style.left = `${posX}px`;
            confetti.style.top = `-10px`;
            confetti.style.backgroundColor = color;
            confetti.style.borderRadius = '50%';

            // Random animation
            const animationDuration = Math.random() * 3 + 2;
            const animationName = `fall${Math.random() > 0.5 ? '1' : '2'}`;

            // Create keyframes dynamically
            const style = document.createElement('style');
            document.head.appendChild(style);

            if (!document.getElementById('confetti-animations')) {
                const keyframes = `
                            @keyframes fall1 {
                                0% { transform: translateY(0) rotate(0deg); opacity: 1; }
                                100% { transform: translateY(${window.innerHeight}px) rotate(360deg); opacity: 0; }
                            }
                            @keyframes fall2 {
                                0% { transform: translateY(0) rotate(0deg) translateX(0); opacity: 1; }
                                50% { transform: translateY(${window.innerHeight/2}px) rotate(180deg) translateX(${Math.random() > 0.5 ? 100 : -100}px); opacity: 0.8; }
                                100% { transform: translateY(${window.innerHeight}px) rotate(360deg) translateX(0); opacity: 0; }
                            }
                        `;
                style.id = 'confetti-animations';
                style.innerHTML = keyframes;
            }

            confetti.style.animation = `${animationName} ${animationDuration}s linear forwards`;

            document.body.appendChild(confetti);

            // Remove confetti after animation
            setTimeout(() => {
                confetti.remove();
            }, animationDuration * 1000);
        }
    }
});