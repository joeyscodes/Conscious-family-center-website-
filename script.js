// Conscious Floating Bubble Environment Animation
const canvas = document.getElementById('bubbleCanvas');
const ctx = canvas.getContext('2d');

let bubbleArray = [];

// Initialize matching device responsive canvas screen scaling
function initCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
initCanvasSize();

window.addEventListener('resize', () => {
    initCanvasSize();
});

// Bubble Blueprint Class
class Bubble {
    constructor() {
        this.reset();
        // Stagger positions initially across screen height randomly
        this.y = Math.random() * canvas.height;
    }

    reset() {
        this.radius = Math.random() * 35 + 10;
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + this.radius + Math.random() * 100;
        this.speedY = Math.random() * 0.4 + 0.15; // Slow, organic floating motion
        this.speedX = Math.sin(Math.random() * 2) * 0.2;
        // Warm palette organic translucent pastels matching CSS
        const colors = [
            'rgba(227, 146, 126, 0.04)', // Pastel Orange/Coral
            'rgba(127, 169, 155, 0.05)', // Mint Teal
            'rgba(232, 197, 128, 0.04)'  // Soft Gold
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
        this.y -= this.speedY;
        this.x += this.speedX;

        // If bubble escapes past the top of viewport ceiling, reset to bottom safely
        if (this.y + this.radius < 0) {
            this.reset();
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

// Populate structural array with safe count for smooth Android rendering
function populateBubbles() {
    bubbleArray = [];
    const maxBubbles = window.innerWidth < 600 ? 15 : 35; 
    for (let i = 0; i < maxBubbles; i++) {
        bubbleArray.push(new Bubble());
    }
}
populateBubbles();

// Animation frame paint loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < bubbleArray.length; i++) {
        bubbleArray[i].update();
        bubbleArray[i].draw();
    }
    requestAnimationFrame(animate);
}
animate();
      
