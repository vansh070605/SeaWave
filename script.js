document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const submitButton = document.getElementById("submit-button");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (validateForm()) {
            alert("Thank you! Your message has been sent successfully.");
            form.reset();
        }
    });

    function validateForm() {
        let isValid = true;

        if (nameInput.value.trim() === "") {
            alert("Please enter your name.");
            isValid = false;
        }

        if (!validateEmail(emailInput.value)) {
            alert("Please enter a valid email address.");
            isValid = false;
        }

        if (messageInput.value.trim() === "") {
            alert("Please enter your message.");
            isValid = false;
        }

        return isValid;
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});