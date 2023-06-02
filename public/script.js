// plus button java script 
//Code taken and adapted from https://www.w3schools.com/howto/howto_js_popup_form.asp

const openButton = document.querySelector("[popUpButton]")
const closeButton = document.querySelector("[closeButton]")
const modal = document.querySelector(".form-popup")

openButton.addEventListener('click', () => {
    modal.showModal();
});

closeButton.addEventListener('click', () => {
    modal.close();
});

//tab java script
//Code taken and adapted from https://codepen.io/wanderingwind/pen/rNNwgxe

// Creating the constant variables for the tabs and tab content pages.
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

//Create a forEach loop to go through each of the tabs and check if they've been clicked
tabs.forEach(tab => {
    tab.addEventListener('click', () => {

        //If the tab has been clicked we'll find what the target was first
        const target = document.querySelector(tab.dataset.tabTarget)

        //Remove active class from all tabs and tab contents
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        //Add active class to the tab which has been clicked and it's relevent page content
        tab.classList.add('active')
        target.classList.add('active')
    })
    //If the tab has been clicked we'll find what the target was first
    const target = document.querySelector(tab.dataset.tabTarget)

    //Remove active class from all tabs and tab contents
    tabContents.forEach(tabContent => {
        tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
        tab.classList.remove('active')
    })
    //Add active class to the tab which has been clicked and it's relevent page content
    tab.classList.add('active')
    target.classList.add('active')
})


// get the data from the movie-form and display it on the page
const movieForm = document.getElementById('movieForm');
const tvForm = document.getElementById('tvForm');
const tasklistElem = document.querySelector('.comedy-container');
const tasklistElem1 = document.querySelector('.action-container');
const tasklistElem2 = document.querySelector('.thriller-container');
const tasklistElem3 = document.querySelector('.horror-container');
const tasklistElem4 = document.querySelector('.romance-container');
const tasklistElem5 = document.querySelector('.other-container');
const timeUpdate = document.querySelector('.header');

// setting up the page when it first loads
createStorage();
displaymedia();

// create the local storage
function createStorage() {
    let storedMedia = JSON.parse(localStorage.getItem('storedMedia'));
    if (storedMedia == null) {
        storedMedia = []
    }
    localStorage.setItem('storedMedia', JSON.stringify(storedMedia));
}
    

// partent class 
class Media {
    constructor(name, duration, genre, rating, emojiReview, writtenReview) {
        this.name = name;
        this.duration = duration;
        this.genre = genre;
        this.rating = rating;
        this.emojiReview = emojiReview;
        this.writtenReview = writtenReview;
        this.date = new Date().toISOString();
        this.ID = Date.now();
    }

}

// movie child class 
class Movie extends Media {
    constructor(name, director, duration, genre, rating, emojiReview, writtenReview) {
        super(name, duration, genre, rating, emojiReview, writtenReview);
        this.media = 'movie';
        this.director = director;
    }

}

// tv child class 
class Tv extends Media {
    constructor(name, episode, season, duration, genre, rating, emojiReview, writtenReview,) {
        super(name, duration, genre, rating, emojiReview, writtenReview);
        this.media = 'tv';
        this.episode = episode;
        this.season = season;
    }
}

// adding movie items to the page
movieForm.addEventListener('submit', function (event) {
    event.preventDefault();
    modal.close();
    addMovie(
        movieForm.elements.movieName.value,
        movieForm.elements.movieName.value,
        movieForm.elements.movieDirector.value,
        movieForm.elements.movieDuration.value,
        movieForm.elements.movieGenre.value,
        movieForm.elements.movieRating.value,
        emojiReview(document.getElementById("movieEmojiReview1"),
        document.getElementById("movieEmojiReview2"), 
        document.getElementById("movieEmojiReview3"),
        document.getElementById("movieEmojiReview4")),
        movieForm.elements.movieWrittenReview.value
    );
    movieForm.reset();

})
// adding tv items to the page
tvForm.addEventListener('submit', function (event) {
    event.preventDefault();
    modal.close();
    addTv(
        tvForm.elements.tvName.value,
        tvForm.elements.tvName.value,
        tvForm.elements.tvEpisode.value,
        tvForm.elements.tvSeason.value,
        tvForm.elements.tvDuration.value,
        tvForm.elements.tvGenre.value,
        tvForm.elements.tvRating.value,
        emojiReview(document.getElementById("tvEmojiReview1"),
        document.getElementById("tvEmojiReview2"), 
        document.getElementById("tvEmojiReview3"),
        document.getElementById("tvEmojiReview4")),
        tvForm.elements.tvWrittenReview.value
    );
    tvForm.reset();


})

