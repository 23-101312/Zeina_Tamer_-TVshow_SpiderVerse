let logo = [
  "assets/logo1.png",
  "assets/logo2.png",
  "assets/logo3.png",
  "assets/logo4.png"
];

let randomNum = Math.floor(Math.random() * logo.length);
document.getElementById("header_left").style.backgroundImage = `url(${logo[randomNum]})`;
