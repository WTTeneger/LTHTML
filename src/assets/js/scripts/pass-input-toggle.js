export default (() => {
  const inputs = document.querySelectorAll('[data-input-pass]');
  const btns = document.querySelectorAll('[data-btn-pass]');

  btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      const id = e.target.dataset.btnPass;

      inputs.forEach((input) => {
        if (input.dataset.inputPass === id) {
          if (input.type === 'password') {
            input.type = 'text';
          } else if (input.type === 'text') {
            input.type = 'password';
          }
        }
      });

      btns.forEach((button) => {
        if (button.dataset.btnPass === id) {
          button.classList.toggle('active');
        }
      });
    });
  });
})();
