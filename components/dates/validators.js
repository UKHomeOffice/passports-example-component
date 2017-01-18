'use strict';

const _ = require('underscore');

const month = [
    function monthNumber(value) {
        return (typeof parseInt(value) === 'number' && parseInt(value) > 12) ? false : true;
    },
    function monthAbbrev(value) {
        return (!(value.match(/^[a-zA-Z]$/)) || ['Mon', 'Tues', 'Weds', 'Thurs', 'Fri', 'Sat', 'Sun'].indexOf(value) > -1) ? true : false;
    }
];

const day = [
    // todo: update validators to allow access to all values, so we can check day is valid for the month
    function dayNumber(value) {
        return (typeof parseInt(value) === 'number' && parseInt(value) > 31) ? false : true;
    }
];

module.exports = {
    month,
    day
};