document.addEventListener('DOMContentLoaded', () => {
    createSunflowers();
});

function createSunflowers() {
    const garden = document.getElementById('garden');
    const centerX = garden.clientWidth / 2;
    const centerY = garden.clientHeight / 2;
    const radius = 200; // Radius for the surrounding sunflowers
    const numSunflowers = 8; // Number of surrounding sunflowers

    for (let i = 0; i < numSunflowers; i++) {
        const sunflower = document.createElement('div');
        sunflower.className = 'sunflower';
        const angle = (i * 360) / numSunflowers;
        const x = centerX + radius * Math.cos((angle * Math.PI) / 180) - 50;
        const y = centerY + radius * Math.sin((angle * Math.PI) / 180) - 50;
        sunflower.style.left = `${x}px`;
        sunflower.style.top = `${y}px`;
        sunflower.style.zIndex = -1;
        sunflower.style.animationDelay = `${(i + 1) * 0.5}s`; // Delay for each sunflower to appear one after another
        garden.appendChild(sunflower);
    }
}