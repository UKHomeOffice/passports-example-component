'use strict';

const debug = require('debug')('hmpo:components');

const controller = {

    customMethod: function customMethod (req, res, key, callback) {
        debug('Custom method called for field %s on %s request', key, req.method);
        callback();
    },

    anotherMethod: function anotherMethod (req, res, key, callback) {
        debug('Another method called for field %s on %s request', key, req.method);
        callback();
    },

    getValues: function getValues (req, res, values, key, callback) {
        debug('GetValues called for field %s', key);
        values = values || {};
        values[key] = 'Value set by getValues';
        callback(values);
    }

};

module.exports = controller;