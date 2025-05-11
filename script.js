 // Mobile Menu Toggle
 const menuBtn = document.querySelector(".menu-btn");
 const menu = document.querySelector(".menu");

 menuBtn.addEventListener("click", () => {
   menu.classList.toggle("active");
   menuBtn.querySelector("i").classList.toggle("fa-times");
 });

 // Close mobile menu when clicking on a link
 document.querySelectorAll(".menu li a").forEach((link) => {
   link.addEventListener("click", () => {
     menu.classList.remove("active");
     menuBtn.querySelector("i").classList.remove("fa-times");
   });
 });

 // Navbar scroll effect
 window.addEventListener("scroll", () => {
   const navbar = document.getElementById("navbar");
   if (window.scrollY > 50) {
     navbar.classList.add("scrolled");
   } else {
     navbar.classList.remove("scrolled");
   }

   // Back to top button
   const backToTop = document.querySelector(".back-to-top");
   if (window.scrollY > 300) {
     backToTop.classList.add("active");
   } else {
     backToTop.classList.remove("active");
   }
 });

 // Smooth scrolling for anchor links
 document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
   anchor.addEventListener("click", function (e) {
     e.preventDefault();

     const targetId = this.getAttribute("href");
     const targetElement = document.querySelector(targetId);

     window.scrollTo({
       top: targetElement.offsetTop - 70,
       behavior: "smooth",
     });
   });
 });

 // Back to top button functionality
 document.querySelector(".back-to-top").addEventListener("click", () => {
   window.scrollTo({
     top: 0,
     behavior: "smooth",
   });
 });

 // Form submission
 const contactForm = document.getElementById("contactForm");
 contactForm.addEventListener("submit", function (e) {
   e.preventDefault();

   // Get form values
   const name = document.getElementById("name").value;
   const email = document.getElementById("email").value;
   const phone = document.getElementById("phone").value;
   const service = document.getElementById("service").value;
   const message = document.getElementById("message").value;

   // Here you would typically send the form data to a server
   // For this example, we'll just show an alert
   alert(
     `Thank you, ${name}! Your message has been received. We will contact you shortly regarding your ${service} inquiry.`
   );

   // Reset the form
   contactForm.reset();
 });

 // Animation on scroll
 function animateOnScroll() {
   const elements = document.querySelectorAll(
     ".about-img, .about-text, .service-card, .gallery-item, .testimonial-card"
   );

   elements.forEach((element) => {
     const elementPosition = element.getBoundingClientRect().top;
     const screenPosition = window.innerHeight / 1.3;

     if (elementPosition < screenPosition) {
       element.style.opacity = "1";
       element.style.transform = "translateY(0)";
     }
   });
 }

 // Set initial state for animated elements
 document
   .querySelectorAll(
     ".about-img, .about-text, .service-card, .gallery-item, .testimonial-card"
   )
   .forEach((element) => {
     element.style.opacity = "0";
     element.style.transform = "translateY(50px)";
     element.style.transition = "all 0.6s ease";
   });

 // Run animation check on scroll and on load
 window.addEventListener("scroll", animateOnScroll);
 window.addEventListener("load", animateOnScroll);




 function sendmail(event) {
    // Prevent default form submission
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;
    
    // Prepare the email parameters
    const templateParams = {
        from_name: name,
        from_email: email,
        phone: phone,
        service: service,
        message: message,
    };
    
    // Send the email using EmailJS
    emailjs.send('service_stzc08d', 'template_3is8a2s', templateParams)
        .then(function(response) {
            Swal.fire({
                title: 'Message Sent!',
                text: 'Thank you! Your message has been sent successfully.',
                icon: 'success',
                confirmButtonColor: 'orange',
                background: 'white',
                color: 'black',
                iconColor: 'orange',
                confirmButtonText: 'OK'
            });
            document.getElementById('contactForm').reset();
        }, function(error) {
            Swal.fire({
                title: 'Error!',
                text: 'Oops! Something went wrong. Please try again later.',
                icon: 'error',
                confirmButtonColor: 'orange',
                background: 'white',
                color: 'black',
                iconColor: '#5e3218',
                confirmButtonText: 'OK'
            });
            console.error('EmailJS Error:', error);
        });
}