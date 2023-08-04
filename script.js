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
  alert("You're now following " + username + "!")
}
