export default (() => {
  const { body } = document;
  const btnAsideToggle = document.querySelector('[data-btn-aside-toggle]');
  const aside = document.querySelector('[data-aside]');
  const overlay = document.querySelector('.overlay');

  let isOpen = false;

  const openAside = () => {
    isOpen = true;

    btnAsideToggle.setAttribute('aria-expanded', isOpen);

    btnAsideToggle.classList.add('is-active');
    aside.classList.add('active');

    body.style.overflow = 'hidden';
    overlay.style.display = 'block';
  };

  const closeAside = () => {
    isOpen = false;

    btnAsideToggle.setAttribute('aria-expanded', isOpen);

    btnAsideToggle.classList.remove('is-active');
    aside.classList.remove('active');

    body.style.overflow = 'auto';
    overlay.style.display = 'none';
  };

  const asideToggle = () => {
    isOpen ? closeAside() : openAside();
  };

  const isClickOutside = e => {
    const isOutside = !e.target.closest('[data-aside]');
    const isBtnAsideToggle = e.target.closest('[data-btn-aside-toggle]') === btnAsideToggle;

    if(isOutside && !isBtnAsideToggle) closeAside();
  };

  btnAsideToggle.addEventListener('click', asideToggle);
  body.addEventListener('click', isClickOutside);
})();
