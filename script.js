// JavaScript (семинары)
// Урок 3. Знакомство с функциями в JavaScript
// 1
// Создайте функцию, которая возводит переданное число в куб. Необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

alert('Задача №1');
//let num = Number(prompt('Введите число 1'));
function numCube(num) {
    return num ** 3;
}
alert(numCube(Number(prompt('Input num1'))) + numCube(Number(prompt('Input num2'))));
console.log(numCube(Number(prompt('Input num1'))) + numCube(Number(prompt('Input num2'))));

// 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести, что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

alert('Задача №2')
function calcMoney(num) {
    if (typeof num === 'number') {
        console.log(num * 0.87);
    } else {
        console.log('Значение задно неверно');
    }
}
calcMoney(prompt('Введите число'));

// 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел


alert('Задача №3');
function findMax(a, b, c,) {
    max = a;
    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    return max;
}
alert(findMax(Number(prompt('Number 1')), Number(prompt('Number 2')), Number(prompt('Number 3'))));
console.log(findMax(Number(prompt('Number 1')), Number(prompt('Number 2')), Number(prompt('Number 3'))));

// 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два
// числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение
// console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
// сложения в данном примере, ваши названия функций могут отличаться).
// Округлять значения, которые возвращают функции не нужно, однако, обратите
// внимание на разность, функция должна вычесть из большего числа меньшее, либо
// вернуть 0, если числа равны.
// Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.
alert('Задача №4');
let a = Number(prompt('Input Number 1'));
let b = Number(prompt('Input Number 2'));
function sum(num1, num2) {
    return num1 + num2;
};
function dif(num1, num2) {
    let d
    if (num1 >= num2) {
        d = num1 - num2;
    } else {
        d = num2 - num1;
    }
    return d;
}
function multip(num1, num2) {
    return num1 * num2
}
function div(num1, num2) {
    let d;
    if (num1 === 0) {
        d = 0;
    } if (num2 ===0) {
        alert('На ноль не делят');
    }
    else {
        d = num1/num2;
    }
    return d;
}
console.log(sum(a, b));
console.log(dif(a, b));
console.log(multip(a, b));
console.log(div(a, b));