//javascript functionality for buttons in button Click assignment


//function to toggle login button to logout once user has signed in
function loginToggle(element){
    element.innerText = "Logout";
}

//function to hide the option to add a definition once user has submitted one
function removeElement(element){
    element.remove();
}