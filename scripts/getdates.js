// Function to get and display the current year for copyright
function displayCopyright() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = `© ${currentYear} Patrick Medley, Jamaica`;
}

// Function to get and display the last modified date
function displayLastModified() {
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;
}

// Add event listener to run when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    displayCopyright();
    displayLastModified();
});