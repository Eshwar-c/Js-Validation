document.querySelector("#signup_btn").addEventListener("click",password);
function password(){
  var v1=document.querySelector("#password_value").value;
  if(v1.length<8){
    alert("password must be more than 8 letters");
  }
}

