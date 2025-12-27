//Q1

// for(i = 0; i < 5; i++){
//     document.write("Hello World","<br>")
// }


//Q2

// for(i = 1; i <= 10 ; i++){
//     document.write(i,"<br>")
// }

//Q3

// var userInput = +prompt("Emter a number to print multiplicion table");

// for(var i = 1; i <= 10; i++){
//     document.write(userInput + " " + "x" + " " + i + "=" + userInput * i)
//     document.write("<br>")
// }


// var userInput = +prompt("Emter a number to print multiplicion table");
// var userLenth = +prompt("Emter lenth of  multiplicion table");

// for(var i = 1; i <= userLenth; i++){
//     document.write(userInput + " " + "x" + " " + i + " = " + userInput * i)
//     document.write("<br>")
// }

//Q4

// var mobiles = ["Nokia","Samsung","Apple","Sony","Huawei"];

// for(  i = 0; i < mobiles.length; i++){
//     document.write(mobiles[i] + "<br>")
// }

//Q5

// var fruites = ["apple","banana","mango","orange","strawberry"];

// for(i = 0; i < fruites.length; i++){
//     document.write("Element at index  " + i + " is" + " " + fruites[i]);
//     document.write("<br>")
// }

//Q6

 








//Q7

     //Counting

// for(i = 1; i <= 15; i++){
//     document.write(i,"<br>")
// }
 
      //Reversing

// for(i = 15; i >= 1; i--){
//     document.write(i,"<br>")
// }
    
     //Even

// for(i = 0; i <= 20; i += 2){
//     document.write(i,"<br>")
// }


    //Odd

// for(i = 1; i <= 19; i += 2){
//     document.write(i,"<br>")
// }    


// for(i = 2; i <= 20; i += 2){
//     document.write(i+"k");
//     document.write("<br>")
// }


//Q8


//  var Items = ["cake","apple pie","cookie","chips","patties"];
//  var userInput = prompt("Welcome to ABC bakery ! what do you want to order ?")
 
//  for(i = 0; i < Items.length; i++){
//     if(Items[i] == userInput){
//         document.write(userInput, " is availeble at index" + " " + i + " in our bakery") 
//         break;
//     }
//  }
 

//Q9
    
     //largest number

// var num = [24,53,78,91,12];
// var largestNum = num.length;

// for( i = 0; i < num.length; i++ ){
//     if(num[i] > largestNum ){
//         largestNum = num[i]
//     }
// }document.write("The largest number is ",largestNum)
 

//Q10

      //smallest number

// var num = [24,53,78,91,12];
// var smallestNum = num[2];

// for( i = 0; i < num.length; i++ ){
//     if(num[i] > smallestNum ){
//         smallestNum = num[i]
//     }
// }document.write("The smallest number is ",smallestNum)

//Q11

//largest number

// var num = [24,53,78,91,12];
// var largestNum = num.length;

// for( i = 0; i < num.length; i++ ){
//     if(num[i] > largestNum ){
//         largestNum = num[i]
//     }
// }document.write("The largest number is ",largestNum)
 
      //smallest number

// var num = [24,53,78,91,12];
// var smallestNum = num[2];

// for( i = 0; i < num.length; i++ ){
//     if(num[i] > smallestNum ){
//         smallestNum = num[i]
//     }
// }document.write("The smallest number is ",smallestNum)

//Q12

// for(i = 5; i <= 100; i += 5){
//     document.write(i,"<br>")
// }


//Q13

// document.write("<tr><td>Ali</td><td>58</td></tr>"+ " " ,"<br>");
//     document.write("<tr><td>Sami</td><td>73</td></tr>"+ " " ,"<br>");
//     document.write("<tr><td>Taha</td><td>89</td></tr>" + " ","<br>");
//     document.write("<tr><td>Inam</td><td>90</td></tr>" + " ","<br>");
//     document.write("</table>");


//Q14

// var number = [12,45,3,22,34,50];
// var userInput = +prompt("Enter a number");
//     userInput =  Number(userInput)
// for(i = 0; i < number.length; i++){
//    document.write(number[i] + " ") 
//    if(number[i] === userInput){
//       break;
//    }else{
//       alert("Try agian")
//    }

// }

//Q15

// var arr = [  [1,2,3],[4,5,6],[7,8,9],  ];

// for(i =0; i <= arr.length; i++){
//    for(j = 0; j < arr[i].length; j += 3){
//       document.write(arr[i])
//       document.write("<br>")
//    }
// }

//Q16
                                          /// user prompt me jo kuch dega wo loop k start me stor hojyga jo k khali hai 
// var num = +prompt("Enter a number");    
// for (; num > 0; num = num - 0.5 ){
//    document.write(num + "<br>")
   
// }



//Q17

// for(i = 0; i <= 20; i++){
//       if(i % 2 === 0){
//             document.write(i + "   is Even <br>");
//       }else{
//             document.write(i + "   is Odd  <br>");
//       }
// }


//Q18

//   var userInput = 5;

// for(var i = 21; i <= 21; i++){
//     document.write(userInput + " " + "x" + " " + i + "=" + userInput * i)
//     document.write("<br>")


//Q19

// for(i = 1; i <= 7;  i++){
//       for(j = i; j <= 7  ; j++ ){
//             document.write("*")
//       }
//       document.write("<br>")
// }

//Q20 (a)

// for(i = 1; i <= 4;  i++){
//       for(j = 1; j <= 5  ; j++ ){
//             document.write("*")
//       }
//       document.write("<br>")
// }
  // (b)
  
//   for(i = 1; i <= 5;  i++){
//       for(j = 1; j <= i  ; j++ ){
//             document.write("*")
//       }
//       document.write("<br>")
// }

//  (c)

// for(i = 1; i <= 5;  i++){
//       for(j = i; j <= 5  ; j++ ){
//             document.write("*")
//       }
//       document.write("<br>")
// }