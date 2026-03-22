/* ============================================
   CANOPY CONSULTING — COMPONENTS
   Injects shared nav + footer into every page
   ============================================ */

const NAV_HTML = `
<nav class="nav" id="nav">
  <a href="/canopy-consulting/index.html" class="nav-logo">
    <svg viewBox="0 0 80 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40 4 L74 14 L74 58 Q74 80 40 90 Q6 80 6 58 L6 14 Z" fill="none" stroke="#1A4D3A" stroke-width="4" stroke-linejoin="round"/>
      <path d="M18 14 L18 24 L40 24 L62 24 L62 14" fill="none" stroke="#1A4D3A" stroke-width="4" stroke-linejoin="round"/>
      <rect x="37" y="60" width="6" height="22" rx="2" fill="#2C3E35"/>
      <path d="M40 76 Q30 78 22 83" stroke="#2C3E35" stroke-width="2.5" stroke-linecap="round" fill="none"/>
      <path d="M40 76 Q50 78 58 83" stroke="#2C3E35" stroke-width="2.5" stroke-linecap="round" fill="none"/>
      <path d="M40 78 L40 85" stroke="#2C3E35" stroke-width="2.5" stroke-linecap="round" fill="none"/>
      <ellipse cx="27" cy="49" rx="10" ry="6" fill="#B8860B" transform="rotate(-28 27 49)"/>
      <ellipse cx="53" cy="49" rx="10" ry="6" fill="#B8860B" transform="rotate(28 53 49)"/>
      <ellipse cx="40" cy="35" rx="26" ry="20" fill="#1A4D3A"/>
      <ellipse cx="30" cy="30" rx="16" ry="13" fill="#2E7D52"/>
      <ellipse cx="50" cy="30" rx="16" ry="13" fill="#2E7D52"/>
      <ellipse cx="40" cy="24" rx="14" ry="14" fill="#2E7D52"/>
      <ellipse cx="34" cy="22" rx="8" ry="7" fill="#3D7A5A"/>
      <ellipse cx="46" cy="22" rx="8" ry="7" fill="#3D7A5A"/>
    </svg>
    <div class="nav-logo-text">
      <span class="name">Canopy Consulting</span>
      <span class="region">Belize</span>
    </div>
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
      <div class="fn">Canopy Consulting</div>
      <div class="ft">Belize</div>
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
