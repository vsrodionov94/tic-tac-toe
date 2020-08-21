const battleField = document.querySelector('.battle-field');
const battleFieldItems =  battleField.querySelectorAll('.battle-field__item');
const clearBtn = document.querySelector('.clear-btn');
const popup = document.querySelector('.popup');
const popupText = popup.querySelector('.popup__text');
const popupCloseBtn = popup.querySelector('.popup__close-btn');

let step = 0;

function popupOpen(winner) {
  if (winner == 'x') {
    popupText.textContent = 'Cross - win!'
  } else if (winner == '0') {
    popupText.textContent = 'Null - win!'
  } else {
    popupText.textContent = 'Nobody - win!'
  }
  popup.classList.add('popup_opened');
  popupCloseBtn.addEventListener('click', popupClose);
}

function popupClose(){
  popup.classList.remove('popup_opened');
  clearField();
  popupCloseBtn.removeEventListener('click', popupClose);
}

function hasClearField() {
  let i = 0;
  Array.from(battleFieldItems).forEach(item => {
    if (item.textContent == '') {
      i++
    }
  })
  if (i == 0) {
    return true
  } else {
    return false
  }
}

function checkWinner(){
  // проверяем пустые поля и объявляем ничью
  if (hasClearField()) popupOpen();
  // проверяем победу крестиков
  if (battleFieldItems[0].textContent=='x' && battleFieldItems[1].textContent=='x' && battleFieldItems[2].textContent=='x') popupOpen('x');
	if (battleFieldItems[3].textContent=='x' && battleFieldItems[4].textContent=='x' && battleFieldItems[5].textContent=='x') popupOpen('x');
	if (battleFieldItems[6].textContent=='x' && battleFieldItems[7].textContent=='x' && battleFieldItems[8].textContent=='x') popupOpen('x');
	if (battleFieldItems[0].textContent=='x' && battleFieldItems[3].textContent=='x' && battleFieldItems[6].textContent=='x') popupOpen('x');
	if (battleFieldItems[1].textContent=='x' && battleFieldItems[4].textContent=='x' && battleFieldItems[7].textContent=='x') popupOpen('x');
	if (battleFieldItems[2].textContent=='x' && battleFieldItems[5].textContent=='x' && battleFieldItems[8].textContent=='x') popupOpen('x');
	if (battleFieldItems[0].textContent=='x' && battleFieldItems[4].textContent=='x' && battleFieldItems[8].textContent=='x') popupOpen('x');
	if (battleFieldItems[2].textContent=='x' && battleFieldItems[4].textContent=='x' && battleFieldItems[6].textContent=='x') popupOpen('x');
  // проверяем победу ноликов
	if (battleFieldItems[0].textContent=='0' && battleFieldItems[1].textContent=='0' && battleFieldItems[2].textContent=='0') popupOpen('0');
	if (battleFieldItems[3].textContent=='0' && battleFieldItems[4].textContent=='0' && battleFieldItems[5].textContent=='0') popupOpen('0');
	if (battleFieldItems[6].textContent=='0' && battleFieldItems[7].textContent=='0' && battleFieldItems[8].textContent=='0') popupOpen('0');
	if (battleFieldItems[0].textContent=='0' && battleFieldItems[3].textContent=='0' && battleFieldItems[6].textContent=='0') popupOpen('0');
	if (battleFieldItems[1].textContent=='0' && battleFieldItems[4].textContent=='0' && battleFieldItems[7].textContent=='0') popupOpen('0');
	if (battleFieldItems[2].textContent=='0' && battleFieldItems[5].textContent=='0' && battleFieldItems[8].textContent=='0') popupOpen('0');
	if (battleFieldItems[0].textContent=='0' && battleFieldItems[4].textContent=='0' && battleFieldItems[8].textContent=='0') popupOpen('0');
	if (battleFieldItems[2].textContent=='0' && battleFieldItems[4].textContent=='0' && battleFieldItems[6].textContent=='0') popupOpen('0');
}

function clearField() {
  battleFieldItems.forEach((item) => {
    item.textContent = ''
    step = 0;
  })
}

clearBtn.addEventListener('click', clearField);

battleField.addEventListener('click', event => {
  if (event.target.textContent == '' && !popup.classList.contains('popup_opened')) {
    if (event.target.className == 'battle-field__item'){
      if (step % 2 == 0) {
        event.target.textContent = 'x';
      } else {
        event.target.textContent = '0';
      }
      step++;
    }
    checkWinner();
  }
});



