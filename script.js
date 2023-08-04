//color mode switch:::
function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "foto de perfil do mig")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "foto de perfil do mig em tons de cinza")
  }
}

//set user name to data:::
let userName = "mig"
document.getElementById("username").innerHTML = userName

//subscribe action:::
function followUser() {
  alert("Let's pretend you're now following " + userName + "!")
}

//toggle ebook msg:::
function toggleEbookMsg() {
  //show no ebook msg:::
  document.getElementById("imsg").innerHTML = "lol, no ebook here."

  var errorMsg = document.getElementById("imsg")
  if (errorMsg.style.display === "none") {
    errorMsg.style.display = "block"
  } else {
    errorMsg.style.display = "none"
  }
}
