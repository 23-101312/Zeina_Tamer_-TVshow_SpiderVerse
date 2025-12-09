document.getElementById("cart_title").innerHTML = `Your Cart`

document.getElementById("profile_name").innerHTML = `Student Name`

document.getElementById("profile_role").innerHTML = `Web Designer`

document.getElementById("profile_bio").innerHTML = `Creative front-end developer who loves building clean UI and interactive designs.`

let stats = [
  { number: 12, label: "Projects" },
  { number: 5, label: "Years" },
  { number: 24, label: "Clients" }
];

for (let i = 0; i < stats.length; i++) {
  document.getElementById("profile_stats").innerHTML += `
    <div>
      <h3>${stats[i].number}</h3>
      <p>${stats[i].label}</p>
    </div>
  `;
}
