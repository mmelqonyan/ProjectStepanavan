
let loginSection = document.querySelectorAll(".container")[0];
let registerSection = document.querySelectorAll(".container")[1];
let registerBtn = document.getElementById("register_btn");
let loginBtn = document.getElementById("login_btn");
const errorMsg = document.getElementById('error_message');
const loginTxtEmail = document.getElementById('loginTxtEmail');
const loginTxtPassword = document.getElementById('loginTxtPassword');
const regTxtEmail = document.getElementById('regTxtEmail');
const regTxtPassword = document.getElementById('regTxtPassword');

const showLoginScreen = function () {
    loginTxtEmail.value = ""
    loginTxtPassword.value = ""
    removeRegisterScreen()
    document.body.appendChild(loginSection);
}

const showRegisterScreen = function () {
    errorMsg.innerText = "";
    regTxtEmail.value = ""
    regTxtPassword.value = ""
    removeLoginScreen();
    document.body.appendChild(registerSection);
}

const removeLoginScreen = function () {
    loginSection.remove();
}
const removeRegisterScreen = function () {
    registerSection.remove();
}

document.body.onload = () => {
    removeRegisterScreen();
    loginTxtEmail.value = ""
    loginTxtPassword.value = ""
    
    
    registerBtn.onclick = () => {
        
        showRegisterScreen()
    }

    loginBtn.onclick = () => {
        errorMsg.innerText = "";
        showLoginScreen();
    }
}
