function load() {
    let defaultSelectedOptions = document.getElementsByClassName('selected');
    let inputFields = document.querySelectorAll('input');
    let done = document.getElementById('done')
    done.disabled = true;
    document.getElementById('bookDescription').value = '';
    Array.prototype.forEach.call(defaultSelectedOptions, function (el) {
        el.selected = true;
    });
    Array.prototype.forEach.call(inputFields, function (el) {
        if (el.type == 'text' || el.type == 'file') {
            el.value = '';
        }
    });

}

function selectCategory() {
    let categoryChoise = document.getElementById('cat');
    if (categoryChoise.value == 'armliter' || categoryChoise.value == 'rus') {
        document.getElementById('subCatArmRus').hidden = false;
        categoryChoise.disabled = true;
    }
    else if (categoryChoise.value == 'international') {
        document.getElementById('subCatInternational').hidden = false;
        categoryChoise.disabled = true;
    }
    else if (categoryChoise.value == 'masnagitakan') {
        document.getElementById('subCatMasnagitakan').hidden = false;
        categoryChoise.disabled = true;
    }
    else if (categoryChoise.value == 'mankakan') {
        document.getElementById('subCatMankakan').hidden = false;
        categoryChoise.disabled = true;
    }
    else if (categoryChoise.value == 'texekatu') {
        document.getElementById('subCatTexekatu').hidden = false;
        categoryChoise.disabled = true;
    }
}


(function () {
    let uploader = document.getElementById('uploader');
    let fileButton = document.getElementById('browse');
    let status = document.getElementById('status')
    let done = document.getElementById('done')

    fileButton.addEventListener('change', function (e) {
        let file = e.target.files[0];

        let storageRef = firebase.storage().ref().child('media').child(file.name);

        let task = storageRef.put(file);

        task.on('state_changed',
            function progress(snap) {
                let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
                uploader.value = percentage;
                status.innerHTML = Math.round(percentage) + ' %';
                if (percentage == 100) {
                    done.disabled = false;
                }
            }),
            function error(err) {
                console.log(err)
            },
            function complete() {
            }
    });
}());

function establishCategory(arg) {
    let temp;
    switch (arg) {
        case 'armliter': temp = document.getElementById('subCatArmRus').value;
            break;
        case 'rus': temp = document.getElementById('subCatArmRus').value;
            break;
        case 'international': temp = document.getElementById('subCatInternational').value;
            break;
        case 'masnagitakan': temp = document.getElementById('subCatMasnagitakan').value;
            break;
        case 'mankakan': temp = document.getElementById('subCatMankakan').value;
            break;
        case 'texekatu': temp = document.getElementById('subCatTexekatu').value;
            break;
    }
    return temp;
}

function writeBookData() {
    let category = document.getElementById('cat').value;
    let subCategory = establishCategory(category);
    let authorEnInput = document.getElementById('authorEn').value;
    let authorHyInput = document.getElementById('authorHy').value;
    let bookEnInput = document.getElementById('bookEn').value;
    let bookHyInput = document.getElementById('bookHy').value;
    let bookCount = document.getElementById('count').value;
    let bookGenre = document.getElementById('genre').value;
    let bookDescription = document.getElementById('bookDescription').value;
    let bookImg = document.getElementById('browse').files.item(0).name;

    firebase.database().ref('book_and_author').child(category).child(subCategory).child(authorEnInput).update({
        
            author: authorHyInput,
            [bookEnInput]: {
                authorname: authorHyInput,
                book_count: bookCount,
                bookname: bookHyInput,
                description: bookDescription,
                genre: bookGenre,
                img: bookImg
            }
        
    });
    alert('Success!');
    location.reload();
}
