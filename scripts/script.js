var deButton = document.querySelector(".beweeg");

var deArticle = document.querySelector(".grijper");

function beweegGrijper() {
    deArticle.classList.toggle("grijper_beweeg");
//    deArticle.classList.toggle("doei_woody");
}

deButton.addEventListener("click", beweegGrijper);
//deButton.addEventListener("click"), beweegWoody);

