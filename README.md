# Trans Liberation NCL Website

Welcome! This project is a responsive landing page for Trans Liberation NCL, built with accessibility and simplicity in mind.

## Core Files

- **`index.html`**: The main entry point. It uses **Bootstrap 5** for layout and components. The page is structured into a banner and a responsive grid of "Upcoming" cards.
- **`styling/main.css`**: The custom style sheet. It defines CSS variables for the branding colors and handles the transition between light and dark modes.
- **`js/theme.js`**: A small utility script that listens for the user's system theme preference (Dark/Light mode) and applies it to the `<html>` element.

## Development Highlights

- **Responsive Design**: The cards in `index.html` use a combination of Bootstrap's grid and custom media queries in `main.css` to switch from a horizontal layout on desktop to a vertical stack on mobile.
- **Theme Support**: We use Bootstrap 5's `data-bs-theme` attribute. Custom color overrides for dark mode can be found in the `[data-bs-theme="dark"]` block in `main.css`.

## Contributing

If you're jumping in to help:
- **Adding Content**: New cards can be added to the `<main>` container in `index.html` by adding to the `home-page-cards.js` json with the format:
```json
{
  "position": <int>,
  "title": <string>,
  "description": <string>,
  "link": <string>,
  "alt": <string>
}
```
New events can be added to the calander by adding to the `events.js` json with the format:
```json
{
  "date": <string>, // YYY-MM-DD format
  "title": <string>,
  "description": <string>,
  "link": <string>
}


- **Styling**: Any global style changes should be made via the CSS variables in `main.css` to ensure they apply correctly to both light and dark themes.

---
*"No one is free until all are free. Demanding equality be a right, not a privilege."*
