//implement functions for buttons on dojo weather using jQuery library




$(".city-btn").click(function(){alert("Loading weather report");});

$(".cookies-btn").click(function(){document.querySelector(".footer-cookies").remove();});

function convertTemp(element){
    let tempArr = document.querySelectorAll(".temp")
    
    if(element.value === "C"){
        for( let i = 0; i<tempArr.length; i++ ){
            tempArr[i].innerHTML = Math.round(((tempArr[i].innerHTML - 32) * 5/9)*10)/10;
        }
    }else if (element.value === "F"){
        for( let i = 0; i<tempArr.length; i++ ){
            tempArr[i].innerHTML = Math.round(((tempArr[i].innerHTML * 9/5)+32)*10)/10;
        }
    }

}
