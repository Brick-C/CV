let btn = document.getElementById('btn')
let btnText = document.getElementById('btnText')
let btnMoon = document.getElementById('btnMoon')
let logo = document.getElementById('logo')

btn.onclick = function(){
    document.body.classList.toggle("dark-theme")

    if(document.body.classList.contains("dark-theme")){
        btnMoon.src = "./portfolio-dark-img/images/sun.png"
        logo.src = "./portfolio-dark-img/images/logo-white.png"
        btnText.innerHTML = "Light";
        
    }

    else{
        btnMoon.src = "./portfolio-dark-img/images/moon.png"
        logo.src = "../portfolio-dark-img/images/logo.png"
        btnText.innerHTML = "Dark";
    }

}