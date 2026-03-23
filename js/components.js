/* ============================================
   CANOPY CONSULTING — COMPONENTS
   Injects shared nav + footer into every page
   ============================================ */

const NAV_HTML = `
<nav class="nav" id="nav">
  <a href="/canopy-consulting/index.html" class="nav-logo">
    <img src="/canopy-consulting/Logo/logo.png" alt="Canopy Consulting" class="nav-logo-img"/>
  </a>
  <ul class="nav-links">
    <li><a href="/canopy-consulting/pages/about.html">About</a></li>
    <li><a href="/canopy-consulting/pages/journey.html">The Journey</a></li>
    <li><a href="/canopy-consulting/pages/services.html">Services</a></li>
    <li><a href="/canopy-consulting/pages/case-study.html">Case Study</a></li>
    <li><a href="/canopy-consulting/pages/contact.html" class="nav-cta">Book a Call</a></li>
  </ul>
</nav>`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="footer-grid">
    <div class="footer-brand">
      <img src="/canopy-consulting/Logo/logo.png" alt="Canopy Consulting" class="footer-logo-img" style="margin-bottom:16px;"/>
      <p>We help small and mid-sized businesses build the foundations, systems, and strategies they need to grow with confidence. Deep roots. Wide reach. Unstoppable growth.</p>
    </div>
    <div class="footer-col">
      <h5>Navigate</h5>
      <ul>
        <li><a href="/canopy-consulting/index.html">Home</a></li>
        <li><a href="/canopy-consulting/pages/about.html">About</a></li>
        <li><a href="/canopy-consulting/pages/journey.html">The Journey</a></li>
        <li><a href="/canopy-consulting/pages/services.html">Services</a></li>
        <li><a href="/canopy-consulting/pages/case-study.html">Case Study</a></li>
        <li><a href="/canopy-consulting/pages/contact.html">Contact</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>Services</h5>
      <ul>
        <li><a href="/canopy-consulting/pages/services.html">Business Audit</a></li>
        <li><a href="/canopy-consulting/pages/services.html">Launch & Foundation</a></li>
        <li><a href="/canopy-consulting/pages/services.html">Brand & Presence</a></li>
        <li><a href="/canopy-consulting/pages/services.html">Systems Setup</a></li>
        <li><a href="/canopy-consulting/pages/services.html">Growth & Scale</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>Contact</h5>
      <ul>
        <li><a href="mailto:hello@canopyconsulting.bz">hello@canopyconsulting.bz</a></li>
        <li><a href="/canopy-consulting/pages/contact.html">Book a Discovery Call</a></li>
        <li><a href="#">LinkedIn</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2025 Canopy Consulting. All rights reserved. Belize.</p>
    <span class="footer-motto">Sub Umbra Floreo — Under the shade, we flourish.</span>
  </div>
</footer>`;

// Inject on load
document.addEventListener('DOMContentLoaded', () => {
  const navSlot = document.getElementById('nav-slot');
  const footerSlot = document.getElementById('footer-slot');
  if (navSlot) navSlot.outerHTML = NAV_HTML;
  if (footerSlot) footerSlot.outerHTML = FOOTER_HTML;
});
