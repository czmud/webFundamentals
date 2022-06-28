
let database = {
    k107: {
        id: k107,
        name: 'Neil M',
        likes: 9,
        post: 'I just set up this new discord bot, let me know what you all think. link'
    },
    k128: {
        id: k128,
        name: 'Nichole K',
        likes: 12,
        post: 'Just finished my next comic, check it out.'
    },
    k793: {
        id: k793,
        name: 'Jim R',
        likes: 1,
        post: 'I can\'t stop listening to the new album. Who else is liking it?'
    }
}

let isLoggedIn = false;
let currentUser = {};
let likeToggle = false;

//JSON filetype 

let postObject = document.querySelector(".profile-name");

let testElement = document.querySelector("#k107 .profile-name");

console.log(testElement);
populate("k107");
populate("k128");
populate("k793");

//populate(postObject);


function likedPost(element){
    let idFx = element.parentElement.parentElement.id;
    
    if(likeToggle){
        database[idFx].likes--;
        element.innerHTML = "Like";
        element.style.backgroundColor = "#15a1b7";
    }else{
        database[idFx].likes++;   
        element.innerHTML = "Liked";
        element.style.backgroundColor = "darkgrey";
    }
    likeToggle = !likeToggle;
    
    populate(idFx);
}


function populate(idFx){
    let elementFx = "";

    elementFx = document.querySelector("#"+idFx+" .profile-name");
    elementFx.innerHTML = database[idFx].name;

    elementFx = document.querySelector("#"+idFx+" .postLikes");
    elementFx.innerHTML = database[idFx].likes;
    if(database[idFx].likes === 1){
        elementFx.innerHTML += "&nbspLike";
    }else{
        elementFx.innerHTML += "&nbspLikes";
    }
    
    elementFx = document.querySelector("#"+idFx+" .postText");
    elementFx.innerHTML = database[idFx].post;
}



//function to toggle login/logout
function loginToggle(element){
    isLoggedIn = !isLoggedIn;
    if(isLoggedIn){
        element.innerText = "Logout";
        document.getElementById("loggedOut").style.zIndex = -1;
        currentUser = {
            id: k529,
            name: "James Doe",
            photo: "assets/user-circle.png",
        }
    }else{
        element.innerText = "Login";
        document.getElementById("loggedOut").style.zIndex = 1;
        currentUser = {};
    }
}


