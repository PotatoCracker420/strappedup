document.addEventListener("DOMContentLoaded", function () {
    const carContainer = document.getElementById("car-container");

    fetch("https://billink.no/page2_iframe.php?id=&butikk=huba#loaded")
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, "text/html");

            const carElements = doc.querySelectorAll("div.annonse"); // Adjust selector based on Billink's structure

            carElements.forEach(car => {
                const carName = car.querySelector("h3").innerText;
                const carLink = car.querySelector("a").href;

                const carItem = document.createElement("div");
                carItem.innerHTML = `<a href="${carLink}" target="_blank">${carName}</a>`;
                carContainer.appendChild(carItem);
            });
        })
        .catch(error => console.error("Error fetching car listings:", error));
});