// getting the emoji review by seeing what has been checked and adding them to a string to be displayed
function emojiReview(emoji1, emoji2, emoji3, emoji4) {
    let string = '';
    if(emoji1.checked == true) {
        string = string + emoji1.value + ' ';
    }if(emoji2.checked == true) {
        string = string + emoji2.value + ' ';
    }if(emoji3.checked == true) {
        string = string + emoji3.value + ' ';
    }if(emoji4.checked == true) {
        string = string + emoji4.value + ' ';
    }
    return string;
}

// code taken and adapted from https://vyspiansky.github.io/2019/07/13/javascript-at-least-one-checkbox-must-be-selected/
(function() {
    const form = document.querySelector('#movieForm');
    const checkboxes = form.querySelectorAll('input[type=checkbox]');
    const checkboxLength = checkboxes.length;
    const firstCheckbox = checkboxLength > 0 ? checkboxes[0] : null;

    
    function init() {
        // changing the state of the check box to be either required or not required
        if (firstCheckbox) {
            for (let i = 0; i < checkboxLength; i++) {
                checkboxes[i].addEventListener('change', checkValidity);
            }

            checkValidity();
        }
    }

    // looping through all the checkboxes and checking if they have been checked
    function isChecked() {
        for (let i = 0; i < checkboxLength; i++) {
            if (checkboxes[i].checked) return true;
        }

        return false;
    }
    // if the checkbox has not been checked then an error message will be displayed
    function checkValidity() {
        const errorMessage = !isChecked() ? 'At least one checkbox must be selected.' : '';
        firstCheckbox.setCustomValidity(errorMessage);
    }

    init();
})();
(function() {
    const form = document.querySelector('#tvForm');
    const checkboxes = form.querySelectorAll('input[type=checkbox]');
    const checkboxLength = checkboxes.length;
    const firstCheckbox = checkboxLength > 0 ? checkboxes[0] : null;

    function init() {
            // changing the state of the check box to be either required or not required
        if (firstCheckbox) {
            for (let i = 0; i < checkboxLength; i++) {
                checkboxes[i].addEventListener('change', checkValidity);
            }

            checkValidity();
        }
    }
    // looping through all the checkboxes and checking if they have been checked
    function isChecked() {
        for (let i = 0; i < checkboxLength; i++) {
            if (checkboxes[i].checked) return true;
        }

        return false;
    }
    // if the checkbox has not been checked then an error message will be displayed
    function checkValidity() {
        const errorMessage = !isChecked() ? 'At least one checkbox must be selected.' : '';
        firstCheckbox.setCustomValidity(errorMessage);
    }

    init();
})();



// adding and storeing movie to the page
function addMovie(Name, name, director, duration, genre, rating, emojiReview, writtenReview) {
    Name = new Movie(name, director, duration, genre, rating, emojiReview, writtenReview);
    storeMedia(Name);
    console.log(Name);
    displaymedia();
}

// adding and storeing tv to the page
function addTv(Name, name, episode, season, duration, genre, rating, emojiReview, writtenReview) {
    Name = new Tv(name, episode, season, duration, genre, rating, emojiReview, writtenReview);
    storeMedia(Name);
    console.log(Name);
    displaymedia();
}

// storing the media in local storage
function storeMedia(film) {
    let storedMedia = JSON.parse(localStorage.getItem('storedMedia'));

    if (storedMedia == null) {
        // Set a new value for storeMedia in localStorage
        storedMedia = [film]
    } else {
        // Check to see if film exists in localStorage for the movie 
        if(film.media == 'movie') {
        if (storedMedia.find(element => element.name === film.name && element.director === film.director)) {
            console.log('film already exists')
            alert("Movie has already been added");

        } 
        // Check to see if film exists in localStorage for the movie
        else {
            storedMedia.push(film)
        }} else if(film.media == 'tv') {
            if (storedMedia.find(element => element.name === film.name && element.season === film.season && element.episode === film.episode)) {
                console.log('film already exists')
                alert("TV show has already been added");
    
            } else {
                storedMedia.push(film)
            }
        }
    }
    localStorage.setItem('storedMedia', JSON.stringify(storedMedia))

    console.log(JSON.parse(localStorage.getItem('storedMedia')))
}


function displaymedia() {
    // crearing all the genre conatiner 
    tasklistElem.innerHTML = '';
    tasklistElem1.innerHTML = '';
    tasklistElem2.innerHTML = '';
    tasklistElem3.innerHTML = '';
    tasklistElem4.innerHTML = '';
    tasklistElem5.innerHTML = '';

    // updating the time watched
    updateTimeWatched();

    let storedMedia = JSON.parse(localStorage.getItem('storedMedia'));

    // creating all the media items
    if (storedMedia !== null) {
        storedMedia.forEach((film) => {
            createmedia(film);
        })
    }
}


