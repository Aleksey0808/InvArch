(() => {
  const refs = {
    openArrowUp: document.querySelector('[data-arrow-open]'),
    openArrowClose: document.querySelector('[data-arrowClose-open]'),
    openMenuBtn: document.querySelector('[data-menu-open]'),

    menu: document.querySelector('[data-menu]'),
    arrow: document.querySelector('[data-arrow]'),
    arrowClose: document.querySelector('[data-arrowClose]'),
  };

  refs.openArrowUp.addEventListener('click', toggleArrow);
  refs.openArrowUp.addEventListener('click', toggleArrowClose);
  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeBurger.addEventListener('click', toggleBurger);

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
