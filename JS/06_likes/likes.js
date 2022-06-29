
//dummy JSON-like database with all post objects
let databasePosts = {
    p107: {
        id: 'p107',
        userId: 'u107',
        likes: 9,
        likesList: ['u107','u590','u445', 'u489', 'u109', 'u811','u812','u813','u529'],
        post: 'I just set up this new discord bot, let me know what you all think. <a href="#">link</a>'
    },
    p128: {
        id: 'p128',
        userId: 'u128',
        likes: 12,
        likesList: ['u107','u590','u445', 'u489', 'u109', 'u811','u812','u813','u512','u650','u651','u652'],
        post: 'Just finished my <a href="#">next comic</a>, check it out.'
    },
    p307: {
        id: 'p307',
        userId: 'u529',
        likes: 1,
        likesList: ["u128"],
        post: 'Anyone know how to parse data from JSON files?'
    },
    p793: {
        id: 'p793',
        userId: 'u793',
        likes: 1,
        likesList: ["u128"],
        post: 'I can\'t stop listening to the <a href="#">new album</a>. Who else is liking it?'
    }
}

//dummy JSON-like database with all user objects
let databaseUsers = {
    u107: {
        id: 'u107',
        firstName: 'Neil',
        lastName: 'Montgomery',
        profilePicture: 'assets/neil-m.png',
        postList: ['p107']
    },
    u128: {
        id: 'u128',
        firstName: 'Nichole',
        lastName: 'Kaylor',
        profilePicture: 'assets/nichole-k.png',
        postList: ['p128']
    },
    u445: {
        id: 'u445',
        firstName: 'Adrien',
        lastName: 'Decker',
        profilePicture: 'assets/adrien-s.jpg'
    },
    u447: {
        id: 'u447',
        firstName: 'Anne',
        lastName: 'Jones',
        profilePicture: 'assets/anne-s.jpg'
    },
    u451: {
        id: 'u451',
        firstName: 'Alayne',
        lastName: 'Tarnow',
        profilePicture: 'assets/alayne-s.jpg'
    },
    u473: {
        id: 'u473',
        firstName: 'Arry',
        lastName: 'Yeun',
        profilePicture: 'assets/arry-s.jpg'
    },
    //hardcoded u529 as primary user;
    u529: {
        id: 'u529',
        firstName: 'Jane',
        lastName: 'Doe',
        profilePicture: 'assets/jane-m.jpg',
        postList: ['p307'],
        friendCount: 357,
        friendList: ['u107', 'u128', 'u445', 'u447', 'u451', 'u473', 'u793'],
        friendRequestList: ['u798', 'u799']
    },
    u793: {
        id: 'u793',
        firstName: 'Jim',
        lastName: 'Rosales',
        profilePicture: 'assets/jim-r.png',
        postList: ['p793']
    },
    u798: {
        id: 'u798',
        firstName: 'Todd',
        lastName: 'Egbert',
        profilePicture: 'assets/todd-s.jpg'
    },
    u799: {
        id: 'u799',
        firstName: 'Phil',
        lastName: 'Keller',
        profilePicture: 'assets/phil-s.jpg'
    }
}

//global variabels for managing current user sign-in
let isLoggedIn = false;
let currentUser = {};

//functions to manage login process
function loginToggle(element){
    //function to toggle login/logout
    isLoggedIn = !isLoggedIn;
    if(isLoggedIn){
        element.innerText = "Logout";
        document.getElementById("loggedOut").style.zIndex = -1;
        generateCurrentUser("u529");
        populatePost("p107");
        populatePost("p128");
        populatePost("p793");
        populatePost("p307");
        populateFriends("u798");
        populateFriends("u799");
        populateFriends("u445");
        populateFriends("u447");
        populateFriends("u451");
        populateFriends("u473");
    }else{
        element.innerText = "Login";
        document.getElementById("loggedOut").style.zIndex = 1;
        currentUser = {};
        resetPage();
    }
}
function generateCurrentUser(idFx){
    //fill currentUser object with profile info for logged in user
    currentUser = databaseUsers[idFx];
    populateUser(currentUser.id);
}

