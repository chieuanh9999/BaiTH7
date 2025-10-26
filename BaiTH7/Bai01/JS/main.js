$(document).ready(function() {
    // Khi nhấn vào ảnh -> hiện alert tên con vật
    $(".item img").click(function() {
        let animal = $(this).attr("alt");
        alert("You clicked on: " + animal);
    });

    // Hiệu ứng ẩn/hiện thư viện
    $("h2").click(function() {
        $(".gallery").slideToggle(600);
    });
});