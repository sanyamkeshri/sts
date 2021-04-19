var nav = document.getElementById("nav");
var navv = false;
nav.addEventListener("click",() => {
    if(navv == false) {
        document.getElementById("n").style.height = "463px";
        document.getElementById("nl").style.display = "block";
        navv = true;
    }else{
        document.getElementById("n").style.height = "60px";
        document.getElementById("nl").style.display = "none";
        navv = false;
    }
});