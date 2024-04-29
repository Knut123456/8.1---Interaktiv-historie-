// Handling 1
let h1 = document.getElementById("h1")
let h2 = document.getElementById("h2") 

let T2 = document.getElementById("T2")


let h1b1 = document.getElementById("h1b1")
let h1b2 = document.getElementById("h1b2")
let progress_bar_tid_container_id1 = document.getElementById("progress_bar_tid_container_id1") 
let progress_bar_tid_id1 = document.getElementById("progress_bar_tid_id1") 
let valg1 = document.getElementById("valg1") 

let progress_bar_percentage

let han1 = true; //handling 1 animation 

if (han1 == true) {
    h2.style.display ="none";
    h1b1.style.animation = "fadeout 5s"; // 5s
    h1b2.style.display = "none";
    valg1.style.display = "none";
    progress_bar_tid_container_id1.style.display = "none";
    setTimeout(() => {
        h1b2.style.animation = "fadein 5s"; // 5s
        h1b1.style.display = "none";
        h1b2.style.display = "flex";
        progress_bar_tid_container_id1.style.display = "flex";
        progress_bar_tid_container_id1.style.animation = "progress_animation 5s forwards";
        progress_bar_tid_container_id1.addEventListener("animationend", () => {
            location.reload();
        })
        ;
        }, 5000);
        }




h1b2.addEventListener("click", function () {
    valg1.style.display = "flex";


})

// Handling 1


