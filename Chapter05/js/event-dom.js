let coverImage = document.querySelector("#cover");
coverImage.onmouseover = function(){
    coverImage.style.border = "5px black solid";
}
coverImage.onmouseout = () => {
    coverImage.style.border = "";
}