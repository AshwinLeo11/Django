var player1 = prompt("Player One: Enter your name , you will be Blue");
var player1Color = 'rgb(86, 151, 255)';

var player2 = prompt("Player Two: Enter your name , you will be Red");
var player2Color = 'rgb(237, 45, 73)';

var game_on = true;
var table= $('table tr'); 



function reportWin(rowNum,colNum){
    console.log("You won starting at this row,col");
    console.log(rowNum);
    console.log(colNum);
}


function changeColor(rowindex,colIndex,color){
    return table.eq(rowindex).find('td').eq(colIndex).find('button').css('background-color',color)
}



function returnColor(rowindex,colIndex,color){
    return table.eq(rowindex).find('td').eq(colIndex).find('button').css('background-color')
}


function checkBottom(colIndex){
    var colorReport = returnColor(5,colIndex);
    for (var row =5;row > -1;row--){
        colorReport = returnColor(row,colIndex);
        if(colorReport === 'rgb(128, 128,128)') {
            return row

            
        }
    }
}



function colorMatchCheck(one,two,three,four){
    return (one=== two && one === three && one === four && one !== 'rgb(128, 128, 128' && one !== undefined)
}



//  check for horizontal wins :

functionhorizontalWinCheck(){
    for (var row = 0; row < 6; row++){
        for (var col = 0; col <4;   col++){
            if (colorMatchCheck(returnColor(row,col),returnColor (row,col+1),returnColor (row,col+2))){
                console.log('horiz');
                reportWin(row,col);
                return true;
            }else {
                continue;
            }
        }
    }

}


// Check for vertical wins :

function verticalWinCheck(){
    for (var col = 0; col < 7; col++){
        for (var row = 0; row <3;   row++){
            if (colorMatchCheck(returnColor(row,col),returnColor (row+1,col),returnColor (row+2,col))){
                console.log('vertical');
                reportWin(row,col);
                return true;
            }else {
                continue;
            }
        }
    }
}


// Check for Diagonal wins:

function diagonalWinCheck(){
    for (var col = 0; col < 5; col++){
        for (var row = 0; row <7;   row++){
            if (colorMatchCheck(returnColor(row,col),returnColor (row+1,col+1),returnColor (row+2,col+2),returnColor(row+3,col+3))){
                console.log('diag');
                reportWin(row,col);
                return true;
            }else if (colorMatchCheck(returnColor(row,col),returnColor(row-1,col+1),returnColor (row-2,col+2),returnColor(row-3,col+3))){ 
                console.log('diag');
                reportWin(row,col);
                return true;
            }else {
                continue;
            }
        }
    }
}



// START WITH PLAYER 1 :

var currentPlayer =1;
var currentName = player1;
var currentColor = player1Color;

$('.board button').on('click', function(){

    var col =$(this).closest('td').index();  // stack over flowing

    var bottomAvail = checkBottom(col);

    changeColor(bottomAvail,col,currentColor);

    if(horizontaWinCheck() ||   verticalWinCheck() || diagonalWinCheck()){
        $('h1').text(currentName+"You have won!")
        $('h3').fadeOut('fast');
        $('h2').fadeOut('fast');
    }

    currentPlayer = currentPlayer* -1;

    if(currentPlayer === 1){
        currentName = player1;
        $('h3').text(currentName+"It is your turn.")
        currentColor = player1Color;
    }else {
        currentName = player2;
        $('h3').text(currentName+"It is your turn.")
        currentColor = player2Color;

    }

})


















































































































    




// const PLAYER_1_COLOR = 'rgb(86, 151, 255)';
// const PLAYER_2_COLOR = 'rgb(237, 45, 73)';

// const board = [
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0]
//   ];


//   const PLAYER_1_COLOR = 'rgb(86, 151, 255)';
//   const PLAYER_2_COLOR = 'rgb(237, 45, 73)';
//   const NUM_ROWS = 6;
//   const NUM_COLS = 7;
  
//   const board = Array.from({ length: NUM_ROWS }, () => Array(NUM_COLS).fill(0));
  
//   let currentPlayer = 1;
//   let currentName = '';
//   let currentColor = '';
  
//   function initializeGame() {
//     const player1 = prompt("Player One: Enter your name, you will be Blue");
//     const player2 = prompt("Player Two: Enter your name, you will be Red");
    
//     if (!player1 || !player2) {
//       alert("Both players must enter their names.");
//       return;
//     }
    
//     currentName = player1;
//     currentColor = PLAYER_1_COLOR;
//     updateTurnDisplay();
//   }
  
//   function updateTurnDisplay() {
//     $('h3').text(currentName + ", it's your turn.");
//   }
  
//   function isValidMove(col) {
//     return board[0][col] === 0;
//   }
  
//   function dropDisc(col) {
//     for (let row = NUM_ROWS - 1; row >= 0; row--) {
//       if (board[row][col] === 0) {
//         board[row][col] = currentPlayer;
//         return row;
//       }
//     }
//   }
  
//   function checkForWin(row, col) {
//     // Implement your win-checking logic here.
//     // Check horizontal, vertical, and diagonal connections.
//   }
  
//   $('.board button').on('click', function () {
//     const col = $(this).closest('td').index();
  
//     if (isValidMove(col)) {
//       const row = dropDisc(col);
//       changeColor(row, col, currentColor);
  
//       if (checkForWin(row, col)) {
//         $('h1').text(currentName + ' has won!');
//         $('h3').fadeOut('fast');
//         $('h2').fadeOut('fast');
//       }
  
//       currentPlayer *= -1;
//       currentName = (currentPlayer === 1) ? player1 : player2;
//       currentColor = (currentPlayer === 1) ? PLAYER_1_COLOR : PLAYER_2_COLOR;
//       updateTurnDisplay();
//     }
//   });
  
//   // Call initializeGame to start the game
//   initializeGame();

  




































