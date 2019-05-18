function getCategory() {

	let temp = location.search.substring(1).split("&");
	let category = temp[0].split("=")[1];
	return category;

}


function drawPage() {

	let [categoryName,categoryChildName] = getCategory().split("-");

	let parentDiv = document.getElementById("authorName");


	for(let i in book_and_author[categoryName][categoryChildName]){

		
		let paragraf = document.createElement("p");
		if(book_and_author[categoryName][categoryChildName][i]["author"]){
			paragraf.innerHTML = book_and_author[categoryName][categoryChildName][i]["author"];

		}
		//console.log(book_and_author[categoryName][categoryChildName][i])
		paragraf.classList.add("autorsList");

		paragraf.onclick = function () {
			
			let authorTitle = document.createElement("p");
			authorTitle.id = "authorname";
			authorTitle.value = "Հեղինակ";
			document.getElementsByClassName("bookimgcontainer")[0].innerHTML = "";
			document.getElementsByClassName("bookimgcontainer")[0].appendChild(authorTitle);


			if(book_and_author[categoryName][categoryChildName][i]["author"]){
				document.getElementById("authorname").innerHTML = book_and_author[categoryName][categoryChildName][i]["author"];

			}
				
			for(let j in book_and_author[categoryName][categoryChildName][i]){
				
				var conteinDiv = document.createElement("div");
				conteinDiv.classList.add("images");

				if(book_and_author[categoryName][categoryChildName][i][j]["img"]){
					let img = document.createElement("img");
					img.src = book_and_author[categoryName][categoryChildName][i][j]["img"];
					conteinDiv.appendChild(img);
					
				}

				if(book_and_author[categoryName][categoryChildName][i][j]["bookname"]){
					let bookP = document.createElement("p");
					bookP.appendChild(document.createTextNode(`${book_and_author[categoryName][categoryChildName][i][j]["bookname"]}`));
					conteinDiv.appendChild(bookP);
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






