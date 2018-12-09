export default function initModalBottom() {
  const btnOpen = document.querySelector('[data-modal="open-bottom"]');
  const btnClose = document.querySelector('[data-modal="close"]');
  const modal = document.querySelector('[data-modal="container"]');
  const audio = document.querySelector('audio');

  function openModal(event) {
    event.preventDefault();
    modal.classList.add('active');
    audio.play();
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
