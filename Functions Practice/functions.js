//Practice Work//

//functions:
//DRY: DONT REPEAT YOURSELF
//They allow us to have code that is written once but can be used again and again by the machine

//functions store stuff spec. lines of code

//types of functions

//functions: AKA Normal Functions


//function functionName(can be empty or hold perameters){
    //code the function runs
//}

//function outputMsg(){
  //  console.log("Hello world!");
//}

//var width = 5;

//calcArea(30, 20);

//function calcArea(w, h){  //w = 30 and h = 20
  //  var area = w * h;
    //console.log(area);
//}

//Variable Scope

//prefers to use the var on the same side of the function aka inside for inside

//arguments and parameters  allow us to store and use dif information as we need it

//funcName(argument1, argument 2);

//funcnion functionName(parameter1, parameter2){
//
// };



function dogYears(age){  //parameters
    var dogYears = age * 7;
    console.log("Sparky is" + dogYears + " years old.");
}<script src="functions.js"> </script>

dogYears(4); //arguments
dogYears(5);
var age1 = 4;
dogYears(age1);

//(call)

//returning values

var total = calcArea(30, 20);


function calcArea(w, h){  //w = 30 and h = 20
    var area = w * h;
    return area;  //function spitting info out
}

console.log(total);

//Procedures never return anything

//anon fun also called closures

var functionName = function(){
    //code to run
}

calcArea(30, 20);

var calcArea = function(w, h){  //w = 30 and h = 20
    var area = w * h;
    return(area);
}

var a = calcArea(20, 30);//invoking after function!!

console.log(a);

//have to define before you can use it















