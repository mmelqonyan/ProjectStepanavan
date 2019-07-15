
window.onload = () => {
    document.getElementById("user_name").innerHTML = "Welcome " + localStorage.getItem("active_user");
}

function category(el){

    document.getElementById("category").value = el.parentNode.id+"-"+ el.id;
    document.forms[1].submit()



}

(function () {
    
    
    const btnLogout = document.getElementById('btnLogout');
    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
        location.replace("../main.html");
    });
}());
