//Taylor Broome
//SDI 7/29/2015

console.log("Test");

var fLotto = theNumbers(3, 10, 27, 35, 42, 53);




var yes = confirm("Would you like the Powerball numbers?");

if(yes == true){
    console.log(numbers)
}else{
    console.log(fLotto)
}


var fLotto = theNumbers(3, 10, 27, 35, 42, 53);


function theNumbers(a, b, c, d, e, f){
    var fLotto = (a + "," + b + "," + c + "," + d + "," + e + "," + f + ".");
    return fLotto;  //function spitting info out
}

