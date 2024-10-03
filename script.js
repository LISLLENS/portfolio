var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "images/sun.png";
    }else{
        icon.src = "images/moon.png";
    }
}

document.getElementById('hamburger').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});
