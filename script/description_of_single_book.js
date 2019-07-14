var my = location.search.substring(1).split("&");
var temp = my[0].split("=");
l = decodeURIComponent(temp[1]);
l = l.replace(/\+/g, " ");
var book = JSON.parse(l);

function processForm() {

    if (book['description'] == "") {
        document.getElementById("description").innerHTML = "Գրքի վերաբերյալ նկարագրությունը բացակայում է!!!";
    }else{
        document.getElementById("description").innerHTML = book['description'];
    }
    document.getElementById('book_image').src = book["src"];
    document.getElementById('book_name').innerHTML = book["bookname"];
    document.getElementById('book_author').innerHTML = book["authorname"];
    document.getElementById('book_genre').innerHTML = book["genre"];
    document.getElementById('book_count').innerHTML = book["book_count"];

}


(function () {
    
        
    const btnLogout = document.getElementById('btnLogout');

    
    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
        location.replace("../main.html");
    });

}());

    


