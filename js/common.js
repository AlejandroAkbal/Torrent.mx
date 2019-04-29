/* --- Stablish the current year so its always updated --- */
htmlYear = document.getElementById("year").innerHTML;
currentYear = new Date().getFullYear();

if (currentYear > htmlYear) {
    document.getElementById("year").innerHTML = htmlyear;
}

/* --- Starting bootstrap's tooltips --- */
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})
