let circle =document.getElementById("circle");
let red =document.getElementById("red");
let  blue=document.getElementById("blue");
let green= document.getElementById("green");
let anycolor=document.getElementById("Anycolor");



red.addEventListener("click",()=>{
    circle.style.backgroundColor= "red";
})

blue.addEventListener("click",()=>{
    circle.style.backgroundColor="blue"
});
green.addEventListener("click",()=>{
    circle.style.backgroundColor="green"
});


anycolor.addEventListener("change",()=>{
    circle.style.backgroundColor=anycolor.value
})


// function clearFiled(){
//   const ele=  document.getElementById('red').value=" ";
// ele.remove;
// }
