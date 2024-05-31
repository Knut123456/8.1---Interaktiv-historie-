// let dead = 0
// localStorage.setItem("dead", dead);

 function plussdead (){
       let dead = Number(localStorage.getItem("dead")) || 0;
         console.log(dead), "1";
         console.log ("hello");
         dead = dead + 1;
         localStorage.setItem("dead", dead);
        if (localStorage.getItem("dead") >= 4) {
             location.href = "/Handlinger/dead/dead.html"
             
         } 
  }

 export {plussdead} 



 
 


