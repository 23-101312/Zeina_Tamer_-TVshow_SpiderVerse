let logo = [
  "assets/logo1.png",
  "assets/logo2.png",
  "assets/logo3.png",
  "assets/logo4.png"
];

let randomNum = Math.floor(Math.random() * logo.length);
document.getElementById("header_left").style.backgroundImage = `url(${logo[randomNum]})`;

let nav = ["home", "characters", "movies"];

for (let i = 0; i < nav.length; i++) {
  document.getElementById("nav").innerHTML += `
    <li>
      <a href="#section_${i + 1}">${nav[i]}</a>
    </li>
  `;
}
        
document.getElementById("hero_title").innerHTML = `        
        <h1>ACROSS THE SPIDER-VERSE</h1>
        <p>Every universe has a Spider.</p>`


document.getElementById("sec2_title").innerHTML = `
  <h2>Characters</h2>
  <p>Every universe has a Spider.</p>
`;

document.getElementById("sec3_title").innerHTML = `
  <h2>Movies</h2>
  <p>The Spider-Verse Saga.</p>
`;

        
let movie = [
  "Spider-Man: Into the Spider-Verse",
  "Spider-Man: Across The Spider-Verse",
  "Spider-Man: Beyond the Spider-Verse"
];

let glowClasses = ["glow", "glow2", "glow3"];

for (let i = 0; i < movie.length; i++) {
  document.getElementById("spiderweb").innerHTML += `
    <div class="${glowClasses[i]}">
      <p class="movie_title">${movie[i]}</p>
    </div>
  `;
}


    
