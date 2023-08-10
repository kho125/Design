let buttonA = document.querySelector('#buttonA');
let buttonB = document.querySelector('#buttonB');

let changeColour = function (e) {

    if (e.target === buttonA) {
        buttonA.style.backgroundColor = 'black';
        buttonB.style.backgroundColor = 'gray';
    }

    if (e.target === buttonB) {
        buttonB.style.backgroundColor = 'black';
        buttonA.style.backgroundColor = 'gray';
    }

};

buttonA.addEventListener('click', changeColour, false);
buttonB.addEventListener('click', changeColour, false);