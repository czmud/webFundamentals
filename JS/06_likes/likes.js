
let databasePosts = {
    k107: {
        id: 'k107',
        firstName: 'Neil',
        lastName: 'Montgomery',
        likes: 9,
        likesList: ['u107','u590','u445', 'u489', 'u109', 'u811','u812','u813','u529'],
        post: 'I just set up this new discord bot, let me know what you all think. <a href="#">link</a>'
    },
    k128: {
        id: 'k128',
        firstName: 'Nichole',
        lastName: 'Kaylor',
        likes: 12,
        likesList: ['u107','u590','u445', 'u489', 'u109', 'u811','u812','u813','u512','u650','u651','u652'],
        post: 'Just finished my <a href="#">next comic</a>, check it out.'
    },
    k793: {
        id: 'k793',
        firstName: 'Jim',
        lastName: 'Rosales',
        likes: 1,
        likesList: ["u128"],
        post: 'I can\'t stop listening to the <a href="#">new album</a>. Who else is liking it?'
    }
};

let databaseUsers = {
    u107: {
        id: 'u107',
        firstName: 'Neil',
        lastName: 'Montgomery',
    },
    u128: {
        id: 'u128',
        firstName: 'Nichole',
        lastName: 'Kaylor',
    },
    u445: {
        id: 'u445',
        firstName: 'Adrien',
        lastName: 'Decker',
    },
    u447: {
        id: 'u447',
        firstName: 'Anne',
        lastName: 'Jones',
    },
    u451: {
        id: 'u451',
        firstName: 'Alayne',
        lastName: 'Tarnow',
    },
    u473: {
        id: 'u473',
        firstName: 'Arry',
        lastName: 'Yu',
    },
    u793: {
        id: 'u793',
        firstName: 'Jim',
        lastName: 'Rosales',
    },
    u798: {
        id: 'u798',
        firstName: 'Todd',
        lastName: 'Egbert',
    },
    u799: {
        id: 'u799',
        firstName: 'Phil',
        lastName: 'Keller',
    }
};


let isLoggedIn = false;
let currentUser = {};

//JSON filetype 



function likePost(element){
    let idFx = element.parentElement.parentElement.id;
    
    let likeToggle = checkIfAlreadyLiked(idFx);

    if(likeToggle){
        databasePosts[idFx].likesList.pop();//need better method for this command
    }else{
        databasePosts[idFx].likesList.push(currentUser.id);
    }
    databasePosts[idFx].likes = databasePosts[idFx].likesList.length;
    
    formatLikeButton(likeToggle, element);
    populatePost(idFx);
}

function checkIfAlreadyLiked(idFx){
    if(databasePosts[idFx].likesList.includes(currentUser.id)){
        return true;
    }else{
        return false;
    }
}


function populatePost(idFx){
    let elementFx = "";

    elementFx = document.querySelector("#"+idFx+" .profile-name");
    elementFx.innerHTML = databasePosts[idFx].firstName+"&nbsp"+databasePosts[idFx].lastName;

    elementFx = document.querySelector("#"+idFx+" .post-likes");
    elementFx.innerHTML = databasePosts[idFx].likes;
    if(databasePosts[idFx].likes === 1){
        elementFx.innerHTML += "&nbspLike";
    }else{
        elementFx.innerHTML += "&nbspLikes";
    }

    elementFx = document.querySelector("#"+idFx+" .btn");
    formatLikeButton(checkIfAlreadyLiked(idFx), elementFx);
    
    elementFx = document.querySelector("#"+idFx+" .post-text");
    elementFx.innerHTML = databasePosts[idFx].post;
}

function populateUser(idFx){
    let elementFx = "";
    elementFx = document.querySelector("#"+idFx+" .profile-name");
    elementFx.innerHTML = currentUser.firstName+"&nbsp"+currentUser.lastName;
}


//function to toggle login/logout
function loginToggle(element){
    isLoggedIn = !isLoggedIn;
    if(isLoggedIn){
        element.innerText = "Logout";
        document.getElementById("loggedOut").style.zIndex = -1;
        generateCurrentUser();
        populatePost("k107");
        populatePost("k128");
        populatePost("k793");
    }else{
        element.innerText = "Login";
        document.getElementById("loggedOut").style.zIndex = 1;
        currentUser = {};
        resetPage();
    }
}

function generateCurrentUser(){
    currentUser = {
        id: 'u529',
        firstName: 'James',
        lastName: 'Doe',
        photo: 'assets/user-circle.png',
        friendList: []
    }
    populateUser(currentUser.id);
}

function resetPage(){
    let elementFx = "";
    elementFx = document.querySelector("#nav-bar .search-bar");
    elementFx.value = "";
}


function formatLikeButton(likeToggle, element){
    if(likeToggle){
        element.innerHTML = "Liked";
        element.classList.remove("liked-false");
        element.classList.add("liked-true");
    }else{
        element.innerHTML = "Like";
        element.classList.remove("liked-true");
        element.classList.add("liked-false");
    }
}


