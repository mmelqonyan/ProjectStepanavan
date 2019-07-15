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

        let book_and_author = JSON.parse(localStorage.getItem("book_and_author"));
        drawPage(book_and_author);
})();

function drawPage(book_and_author) {

    let [categoryName, categoryChildName] = localStorage.getItem("category").split('-');
    let parentDiv = document.getElementById("authorName");
    
    for (let i in book_and_author[categoryName][categoryChildName]) {
        
        let paragraf = document.createElement("input");

        if (book_and_author[categoryName][categoryChildName][i]["author"]) {
            paragraf.type = "button";
            paragraf.value = book_and_author[categoryName][categoryChildName][i]["author"];
        }
        
        paragraf.className = "autorsList";
        
        paragraf.onclick = () => {
            var category = localStorage.getItem("category");
            document.getElementById("url_send3").value = category;
            document.getElementById('sendback').action = 'chose_author.html';
            localStorage.setItem("clicedImg",JSON.stringify(book_and_author[categoryName][categoryChildName][i]) )

            document.forms[0].submit();
        }    
        parentDiv.appendChild(paragraf);
 
    }
    
}


(function () {
        
    const btnLogout = document.getElementById('btnLogout');

    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
        location.replace("../main.html");
    });

}());




