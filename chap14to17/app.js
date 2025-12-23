//Q1

//  var student = []
 

//Q2

// var student = new Array()

//Q3

// var arra = ["mango","banana","apple","orange","lychee"]
// console.log(arra)

//Q4

// var arraNum = [98,88,99,90,100,66,77,92]
// console.log(arraNum)

//Q5

// var arraBool = [false,true,true,false,true,false,false]
// console.log(arraBool)

//Q6

// var arraMix = [98,"apple","banana",false,"",66,77,true,"lychee"]
// console.log(arraMix)

//Q7

// var mobileNetwaork = ["Zong","Jazz","Telenor","Uphone"]
// console.log(mobileNetwaork)

//Q8

// var educations = ["SSC","HSC","BCS","BS","BCOM","MS","M phil","PHD"]
// for(var  i = 0; i <= educations.length ; i++){
//     document.write( i + ") " + educations [i] + "<br>")
// }
 
//Q9

// var movies = [];
// movies.splice(0,0,"Avengers","Spectre","Jurassic World","Inside Out")
// var addMovi = movies
// for(i = 0; i <= addMovi.length; i++){
//     document.write(i + ")  " + addMovi [i] + "<br>")}

//Q10

// var favCars = ["land cruiser","Audi","Civic","bugatti","lamborghini"]
// var firstInd = 0;
// var firstCar = favCars[0];
// var lastInd = favCars.length - 1;
// var lastCars = favCars[4]

//Q11

// var studentName = ["Muneeb","Rayyan","Zubair"]
// var studentScore = [444,430,401]

// var totalMarks = 500;
// for( var i = 0; i < studentName.length;  i ++){
//   var percentage = (studentScore[i] / totalMarks) * 100
//   document.write("Student Name "  +  studentName[i]   );
//   document.write( " " + "Obtained Marks " + studentScore[i] );
//   document.write(" " +  "Percentage " + percentage  + " "  +"%")
//   document.write("<br>" + " ")



//Q12 

// var colors = ["red","blue","green","skyblue","white"]
// document.write("Initial array : "+ colors + "<br>")
// var userA = prompt("what color you want to add to the begining")
//  colors.unshift("After adding at begining  " + userA + "<br>")
// document.write(colors + "<br>")


// var colors = ["red","blue","green","skyblue","white"]
// var userB = prompt("what color you want to add to the ending")
// document.write("Initial array : "+ colors + "<br>" + "after adding  : ")

// colors.push( userB + "<br>")
// document.write(colors + "<br>")

// colors.splice(0,0,"purple","yellow")
// document.write("after tow more adding to the begining : " + colors)

// colors.shift();
// document.write("after deleting to the begi : " + colors)

// colors.pop();
// document.write("after deleting to the ending: " + colors)



// var colors = ["red","blue","green","skyblue","white"]
// var userC = prompt("which index  you want to add a color")

// colors.splice(2,0,userC)
// document.write("after adding a color at index " + colors)

// var colors = ["red","blue","green","skyblue","white"]
// var userC = prompt("which index  you want to delete a color")

// colors.splice(3,userC,)
// document.write("after adding a color at index " + colors)

//Q13

// var studentScore = [330,224,210,180,120]
// document.write("before sorting : " + studentScore + "<br>")

// studentScore.sort();
// document.write("after sorting : " + studentScore)

//Q14

// var fruites = ["Strawberry","apple","orange","banana","lychee"]
// document.write("before sorting : " + fruites + "<br>")

// fruites.sort();
// document.write("after sorting : " + fruites)


//Q15

// var cities = ["Karachi","Lahore","Islamabad","Peshawar","Quetta"]
// var selectedCities = cities.slice(0,3);

// document.write("Cities : " + cities + "<br>");
// document.write("Selected Cities : " + selectedCities)


//Q16

// var arr = ["This","is","my","cat"]

// for(var i = 0; i <=3 ; i++) {
//     document.write(arr[i] + " ")
// }

//Q17

//  var Devices = [];
//  Devices.push("Iphone");
//  Devices.push("Samsung");
//  Devices.push("Oppo");
//  Devices.push("Vivo");
//  Devices.push("Tecno");

//  document.write( Devices);
 

//Q18

// var Devices = [];
//  Devices.push("Iphone");
//  Devices.push("Samsung");
//  Devices.push("Oppo");
//  Devices.push("Vivo");
//  Devices.push("Tecno");

//  document.write( Devices + "<br>");
  
//  var revers = Devices.sort()
//  document.write("after sorting : " + revers)


//Q19

// fisrt way but wrong

// var Devices = ["Iphone","Samsung","Oppo","Vivo","Tecno"]
// document.write("<select>")

// for(i = 0; i < Devices.length; ++i){
//     document.write("<option>" + Devices[i] + "</option>")

//     document.write("</select>")
// }

//Right way

// var Devices = ["Iphone","Samsung","Oppo","Vivo","Tecno"]

// document.write("<select>");
// document.write("<option>" + Devices[0] + "</option>")
// document.write("<option>" + Devices[1] + "</option>")
// document.write("<option>" + Devices[2] + "</option>")
// document.write("<option>" + Devices[3] + "</option>")
// document.write("<option>" + Devices[4] + "</option>")
// document.write("</select>");



//Q20

// var arrMulti = [[]];




//Q21

// var arrEmpty = [[],[],[],]