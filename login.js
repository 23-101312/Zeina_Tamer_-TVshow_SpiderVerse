document.getElementById("style").innerHTML = `Your Credentials are Incorrect`

function test(){
  let gmail = document.getElementById("gmail").value;
  let password = document.getElementById("password").value;
  

  let localUsers = JSON.parse(localStorage.getItem("localUsers"));
  for (i=0; i<localUsers.length; i++) {

  if (gmail == localUsers[i].gmail && password == localUsers[i].password) {
    window.location = "profile.html";
  } else {
  document.getElementById("style").style.display = "block"
  }
  }
}

document.getElementById("login_title").innerHTML = `WELCOME BACK`

document.getElementById("login_subtitle").innerHTML = ` Enter your universe credentials`

document.getElementById("login_btn").innerHTML = `  ENTER SPIDER-VERSE`