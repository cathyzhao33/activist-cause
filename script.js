/************************************************/
/********* CHECKLIST FUNCTIONALITY **********/
/************************************************/

/* stores the "my-list" element */
var fullItemList = document.getElementById("my-list");

if (fullItemList) {
  fullItemList.addEventListener("click", checkOffItem, false); // add function name  
}

function checkOffItem (clicked) {
  if (clicked.target.tagName == "LI") {
    clicked.target.classList.toggle("all-done");
  }
}