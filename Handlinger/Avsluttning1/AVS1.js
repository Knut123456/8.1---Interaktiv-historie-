
let b1 = document.getElementById("b1")
let b2 = document.getElementById("b2")

let tb2 = document.getElementById("tb2") 

let b1V = true; //handling 1 bilde 1 varibel  
let b2V = false; //handling 1 bilde 2varibel  
let valgh1V = false; //handling 1 valg varibel

if (b1V == true) {
    b1.style.animation = "fadeout 5s";
    b1.style.display = "block";
    b2.style.display = "none";
}

tb2.addEventListener('click', function () {
        b2.style.animation = "fadein 5s";
        this.scrollIntoView({behavior: "smooth"});
        b2.style.display = "block ";
        b2V = true;
    });

   

    let TS = document.getElementById("TS") 
    TS.addEventListener("click", function () {
        location.href = "/Index.html";
        
    })

    