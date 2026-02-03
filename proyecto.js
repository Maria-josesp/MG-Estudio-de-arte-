 console.log("5"-1);
        const slides = document.querySelector('.carrusel');
        const images = document.querySelectorAll('.carrusel-item');
        const prev = document.querySelector('.prev');
        const next = document.querySelector('.next');
        let index = 0;

        function updateSlide() {
            slides.style.transform = `translateX(-${index * 100}%)`;
            
        }
        next.addEventListener('click', () => {
            index = (index + 1) % images.length;
            updateSlide();
        });

        prev.addEventListener('click', () => {
            index = (index - 1 + images.length) % images.length;
            updateSlide();
        });

// MENU HAMBURGUESA
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });       
        
        
       
