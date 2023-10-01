document.getElementById('file-upload').addEventListener('change', function(e) {
    var reader = new FileReader();
    reader.onload = function() {
        document.getElementById('image').src = reader.result;
    }
    reader.readAsDataURL(e.target.files[0]);
});


function showText() {
    document.getElementById("text-show").innerHTML = "Đã thêm sách thành công :D";
}
