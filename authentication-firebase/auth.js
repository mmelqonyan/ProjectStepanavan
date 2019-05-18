(function () {
    const config = {
        apiKey: "AIzaSyCEKO7yFxF7J2pRZya1oizSvFWrmOal5nk",
        authDomain: "login-20da7.firebaseapp.com",
        databaseURL: "https://login-20da7.firebaseio.com",
        projectId: "login-20da7",
        storageBucket: "login-20da7.appspot.com",
        messagingSenderId: "851258903728",
        appId: "1:851258903728:web:53a25d2a9624f8a8"
    };
    // Initialize Firebase
    firebase.initializeApp(config);
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
        .catch(e => errorMsg.innerText = e.message);


    });
    btnSignUp.addEventListener('click', e => {
        const email = regTxtEmail.value;
        const pass = regTxtPassword.value;
        const auth = firebase.auth();

        const promise = auth.createUserWithEmailAndPassword(email, pass);
        errorMsg.innerText = "";
        promise
            .then(e =>  showLoginScreen())
            .catch(e => errorMsg.innerText = e.message);

    });

   


   

}());