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
})

// arrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
// get the data from the movie-form and display it on the page

const movieForm = document.getElementById('movieForm');
const tvForm = document.getElementById('tvForm');
const tasklistElem = document.querySelector('.comedy-container');

movieForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
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
tvForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
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

class Movie{
    constructor(name, duration, genre, rating, emojiReview, writtenReview){
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

  class Tv extends Movie{
    constructor(name, episode, season, duration, genre, rating, emojiReview, writtenReview,){
        super(name, duration, genre, rating, emojiReview, writtenReview);
        this.episode = episode;
        this.season = season;
    }
  }

  var media = [];

  function addMovie(Name, name, duration, genre, rating, emojiReview, writtenReview){
     Name = new Movie(name, duration, genre, rating, emojiReview, writtenReview);
     media.push(Name);
     displaymedia(Name);
        console.log(Name);
        console.log(media);
    }

    function addTv(Name, name, episode, season, duration, genre, rating, emojiReview, writtenReview){
        Name = new Tv(name, episode, season, duration, genre, rating, emojiReview, writtenReview);
        media.push(Name);
        displaymedia(Name);
            console.log(Name);
            console.log(media);
    }

    function displaymedia(media) {
        let item = document.createElement('button');
        if (media instanceof Tv){
            item.innerHTML = `<p> ${media.name} </p><p> ${media.episode}</p><p> ${media.season} </p><p> ${media.duration}</p>p> ${media.genre} </p><p> ${media.rating} </p><p> ${media.emojiReview} </p><p> ${media.writtenReview}</p>`;
        tasklistElem.appendChild(item);        
        tvForm.reset();
      }
        else if (media instanceof Movie){
            item.innerHTML = `<p> ${media.name} </p><p> ${media.duration}</p>p> ${media.genre} </p><p> ${media.rating} </p><p> ${media.emojiReview} </p><p> ${media.writtenReview}</p>`;
        tasklistElem.appendChild(item);
        movieForm.reset();
        }
        
    }