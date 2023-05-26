// plus button java script 
//Code taken and adapted from https://www.w3schools.com/howto/howto_js_popup_form.asp
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

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