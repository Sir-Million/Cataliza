(function() {
    const meshContainer = document.querySelector('.mesh');
    if (!meshContainer) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    meshContainer.appendChild(canvas);

    const config = {
        particleColor: 'rgba(255, 255, 255, 0.7)',
        lineColor: 'rgba(255, 255, 255, 0.3)',
        particleAmount: 100,
        defaultRadius: 2,
        variantRadius: 2,
        defaultSpeed: 0.5,
        variantSpeed: 0.5,
        linkRadius: 180,
        mouseRepelRadius: 150,
        mouseRepelForce: 2,
    };

    let particles;
    let mouse = { x: null, y: null };

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.radius = config.defaultRadius + Math.random() * config.variantRadius;
            this.speedX = (Math.random() - 0.5) * config.defaultSpeed;
            this.speedY = (Math.random() - 0.5) * config.defaultSpeed;
            this.baseSpeedX = this.speedX;
            this.baseSpeedY = this.speedY;
        }

        draw() {
            ctx.fillStyle = config.particleColor;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
        }

        update() {
            // Mouse repel
            if (mouse.x !== null) {
                const dx = this.x - mouse.x;
                const dy = this.y - mouse.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < config.mouseRepelRadius) {
                    const angle = Math.atan2(dy, dx);
                    const force = (config.mouseRepelRadius - distance) / config.mouseRepelRadius;
                    this.x += Math.cos(angle) * force * config.mouseRepelForce;
                    this.y += Math.sin(angle) * force * config.mouseRepelForce;
                }
            }
            
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }
    }

    function createParticles() {
        particles = [];
        let numParticles = (canvas.width * canvas.height) / 9000;
        numParticles = Math.min(numParticles, config.particleAmount);
        for (let i = 0; i < numParticles; i++) {
            particles.push(new Particle());
        }
    }

    function drawLines() {
        ctx.strokeStyle = config.lineColor;
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < config.linkRadius) {
                    ctx.lineWidth = 1 - (distance / config.linkRadius);
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        drawLines();
        requestAnimationFrame(animate);
    }

    function init() {
        canvas.width = meshContainer.offsetWidth;
        canvas.height = meshContainer.offsetHeight;
        createParticles();
        animate();
    }

    function onResize() {
        canvas.width = meshContainer.offsetWidth;
        canvas.height = meshContainer.offsetHeight;
        createParticles();
    }
    
    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });
    window.addEventListener('mouseout', () => {
        mouse.x = null;
        mouse.y = null;
    });

    init();
})();
