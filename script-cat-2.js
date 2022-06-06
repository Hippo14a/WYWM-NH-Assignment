/*
    WYWM Web Development Assignment
    Student: Neil Hipkiss
    JavaScript for fetching api data to populate a web page to show user-selected images

    CAT

*/

// Cat Start

// variables (api url & key)
const urlCat = "https://api.thecatapi.com/v1/breeds";
const apiKeyHeaderCat = {
    'x-api-key' : 'fe5fca4d-2973-40c0-9def-684748923f8b'
}


// fetch json data from api 
fetch(urlCat, apiKeyHeaderCat)
.then((response) => {
    return response.json();
})
// 
.then((data) => {
    let breeds = data;
    for (let i = 0; i < breeds.length; i++) {
        const breed = breeds[i];
        let option = document.createElement('option');      
        // ignore breed if there is no image to display
        if(!breed.image)continue
        // link the image url to breed name for the selection box
        option.value = `${breed.image.url}` // single / double quotes do not work here e.g. '${breed.image.url}';
        option.innerHTML = `${breed.name}` // single / double quotes do not work here e.g. '${breed.name}';
        document.getElementById("breed_selector").appendChild(option);
    }
})

.catch(function(error) {
    console.log(error);
});

function showBreedImage(urlCat)
{ document.getElementById("breed_image").src= urlCat;
}

/* Code based on WYWM tutorial
// when the page loads
window.addEventListener("load", updateBreedList);

// retrieve the list of all breeds from the api
async function getBreedList(){
    return fetch(breedListUrl, apiKeyHeader).then(response => response.json());
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
*/

// Cat End 