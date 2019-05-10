
function setActiveUser(user){
    localStorage.setItem(USER_KEY , JSON.stringify(user))
}

    
function getActiveUser(){
    console.log(JSON.stringify(localStorage.getItem(USER_KEY)));
    return JSON.parse(localStorage.getItem(USER_KEY));
}

function setErrorMessage(elem, errorMessage = "incorrect") {
    elem.value = ""
    elem.placeholder = errorMessage;
    elem.style.border = "1px solid red";
}

function deleteBorder(...elements) {
    for (let e of elements) {
        e.style.border = "none"
    }
}

function registerNewUser(login, user) {
    let allUsers = loadUsers() || {}
    allUsers[login] = user;
    localStorage.setItem(USERS_KEY, JSON.stringify(allUsers))  ////db
}

function loadUsers() {
    return JSON.parse(localStorage.getItem(USERS_KEY));
}

function validateSignUpString(string, from, to) {
    let pattern = `([A-z]|[0-9]){${from},${to}}`
    if (string.match(pattern)) return true;
    return false;
}

function signOut(){
    localStorage.removeItem(USER_KEY);
    location.replace("login_and_register.html");
}