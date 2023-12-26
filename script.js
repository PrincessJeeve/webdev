function scrollToAbout() {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}
function downloadCV() {
    // Replace 'lunzon-resume 2.pdf' with the correct file path or URL
    var pdfFile = 'contents/lunzon-resume 2.pdf';
    
    window.open(pdfFile, '_blank');
    }
function scrollToPortfolio() {
    document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" });
}

function scrollToContact() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}
function scrollToHomepage(){
    document.getElementById("home").scrollIntoView({ behavior: 'smooth' });
}
document.addEventListener("DOMContentLoaded", function () {
    var icon = document.querySelector(".icon");
  
    window.addEventListener("scroll", function () {
      // Show the icon when scrolling down
      if (window.scrollY > 200) {
        icon.style.display = "block";
      } else {
        // Hide the icon when scrolling back up
        icon.style.display = "none";
      }
    });
  });
  function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (!name || !email || !message) {
      alert('Please fill in all fields');
    } else if (!isValidEmail(email)) {
      alert('Please enter a valid email address');
    } else {
      // Form is valid, you can submit the data or perform further actions
      alert('Form submitted successfully!');
      clearForm();
    }
  }

  function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  }
  function openGitHub(url) {
    window.open(url, '_blank');
  }
  document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.getElementById('about');
  
    function checkScroll() {
      const rect = aboutSection.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        aboutSection.classList.add('active');
      } else {
        aboutSection.classList.remove('active');
      }
    }
  
    window.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);
  
    // Initial check on page load
    checkScroll();
  });
  
  
