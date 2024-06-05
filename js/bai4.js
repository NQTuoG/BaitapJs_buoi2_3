function tinhDienTich (chieuRong, chieuDai){
    let S = chieuRong * chieuDai;
return S;
}

function tinhChuVi (chieuRong, chieuDai){
    let P = (chieuRong + chieuDai )*2;
    return P; 
}

document.getElementById("TinhChuViDienTich").onsubmit =function(event){
    event.preventDefault();

    let chieuRong = document.getElementById("chieuRong").value*1
    let chieuDai = document.getElementById("chieuDai").value*1

    let P = tinhChuVi(chieuRong, chieuDai);
    let S = tinhDienTich(chieuRong, chieuDai);

    document.getElementById("inketqua4").innerHTML =` Chu vi = ${P}, Diện Tích = ${S} `
    event.target.reset();
}