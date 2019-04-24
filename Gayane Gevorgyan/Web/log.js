var blank = [];

function regForm() {
    var person = {};
    let log = document.getElementById("login").value;
    let pas = document.getElementById("password").value;
    let name = document.getElementById("name").value;
    let sname = document.getElementById("surename").value;
    var msgContainer = document.getElementById("msgContainer");
    msgContainer.innerText = "";

    if (log !== "") {
        person.login = log;
    } else {
        msgContainer.innerText = "Input login";
    }
    if (pas !== "") {
        person.password = pas;
    } else {
        msgContainer.innerText = "Input Password";
    }
    if (name !== "") {
        person.name = name;
    } else {
        msgContainer.innerText = "Input Name";
    }
    if (sname !== "") {
        person.surname = sname;
    } else {
        msgContainer.innerText = "Input Surename";
    }
    blank.push(person);

    document.getElementById("personContainer").innerText = JSON.stringify(blank);
}
