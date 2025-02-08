document.addEventListener('DOMContentLoaded', () => {
    // Get URL parameters
    const params = new URLSearchParams(window.location.search);

    // Display product name
    document.getElementById('display-product').textContent = params.get('product');

    // Display rating
    const rating = params.get('rating');
    const ratingDisplay = document.getElementById('display-rating');
    for (let i = 0; i < 5; i++) {
        const star = document.createElement('span');
        star.textContent = i < rating ? '★' : '☆';
        star.className = i < rating ? 'star filled' : 'star';
        ratingDisplay.appendChild(star);
    }

    // Display installation date
    const date = new Date(params.get('installation-date'));
    document.getElementById('display-date').textContent = date.toLocaleDateString();

    // Display features
    const featuresList = document.getElementById('display-features');
    const features = params.getAll('features');
    if (features.length > 0) {
        features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
            featuresList.appendChild(li);
        });
    } else {
        featuresList.innerHTML = '<li>No features selected</li>';
    }

    // Display written review
    const review = params.get('review');
    document.getElementById('display-review').textContent = review || 'No written review provided';

    // Display username
    const username = params.get('username');
    document.getElementById('display-username').textContent = username || 'Anonymous';
});