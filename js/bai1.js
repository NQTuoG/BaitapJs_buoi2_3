// ==js bài 1==
document.getElementById("LuongNhanVien").onsubmit = function(event){
    console.log("tinh tien");

    event.preventDefault();
    let tienLuong = document.getElementById("tienLuong").value*1;
    let soNgayLam = document.getElementById("soNgayLam").value*1;

    console.log(tienLuong);
    console.log(soNgayLam);

    let tinhluong = tienLuong * soNgayLam
    document.getElementById("inketqua1").innerHTML =` Tổng lương của bạn là: ${tinhluong.toLocaleString(
        "vi",
        {
          currency: "VND",
          style: "currency",
        }
        )
    }`
    event.target.reset();
}