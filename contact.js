document.addEventListener("DOMContentLoaded", function () {

    if (contactForm) {
        contactForm.addEventListener("submit", async function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {
                formMessage.innerHTML = "Alle felt må fylles ut.";
                formMessage.style.color = "red";
                return;
            }

            try {
                const response = await fetch('http://localhost:3000/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name, email, message }),
                });

                const result = await response.json();

                if (result.success) {
                    formMessage.innerHTML = "Takk for din melding! Vi svarer snart.";
                    formMessage.style.color = "green";
                    contactForm.reset();
                } else {
                    throw new Error(result.error);
                }
            } catch (error) {
                formMessage.innerHTML = "Beklager, noe gikk galt. Prøv igjen senere.";
                formMessage.style.color = "red";
                console.error('Error:', error);
            }
        });
    }
});