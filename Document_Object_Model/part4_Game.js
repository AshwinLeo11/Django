// Restart Game Button

var restart = document.querySelector("#b");


// Grabs all the squares

var squares = document.querySelectorAll('td');


//Clear all the squares

function clearBoard(){
    for (var i=0; i< squares.length;i++){
        squares[i].textContent='';
    }
}

restart.addEventListener('click',clearBoard);

//Check the square markers

function changeMarker (){
    if(this.textContent === ''){
        this.textContent = 'x';
    }else if(this.textContent === 'x'){
        this.textContent = 'o';
    }else {
        this.textContent ='';
    }
}

for (var i= 0; i< squares.length; i++) {
    squares[i].addEventListener('click',changeMarker)
    
}












// var cellOne = document.querySelector("#one")

// cellOne.addEventListener('click',function(){
//     if(cellOne.textContent ===""){
//         cellOne.textContent ='x';
//     }else if (cellOne.textContent === 'x'){
//         cellOne.textContent = 'o';
//     }else{
//         cellOne.textContent ='';
//     }
// })







//For loop to add event listners to all the squares