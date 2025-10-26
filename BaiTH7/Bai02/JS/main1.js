$(document).ready(function() {
    // Khi trang load
    $("#muaVao").focus();           // Đưa con trỏ vào Mua vào
    $("#stateBtn").prop("disabled", true);  // Disable nút State

    // Khi rời khỏi ô Mua vào
    $("#muaVao").blur(function() {
        let val = $(this).val();
        if (val !== "" && !isNaN(val)) {
            $("#stateBtn").prop("disabled", false);
        } else {
            $("#stateBtn").prop("disabled", true);
        }
    });

    // Khi chọn loại xe
    $("#loaiXe").change(function() {
        let data = $(this).val();
        if (data !== "") {
            let arr = data.split(";"); // Tách chuỗi: ảnh;giá
            $("#carImg").attr("src", arr[0]);
            $("#price").text("Giá: " + arr[1] + " USD");
        } else {
            $("#carImg").attr("src", "");
            $("#price").text("");
        }
    });

    // Khi click nút Update
    $("#updateBtn").click(function() {
        let mua = $("#muaVao").val();
        let ban = $("#banRa").val();

        if (mua === "" || ban === "") {
            alert("Vui lòng nhập đầy đủ Mua vào và Bán ra!");
            return;
        }

        if ($("#vang").is(":checked")) {
            $("#vangMua").text(mua);
            $("#vangBan").text(ban);
        } else if ($("#usd").is(":checked")) {
            $("#usdMua").text(mua);
            $("#usdBan").text(ban);
        } else {
            alert("Vui lòng chọn loại cập nhật (Vàng hoặc USD)");
        }
    });
});