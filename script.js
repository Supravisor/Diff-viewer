
const compare = document.getElementById("#div-compare");
const original = document.getElementById("#div-original");

const originalHide = document.getElementById("#original-button");
const compareHide = document.getElementById("#compare-button");

function original() {

  if (originalHide.innerText === "Hide Original") {
    original.style.display = "none";
    originalHide.innerText = "Show Original";
       }

  else {
    originalHide.innerText = "Hide Original";
    original.style.display = "unset";
       }

}
