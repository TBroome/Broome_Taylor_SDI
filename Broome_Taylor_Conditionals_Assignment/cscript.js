//Taylor Broome
//SDI Conditionals
//7/24/2015

//sorry this is late I really did not get a chance to work ok it

var fishFood = prompt("Please enter the amount of food pellets you have here."); //prompting for the number of fish food pellets owned
var numFish = prompt("Please enter the number of fish you have here.");     //prompting to get the number of fish owned
var days = prompt("Please enter the number of days you need to feed your fish.");       //prompting to understand the number of days to feed fish

if(fishFood === ""){                            //makes sure you impute an amount for fishfood
    fishFood = prompt("Please enter the amount of food pellets you have!!");        //Reprompts the user for imformation
    console.log(fishFood);                               //prints out the amount of food owned
}else if(fishFood < numFish*days){                //first conditional to see if you have more food then fish
    console.log("You need more food.");     //print out to show user if they need more food
}else{                                      //if the above statement is false this is then displayed
    console.log("You have enough food.");   //print out to show if you DO have enough food
}

console.log(fishFood);                      //Prints out the amount of food you have

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

fish = (numFish < 10) ? "You need more fish!" : "You have all the fish!!";      //Ternary for the var fish to show if true or not (replaces the if/else statement
console.log(fish);                                                              //prints out the fish Var if true or false

var goldFish = prompt("How many goldfish to you have?");                        //prompt to find the number of goldfish owned
var tetras = prompt("How many tetras do you own?");                             //prompt to find the number of tetras owned
var ciclids = prompt("How many ciclids do you own?");                                                             //shows that you do NOT own any ciclids (these things are mean and should never be mixed with other fish)

if(goldFish > tetras || ciclids > 0){                                               //checks if you have more goldfish then tetras OR if you own ciclids
    console.log("Do not add any other fish! Ciclids are mean and should never be mixed with other fish and goldfish clutter a tank.");       //prints out if either of the vars are TRUE
}else{                                                                          //shows if the previous vars are false
    console.log("Go ahead and add more fish, just no ciclids!");                 //prints if all are false showing you can get more fish
}


