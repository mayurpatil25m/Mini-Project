// scripts.js
document.getElementById('searchBar').addEventListener('input', filterTours);
document.getElementById('filterCategory').addEventListener('change', filterTours);
document.getElementById('filterPrice').addEventListener('change', filterTours);

function filterTours() {
    const searchText = document.getElementById('searchBar').value.toLowerCase();
    const category = document.getElementById('filterCategory').value;
    const price = document.getElementById('filterPrice').value;

    const tours = document.querySelectorAll('.tour-card');
    tours.forEach(tour => {
        const title = tour.querySelector('h2').textContent.toLowerCase();
        const tourCategory = tour.getAttribute('data-category');
        const tourPrice = tour.getAttribute('data-price');

        if ((title.includes(searchText) || searchText === '') &&
            (category === tourCategory || category === '') &&
            (price === tourPrice || price === '')) {
            tour.style.display = '';
        } else {
            tour.style.display = 'none';
        }
    });
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = 'none';
    }
}
