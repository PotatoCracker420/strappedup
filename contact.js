document.addEventListener("DOMContentLoaded", function () {
    // Make sure the contact container exists before attempting to insert the form
    const contactContainer = document.getElementById("contact-container");
    if (!contactContainer) {
        console.error("Element with ID 'contact-container' not found.");
        return;
    }

    // Fetch the contact form from 'contact-form.html' and insert it dynamically
    fetch("contact-form.html") // Ensure this file contains only the form HTML
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            contactContainer.innerHTML = data;
            initializeContactForm(); // Ensure form validation works after insertion
        })
        .catch(error => console.error("Error loading contact form:", error));
});

// Function to handle form validation and submission
function initializeContactForm() {
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {
                formMessage.innerHTML = "Alle felt må fylles ut.";
                formMessage.style.color = "red";
                return;
            }

            formMessage.innerHTML = "Takk for din melding! Vi svarer snart.";
            formMessage.style.color = "green";

            // Here, you can add an AJAX request to send data to a backend if needed
        });
    } else {
        console.error("Contact form not found.");
    }
}