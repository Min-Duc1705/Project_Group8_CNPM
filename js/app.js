function checkform() {
    var email = document.getElementById('email');
    var pass = document.getElementById('password');
    var nameHelp = document.getElementById('nameHelp');
    var passHelp = document.getElementById('passHelp');
    var check;

    if (email.value.trim() === "") {
        nameHelp.innerHTML = "Vui lòng điền thông tin";
        check = 0;
    } else if (email.value.trim() === "chukiet2609@gmail.com" || email.value.trim() === "lmducktpm@gmail.com" || email.value.trim() === "admin@gmail.com") {
        nameHelp.innerHTML = "";
    } else {
        nameHelp.innerHTML = "Email chưa đăng ký tài khoản";
        check = 0; 
    }
    

    if (pass.value.trim() === "") {
        passHelp.innerHTML = "Vui lòng điền trường này";
        check = 0;
    } else if (email.value.trim() === "chukiet2609@gmail.com" && pass.value.trim() !== "123") {
        passHelp.innerHTML = "Nhập sai mật khẩu";
        check = 0;
    } else if (email.value.trim() === "lmducktpm@gmail.com" && pass.value.trim() !== "123") {
        passHelp.innerHTML = "Nhập sai mật khẩu";
        check = 0;
    }
    else if (email.value.trim() === "admin@gmail.com" && pass.value.trim() === "123") {
        check = 1; 
    }
    else if (email.value.trim() === "admin@gmail.com" && pass.value.trim() !== "123") {
        check = 0; 
        passHelp.innerHTML = "Nhập sai mật khẩu";
    }
    else {
        passHelp.innerHTML = "";
    }
    if (check == 1) {
        window.location.href = "index.html";
        return false;
    } else if (check == 0) {
        // không làm gì cả
        return false;
    } else {
        window.location.href = "indexuser.html";
        return false;
    }
    
    
    
}