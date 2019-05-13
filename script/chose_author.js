function getCategory() {

	let temp = location.search.substring(1).split("&")
	let category = temp[0].split("=")[1];
	return category;


}


function drawPage() {
	let categoryName = getCategory();
	let parentDiv = document.getElementById("authorName");
	
	for(let i in book_and_author[categoryName]){

		let paragraf = document.createElement("p");
		paragraf.innerHTML = book_and_author[categoryName][i]["authorname"];
			
		paragraf.classList.add("autorsList");
		paragraf.onclick = function () {
			
			document.getElementById("authorname").innerHTML = book_and_author[categoryName][i]["authorname"];
			
			
			let img = document.createElement("img");
			let imgSrc = book_and_author[categoryName][i]["img"];
			img.setAttribute("src", `${imgSrc}`);
			let conteinDiv = document.createElement("div");
			conteinDiv.classList.add("firstreiting","images");
			
			conteinDiv.innerHTML = book_and_author[categoryName][i]["bookname"];

			conteinDiv.appendChild(img);
			document.getElementsByClassName("bookimgcontainer")[0].appendChild(conteinDiv);

		
			conteinDiv.onclick = function () {
				document.getElementById("url_send").value = JSON.stringify(book_and_author[categoryName][i]);
				document.forms[0].submit();

			}
			
		}
		parentDiv.appendChild(paragraf);

	}

}






