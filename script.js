
const compare = document.getElementById("div-compare");
const original = document.getElementById("div-original");

const originalHide = document.getElementById("button-original");
const compareHide = document.getElementById("button-original");

function originalFunc() {

  if (originalHide.innerText === "Hide Original") {
    original.style.display = "none";
    originalHide.innerText = "Show Original";
       }

  else {
    originalHide.innerText = "Hide Original";
    original.style.display = "unset";
       }

}
