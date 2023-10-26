// create aempty student Roster Array
var roster =[]

//Add a new student

function addNew(){
    var newName = prompt (" What name woukd  you like to add?")
    roster.push(newName)
}

// Remove a student

function remove(){
    var remName = prompt("What name would you like to remove?")
    var index = roster.indexOf(remName)
    roster.splice(index,1)
}

// Display roaster 

function display(){
    console.log(roster);
}


// now create a while loop that kepps asking for an action(add,remove display or quit)
// use if and else if statements to execute the correct function for each command.

var start = prompt("Would you like to start the roster web app? y/n")
var request = "empty";

if (start=='y'){
    while (request !=="quit"){
        request = prompt("Please select an option: add, remove, diplay, or quit.") 
        if (request === "add"){
            addNew();
        }else if (request === "display"){
            display();
        }else if (request === "remove" ){
            remove();
        }else {
            alert('not recognized')
        }
    }
}

alert("thanks for using the web App! pleasde refresh to start over!")