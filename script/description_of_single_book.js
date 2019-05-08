
function processForm() {



    var my = location.search.substring(1).split("&");
    var temp = my[0].split("=");
    l = decodeURIComponent(temp[1]);
    l = l.replace(/\+/g, " ");
    //l = l.split("+").join(" ")

    var book = JSON.parse(l);


    console.log(book)
    document.getElementById('book_image').src = book["img"]
    document.getElementById('book_name').innerHTML = book["bookname"]
    document.getElementById('book_author').innerHTML = book["authorname"]
    document.getElementById('book_genre').innerHTML = book["genre"]


}