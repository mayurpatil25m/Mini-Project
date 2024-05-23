document.addEventListener('DOMContentLoaded', function() {
    const searchBar = document.getElementById('searchBar');
    const filterCategory = document.getElementById('filterCategory');
    const filterPrice = document.getElementById('filterPrice');
    const packageContainer = document.getElementById('packageContainer');

    searchBar.addEventListener('input', filterPackages);
    filterCategory.addEventListener('change', filterPackages);
    filterPrice.addEventListener('change', filterPackages);

    function filterPackages() {
        const searchText = searchBar.value.toLowerCase();
        const category = filterCategory.value;
        const price = filterPrice.value;

        const packages = packageContainer.getElementsByClassName('package-card');

        for (let pkg of packages) {
            const title = pkg.querySelector('.package-info h2').innerText.toLowerCase();
            const packageCategory = pkg.getAttribute('data-category');
            const packagePrice = pkg.getAttribute('data-price');

            const matchesSearch = title.includes(searchText);
            const matchesCategory = category === "" || category === packageCategory;
            const matchesPrice = price === "" || price === packagePrice;

            if (matchesSearch && matchesCategory && matchesPrice) {
                pkg.style.display = '';
            } else {
                pkg.style.display = 'none';
            }
        }
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
});
