document.addEventListener('DOMContentLoaded', function () {
    let element = document.querySelector('h3');
    let text = '';
    element.textContent = text;

    let targetText = 'MEXICAN RESTAURANTS';
    let intervalId = setInterval(function () {
        text += targetText[text.length];
        element.textContent = text;
        if (text === targetText) {
            clearInterval(intervalId);
        }
    }, 100);
});

document.addEventListener("DOMContentLoaded", function () {
    const sr = ScrollReveal();

    sr.reveal('.sectionydt, .sectionlc, .sectiontaqueria, .sectionlabrasa',{
        duration: 1500,
        origin: 'bottom',
        distance: '7%',
        easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
        reset: true,
        color: 'gold',
        scale: 1.05
    });
});