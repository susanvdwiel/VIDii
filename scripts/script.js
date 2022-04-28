//Een variable die de alle buttons aanroept
var deButtons = document.querySelectorAll("button");

//Een variable die de grijper aanroept
var deArticle = document.querySelector(".grijper");

function beweegGrijper() {
    //Een variable die de class "ikMag" aanroept
    var huidigeWoody = document.querySelector(".ikMag");
    
    //Als de huidigeWoody, dus ikMag wordt aangeroepen, komt er een class bij en worden er twee classes verwijderd. De class Poef komt erbij een ikMag en grijper_beweeg worden verwijderd.
    if(huidigeWoody){ 
        huidigeWoody.classList.add("poef");
        huidigeWoody.classList.remove("ikMag");
        deArticle.classList.remove("grijper_beweeg");
        
        //Een variable die xxxx aanroept
        var deNieuweWoodie = document.querySelector("section." + this.className);
        
        //Aan het einde van de animatie, wanneer er een Woody is ontploft, wordt de class poef verwijderd en komen de andere twee classes er weer bij. Namelijk ikMag en grijper_beweeg. Dit gebeurd 1x.
        huidigeWoody.addEventListener("animationend", function(){
            huidigeWoody.classList.remove("poef");
            deNieuweWoodie.classList.add("ikMag");
            deArticle.classList.add("grijper_beweeg");
        }, { once: true });
        
        //Als if niet wordt uitgevoerd komt er een class bij, namelijk grijper_beweeg
    } else {
        deArticle.classList.add("grijper_beweeg");
        
        //Een variable die xxxx aanroept en de class ikMag toevoegd
        var deWoodie = document.querySelector("section." + this.className);
        deWoodie.classList.add("ikMag");
    }
}

//De buttons de functie meegeven dat er geklikt kan worden. Wanneer er op de button wordt geklikt, wordt beweegGrijper uitgevoerd.
deButtons.forEach(deButton => {
    deButton.addEventListener("click", beweegGrijper);
    
});