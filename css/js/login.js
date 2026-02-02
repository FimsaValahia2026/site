function login(){
  let u = document.getElementById("user").value;
  let p = document.getElementById("pass").value;

  if(u === "5051212152514" && p === "12122005"){
    window.location = "dashboard.html";
  } else {
    alert("Date incorecte");
  }
}
