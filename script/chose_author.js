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
		if(book_and_author[categoryName][i]["author"]){
			paragraf.innerHTML = book_and_author[categoryName][i]["author"];
		}
		

		paragraf.classList.add("autorsList");
		paragraf.onclick = function () {
			
			
			document.getElementsByClassName("bookimgcontainer")[0].innerHTML = "";
			document.getElementsByClassName("bookimgcontainer")[0].innerHTML = "<p id='authorname'>Հեղինակ:</p>";
			document.getElementById("authorname").innerHTML = book_and_author[categoryName][i]["author"];



			let img = document.createElement("img");
			for(let j in book_and_author[categoryName][i]){

				var conteinDiv = document.createElement("div");
				conteinDiv.classList.add("firstreiting","images");

				if(book_and_author[categoryName][i][j]["img"]){
					let imgSrc = "../"+ book_and_author[categoryName][i][j]["img"];
					img.setAttribute("src", `${imgSrc}`);
					conteinDiv.appendChild(img);
					
				}
				

				if(book_and_author[categoryName][i][j]["bookname"]){
					conteinDiv.innerHTML += book_and_author[categoryName][i][j]["bookname"];
					document.getElementsByClassName("bookimgcontainer")[0].appendChild(conteinDiv);
				}
				
				
				conteinDiv.onclick = function () {
					document.getElementById("url_send").value = JSON.stringify(book_and_author[categoryName][i][j]);
					document.forms[0].submit();

				}
			}	
			
		}
		parentDiv.appendChild(paragraf);

	}

}






