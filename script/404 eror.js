  let user = getActiveUser();
        if(user) {
            document.getElementById("user_name").innerHTML = "Welcome " + user["name"];
        } else {
            document.write("ERROR 404");
        }
        document.getElementById("sign_out_btn").onclick = function(){
            signOut();
        }
