let array = [];


function setItems() {
    let obj = new Object;

    let inputName = document.getElementById("inputName").value;
    obj["name"] = inputName

    let inputLogin = document.getElementById("inputLogin").value;
    obj["login"] = inputLogin

    let inputSurname = document.getElementById("inputSurname").value
    obj["surname"] = inputSurname
    let inputPassword = document.getElementById("inputPassword").value;
    obj["pass"] = inputPassword

    let inputMail = document.getElementById("inputMail").value;
    obj["mail"] = inputMail

    
    array.push(obj)

   localStorage.setItem("Name",JSON.stringify(array));


}





function check() {
    let inputName =  document.getElementById("inputName").value;

    let inputLogin =  document.getElementById("inputLogin").value;
    let inputSurname = document.getElementById("inputSurname").value;
    let inputPassword = document.getElementById("inputPassword").value;
    let inputConfirm = document.getElementById("inputConfirm").value;
    let inputMail = document.getElementById("inputMail").value;

    
    if( inputName.length < 3 || inputName.length > 12){
        document.getElementById("name").innerHTML = "Enter valid name."
        return
    }
    else{
        document.getElementById("name").innerHTML = ""

    }
    if( inputSurname.length < 6 || inputSurname.length > 20){
        document.getElementById("surname").innerHTML = "Enter valid surname."
        return
    }
    else{
        document.getElementById("surname").innerHTML = ""

    }
    if(!(validateEmail(inputMail))){
        document.getElementById("email").innerHTML = "Enter valid mail."
        return

    }
    else{
        document.getElementById("email").innerHTML = ""

    }
    if(inputLogin.length < 5 || inputLogin.length > 12 ){
        document.getElementById("login").innerHTML = "Enter valid login."
        return
    }
    else if(inputLogin){
        for (let i = 0; i < array.length; i++){

            if(array[i]["login"] == inputLogin){
                document.getElementById("login").innerHTML = "This login is already exists."
                return;
            }
        }
    }
   
    document.getElementById("login").innerHTML = ""

    if( inputPassword.length < 6 || inputPassword.length > 12){
        document.getElementById("pass").innerHTML = "Enter valid password."
        return
    }
    else{
        document.getElementById("pass").innerHTML = ""

    }
    if( inputPassword !== inputConfirm){
        document.getElementById("repass").innerHTML = "Your passwords doesn't match"
        return
    }
    else{
        document.getElementById("repass").innerHTML = "."
        
    }


    setItems()
    

}

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
    
    
   