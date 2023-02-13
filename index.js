document.querySelector("#cs1").addEventListener("click",addToCart1);
function addToCart1(){
    document.querySelector(".pid").innerHTML="cs1";
    document.querySelector(".btp").innerHTML="Compter Science";
    document.querySelector(".bnp").innerHTML="The Computer Science Book";
    document.querySelector(".bpr").innerHTML="";
    document.querySelector(".qnt").innerHTML="cs1";
    document.querySelector(".ttl").innerHTML="cs1";
}

var fn = document.querySelector("fname").textContent;
fn.toUpperCase();
for(var i=0 ; i<fn ; i++){
    if(fn[i]<'A'||fn[i]>'Z') alert("Only A-Z or a-z");
}