//Expressions
//Taylor Broome
//7/16/2015
//SDI

alert("lets check that power level!"); //starting the process by letting you know what we will be doing
var helm = prompt("Enter your helm item level here please. \nEnter between 30 and 40 please."); //first prompt for helm item level
var chest = prompt("Enter your chest item level here please. \nEnter between 1 and 10 please."); //second prompt for chest item level
var legs = prompt("Enter your legs item level here please. \nEnter between 1 and 10 please."); //third prompt for legs item level
var average = helm - chest - legs; //subtracting the chest and legs from your helm to give you the first number for your average
var pLvl = average*3; //to get the power level we must multiply the average by the number of items we have (3)
alert("Great job! Your power level is " + pLvl); //inform the user of his/her power level by using the (pLvl) var
console.log("Your power level is " + pLvl + "."); //also used to inform the user of the power lvl (pLvl)

alert("OK Now lets see if you can fight that boss yeah?"); //starts the new prosses to find your item level
var average = [helm, chest, legs]; //array of previous var item levels to use for the average
var total = average[0] * average[1] * average[2]; //the average is created this time by multiplying the arrays
var iLvl = total/4; //we then divide the total by 4 for the item level
alert("You can go kick some boss butt with an item level of " + iLvl + "!"); //alert to display the item level to the user using var (iLvl)
console.log("Your item level is " + iLvl + "."); //also will show the user their item level if they have console open

//have a great day!