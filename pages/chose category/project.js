
document.getElementById('authorname').innerHTML = book_and_author[0].authorname;
 
var images_array = document.querySelectorAll(".images");

for (var i = 0; i < images_array.length; i++) {
	images_array[i].innerHTML = ('<img onclick=change_location(this) src = '+book_and_author[i+1].img+' >');
	
}

function change_location(arg) {
	var data_arr = [];

	var obj = {};
	obj.authorname = book_and_author[0].authorname;
	obj.src = arg.getAttribute('src');
	data_arr.push(obj);

    window.localStorage.setItem("book",JSON.stringify(data_arr));

    window.location = "../description/description.html";


}