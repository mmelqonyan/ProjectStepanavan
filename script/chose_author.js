function getCategory() {

	let temp = location.search.substring(1).split("&")
	let category = temp[0].split("=")[1];
	return category;


}


function drawPage() {
	let categoryName = getCategory()
	let parentDiv = document.getElementById("authorName");
	
	for(let i in book_and_author[categoryName]){
		let paragraf = document.createElement("p");
		paragraf.innerHTML += book_and_author[categoryName][i]["authorname"]	
			paragraf.onclick = function(){
			document.getElementById("first").innerHTML = "";
			document.getElementById("first").appendChild(book)
			let img = document.createElement("img")
			let imgSrc = book_and_author[categoryName][i]["img"]
			img.setAttribute("src", `${imgSrc}`)
			document.getElementById("first").appendChild(img)

		}
	
		paragraf.classList.add("autorsList");
		paragraf.onclick = function () {
			document.getElementById("authorname").innerHTML = book_and_author[categoryName][i]["authorname"];
			let book = document.createElement("p");
			book.innerHTML = book_and_author[categoryName][i]["bookname"];
			var att = document.createAttribute("class"); 
			att.value = "about1"; 
			book.setAttributeNode(att);
			book.onclick = function () {
				document.getElementById("url_send").value = JSON.stringify(book_and_author[categoryName][i])
				document.forms[0].submit()

			}
			document.getElementById("first").innerHTML = "";
			document.getElementById("first").appendChild(book)
		let img = document.createElement("img")
		let imgSrc = book_and_author[categoryName][i]["img"]
		img.setAttribute("src", `${imgSrc}`)
		document.getElementById("first").appendChild(img)
		
	  }
	parentDiv.appendChild(paragraf)

	}

}






