(() => {
  const refs = {
    openArrowUp: document.querySelector('[data-arrow-open]'),
    openArrowClose: document.querySelector('[data-arrowClose-open]'),
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    // openBurgerBtn: document.querySelector('[data-burger-open]'),

    menu: document.querySelector('[data-menu]'),
    arrow: document.querySelector('[data-arrow]'),
    arrowClose: document.querySelector('[data-arrowClose]'),
    // burger: document.querySelector('[data-burger]'),
  };

  refs.openArrowUp.addEventListener('click', toggleArrow);
  refs.openArrowUp.addEventListener('click', toggleArrowClose);
  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);
  refs.closMenuOpenModal.addEventListener('click', toggleModal);
  // refs.openBurgerBtn.addEventListener('click', toggleBurger);

  function toggleModal() {
    refs.menu.classList.toggle('is-burger');
  }

  // function toggleBurger() {
  //   refs.burger.classList.toggle('is-open');
  // }


  function toggleArrow() {
    refs.arrow.classList.toggle('is-hidden');
  }

  function toggleArrowClose() {
    refs.arrowClose.classList.toggle('is-close');
  }
})();
