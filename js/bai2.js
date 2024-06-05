
function tinhTrungBinh(soThuNhat, soThuHai ,soThuba ,soThuTu ,soThuNam){
    let ketqua = (soThuNhat + soThuHai + soThuba +soThuTu +soThuNam) /5;
     return ketqua;
}

document.getElementById("trungBinhNamSo").onsubmit = function(event){
    event.preventDefault();

    let soThuNhat = document.getElementById("soThuNhat").value*1;
    let soThuHai = document.getElementById("soThuHai").value*1;
    let soThuba = document.getElementById("soThuba").value*1;
    let soThuTu = document.getElementById("soThuTu").value*1;
    let soThuNam = document.getElementById("soThuNam").value*1;

    console.log(soThuNhat);
    console.log(soThuHai);
    console.log(soThuba);
    console.log(soThuTu);
    console.log(soThuNam);

    let ketqua = tinhTrungBinh(soThuNhat, soThuHai, soThuba, soThuTu, soThuNam);

    console.log(ketqua);
    
    document.getElementById("inketqua2").innerHTML =`Trung Bình Cộng 5 số của bạn là: ${ketqua}`
    event.target.reset();
}