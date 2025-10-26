function validateForm() {
  const fullname = document.getElementById("fullname");
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const confirm = document.getElementById("confirm");
  const phone = document.getElementById("phone");
  const email = document.getElementById("email");

  // Kiểm tra các ô bắt buộc
  if (fullname.value.trim() === "") {
    alert("Họ và tên là bắt buộc!");
    fullname.focus();
    return false;
  }
  if (username.value.trim().length < 6) {
    alert("Tên đăng nhập phải có ít nhất 6 ký tự!");
    username.focus();
    return false;
  }
  if (password.value.trim() === "") {
    alert("Mật khẩu là bắt buộc!");
    password.focus();
    return false;
  }
  if (password.value !== confirm.value) {
    alert("Mật khẩu xác nhận không khớp!");
    confirm.focus();
    return false;
  }
  // Kiểm tra số điện thoại (chỉ chứa số)
  const phonePattern = /^[0-9]+$/;
  if (phone.value && !phonePattern.test(phone.value)) {
    alert("Điện thoại chỉ được chứa số!");
    phone.focus();
    return false;
  }
  // Kiểm tra email bằng Regular Expression
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  if (email.value && !emailPattern.test(email.value)) {
    alert("Email không hợp lệ!");
    email.focus();
    return false;
  }

  // Nếu hợp lệ
  alert("Đăng ký thành công!");
  window.location.href = "thongtin.htm"; // chuyển trang nếu đúng
  return false;
}
