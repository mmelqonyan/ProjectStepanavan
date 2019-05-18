
function category(el){

	document.getElementById("category").value = el.parentNode.id+"-"+ el.id;


	document.forms[0].submit()



}

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
        
    const btnLogout = document.getElementById('btnLogout');

    
    

    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
        location.replace("../main.html");
    });


    

}());

