// console.log('Homework 2');
// //1
// // Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// // Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.
let num1 = Number(prompt('Введите первое число'));
if (num1 <= 1) {
    alert('Заданное условие выполнено');
} else {
    alert('Заданное условие не выполнено');
}

let num2 = Number(prompt('Введите второе число'));
if (num2 >= 3) {
    alert('Заданное условие выполнено');
} else {
    alert('Заданное условие не выполнено');
}
// //2
// //Перепишите код к тернарному оператору
// // let test = true;
// // if (test === true) {
// //     console.log('+++');
// // } else {
// //     console.log('---');
// // }

let test = true;
alert((test === true) ? '+++' : '---')

// //3
// // В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

let day = Number(prompt('Введите сегодняшнее число'));
if (day >= 1 && day <= 10) {
    alert('Сейчас первая декада месяца');
} else if (day >= 11 && day <= 20) {
    alert('Сейчас вторая декада месяца');
} else if (day >= 21 && day <= 31) {
    alert('Сейчас третья декада месяца');
}
//4
// Необходимо от пользователя получить число.
// Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.
// Пример:
// Пользователь ввел число 163. Программа должна вывести:
// "В числе 163 количество сотен: 1, десятков: 6, единиц: 3"

let abc = Number(prompt('Введите целое положительное число'));
alert(`В числе ${abc} количество сотен: ${parseInt(abc / 100)}, десятков: ${parseInt(parseInt(abc / 10) % 10)}, единиц: ${parseInt(abc % 10)}`);

console.log(`В числе ${abc} количество сотен: ${parseInt(abc / 100)}, десятков: ${parseInt(parseInt(abc / 10) % 10)}, единиц: ${parseInt(abc % 10)}`)