document.getElementById("open").addEventListener("click",function(){
    document.getElementById("control").style.left = "0px"
});

document.getElementById("close").addEventListener("click",function(){
    document.getElementById("control").style.left = "-160px"
});

document.getElementById("bg1").addEventListener("click",function(){
    document.getElementById("backgroundImage").style.backgroundImage = "url(img/big1.jpg)";
});

document.getElementById("bg2").addEventListener("click",function(){
    document.getElementById("backgroundImage").style.backgroundImage = "url(img/big6.jpg)";
});

document.getElementById("bg3").addEventListener("click",function(){
    document.getElementById("backgroundImage").style.backgroundImage = "url(img/big5.jpg)";
});

document.getElementById("bg4").addEventListener("click",function(){
    document.getElementById("backgroundImage").style.backgroundImage = "url(img/big3.jpg)";
})