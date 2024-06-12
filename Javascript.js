// let dead = 0
// localStorage.setItem("dead", dead);


// Definerer en funksjon kalt plussdead
function plussdead() {
  // Henter nåværende verdi av "dead" fra localStorage,
  // eller setter den til 0 hvis den ikke eksisterer. Konverterer verdien til et tall.
  let dead = Number(localStorage.getItem("dead")) || 0;
  
  // Logger nåværende verdi av dead til konsollen
  console.log(dead);
  
  // Logger strengen "skjekk" til konsollen
  console.log("skjekk");
  
  // Øker dead-tellingen med 1
  dead = dead + 1;
  
  // Lagrer den oppdaterte dead-tellingen tilbake til localStorage
  localStorage.setItem("dead", dead);
  
  // Sjekker om dead-tellingen er 4 eller mer
  if (localStorage.getItem("dead") >= 4) {
      // Omdirigerer brukeren til den spesifiserte URL-en
      location.href = "/Handlinger/dead/dead.html";
      
      // Nullstiller dead-tellingen til 0
      dead = 0;
  }
}

// Eksporterer plussdead-funksjonen for å gjøre den tilgjengelig for import
export { plussdead }



 
 


