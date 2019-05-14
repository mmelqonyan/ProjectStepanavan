function getCategory() {

	let temp = location.search.substring(1).split("&");
	let category = temp[0].split("=")[1];
	return category;

}


function drawPage() {

	let categoryName = getCategory().split("-")[0];
	let categoryChildName = getCategory().split("-")[1];

	let parentDiv = document.getElementById("authorName");
	
	for(let i in book_and_author[categoryName][categoryChildName]){

		
		let paragraf = document.createElement("p");
		if(book_and_author[categoryName][categoryChildName][i]["author"]){
			paragraf.innerHTML = book_and_author[categoryName][categoryChildName][i]["author"];

		}
		

		paragraf.classList.add("autorsList");
		paragraf.onclick = function () {
			
			let authorTitle = document.createElement("p");
			authorTitle.setAttribute("id", "authorname");
			authorTitle.setAttribute("value", "Հեղինակ");
			document.getElementsByClassName("bookimgcontainer")[0].innerHTML = "";
			document.getElementsByClassName("bookimgcontainer")[0].appendChild(authorTitle);

			if(book_and_author[categoryName][categoryChildName][i]["author"]){
				document.getElementById("authorname").innerHTML = `${book_and_author[categoryName][categoryChildName]["categoria"]}`+"<br>"+book_and_author[categoryName][categoryChildName][i]["author"];

			}
			
			let img = document.createElement("img");
			for(let j in book_and_author[categoryName][categoryChildName][i]){
				console.log(book_and_author[categoryName][categoryChildName]["author"]);
				var conteinDiv = document.createElement("div");
				conteinDiv.classList.add("firstreiting","images");

				if(book_and_author[categoryName][categoryChildName][i][j]["img"]){
					let imgSrc = book_and_author[categoryName][categoryChildName][i][j]["img"];
					img.setAttribute("src", `${imgSrc}`);
					conteinDiv.appendChild(img);
					
				}

				if(book_and_author[categoryName][categoryChildName][i][j]["bookname"]){
					conteinDiv.innerHTML += book_and_author[categoryName][categoryChildName][i][j]["bookname"];
					document.getElementsByClassName("bookimgcontainer")[0].appendChild(conteinDiv);
				}
				
				conteinDiv.onclick = function () {
					if(book_and_author[categoryName][categoryChildName][i][j]["img"]){
						document.getElementById("url_send").value = JSON.stringify(book_and_author[categoryName][categoryChildName][i][j]);
					}
					document.forms[0].submit();

				}
			}	
			
		}
		if(paragraf.innerHTML != ""){
			parentDiv.appendChild(paragraf);
		}
	}

}






