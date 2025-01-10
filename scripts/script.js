// Function to get and display the last modification date
function showLastModified() {
    const lastModified = document.lastModified;
    const lastModifiedElement = document.createElement('p');
    lastModifiedElement.textContent = `Last Modified: ${lastModified}`;
    return lastModifiedElement;
}

// Function to create copyright text with current year
function showCopyright() {
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.createElement('p');
    copyrightElement.textContent = `© ${currentYear} Patrick Medley`;
    return copyrightElement;
}

// Function to initialize footer content
function initializeFooter() {
    const footer = document.querySelector('footer');
    if (footer) {
        footer.appendChild(showLastModified());
        footer.appendChild(showCopyright());
    }
}

// Add event listener to ensure DOM is loaded before running
document.addEventListener('DOMContentLoaded', initializeFooter);