function getCategory() {

	let temp = location.search.substring(1).split("&");
	let category = temp[0].split("=")[1];

	return category;

}

function drawPage(book_and_author) {

	let [categoryName, categoryChildName] = getCategory().split("-");
	
	
	let parentDiv = document.getElementById("authorName");
	this.tmp = 1;

	for (let i in book_and_author[categoryName][categoryChildName]) {
		
		let paragraf = document.createElement("input");

		if (book_and_author[categoryName][categoryChildName][i]["author"]) {
			paragraf.type = "button";
			paragraf.value = book_and_author[categoryName][categoryChildName][i]["author"];

		}

		paragraf.className = "autorsList";

		paragraf.onclick = () => {
			clicedImgs(book_and_author[categoryName][categoryChildName][i]);
		
		}    

		if (paragraf.value != "") {

			parentDiv.appendChild(paragraf);

		}
		
		if(tmp){
		 	clicedImgs(book_and_author[categoryName][categoryChildName][i]);
		 	this.tmp = 0;
		}

	}

}

(function () {
	const config = {
		apiKey: "AIzaSyCEKO7yFxF7J2pRZya1oizSvFWrmOal5nk",
		authDomain: "login-20da7.firebaseapp.com",
		databaseURL: "https://login-20da7.firebaseio.com",
		projectId: "login-20da7",
		storageBucket: "login-20da7.appspot.com",
		messagingSenderId: "851258903728",
		appId: "1:851258903728:web:53a25d2a9624f8a8"
	};
	// Initialize Firebase
	firebase.initializeApp(config);

	const btnLogout = document.getElementById('btnLogout');


	btnLogout.addEventListener('click', e => {
		firebase.auth().signOut();
		location.replace("../main.html");
	});

}());

var book_and_author;
let database = firebase.database().ref().child('book_and_author');

function start() {
	

	database.on('value', snap => {
		book_and_author = snap.val();
		drawPage(book_and_author);
	});

}
function moreAndFaw(arg) {

		var [i, j, k, l] = arg.id.split("-");
		document.getElementById("url_send").value = JSON.stringify(book_and_author[i][j][k][l]);
		document.forms[0].submit();
}

function clicedImgs(arg) {

	let authorTitle = document.createElement("p");
	authorTitle.id = "authorname";
	authorTitle.value = "Հեղինակ";
	document.getElementsByClassName("bookimgcontainer")[0].innerHTML = "";
	document.getElementsByClassName("bookimgcontainer")[0].appendChild(authorTitle);

	for (let j in arg) {

		let conteinDiv = document.createElement("div");
		conteinDiv.className = "images";
		
		if (arg[j]["authorname"]) {
			document.getElementById("authorname").innerHTML = arg[j]["authorname"];

		}

		if (arg[j]["img"]) {

			const images = firebase.storage().ref().child('media');
			const image = images.child(`${arg[j]["img"]}`);

			image.getDownloadURL().then((url) => {
					
				conteinDiv.style.backgroundImage = "url('" + url + "')";
				arg[j]['src'] = url;

			}).catch(function(error) {
				  conteinDiv.style.border = "1px solid";
				  conteinDiv.innerHTML += "<br><br>IMAGE does not EXIST";
				  console.log(error.message);
			});
			
		}
		if (arg[j]["bookname"]) {

			conteinDiv.innerHTML = arg[j]["bookname"];
			
			conteinDiv.onclick = function () {
				sendGor(arg[j]);
				
			}
			document.getElementsByClassName("bookimgcontainer")[0].appendChild(conteinDiv);
		}
		
	}
	return;
}

function sendGor(arg) {
	
	document.getElementById("url_send").value = JSON.stringify(arg);

	document.forms[0].submit();
}

	var bookArray=[];
