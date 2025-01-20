const selectField = document.querySelector("#selectField");
const selectText = document.querySelector("#selectText");
const options = document.querySelectorAll(".options");
const list = document.querySelector("#list");

selectField.onclick = function(){
    list.classList.toggle("hide");
}
for (const option of options) {
  option.onclick = function () {
    selectText.innerHTML = this.textContent;
  };
}
