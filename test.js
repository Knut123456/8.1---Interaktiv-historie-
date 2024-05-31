

// oppretter variabler
let array = []
let sceneNavn = "Start" 


// her legges alle de forskjellige scenene inn med stigende tall i []
array[0] = {
    navn: "Start",
    sceneOverskrift: "Scene nr 1",
    text: ["Her er et avsnitt til første scene","Og her er et avsnitt til"],
    bildesource: "/bilder/handling/handling1/h1b1webp.webp",
    knapptekst: ["Teksten på valgknapp 1","Teksten på valgknapp 2"],
    knappid: ["knapp1","knapp2"]
}

array[1.1] = {
    navn: "knapp1",
    sceneOverskrift: "Scene nr 2",
    text: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam maecenas sed enim ut sem viverra aliquet eget. ",
    "Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Enim nec dui nunc mattis enim.",
    "Mauris in aliquam sem fringilla ut morbi tincidunt augue."],
    bildesource: "bilder/SuccessKid.jpg",
    knapptekst: ["Teksten på valgknapp 3","Teksten på valgknapp 4","Teksten på valgknapp 5"],
    knappid: ["knapp3","knapp4","knapp5"]
}


// starter med å laste inn første scene
nyScene()



//
// definerer funksjonen som laster inn en ny scene
//
function nyScene(){
    // henter inn riktig scene fra listen over med hjelp av scenenavnet fra forrige valg
    const denneScenen = array.find(array => array.navn === sceneNavn)
    // oppretter innholdsdiven
    const innholdsDiv = document.createElement("div")
    // fyller innholdsdiven med overskrift for scenen
    const overskrift = document.createElement("h2")
    overskrift.className = "sceneoverskrift"
    overskrift.innerHTML = denneScenen.sceneOverskrift
    innholdsDiv.appendChild(overskrift)
    
    // fyller innholdsdiven med teksten som står over bildet
    for (let i = 0; i < denneScenen.text.length; i++){
        const pInnhold = document.createElement("p");
        pInnhold.className = "forklaringstekst"
        pInnhold.innerHTML = denneScenen.text[i];
        innholdsDiv.appendChild(pInnhold)
    }
    // skriver innholdsdiven til html-dokumentet
    const beholderId = document.getElementById("beholder")
    beholderId.appendChild(innholdsDiv)

    // oppretter et img-element, gir det riktig source og width, og skriver det til html-dokumentet
    const denneSceneImg = document.createElement("img")
    denneSceneImg.src = denneScenen.bildesource
    denneSceneImg.style.width = "100%"
    beholderId.appendChild(denneSceneImg)
    
    // lager en knappediv og fyller den med de riktige knappene
    const knappediv = document.createElement("div")
    for (let i = 0; i < denneScenen.knapptekst.length; i++){
        const knapp = document.createElement("button");
        knapp.innerHTML = denneScenen.knapptekst[i];
        knapp.addEventListener("click", function (){
            denneSceneImg.style.marginBottom = "50px";
            sceneNavn = denneScenen.knappid[i];
            nyScene();
            })
        knappediv.appendChild(knapp)
    }
    

    // sletter de gamle knappene i html-dokumentet og legger inn de nye
    const knappebeholderId = document.getElementById("knappebeholder") 
    knappebeholderId.innerHTML = '';
    knappebeholderId.appendChild(knappediv)
    
    // scroller til bunnen av siden
    document.getElementById("grid-container").scrollIntoView({behavior: 'smooth', block: 'end' });
}

