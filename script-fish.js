/*
    WYWM Web Development Assignment
    Student: Neil Hipkiss
    JavaScript for a web page to show user-selected images
    
    API TEST version

    FISH

*/

// Fish Start

// variables
const fishListUrl = "https://www.fishwatch.gov/api/species";
const fishSpecies = document.getElementById("fish-list");
// const speciesimage = document.getElementById("Species Illustration Photo");



// when the page loads
window.addEventListener("load", updateFishList);

// retrieve the list of all species from the api
async function getFishList(){
    return fetch(fishListUrl).then(response => response.json());
}

// also retrieve the image for each species


// add species to dropdown list
function updateFishList(){
    getFishList().then(function(fishData){
        // get each fish name
        for(element in fishData.message){
            // append to the dropdown list
            let fishOption = createFishOption(element)
            fishSpecies.appendChild(fishOption);
        }

    })
}

function createFishOption(fishText){
    let fishOption = document.createFishElement("fishOption");
    fishOption.textContenxt = fishText;
    return fishOption;
}

// Fish End 