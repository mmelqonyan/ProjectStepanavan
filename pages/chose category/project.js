
document.getElementById('authorname').innerHTML += '<i>'+ book_and_author[0].authorname+'</i>';

var images_array = document.querySelectorAll(".images");

for (var i = 0; i < images_array.length; i++) {

	images_array[i].innerHTML = ('<img alt="book.img"   onclick=change_location(this)  src = '+book_and_author[i+1].img+' >');
	 
	document.getElementsByClassName('about'+(i+1))[0].innerHTML = '<i>'+ book_and_author[i+1].bookname+'</i>';
}

function change_location(arg) {

	var data_arr = [];
	var obj = {};
	obj.authorname = book_and_author[0].authorname;

	for (var i = 0; i < book_and_author.length; i++) {
		if(book_and_author[i].img == arg.getAttribute('src')){
			obj.bookname = book_and_author[i].bookname;
			break;
		}
		
	}
	
	obj.src = arg.getAttribute('src');
	data_arr.push(obj);
   


 document.getElementById("url_send").setAttribute("value", `${JSON.stringify(obj)}`)
	
	document.forms[0].submit()
}









