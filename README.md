# Trans Liberation NCL Website

Welcome! This project is a responsive landing page for Trans Liberation NCL, built with accessibility and simplicity in mind.

## Core Files

- **`index.html`**: The main entry point. It uses **Bootstrap 5** for layout and components. The page is structured into a banner and a responsive grid of "Upcoming" cards.
- **`styling/main.css`**: The custom style sheet. It defines CSS variables for the branding colors and handles the transition between light and dark modes.
- **`js/theme.js`**: A small utility script that listens for the user's system theme preference (Dark/Light mode) and applies it to the `<html>` element.

## Development Highlights

- **Responsive Design**: The cards in `index.html` use a combination of Bootstrap's grid and custom media queries in `main.css` to switch from a horizontal layout on desktop to a vertical stack on mobile.
- **Theme Support**: We use Bootstrap 5's `data-bs-theme` attribute. Custom color overrides for dark mode can be found in the `[data-bs-theme="dark"]` block in `main.css`.
- **Iconography**: We use Bootstrap Icons.

## Contributing

If you're jumping in to help:
- **Adding Content**: New cards can be added to the `<main>` container in `index.html` using the following html code snippet:
```html
            <div class="col-md-6 col-lg-4">
                <a href="<link to actual event goes here>" class="card-link" target="_blank" rel="noopener">
                    <div class="card h-100">
                        <div class="row g-0 h-100">
                            <div class="col-4 col-sm-4 col-md-12 col-lg-4">
                                <div class="card-img-wrapper">
                                    <img
                                    src="<image directory (can be web link if static)>"
                                    alt="<description of the image>"
                                    loading="lazy"
                                    />
                                </div>
                            </div>
                            <div class="col-8 col-sm-8 col-md-12 col-lg-8">
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title"><title goes here></h5>
                                    <p class="card-text flex-grow-1">
                                        <description of the card goes here>
                                        <i class="bi bi-arrow-right ms-1"></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
```

- **Styling**: Any global style changes should be made via the CSS variables in `main.css` to ensure they apply correctly to both light and dark themes.

---
*"No one is free until all are free. Demanding equality be a right, not a privilege."*