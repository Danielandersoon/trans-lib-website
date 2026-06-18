(function() {
    'use strict';

    /**
     * Renders the toilet list based on the provided data.
     * Filters the global TOILETS array based on the showFriendly flag.
     * @param {boolean} showFriendly - If true, renders trans-friendly toilets; otherwise, renders unfriendly ones.
     */
    function renderToiletList(showFriendly) {
        const container = document.getElementById('toilet-list-display');
        if (!container) return;

        // Update the section title text based on current list
        const titleElement = document.getElementById('list-title');
        if (titleElement) {
            titleElement.textContent = showFriendly ? 'Greenlist' : 'Blacklist';
        }

        container.innerHTML = ''; // Clear existing list

        const filteredList = TOILETS.filter(toilet => toilet.trans_friendly === showFriendly);

        if (filteredList.length === 0) {
            container.innerHTML = `<div class="col-12 text-center text-secondary">No ${showFriendly ? 'trans-friendly' : 'unfriendly'} entries found.</div>`;
            return;
        }

        filteredList.forEach(toilet => {
            const toiletCard = document.createElement('div');
            toiletCard.className = 'col-md-6 col-lg-4';
            toiletCard.innerHTML = `
                <div class="toilet-card ${toilet.trans_friendly ? 'greenlist' : 'blacklist'}">
                    <h4 class="h5">${toilet.name}</h4>
                    <p class="address">${toilet.address}</p>
                    <p class="description">${toilet.description}</p>
                    <span class="status-indicator">
                        ${toilet.trans_friendly ? 'Trans-Friendly' : 'Unfriendly'}
                    </span>
                </div>
            `;
            container.appendChild(toiletCard);
        });
    }

    // Initialize on DOMContentLoaded
    document.addEventListener('DOMContentLoaded', function() {
        const listToggle = document.getElementById('listToggle');

        // Ensure data is loaded
        if (typeof TOILETS === 'undefined') {
            console.error('Toilet list data not loaded.');
            document.getElementById('toilet-list-display').innerHTML = '<div class="col-12 text-center text-danger">Error loading toilet data.</div>';
            return;
        }

        // Initial render based on toggle state
        // The toggle is checked by default, meaning it shows the greenlist (trans_friendly: true)
        renderToiletList(listToggle.checked);

        // Add event listener for the toggle
        listToggle.addEventListener('change', function() {
            renderToiletList(this.checked);
        });
    });
})();