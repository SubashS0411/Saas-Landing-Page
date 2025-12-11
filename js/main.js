/**
 * OrbitScale Main Logic
 * Handles Mobile Menu, Pricing Toggles, and UI interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initDashboardMenu();
    initPricingToggle();
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
    }

    function closeMenu() {
        menu.classList.remove('translate-x-0');
        menu.classList.add('translate-x-full', 'rtl:-translate-x-full');
        if (overlay) overlay.classList.add('hidden');
        btn.setAttribute('aria-expanded', 'false');
    }

    btn.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    if (overlay) overlay.addEventListener('click', closeMenu);
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
    const btn = document.getElementById('dashboard-menu-btn');
    const sidebar = document.querySelector('aside');

    if (!btn || !sidebar) return;

    // Create overlay dynamically
    let overlay = document.getElementById('dashboard-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'dashboard-overlay';
        overlay.className = 'fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 hidden transition-opacity md:hidden';
        document.body.appendChild(overlay);
        overlay.addEventListener('click', closeMenu);
    }

    function openMenu() {
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
    }

    function closeMenu() {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
    }

    btn.addEventListener('click', openMenu);
}
