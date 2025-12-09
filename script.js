window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("preloader").style.display = "none";
  }, 3000);
});

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

document.getElementById("footer_col1").innerHTML = `
<h3>SPIDER-VERSE</h3>
      <p>Every universe has a Spider.</p>
`;


let footNav = ["home", "characters", "movies"];

document.getElementById("footer_col").innerHTML = `
  <h4>Navigation</h4>
  <ul id="footer_nav"></ul>
`;

for (let i = 0; i < footNav.length; i++) {
  document.getElementById("footer_nav").innerHTML += `
    <li>
      <a href="#section_${i + 1}">${footNav[i]}</a>
    </li>
  `;
}


document.getElementById("footer_bottom").innerHTML = `<p>© 2025 Spider-Verse Fan Project. All rights reserved.</p>`

        
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

document.getElementById("sec4_title").innerHTML = `
  <h2>Merch</h2>
  <p>Every universe has a Merch.</p>
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
    
let characters = [
  {
    img: "assets/spiderman.png",
    sticker: "assets/spider_sticker.png",
    nameSticker: "assets/name_spider_sticker.png"
  },
  {
    img: "assets/gwen.png",
    sticker: "assets/gwen_stickeer.png",
    nameSticker: "assets/name_gwen_sticker.png"
  },
  {
    img: "assets/miguel.png",
    sticker: "assets/miguel_sticker.png",
    nameSticker: "assets/name_miguel_sticker.png"
  }
];

for (let i = 0; i < characters.length; i++) {
  document.getElementById("characters").innerHTML += `
    <div onclick=portal(${i}) class="portal">
      <img src="${characters[i].img}" alt="">
      <img src="${characters[i].sticker}" alt="">
      <img src="${characters[i].nameSticker}" alt="">
    </div>
  `;
}

function portal(index) {
  localStorage.setItem("selectedPortal", JSON.stringify(characterData[index]));
  window.location.href = "character.html"
}

function sub(counter) {
  let number = document.getElementById(counter).innerHTML;
  document.getElementById(counter).innerHTML = --number; 
};

function add(counter) {
  let number = document.getElementById(counter).innerHTML;
  document.getElementById(counter).innerHTML = ++number; 
};

let merch = [
  { img: "assets/merch1.jpg" },
  { img: "assets/merch2.jpg" },
  { img: "assets/merch3.jpg" }
];

for (let i = 0; i < merch.length; i++) {
  document.getElementById("sec4_images").innerHTML += `
    <div class="merch_card">
      <img src="${merch[i].img}" alt="">
      <div class="counter">
        <button onclick="sub('merchNum${i}')">-</button>
        <p id="merchNum${i}">1</p>
        <button onclick="add('merchNum${i}'); addToCart(${i})">+</button>
      </div>
    </div>
  `;
}

function toggleCart() {
  let overlay = document.getElementById("cart_overlay");
  let itemsBox = document.getElementById("cart_items");

  overlay.classList.toggle("open");

  let localCart = JSON.parse(localStorage.getItem("cart")) || [];
  itemsBox.innerHTML = "";

  for (let i = 0; i < localCart.length; i++) {
    itemsBox.innerHTML += `
      <div class="cart_item">
        <img src="${localCart[i]}" alt="">
      </div>
    `;
  }
}

function updateCartCount() {
  let localCart = JSON.parse(localStorage.getItem("cart")) || [];
  document.getElementById("cart_count").innerHTML = localCart.length;
}

function addToCart(index) {
  let localCart = JSON.parse(localStorage.getItem("cart")) || [];

  localCart.push(merch[index].img);

  localStorage.setItem("cart", JSON.stringify(localCart));
  updateCartCount();
}
