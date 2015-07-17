//Expressions Taylor Broome 7/16/2015

alert("lets check that power level!");
var helm = prompt("Enter your helm item level here please. \nEnter between 30 and 40 please.");
var chest = prompt("Enter your chest item level here please. \nEnter between 1 and 10 please.");
var legs = prompt("Enter your legs item level here please. \nEnter between 1 and 10 please.");
var average = helm - chest - legs;
var average = average*3;
alert("Great job! Your power level is " + average);
console.log(average);

alert("OK Now lets see if you can fight that boss yeah?");
var average = [helm, chest, legs];
var total = average[0] * average[1] * average[2];
var iLvl = total/4;
alert("You can go kick some boss butt with an item level of " + iLvl + "!");