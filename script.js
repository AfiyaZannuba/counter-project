let count = 0;

//select value and buttons

const value = document.querySelector("#value")
const btns = document.querySelectorAll(".btn")
btns.forEach(function(item){
item.addEventListener("click", function(e){
    const styleClasses = e.target.classList;
    if(styleClasses.contains('decrease')){
        count--;
    }
    else if(styleClasses.contains('increase')){
        count++
    }
    else{
        count = 0;
    }
    if(count > 0){
        value.style.color = "green"
    }
    if(count<0){
        value.style.color = "red"
    }
    if(count === 0){
value.style.color = "black"
    }
    value.textContent = count;
})
})