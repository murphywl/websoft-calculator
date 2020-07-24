// Calculator
const buttons = document.querySelectorAll('.calculator-buttons__button');
const input = document.querySelector('#calsInput');
const clearbtn = document.querySelector('.clear-input');

// input.addEventListener('input', function (e) {
//   e.preventDefault();
//   changeInput(input.value);
// });
buttons.forEach(function (button) {
  button.addEventListener('click', function (event) {
    event.preventDefault();
    const target = event.target;
    const purposes = target.getAttribute('data-purposes');
    switch (purposes) {
      case 'number':
        changeInput(input.value + target.getAttribute('data-value'));
        break;
      case 'sign':
        changeInput(input.value + target.getAttribute('data-value'));
        break;
      case 'clear':
        changeInput('')
        break;
      case 'equally':
        changeInput(eval(input.value))
        break;
    }
  })
})
clearbtn.addEventListener('click', function (e) {
  e.preventDefault();
  changeInput(input.value.split('').slice(0, -1).join(''));
})

function changeInput(newValue) {
  input.value = newValue;
  if (input.value.length > 0) {
    clearbtn.classList.add('active');
  } else {
    clearbtn.classList.remove('active');
  }
}
