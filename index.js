let h1 = document.getElementById ("h1")
let h5 = document.getElementById ("h5")
let h6 = document.getElementById ("h6")
let h9 = document.getElementById ("h9")
let h11 = document.getElementById ("h11")
let h12 = document.getElementById ("h12")
let h24 = document.getElementById ("h24")
let h25 = document.getElementById ("h25")
let h26 = document.getElementById ("h26")
let h27 = document.getElementById ("h27")
let h29 = document.getElementById ("h29")

let start_valg = document.getElementById("start_valg")
let til_historien = document. getElementById("til_historien")
let h1b1 = document.getElementById("h1b1")
let h1b2 = document.getElementById("h1b2")
let valgh1 = document.getElementById("valgh1") 
let progress_bar_tid_container_id1 = document.getElementById("progress_bar_tid_container_id1") 

til_historien.style.display = "none";
h1b1.style.display = "none";
h1b2.style.display = "none";
valgh1.style.display = "none";
progress_bar_tid_container_id1.style.display ="none";
h1.style.display = "none";
h5.style.display = "none";
h6.style.display = "none";
h9.style.display = "none";
h11.style.display = "none";
h12.style.display = "none";
h24.style.display = "none";
h25.style.display = "none";
h26.style.display = "none";
h27.style.display = "none";
h29.style.display = "none";

let sad_music = document.getElementById("sad_music")
let DL = document.getElementById("DL") // dramatisk musikk
let male_zombie = document.getElementById("male_zombie")
let suspensfull_musikk = document.getElementById("suspensfull_musikk")

let musikk = false;
//start
    let lyd_ikke = document.getElementById("lyd_ikke")
    let lyd = document.getElementById("lyd")

lyd_ikke.addEventListener("click", function() {
    start_valg.style.display = "none";
    til_historien.style.display = "block";
    musikk = false;
    sad_music.pause()
    DL.pause()
    suspensfull_musikk.pause()
    male_zombie.pause()
})


lyd.addEventListener("click", function () {
    start_valg.style.display = "none";
    til_historien.style.display = "block";
    musikk = true;
});

til_historien.addEventListener("click", function () {
    start_valg.style.display = "block";
    til_historien.style.display = "block";
    h1b1.style.display = "block";
    h1b2.style.display = "none";
    valgh1.style.display = "none";
    progress_bar_tid_container_id1.style.display ="none";
    h1.style.display = "block";
    h5.style.display = "none";
    h6.style.display = "none";
    h9.style.display = "none";
    h11.style.display = "none";
    h12.style.display = "none";
    h24.style.display = "none";
    h25.style.display = "none";
    h26.style.display = "none";
    h27.style.display = "none";
    h29.style.display = "none";
    h1b1.style.animation = "fadeout 5s";
    h1b1.style.display = "block";
    this.scrollIntoView({ behavior: "smooth",});
    if (musikk == true) {
        DL.play()
    }

} )
//start

localStorage.setItem(musikk, "musikk")

let th1b2 = document.getElementById("th1b2") 
let tvalg1 = document.getElementById("tvalg1") 

//handling 1 bilde 1 varibel  


th1b2.addEventListener('click', function () {
    start_valg.style.display = "block";
    til_historien.style.display = "block";
    h1b1.style.display = "block";
    h1b2.style.display = "block";
    valgh1.style.display = "none";
    progress_bar_tid_container_id1.style.display ="none";
    h5.style.display = "none";
    h6.style.display = "none";
    h9.style.display = "none";
    h11.style.display = "none";
    h12.style.display = "none";
    h24.style.display = "none";
    h25.style.display = "none";
    h26.style.display = "none";
    h27.style.display = "none";
    h29.style.display = "none";
    h1b2.style.animation = "fadeout 5s";
    localStorage.removeItem("balltre")
    localStorage.removeItem("gun")
    this.scrollIntoView({behavior: "smooth"});
    progress_bar_tid_container_id1.style.animation = "pause_animation 1s forwards"; // den spiller animationen
});

tvalg1.addEventListener('click', function () {
        this.scrollIntoView({behavior: "smooth"});
        valgh1.style.animation = "fadein 5s";
        valgh1.style.display = "flex";
        progress_bar_tid_container_id1.style.display = "block";
        progress_bar_tid_container_id1.style.display = "block";
        h5.style.display = "none";
        h6.style.display = "none";
        h9.style.display = "none";
        h11.style.display = "none";
        h12.style.display = "none";
        h24.style.display = "none";
        h25.style.display = "none";
        h26.style.display = "none";
        h27.style.display = "none";
        h29.style.display = "none";
        progress_bar_tid_container_id1.style.animation = "progress_animation 20s forwards"; // den spiller animationen
        progress_bar_tid_container_id1.addEventListener("animationend", function () { // skjekker når animationen er ferig
            location.reload(); // gjør slik at det refresher
        })
    
});

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


