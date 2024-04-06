const inputPlace = document.getElementById("input__place")
const options = document.querySelectorAll("#op")
let value = ""
inputPlace.textContent  = options[0].value

options.forEach((el) => el.addEventListener("click", () => {
  // value = el.value
  inputPlace.textContent  = el.value

}))


