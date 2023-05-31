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
// checking to see if a check box has been checked


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


displaymedia();
updateTimeWatched();


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
        movieForm.elements.movieEmojiReview.value,
        movieForm.elements.movieWrittenReview.value
    );
    movieForm.reset();

})
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
        tvForm.elements.tvEmojiReview.value,
        tvForm.elements.tvWrittenReview.value
    );
    tvForm.reset();


})

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

class Movie extends Media {
    constructor(name, director, duration, genre, rating, emojiReview, writtenReview) {
        super(name, duration, genre, rating, emojiReview, writtenReview);
        this.media = 'movie';
        this.director = director;
    }

}


class Tv extends Media {
    constructor(name, episode, season, duration, genre, rating, emojiReview, writtenReview,) {
        super(name, duration, genre, rating, emojiReview, writtenReview);
        this.media = 'tv';
        this.episode = episode;
        this.season = season;
    }
}



function addMovie(Name, name, director, duration, genre, rating, emojiReview, writtenReview) {
    Name = new Movie(name, director, duration, genre, rating, emojiReview, writtenReview);
    storeMedia(Name);
    console.log(Name);
    displaymedia();
}
function addTv(Name, name, episode, season, duration, genre, rating, emojiReview, writtenReview) {
    Name = new Tv(name, episode, season, duration, genre, rating, emojiReview, writtenReview);
    storeMedia(Name);
    console.log(Name);
    displaymedia();
}



function displaymedia() {
    tasklistElem.innerHTML = '';
    tasklistElem1.innerHTML = '';
    tasklistElem2.innerHTML = '';
    tasklistElem3.innerHTML = '';
    tasklistElem4.innerHTML = '';
    tasklistElem5.innerHTML = '';
    updateTimeWatched();

    let storedMedia = JSON.parse(localStorage.getItem('storedMedia'));

    if (storedMedia !== null) {
        storedMedia.forEach((film) => {
            createmedia(film);
        })
    }
}

// function createmedia(media) {
//     let item = document.createElement('button');
//     item.setAttribute('id', 'description');
//         item.innerHTML = `<p>${media.name} </p><p> ${media.duration}</p><p> ${media.genre} </p><p> ${media.rating} </p><p> ${media.emojiReview} </p><p> ${media.writtenReview}</p>`;
//         genreloop(media.genre, item);
//         deleteItem(item, media);

//     }

function createmedia(media) {
    let item = document.createElement('button');
    item.setAttribute('id', 'description');
    if (media.media == 'tv') {
        item.innerHTML = `<p> ${media.name} </p><p> ${media.episode}</p><p> ${media.season} </p><p> ${media.duration}</p><p> ${media.genre} </p><p> ${media.rating} </p><p> ${media.emojiReview} </p><p> ${media.writtenReview}</p>`;
        genreloop(media.genre, item);
        deleteItem(item, media);
    } else if (media.media == 'movie') {
        item.innerHTML = `<p>${media.name} </p><p> ${media.director} </p><p> ${media.duration}</p><p> ${media.genre} </p><p> ${media.rating} </p><p> ${media.emojiReview} </p><p> ${media.writtenReview}</p>`;
        genreloop(media.genre, item);
        deleteItem(item, media);

    }
}

function storeMedia(film) {
    let storedMedia = JSON.parse(localStorage.getItem('storedMedia'));

    if (storedMedia == null) {
        // Set a new value for storeMedia in localStorage
        storedMedia = [film]
    } else {
        // Check to see if film exists in localStorage
        if (storedMedia.find(element => element.name === film.name && element.director === film.director)) {
            console.log('film already exists')
        } else {
            storedMedia.push(film)
        }
    }
    localStorage.setItem('storedMedia', JSON.stringify(storedMedia))

    console.log(JSON.parse(localStorage.getItem('storedMedia')))
}

function deleteItem(item, media) {
    let delButton = document.createElement('button');
    let delButtonText = document.createTextNode('Delete');
    delButton.appendChild(delButtonText);
    item.appendChild(delButton);
    delButton.addEventListener('click', function (event) {
        let storedMedia = JSON.parse(localStorage.getItem('storedMedia'));

        for (i = 0; i < storedMedia.length; i++) {
            if (storedMedia[i].name === media.name && storedMedia[i].director === media.director) {
                storedMedia.splice(i, 1);
                localStorage.setItem('storedMedia', JSON.stringify(storedMedia))
                item.remove();
                updateTimeWatched();
            }
        }
    })
}


function genreloop(genre, item) {
    if (genre == "comedy") {
        tasklistElem.appendChild(item);
    } else if (genre == "action") {
        tasklistElem1.appendChild(item);
    } else if (genre == "thriller") {
        tasklistElem2.appendChild(item);
    } else if (genre == "horror") {
        tasklistElem3.appendChild(item);
    } else if (genre == "romance") {
        tasklistElem4.appendChild(item);
    } else {
        tasklistElem5.appendChild(item);
    }
}

// time watched java 
// Code taken and adapted from https://www.w3resource.com/javascript-exercises/javascript-date-exercise-13.php#:~:text=JavaScript%20Code%3A,log(timeConvert(200))%3B


function updateTimeWatched() {
    let totalTime = 0;
    let storedMedia = JSON.parse(localStorage.getItem('storedMedia'));
    if (storedMedia.length == null) {
        var rhours = 0;
        var rminutes = 0;
    } else {
        for (i = 0; i < storedMedia.length; i++) {
            totalTime = Number(totalTime) + Number(storedMedia[i].duration);
        }

        var hours = (totalTime / 60);
        var rhours = Math.floor(hours);
        var minutes = (hours - rhours) * 60;
        var rminutes = Math.round(minutes);
    }
    document.getElementById("totalTime").innerHTML = 'Total Time Watched: ' + rhours + ' Hours' + ' and ' + rminutes + ' Minutes';
}

