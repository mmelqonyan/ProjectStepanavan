let signInBtn = document.getElementById("sign_in_btn");
let signUpBtn = document.getElementById("sign_up_btn");

signInBtn.onclick = () => {
    let loginInput = document.getElementById("sign_in_login_input");
    let passwordInput = document.getElementById("sign_in_password_input");
    let response = signIn(loginInput.value, passwordInput.value);
    deleteBorder(loginInput, passwordInput);
    if (response.code === RESPONSE_CODES.OK) {
        deleteBorder(loginInput, passwordInput);
        location.replace("chose_category.html");
        setActiveUser(response.user);
    } else if (response.code === RESPONSE_CODES.INCORRECT_LOGIN) {
        setErrorMessage(loginInput,"Incorrect Login")

    } else if (response.code === RESPONSE_CODES.INCORRECT_PASSWORD) {
        setErrorMessage(passwordInput,"Incorrect Password")
    }
}

signUpBtn.onclick = () => {
    let loginInput = document.getElementById("sign_up_login_input");
    let nameInput = document.getElementById("sign_up_name_input");
    let passwordInput = document.getElementById("sign_up_password_input");
    deleteBorder(loginInput, nameInput, passwordInput)
    let loginFieldIsValid = validateSignUpString(loginInput.value, 4, 20);
    let nameFiledIsValid = validateSignUpString(nameInput.value, 4, 20);
    let passwordFiledIsValid = validateSignUpString(passwordInput.value, 4, 20);
    let allFieldAreValid = loginFieldIsValid && nameFiledIsValid && passwordFiledIsValid;

    if (!loginFieldIsValid) {
        setErrorMessage(loginInput);
    }
    if (!nameFiledIsValid) {
        setErrorMessage(nameInput);
    }
    if (!passwordFiledIsValid) {
        setErrorMessage(passwordInput);
    }
    if (allFieldAreValid) {
        let response = signUp(loginInput.value, passwordInput.value, nameInput.value);
        if (response.code === RESPONSE_CODES.OK) {
            registerNewUser(loginInput.value, response.user);
            showLoginScreen();
        } else if (response.code === RESPONSE_CODES.USER_EXIST) {
            alert("User already exists");
        }
    }
}

function signUp(login, password, name) {
    let allUsers = loadUsers() || {};
    if (allUsers[login] === undefined) {
        let user = {
            name,
            password
        }
        return { code: RESPONSE_CODES.OK, user };
    } else {
        return { code: RESPONSE_CODES.USER_EXIST, user: {} };
    }
}

function signIn(login, password) {
    let allUsers = loadUsers();
    if(allUsers !== null ){
        if (allUsers.hasOwnProperty(login)) {
            let user = allUsers[login];
            if (password === user["password"]) {
                return { code: RESPONSE_CODES.OK, user };
            }
            return { code: RESPONSE_CODES.INCORRECT_PASSWORD, user: {} };
        }
    }
    return { code: RESPONSE_CODES.INCORRECT_LOGIN, user: {} };
}

