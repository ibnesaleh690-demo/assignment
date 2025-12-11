var num1 = +prompt("Inter first number")
var num2 = +prompt("Inter second number")
var operators = prompt("Select operators   *, -,+,/")


var calcu =0;

if(operators === "+"){
 calcu =   num1 + num2
}
    

else if (operators === "*"){
   calcu = num1 * num2
}

else if (operators === "-"){
   calcu = num1 - num2
}

else if (operators === "/"){
 calcu =   num1 / num2
}
else{
    document.write("Plz Enter Correct Operatores ")
}    

document.write(`Result is : ${calcu}`)
    