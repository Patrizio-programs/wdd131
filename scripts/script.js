
function showLastModified() {
    const lastModified = document.lastModified;
    const lastModifiedElement = document.createElement('p');
    lastModifiedElement.textContent = `Last Modified: ${lastModified}`;
    return lastModifiedElement;
}


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
        footer.appendChild(showCopyright());
        footer.appendChild(showLastModified());
    }
}


document.addEventListener('DOMContentLoaded', initializeFooter);