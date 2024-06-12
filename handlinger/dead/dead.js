
let b1 = document.getElementById("b1")
let b2 = document.getElementById("b2")

let tb2 = document.getElementById("tb2") 




let deadsad = document.getElementById("dead_sad") 



    b1.style.animation = "fadeout 5s";
    b1.style.display = "block";
    b2.style.display = "none";
if (localStorage.getItem("musikk") === "true") {
    deadsad.play();
}


tb2.addEventListener('click', function () {
        b2.style.animation = "fadein 5s";
        this.scrollIntoView({behavior: "smooth"});
        b2.style.display = "block ";
    });

 

    let TS = document.getElementById("TS") 
    TS.addEventListener("click", function () {
        location.href = "/index.html";
        let dead = Number(localStorage.getItem("dead")) || 0;
        dead = 0;
        localStorage.setItem("dead", dead);
    })

  
