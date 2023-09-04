const nav = document.querySelector(".nav-elem-container")
menu= document.getElementById("menu-bar")
closenav = document.querySelector(".closenav")



menu.addEventListener('click',()=>{
    nav.classList.toggle("openSearch")
    // alert("hello")
})

closenav.addEventListener('click',()=>{
    nav.classList.toggle("openSearch")
})
