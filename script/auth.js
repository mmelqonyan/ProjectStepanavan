(function () {
    // Initialize Firebase

    const loginTxtEmail = document.getElementById('loginTxtEmail');
    const loginTxtPassword = document.getElementById('loginTxtPassword');
    const regTxtEmail = document.getElementById('regTxtEmail');
    const regTxtPassword = document.getElementById('regTxtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const errorMsg = document.getElementById('error_message');
    const nameTxtName = document.getElementById('sign_up_name_input');

    btnLogin.addEventListener('click', e => {
        const email = loginTxtEmail.value;
        const pass = loginTxtPassword.value;

        const auth = firebase.auth();

        auth.signInWithEmailAndPassword(email, pass)
            .then(e => {
                localStorage.setItem("check", true);
                localStorage.setItem("active_user", e.user.displayName);
                location.replace("html/chose_category.html");

            }
            )
            .catch(e => showErrorMsg(e.message));
    });

    btnSignUp.addEventListener('click', e => {
        const email = regTxtEmail.value;
        const pass = regTxtPassword.value;
        const auth = firebase.auth();
        const name = nameTxtName.value;

        const promise = auth.createUserWithEmailAndPassword(email, pass);
        errorMsg.innerText = "";
        promise
            .then(e => {
                e.user.updateProfile({
                    displayName: name
                })
                showLoginScreen()
            }
            )
            .catch(e => showErrorMsg(e.message));
    });

}());

let showErrorMsg = (showMessage) => {
    let errorMessages = {
        'The email address is badly formatted.': 'Մուտքագրված էլ. հասցեն սխալ է:',
        'The password is invalid or the user does not have a password.': 'Մուտքագրված գաղտնաբառը սխալ է կամ հետևյալ օգտատերը գոյություն չունի:',
        'Password should be at least 6 characters': 'Գաղտնաբառը պետք լինի 6 սիմվոլ կամ ավելին:',
        'The email address is already in use by another account.': 'Հետևյալ էլ. հասցեն արդեն օգտագործվում է:',
        'The user account has been disabled by an administrator.': 'Ձեր հաշիվը արգելափակված է ադմինիստրատորի կողմից:',
        'There is no user record corresponding to this identifier. The user may have been deleted.': 'Ձեր մուտքագրած տվյալները չեն համապասխանում որևէ հաշվի տվյալների կամ ձեր հաշիվը ջնջված է բազայից:'
    };
    for (let message in errorMessages) {
        if (showMessage == message)
        errorMsg.innerText = errorMessages[message];
    }
};

history.pushState(null, null, 'main.html');
window.addEventListener('popstate', function () {
    history.pushState(null, null, 'main.html');
});