const selectField = document.querySelector("#selectField");
const selectText = document.querySelector("#selectText");
const options = document.querySelectorAll(".options");
const list = document.querySelector("#list");
const arrowIcon = document.querySelector("#arrowIcon");

selectField.addEventListener("click", function(){
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
})
for (const option of options) {
  option.addEventListener("click", function () {
    selectText.innerHTML = this.textContent;
    list.classList.toggle("hide");
   arrowIcon.classList.toggle("rotate");
  });
}
