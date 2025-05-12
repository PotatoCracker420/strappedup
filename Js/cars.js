document.addEventListener("DOMContentLoaded", function () {
    // Wait for the page to fully load before running the code
    const carContainer = document.getElementById("car-container");

    // Fetch car data from billink.no website
    fetch("https://billink.no/page2_iframe.php?id=&butikk=huba#loaded")
        .then(response => response.text())
        .then(data => {
            // Convert the fetched HTML text into a document we can work with
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, "text/html");

            // Find all car advertisement elements
            const carElements = doc.querySelectorAll("div.annonse");

            // For each car found, create a new element with its name and link
            carElements.forEach(car => {
                const carName = car.querySelector("h3").innerText;
                const carLink = car.querySelector("a").href;

                // Create and add the car listing to our page
                const carItem = document.createElement("div");
                carItem.innerHTML = `<a href="${carLink}" target="_blank">${carName}</a>`;
                carContainer.appendChild(carItem);
            });
        })
        .catch(error => console.error("Error fetching car listings:", error));
});
