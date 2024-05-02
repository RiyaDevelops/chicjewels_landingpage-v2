
// hamburger variable, hamburger variable selects css element with class name menu
// JavaScript code creates an event listener for the click event on the hamburger menu icon and toggles the "navbar-open" class on the mobile menu
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector(".menu");
    const mobileMenu = document.querySelector(".mobile");
    const hamburgerIcon = document.querySelector(".menu i");

    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle("navbar-open");
        // Toggle the hamburger icon between bars and x
        if (mobileMenu.classList.contains("navbar-open")) {
            hamburgerIcon.classList.remove("fa-bars");
            hamburgerIcon.classList.add("fa-times");
        } else {
            hamburgerIcon.classList.remove("fa-times");
            hamburgerIcon.classList.add("fa-bars");
        }
    });
});


// Back to Top Button 
function scrollToTop() {
    window.scrollTo({  //scrollTo method used in js 
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', myHeight)
 function myHeight(){
    var goTopButton= document.querySelector('.back-to-top'); //selecting the class
    var windowHeight = window.innerHeight; //window.innerHeight represents the height of the viewport (the visible area of the browser window).
    var documentHeight = document.documentElement.scrollHeight; // Total height of the document

    if(window.scrollY +  windowHeight >= documentHeight){ //When the sum is greater than or equal to the document height, it means the user has scrolled to the bottom of the page.
        goTopButton.style.display = "inline-flex"
    } else{
        goTopButton.style.display = "none"
    }
 }


 // Slider Begins here 
 const slider = new A11YSlider(document.querySelector('.slider'), {
    adaptiveHeight: true,
    dots: true,
    skipBtn:false,
    // This JavaScript code retrieves the HTML element with the ID "prev-arrow" from the document.
    prevArrow: document.getElementById('prev-arrow'), // previous arrow
    nextArrow: document.getElementById('next-arrow'),  // next arrow
    responsive: {
        // viewport for 480 and smaller
        480:{
            dots: true,
            arrows:true,
        },
        // from 500 to 1279 viewport dots are shown
       
    }


    });


 // Slider 2 Begins here (Testimonial Section)
 const slider2 = new A11YSlider(document.querySelector('.slider-2'), {
    adaptiveHeight: true,
    dots: true,
    skipBtn:false,
    // This JavaScript code retrieves the HTML element with the ID "prev-arrow" from the document.
    prevArrow: document.getElementById('prev-arrow-2'), // previous arrow
    nextArrow: document.getElementById('next-arrow-2'),  // next arrow
    autoplay: true, // Set autoplay to true to start autoplay from the beginning
    autoplaySpeed: 1700, //lower the faster the speed 
    autoplayHoverPause: true,
    responsive: {
        // viewport for 480 and smaller
        500:{
            dots: true,
            arrows:true,
            slidesToShow:1,
          },            // slider disabled 500px to 767px
            768: {
              slidesToShow: 2,
              arrows: true,
              dots: true,
              },   // slider disabled 768px to 959px

            960:{
                slidesToShow:3,
                arrows: true,
                dots: true,
            },      // slider disabled 960px to 1279px

            1280: {
                slidesToShow: 4,
                arrows: true,
                dots: true,
                
             },
    
           
        // from 500 to 1279 viewport dots are shown
       
    }


    });
 

   

  


   
   


      

 


  
    