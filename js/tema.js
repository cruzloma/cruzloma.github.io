// Aplicar el tema antes de dibujar el contenido.
(() => {
  let theme;
  try { theme = localStorage.getItem('cruz-loma-tema'); } catch { /* Almacenamiento deshabilitado. */ }
  if (theme !== 'light' && theme !== 'dark') {
    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  document.documentElement.dataset.theme = theme;
})();

