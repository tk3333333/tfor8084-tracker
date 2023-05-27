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

const form = document.getElementById('movieForm');
const tasklistElem = document.querySelector('.comedy-container');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    // console.log(form.elements.movieName.value);
    addMovie(
        form.elements.movieName.value,
        form.elements.movieName.value,
        form.elements.movieDuration.value,
        form.elements.movieGenre.value,
        form.elements.movieRating.value,
        form.elements.movieEmojiReview.value,
        form.elements.movieWrittenReview.value
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

  var media = [];

  function addMovie(Name, name, duration, genre, rating, emojiReview, writtenReview){
     Name = new Movie(name, duration, genre, rating, emojiReview, writtenReview);
     media.push(Name);
     displaymedia(Name);
        console.log(Name);
        console.log(media);
    }

    function displaymedia(media) {
        let item = document.createElement('button');
        item.innerHTML = `<p> ${media.name} </p><br><br> <p> ${media.duration} </p><br><br> <p> ${media.genre} </p><br><br> <p> ${media.rating} </p><br><br> <p> ${media.emojiReview} </p><br><br> <p> ${media.writtenReview} </p><br><br> <p> ${media.date} </p><br><br> <p> ${media.ID} </p>`;
        tasklistElem.appendChild(item);
        form.reset();
      }
        