(function() {
    'use strict';

    const html = document.documentElement;
    const indicator = document.getElementById('themeIndicator');

    // ----- set theme based on system preference -----
    function setTheme(theme) {
        html.setAttribute('data-bs-theme', theme);
        
        // update indicator text (optional)
        if (indicator) {
            indicator.textContent = theme === 'dark' ? 'Dark' : 'Light';
        }
    }

    // ----- get system preference -----
    function getSystemTheme() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    // ----- init with system preference -----
    setTheme(getSystemTheme());

    // ----- listen for system changes -----
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    media.addEventListener('change', function(e) {
        const newTheme = e.matches ? 'dark' : 'light';
        setTheme(newTheme);
    });

})();