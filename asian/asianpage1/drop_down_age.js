function checkAgeAndToggleContent() {
    function checkAge() {
        let userAge = prompt("Please enter your age:");
        let twentyOneElement = document.getElementById("Mahaniyom");
        if (userAge >= 21) {
            twentyOneElement.style.display = "block";
        } else {
            twentyOneElement.style.display = "none";
        }
    }
    window.onload = checkAge;
}
checkAgeAndToggleContent();

document.addEventListener("DOMContentLoaded", function () {
    const sr = ScrollReveal();
    sr.reveal('.restaurant1, .restaurant2, .restaurant3, .restaurant4', {
        duration: 1500,
        origin: 'bottom',
        distance: '7%',
        easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
        reset: true,
        color: 'gold',
        scale: 1.05
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Get the element with the ID "typewriter"
    let element = document.querySelector('h3');
    let text = '';
    element.textContent = text;

    let targetText = 'ASIAN RESTAURANTS';
    let intervalId = setInterval(function () {
        text += targetText[text.length];
        element.textContent = text;
        if (text === targetText) {
            clearInterval(intervalId);
        }
    }, 100);
});