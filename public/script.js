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


// arrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
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


movieForm.addEventListener('submit', function (event) {
    event.preventDefault();
    modal.close();
    addMovie(
        movieForm.elements.movieName.value,
        movieForm.elements.movieName.value,
        movieForm.elements.movieDuration.value,
        movieForm.elements.movieGenre.value,
        movieForm.elements.movieRating.value,
        movieForm.elements.movieEmojiReview.value,
        movieForm.elements.movieWrittenReview.value
    );

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

})

class Movie {
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


class Tv extends Movie {
    constructor(name, episode, season, duration, genre, rating, emojiReview, writtenReview,) {
        super(name, duration, genre, rating, emojiReview, writtenReview);
        this.episode = episode;
        this.season = season;
    }
}

var media = [];

function addMovie(Name, name, duration, genre, rating, emojiReview, writtenReview) {
    Name = new Movie(name, duration, genre, rating, emojiReview, writtenReview);
    media.push(Name);
    updateTimeWatched(duration);
    displaymedia(Name);
    console.log(Name);
    console.log(media);
}
function addTv(Name, name, episode, season, duration, genre, rating, emojiReview, writtenReview) {
    Name = new Tv(name, episode, season, duration, genre, rating, emojiReview, writtenReview);
    media.push(Name);
    updateTimeWatched(duration);
    displaymedia(Name);
    console.log(Name);
    console.log(media);
}

function displaymedia(media) {
    let item = document.createElement('button');
    item.setAttribute('id', 'description');

if (media instanceof Tv) {
    item.innerHTML = `<p> ${media.name} </p><p> ${media.episode}</p><p> ${media.season} </p><p> ${media.duration}</p><p> ${media.genre} </p><p> ${media.rating} </p><p> ${media.emojiReview} </p><p> ${media.writtenReview}</p>`;
    genreloop(media.genre, item);
    deleteItem(item, media);
    tvForm.reset();
}
    else if (media instanceof Movie) {
        item.innerHTML = `<p> ${media.name} </p><p> ${media.duration}</p><p> ${media.genre} </p><p> ${media.rating} </p><p> ${media.emojiReview} </p><p> ${media.writtenReview}</p>`;
        genreloop(media.genre, item);
        deleteItem(item, media);
        movieForm.reset();
    }
}


function deleteItem(item, media) {
    let delButton = document.createElement('button');
    let delButtonText = document.createTextNode('Delete');
    delButton.appendChild(delButtonText);
    item.appendChild(delButton);
    delButton.addEventListener('click', function (event) {
        item.remove();
        updateTimeDelete(media.duration);
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

let totalTime = 0;
function updateTimeWatched(duration){
    totalTime = Number(totalTime) + Number(duration);
    var hours = (totalTime / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    document.getElementById("totalTime").innerHTML = 'Total Time Watched: ' + rhours + ' Hours' + ' and ' + rminutes + ' Minutes';
}


function updateTimeDelete(duration){
    totalTime = Number(totalTime) - Number(duration);
    var hours = (totalTime / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    document.getElementById("totalTime").innerHTML = 'Total Time Watched: ' + rhours + ' Hours' + ' and ' + rminutes + ' Minutes';
}