AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 14, 39, 0.98)';
        } else {
            navbar.style.background = 'rgba(10, 14, 39, 0.95)';
        }
    }
});

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

function setModalContent(title, imageSrc, description) {
    document.getElementById('skillModalLabel').textContent = title;
    document.getElementById('modalSkillTitle').textContent = title;
    
    const imgElement = document.getElementById('modalSkillImage');
    if (imageSrc) {
        imgElement.src = imageSrc;
        imgElement.alt = title;
        imgElement.onerror = function() {
            this.style.display = 'none';
        };
        imgElement.style.display = 'inline-block';
    } else {
        imgElement.style.display = 'none';
    }
    
    document.getElementById('modalSkillDescription').textContent = description;
}

/* Particles.js Config */
if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      "particles": {
        "number": { "value": 40, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#00d4ff" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5, "random": true },
        "size": { "value": 4, "random": true },
        "line_linked": { "enable": false },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "top",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false
        }
      },
      "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": false } } },
      "retina_detect": true
    });
}

// Inicialização do Modal de Boas-Vindas e Scroll para o Topo
document.addEventListener('DOMContentLoaded', function () {
    // Garante que a página inicie no topo
    window.scrollTo(0, 0);

    var welcomeModalElement = document.getElementById('welcomeModal');
    if (welcomeModalElement) {
        var welcomeModal = new bootstrap.Modal(welcomeModalElement);
        welcomeModal.show();
    }
});
