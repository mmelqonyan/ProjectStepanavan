function getCategory() {

	let temp = location.search.substring(1).split("&")
	let category = temp[0].split("=")[1];
	return category;


}


function drawPage() {
	let categoryName = getCategory()
	let parentDiv = document.getElementById("authorName")



	let paragraf = document.createElement("p")
	paragraf.innerHTML = book_and_author[categoryName]["tumanyan"]["authorname"]
	paragraf.classList.add("autorsList")
	paragraf.onclick = function () {
		document.getElementById("authorname").innerHTML = book_and_author[categoryName]["tumanyan"]["authorname"]
		let book = document.createElement("p")
		book.innerHTML = book_and_author[categoryName]["tumanyan"]["bookname"]
		book.classList.add("about1")
		book.onclick = function () {
			document.getElementById("url_send").value = JSON.stringify(book_and_author[categoryName]["tumanyan"])
			document.forms[0].submit()

		}
		document.getElementById("first").appendChild(book)
		let img = document.createElement("img")
		let imgSrc = book_and_author[categoryName]["tumanyan"]["img"]
		img.setAttribute("src", `${imgSrc}`)
		document.getElementById("first").appendChild(img)
		paragraf.onclick = function () { }
	}
	parentDiv.appendChild(paragraf)

}






