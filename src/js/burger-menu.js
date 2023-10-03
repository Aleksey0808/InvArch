(() => {
    const refs = {
      openBurger: document.querySelector('[data-burger-open]'),
      closeBurger: document.querySelector('[data-burger-close]'),
  
      burger: document.querySelector('[data-burger]'),
    };
  
    refs.openBurger.addEventListener('click', toggleBurger);
    refs.closeBurger.addEventListener('click', toggleBurger);
  
    function toggleBurger() {
      refs.burger.classList.toggle('is-burger');
    }
  
  })();
  