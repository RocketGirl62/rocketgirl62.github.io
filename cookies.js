function starting() {
    if (localStorage.getItem('cookieallowed') == 1) {
        document.getElementById('cookieconsent').classList.add('invisible');
    } else {
        document.getElementById('cookieconsent').classList.remove('invisible');
    }
}

function allowed() {
    localStorage.setItem('cookieallowed', 1);
    document.getElementById('cookieconsent').classList.add('invisible');
}