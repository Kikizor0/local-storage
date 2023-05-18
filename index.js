let fontSelect = document.getElementById("fonts");
let fontOption = document.querySelectorAll(`.font-select option`);
let colorSelect = document.getElementById("colors");
let colorOption = document.querySelectorAll(`.color-select option`);
let sizeSelect = document.getElementById("size");
let sizeOption = document.querySelectorAll(`.fontsize-select option`);
let myTest = document.querySelector(".test");
let selected = document.createAttribute("selected");
let savedStats = window.localStorage;

if (
  savedStats.getItem("color") ||
  savedStats.getItem("font") ||
  savedStats.getItem("size")
) {
  myTest.style.setProperty("font-family", savedStats.getItem("font"));
  myTest.style.setProperty("color", savedStats.getItem("color"));
  myTest.style.setProperty("font-size", savedStats.getItem("size"));
  document
    .querySelector(`[value='${savedStats.getItem("font")}']`)
    .setAttribute("selected", "");
  document
    .querySelector(`[value='${savedStats.getItem("color")}']`)
    .setAttribute("selected", "");
  document
    .querySelector(`[value='${savedStats.getItem("size")}']`)
    .setAttribute("selected", "");
}
fontSelect.addEventListener("change", function () {
  window.localStorage.font = fontSelect.value;
  myTest.style.setProperty("font-family", `${fontSelect.value}`);
});

colorSelect.addEventListener("change", function () {
  window.localStorage.color = colorSelect.value;
  myTest.style.setProperty("color", `${colorSelect.value}`);
});

sizeSelect.addEventListener("change", function () {
  window.localStorage.size = sizeSelect.value;
  myTest.style.setProperty("font-size", `${sizeSelect.value}`);
});
