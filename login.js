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
