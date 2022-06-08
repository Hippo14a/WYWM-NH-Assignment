/*
    WYWM Web Development Assignment
    Student: Neil Hipkiss
    JavaScript for fetching api data to populate a web page for showing infomration on cat breeds based on user-selections
*/

// variables (api url & key)
const urlCat = "https://api.thecatapi.com/v1/breeds";
const apiKeyHeaderCat = {
    'x-api-key' : 'fe5fca4d-2973-40c0-9def-684748923f8b'
}

// create array to contain api data
let catBreedData = []

// fetch json data from api 
fetch(urlCat, apiKeyHeaderCat)
.then((response) => {
    return response.json();
})
// 
.then((data) => {
    catBreedData = data;
    for (let i = 0; i < catBreedData.length; i++) {
        const breed = catBreedData[i];
        let option = document.createElement('option');      
        // ignore breed if there is no image to display
        if(!breed.image)continue
        // use the current array index for all fields required
        option.value = i;
        //use the name field contents for the dropdown list
        option.innerHTML = `${breed.name}`; // single / double quotes do not work here e.g. '${breed.name}';
        document.getElementById("breed_selector").appendChild(option);
    }
})

.catch(function(error) {
    console.log(error);
});

// Assign IDs to reference in html for displaying contents of fields
function showBreedImage(index){
    document.getElementById("breed_image").src= catBreedData[index].image.url;
    document.getElementById("breed_origin").textContent=catBreedData[index].origin;
    document.getElementById("breed_temperament").textContent=catBreedData[index].temperament;
    document.getElementById("breed_description").textContent=catBreedData[index].description;
    document.getElementById("breed_weight").textContent=catBreedData[index].weight.metric;
    document.getElementById("breed_wikiurl").textContent=catBreedData[index].wikipedia_url
}
