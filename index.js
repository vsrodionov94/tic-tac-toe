const battleField = document.querySelector('.battle-field');
const battleFieldItems =  battleField.querySelectorAll('.battle-field__item');
const clearBtn = document.querySelector('.clear-btn');
const popup = document.querySelector('.popup');
const popupText = popup.querySelector('.popup__text');
const popupCloseBtn = popup.querySelector('.popup__close-btn');
const counter = document.querySelector('.counter');
const counterX = counter.querySelector('.counter__x-score');
const counterZero = counter.querySelector('.counter__zero-score');

let step = 0;
let zero = 0;
let x = 0;

function popupOpen(winner) {

  if (winner == 'x') {
    popupText.textContent = 'Cross - win!';
    x++;
    counterX.textContent = x;
  } else if (winner == '0') {
    popupText.textContent = 'Null - win!'
    zero++;
    counterZero.textContent = zero;
  } else {
    popupText.textContent = 'Nobody - win!'
  }
  popup.classList.add('popup_opened');
  popupCloseBtn.addEventListener('click', popupClose);
  clearBtn.disabled = true;
}

function popupClose(){
  popup.classList.remove('popup_opened');
  clearField();
  popupCloseBtn.removeEventListener('click', popupClose);
  clearBtn.disabled = false;
}

function hasClearField() {
  let i = 0;
  Array.from(battleFieldItems).forEach(item => {
    if (item.textContent == '') {
      i++
    }
  });
  if (i == 0) {
    return true
  } else {
    return false
  }
}

function hasWin(el) {
  if ((battleFieldItems[0].textContent== el
  && battleFieldItems[1].textContent== el
  && battleFieldItems[2].textContent== el)
  || (battleFieldItems[3].textContent== el
  && battleFieldItems[4].textContent== el
  && battleFieldItems[5].textContent== el)
  || (battleFieldItems[6].textContent== el
  && battleFieldItems[7].textContent== el
  && battleFieldItems[8].textContent== el)
  || (battleFieldItems[0].textContent== el
  && battleFieldItems[3].textContent == el
  && battleFieldItems[6].textContent == el)
  || (battleFieldItems[1].textContent== el
  && battleFieldItems[4].textContent == el
  && battleFieldItems[7].textContent == el)
  || (battleFieldItems[2].textContent== el
  && battleFieldItems[5].textContent == el
  && battleFieldItems[8].textContent == el)
  || (battleFieldItems[0].textContent== el
  && battleFieldItems[4].textContent == el
  && battleFieldItems[8].textContent == el)
  || (battleFieldItems[2].textContent == el
  && battleFieldItems[4].textContent == el
  && battleFieldItems[6].textContent == el)) popupOpen(el);
}


function checkWinner(){
  // проверяем пустые поля и объявляем ничью
  if (hasClearField()) popupOpen();
  hasWin('x');
  hasWin('0');
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



