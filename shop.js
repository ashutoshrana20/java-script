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

// let h1 = document.querySelector("h1")

//  window.addEventListener("keydown",function(details){
//     h1.textContent = details.key;
//     if(details.key === " "){
//         h1.textContent = "spc"
//     }
//     else{
//         h1.textContent = details.key;
//     }
// })

// let form = document.querySelector ('form');
// let inputs = document.querySelectorAll ('input');
// let main = document.querySelector("#main")

// form.addEventListener ('submit', function (details) {
//   details.preventDefault ();

//   let card = document.createElement ('div');
//   card.classList.add ('card');

//   let profile = document.createElement ('div');
//   profile.classList.add ('profile');

//   let img = document.createElement ('img');
//   img.setAttribute (
//     'src',
//     'https://images.unsplash.com/photo-1773332611550-9f5a465b4e42?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2NHx8fGVufDB8fHx8fA%3D%3D'
//   );


//   let h3 = document.createElement("h3")
//   h3.textContent = "ghoda ghodi";
//   let h5 = document.createElement("h5");
//    h5.textContent = "Ghoda";
//   let p = document.createElement("p")
//   p.textContent = "ghoda is very good"


//   profile.appendChild("img");
//   card.appendChild("profile")


//   card.appendChild(h3)
//   card.appendChild(profile)
//   card.appendChild(p)


//   card.appendChild (h5);
//   card.appendChild (p);

//   main.appendChild (card);

//   card.appendChild (profile);
//   console.log (card);

//   inputs.forEach (function (inp) {
//     if (inp.type !== 'submit') {
//       inp.value = '';
//     }
//   });
// });


// let abcd = document.querySelector("#abcd");


// abcd.addEventListener("mouseover", function(){
//     abcd.style.backgroundColor = "yellow";
// })


// abcd.addEventListener("mouseout", function(){
//     abcd.style.backgroundColor = "red";
// })

// window.addEventListener("mousemove",function(details){
//     abcd.style.top = details.clientX, + "px";
//     abcd.style.left = details.clientY, + "px";
//     console.log(details.clientX,details.clientY)
// })


// let nm = document.querySelector("#name");
// let form = document.querySelector("form");

// form.addEventListener("submit",function(details){
//     details.defaultPrevented();


//     if(nm.ariaValueMax.length <=2){
//         document.querySelector("#hide").style.display = "initial"
//     }
//     else{
//         document.querySelector("#hide").style.display = "none"
//     }

// })

// let count = 10;
// let interval = setInterval((function) {
//     if(count<=1){
//         console.log(count)
//     } else{
//         clearInterval(interval)
//     }
// }, interval);

// let count = 10;
//  let interval = setInterval(function(){
//     if(count>=1){

//         console.log(count)
//     count--;
    
//     }
//     else{
//         clearInterval(interval)
//     }
// },1000);

// let x = 10;

// function greet(name){
//      let message = "hello";
//      console.log(message,name,x)
// }
// greet("AShu")

// let result = 0;
// function cal(opp,x,y){
// if(opp==="Add"){
//      result = x+y;

// }
// else if(opp==="subtract"){
//      result = x-y
// }
// else if(opp==="multply"){
//      result = x*y;
// } 
// else if(opp==="divide"){
//      result = x/y
// }
// else{
//      result = -1;
// }
// return result;

// }

// let results = cal("multply",20,10)
// console.log("result",results)




// let balance = 1000;

// function checkbalance(){
//      console.log("your current blance is ",balance)
// }
// function deposite(amount){
//     balance =  balance + amount;
//      console.log("your total blance is with deposite ",amount )
// }
// function withdrawl(amount){
//      balance = balance - amount; 
//     console.log("your total blance is ,with withdrawl", amount)

// }
// checkbalance()
// deposite(15000)
// checkbalance()
// withdrawl(10000)
// checkbalance()
// withdrawl(2000)
// checkbalance()



// let obj = {
//     name: "harsh",
//     age:24,
//    sayHi: function (){
//    console.log(this.name)
//     }
// }
// obj.sayHi()


// let name = document.querySelector("h1")
// .addEventListener("click", function(){
//     console.log(this)
// })




// let form = document.querySelector("form")

// const userManager = {
//     users: [],
//     init:function(){
//    form.addEventListener("submit",this.submitForm() );
//     },
//     submitForm: function(e){
//         e.preventDefault();
//         console.log(this);
//     },


//     adduser: function(){},
//     removeUser: function(){},
// };
// userManager.init();



// function Creatbiscuit(name,price,quantity,company,category){
//     this.name = name;
//     this.quntity = quantity;
//     this.company = company;
//     this.price = price;
//     this.category = category;

// }

// let biscuit1 = new Creatbiscuit("oreo",10,5,"cadbury","choclate");
// let biscuit2 = new Creatbiscuit("Fantsy",20,9,"Cadbury","choclete Field")


// function kuchderbaadm(val){
    
//     setTimeout(() => {
//         console.log("hrllo")
//     },3000);

// }
// kuchderbaadm();


// setInterval(() => {
//     console.log("Hello Ashu");
// }, 2000);


//    let id = setInterval(() => {
//     console.log("running")
//    }, 1000); 

//    setTimeout(() => {
//     clearInterval(id)
//    }, 5000);


   
//   console.log("start");

//   setTimeout(() => {
//     console.log("set time")
//   }, 2000);
//   console.log("end")

// setInterval(() => {
//     console.log("setInterval")
// }, 3000);





// let student = {
//     name:"Ashu",
//     age:25,
//     class:10,
// }

// console.log(student)
// console.log(student.age)


// let id = setInterval(() => {
//     console.log("hello ")
// },1000);

// setTimeout(() => {
//     clearInterval(id)
// }, 5000);



function callbackee(ashu,cb){
setTimeout(() => {
    console.log(`profile fatched of ${ashu}`);
}, 3000);
}
callbackee("hyyy",function(){});

console.log(`hello ashutosh {ashu}`)