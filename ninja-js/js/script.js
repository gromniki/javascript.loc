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
