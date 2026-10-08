document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");
    const message = document.getElementById("formMessage");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value;

        message.textContent =
            "Thank you, " + name + "! Your message has been received.";

        form.reset();

    });

});