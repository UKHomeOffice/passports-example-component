'use strict';

const _ = require('underscore');
const debug = require('debug')('hmpo:components');

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
    },
    {
      arguments: [
          'test1',
          { values: true }, // example of accessing all values in validator
          'test2'
      ],
      fn: function dayOfMonthCheck(value, testArg1, values, testArg2) {
        debug('I have values', values, 'and test args', testArg1, testArg2);

        let day = parseInt(value);
        let month = parseInt(values.month);
        let year = parseInt(values.year);
        let isLeapYear = new Date(parseInt(year), 1, 29).getMonth() === 1;
        if (day > 30 && [4, 6, 9, 11].indexOf(month) > -1) {
            return false;
        }
        if (month === 2 && day > 29) {
            return false;
        }
        if (month === 1 && day > 28 && !isLeapYear(year)) {
            return false;
        }
        return true;
      }
    }
];

module.exports = {
    month,
    day
};