(function() {
	
	database.on('value', snap => {

		let book_and_author = snap.val();

		for(let i in book_and_author){

			for(let j in book_and_author[i]){
				
				for(let l in book_and_author[i][j]){
	
					for(let k in book_and_author[i][j][l]){

						if(book_and_author[i][j][l][k]["bookname"]){
							const images = firebase.storage().ref().child('media');
							const image = images.child(`${book_and_author[i][j][l][k]["img"]}`);

							image.getDownloadURL().then((url) => {	
											
								book_and_author[i][j][l][k]['src'] = url;
													
							}).catch(function(error) {
								console.log("Image non exist //error.message");
							});
							
							bookArray.push(book_and_author[i][j][l][k]);
							
		                }
					}	
				}
			}
		}
		
	})
})();
function filenamef (){

	let url = window.location.pathname;
	let filename = url.substring(url.lastIndexOf('/')+1);
	let Gorpage = url.split("?")[0];
	let filenameG = Gorpage.substring(Gorpage.lastIndexOf('/')+1);

	if(filename == 'chose_category.html'){
		return filename;
	}else if (filenameG == 'description_of_single_book.html'){
		return filenameG;
	} else {
		return null;
	}
}

/// Search Function ////////////////////////////////////////////////////////////////
function autocomplete(inp, argItem) {
 
    var currentFocus;
  
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
      
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
      
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
    	
        this.parentNode.appendChild(a);
        for(let i = 0; i < argItem.length; i++){

	        if (argItem[i]["bookname"].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
	         	
	            b = document.createElement("DIV");
	            
	            b.innerHTML = "<strong>" + argItem[i]["bookname"].substr(0, val.length) + "</strong>";
	            b.innerHTML += argItem[i]["bookname"].substr(val.length);
	           
	            b.innerHTML += "<p style='display:none' >"+argItem[i]["bookname"] + "</p>";
	           
	            b.addEventListener("click", function(e) {
	             	
		            inp.value = this.getElementsByTagName("p")[0].innerHTML;

		            
					
					let filename = filenamef();
					
					
					if (filename == "chose_category.html") {
						
		            	document.getElementById('lupe1').onclick = function() {

						    document.getElementById("url_send2").value = JSON.stringify(argItem[i]);

							document.forms[1].submit();	
		                }
		             }
		             else if (filename == "description_of_single_book.html") {
						
		            	document.getElementById('lupe3').onclick = function() {

						    document.getElementById("url_send3").value = JSON.stringify(argItem[i]);

							document.forms[0].submit();	
		                }
		             }
		             else {
		             	document.getElementById('lupe2').onclick = function() {

						    sendGor(argItem[i]);	
		                }
		             }

		           
		            closeAllLists();
	            });
	            
	            a.appendChild(b);
	        }
        }    
    });
 
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
	        if (e.keyCode == 40) {
	        
	            currentFocus++;
	       
	            addActive(x);
	        } else if (e.keyCode == 38) {
	       
	            currentFocus--;
	       
	            addActive(x);
	        } else if (e.keyCode == 13) {
	        
	            e.preventDefault();
	        if (currentFocus > -1) {
	          
	            if (x) x[currentFocus].click();
	        }
        }
    });
	function addActive(x) {
	   
	    if (!x) return false;
	    
	    removeActive(x);
	    if (currentFocus >= x.length) currentFocus = 0;
	    if (currentFocus < 0) currentFocus = (x.length - 1);
	    
	    x[currentFocus].classList.add("autocomplete-active");
	}
	function removeActive(x) {
	    
	    for (var i = 0; i < x.length; i++) {
	        x[i].classList.remove("autocomplete-active");
	    }
	}
	function closeAllLists(elmnt) {
	   
	    var x = document.getElementsByClassName("autocomplete-items");
	    for (var i = 0; i < x.length; i++) {
	        if (elmnt != x[i] && elmnt != inp) {
	            x[i].parentNode.removeChild(x[i]);
	        }
	    }
	}
	 
	document.addEventListener("click", function (e) {
	    closeAllLists(e.target);
	});
}

let filename = filenamef();

if (filename == "chose_category.html") {
	autocomplete(document.getElementById("myInput1"), bookArray);
}
else if (filename == "description_of_single_book.html"){
	autocomplete(document.getElementById("myInput3"), bookArray);
}
else{
	autocomplete(document.getElementById("myInput2"), bookArray);
}

//////////////////////////////////////////////////////////////////////////////////