//functions to populate data into HTML framework
function populatePost(idFx){
    //populate html elements with post information by post id number
    let elementFx = "";

    elementFx = document.querySelector("#"+idFx+" .icon-user");
    elementFx.src = databaseUsers[databasePosts[idFx].userId].profilePicture;

    elementFx = document.querySelector("#"+idFx+" .profile-name");
    elementFx.innerHTML = databaseUsers[databasePosts[idFx].userId].firstName
        +"&nbsp"+databaseUsers[databasePosts[idFx].userId].lastName;

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
function populateFriends(idFx){
    //populate html elements for friends displayed on side bar
    let elementFx = "";

    elementFx = document.querySelector("#"+idFx+" .icon-user")
    elementFx.src = databaseUsers[idFx].profilePicture;

    elementFx = document.querySelector("#"+idFx+" .friend-name")
    elementFx.innerHTML = databaseUsers[idFx].firstName+"&nbsp"
        +databaseUsers[idFx].lastName;
}
function populateUser(idFx){
    //populate html elements specific to current user that logged in
    let elementFx = "";
    elementFx = document.querySelector("#"+idFx+" .profile-name");
    elementFx.innerHTML = currentUser.firstName+"&nbsp"+currentUser.lastName;

    elementFx = document.querySelector("#"+idFx+" .icon-current-user");
    elementFx.src = currentUser.profilePicture;
    if(currentUser.postList.length > 0){
        elementFx = document.querySelector("#"+idFx+" .post-text");
        elementFx.innerHTML = databasePosts[currentUser.postList[0]].post;
    }

    elementFx = document.querySelector("#user-friends");
    elementFx.innerHTML = currentUser.friendCount;
    elementFx = document.querySelector("#user-requests");
    elementFx.innerHTML = currentUser.friendRequestList.length;
}
function resetPage(){
    //function used for resetting the page when user logs out
    let elementFx = "";
    elementFx = document.querySelector("#nav-bar .search-bar");
    elementFx.value = "";
}

//functions to support like buttons
function likePost(element){
    //function for like button. increments or decrements depending if user has liked post already.
    let idFx = element.parentElement.parentElement.parentElement.id;
    
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
    //determines if user has liked a post or not. checks id with list of user ids that have liked already.
    if(databasePosts[idFx].likesList.includes(currentUser.id)){
        return true;
    }else{
        return false;
    }
}
function formatLikeButton(likeToggle, element){
    //manage formatting and inner text for like buttons to show if post has been liked
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

//functions to support friend requests
function acceptRequest(element){
    //function for accepting a friend request
    let idFx = element.parentElement.parentElement.id;
    for(let i = 0; i < currentUser.friendRequestList.length; i++){
        if(idFx === currentUser.friendRequestList[i]){
            currentUser.friendList.push(currentUser.friendRequestList[i]);
            currentUser.friendRequestList.splice(i,1);
        }
    }
    currentUser.friendCount = 350 + currentUser.friendList.length; // hard coded to give 350 extra friends
    removeRequest(element);
}
function declineRequest(element){
    //declines friend request
    let idFx = element.parentElement.parentElement.id;
    for(let i = 0; i < currentUser.friendRequestList.length; i++){
        if(idFx === currentUser.friendRequestList[i]){
            currentUser.friendRequestList.splice(i,1);
        }
    }
    removeRequest(element);
}
function removeRequest(element){
    //removes request from webpage after it has been accepted/declined
    let elementFx = "";
    let idFx = element.parentElement.parentElement.id;
    document.getElementById(idFx).remove();

    elementFx = document.querySelector("#user-friends");
    elementFx.innerHTML = currentUser.friendCount;
    elementFx = document.querySelector("#user-requests");
    elementFx.innerHTML = currentUser.friendRequestList.length;
}