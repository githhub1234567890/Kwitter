function Verification(){
  Name = document.getElementById("user_name").value;
  password = document.getElementById("password").value;

  if (Name == "Pheonix" && password == "123456"){
      addUser()

  }else if (Name == "Trigger" && password == "341353"){
      addUser()

  } else{
    window.location="Ban.html"
  }
}
    

function addUser() {

  user_name = document.getElementById("user_name").value;

  localStorage.setItem("user_name", user_name);
  
    window.location = "kwitter_room.html";
}
