document.addEventListener('DOMContentLoaded', function () {
    // Get the element with the ID "typewriter"
    let element = document.querySelector('h3');
    let text = '';
    element.textContent = text;

    let targetText = 'A TASTE OF BOSTON';
    let intervalId = setInterval(function () {
        text += targetText[text.length];
        element.textContent = text;
        if (text === targetText) {
            clearInterval(intervalId);
        }
    }, 100);
});