function createmedia(media) {
    // creating the items button
    let item = document.createElement('button');
    item.setAttribute('id', 'media-button');

    // creating the items modal
    let itemModal = document.createElement('dialog');
    itemModal.setAttribute('class', 'itemModal');

    // finding out what genre the button is and adding it to the correct container
    genreloop(media.genre, itemModal)

    // adding the delete button to the modal
    deleteItem(itemModal, media, item);


    // displaying the media on the modal 
    if (media.media == 'tv') {
        item.innerHTML = `<h1>${media.name}</h1>`;
        itemModal.innerHTML = `<h1>${media.name}</h1>
        <p><b>Season:</b> ${media.season}</p>
        <p><b>Episode:</b> ${media.episode}</p>
        <p><b>Duration:</b> ${media.duration} minutes</p>
        <p><b>Genre:</b> ${media.genre}</p>
        <p><b>Rating:</b> ${media.rating}/5</p>
        <p>${media.emojiReview}</p>
        <p><b>Review</b></p>
        <p>${media.writtenReview}</p>
        <button class=closeMedia>X</button>`;
        let closeMedia = itemModal.querySelector('.closeMedia');
        
        // finding out what genre the modal is and adding it to the correct container
        genreloop(media.genre, item);
        deleteItem(itemModal, media, item);

    //  adding the event listeners to the button and the close button
        item.addEventListener('click', () => {
            itemModal.showModal();
        });
        closeMedia.addEventListener('click', () => {
            itemModal.close();
        });

    } else if (media.media == 'movie') {
        // displaying the media on the modal
        item.innerHTML = `<h1> ${media.name}</h1>`;
        itemModal.innerHTML = `<h1> ${media.name}</h1>
        <p><b>Director/s:</b> ${media.director}</p>
        <p><b>Duration:</b> ${media.duration} minutes</p>
        <p><b>Genre:</b> ${media.genre} </p>
        <p><b>Rating:</b> ${media.rating}/5 </p>
        <p> ${media.emojiReview}</p>
        <p><b>Review:</b></p>
        <p>${media.writtenReview}</p>
        <button class="closeMedia">X</button>`;
        let closeMedia = itemModal.querySelector('.closeMedia');

        // finding out what genre the modal is and adding it to the correct container
        genreloop(media.genre, item);
        deleteItem(itemModal, media, item);

        //  adding the event listeners to the button and the close button
        item.addEventListener('click', () => {
            itemModal.showModal();
        });
        closeMedia.addEventListener('click', () => {
            itemModal.close();
        });

    }
}


// adding the delet button to each modal 
function deleteItem(itemModal, media, item) {
    // creating the button
    let delButton = document.createElement('button');
    delButton.setAttribute('class', 'deleteButton');
    let delButtonText = document.createTextNode('Delete');

    // adding the button to the modal
    delButton.appendChild(delButtonText);
    itemModal.appendChild(delButton);

    // finding the correct item to delete and deleting it
    delButton.addEventListener('click', function (event) {
        let storedMedia = JSON.parse(localStorage.getItem('storedMedia'));
        for (i = 0; i < storedMedia.length; i++) {
            if (storedMedia[i].name === media.name && storedMedia[i].director === media.director) {
                // removing the item from local storage
                storedMedia.splice(i, 1);
                localStorage.setItem('storedMedia', JSON.stringify(storedMedia))
                // removing the item modle from the page
                itemModal.remove();
                // removing the item button from the page
                item.remove();
                // updating the time watched
                updateTimeWatched();
            }
        }
    })
}

// looping through the genre and adding the modal to the correct container
function genreloop(genre, item) {
    if (genre == "Comedy") {
        tasklistElem.appendChild(item);
    } else if (genre == "Action") {
        tasklistElem1.appendChild(item);
    } else if (genre == "Thriller") {
        tasklistElem2.appendChild(item);
    } else if (genre == "Horror") {
        tasklistElem3.appendChild(item);
    } else if (genre == "Romance") {
        tasklistElem4.appendChild(item);
    } else {
        tasklistElem5.appendChild(item);
    }
}

// time watched java 
// Code taken and adapted from https://www.w3resource.com/javascript-exercises/javascript-date-exercise-13.php#:~:text=JavaScript%20Code%3A,log(timeConvert(200))%3B

function updateTimeWatched() {
    // setting up the variables
    let totalTime = 0;

    let storedMedia = JSON.parse(localStorage.getItem('storedMedia'));
    // if there is no media in local storage then the time watched will be 0
    if (storedMedia.length == null) {

        var rhours = 0;
        var rminutes = 0;
    } else {
        // looping through all the media and adding the duration to the total time
        for (i = 0; i < storedMedia.length; i++) {
            totalTime = Number(totalTime) + Number(storedMedia[i].duration);
        }

        var hours = (totalTime / 60);
        var rhours = Math.floor(hours);
        var minutes = (hours - rhours) * 60;
        var rminutes = Math.round(minutes);
    }
    // displaying the time watched
    document.getElementById("totalTime").innerHTML = `<h2>Total Time Watched:</h2><br><h1>${rhours} Hours and ${rminutes} Minutes</h1>`;
}

