document.addEventListener("DOMContentLoaded", function () {
  const alert = document.querySelector("#alert");
  alert.addEventListener("click", function () {
    Swal.fire({
      icon: "success",
      title: "신청되었습니다.",
    });
  });
});

// function deadline() {
//   Swal.fire({
//           icon: "error",
//           title: "마감되었습니다.<br>다른 회차 이용 부탁드립니다.",
//       });
// }
