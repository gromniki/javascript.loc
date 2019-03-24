'use strict';

// функция для тесто
function assert(value, desc) {
    let li = document.createElement('li');
    li.className = value ? 'pass' : 'fail';
    li.appendChild(document.createTextNode(desc));
    document.querySelector('js-results').appendChild(li);
}
window.onload = function () {  // выполнить тесты, используя утверждения
    assert(true, 'The test suite is running.');
    assert(false, 'Fail!');
};

// функция для логов
function report(text) {
    assert(true, text);
}

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

