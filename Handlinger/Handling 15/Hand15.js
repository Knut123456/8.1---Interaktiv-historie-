
let b1 = document.getElementById("b1")
let b2 = document.getElementById("b2")

let valgh1 = document.getElementById("valgh") 

let tb2 = document.getElementById("tb2") 
let tvalg1 = document.getElementById("tvalg") 




let b1V = true; //handling 1 bilde 1 varibel  
let b2V = false; //handling 1 bilde 2 varibel  
let valgh1V = false; //handling 1 valg varibel

if (b1V == true) {
    b1.style.animation = "fadeout 5s";
    b1.style.display = "block";
    valgh1.style.display = "none";

}

tvalg1.addEventListener('click', function () {
        this.scrollIntoView({behavior: "smooth"});
        valgh1.style.animation = "fadein 5s";
        valgh1.style.display = "flex";
        valgh1V = true;
    })

    let T16 = document.getElementById("T16") 
    T16.addEventListener('click', function () {
        location.href = "/Handlinger/Handling 16/Han16.html"
        });
        
        
        
let TA4 = document.getElementById("TA4") // til avsluntnig 3 //
        
        
TA4.addEventListener('click', function () {
   location.href = "/Handlinger/Avsluttning4/AVS4.html"
 });
    

        
        
     