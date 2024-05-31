
let b1 = document.getElementById("b1")
let b2 = document.getElementById("b2")

let valgh1 = document.getElementById("valgh") 

let tb2 = document.getElementById("tb2") 
let tvalg1 = document.getElementById("tvalg") 




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
    tvalg1.addEventListener('click', function () {
        if (b2V == true) {
            this.scrollIntoView({behavior: "smooth"});
            valgh1.style.animation = "fadein 5s";
            valgh1.style.display = "flex";
            valgh1V = true;

        }
        });

    let T15 = document.getElementById("T15") 
    T15.addEventListener('click', function () {
        location.href = "/Handlinger/Handling 15/Han15.html"
        });
        
        
        
let TA3 = document.getElementById("TA3") // til avsluntnig 3 //
        
        
TA3.addEventListener('click', function () {
   location.href = "/Handlinger/Avsluttning3/AVS3.html"
 });
    

        
        
     