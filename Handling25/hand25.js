
let b1 = document.getElementById("b1")








let b1V = true; //handling 1 bilde 1 varibel  
let b2V = false; //handling 1 bilde 2varibel  
let valgh1V = false; //handling 1 valg varibel

if (b1V == true) {
    b1.style.animation = "fadeout 5s";
    b1.style.display = "block";
}
let balltre = (localStorage.getItem("balltre")) === "true"; 
let gun = (localStorage.getItem("gun")) === "true"; 

    let T26_27 = document.getElementById("T26_27") 
    T26_27.addEventListener("click", function () {
        if (balltre == true) {
            location.href = "/Handling26/han26.html"
        }
        if (gun == true) {
            location.href = ""
        }
    })

    
