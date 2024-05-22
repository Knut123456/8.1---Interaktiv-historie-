// localStorage.setItem("dead", 0);

// function plussdead (){
//     localStorage.setItem("dead", localStorage.getItem("dead")+ 1)
//     console.log(localStorage.getItem("dead"))
//     console.log ("skjekker om død")
// }

// export {plussdead} 

let dead = 0

let TSD1 = document.getElementById("TSD1") 
TSD1.addEventListener("click", function () {
    dead = dead + 1;
    location.href = "/Index.html"
})

if (dead == 4) {
    
}
