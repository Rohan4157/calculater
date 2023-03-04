const display = document.querySelector('.display');
const clearBtn = document.querySelector('.clear');
const backspaceBtn = document.querySelector('.backspace');
const equalsBtn = document.querySelector('.equals');
const buttons = document.querySelectorAll('button');

let input = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      input = '';
      display.textContent = input;
    } else if (value === '&larr;') {
      input = input.slice(0, -1);
      display.textContent = input;
    } else if (
        value === '=') {
            input = eval(input);
            display.textContent = input;
          } else {
            input += value;
            display.textContent = input;
          }
        });
    });
    
    
    
    
    
    
              