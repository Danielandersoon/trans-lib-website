(function() {
    'use strict';

    /**
     * Parses the flat CALENDAR_EVENTS array into a Map-like object 
     * where keys are date strings and values are arrays of events.
     */
    function parseEvents() {
        const map = {};
        if (typeof CALENDAR_EVENTS !== 'undefined') {
            CALENDAR_EVENTS.forEach(event => {
                if (!map[event.date]) map[event.date] = [];
                map[event.date].push(event);
            });
        }
        window.EVENT_MAP = map;
    }

    parseEvents();
})();