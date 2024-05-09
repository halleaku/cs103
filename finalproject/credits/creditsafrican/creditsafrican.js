document.addEventListener('DOMContentLoaded', function () {
    let element = document.querySelector('h3');
    let text = '';
    element.textContent = text;

    let targetText = 'CREDITS OF AFRICAN PAGE';
    let intervalId = setInterval(function () {
        text += targetText[text.length];
        element.textContent = text;
        if (text === targetText) {
            clearInterval(intervalId);
        }
    }, 100);
});