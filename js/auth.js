/* --- Changing view from login to register --- */
var formSignIn = document.getElementById('signin');
var formRegister = document.getElementById('register');

function toggleForm() {
    formSignIn.classList.toggle('d-none');
    formRegister.classList.toggle('d-none');
}

/* --- Changing Background --- */
var bodyElement = document.getElementById('start');
var count = 0;

function changeBackground() {
    count++;
    switch (count) {
        case 1:
            bodyElement.className = 'bg-gradient-blue';
            break;
        case 2:
            bodyElement.className = 'bg-gradient-deepblue';
            break;
        case 3:
            bodyElement.className = 'bg-gradient-peach';
            break;
        case 4:
            bodyElement.className = 'bg-gradient-purple';
            break;
        case 5:
            bodyElement.className = 'bg-gradient-creamy';
            break;
        case 6:
            bodyElement.className = 'bg-gradient-greeniously';
            break;
        case 7:
            bodyElement.className = 'bg-gradient-evergreen';
            break;
        case 8:
            count = 0;
            bodyElement.className = 'bg-gradient-green';
            break;
    }
}
