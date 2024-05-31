let h1 = document.getElementById ("h1")
let h5 = document.getElementById ("h5")
let h6 = document.getElementById ("h6")
let h9 = document.getElementById ("h9")

// Handling 1

let sad_music = document.getElementById("sad_music")
let DL = document.getElementById("DL")
let male_zombie = document.getElementById("male_zombie")

let h1b1 = document.getElementById("h1b1")
let h1b2 = document.getElementById("h1b2")
let progress_bar_tid_container_id1 = document.getElementById("progress_bar_tid_container_id1") 
let progress_bar_tid_id1 = document.getElementById("progress_bar_tid_id1") 
let valgh1 = document.getElementById("valgh1") 

let th1b2 = document.getElementById("th1b2") 
let tvalg1 = document.getElementById("tvalg1") 

let h1b1V = true; //handling 1 bilde 1 varibel  
let h1b2V = false; //handling 1 bilde 2varibel  
let valgh1V = false; //handling 1 valg varibel

if (h1b1V == true) {
    h1b1.style.animation = "fadeout 5s";
    h1b1.style.display = "block";
    valgh1.style.display = "none";
    h1b2.style.display = "none";
    progress_bar_tid_container_id1.style.display ="none";
    h5.style.display = "none";
    h6.style.display = "none";
    h9.style.display = "none";
    DL.play()
}

th1b2.addEventListener('click', function () {
    if (h1b1V == true) {
        h1b2.style.animation = "fadein 5s";
        this.scrollIntoView({ behavior: "smooth",});
        h1b2.style.display = "block ";
        h1b2V = true;
        localStorage.removeItem("balltre")
        localStorage.removeItem("gun")
        DL.play()
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
        progress_bar_tid_container_id1.style.animation = "progress_animation 20s forwards"; // den spiller animationen
        progress_bar_tid_container_id1.addEventListener("animationend", function () { // skjekker når animationen er ferig
            location.reload(); // gjør slik at det refresher
        })
    }
});

let H5V = false;
let H2V = false;



let balltre = (localStorage.getItem("balltre")) || 0; // det henter en varibel i localstorage og gjør det i en varibler i javascript
let gun = (localStorage.getItem("gun")) || 0;

let T2 = document.getElementById("T2") 
T2.addEventListener('click', function () {
    location.href = "/handlinger/handling2/han2.html";
    gun = true // gjør slik at gun som jeg fikk av 
    localStorage.setItem("gun", gun)
    progress_bar_tid_container_id1.style.animation = "pause_animation 1s forwards"; // den spiller animationen
});

let T5 = document.getElementById("T5")
let b5V

// til handling 5 
    let h5b1 = document.getElementById("h5b1")
    let h5b2 = document.getElementById("h5b2")
    let progress_bar_tid_container_id5 = document.getElementById("progress_bar_tid_container_id5") 
    let progress_bar_tid_id5 = document.getElementById("progress_bar_tid_id5") 
    let valgh5 = document.getElementById("valgh5") 

    let h5tb2 = document.getElementById("h5tb2") 
    let tvalg5 = document.getElementById("tvalg5") 

T5.addEventListener('click', function () {
    balltre = true;
    localStorage.setItem("balltre", balltre)
    // location.href = "/Handlinger/Handling5/han5.html"
    h5.style.display = "block";
    progress_bar_tid_container_id1.style.animation = "pause_animation 1s forwards"; // den spiller animationen
    this.scrollIntoView({behavior: "smooth"});
    b5V = true; 
    h5b1.style.animation = "fadeout 5s";
    h5b1.style.display = "block";
    valgh5.style.display = "none";
    h5b2.style.display = "none";
    progress_bar_tid_container_id5.style.display ="none";
    male_zombie.play()
    
});

// til handling 5 

// Handling 1

// handling 5

 //handling 5 bilde 1 varibel  
let b5b2V = false; //handling 5 bilde 2 varibel  
let valgh5V = false; //handling 5 valg varibel


h5tb2.addEventListener('click', function () {
    h5b2.style.animation = "fadein 5s";
    this.scrollIntoView({behavior: "smooth"});
    h5b2.style.display = "block ";
    b5b2V = true;
});

