function getCategory(){

	let temp =location.search.substring(1).split("&")
	let category = temp[0].split("=")[1];
	return category;


}


function drawPage(){
	let categoryName = getCategory()



	for(author in book_and_author[categoryName]){
		console.log(author)
		console.log(book_and_author[categoryName][author]["bookname"])
		
console.log(book_and_author[categoryName][author]["img"])
		

	}




	




}



