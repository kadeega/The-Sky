// Today Picture Section
const picTitle = document.getElementById('nasaTitle');
const picExplanation = document.getElementById('nasaExplanation');
const picDate = document.getElementById('nasaDate');
const pic = document.getElementById('imgPicOfTheDay');
const titlePicSection = document.getElementById('titlePicOfTheDay');
const vid = document.getElementById('vidPicOfTheDay');
const vidSrc = document.getElementById('vidPicOfTheDaySrc');
const todayPictureButton = document.querySelector('.pic');
const picOfTheDaySection = document.querySelector('.picOfTheDay');


const countryNotFoundSection = document.querySelector('.countryNotFound');
const homeSection = document.querySelector('.home');
const searchCountryPageSection = document.querySelector('.searchCountryPage');

const APIkey = "DEMO_KEY";
fetch(`https://api.nasa.gov/planetary/apod?api_key=${APIkey}`)
.then(response => response.json())
.then(data => {
    if (data.media_type === "image") {
        pic.src =  data.hdurl;
        pic.style.display = "block";
        vidPicOfTheDay.style.display = "none";
    } else {
        titlePicSection.textContent = "VIDEO OF THE DAY THAT CHOSEN BY NASA";
        vidSrc.src =  data.hdurl;
        vidPicOfTheDay.style.display = "block";
        pic.style.display = "none";
    }
    picTitle.textContent = data.title;
    picExplanation.textContent = data.explanation;
    picDate.textContent = data.date;
});

todayPictureButton.addEventListener('click', () => {
    // if(todayPictureButton.textContent == "Today Picture"){
        picOfTheDaySection.style.display = 'flex';
        countryNotFoundSection.style.display = 'none';
        homeSection.style.display = 'none';
        searchCountryPageSection.style.display = 'none';
        homePageButton.style.display = "block";
        todayPictureButton.style.display = "none";
});


// Today Date
const date = new Date();
let todayDate;

if (date.getMonth() + 1 < 10) {
    todayDate = `${date.getFullYear()}-0${date.getMonth() + 1}`;
} else {
    todayDate = `${date.getFullYear()}-${date.getMonth() + 1}`;
}
if (date.getDate() < 10) {
    todayDate += `-0${date.getDate()}`;
} else {
    todayDate += `-${date.getDate()}`;
}

// Images
const images = {
  "Lunar Eclipse": "/imgs/Lunar Eclipse.png",
  "Solar Eclipse": "/imgs/Solar Eclipse.webp",
  "Perseid Meteor Shower": "/imgs/Perseid Meteor Shower.jpg",
  "Geminid Meteor Shower": "/imgs/Geminid Meteor Shower.jpg",
  "Milky Way": "/imgs/Milky Way.avif",
  "Planetary Conjunction": "/imgs/Planetary Conjunction.jpeg",
  "Supermoon": "/imgs/Supermoon.jpg",
  "Blue Moon": "/imgs/Blue Moon.jpg",
  "Comet Passing": "/imgs/Comet Passing.jpg",
  "Aurora Borealis": "/imgs/Aurora Borealis.jpg"
};


// Cards Content
const todaySection = document.querySelector('.today');
const todayCardsSection = document.querySelector('.todayCards');
let todayArray = todayCardsSection.children;
let todayCardsArray = 0;

const happenedSection = document.querySelector('.alreadyHappened');
const happenedCardsSection = document.querySelector('.alreadyHappenedCards');
let happenedArray = happenedCardsSection.children;
let happenedCardsArray = 0;

const comingSection = document.querySelector('.comingSoon');
const comingCardsSection = document.querySelector('.comingSoonCards');
let comingArray = comingCardsSection.children;
let comingCardsArray = 0;


function today(event){
    todaySection.style.display = 'block';
    todayArray[todayCardsArray].style.display = 'block';
    todayArray[todayCardsArray].querySelector(`#imgTodayCard${todayCardsArray+1}`).src = `${images[event.type]}`;
    todayArray[todayCardsArray].querySelector(`#titleTodayCard${todayCardsArray+1}`).textContent = event.title;
    todayArray[todayCardsArray].querySelector(`#timeTodayCard${todayCardsArray+1}`).textContent = "Time: " + event.time;
    todayArray[todayCardsArray].querySelector(`#durationTodayCard${todayCardsArray+1}`).textContent = "Duration: " + event.duration;
    todayArray[todayCardsArray].querySelector(`#descriptionTodayCard${todayCardsArray+1}`).textContent = "Description: " + event.description;

    todayCardsArray++;
}

