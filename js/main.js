/**
 * OrbitScale Main Logic
 * Handles Mobile Menu, Pricing Toggles, and UI interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initDashboardMenu();
    initPricingToggle();
    initSidebarToggle();
    initScrollReveal();
    initParallax();
});

/* Mobile Menu Logic */
function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const closeBtn = document.getElementById('mobile-menu-close');
    const overlay = document.getElementById('mobile-menu-overlay');

    if (!btn || !menu) return;

    function openMenu() {
        menu.classList.remove('translate-x-full', 'rtl:-translate-x-full');
        menu.classList.add('translate-x-0');
        if (overlay) overlay.classList.remove('hidden');
        btn.setAttribute('aria-expanded', 'true');
        // Prevent body scroll when menu is open
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        menu.classList.remove('translate-x-0');
        menu.classList.add('translate-x-full', 'rtl:-translate-x-full');
        if (overlay) overlay.classList.add('hidden');
        btn.setAttribute('aria-expanded', 'false');
        // Restore body scroll
        document.body.style.overflow = '';
    }

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        openMenu();
    });
    
    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeMenu();
        });
    }
    
    if (overlay) {
        overlay.addEventListener('click', closeMenu);
    }

    // Close menu when clicking on menu links (for better UX)
    const menuLinks = menu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Small delay for navigation to register
            setTimeout(closeMenu, 100);
        });
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !menu.classList.contains('translate-x-full')) {
            closeMenu();
        }
    });
}

/* Pricing Toggle Logic */
function initPricingToggle() {
    const toggle = document.getElementById('pricing-toggle');
    if (!toggle) return;

    toggle.addEventListener('change', (e) => {
        const isYearly = e.target.checked;
        const prices = document.querySelectorAll('[data-monthly]');
        const periods = document.querySelectorAll('.price-period');

        prices.forEach(price => {
            const monthly = price.getAttribute('data-monthly');
            const yearly = price.getAttribute('data-yearly');

            // Animation Out
            price.classList.add('opacity-0', 'translate-y-1');

            setTimeout(() => {
                price.textContent = isYearly ? yearly : monthly;
                // Animation In
                price.classList.remove('opacity-0', 'translate-y-1');
            }, 150);
        });

        periods.forEach(p => {
            p.classList.add('opacity-0');
            setTimeout(() => {
                p.textContent = isYearly ? '/yr' : '/mo';
                p.classList.remove('opacity-0');
            }, 150);
        });
    });
}

/* Dashboard Mobile Menu Logic (Left Sidebar) */
function initDashboardMenu() {
    const sidebar = document.querySelector('aside');
    if (!sidebar) return;

    // Create overlay dynamically if needed for sidebar
    let overlay = document.getElementById('dashboard-overlay');
    if (!overlay && (sidebar.classList.contains('bg-slate-900') || sidebar.classList.contains('bg-slate-950'))) {
        overlay = document.createElement('div');
        overlay.id = 'dashboard-overlay';
        overlay.className = 'fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-30 hidden transition-opacity md:hidden';
        document.body.appendChild(overlay);
        
        function closeMenu() {
            if (!sidebar) return;
            sidebar.classList.remove('translate-x-0');
            sidebar.classList.add('-translate-x-full', 'rtl:translate-x-full');
            if (overlay) overlay.classList.add('hidden');
        }
        
        overlay.addEventListener('click', closeMenu);
    }
}

/* Sidebar Toggle for Dashboard Pages */
function initSidebarToggle() {
    const btn = document.getElementById('sidebar-toggle-btn');
    const sidebar = document.querySelector('aside');

    if (!btn || !sidebar) return;

    // Create overlay dynamically
    let overlay = document.getElementById('dashboard-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'dashboard-overlay';
        overlay.className = 'fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-30 hidden transition-opacity md:hidden';
        document.body.appendChild(overlay);
    }

    function openSidebar() {
        sidebar.classList.remove('-translate-x-full', 'rtl:translate-x-full');
        sidebar.classList.add('translate-x-0');
        if (overlay) overlay.classList.remove('hidden');
    }

    function closeSidebar() {
        sidebar.classList.remove('translate-x-0');
        sidebar.classList.add('-translate-x-full', 'rtl:translate-x-full');
        if (overlay) overlay.classList.add('hidden');
    }

    btn.addEventListener('click', openSidebar);
    if (overlay) overlay.addEventListener('click', closeSidebar);
}

/* Scroll Reveal Animation */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    if (revealElements.length === 0) return;
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('revealed');
            }
        });
    };
    
    // Initial check
    revealOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', revealOnScroll);
}

/* Parallax Effect */
function initParallax() {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    if (parallaxElements.length === 0) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}
