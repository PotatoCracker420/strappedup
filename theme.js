// Select the theme toggle button
const themeToggle = document.getElementById("theme-toggle");

// Check if a theme is saved in localStorage
const currentTheme = localStorage.getItem("theme");

// Apply the saved theme on page load
if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);

    // Update the button text based on the saved theme
    themeToggle.textContent = currentTheme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
}

// Add an event listener to toggle the theme
themeToggle.addEventListener("click", () => {
    // Get the current theme
    const theme = document.documentElement.getAttribute("data-theme");
    const newTheme = theme === "dark" ? "light" : "dark";

    // Apply the new theme
    document.documentElement.setAttribute("data-theme", newTheme);

    // Save the new theme in localStorage
    localStorage.setItem("theme", newTheme);

    // Update the button text
    themeToggle.textContent = newTheme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
});