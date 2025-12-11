Product Requirement Document (PRD): "OrbitScale" - Enterprise SaaS Platform
1. Project Overview
Project Name: OrbitScale
Type: Frontend-only SaaS Landing & Dashboard Suite
Objective: Create a visually striking, high-conversion website for a cloud analytics/automation tool. It must feature distinct "Light" and "Dark" themes for the home variants, interactive pricing, and a seamless LTR/RTL transmission.
Vibe: Tech-forward, clean, trustworthy, geometric, and animated.
2. Technical Stack & Strict Constraints
Core: HTML5, CSS3 (Tailwind CSS), Vanilla JavaScript.
Styling: Tailwind CSS (via CDN or CLI output).
Constraint: No Inline CSS (style="..."). No Internal CSS (<style>). All custom styles and animations must reside in css/style.css.
JavaScript:
js/main.js: UI logic (Pricing toggles, Mobile menu, Tab switching).
js/rtl-toggle.js: LTR/RTL logic and direction animations.
Constraint: No inline JS (onclick="..."). Use addEventListener.
Assets: Use SVG icons (Heroicons/Phosphor) and high-quality placeholder images (Unsplash/Pexels).
3. Design System & UI Theme
Primary Color: Indigo-Violet (#6366f1 to #8b5cf6) - Represents innovation.
Accent Color: Electric Teal (#14b8a6) - Used for CTAs and success states.
Typography:
Headings: 'Plus Jakarta Sans' or 'Inter' (Bold, Tight tracking).
Body: 'Inter' (Clean, readable).
Visual Style:
Glassmorphism: Translucent cards in dashboards (bg-white/10 backdrop-blur-lg).
Gradients: Subtle mesh gradients in backgrounds.
Borders: Thin, high-contrast borders (border-slate-200).
4. File Structure
code
Text
/root
  ├── index.html           (Home V1: Light Mode, Enterprise Focus)
  ├── index-v2.html        (Home V2: Dark Mode, Developer Focus)
  ├── about.html           (Company Story & Values)
  ├── contact.html         (Support & Sales)
  ├── pricing.html         (Interactive Monthly/Yearly Toggle)
  ├── blog.html            (Grid Layout with Categories)
  ├── portfolio.html       (Case Studies / Integrations Gallery)
  ├── login.html           (Modern Auth)
  ├── register.html        (Signup flow)
  ├── admin-dashboard.html (Analytics, User Management)
  ├── user-dashboard.html  (Subscription, API Keys)
  ├── 404.html             (Error Page)
  ├── coming-soon.html     (Launch Timer)
  ├── assets/              (Images, Icons)
  ├── css/
  │   └── style.css        (Tailwind components & animations)
  └── js/
      ├── main.js          (General UI Logic)
      └── rtl-toggle.js    (RTL/LTR Engine)
5. Global Components & RTL Logic
Navigation Bar (Responsive & Directional)
Desktop:
LTR Order: [Brand: OrbitScale] --- [Product] [Solutions] [Pricing] [Blog] --- [Login] [Get Started Btn] [RTL Icon]
RTL Order: [RTL Icon] [Get Started Btn] [Login] --- [Blog] [Pricing] [Solutions] [Product] --- [Brand: OrbitScale]
Behavior: Sticky on scroll with a blur effect (backdrop-blur-md).
Mobile:
Hamburger menu (3 lines).
LTR: Logo Left, Menu Right. Drawer slides from Right.
RTL: Logo Right, Menu Left. Drawer slides from Left.
Footer
Layout: 5 Columns (Branding + 4 Link lists).
Bottom Bar: Copyright, Social Icons, Privacy, Terms.
The "Transmission" (RTL Animation)
Effect: "Tech Glitch" or "Slide Overlay."
Logic in rtl-toggle.js:
User clicks Globe icon.
An overlay div (Brand Color) slides quickly across the screen.
While screen is covered, dir="rtl" is applied to <html> and DOM elements are re-ordered via CSS/Flexbox.
Overlay slides away revealing the flipped layout.
6. Page-by-Page Requirements
1. index.html (Home V1 - Enterprise / Light Theme)
Hero: Clean white background. Text on Left, Large Dashboard Mockup Image on Right (tilted 3D effect).
Headline: "Scale your workflow, not your workload."
Social Proof: "Trusted by" section with grayscale logos of tech giants.
Features: Zig-zag layout (Text Left/Image Right, then swapped).
CTA: Large banner at bottom: "Ready to launch? Start free trial."
2. index-v2.html (Home V2 - Developer / Dark Theme)
Theme: Dark Background (bg-slate-900) with glowing gradients.
Hero: Centered text. Background features animated code snippets or floating geometric shapes.
Headline: "The API for modern teams."
Grid: Bento-box style feature grid (uneven cards).
Interactive Terminal: A mock code window showing how easy it is to install the tool.
3. pricing.html
Toggle: Center switch: "Monthly" vs "Yearly (Save 20%)".
Cards: 3 Columns (Starter, Growth, Enterprise).
Growth Card: Slightly larger, border highlighted in primary color, "Most Popular" badge.
Feature Comparison: A detailed table below the cards with checkmarks.
4. about.html
Stats: "10M+ Requests processed", "99.99% Uptime".
Culture: Grid of team photos (circle crop) with "hover" effect showing their favorite emoji.
Office: Map integration showing global HQs.
5. blog.html
Hero: "Latest insights from the team."
Featured Post: Large card at top.
Grid: 3-column grid for standard posts. Filter tags at top (Engineering, Marketing, Product).
6. portfolio.html (Case Studies)
Context: Showcasing success stories of clients using the SaaS.
Layout: Masonry grid of company logos/screenshots.
Hover: Hovering over a card reveals stats (e.g., "ROI +200%").
7. login.html & register.html
Design: Centered Card on a mesh gradient background.
Inputs: Floating labels styling.
Social: "Continue with GitHub", "Continue with Google".
8. user-dashboard.html
Sidebar: App-like vertical nav (Icons + Text).
Top Bar: Search, Notifications, Avatar.
Main Area:
Usage Chart: Line chart (CSS/SVG only) showing API calls.
Plan Limit: Progress bar "80% of 10k requests used".
API Keys: Blurred out keys with a "Copy" and "Reveal" button.
9. admin-dashboard.html
Theme: Slightly denser data density.
Widgets:
MRR (Monthly Recurring Revenue): Big number + Trend line.
User Table: Name, Email, Status (Active/Churned), Plan, Actions.
System Health: Server status indicators (Green dots).
10. 404.html & coming-soon.html
404: Illustration of a spaceship lost in void. "Houston, we have a problem."
Coming Soon: "We are shipping V2.0." Email capture form.
7. JavaScript Logic Specifications (js/main.js)
Pricing Switcher:
Listen for toggle change.
Update price text content (e.g., Change "
19
"
t
o
"
19"to"
190").
Add a subtle "pop" animation to the price text when changed.
Mobile Menu:
Toggle transform classes on the sidebar div.
Handle aria-expanded attributes for accessibility.
User Dashboard Tabs:
Switch visible content area without page reload.
8. Copilot Prompt Instructions
Phase 1: scaffolding & Core
"Create the file structure for 'OrbitScale SaaS'. Set up style.css with Tailwind directives. Create js/main.js and js/rtl-toggle.js.
Create a Responsive Navbar that meets these strict criteria:
Desktop: Logo on one side, Links center, Buttons right.
Mobile: Hamburger menu.
RTL Logic: In rtl-toggle.js, write a function that toggles dir='rtl' on the HTML tag and uses a CSS transition (slide overlay) to mask the change. Ensure the Navbar physically rearranges items (Logo/Menu swap sides) using Tailwind's order- or flex-row-reverse classes when in RTL mode."
Phase 2: Landing Pages
"Create index.html (Light Theme). Hero section with text left/image right. 'Trusted By' logo strip. Zig-zag feature section.
Create index-v2.html (Dark Theme). Use bg-slate-900 and text gradients. Center-aligned Hero with floating abstract shapes. Bento-grid for features."
Phase 3: Commercial Pages
"Create pricing.html. Include a JS-powered Monthly/Yearly toggle. Three cards: Starter, Growth (Highlighted), Enterprise.
Create about.html with a stats row and team grid.
Create contact.html with a support form and office map location."
Phase 4: Content Pages
"Create blog.html. A featured post header followed by a 3-column article grid.
Create portfolio.html (Case Studies). Use a masonry layout to show client success stories with hover effects displaying ROI stats."
Phase 5: App Pages (Dashboards)
"Create login.html and register.html. Use a centered card layout with glassmorphism effects on a gradient background.
Create user-dashboard.html. Sidebar layout. Content: API Usage Line Chart (SVG), Plan Usage Progress Bar, and API Key management.
Create admin-dashboard.html. Sidebar layout. Content: MRR Stats, Recent Signups Table, and System Status widgets."
Phase 6: Utilities
"Create 404.html (Space theme).
Create coming-soon.html (Launch timer).
Ensure main.js contains the logic for the mobile menu drawer and the pricing toggle calculations."