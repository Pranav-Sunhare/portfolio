document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Close menu when clicking any nav item on mobile
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // 2. Navbar elevation shadow on scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 3. One-click copy email feature
  const copyEmailBtn = document.getElementById('copy-email-btn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = 'pranavsunhare30@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        const copyHint = copyEmailBtn.querySelector('.copy-hint');
        const originalText = copyHint.textContent;
        copyHint.textContent = '(Copied!)';
        copyHint.style.color = '#34d399';

        setTimeout(() => {
          copyHint.textContent = originalText;
          copyHint.style.color = '';
        }, 2000);
      }).catch(() => {
        // Fallback: trigger standard mail client if clipboard fails
        window.location.href = `mailto:${email}`;
      });
    });
  }
});