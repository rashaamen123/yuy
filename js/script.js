
function playSound(url) {
  const audio = new Audio(url);
  audio.play();
}

function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
var pip=new Audio(); 
if (username == "123456" && password == "123456") {
  alert('عذراً ! اسم المستخدم أو كلمة المرور غير صحيحة . فضلاً تأكد من صحة المعلومات المدخلة');
  return false;
}
else{
alert('عذراً ! اسم المستخدم أو كلمة المرور غير صحيحة . فضلاً تأكد من صحة المعلومات المدخلة');

}
}