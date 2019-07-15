
window.onload = () => {
    document.getElementById("user_name").innerHTML = "Welcome " + localStorage.getItem("active_user");
}

function category(el){

	localStorage.setItem("category", (el.parentNode.id+"-"+ el.id));
    
    document.forms[1].submit()



}

database.on('value', snap => {
		book_and_author = snap.val();
		localStorage.setItem("book_and_author",JSON.stringify(book_and_author));
});

(function () {
    
    
    const btnLogout = document.getElementById('btnLogout');
    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
        location.replace("../main.html");
    });
}());
