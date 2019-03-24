'use strict';

// Анализ производительности
console.time('name operation');  // запустить таймер
let maxCount = 100000;

for (let n = 0; n < maxCount; n++) {  // многократно выполнить операцию
    /* выполнить измеряемую операцию */
}

console.timeEnd('name operation');  // остановить таймер


// Общее представление о жизненном цикле
function addMessage(element, message) {
    let messageElement = document.createElement('li');
    messageElement.textContent = message;
    element.appendChild(messageElement);
}

let first = document.querySelector('.first-list');
addMessage(first, 'Page loading');


document.body.addEventListener('mousemove', function () {
    let second = document.querySelector('.second-list');
    addMessage(second, 'Event: mousemove');
});

document.body.addEventListener('click', function () {
    let second = document.querySelector('.second-list');
    addMessage(second, 'Event: click');
});


// 3.1 Ряд действий, которые можно выполнять над объектами:
// • Создавать с помощью литералов
{};

// • Присваивать переменным, элементам массива и свойствам других объектов
let ninja = {};  // присвоить новый объект переменной
ninjaArray.push({});  // ввести новый объект в массив
ninja.data = {}; // присвоить новый объект свойству другого объекта

// • Передавать в качестве аргументов функциям
function hide(ninja) {
    ninja.visibility = false;
}

hide({});  // вновь созданный объект передается функции в качестве аргумента

// • Возвращать в качестве значений из функции
function returnNewNinja() {
    return {};  // возвратить новый объект из функции
}

// • Наделять свойствами, которые можно динамически создавать и присваивать им значения
let ninjaTwo = {};
ninjaTwo.name = 'Hanzo';  // создать новое свойство для объекта

// 3.2 Функции в качестве объектов высшего порядка
// Функции в JavaScript обладают всеми возможностями объектов, а следовательно, их вполне
// допустимо трактовать как и любые другие объекты в этом языке. Говорят, что функции
// являются объектами Высшего Порядка, и поэтому их также можно

// • Создавать с помощью литералов
function ninjaFunction() {}

// • Присваивать переменным, элементам массива и свойствам других объектов
let ninjaFunctionTwo = function () {};  // присвоить новую функцию переменной
ninjaArrayTwo.push(function () {});  // ввести новую функцию в массив
ninja.data = function () {};  // присвоить новую функцию свойству другого объекта

// • Передавать в качестве аргументов другим функциям
function call(ninjaFunctionThird) {
    ninjaFunctionThird()
}
call(function () {});  // вновь созданная функция передается в качестве аргумента вызываемой функции

// • Возвращать в качестве значений из других функций
function returnNewNinjaFunction() {
    return function () {};  // возвратить новую функцию
}

// • Наделять свойствами, которые можно динамически создавать и присваивать им значения
let ninjaFunctionFourth = function () {};
ninjaFunctionFourth.ninja = 'Hanzo';  // ввести новое свойство в функцию

// 3.3 Функции обратного вызова (callback)
// Всякий раз, когда создается функция для последующего вызова, будь то из браузера или из другого кода,
// это означает, что, по существу, подготавливается обратный вызов
let text = 'Domo arigato!';
report('Before defining functions');

function useless(ninjaCallback) {  // определить функцию, которой передается и сразу вызывается функция обратного вызова
    report('In useless functions');
    return ninjaCallback();
}

function getText() {  // определить простую функцию, возвращающую значение глобальной переменной
    report('In getText function');
    return text;
}

report('Before making all the calls');

assert(useless(getText) === text,  // вызвать бесполезную функцию и передать ей функцию обратного вызова getText()
    'The useless function works! ' + text);

report('After the calls have been made');

