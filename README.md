# 🚀 OrbitScale - Enterprise SaaS Platform

![OrbitScale Banner](https://via.placeholder.com/1200x400/6366f1/ffffff?text=OrbitScale+Platform)

> **Scale your workflow, not your workload.**
> A premium, responsive, and feature-rich SaaS landing page template built with modern web technologies.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![RTL Support](https://img.shields.io/badge/RTL-Support-green?style=for-the-badge)

## ✨ Key Features

OrbitScale is designed to be a complete solution for SaaS websites, offering a seamless experience across all devices and languages.

### 🎨 Visual & Design
*   **Dual Theme Support**:
    *   ☀️ **Light Mode** (`index.html`) - Clean, professional enterprise look.
    *   🌙 **Dark Mode** (`index-v2.html`) - Sleek, developer-centric aesthetic.
*   **Responsive Design**: Fully responsive layouts optimized for Mobile, Tablet, and Desktop.
*   **Modern UI Components**: Glassmorphism effects, gradients, and smooth transitions.
*   **Phosphor Icons**: High-quality, consistent iconography throughout the site.

### 🌐 Internationalization
*   **RTL Native Support**: Complete Right-to-Left (RTL) support for languages like Arabic and Hebrew.
*   **Global Toggle**: One-click RTL/LTR toggle accessible on all pages.

### 📱 Mobile Experience
*   **✅ Fully Mobile Optimized**: Complete mobile-first responsive design across all 14 pages.
*   **Custom Mobile Drawer**: Smooth slide-in mobile navigation (Right-side for LTR, Left-side for RTL).
*   **Touch-Optimized**: 44x44px minimum tap targets, optimized touch interactions.
*   **Backdrop Overlay**: Polished overlay effects with blur for focused navigation.
*   **Safe Area Support**: iPhone X+ notch support with safe area insets.
*   **Auto-Scroll Lock**: Body scroll prevention when menu is open.
*   **Keyboard Accessible**: Escape key to close menu, full keyboard navigation.
*   **Performance Optimized**: Hardware-accelerated animations, smooth 60fps interactions.

### ⚡ Pages Included
*   **Landing Pages**: Home V1 (Light) & Home V2 (Dark).
*   **Company**: About Us, Services, Portfolio (Case Studies), Contact, Team.
*   **Resources**: Blog, Pricing.
*   **Authentication**: Login, Register.
*   **Dashboards**:
    *   👤 **User Dashboard**: Client-facing interface.
    *   🛡️ **Admin Dashboard**: Management interface.
*   **Utilities**: 404 Error, Coming Soon.

---

## 🛠️ Technology Stack

*   **Structure**: HTML5 (Semantic)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/) (CDN)
*   **Scripting**: Vanilla JavaScript (ES6+)
*   **Icons**: [Phosphor Icons](https://phosphoricons.com/)
*   **Performance**: Optimized assets and clean code structure.

---

## 📂 Project Structure

```bash
📂 Project Root
├── 📄 index.html          # Main Landing Page (Light)
├── 📄 index-v2.html       # Developer Landing Page (Dark)
├── 📄 about.html          # Company Information
├── 📄 services.html       # Service Offerings
├── 📄 pricing.html        # Subscription Plans
├── 📄 blog.html           # News & Updates
├── 📄 portfolio.html      # Case Studies
├── 📄 contact.html        # Contact Form & Info
├── 📄 login.html          # User Sign In
├── 📄 register.html       # User Sign Up
├── 📄 user-dashboard.html # Client Area
├── 📄 admin-dashboard.html# Admin Control Panel
├── 📄 coming-soon.html    # Under Construction Page
├── 📄 404.html            # Error Page
├── � verify-mobile.html  # Mobile Menu Test Page
├── 📄 MOBILE-COMPLETE.md  # Mobile Optimization Docs
├── 📄 MOBILE-OPTIMIZATION.md # Mobile Setup Guide
├── 📂 css/
│   └── 📄 style.css       # Custom Animations & Mobile Styles
├── 📂 js/
│   ├── 📄 main.js         # Core Logic (Mobile Menu, Toggles, Animations)
│   └── 📄 rtl-toggle.js   # RTL/LTR Switching Logic
└── 📂 images/             # Project Assets
```

---

## 🚀 Getting Started

Since OrbitScale is built with static HTML/JS and Tailwind CDN, getting started is instant.

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/SubashS0411/Saas-Landing-Page.git
    cd Saas-Landing-Page
    ```

2.  **Open in Browser**:
    Simply open `index.html` in your preferred web browser (Chrome, Firefox, Edge, Safari).

    > **Note**: For the best development experience, use a local server to avoid CORS issues:
    
    **Python 3**:
    ```bash
    python -m http.server 8080
    # Then visit http://localhost:8080
    ```
    
    **Node.js (npx)**:
    ```bash
    npx http-server -p 8080
    ```
    
    **VS Code**: Install "Live Server" extension and right-click `index.html` → "Open with Live Server"

3.  **Test Mobile**:
    - Press `F12` to open DevTools
    - Press `Ctrl+Shift+M` (Windows) or `Cmd+Shift+M` (Mac) to toggle device toolbar
    - Select any mobile device preset to test responsive design
    - Or open `verify-mobile.html` for interactive mobile menu testing

---

## 📱 Mobile Testing

### Quick Mobile Test
1. Open any HTML page
2. Resize browser to mobile width (< 768px)
3. Click hamburger menu (☰)
4. Verify menu slides in smoothly
5. Test closing with X button, overlay click, or Escape key

### Test Page
Open `verify-mobile.html` for comprehensive mobile menu testing with visual feedback.

### Real Device Testing
```bash
python -m http.server 8080
# Access on mobile: http://YOUR_LOCAL_IP:8080
```

For complete mobile optimization details, see [MOBILE-COMPLETE.md](MOBILE-COMPLETE.md).

---

## 🧭 Navigation Guide

*   **Home Menu**: Hover to switch between Light (V1) and Dark (V2) homepage versions.
*   **Dashboard Menu**: A dedicated dropdown to access User or Admin dashboards.
*   **RTL Toggle**: Click the 🌐 Globe icon in the navigation bar to instantly flip the layout direction.

---

## 🤝 Contribution

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

<p align="center">
  Built with ❤️ for the modern web.
</p>
