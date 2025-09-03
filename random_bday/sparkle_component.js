// Add some interactive sparkle effects on mouse move
document.addEventListener('mousemove', function(e) {
    if (Math.random() > 0.95) {
        createTrailSparkle(e.clientX, e.clientY);
    }
});

function createTrailSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.textContent = ['✨', '💫', '⭐'][Math.floor(Math.random() * 3)];
    sparkle.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        font-size: 12px;
        pointer-events: none;
        z-index: 1000;
        animation: trailSparkle 1s ease-out forwards;
    `;
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1000);
}

// Add CSS for trail sparkle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes trailSparkle {
        0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(0);
        }
        50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0) translateY(-30px);
        }
    }
`;
document.head.appendChild(style);
