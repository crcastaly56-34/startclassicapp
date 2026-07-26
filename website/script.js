// Digital Clock Function
function updateClocks() {
    const timezones = {
        'clock-gmt': 'Europe/London',
        'clock-est': 'America/New_York',
        'clock-cst': 'America/Mexico_City',
        'clock-cet': 'Europe/Madrid',
        'clock-ist': 'Asia/Kolkata',
        'clock-jst': 'Asia/Tokyo',
        'clock-aedt': 'Australia/Sydney',
        'clock-nzdt': 'Pacific/Auckland'
    };

    for (const [elementId, timezone] of Object.entries(timezones)) {
        const element = document.getElementById(elementId);
        if (element) {
            const now = new Date();
            const formatter = new Intl.DateTimeFormat('es-ES', {
                timeZone: timezone,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            });
            element.textContent = formatter.format(now);
        }
    }
}

// Update clocks every second
setInterval(updateClocks, 1000);
updateClocks(); // Initial call

// Smooth scrolling
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

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: this.querySelector('input[placeholder="Tu nombre"]').value,
            email: this.querySelector('input[placeholder="Tu email"]').value,
            message: this.querySelector('textarea').value
        };

        // Simulate form submission
        console.log('Formulario enviado:', formData);
        
        // Reset form
        this.reset();
        
        // Show success message
        alert('¡Mensaje enviado correctamente! Nos pondremos en contacto pronto.');
    });
}

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Download button handlers
document.querySelectorAll('.btn-download').forEach((btn, index) => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        
        const downloadNames = [
            'StartClassicApp-Setup-1.0.0.exe',
            'StartClassicApp-1.0.0-Portable.zip',
            'GitHub Repository'
        ];

        if (index === 2) {
            window.open('https://github.com', '_blank');
        } else {
            alert(`Se iniciaría la descarga de: ${downloadNames[index]}`);
            console.log(`Descargando: ${downloadNames[index]}`);
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .download-card, .faq-item, .clock-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});

// Version auto-update check
console.log('StartClassicApp v1.0.0');
console.log('© 2024 - Todos los derechos reservados');
console.log('Sitio: https.startclassicapp.www');
