function swapButtons() {
    var btnWish = document.getElementById("btnWish");
    var btnMoney = document.getElementById("btnMoney");
    
    // Swap positions
    var temp = btnWish.style.order;
    btnWish.style.order = btnMoney.style.order;
    btnMoney.style.order = temp;
}

function redirectToLoichuc() {
    window.location.href = "https://codebyeren.github.io/hpbd_st/";
}
