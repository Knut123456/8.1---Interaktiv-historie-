


// Handling 1
let h1 = document.getElementById("h1")

let h1b1 = document.getElementById("h1b1")
let h1b2 = document.getElementById("h1b2")
let progress_bar_tid_container_id1 = document.getElementById("progress_bar_tid_container_id1") 
let progress_bar_tid_id1 = document.getElementById("progress_bar_tid_id1") 
let valgh1 = document.getElementById("valgh1") 

let th1b2 = document.getElementById("th1b2") 
let tvalg1 = document.getElementById("tvalg1") 

let progress_bar_percentage


let h1b1V = true; //handling 1 bilde 1 varibel  
let h1b2V = false; //handling 1 bilde 2varibel  
let valgh1V = false; //handling 1 valg varibel

if (h1b1V == true) {
    h1b1.style.animation = "fadeout 5s";
    h1b1.style.display = "block";
    valgh1.style.display = "none";
    h1b2.style.display = "none";
    progress_bar_tid_container_id1.style.display ="none";
    
}

th1b2.addEventListener('click', function () {
    if (h1b1V == true) {
        h1b2.style.animation = "fadein 5s";
        this.scrollIntoView({behavior: "smooth"});
        h1b2.style.display = "block ";
        h1b2V = true;
        localStorage.removeItem("balltre")
        localStorage.removeItem("gun")
    }
    });

    tvalg1.addEventListener('click', function () {
        if (h1b2V == true) {
            this.scrollIntoView({behavior: "smooth"});
            valgh1.style.animation = "fadein 5s";
            valgh1.style.display = "flex";
            valgh1V = true;
            progress_bar_tid_container_id1.style.display = "block";
            progress_bar_tid_container_id1.style.display = "block";
            progress_bar_tid_container_id1.style.animation = "progress_animation 20s forwards";
            progress_bar_tid_container_id1.addEventListener("animationend", () => {
                 location.reload();
             })
        }
        });

    let H5V = false;
    let H2V = false;

let balltre = (localStorage.getItem("balltre")) || 0; 
let gun = (localStorage.getItem("gun")) || 0;

let T2 = document.getElementById("T2") 
T2.addEventListener('click', function () {
    location.href = "/Handlinger/Handling2/han2.html"
    gun = true
    localStorage.setItem("gun", gun)
    });



let T5 = document.getElementById("T5")


T5.addEventListener('click', function () {
    balltre = true;
    localStorage.setItem("balltre", balltre)
    location.href = "/Handlinger/Handling5/han5.html"
});

// Handling 1

