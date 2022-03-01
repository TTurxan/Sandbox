$( document ).ready(function() {
    const openMenu = $(".open-menu")
    const closeMenu = $(".close-menu")
    const hamburgerMenu = $(".hamburger-menu")
    openMenu.on("click",function(){
        hamburgerMenu.addClass("active")
    })
    closeMenu.on("click",function(){
        hamburgerMenu.removeClass("active")
    })
});