document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("profileForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // منع التحديث الافتراضي للصفحة

        let formData = new FormData(form);

        fetch("send.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            document.getElementById("responseMessage").innerHTML = data;
            form.reset();
        })
        .catch(error => {
            document.getElementById("responseMessage").innerHTML = "❌ حدث خطأ أثناء إرسال الطلب.";
        });
    });
});
