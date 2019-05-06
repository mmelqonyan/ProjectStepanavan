function processForm() 
{


var my = location.search.substring(1).split("&");
var temp = my[0].split("=");
l =  decodeURIComponent(temp[1]);
l = l.replace(/\+/g, " ");
//l = l.split("+").join(" ")

var js = JSON.parse(l);

console.log(js)
document.getElementById('book_image').src = js["src"]
document.getElementById('book_name').innerHTML = js["bookname"]
document.getElementById('book_author').innerHTML = js["authorname"]
}

