var nom = document.getElementById('nom');
nom.addEventListener('keypress', function (event) {
    var pressedKey = event.key;
    if (pressedKey < 'a' || pressedKey > 'z') {
        event.preventDefault();
        alert("Merci de tout écrire en minuscule");
    }
});