var my = location.search.substring(1).split("&");
var temp = my[0].split("=");
l = decodeURIComponent(temp[1]);
l = l.replace(/\+/g, " ");
var book = JSON.parse(l);


function processForm() {

    document.getElementById('book_image').src = book["img"];
    document.getElementById('book_name').innerHTML = book["bookname"];
    document.getElementById('book_author').innerHTML = book["authorname"];
    document.getElementById('book_genre').innerHTML = book["genre"];

}

function HandleBackFunctionality()
{

    window.history.go(-1);
                    
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

    

