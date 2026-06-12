
// let color = document.getElementById("color")
// let red = document.getElementById("red")
// let blue = document.getElementById("blue")
// let green = document.getElementById("green")

// red.addEventListener("click",function(){
//     color.style.color = "red";
// })

// blur.addEventListener("click",function(){
//     color.style.color = "blue";
// })
// green.addEventListener("click",function(){
//     color.style.color = "green";
// })


// let list = document.querySelectorAll("li")
// for(let i=0;i<list.length;i++){
//     console.log(list[i].textContent)
// }


// let para = document.querySelectorAll("p")
// let h1 = document.querySelectorAll("h1")

// para.forEach(function(ele){
// ele.style.fontSize = "28px";
// })

// h1.forEach(function(ele){
//     ele.style.color = "red";
// })

// let p = document.querySelector("p")



// function dblclick(){
//     p.style.color = "yellow";
// }

// p.addEventListener("dblclick", dblclick );
// p.removeEventListener("dblclick",dblclick)

// let input = document.querySelector("input")

// input.addEventListener("input",function(helo){
//    console.log(helo.data)
   
// })


let h1 = document.querySelector("h1")

 window.addEventListener("keydown",function(details){
    h1.textContent = details.key;
    if(details.key === " "){
        h1.textContent = "spc"
    }
    else{
        h1.textContent = details.key;
    }
})