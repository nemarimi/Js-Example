let b1=document.getElementsByClassName("b1")[0];
let b2=document.getElementsByClassName("b2")[0];
let b3=document.getElementsByClassName("b3")[0];
let box1=document.getElementsByClassName("box1")[0];
let box2=document.getElementsByClassName("box2")[0];


b1.addEventListener("click", show);
function show(){
    box1.classList.add("show");
    box1.classList.remove("hide");
    box2.classList.add("show");
    box2.classList.remove("hide");
}

b2.addEventListener("click", hide)
function hide(){
    box1.classList.add("hide");
    box1.classList.remove("show");
    box2.classList.add("hide");
    box2.classList.remove("show");
}

b3.addEventListener("click", both);
function both(){
    box1.classList.toggle("both")
    box2.classList.toggle("both")
}