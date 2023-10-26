// Grab the header which h1
var header = document.querySelector("h1")

// interface with the style 
header.style.color = 'red'

// Random color function :

function getRandomColor(){
    var letters ="0123456789ABCDEF";
    var color ="#";
    for (var i=0;i<6;i++){
        color +=letters[Math.floor(math.random()*16)];
    }
    return color
}

// simple fumction for clarity
function changeHeaderColor(){
    colorInput = getRandomColor()
    header.style.color = colorInput;
}

//Now perform the action over  intervals (milliseconds);
setInterval("changeHeaderColor()",500);