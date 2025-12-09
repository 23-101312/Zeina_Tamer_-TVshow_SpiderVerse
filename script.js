let logo = [
  "assets/logo1.png",
  "assets/logo2.png",
  "assets/logo3.png",
  "assets/logo4.png"
];

let randomNum = Math.floor(Math.random() * logo.length);
document.getElementById("header_left").style.backgroundImage = `url(${logo[randomNum]})`;



let nav = ["home", "characters" , "movies"];

document.getElementById("nav").innerHTML +=
    `
    <li>
        <a href="#section_1">${nav[0]}</a>
    </li>
    <li>
        <a href="#section_2">${nav[1]}</a>
    </li>
    <li>
        <a href="#section_3">${nav[2]}</a>
    </li>
`;            

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

        
let movie = ["Spider-Man: Into the Spider-Verse", "Spider-Man: Across The Spider-Verse" , "Spider-Man: Beyond the Spider-Verse"];

document.getElementById("spiderweb").innerHTML +=
    `
    <div class="glow"><p id="movie_title">${movie[0]}</p>
          </div>
          <div class="glow2"><p id="movie_title">${movie[1]}</p>
          </div>
          <div class="glow3"><p id="movie_title">${movie[2]}</p>
    </div>`;  
    
