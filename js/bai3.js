function doiUSDToVND (USD){
    let VND = USD*23500;
    return VND;
}

document.getElementById("doiTienUSD").onsubmit = function(event){

    event.preventDefault();
    console.log("nút submit")
    let USD = document.getElementById("USD").value*1;

    let VND = doiUSDToVND(USD);
    document.getElementById("inketqua3").innerHTML =` Tiền đổi được là: ${VND.toLocaleString(
        "vi",
        {
          currency: "VND",
          style: "currency",
        }
        )
    }`

    event.target.reset();
}