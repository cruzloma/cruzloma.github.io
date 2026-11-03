(() => {
  const button = document.querySelector('.theme-toggle');
  if (!button) return;
  const preference = window.matchMedia('(prefers-color-scheme: dark)');
  let explicitChoice = false;
  try { explicitChoice = ['light', 'dark'].includes(localStorage.getItem('cruz-loma-tema')); } catch {}
  function updateButton() {
    const dark = document.documentElement.dataset.theme === 'dark';
    button.setAttribute('aria-label', dark ? 'Activar modo claro' : 'Activar modo oscuro');
    button.setAttribute('aria-pressed', String(dark));
    button.querySelector('.theme-symbol').textContent = dark ? '☀' : '☾';
  }
  button.hidden = false;
  updateButton();
  button.addEventListener('click', () => {
    const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme;
    explicitChoice = true;
    try { localStorage.setItem('cruz-loma-tema', theme); } catch {}
    updateButton();
  });
  preference.addEventListener('change', event => {
    if (!explicitChoice) {
      document.documentElement.dataset.theme = event.matches ? 'dark' : 'light';
      updateButton();
    }
  });
})();

