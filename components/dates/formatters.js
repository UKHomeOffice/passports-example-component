'use strict';

const toUpper = function toUpper(value) {
    debug('Formatter used with value: %s', value);
    return typeof value === 'string' ? value.toUpperCase() : value;
};

module.exports = { toUpper };