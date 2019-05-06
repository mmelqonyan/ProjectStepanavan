

function setDataForSingleBook(){
    let dataForSingleBook = sessionStorage.getItem('tumanyan')
    let name = dataForSingleBook["name"]
    let author = dataForSingleBook["author"]
    let image = dataForSingleBook["image"]
    let rating = dataForSingleBook["rating"]
    let genre = dataForSingleBook["genre"]
    let status = dataForSingleBook["status"]
    document.getElementById("book_name").innerHTML = name
    document.getElementById("book_author").innerHTML = author
    document.getElementById("book_rating").innerHTML = rating
    document.getElementById("book_genre").innerHTML = genre
    document.getElementById("book_status").innerHTML = status
    document.getElementById("image").setAttribute("src", `${image}`)
}
