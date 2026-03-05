document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navbar = document.querySelector(".navbar");
    const overlay = document.createElement("div");

    overlay.classList.add("navbar-overlay");
    document.body.appendChild(overlay);

    hamburger.addEventListener("click", () => {
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
    });

    overlay.addEventListener("click", () => {
        navbar.classList.remove("active");
        overlay.classList.remove("active");
    });
});

    document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
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
