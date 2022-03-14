const themes_selector = document.querySelector("#themes-select"),
themes = document.querySelector(".themes"),
themes_close = themes.querySelector(".head i");
themes_selector.addEventListener( "click",()=>{
    themes.classList.toggle("active");
})

themes_close.addEventListener("click",()=>{
    themes.classList.toggle("active");

})