document.getElementById("sellCarForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const regnr = document.getElementById("regnr").value.trim();
    const description = document.getElementById("description").value.trim();
    const formMessage = document.getElementById("formMessage");

    if (!name || !phone || !email || !regnr || !description) {
        formMessage.innerHTML = "Alle felt må fylles ut.";
        formMessage.style.color = "red";
        return;
    }

    formMessage.innerHTML = "Takk for din forespørsel! Vi tar kontakt snart.";
    formMessage.style.color = "green";

    // Optionally, add AJAX request to send data to a backend or email service
});
