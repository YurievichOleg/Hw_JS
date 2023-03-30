
//Задание 1.
let num1 = prompt('Введите перове число.');
(num1 <= 1) ? alert('Введеное число не больше 1.') : alert('Введеное число больше 1.');

let num2 = prompt('Введите второе чилсло.');
(num2 >= 3) ? alert('Введеное число не меньше 3.') : alert('Число меньше 3.');

//Задание 2.
let test = true;
// if (test === true) {
// console.log('+++');
// } else {
// console.log('---');
// }
(test) ? console.log('+++') : console.log('---');


//Задание 3.
let days = 31;
let day = prompt('Введите дату:');
let count = 10;
if (day <= days && day > 0) {
    (day % count !== 0) ? alert(`дата из ${parseInt(day / count) + 1}й декады`) : alert(`дата из ${parseInt(day / count)}й декады`)
} else {
    alert('Недопустимое значение')
}

//Задание 4.
let number = prompt('Введите число:');
let result = `В числе ${number} -`;
let categoryArr = [' сотен: ', ', десятков: ', ', едениц: '];
let maxConst = 100;

for (let i = 0; i < 3; i++) {
    let temporalResult = parseInt(number / maxConst);
    result = result + categoryArr[i] + temporalResult;
    number = number % maxConst;
    maxConst = parseInt(maxConst / 10);
}
result = result + '.';
alert(result);