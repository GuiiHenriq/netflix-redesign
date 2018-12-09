export default function initModalDev() {
  const btnOpen = document.querySelector('[data-modal="open-dev"]');
  const btnClose = document.querySelector('[data-modal="close-dev"]');
  const modal = document.querySelector('[data-modal="dev-container"]');

  function openModal(event) {
    event.preventDefault();
    modal.classList.add('active');
  }

  function closeModal(event) {
    event.preventDefault();
    modal.classList.remove('active');
  }

  function clickTargetModal() {
    if (event.target === this) {
      closeModal(event);
    }
  }

  btnOpen.addEventListener('click', openModal);
  btnClose.addEventListener('click', closeModal);
  modal.addEventListener('click', clickTargetModal);
}