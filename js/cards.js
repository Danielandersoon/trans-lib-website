(function() {
    'use strict';

    /**
     * Renders the cards from the HOME_PAGE_CARDS array into the #cards-container element.
     */
    function renderCards() {
        const container = document.getElementById('cards-container');
        
        // Ensure the container exists and the data is loaded
        if (!container || typeof HOME_PAGE_CARDS === 'undefined') return;

        // Generate the HTML for each card
        const cardsHtml = HOME_PAGE_CARDS
            .sort((a, b) => a.position - b.position) // Keep cards in specified order
            .map(card => {
                const hasImage = card.image && card.image.trim() !== "";
                
                // Handle image vs text-only layouts
                const imageSection = hasImage 
                    ? `<div class="col-4 col-sm-4 col-md-12 col-lg-4">
                        <div class="card-img-wrapper">
                            <img src="${card.image}" alt="${card.alt || card.title}" loading="lazy" />
                        </div>
                       </div>`
                    : `<div class="col-4 col-sm-4 col-md-12 col-lg-4 d-none d-lg-block">
                        <div class="card-img-wrapper bg-transparent"></div>
                       </div>`;

                const contentColClass = hasImage ? "col-8 col-sm-8 col-md-12 col-lg-8" : "col-12 col-lg-8";

                return `
                    <div class="col-md-6 col-lg-4">
                        <a href="${card.link}" class="card-link" rel="noopener">
                            <div class="card h-100">
                                <div class="row g-0 h-100">
                                    ${imageSection}
                                    <div class="${contentColClass}">
                                        <div class="card-body d-flex flex-column">
                                            <h5 class="card-title">${card.title}</h5>
                                            <p class="card-text flex-grow-1">
                                                ${card.description}
                                                <i class="bi bi-arrow-right ms-1"></i>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>`;
            }).join('');

        container.innerHTML = cardsHtml;
    }

    // Initialize once the DOM is fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderCards);
    } else {
        renderCards();
    }
})();