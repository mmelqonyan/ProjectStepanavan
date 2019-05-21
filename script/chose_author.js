function getCategory() {

	let temp = location.search.substring(1).split("&");
	let category = temp[0].split("=")[1];
	return category;

}

function drawPage(book_and_author) {

	let [categoryName, categoryChildName] = getCategory().split("-");

	let parentDiv = document.getElementById("authorName");

	for (let i in book_and_author[categoryName][categoryChildName]) {

		var paragraf = document.createElement("input");

		if (book_and_author[categoryName][categoryChildName][i]["author"]) {
			paragraf.type = "button";
			paragraf.value = book_and_author[categoryName][categoryChildName][i]["author"];

		}

		paragraf.className = "autorsList";

		paragraf.onclick = function () {

			let authorTitle = document.createElement("p");
			authorTitle.id = "authorname";
			authorTitle.value = "Հեղինակ";
			document.getElementsByClassName("bookimgcontainer")[0].innerHTML = "";
			document.getElementsByClassName("bookimgcontainer")[0].appendChild(authorTitle);



			for (let j in book_and_author[categoryName][categoryChildName][i]) {

				var conteinDiv = document.createElement("div");
				conteinDiv.className = "images";

				if (book_and_author[categoryName][categoryChildName][i]["author"]) {
					document.getElementById("authorname").innerHTML = book_and_author[categoryName][categoryChildName][i][j]["authorname"];

				}

				if (book_and_author[categoryName][categoryChildName][i][j]["img"]) {

					conteinDiv.style.backgroundImage = "url('" + book_and_author[categoryName][categoryChildName][i][j]['img'] + "')";

				}

				if (book_and_author[categoryName][categoryChildName][i][j]["bookname"]) {

					conteinDiv.innerHTML = book_and_author[categoryName][categoryChildName][i][j]["bookname"];
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
		if (paragraf.value != "") {

			parentDiv.appendChild(paragraf);

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
var book_and_author;
function start() {
	let database = firebase.database().ref().child('book_and_author')

	database.on('value', snap => {
		book_and_author = snap.val()
		drawPage(book_and_author)
	})


}
function moreAndFaw(arg) {
	var [i, j, k, l] = arg.id.split("-");

	document.getElementById("url_send").value = JSON.stringify(book_and_author[i][j][k][l]);
	document.forms[0].submit();
}

function getImage(el) {
	const images = firebase.storage().ref().child('media');
	const image = images.child(`${el}`);

	image.getDownloadURL().then((url) => {
		console.log(url)// STEX KDNES QO NKAR DNELU PAHY
	});
}


 