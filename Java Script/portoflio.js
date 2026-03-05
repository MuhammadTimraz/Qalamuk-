const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const overlay = document.createElement("div");

overlay.classList.add("navbar-overlay");
document.body.appendChild(overlay);

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
    hamburger.classList.remove("active");
});

// عند تحميل الصفحة، تأكد أن النافذة مغلقة
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("pdfModal").style.display = "none";
});

// فتح النافذة مع تحميل ملف الـ PDF
function openModal(fileUrl) {
    document.getElementById("pdf-file").src = fileUrl;
    document.getElementById("pdfModal").style.display = "flex";
}

// إغلاق النافذة
function closeModal() {
    document.getElementById("pdfModal").style.display = "none";
}

// تصفح بين الملفات (خاص بزر السابق والتالي)
function navigate(direction) {
    alert("خاصية التصفح لم يتم تفعيلها بعد، يمكنك تخصيصها بإضافة ملفات متعددة.");
}
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
