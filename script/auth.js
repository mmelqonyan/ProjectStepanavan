
(function () {
    
    // Initialize Firebase
    
    const loginTxtEmail = document.getElementById('loginTxtEmail');
    const loginTxtPassword = document.getElementById('loginTxtPassword');
    const regTxtEmail = document.getElementById('regTxtEmail');
    const regTxtPassword = document.getElementById('regTxtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const errorMsg = document.getElementById('error_message');

    btnLogin.addEventListener('click', e => {
        const email = loginTxtEmail.value;
        const pass = loginTxtPassword.value;
        const auth = firebase.auth();

        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise
            .then(e => location.replace("html/chose_category.html"))
            .catch(e => showErrorMsg(e.message));
    });

    btnSignUp.addEventListener('click', e => {
        const email = regTxtEmail.value;
        const pass = regTxtPassword.value;
        const auth = firebase.auth();

        const promise = auth.createUserWithEmailAndPassword(email, pass);
        errorMsg.innerText = "";
        promise
            .then(e => showLoginScreen())
            .catch(e => showErrorMsg(e.message));
    });

}());

function showErrorMsg(arg) {
    switch (arg) {
        case 'The email address is badly formatted.':
            errorMsg.innerText = 'Մուտքագրված էլ. հասցեն սխալ է:'
            break;
        case 'The password is invalid or the user does not have a password.':
            errorMsg.innerText = 'Մուտքագրված գաղտնաբառը սխալ է կամ հետևյալ օգտատերը գոյություն չունի:'
            break;
        case 'The password must be 6 characters long or more.':
            errorMsg.innerText = 'Գաղտնաբառը պետք լինի 6 սիմվոլ կամ ավելին:'
            break;
        case 'The email address is already in use by another account.':
            errorMsg.innerText = 'Հետևյալ էլ. հասցեն արդեն օգտագործվում է:'
            break;
        case 'The user account has been disabled by an administrator.':
            errorMsg.innerText = 'Ձեր հաշիվը արգելափակված է ադմինիստրատորի կողմից:'
            break;
        case 'There is no user record corresponding to this identifier. The user may have been deleted.':
            errorMsg.innerText = 'Ձեր մուտքագրած տվյալները չեն համապասխանում որևէ հաշվի տվյալների կամ ձեր հաշիվը ջնջված է բազայից:'
            break;
    }
}

history.pushState(null, null, 'main.html');
window.addEventListener('popstate', function () {
    history.pushState(null, null, 'main.html');
});