function scrollFunction(){document.documentElement.scrollTop>30?document.getElementById("navbarExample").classList.add("top-nav-collapse"):document.documentElement.scrollTop<30&&document.getElementById("navbarExample").classList.remove("top-nav-collapse")}window.onscroll=function(){scrollFunction(),scrollFunctionBTT()},window.onload=function(){scrollFunction()};let elements=document.querySelectorAll(".nav-link:not(.dropdown-toggle)");for(let e=0;e<elements.length;e++)elements[e].addEventListener("click",()=>{document.querySelector(".offcanvas-collapse").classList.toggle("open")});function toggleDropdown(e){const o=e.target.closest(".dropdown");let t=document.querySelector(".dropdown-menu",o);setTimeout(function(){const e=o.matches(":hover");t.classList.toggle("show",e),o.classList.toggle("show",e),o.setAttribute("aria-expanded",e)},"mouseleave"===e.type?300:0)}document.querySelector(".navbar-toggler").addEventListener("click",()=>{document.querySelector(".offcanvas-collapse").classList.toggle("open")});const dropdownCheck=document.querySelector(".dropdown");null!==dropdownCheck&&(document.querySelector(".dropdown").addEventListener("mouseleave",toggleDropdown),document.querySelector(".dropdown").addEventListener("mouseover",toggleDropdown),document.querySelector(".dropdown").addEventListener("click",e=>{const o=e.target.closest(".dropdown");let t=document.querySelector(".dropdown-menu",o);o.classList.contains("show")?(t.classList.remove("show"),o.classList.remove("show")):(t.classList.add("show"),o.classList.add("show"))}));var cardSlider=new Swiper(".card-slider",{autoplay:{delay:4e3,disableOnInteraction:!1},loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),imageSlider=new Swiper(".image-slider",{autoplay:{delay:3e3,disableOnInteraction:!1},loop:!0,spaceBetween:50,slidesPerView:5,breakpoints:{575:{slidesPerView:1,spaceBetween:10},767:{slidesPerView:2,spaceBetween:20},991:{slidesPerView:3,spaceBetween:20},1199:{slidesPerView:4,spaceBetween:20}}});function scrollFunctionBTT(){document.body.scrollTop>20||document.documentElement.scrollTop>20?myButton.style.display="block":myButton.style.display="none"}function topFunction(){document.body.scrollTop=0,document.documentElement.scrollTop=0}myButton=document.getElementById("myBtn");