// til handling 5 
    let h5b1 = document.getElementById("h5b1")
    let h5b2 = document.getElementById("h5b2")
    let progress_bar_tid_container_id5 = document.getElementById("progress_bar_tid_container_id5") 
    let progress_bar_tid_id5 = document.getElementById("progress_bar_tid_id5") 
    let valgh5 = document.getElementById("valgh5") 

    let h5tb2 = document.getElementById("h5tb2") 
    let tvalg5 = document.getElementById("tvalg5") 

    let h9b1 = document.getElementById("h9b1")
    let h9b2 = document.getElementById("h9b2")
    let valgh9 = document.getElementById("valgh9") 

T5.addEventListener('click', function () {
    balltre = true;
    localStorage.setItem("balltre", balltre)
    // location.href = "/Handlinger/Handling5/han5.html"
    h5.style.display = "block";
    progress_bar_tid_container_id1.style.animation = "pause_animation 1s forwards"; // den spiller animationen
    this.scrollIntoView({behavior: "smooth"});
    h5b1.style.animation = "fadeout 5s";
    h5b1.style.display = "block";
    valgh5.style.display = "none";
    h5b2.style.display = "none";
    h6.style.display = "none";
    h9.style.display = "none";
    h11.style.display = "none";
    h12.style.display = "none";
    h24.style.display = "none";
    h25.style.display = "none";
    h26.style.display = "none";
    h27.style.display = "none";
    h29.style.display = "none";
    h9b1.style.display = "none";
    valgh9.style.display = "none";
    h9b2.style.display = "none";
    progress_bar_tid_container_id5.style.display ="none";
    if (musikk == true) {
       male_zombie.play()
    }

});

// til handling 5 

// Handling 1

// handling 5




h5tb2.addEventListener('click', function () {
    h5b2.style.animation = "fadein 5s";
    this.scrollIntoView({behavior: "smooth"});
    h5b2.style.display = "block ";
    valgh5.style.display = "none";
    h6.style.display = "none";
    h9.style.display = "none";
    h11.style.display = "none";
    h12.style.display = "none";
    h24.style.display = "none";
    h25.style.display = "none";
    h26.style.display = "none";
    h27.style.display = "none";
    h29.style.display = "none";
    h9b1.style.display = "none";
    valgh9.style.display = "none";
    h9b2.style.display = "none";
});

tvalg5.addEventListener('click', function () {
    this.scrollIntoView({behavior: "smooth"});
    valgh5.style.animation = "fadein 5s";
    valgh5.style.display = "flex";
    h6.style.display = "none";
    h9.style.display = "none";
    h11.style.display = "none";
    h12.style.display = "none";
    h24.style.display = "none";
    h25.style.display = "none";
    h26.style.display = "none";
    h27.style.display = "none";
    h29.style.display = "none";
    progress_bar_tid_container_id5.style.display = "block";
    progress_bar_tid_container_id5.style.display = "block";
    progress_bar_tid_container_id5.style.animation = "progress_animation 10s forwards";
    progress_bar_tid_container_id5.addEventListener("animationend", () => {
        location.reload();
        location.href = "/index.html";
    })
    
});

let h6b1 = document.getElementById("h6b1")
let h6b2 = document.getElementById("h6b2")
let valgh6 = document.getElementById("valgh6")

T6.addEventListener("click", function () {
    h9.style.display = "none";
    h11.style.display = "none";
    h12.style.display = "none";
    h24.style.display = "none";
    h25.style.display = "none";
    h26.style.display = "none";
    h27.style.display = "none";
    h29.style.display = "none";
    h6.style.display = "block";
    h6b1.style.animation = "fadeout 5s";
    h6b1.style.display = "block";
    h6b2.style.display = "none";
    valgh6.style.display = "none";
    h9.style.display = "none";
    progress_bar_tid_container_id5.style.animation = "pause_animation 1s forwards"; // den spiller animationen
    this.scrollIntoView({behavior: "smooth"});
})



let T9 = document.getElementById("T9") 


h9.style.display = "none";

T9.addEventListener("click", function () {
    h11.style.display = "none";
    h12.style.display = "none";
    h24.style.display = "none";
    h25.style.display = "none";
    h26.style.display = "none";
    h9.style.display = "block";
    h9b1.style.animation = "fadein 5s";
    h9b1.style.display = "block";
    valgh9.style.display = "none";
    h9b2.style.display = "none";
    progress_bar_tid_container_id5.style.animation = "pause_animation 1s forwards"; // den spiller animationen
    this.scrollIntoView({behavior: "smooth"} );
    
})

