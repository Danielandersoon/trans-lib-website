(function() {
    'use strict';

    /**
     * Renders the venue list based on the provided data.
     * Filters the global VENUES array based on the showFriendly flag.
     * @param {boolean} showFriendly - If true, renders trans-friendly venues; otherwise, renders unfriendly ones.
     */
    function renderVenueList(showFriendly) {
        const container = document.getElementById('venue-list-display');
        if (!container) return;

        // Update the section title text based on current list
        const titleElement = document.getElementById('list-title');
        if (titleElement) {
            titleElement.textContent = showFriendly ? 'Greenlist' : 'Blacklist';
        }

        container.innerHTML = ''; // Clear existing list

        const filteredList = VENUES.filter(venue => venue.trans_friendly === showFriendly);

        if (filteredList.length === 0) {
            container.innerHTML = `<div class="col-12 text-center text-secondary">No ${showFriendly ? 'trans-friendly' : 'unfriendly'} entries found.</div>`;
            return;
        }

        filteredList.forEach(venue => {
            const venueCard = document.createElement('div');
            venueCard.className = 'col-md-6 col-lg-4';
            venueCard.innerHTML = `
                <div class="venue-card ${venue.trans_friendly ? 'greenlist' : 'blacklist'}">
                    <h4 class="h5">${venue.name}</h4>
                    <p class="address">${venue.address}</p>
                    <p class="description">${venue.description}</p>
                    <span class="status-indicator">
                        ${venue.trans_friendly ? 'Trans-Friendly' : 'Unfriendly'}
                    </span>
                </div>
            `;
            container.appendChild(venueCard);
        });
    }

    // Initialize on DOMContentLoaded
    document.addEventListener('DOMContentLoaded', function() {
        const listToggle = document.getElementById('listToggle');

        // Ensure data is loaded
        if (typeof VENUES === 'undefined') {
            console.error('Venue list data not loaded.');
            document.getElementById('venue-list-display').innerHTML = '<div class="col-12 text-center text-danger">Error loading venue data.</div>';
            return;
        }

        // Initial render based on toggle state
        // The toggle is checked by default, meaning it shows the greenlist (trans_friendly: true)
        renderVenueList(listToggle.checked);

        // Add event listener for the toggle
        listToggle.addEventListener('change', function() {
            renderVenueList(this.checked);
        });
    });
})();