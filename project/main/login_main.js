// userSystem = [
//     {"email":"lemjully895@gmail.com", "password":"1234"}
// ];
// localStorage.setItem("userSystem",JSON.stringify( {"email":"lemjully895@gmail.com", "password":"1234"}))
   

let btnSubmit = document.getElementById("btnSubmit");
btnSubmit.addEventListener("click", function(event){
    event.preventDefault();
    // Lấy ra email và mật khẩu của người dùng
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    // B2: Kiểm tra có tồn tại email và password có trong userSystem hay không 
    let checkLogin = checkUser (email,password);
    if (checkLogin) {
        // Có tồn tai -> cho vào trang quản lý sinh viên
        // Lưu lại user đăng nhập
        localStorage.setItem("userLogin", email);
        window.location.href = "homePage.html";
    } else {
        // không tồn tại -> báo không tồn tại và cho đăng hập lại
        document.getElementById("error").style.visibility="visible";
    }

});
function checkUser(email,password) {
    let userSystem = localStorage.getItem("userSystem") ? JSON.parse(localStorage.getItem("userSystem")) : [];
    for (let i = 0; i< userSystem.length; i++) {
        if (userSystem[i].email==email && userSystem[i].password==password) {
            return true;
        }
    }
    return false;
}