         // user input & conditional Statements
//Q1 

// var userName = prompt ("inter your name")
// alert("Hi, jhone doe")


//Q3

//  var city = prompt ("Inter your city")
//   if(city==="karachi")
//     alert("welcome to city of lights")
// else{
//    alert ("your not allowed")
// }

//Q4

// var Gender = prompt("Enter your gender")
// if(Gender==="male")
//     alert("Good morning sir")
// if (Gender==="female") {
//     alert("Good morning Ma'am")
// } 

//Q5

// let roadTrafic = prompt("Road trafic")
// if (roadTrafic==="red"){
//     document.write("vehical must stop")
    
// }
// else if (roadTrafic==="yellow"){
//     document.write("vehical should get ready to move")
// }
// else if (roadTrafic==="green"){
//     document.write("vehical can move now")
// }

//Q6

// let  maxAge = prompt("inter your age")
// if (maxAge > 18 ){
//     alert("you are welcome")
// }
// else if (maxAge < 18){
//     alert("you are not allowed" )
// }

//Q7

// let  fuel = prompt("inter fuel of car")
// if (fuel < 0.25){
//     alert("pleas refill the fuel in your car ")
// }

//Q8


// var A = 4;
// if(++A === 5){
//     alert("variable A is true")
// }

// var B = 83;
// if(B++ === 83){
//      alert("variable B is true")
// }

// var c = 12;
// if(c++ === 13){
//     alert("variable 1 is true")
// }
// if(c === 13){
//     alert("variable 2 is true")
// }


// if(++c <= 14){
//     alert("variable 3 is true")
// }

// if(c === 14){
//     alert("variable 4 is true")
// }


// var materialCost =20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//     alert('The cost equals');
// }
// if(true){
//     alert("True");
// }

// if (false){
//     alert("False");
// }

// if("car" < "cat"){
//     alert("car is smaller than cat")
// }

//Q9

// let sub1 = Number(prompt("Enter your fist sub marks"))
// document.write( "Subject1 marks :", sub1, "<br>")

// let sub2 = Number(prompt("Enter your second sub marks"))
// document.write( "Subject2 marks :", sub2 ,"<br>")

// let sub3 = Number(prompt("Enter your third sub marks"))
// document.write( "Subject3 marks :", sub3,"<br>")

// var total_Marks = 300
// document.write( "Total marks :",total_Marks,"<br>")

// var totalMarks = sub1 + sub2 + sub3
// document.write( "obtained marks :", totalMarks,"<br>")

  
// if(totalMarks >= 290 &&  totalMarks <= 300){
//     document.write("Grade : A+", )
// }if(totalMarks >= 280 &&  totalMarks <= 289){
//     document.write("Grade : A ", )
// }if(totalMarks >= 260 &&  totalMarks <= 279){
//     document.write("Grade : B+", )
// }if(totalMarks >= 240 &&  totalMarks <= 259){
//     document.write("Grade : B", )
// }if(totalMarks >= 230 &&  totalMarks <= 260){
//     document.write("Grade : C", )
// }if(totalMarks >= 220 &&  totalMarks <= 229){
//     document.write("Grade : D", )
// }if(totalMarks >= 100 &&  totalMarks <= 219){
//     document.write("Grade : Fail", )
// }



//Q10

// var item1 = Number(prompt("Inter price item of 1"))
// var item2 = Number(prompt("Inter price item of 2"))
// var priceOfshirt = item1 + item2;
// document.write("Price of item1  2000 + Price of item2  1000 = " + "  " + priceOfshirt + "<br>")

// var quantityItem1 = prompt("Inter quantity item of 1")
// var quantityItem2 = prompt("Inter quantity item of 2")
// var totalPticeofQuantity = quantityItem1 + quantityItem2;
// document.write("Quantity of item1 is " + quantityItem1 + "<br>")
// document.write("Quantity of item2 is " + quantityItem2 + "<br>")

// var shipingCharge = 250; 
// document.write("Shipping charges :"+ shipingCharge +"<br>")

