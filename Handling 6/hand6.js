
let b1 = document.getElementById("b1")
let b2 = document.getElementById("b2")
let progress_bar_tid_container_id = document.getElementById("progress_bar_tid_container_id") 
let progress_bar_tid_id = document.getElementById("progress_bar_tid_id") 
let valgh1 = document.getElementById("valgh") 

let tb2 = document.getElementById("tb2") 
let tvalg1 = document.getElementById("tvalg") 

let progress_bar_percentage


let b1V = true; //handling 1 bilde 1 varibel  
let b2V = false; //handling 1 bilde 2varibel  
let valgh1V = false; //handling 1 valg varibel

if (b1V == true) {
    b1.style.animation = "fadeout 5s";
    b1.style.display = "block";
    valgh1.style.display = "none";
    b2.style.display = "none";
    progress_bar_tid_container_id.style.display ="none";
    
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
            progress_bar_tid_container_id.style.display = "block";
            progress_bar_tid_container_id.style.display = "block";
            progress_bar_tid_container_id.style.animation = "progress_animation 10s forwards";
            progress_bar_tid_container_id.addEventListener("animationend", () => {
                 location.reload();
                 location.href = "/index.html";
             })
        }
        });

        
        
     