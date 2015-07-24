/**
 * Created by Avariea on 7/23/15.
 */

sunny=true//false

if(sunny){
    goToTheBeach(); //says what to do if statement is true
}else{
    goToTheMovies(); //says what to do if statement is false
}

var oldEnough = true; //if false will skip the {} braces

if the child is old enough printo to console you can ride

if(oldEnough){  //keep brace on same line as if statement to keep from breaking
    //code performed if true
    console.log("Your can ride the coster!"); //everything under the if statement should be one tab over
}
console.log("What comes after...") //will show if false


//Relational expressions

var kidHeight = 30;
if the kid is over 48 inches in height
var minHeight = 48;

if(kidHeight > minHeight){
    //evaluates if the var is over or under 48
    //compares 2 variables
    console.log("You can ride the Coaster!");
}

var kidHeight = 47;
var minHeight = 48;
var sneakerLift = 2;

if(kidHeight + sneakerLift > minHeight){
    //can also be written as expressions
  //  console.log("You can ride the Coaster!");
}

var kidHeight = 47;
var minHeight = 48;

//if tall enough print to console you can ride
//if not tall enough print to console soorry not tall enough
if(kidHeight > minHeight){
    //code if true
    console.log("You can ride!!")
}
if(kidHeight < minHeight){
    //print if true
    console.log("Sorry not tall enough...")
}
if(kidHeight <= minHeight){
    //if equal or less
    console.log("Sorry not tal enough...")
}

//ElseIfChain

var kidHeight = 52;
var minHeight = 48;
var withParentHeight = 45;

if(kidHeight > minHeight){                  //checks this first
    console.log("You can ride!")
}else if(kidHeight > withParentHeight){                     //checks if first one is false
    //you can ride if you have a parent present
    console.log("You can ride with your parents!")
    //should never have a condition attached to it
}else{                                                          //completes if ones before are false
    //sorry still cant ride
    console.log("You still have some growing to do..")
}

//relational operators

//Greater than >
//Less then <
//Greater then or equal to >=
//Less then or equal to <=
                                //COMPARES TWO AND ONLY TWO VALUES OR VARIABLES
                                   //COMPARISON RESULTS IN TRUE OR FALSE ONLY
//makes a iff statement

//equality operators

//equality ==
//strict equality ===
//inequality !=

//NEVER break the operator with a space < = BAD!!!

//5 < 5 FALSE
//5 <= 5 TRUE

//equality == the SAME as (NO SPACES!!)

//assignments = not ==
//stores the value


//strict equality
//===
//the same value AND the same type
//6 number
//"6" string
//6 == "6" TRUE
//6 === "6" False


//USE STRICT EQUALITY OVER EQUALITY

//INEQUALITY
//!=
//IS NOT THE SAME AS
// a != b


//Logical operators
// they compare two true or false values

//and &&
//or ||
//Exclusive OR (XOR) ^
//Not !

// and requires both operators to be true

var budget = 300;
var iPhonePrice = 199.99;
var paycheck = 200;
//phone less then budget AND paycheck is over 300
if(iPhonePrice < budget && paycheck > 300){
    console.log("We can get the phone!")
}else{
    console.log("No Phone For YOU!!")
}
//if(paycheck > 300){
  //  console.log("We can buy the phone!")
//}else{
  //  console.log("No phone for you!")
//}


//&& only goes between booleans

//Or Operator
// || symbol
//Must have one true


var budget = 300;
var iPhone = 199.99;
var wonLottery = true;

if(iPhone < budget || wonLottery){
    console.log ("We can get the phone!");
}else{
    console.log("No phone for you!");
}

//NOT operator
// ! symbol flips the operator
//true becomes false and vise versa
// a != b is the same as !(a === b)


//NEVER USE 3 ITEMS AT ONCE!!



//Ternaries
//decision making on one line

if(condtion){
    do if true;
}else{
    do if false;
}

//THE SAME AS

(condition) ? do if true : do if false

var gpa = 48;

//if the gpa is over the min 2.0 they can graduate

if(gpa > 2.0){
    console.log("You can graduate.");
}else{
    console.log("Your gpa is too low!");
}

(gpa > 2.0) ? console.log("You can graduate!") : console.log("Your gpa is too low!");


var age = 11;
var book;

if(age < 10){
    book = "Green Eggs and Ham";
}else{
    book = "The Time Machine";
}
console.log(book);

book = (age < 10) ? "Green Eggs and Ham" : "The Time Machine";
console.log(book);


