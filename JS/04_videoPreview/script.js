console.log("page loaded...");

function hoverAutoplay(element){
    element.play();
}
function hoverPause(element){
    element.pause();
}

/*browsers now prevent video's from autoplaying unmuted, 
the request to add additional functionality to autoplay the video 'muted' seemed unnecessary,
given that all relevant articles were describing work-arounds to do the exact opposite.*/
