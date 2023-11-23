let elements = document.getElementsByClassName("input-ykien");

for (let i = 0; i < elements.length; i++) {
  elements[i].innerText = "noreply";
}
let allRadioButtons = document.querySelectorAll('input[type="radio"]');

let radioGroups = {};
allRadioButtons.forEach((radioButton) => {
  const name = radioButton.getAttribute("name");
  if (!radioGroups[name]) {
    radioGroups[name] = true;
    radioButton.checked = true;
  }
});
document.getElementById("btnGui").click();
