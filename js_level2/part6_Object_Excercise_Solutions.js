// Problem 1 :
// Add method 

var employee ={
    name: "Ashwin",
    job: "Programmer",
    age: 22,
    nameLength:function(){
        console.log(this.name.length);
    }
}

// Problem 2:
// create an alert in the browser

var employee ={
    name: "Ashwin",
    job: "Programmer",
    age: 22,
    report : function(){
        alert("Name is"+this.name+",Job is :"+this.job+",Age is:"+this.age)
    }
}


// Problem 3 :
// add last name


var employee ={
    name: "Ashwin",
    job: "Programmer",
    age: 22,
    lastName:function(){
        console.log(this.name.split(" ")[1])
    }
}