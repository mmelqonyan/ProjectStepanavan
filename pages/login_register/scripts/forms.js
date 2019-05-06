
let loginSection = document.querySelectorAll(".container")[0];
let registerSection = document.querySelectorAll(".container")[1];
let registerBtn = document.getElementById("register_btn");
let loginBtn = document.getElementById("login_btn");


const showLoginScreen = function(){
    removeRegisterScreen()
    document.body.appendChild(loginSection);
}

const showRegisterScreen = function(){
    removeLoginScreen();
    document.body.appendChild(registerSection);
}

const removeLoginScreen = function(){
    loginSection.remove();
}
const removeRegisterScreen = function(){
    registerSection.remove();
}

document.body.onload = ()=>{
    removeRegisterScreen();
    
    registerBtn.onclick = ()=>{
        showRegisterScreen()
    }
    
    loginBtn.onclick = ()=>{
        showLoginScreen();
    }
}
