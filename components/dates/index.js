'use strict';

const Component = require('hmpo-form-component');
const fields = require('./fields');
const dateController = require('./controller');
const debug = require('debug')('hmpo:date-component');

class Dates extends Component {

    controller(settings) {
        // allow implementations to supply their own parent - in this way, multiple components controllers could be used on a single step
        settings.base = settings.base || this.baseController();
        return dateController(settings);
    }

    day(settings) {
        return this.field(settings, fields.day);
    }

    month(settings) {
        return this.field(settings, fields.month);
    }

    year(settings) {
        return this.fields(settings, fields.year);
    }

}

module.exports = Dates;