// var totalCost = 6250;
// document.write("Total cost of your order is :" + totalCost + " " + "PKR" + "<br>")

// var discount = 5625;
// document.write("Discounted price is :" + discount + " " + "PKR")



//Q11

// var secNum = 8;

// var  userGuess = +prompt("Guess the secret  number (1 to 10)")

// if (userGuess === secNum){
//     alert("Bingo! correct answer")
// } else if (userGuess + 1 === secNum){
//     alert("Close enough to the correct answer")
// }else{
//     alert("try again")
// }

//Q12

// var num = +prompt("Enter number")

// if (num  % 3 === 0 ){
//     alert("The number is divisible by 3 ")
// }else{
//     alert("The number is not divisible by 3 ")
// }

//Q13

// var teamA_name = prompt("teamA! Inter your name ")
// var teamA_score = +prompt("teamA! Inter your score ")
// var teamB_name = prompt("teamB! Inter your name ")
// var teamB_score = +prompt("teamB! Inter your score ")

// if(teamA_score > teamB_score){
//     alert("Team A has won")

// }else if (teamB_score > teamA_score){
//     alert("Team B has won")
// }else{
//     alert("it's a tie! ")
// }

//Q14

// var pak = "Pakiistan";
// var num = 990
// var bool = true

// alert(typeof pak)
// alert(typeof num)
// alert(typeof bool)

//Q15

//  var number = +prompt("Enter number ")
//  if(number % 2 === 0){
//    alert("The number is EVEN")
//  }else{
//     alert("The number is ODD")
//  }

//Q16

// var temperature = +prompt("Enter weather temperature")

// if(temperature >= 40){
//     alert("It is too hot outside ")
// }else if(temperature >= 30){
//     alert("The weather today is normal ")
// }else if(temperature >= 20){
//     alert("Today's Weather is cool" )
// }else if(temperature >= 10){
//     alert("OMG! Today's weather is so cool  ")
// }

//Q17

// var num1 = +prompt("Inter first number")
// var num2 = +prompt("Inter second number")
// var operators = prompt("Select operators   *, -,+,/")


// var calcu =0;

// if(operators === "+"){
//  calcu =   num1 + num2
// }
    

// else if (operators === "*"){
//    calcu = num1 * num2
// }

// else if (operators === "-"){
//    calcu = num1 - num2
// }

// else if (operators === "/"){
//  calcu =   num1 / num2
// }
// else{
//     document.write("Plz Enter Correct Operatores ")
// }    

// document.write(`Result is : ${calcu}`)
    
//Q18

// var dayName = prompt("Enter day name")

// if(dayName === "monday"){
//     alert("It's a week day")
// }else if(dayName === "tuesday"){
//     alert("It's a week day")
// }else if(dayName === "wednesday"){
//     alert("It's a week day")
// }else if(dayName === "thursday"){
//     alert("It's a week day")
// }else if(dayName === "friday"){
//     alert("It's a week day")
// }else if(dayName === "saturday"){
//     alert("It's  weekend")
// }else if(dayName === "sunday"){
//     alert("yah! It's a holiday")
// }

//Q19

// var userScore = +prompt("Enter Score")

// if(userScore >= 50 ){
//     alert("you are passed")
// }else{
//     alert("Try again")
// }

//Q20

// var num1 = +prompt("Inter first number")
// var num2 = +prompt("Inter second number")

// if (num1 > num2 ){
//     alert("The greater number of" + num1 + "and" + num2 +  "is" + num2 + ".")
// }else if (num2 > num1){
//     alert("The greater number of" + num2 + "and" + num1 + "is" + num1+ ".")
// }else{
//     alert("Both number are is equal")
// }

//Q22
 
// var number = +prompt("Enter number ")

// if (number > 0){
//     alert("The number is positive")
// }else if (number < 0){
//     alert("The number is nagative")
// }else{
//     alert("The numbert is zero")
// }

//Q23

var noun = prompt("Enter a noun ")
var num = +prompt("Enter a number ")

if(noun === 1){
    alert(num+" "+noun)
}else{
    alert(num + " "+noun+"s")
}
