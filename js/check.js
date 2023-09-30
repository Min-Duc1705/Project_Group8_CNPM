function checkform() {
    var email = document.getElementById('exampleInputEmail1');
    var pass = document.getElementById('exampleInputPassword1');
    var emailHelp = document.getElementById('emailHelp');
    var passHelp = document.getElementById('passHelp');
    var check = true;

    if (email.value.trim() === "") {
        emailHelp.innerHTML = "Vui lòng điền thông tin";
        check = false;
    } else if (email.value.trim() !== "2151170561@e.tlu.edu.vn" && email.value.trim() !== "lvqqltt10a@gmail.com") {
        emailHelp.innerHTML = "Email chưa đăng ký tài khoản";
        check = false;
    } else {
        emailHelp.innerHTML = "";
    }

    if (pass.value.trim() === "") {
        passHelp.innerHTML = "Vui lòng điền trường này";
        check = false;
    } else if (email.value.trim() === "2151170561@e.tlu.edu.vn" && pass.value.trim() !== "12345") {
        passHelp.innerHTML = "Nhập sai mật khẩu";
        check = false;
    } else if (email.value.trim() === "lvqqltt10a@gmail.com" && pass.value.trim() !== "123") {
        passHelp.innerHTML = "Nhập sai mật khẩu";
        check = false;
    } else {
        passHelp.innerHTML = "";
    }

    if (check) {
        // window.location.href = "trang2.html";
        return true;
    }

    return false;

}