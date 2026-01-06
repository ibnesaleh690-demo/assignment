//Q1

// var firstName = prompt("Enter first name");
// var lastName = prompt("Enter last name");

// var fullname = firstName + lastName ;

// console.log(fullname ," ")

//Q2

// var userInput = prompt ("Enter your fevorit mobile phone model");

// document.write(userInput.length)

//Q3

// var string = "Pakistani";
// var string2 = string.indexOf('n')
// document.write(string2)

// //Q4

// var string = "Hello World";
// var string2 = string.lastIndexOf('l')
// document.write(string2)

//Q5

// var string = "Pakistani";
// var string2 = string.charAt(3)
// document.write(string2)

// var string = "Pakistani";
// var string2 = string.indexOf("i")
// document.write(string2)

//Q6

// var firstName = prompt("Enter first name");
// var lastName = prompt("Enter last name");

// var fullname = firstName.concat(" ",lastName);

// document.write(fullname)

//Q7

// var City = "heydarabad";
// var afterReplacing = City.replace("heydar","Islam")
// document.write(afterReplacing)

//Q8

// var string = "Ali and Sami are best friend . they play cricket and football together"
// var Replace = string.replaceAll("and","&");
// document.write(Replace)

//Q9

// var str = "472";
// var num = + str
// document.write("Value : " + str + "<br>" + "Type : " + typeof str + "<br>")
// document.write("After conerting Value : " + num + "<br>" + "After conerting Type : " + typeof num)

//Q10

// var user = prompt ("Enter URL name of any website");
// var domen = user.slice(4);

// document.write(domen);

//Q11

// var user = prompt ("Enter a any word");
// var changCase = user.toUpperCase();

// document.write(changCase);

//Q12

// var user = prompt ("Enter a any word");
// var changCase = user.toLowerCase();

// document.write(changCase);

//Q13

// var user = prompt ("Enter a any word");
// var changCase = user.slice(0,1).toUpperCase();
// var res = changCase + user.slice(1);

// document.write(res);

//Q14

// var num = 35.36;
// var numStr = num.toString();
// var res = numStr.replace(".","");

// document.write(res)

//Q15

// var a = "3";
// var b = "3";
// if(x = a === b){
//     document.write(x)
// }

//Q16

// var a = 3;
// var b = 3;
// y = a - b;

// document.write(y);


//Q17

// var userInput = prompt("Enter username");
// var isValid = true;
// for(i = 0; i < userInput.length; i++){
//     var code = userInput.charCodeAt(i);
// if(code === 33 || code === 44 || code === 46  || code === 64){
//   isValid = false;
//   break;
// }
// }

// if(isValid){
//     alert("Valid username");
// }else{
//     alert("Pleas enter a valid username")
// }

// var userInput = prompt("Enter username");
// var inValid = "@,.!";
// var isValid = true;

// for(i = 0; i < userInput.length; i++){
//     var code = userInput.charCodeAt(i);
// if(inValid.includes(userInput[i]) ){
//   isValid = false;
//   break;
// }
// }

// if(isValid){
//     alert("Valid username");
// }else{
//     alert("Pleas enter a valid username")
// }

//Q18

//  var Items = ["cake","apple pie","cookie","chips","patties"];
//  var userInput = prompt("Welcome to ABC bakery ! what do you want to order ?")
//  var caseSen = userInput.toLowerCase();

//  var availeble = false;
//  for(i = 0; i < Items.length; i++){
//     if(Items[i].toLowerCase() === caseSen){
//      availeble = true; 
//     break;
//     }
        
    
//  }
//  if(availeble){
//     document.write(caseSen, " is availeble at index" + " " + i + " in our bakery")
//  }else{
//     alert("It's not availeble in our bakery  ")
//  }
 

//Q19

// var input1 =   prompt("Enter first word ");
// var input2 =   prompt("Enter second word ");

// if(input1 > input2){
//     alert(input1 + " is greater than ")
// }else if(input1 < input2 ){
//     alert(input2 + " is greater than")
// }else{
//     alert("both are equal")
// }


//Q20

// var password = prompt("Enter your password");
// function  validPassword(pass) {
//     if(pass.length < 6){
//         return false
//     }

//     var firstChar = pass.charCodeAt(0);
//     if(firstChar >= 48 && firstChar <= 57){
//         return false;
//     }

//     var hasAlpha = false;
//     var hasNum = false;

//     for(i = 0; i < pass.length; i++)
//         var ASCII = pass.charCodeAt(i);

//     if((ASCII >= 65 && ASCII <= 90) || (ASCII >= 97 && ASCII <= 122)){
//         hasAlpha = true;
//     }else if ((ASCII >= 48 && ASCII <= 57)){
//         hasNum = true;
//     }
//     if(hasAlpha && hasNum){
//         return true;
//     }else{
//         return false;
//     }
// }
// alert("Password valid")


//Q21

// var str = "university of karachi";
// var res = str.split("");

// for(i = 0; i < res.length; i++){
//     document.write(res[i] + "<br>")
// }


///Q22

// var user = prompt("Enter aword");
// var res = user[user.length -1];

// document.write(res)

//Q23





//Q24

