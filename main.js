  
        document.addEventListener('DOMContentLoaded', function() {
            const body = document.body;
            const colors = ['#FF9BB3', '#E8B959', '#C4A484', '#FFFFFF'];
            
            for (let i = 0; i < 25; i++) {
                const bubble = document.createElement('div');
                bubble.classList.add('bubble');
                
                const size = Math.random() * 100 + 20;
                const posX = Math.random() * 100;
                const posY = Math.random() * 100;
                const delay = Math.random() * 5;
                const duration = Math.random() * 10 + 5;
                const color = colors[Math.floor(Math.random() * colors.length)];
                
                bubble.style.width = `${size}px`;
                bubble.style.height = `${size}px`;
                bubble.style.left = `${posX}vw`;
                bubble.style.top = `${posY}vh`;
                bubble.style.animationDelay = `${delay}s`;
                bubble.style.animationDuration = `${duration}s`;
                bubble.style.backgroundColor = color;
                
                body.appendChild(bubble);
            }
        });