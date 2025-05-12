document.addEventListener("DOMContentLoaded", function () {
    // Find the container where the contact form will go
    const contactContainer = document.getElementById("contact-container");
    if (!contactContainer) {
        console.error("Element with ID 'contact-container' not found.");
        return;
    }

    // Load the contact form from a separate file
    fetch("contact-form.html")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            // Insert the form and set up its functionality
            contactContainer.innerHTML = data;
            initializeContactForm();
        })
        .catch(error => console.error("Error loading contact form:", error));
});

// Handle form submission and validation
function initializeContactForm() {
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            // Prevent the form from actually submitting
            event.preventDefault();

            // Get and clean up form input values
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            // Check if all fields are filled
            if (name === "" || email === "" || message === "") {
                formMessage.innerHTML = "Alle felt må fylles ut.";
                formMessage.style.color = "red";
                return;
            }

            // Show success message
            formMessage.innerHTML = "Takk for din melding! Vi svarer snart.";
            formMessage.style.color = "green";
        });
    }
}