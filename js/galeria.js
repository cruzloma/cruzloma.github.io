// Amplía las fotografías sin interferir con sus enlaces si JavaScript no está disponible.
(() => {
  const links = [...document.querySelectorAll('[data-gallery]')];
  if (!links.length || typeof HTMLDialogElement === 'undefined') return;
  const dialog = document.createElement('dialog');
  dialog.className = 'lightbox';
  dialog.setAttribute('aria-labelledby', 'lightbox-title');
  dialog.innerHTML = '<div class="lightbox-toolbar"><h2 class="lightbox-title" id="lightbox-title">Galería de fotografías</h2><button type="button" class="lightbox-close" aria-label="Cerrar galería">×</button></div><figure class="lightbox-figure"><img alt=""><figcaption></figcaption></figure><div class="lightbox-controls"><button type="button" class="lightbox-prev" aria-label="Fotografía anterior">←</button><span class="lightbox-count" aria-live="polite" aria-atomic="true"></span><button type="button" class="lightbox-next" aria-label="Fotografía siguiente">→</button></div>';
  document.body.append(dialog);
  const image = dialog.querySelector('img');
  const caption = dialog.querySelector('figcaption');
  const count = dialog.querySelector('.lightbox-count');
  const close = dialog.querySelector('.lightbox-close');
  const prev = dialog.querySelector('.lightbox-prev');
  const next = dialog.querySelector('.lightbox-next');
  let index = 0;
  let origin;
  function show(newIndex) {
    index = (newIndex + links.length) % links.length;
    const source = links[index].querySelector('img');
    image.src = links[index].href;
    image.alt = source.alt;
    caption.textContent = source.alt;
    count.textContent = (index + 1) + ' / ' + links.length;
    prev.hidden = next.hidden = links.length === 1;
  }
  links.forEach((link, i) => link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    origin = link;
    show(i);
    dialog.showModal();
    document.body.classList.add('gallery-open');
    close.focus();
  }));
  function restorePage() {
    document.body.classList.remove('gallery-open');
    image.removeAttribute('src');
    origin?.focus();
  }
  function closeGallery() {
    dialog.close();
    restorePage();
  }
  close.addEventListener('click', closeGallery);
  dialog.addEventListener('cancel', event => {
    event.preventDefault();
    closeGallery();
  });
  prev.addEventListener('click', () => show(index - 1));
  next.addEventListener('click', () => show(index + 1));
  dialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); show(index - 1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); show(index + 1); }
  });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeGallery();
  });
  dialog.addEventListener('close', restorePage);
})();

