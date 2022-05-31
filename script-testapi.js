/*
    WYWM Web Development Assignment
    Student: Neil Hipkiss
    JavaScript for a web page to show user-selected images
    
    API TEST version

    TEST

*/

// Test Start

// variables
const apiListUrl = "https://dog.ceo/api/breeds/list/all";
const apiList = document.getElementById("api-list");


// when the page loads
window.addEventListener("load", updateApiList);

// retrieve the list of all public apis from the api
async function getApiList(){
    return fetch(apiListUrl).then(response => response.json());
}

// add api name to dropdown list

function updateApiList(){
    getApiList().then(function(data){
        // get each api name
        for(element in data.message){
            // append to the dropdown list
            let option = createOption(element);
            apiList.appendChild(option);
        }
    })
}

function createOption(text){
    let option = document.createElement("option");
    option.textContent = text;
    return option;
}

// Test End 