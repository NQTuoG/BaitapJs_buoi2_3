document.getElementById("formKySo").onsubmit = function(event){
    event.preventDefault();

   let nhapSo = document.getElementById("nhapSo").value*1;
    let ketQua = "";

    if (nhapSo >= 10 && nhapSo <= 99){
        ketQua = tinhKySo(nhapSo);
        console.log(ketQua)
    }else{
        ketQua =  "Đã nhắc là nhập số có 2 chữ số rồi mà :< ";
        console.log(ketQua)
    }

    document.getElementById("inketqua5").innerHTML = `${ketQua}`

}

function tinhKySo (nhapSo){
    let soHangChuc = Math.floor(nhapSo/10)  ; 
    let soHangDonVi = nhapSo % 10;

    let ketQua = soHangChuc + soHangDonVi;
    return ketQua;
}
