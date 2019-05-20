function getCategory() {

	let temp = location.search.substring(1).split("&");
	let category = temp[0].split("=")[1];
	return category;

}

function drawPage(book_and_author) {

	let [categoryName, categoryChildName] = getCategory().split("-");

	let parentDiv = document.getElementById("authorName");

	for (let i in book_and_author[categoryName][categoryChildName]) {

		let paragraf = document.createElement("p");

	
		if (book_and_author[categoryName][categoryChildName][i]["author"]) {
			var hr = document.createElement("hr");
			paragraf.innerHTML = book_and_author[categoryName][categoryChildName][i]["author"];
			paragraf.appendChild(hr);
		}
		
		paragraf.classList.add("autorsList");

		paragraf.onclick = function () {

			let authorTitle = document.createElement("p");
			authorTitle.id = "authorname";
			authorTitle.value = "Հեղինակ";
			document.getElementsByClassName("bookimgcontainer")[0].innerHTML = "";
			document.getElementsByClassName("bookimgcontainer")[0].appendChild(authorTitle);


			if (book_and_author[categoryName][categoryChildName][i]["author"]) {
				document.getElementById("authorname").innerHTML = book_and_author[categoryName][categoryChildName][i]["author"];

			}
			for (let j in book_and_author[categoryName][categoryChildName][i]) {

				var conteinDiv = document.createElement("div");
				conteinDiv.classList.add("images");

				if (book_and_author[categoryName][categoryChildName][i][j]["img"]) {
					let img = document.createElement("img");
					img.src = book_and_author[categoryName][categoryChildName][i][j]["img"];
					conteinDiv.appendChild(img);

				}

				if (book_and_author[categoryName][categoryChildName][i][j]["bookname"]) {
					let bookP = document.createElement("p");
					bookP.appendChild(document.createTextNode(`${book_and_author[categoryName][categoryChildName][i][j]["bookname"]}`));
					conteinDiv.appendChild(bookP);
					document.getElementsByClassName("bookimgcontainer")[0].appendChild(conteinDiv);
				}

				conteinDiv.onclick = function () {
					if (book_and_author[categoryName][categoryChildName][i][j]["img"]) {
						document.getElementById("url_send").value = JSON.stringify(book_and_author[categoryName][categoryChildName][i][j]);
					}
					document.forms[0].submit();

				}

			}		

		}
		if(paragraf.innerHTML != ""){
			var fontStyle = document.createElement("i");
			fontStyle.appendChild(paragraf)
			parentDiv.appendChild(fontStyle);

		}
		
	}

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

function start(){
	let database = firebase.database().ref().child('book_and_author')

	database.on('value', snap =>{ 
	let book_and_author = snap.val()
	drawPage(book_and_author)
})
}


