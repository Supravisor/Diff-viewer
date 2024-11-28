
const compare = document.getElementById("div-compare");
const original = document.getElementById("div-original");

const originalHide = document.getElementById("button-original");
const compareHide = document.getElementById("button-compare");

function originalFunc() {

  if (originalHide.innerText === "Hide Original") {
    original.style.display = "none";
    originalHide.innerText = "Show Original";
       }

  else {
    original.style.display = "unset";
    originalHide.innerText = "Hide Original";
       }

}

function compareFunc() {

  if (compareHide.innerText === "Hide Compare") {
    compare.style.display = "none";
    compareHide.innerText = "Show Compare";
       }

  else {
    compare.style.display = "unset";
    compareHide.innerText = "Hide Compare";
       }

}
