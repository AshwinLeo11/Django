// Write a function called sleepIn that takes in two boolean parameters: weekday
// and vacation.

function sleepIn(weekday, vacation){
    return(!weekday||vacation)
}


// Problem 2 : MONKET TROUBLE

function monkeyTrouble(aSmile, bSmile){
    return(aSmile && bSmile) || (!aSmile && !bSmile)
}


// Problem 3 : STRING TIMES
// Given a string  and non-negative int n, return a larger... String that is n copies of the original string..

function stringTimes(str,n){
    var returnStr = "";
    var i =0;
    while(i<n){
        returnsStr += str
        i++
    }
    returnStr
}



//  PROBLEM 4 : LUCKY SUM


function luckySum(a,b,c){
    if (a==13){
        return 0
    } else if (b==13){
        return a
    } else if (c==13){
        return a+b
    } else{
        return a+b+c
    }
}


// PROBLEM 5:
// You are driving a little to fast, and a police officer stops you.Write a code t compute the result, encoded as an int value:

function caught_speeding(speed, is_birthday){
    if (is_birthday){
        speed -=5
    }
    if ( speed <= 60) {
        return 0
    }else if (60 < speed <=80){
        return 1
    }else{
        return 2
    }
}


 // PROBLEM 6 :
 // MAKE BRICKS :

 function makeBricks(small, big, goal){
    return goal%5 >=0 && goal%5 - small <=0 && small + 5*goal >=0 ;
 }































