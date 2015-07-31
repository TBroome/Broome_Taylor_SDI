//Taylor Broome
//SDI 7/29/2015
//Class 02

//console.log("Test");          //intended to test the connection to the html file

var fLotto = theNumbers(3, 10, 27, 35, 42, 53);     //redefines the function return so that we can see it

var numbers = ("Your lucky Powerball numbers are 9, 18, 29, 36, 46 powerball 35.");        //var for the powerball numbers

var yes = confirm("Would you like the Powerball numbers?");     //user prompted to confirm if they want the powerball numbers

if(yes == true){                                //if yes then true so the nect line prints
    console.log(numbers);                        //the numbers value for the powerball numbers
}else{                                             //if false the console log after this prints
    console.log(fLotto);                             //prints the fLotto var if false
}


function theNumbers(a, b, c, d, e, f){          //function starts here with the naming of it as theNumbers
    var fLotto = ("Your lucky numbers are " + a + "," + b + "," + c + "," + d + "," + e + "," + f + ".");       //combines the var into a string value
    return fLotto;  //function spitting info out
}

