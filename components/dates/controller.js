'use strict';

const debug = require('debug')('hmpo:components');

module.exports = function (settings) {

    // field keys can be passed in through settings.fields
    let fields = settings.fields || {};

    // return form controller
    return class Dates extends settings.base {
        constructor(options) {
            super(options);
        }

        getValues(req, res, callback) {
            super.getValues(req, res, (err, values) => {
                debug('GetValues called, settings', settings);
                values[fields.d] = 'Day value set by getValues';
                callback(null, values);
            });
        }
    };

};
