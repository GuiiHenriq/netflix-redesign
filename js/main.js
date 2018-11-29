function initMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menu = document.querySelector('#menu');
  const iconsMenu = document.querySelector('#icons-menu');
  const eventos = ['click', 'touchstart'];

  if(menuButton) {
    function openMenu() {
      menuButton.classList.toggle('active');
      menu.classList.toggle('active');
      iconsMenu.classList.toggle('active');
    }

    eventos.forEach((userEvent) => {
      menuButton.addEventListener(userEvent, openMenu);
    });
  }
}
initMobile();
