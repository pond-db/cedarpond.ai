// CedarPond AI Feed — Theme Toggle & Interactions
(function() {
  const THEME_KEY = 'cedarpond-theme';

  function getPreferredTheme() {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    const btn = document.querySelector('.theme-toggle');
    if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  // Apply theme immediately
  setTheme(getPreferredTheme());

  document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle button
    const btn = document.querySelector('.theme-toggle');
    if (btn) {
      btn.addEventListener('click', function() {
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        setTheme(current === 'dark' ? 'light' : 'dark');
      });
    }

    // Listen for OS theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
      if (!localStorage.getItem(THEME_KEY)) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    });
  });
})();
