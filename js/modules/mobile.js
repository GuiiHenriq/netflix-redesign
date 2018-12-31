export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menu = document.querySelector('.menu-mobile ul');

  function openMenu() {
    menu.classList.toggle('ativo');
  }

  menuButton.addEventListener('click', openMenu);
}
