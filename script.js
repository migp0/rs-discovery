//color mode switch:::
function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "foto do cara durante o dia")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "cara durante a noite")
  }
}

//set user name to data:::
let username = "mig"
// function setUserName() {
//   const user = "migp__"
//   html.querySelector.print()
//   // var user = document.querySelector("#username")
// }

//subscribe action:::
function followUser() {
  alert("You're now following " + username + "!")
}
