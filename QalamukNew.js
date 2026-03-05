let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
document.querySelector('.hamburger').addEventListener('click', function () {
  this.classList.toggle('open');
  document.querySelector('.navbar').classList.toggle('open');
});

// تفعيل حركات الظهور عند التمرير
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});
document.addEventListener("DOMContentLoaded", function () {
  const acc = document.querySelectorAll(".accordion");
  
  acc.forEach(button => {
      button.addEventListener("click", function() {
          this.classList.toggle("active");
          const panel = this.nextElementSibling;
          panel.style.display = (panel.style.display === "block") ? "none" : "block";
      });
  });

  window.addEventListener("scroll", function() {
      const section = document.getElementById("about-section");
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (sectionTop < windowHeight - 50) {
          section.classList.add("visible");
      }
  });
});
const scrollBtn = document.getElementById('scrollBtn');

// عندما يقوم المستخدم بالتمرير لأسفل
window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        scrollBtn.style.display = "block"; // إظهار السهم عندما يتم التمرير لأسفل
    } else {
        scrollBtn.style.display = "none"; // إخفاء السهم عندما يكون في الأعلى
    }
};

// عند النقر على السهم، يتم التمرير للأعلى
scrollBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navbar = document.querySelector(".navbar");
    const overlay = document.createElement("div");

    overlay.classList.add("menu-overlay");
    document.body.appendChild(overlay);

    hamburger.addEventListener("click", function () {
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
        hamburger.classList.toggle("active");
    });

    overlay.addEventListener("click", function () {
        navbar.classList.remove("active");
        overlay.classList.remove("active");
        hamburger.classList.remove("active");
    });
});

