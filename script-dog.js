/*
    WYWM Web Development Assignment
    Student: Neil Hipkiss
    JavaScript for a web page to show user-selected images
    
    API TEST version

    DOG

*/

// Dog Start

// variables
const breedListUrl = "https://dog.ceo/api/breeds/list/all";
const breedList = document.getElementById("breed-list");

// const breedImage = document.getElementById("Breed Illustration Photo");



// when the page loads
window.addEventListener("load", updateBreedList);

// retrieve the list of all breeds from the api
async function getBreedList(){
    return fetch(breedListUrl).then(response => response.json());
}

// also retrieve the image for each breed


// add breed to dropdown list
function updateBreedList(){
    getBreedList().then(function(data){
        // get each breed name
        for(element in data.message){
            // append to the dropdown list
            let option = createOption(element);
            breedList.appendChild(option);
        }
    })
}

function createOption(text){
    let option = document.createElement("option");
    option.textContent = text;
    return option;
}

// Dog End 