function alreadyHappened(event){
    happenedSection.style.display = 'block';
    happenedArray[happenedCardsArray].style.display = 'block';
    happenedArray[happenedCardsArray].querySelector(`#imgalreadyHappenedCard${happenedCardsArray+1}`).src = `${images[event.type]}`;
    happenedArray[happenedCardsArray].querySelector(`#titleAlreadyHappenedCard${happenedCardsArray+1}`).textContent = event.title;
    happenedArray[happenedCardsArray].querySelector(`#dateAlreadyHappenedCard${happenedCardsArray+1}`).textContent = "Date: " +  event.date;
    happenedArray[happenedCardsArray].querySelector(`#timeAlreadyHappenedCard${happenedCardsArray+1}`).textContent = "Time: " + event.time;
    happenedArray[happenedCardsArray].querySelector(`#durationAlreadyHappenedCard${happenedCardsArray+1}`).textContent = "Duration: " + event.duration;
    happenedArray[happenedCardsArray].querySelector(`#descriptionAlreadyHappenedCard${happenedCardsArray+1}`).textContent = "Description: " + event.description;

    happenedCardsArray++;
}

function comingSoon(event){
    comingSection.style.display = 'block';
    comingArray[comingCardsArray].style.display = 'block';
    comingArray[comingCardsArray].querySelector(`#imgComingSoonCard${comingCardsArray+1}`).src = `${images[event.type]}`;
    comingArray[comingCardsArray].querySelector(`#titleComingSoonCard${comingCardsArray+1}`).textContent = event.title;
    comingArray[comingCardsArray].querySelector(`#dateComingSoonCard${comingCardsArray+1}`).textContent = "Date: " + event.date;
    comingArray[comingCardsArray].querySelector(`#timeComingSoonCard${comingCardsArray+1}`).textContent = "Time: " + event.time;
    comingArray[comingCardsArray].querySelector(`#durationComingSoonCard${comingCardsArray+1}`).textContent = "Duration: " + event.duration;
    comingArray[comingCardsArray].querySelector(`#descriptionComingSoonCard${comingCardsArray+1}`).textContent = "Description: " + event.description;

    comingCardsArray++;
}

// All Countries Events
function fetching(){
    fetch("allEvents.json")
   .then(response => response.json())
   .then(data => {
    console.log(data);
    for(let i = 0; i < data.length; i++){
        if (data[i].date == todayDate){
            today(data[i]);
        }
        else if (data[i].date < todayDate){
            alreadyHappened(data[i]);
        }
        else{
            comingSoon(data[i]);
        }
    }
   })
   .catch(error => console.log(error));
};

// Country Search Button
const searchButton = document.querySelector('.searchButton');
const country = document.querySelector('.searchCountryInput');
let countryValue;
let counter = 0;

searchButton.addEventListener('click', () =>{
    countryNotFoundSection.style.display = "none";
    picOfTheDaySection.style.display = "none";

    counter = 0;
    countryValue = country.value.trim();
    todayCardsArray = 0;
    happenedCardsArray = 0;
    comingCardsArray = 0;

    clearAll();

    fetch("allEvents.json")
   .then(response => response.json())
   .then(data => {
    for(let i = 0; i < data.length; i++){
        for(let j =0; j < data[i].countries.length; j++){
            if(data[i].countries[j].toUpperCase() === countryValue.toUpperCase()){
                cards(data[i]);
                searchCountryPageSection.style.display = "none";
                homeSection.style.display = "block";
                todayPictureButton.style.display = "block";
                counter++
            }
        }
    }
    if(counter == 0){
        searchCountryPageSection.style.display = "none";
        home.style.display = "none";
        countryNotFoundSection.style.display = "block";
        homePageButton.style.display = "block";
        todayPictureButton.style.display = "block";
    }
})
  .catch(error => console.log(error));
});

function cards(card){
    if (card.date == todayDate){
        today(card);
    }
    else if (card.date < todayDate){
        alreadyHappened(card);
    }
    else{
        comingSoon(card);
    }
};

function clearAll(){
    todaySection.style.display = 'none';
    comingSection.style.display = 'none';
    happenedSection.style.display = 'none';
    
    for(let i = 0; i < todayArray.length; i++){
    todayArray[i].style.display = "none";
    }
    for(let i = 0; i < happenedArray.length; i++){
        happenedArray[i].style.display = "none";
    }
    for(let i = 0; i < comingArray.length; i++){
        comingArray[i].style.display = "none";
    }
}


// Browse All Button
const browseAll = document.querySelector('.browseAll');
const home = document.querySelector('.home');
browseAll.addEventListener('click', () => {
    searchCountryPageSection.style.display = "none";
    home.style.display = 'block';
    fetching();
    homePageButton.style.display = "block";
    todayPictureButton.style.display = "block";
});
const browseAll2 = document.querySelector('.browseAll2');
browseAll2.addEventListener('click', () => {
    countryNotFoundSection.style.display = 'none';
    home.style.display = 'block';
    fetching();
    homePageButton.style.display = "block";
    todayPictureButton.style.display = "block";
});

// Home Page Button
const homePageButton = document.querySelector('.homePageButton');
homePageButton.addEventListener('click', () => {
    picOfTheDaySection.style.display = 'none';
    countryNotFoundSection.style.display = 'none';
    homeSection.style.display = 'none';
    searchCountryPageSection.style.display = 'block';
    homePageButton.style.display = "none";
    todayPictureButton.style.display = "block";
});

