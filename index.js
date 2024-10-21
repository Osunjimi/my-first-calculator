const numbers = (value) =>{
    let display = document.getElementById("display");
     display.value += value;
 }
 const equals = () =>{
    let display = document.getElementById("display");
     display.value = eval(display.value);
 }
 const clearScreen = () =>{
     display.value = ''
 }
 const backSpace = () => {
    let display = document.getElementById("display");
     display.value = display.value.slice(0,-1)
 }