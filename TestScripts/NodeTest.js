console.log('hello roshit');


const fs = require('fs');
fs.writeFileSync("test.txt", "hi from a test file");


var person = {
    name: 'roshit',
    age: 39,
    greetArrow: () => {
        // with arrow function, this is the global object and not the person object
        // so name is undefined here
        console.log('hi I am ' + this.name); 
    },
    greetOldWay: function(){
        console.log('hi I am ' + this.name); // now here this is the person object
    }
}

person.greetArrow();
person.greetOldWay();

var myarray = ['red', 'yellow', 'green'];

myarray.forEach((color) => console.log('color is ' + color));
console.log(myarray.map((color) => 'color mapped is ' + color)); // map returns an array
