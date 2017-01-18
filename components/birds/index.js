'use strict';

const debug = require('debug')('hmpo:components');

// Example validation component

const seabirds = {
    any: function seabird(value) { // validate functions should be named descriptively
        debug('Seabird validation: is %s a seabird?', value);
        return ['penguin', 'albatross', 'tern', 'gull', 'pelican', 'frigate'].indexOf(value) > -1 ? true : false;
    },
    large: function largeSeabird(value) {
        debug('Seabird validation: is %s a big seabird?', value);
        return ['albatross', 'pelican'].indexOf(value) > -1 ? true : false;
    }
};

module.exports = {
    sea: seabirds
};