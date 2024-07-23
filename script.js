function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }

window.onscroll = function() {headerShadow()};

function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";

    } else {

      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";

    }
}


 var typingEffect = new Typed(".typedText",{
    strings : ["ML Developer","Researcher","Blogger"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
 })

 const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true     
 })

sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


sr.reveal('.project-box',{interval: 200})

sr.reveal('.top-header',{})

const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)

function redirectToPage(divName) {
  let url;
  if (divName === "nomework") {
    url = "https://github.com/Tirath5504/Nomework_latest";
  } else if (divName === "rakshakrita") {
    url = "https://github.com/Tirath5504/RJPOLICE_HACK_177_DjDawgs_1";
  } else if (divName === "optima") {
    url = "https://github.com/Tirath5504/Codeshastra_Bogan_Breakers";
  }
  window.open(url, "_blank");
}

document.getElementById('feedback-form').addEventListener('submit', function(event) {
            event.preventDefault(); 

            var formData = new FormData(this);
            var data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            fetch(
              "https://hook.eu2.make.com/3ardugz0lrynnm9tix5bereepmsrher9",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
              }
            )
              .then((response) => {
                if (response.ok) {
                  alert("Your feedback has been sent successfully!");
                } else {
                  alert(
                    "There was an error sending your feedback. Please try again."
                  );
                }
              })
              .catch((error) => {
                alert(
                  "There was an error sending your feedback. Please try again."
                );
                console.error("Error:", error);
              });

        });