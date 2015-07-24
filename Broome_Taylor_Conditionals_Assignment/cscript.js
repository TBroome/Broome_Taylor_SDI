//Taylor Broome
//SDI
//7/23/2015

//sorry this is late I really did not get a chance to work ok it

var fishFood = prompt("Please enter the amount of food pellets you have here."); //prompting for the number of fish food pellets owned
var numFish = prompt("Please enter the number of fish you have here.");     //prompting to get the number of fish owned
var days = prompt("Please enter the number of days you need to feed your fish.");       //prompting to understand the number of days to feed fish

if(fishFood < numFish*days){                //first conditional to see if you have more food then fish
    console.log("You need more food.");     //print out to show user if they need more food
}else{                                      //if the above statement is false this is then displayed
    console.log("You have enough food.");   //print out to show if you DO have enough food
}

var goldfish = false;                       //to see if you do or do not have goldfish
var food = "Use Goldfish Pellets";          //shows the food var as a string value
var mollies = true;                         //shows us that the mollie var is true

if(goldfish){                               //checks if you have any goldfish
    console.log(food);                          //shows the printout variable of food
}else if(mollies){                                      //then checks to see if you have Mollies
    console.log(food + " and suplment vitamins.");      //shows what food to use if you do have mollies
}else{                                                      //if both statements are flase then we move on to this var
    console.log("Do not use goldfish pellets.");            //prints out the food to use here if no mollies or goldfish
}

var fish;                                                   //shows the fish var

fish = (numFish < 10) ? "You need more fish!" : "You have all the fish!!";      //
console.log(fish);

var goldFish = prompt("How many goldfish to you have?");
var tetras = prompt("How many tetras do you own?");
var ciclids = false

if(goldFish > tetras || ciclids){
    console.log("Do not add any other fish!");
}else{
    console.log("Go ahead and add more fish, just no ciclids!")
}


