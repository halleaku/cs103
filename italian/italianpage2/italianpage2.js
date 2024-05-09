document.addEventListener("DOMContentLoaded", function () {
    const sr = ScrollReveal();

    sr.reveal('.first',{
        duration: 1500,
        origin: 'bottom',
        distance: '7%',
        easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
        reset: true,
        scale: 1.05
    });

    sr.reveal('h2',{
        duration: 1500,
        origin: 'top',
        distance: '7%',
        easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
        reset: true,
        scale: 1.05
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Get the element with the ID "typewriter"
    let element = document.querySelector('h3');
    let text = '';
    element.textContent = text;

    let targetText = 'ITALIAN RESTAURANTS';
    let intervalId = setInterval(function () {
        text += targetText[text.length];
        element.textContent = text;
        if (text === targetText) {
            clearInterval(intervalId);
        }
    }, 100);
});