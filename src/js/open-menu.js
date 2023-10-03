(() => {
  const refs = {
    openArrowUp: document.querySelector('[data-arrow-open]'),
    openBurger: document.querySelector('[data-burger-open]'),
    openArrowClose: document.querySelector('[data-arrowClose-open]'),
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeBurger: document.querySelector('[data-burger-close]'),

    menu: document.querySelector('[data-menu]'),
    arrow: document.querySelector('[data-arrow]'),
    arrowClose: document.querySelector('[data-arrowClose]'),
    // burger: document.querySelector('[data-burger]'),
  };

  refs.openArrowUp.addEventListener('click', toggleArrow);
  // refs.openBurger.addEventListener('click', toggleBurger);
  refs.openArrowUp.addEventListener('click', toggleArrowClose);
  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeBurger.addEventListener('click', toggleBurger);

  // function toggleBurger() {
  //   refs.burger.classList.toggle('is-burger');
  // }

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