// handling 5

// handling 6


let h6tb2 = document.getElementById("h6tb2") 
let h6tvalg = document.getElementById("h6tvalg") 

h6tb2.addEventListener('click', function () {
        h6.style.display = "block";
        h9.style.display = "none";
        h11.style.display = "none";
        h12.style.display = "none";
        h24.style.display = "none";
        h25.style.display = "none";
        h26.style.display = "none";
        h6b2.style.animation = "fadein 5s";
        this.scrollIntoView({behavior: "smooth"});
        h6b2.style.display = "block ";
        valgh6.style.display = "none";
    });

h6tvalg.addEventListener('click', function () { 
        this.scrollIntoView({behavior: "smooth"});
        valgh6.style.animation = "fadein 5s";
        valgh6.style.display = "flex";
        h9.style.display = "none";
        h11.style.display = "none";
        h12.style.display = "none";
        h24.style.display = "none";
        h25.style.display = "none";
        h26.style.display = "none";
    });


 import { plussdead } from "/javascript.js";
 let TSD1 = document.getElementById("TSD1") 
 TSD1.addEventListener("click", function () {
    plussdead();
    if (Number(localStorage.getItem("dead")) < 5) {
        location.reload();
    } 
});

// handling 6

// handling 9



let H9tb2 = document.getElementById("H9tb2") 
let tvalg9 = document.getElementById("tvalg9") 

   
    

H9tb2.addEventListener('click', function () {
        h6.style.display = "none";
        h11.style.display = "none";
        h12.style.display = "none";
        h24.style.display = "none";
        h25.style.display = "none";
        h26.style.display = "none";
        h27.style.display = "none";
        h29.style.display = "none";
        valgh9.style.display = "none";
        h9b2.style.animation = "fadein 5s";
        this.scrollIntoView({behavior: "smooth"});
        h9b2.style.display = "block ";
        if (musikk == true) {
            male_zombie.pause()
            DL.pause();
            suspensfull_musikk.play()
        }
    });

    tvalg9.addEventListener('click', function () {
        h11.style.display = "none";
        h12.style.display = "none";
        h24.style.display = "none";
        h25.style.display = "none";
        h26.style.display = "none";
            this.scrollIntoView({behavior: "smooth"});
            valgh9.style.animation = "fadein 5s";
            valgh9.style.display = "flex";
            if (musikk == true) {
                suspensfull_musikk.pause()
            }
        });
    
    let h12b1 = document.getElementById("h12b1")
    let h12b2 = document.getElementById("h12b2")

    let h12tb2 = document.getElementById("h12tb2") 
    

    let T12 = document.getElementById("T12")
    T12.addEventListener("click", function () {
        h11.style.display = "none";
        h12.style.display = "none";
        h24.style.display = "none";
        h25.style.display = "none";
        h26.style.display = "none";
        h12.style.display = "block";
        h12b1.style.display = "block";
        h12b1.style.animation = "fadein 5s";
        h12b2.style.display = "none";
        this.scrollIntoView({behavior: "smooth"});
    })

    let h11b1 = document.getElementById("h11b1")
    let h11b2 = document.getElementById("h11b2")

    let T11 = document.getElementById("T11") 
    T11.addEventListener("click", function () {
        h12.style.display = "none";
        h24.style.display = "none";
        h25.style.display = "none";
        h26.style.display = "none";
        h11.style.display = "block";
        this.scrollIntoView({behavior: "smooth"});
        h11b1.style.display = "block";
        h11b1.style.animation = "fadein 5s";
        h11b2.style.display = "none";
        if (musikk == true) {
            sad_music.play()
        }
    })


// handling 9

// handling11


let h11tb2 = document.getElementById("h11tb2") 

    h11tb2.addEventListener('click', function () {
        h11b2.style.animation = "fadein 5s";
        this.scrollIntoView({behavior: "smooth"});
        h11b2.style.display = "block";
        h12.style.display = "none";
        h24.style.display = "none";
        h25.style.display = "none";
        h26.style.display = "none";
    });



    let h11TS = document.getElementById("h11TS") 
    h11TS.addEventListener("click", function () {
        location.reload();
        sad_music.pause()
        h12.style.display = "none";
        h24.style.display = "none";
        h25.style.display = "none";
        h26.style.display = "none";
    })

    
// handling 11

