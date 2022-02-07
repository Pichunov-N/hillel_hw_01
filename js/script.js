"use strict";


// 1
// let userName = prompt("Как тебя зовут?");
// let userSurName = prompt("Какая у тебя фамилия?");
// let userAge = prompt("Сколько тебе лет?");

// alert(`${userName} ${userSurName}, ${userAge}`);



// 2
// let firstNumber = prompt("Введите первое число");
// let secondNumber = prompt("Введите второе число");
// let sum = +firstNumber + +secondNumber;
// alert(`${firstNumber} + ${secondNumber} = ${sum}`);

// let firstNumber = prompt("Введите первое число");
// let secondNumber = prompt("Введите второе число");
// let sum = firstNumber - secondNumber;
// alert(`${firstNumber} - ${secondNumber} = ${sum}`);

// let firstNumber = prompt("Введите первое число");
// let secondNumber = prompt("Введите второе число");
// let sum = firstNumber / secondNumber;
// alert(`${firstNumber} / ${secondNumber} = ${sum}`);

// let firstNumber = prompt("Введите первое число");
// let secondNumber = prompt("Введите второе число");
// let sum = firstNumber ** secondNumber;
// alert(`${firstNumber} ** ${secondNumber} = ${sum}`);

// let firstNumber = prompt("Введите первое число");
// let secondNumber = prompt("Введите второе число");
// let sum = firstNumber * secondNumber;
// alert(`${firstNumber} * ${secondNumber} = ${sum}`);



//3
// let yourAge = prompt("Сколько вам лет?");
// if (yourAge < 18) {
//     alert("Данная страница доступна только для взрослых.");
// }



// 4
// let enterNumber = Number(prompt("Введите число:"));
// if (enterNumber % 2 == 0 ) {
//     alert("Чётное число.");
// } else if (enterNumber % 2 > 0) {
//     alert("Нечётное число.");
// } else {
//     alert("Вы не ввели число.");
// }

// let enterNumber = +prompt("Введите число:");
// if (!isNaN(enterNumber)) {
//     if (true){
//         confirm("Это число. Едем дальше?");
//     } if (enterNumber % 2 === 0 ) {
//         alert("Чётное число.");
//     } else {
//         alert("Нечётное число.")
//     }
// } else {
//     alert("Вы не ввели число.");
// }



//5
// const randomNumber = Math.random();
// let enteredNumber = Number(prompt("Введите любое число:"));
// let numbersDifference = Boolean(enteredNumber > randomNumber);
// alert(`${enteredNumber} > ${randomNumber} = ${numbersDifference}`)



//6
// let enteredNumber = +prompt("Введите символ:");
// if (!isNaN(enteredNumber)) {
//     alert("Введённый символ является числом.")
// } else {
//     alert("Введённый символ НЕ является числом.")
// }



//7
// let date = new Date(2022, 0, 22);
// alert(date);
// let month = date.getMonth();
// if (month === 11 || month === 0 || month === 1) {
//     alert("Зима");
// } else if (month === 2 || month === 3 || month === 4) {
//     alert("Весна");
// } else if (month === 5 || month === 6 || month === 7) {
//     alert("Лето");
// } else if (month === 8 || month === 9 || month === 10) {
//     alert("Осень");
// }

// let date = new Date(2022, 0, 21);
// alert(date);
// let month = date.getMonth();
// switch (month) {
//     case 0:
//     case 1:
//     case 11:
//         alert("Зима");
//         break;
//     case 2:
//     case 3:
//     case 4:
//         alert("Весна");
//         break;
//     case 5:
//     case 6:
//     case 7:
//         alert("Лето");
//         break;
//     case 8:
//     case 9:
//     case 10:
//         alert("Осень");
//         break;
//     default:
//         alert("Invalid data");
// }



//8
// let enteredNumber = +prompt("Введите число:");
// let userPoint = "балла";
// let userPointTwo = "баллов";
// let userPointThree = "балл";
// if (enteredNumber > 100 || 0 >= enteredNumber) {
//     alert("Вы не попали в необходимый диапазон.");
// } else if (enteredNumber === 12 || enteredNumber === 13 || enteredNumber === 14) {
//     alert(`Ваша оценка: ${enteredNumber} ${userPointTwo}`);
// } else if (enteredNumber % 10 === 2 || enteredNumber % 10 === 3 || enteredNumber % 10 === 4) {
//     alert(`Ваша оценка: ${enteredNumber} ${userPoint}`);
// } else if (enteredNumber > 1 || 100 <= enteredNumber) {
//     alert(`Ваша оценка: ${enteredNumber} ${userPointTwo}`);
// } else if (enteredNumber = 1) {
//     alert(`Ваша оценка: ${enteredNumber} ${userPointThree}`);
// } 