tvalg5.addEventListener('click', function () {
    if (b5b2V == true) {
        this.scrollIntoView({behavior: "smooth"});
        valgh5.style.animation = "fadein 5s";
        valgh5.style.display = "flex";
        valgh5V = true;
        progress_bar_tid_container_id5.style.display = "block";
        progress_bar_tid_container_id5.style.display = "block";
        progress_bar_tid_container_id5.style.animation = "progress_animation 10s forwards";
        progress_bar_tid_container_id5.addEventListener("animationend", () => {
            location.reload();
            location.href = "/index.html";
        })
    }
});



T6.addEventListener("click", function () {
    h6.style.display = "block";
    progress_bar_tid_container_id5.style.animation = "pause_animation 1s forwards"; // den spiller animationen
    this.scrollIntoView({behavior: "smooth"});
})

let H9L1 = document.getElementById("H9L1")
let H9L2 = document.getElementById("H9L2")

let T9 = document.getElementById("T9") 

let h9b1V = false; 
h9.style.display = "none";

T9.addEventListener("click", function () {
    h9.style.display = "block";
    h9b1V = true; 
    progress_bar_tid_container_id5.style.animation = "pause_animation 1s forwards"; // den spiller animationen
    this.scrollIntoView({behavior: "smooth"} );
})

// handling 5

// handling 6


let h6b1 = document.getElementById("h6b1")
let h6b2 = document.getElementById("h6b2")
let valgh6 = document.getElementById("valgh6")

let h6tb2 = document.getElementById("h6tb2") 
let h6tvalg = document.getElementById("h6tvalg") 

let h6b1V = true; //handling 6 bilde 1 varibel  
let h6b2V = false; //handling 6 bilde 2varibel  
let valgh6V = false; //handling 6 valg varibel

if (h6b1V == true) {
    h6b1.style.animation = "fadeout 5s";
    h6b1.style.display = "block";
    h6b2.style.display = "none";
    valgh6.style.display = "none";
}

h6tb2.addEventListener('click', function () {
        h6b2.style.animation = "fadein 5s";
        this.scrollIntoView({behavior: "smooth"});
        h6b2.style.display = "block ";
        h6b2V = true;
   
    });

h6tvalg.addEventListener('click', function () {
    if (h6b2V == true) {
        this.scrollIntoView({behavior: "smooth"});
        valgh6.style.animation = "fadein 5s";
        valgh6.style.display = "flex";
        valgh6V = true;
    }
    });


 import { plussdead } from "/javascript.js";
 let TSD1 = document.getElementById("TSD1") 
 TSD1.addEventListener("click", function () {
    plussdead();
    if (Number(localStorage.getItem("dead")) < 5) {
        // location.href = "/index.html";
    } 
});

// handling 6

// handling 9

let h9b1 = document.getElementById("h9b1")
let h9b2 = document.getElementById("h9b2")
let valgh9 = document.getElementById("valgh9") 

let H9tb2 = document.getElementById("H9tb2") 
let tvalg9 = document.getElementById("tvalg9") 


let h9b2V = false; //handling 1 bilde 2varibel  
let valgh9V = false; //handling 1 valg varibel


let H9L3 = document.getElementById("H9L3")
if (h9b1V == true) {
    h9b1.style.animation = "fadeout 5s";
    h9b1.style.display = "block";
    valgh9.style.display = "none";
    h9b2.style.display = "none";
    
}

H9tb2.addEventListener('click', function () {
        h9b2.style.animation = "fadein 5s";
        this.scrollIntoView({behavior: "smooth"});
        h9b2.style.display = "block ";
        b2V = true;
        H9L1.pause()
        H9L2.pause()
        H9L3.play()
        h9b2V = true;
    });

    tvalg9.addEventListener('click', function () {
        if (h9b2V == true) {
            this.scrollIntoView({behavior: "smooth"});
            valgh9.style.animation = "fadein 5s";
            valgh9.style.display = "flex";
            valgh9V = true;
        }
        });

    let T12 = document.getElementById("T12")
    T12.addEventListener("click", function () {
        location.href = "/Handlinger/Handling12/han12.html ";
    })

    let T11 = document.getElementById("T11") 
    T11.addEventListener("click", function () {
        location.href = "/Handlinger/Handling11/han11.html";
        
    })


// handling 9