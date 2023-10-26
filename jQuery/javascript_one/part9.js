var FirstName = prompt("First Name please:")
var LastName = prompt("Last Name please: ")
var age = prompt("How old are you? ")
var height = prompt("What is your height? ")
var petName = prompt("What is your pet Name? ")
alert("Thank you for the information!")


// Logic

//Name Condition

if (FirstName[0] === LastName[0]){
    nameCond = true;
}else{
    nameCond = false;
}

// Age Condition

if(age>20 && age<30){
    ageCond = true;
}else{
    ageCond = false;
}

//Height Condition :

if(height >=170){
    heightCond = true;
}else{
    heightCond = false;
}

// PetName condition :

if(petName[petName.length-1] === "y"){
    petCond = true;
}else{
    petCond = false;
}


// Check all conditions :

if(nameCond && ageCond && heightCond && petCond){
    console.log("WELCOME SPY!");
}else{
    console.log("Nothing to see here")
}

// Four Conditions
var nameCond = null;
var ageCond = null;
var heightCond = null;
var petCond = null;