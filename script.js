let num1 = '';
let result = 0;
let array = [];
let r = ''; //flag to know if a result has been shown.

const screen = document.querySelector('.screen');
const screen2 = document.querySelector('.screen2');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');
const clear = document.querySelector('.clear');
const divide = document.querySelector('.divide');
const multi = document.querySelector('.multi');
const subst = document.querySelector('.subst');
const equal = document.querySelector('.equal');
const add = document.querySelector('.add');
const point = document.querySelector('.point');
const erase = document.querySelector('.erase');



function addition() {
    if ((num1 === '') && (r === '')) {
        return;
    } else if (r === 'r') {
        num1 = result;
        r = '';
        screen.textContent = result;
    }
    array.push(parseFloat(num1));
    array.push('+');
    screen.textContent += ' + ';
    num1 = '';
}

function multiplication() {
    if ((num1 === '') && (r === '')) {
        return;
    } else if (r === 'r') {
        num1 = result;
        r = '';
        screen.textContent = result;
    }
    array.push(parseFloat(num1));
    array.push('*');
    screen.textContent += ' * ';
    num1 = '';
}

function division() {
    if ((num1 === '') && (r === '')) {
        return;
    } else if (r === 'r') {
        num1 = result;
        r = '';
        screen.textContent = result;
    }
    array.push(parseFloat(num1));
    array.push('/');
    screen.textContent += ' / ';
    num1 = '';
}

function substraction() {
    if ((num1 === '') && (r === '')) {
        return;
    } else if (r === 'r') {
        num1 = result;
        r = '';
        screen.textContent = result;
    }
    array.push(parseFloat(num1));
    array.push('-');
    screen.textContent += ' - ';
    num1 = '';
}

function clearScreen() {
    num1 = '';
    screen.textContent = '';
    screen2.textContent = '0';
    array = [];
}

function operate() {
    console.log(num1);


    if ((array[0] === undefined)) { //Is the array empty?
        return;
    }

    if (num1 === '') {
        if ((array[array.length - 1] === '*') || (array[array.length - 1] === '/')) {
            num1 = '1';
            screen.textContent = screen.textContent.slice(0, screen.textContent.length - 2);
        } else {
            num1 = '0';
            screen.textContent = screen.textContent.slice(0, screen.textContent.length - 2);
        }
    }

    array.push(parseFloat(num1));
    console.log(array);
    result = array[0];

    for (let i = 0; i < array.length; i += 2) {
        switch (array[i + 1]) {
            case '+':
                result += array[i + 2];
                break;
            case '*':
                result *= array[i + 2];
                break;
            case '/':
                result /= array[i + 2];
                break;
            case '-':
                result -= array[i + 2];
                break;
        }
        console.log(result);
    }
    num1 = '';
    array = [];
    r = 'r';
    screen.textContent += ' = ';
    if(result === Infinity){
        screen2.textContent = 'Are you trying to open a black hole?!';
    } else {
        screen2.textContent = Number(result.toFixed(5));
    }
    
    return result;
}

function pointEnter() {
    if (r === 'r') {
        screen.textContent = '';
        r = '';
    }
    if (num1 === '') {
        num1 += '0.';
        screen.textContent += '0.';
    } else {
        num1 += '.';
        screen.textContent += '.';
    }
}

function zeroEnter() {
    if (r === 'r') {
        screen.textContent = '';
        r = '';
    }
    num1 += 0;
    screen.textContent += 0;
}

function oneEnter() {
    if (r === 'r') {
        screen.textContent = '';
        r = '';
    }
    num1 += 1;
    screen.textContent += 1;
}

function twoEnter() {
    if (r === 'r') {
        screen.textContent = '';
        r = '';
    }
    num1 += 2;
    screen.textContent += 2;
}

function threeEnter() {
    if (r === 'r') {
        screen.textContent = '';
        r = '';
    }
    num1 += 3;
    screen.textContent += 3;
}

function fourEnter() {
    if (r === 'r') {
        screen.textContent = '';
        r = '';
    }
    num1 += 4;
    screen.textContent += 4;
}

function fiveEnter() {
    if (r === 'r') {
        screen.textContent = '';
        r = '';
    }
    num1 += 5;
    screen.textContent += 5;
}

function sixEnter() {
    if (r === 'r') {
        screen.textContent = '';
        r = '';
    }
    num1 += 6;
    screen.textContent += 6;
}

function sevenEnter() {
    if (r === 'r') {
        screen.textContent = '';
        r = '';
    }
    num1 += 7;
    screen.textContent += 7;
}

function eightEnter() {
    if (r === 'r') {
        screen.textContent = '';
        r = '';
    }
    num1 += 8;
    screen.textContent += 8;
}

function nineEnter() {
    if (r === 'r') {
        screen.textContent = '';
        r = '';
    }
    num1 += 8;
    screen.textContent += 8;
}

function deleteNumber() {
    if (r === 'r') {
        return;
    }
    num1 = num1.slice(0, num1.length - 1);
    screen.textContent = screen.textContent.slice(0, screen.textContent.length - 1);
}



function pressKey(e) {

    console.log(e.keyCode);
    switch (e.keyCode) {
        case 107:
            addition();
            break;
        case 109:
            substraction();
            break;
        case 106:
            multiplication();
            break;
        case 111:
            division();
            break;
        case 13:
            operate();
            //console.log(e.target.nodeName); //Para ver cual es el target cuando le doy enter despues de haber usado un boton.
            //console.log(e.target.type);
            break;
        case 190:
        case 110:
            pointEnter();
            break;
        case 96:
        case 48:
            zeroEnter();
            break;
        case 97:
        case 49:
            oneEnter();
            break;
        case 98:
        case 50:
            twoEnter();
            break;
        case 99:
        case 51:
            threeEnter();
            break;
        case 100:
        case 52:
            fourEnter();
            break;
        case 101:
        case 53:
            fiveEnter();
            break;
        case 102:
        case 54:
            sixEnter();
            break;
        case 103:
        case 55:
            sevenEnter();
            break;
        case 104:
        case 56:
            eightEnter();
            break;
        case 105:
        case 57:
            nineEnter();
            break;
        case 46:
            clearScreen();
            break;
        case 8:
            deleteNumber();
            break;

    }
}



add.addEventListener('click', addition);
multi.addEventListener('click', multiplication);
divide.addEventListener('click', division);
subst.addEventListener('click', substraction);
clear.addEventListener('click', clearScreen);
equal.addEventListener('click', operate);
point.addEventListener('click', pointEnter);
one.addEventListener('click', oneEnter);
two.addEventListener('click', twoEnter);
three.addEventListener('click', threeEnter);
four.addEventListener('click', fourEnter);
five.addEventListener('click', fiveEnter);
six.addEventListener('click', sixEnter);
seven.addEventListener('click', sevenEnter);
eight.addEventListener('click', eightEnter);
nine.addEventListener('click', nineEnter);
zero.addEventListener('click', zeroEnter);
erase.addEventListener('click', deleteNumber);


document.addEventListener('keydown', pressKey);

window.addEventListener('keydown', function (e) { //Esto es para que cuando presione Enter despues de usar un boton, el boton no sea presionado.
    if (e.keyIdentifier == 'U+000A' || e.keyIdentifier == 'Enter' || e.keyCode == 13) {
        if (e.target.nodeName == 'BUTTON' && e.target.type == 'submit') {
            e.preventDefault(); return false;
        }
    }
}, true);








//