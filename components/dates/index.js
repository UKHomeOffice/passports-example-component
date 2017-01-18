'use strict';

// Example field component

const validators = require('./validators');
const controllers = require('./controller');
const formatters = require('./formatters');

const month = {
    legend: {
        value: 'Month',
        className: 'form-label-bold'
    },
    labelClassName: 'form-label-dates-component',
    validate: validators.month,
    formatter: formatters.toUpper
};

const day = {
    legend: {
        value: 'Day',
    },
    labelClassName: 'form-label-dates-component',
    controller: {
        get: [ controllers.customMethod, controllers.anotherMethod ],
        post: [ controllers.customMethod ],
        getValues: controllers.getValues
    },
    validate: validators.day
};

module.exports = { month, day };