const textAdd = document.querySelector('.text-add');
const btnAdd = document.querySelector('.infos-movie-top button:nth-child(6)');

function showTextAddList() {
  textAdd.classList.add('ativo');
}

btnAdd.addEventListener('click', showTextAddList);