// handling 12

    h12tb2.addEventListener('click', function () {
        h12b2.style.animation = "fadein 5s";
        this.scrollIntoView({behavior: "smooth"});
        h12b2.style.display = "block ";
        h11.style.display = "none";
        h24.style.display = "none";
        h25.style.display = "none";
        h26.style.display = "none";
    });
    
    let h24b1 = document.getElementById("h24b1")
    let h24b2 = document.getElementById("h24b2")

    let h24tb2 = document.getElementById("h24tb2") 


    let h12T24 = document.getElementById("h12T24") 
    h12T24.addEventListener("click", function () {
        h24.style.display = "block";
        h24b1.style.animation = "fadein 5s";
        h24b1.style.display = "block";
        h24b2.style.display = "none";
        h11.style.display = "none";
        h25.style.display = "none";
        h26.style.display = "none";
        h29.style.display = "none";
        this.scrollIntoView({behavior: "smooth"});
    })


// handling 12

//handling 24

h24tb2.addEventListener('click', function () {
        h24b2.style.animation = "fadein 5s";
        this.scrollIntoView({behavior: "smooth"});
        h24b2.style.display = "block ";
        h25.style.display = "none";
        h26.style.display = "none";
        h29.style.display = "none";
    });

    let h26b1 = document.getElementById("h26b1")
    let h26b2 = document.getElementById("h26b2")

    let h25b1 = document.getElementById("h25b1")

    let h24T25 = document.getElementById("h24T25") 
    h24T25.addEventListener("click", function () {
        // location.href = "/Handlinger/Handling25/han25.html";
        h25.style.display = "block";  
        h25b1.style.display = "block"; 
        h25b1.style.animation = "fadein 5s"; 
        this.scrollIntoView({behavior: "smooth"});
        console.log("hello")
        h26.style.display = "none";
        h29.style.display = "none";
        h26b1.style.display = "none";
        h26b2.style.display = "none";
    })

// handling 24

// handling 25
    balltre = (localStorage.getItem("balltre"))
    gun = (localStorage.getItem("gun"))

    let h25T26_27 = document.getElementById("h25T26_27") 

    h25T26_27.addEventListener("click", function () {
        if (balltre == true) {
            // location.href = "/Handlinger/Handling26/han26.html"
            h26b1.style.animation = "fadeout 5s";
            h26b1.style.display = "block";
            h26b2.style.display = "none";
            h26.style.display = "block";
            h29.style.display = "none";
            
            this.scrollIntoView({behavior: "smooth"});
        }
        if (gun == true) {
            // location.href = "/Handlinger/Handling27/han27.html"
            h27.style.display = "block";
            h27b1.style.animation = "fadeout 5s";
            h27b1.style.display = "block";
            h27b2.style.display = "none";
        }
    })


// handling 25

// handling 26



let h26tb2 = document.getElementById("h26tb2") 

h26tb2.addEventListener('click', function () {
    h26b2.style.animation = "fadein 5s";
    this.scrollIntoView({behavior: "smooth"});
    h26b2.style.display = "block ";

});

 let h26TSD1 = document.getElementById("h26TSD1") 
 h26TSD1.addEventListener("click", function () {
    plussdead ();
    if (localStorage.getItem("dead") < 4) {
        location.href = "/index.html"
    } 
 })
    
    

    

// handling 26


// handling 27 

let h27b1 = document.getElementById("h27b1")
let h27b2 = document.getElementById("h27b2")

let h27tb2 = document.getElementById("h27tb2") 




    
    

h27tb2.addEventListener('click', function () {
        b2.style.animation = "fadein 5s";
        this.scrollIntoView({behavior: "smooth"});
        b2.style.display = "block ";    
   
    });

    let h29b1 = document.getElementById("h29b1")
    let h29b2 = document.getElementById("h29b2")

    let h27T29 = document.getElementById("h27T29") 
    h27T29.addEventListener("click", function () {
        // location.href = "/Handlinger/Handling29/han29.html";
        h29b1.style.animation = "fadeout 5s";
        h29b1.style.display = "block";
        h29b2.style.display = "none";
        h29.style.display = "block";
    })


// handling 27

// handling 29



let h29tb2 = document.getElementById("h29tb2") 





   
    

    h29tb2.addEventListener('click', function () {
        h29b2.style.animation = "fadein 5s";
        this.scrollIntoView({behavior: "smooth"});
        h29b2.style.display = "block ";
    });

 

    let h29TA5 = document.getElementById("h29TA5") 
    h29TA5.addEventListener("click", function () {
        location.href = "/Handlinger/Avsluttning5/AVS5.html";
    })

  

// handling 29

