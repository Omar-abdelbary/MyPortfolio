//  toggle menu 
const icon = document.querySelector("header nav .toggle-menu i ") ; 
const list = document.querySelector("header nav ul ") ; 
const toggle_menu = document.querySelector("header nav .toggle-menu") ; 

toggle_menu.addEventListener("click" , function () {
    list.classList.toggle("show") ; 
    icon.classList.toggle("fa-close") ; 
}) ; 


//  end toggle menu 


//  typed js 

    var typed = new Typed('.type-js', {
    strings: ["Front-End Developer.", " UI Developer." , "Freelancer." ],
    typeSpeed: 200  ,
    backSpeed : 200 , 
    loop : true , 

});

//  end typed js 


var typed = new Typed('.type-1-js', {
    strings: ["I'm Omar Waheed AbdElbary."],
    typeSpeed: 200  ,
    backSpeed : 200 , 
    loop : true , 

});


// 


// scroll-top 

let scroll_top = document.querySelector(".scroll-top ") ; 

window.addEventListener("scroll" , function () {
    if (window.scrollY > 100) {
        scroll_top.classList.add("return-button") ; 
    } else {
        scroll_top.classList.remove("return-button") ; 
    }
})


scroll_top.addEventListener("click" , function () {
    window.scrollTo({
        top : 0 , 
        behavior: "smooth" , 
    })
})

