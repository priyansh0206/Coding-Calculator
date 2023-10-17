var display = document.getElementById("display");
var buttons = document.getElementsByClassName("button");
var operand1 = 0;
var operand2 = 1;
var operator = null;
var last = null;

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click",calc);
}

// function calc() 
// {   
//     var value = this.getAttribute("data-value");
//     if (value=="AC")
//     {
//         display.innerText= null;
//         operand1 = 0;
//         operand2 = 1;
//         operator = null;
//     }
//     else if (value=="+" || 
//             value=="-" || 
//             value=="*" || 
//             value=="/" ||
//             value=="%")
//     {
//         if (operator != null){
//             var oprt = operator;
//         }
//         operator = value;
//         if (oprt != null)
//         {
//             console.log("before", operand1);
//             operand1 = eval(operand1 + " " + oprt + " " + parseFloat(display.innerText));
//         }
//         else
//         {
//             operand1 = parseFloat(display.innerText);
//         }
//         display.innerText = null;
//         console.log(operand1);
//     }
//     else if (value=="=")
//     {   
//         if(display.innerText == ""){
//             operand2 = parseFloat(operand2);
//         }
//         else{
//             operand2 = parseFloat(display.innerText);
//         }
//         if(operator == "%"){
//             display.innerText = ((operand1/100) * operand2);
//         }
//         else{
//             operand2 = parseFloat(display.innerText);
//             display.innerText = eval(operand1 + " " + operator + " " + operand2);
//         }
//         console.log(operand2);
//         console.log(display.innerText);
//     }
//     else
//     {
//         display.innerText += value;
//     }
// }

function calc() 
{   
    var value = this.getAttribute("data-value");
    if ((display.innerText=="")&&(value=="+" || value=="-" || value=="*" || value=="/" || value=="%" || value=="="))
    {
        return
    }
    if (value=="AC")
    {
        display.innerText= null;
    }
    else if (value=="=")
    {   
        if(last=="+" || last=="-" || last=="*" || last=="/" || last=="%")
        {
            return
        }
        try{
            display.innerText = eval(display.innerText);
        }
        catch(error){
            display.innerText = "Error";
        }
        
    }
    else if (value=="+/-")
    {   
        if(display.innerText[0]=="-")
        {
            var disp = ""
            for(i=1;i<display.innerText.length;i++)
            {
                disp = disp + display.innerText[i];
            }
            display.innerText = disp;
        }
        else
        {
            display.innerText = "-" + display.innerText;
        }
    }
    // else if (value=="%")
    // {   
    //     res = eval(display.innerText);
    //     display.innerText = eval(res + "/" + 100 + "*" + res);
    // }
    else
    {   
        if((last=="+" || last=="-" || last=="*" || last=="/" || last=="%")
        && (value=="+" || value=="-" || value=="*" || value=="/" || value=="%"))
        {
            display.innerText = display.innerText
        }
        else{
            display.innerText += value;
        }
        last = value;
    }


}





//     var value = this.getAttribute("data-value");

//     if (value === "reset") {
//       display.innerText = null;
//     } else if (
//       value === "+" ||
//       value === "-" ||
//       value === "*" ||
//       value === "/" ||
//       value === "%"
//     ) {
//       operator = value;
//       operand1 = parseFloat(display.innerText);
//       console.log("opera 1 = ", operand1);
//       display.innerText = null;
//     } else if (value === "=") {
//       if (operator != null) {
//         operand2 = parseFloat(display.innerText);
//         display.innerText = eval(operand1 + " " + operator + " " + operand2);
//       } else {
//         display.innerText = "Error";
//       }
//     } else if (value == "sign") {
//       display.innerText = eval(parseFloat(display.innerText) * -1);
//     } else if (value == ".") {
//       if (display.innerText.length && !display.innerText.includes(".")) {
//         display.innerText += value;
//       }
//     } else {
//       display.innerText += value;
//     }
//   });
// }

// // Input with Keys

// document.addEventListener("keypress", function (event) {
//   var key;
//   key = event.keyCode;
//   var value = String.fromCharCode(key);
//   console.log(key + " " + value);
//   var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

//   if (
//     value == "+" ||
//     value == "-" ||
//     value == "*" ||
//     value == "/" ||
//     value == "%"
//   ) {
//     operator = value;
//     operand1 = parseFloat(display.innerText);
//     display.innerText = null;
//   } else if (key == "13") {
//     if (operator != null) {
//       operand2 = parseFloat(display.innerText);
//       display.innerText = eval(operand1 + " " + operator + " " + operand2);
//     } else {
//       display.innerText = "Error";
//     }
//   } else if (value == ".") {
//     if (display.innerText.length && !display.innerText.includes(".")) {
//       display.innerText += value;
//     }
//   } else if (value in numArray) {
//     display.innerText += value;
//   }
// });

// // For Clearing display with delete Key

// document.addEventListener("keydown", function (event) {
//   var key;
//   key = event.keyCode;

//   if (key == "8") {
//     display.innerText = null;
//   }
// })