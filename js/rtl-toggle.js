const RTL_DURATION = 500;

document.addEventListener('DOMContentLoaded', () => {
    const rtlButtons = document.querySelectorAll('.rtl-toggle-btn');
    
    // Create overlay if not exists
    if (!document.getElementById('rtl-overlay')) {
        const overlay = document.createElement('div');
        overlay.id = 'rtl-overlay';
        document.body.appendChild(overlay);
    }

    const overlay = document.getElementById('rtl-overlay');

    rtlButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            toggleRTL(overlay);
        });
    });
});

function toggleRTL(overlay) {
    const html = document.documentElement;
    const isRTL = html.getAttribute('dir') === 'rtl';
    const direction = isRTL ? 'ltr' : 'rtl';
    
    // Start Animation In
    overlay.classList.remove('rtl-animating-out');
    overlay.classList.add('rtl-animating-in');

    // Wait for cover
    setTimeout(() => {
        // Toggle Direction
        html.setAttribute('dir', direction);
        localStorage.setItem('orbitscales_dir', direction);
        
        // Slight pause for effect
        setTimeout(() => {
            overlay.classList.remove('rtl-animating-in');
            overlay.classList.add('rtl-animating-out');
        }, 100);

    }, RTL_DURATION);
}

// Check local storage on load
(function initDir() {
    const savedDir = localStorage.getItem('orbitscales_dir');
    if (savedDir) {
        document.documentElement.setAttribute('dir', savedDir);
    }
})();
