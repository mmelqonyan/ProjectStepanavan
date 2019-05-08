function getCategory() {

	let temp = location.search.substring(1).split("&")
	let category = temp[0].split("=")[1];
	return category;


}


function drawPage() {
	let categoryName = getCategory()
	let parentDiv = document.getElementById("authorName")


	for (author in book_and_author[categoryName]) {
		let paragraf = document.createElement("p")
		paragraf.innerHTML = book_and_author[categoryName][author]["authorname"]
		paragraf.classList.add("autorsList")
		parentDiv.appendChild(paragraf)
	}
}




