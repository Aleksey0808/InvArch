(() => {
  const refs = {
    openArrowUp: document.querySelector('[data-arrow-open]'),
    openArrowClose: document.querySelector('[data-arrowClose-open]'),
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),

    menu: document.querySelector('[data-menu]'),
    arrow: document.querySelector('[data-arrow]'),
    arrowClose: document.querySelector('[data-arrowClose]'),
  };

  refs.openArrowUp.addEventListener('click', toggleArrow);
  refs.openArrowUp.addEventListener('click', toggleArrowClose);
  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);
  refs.closMenuOpenModal.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle('is-open');
  }

  function toggleArrow() {
    refs.arrow.classList.toggle('is-hidden');
  }

  function toggleArrowClose() {
    refs.arrowClose.classList.toggle('is-close');
  }
})();
