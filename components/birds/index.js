'use strict';

const Component = require('hmpo-form-component');
const debug = require('debug')('hmpo:date-component');

class Birds extends Component {

    seabird(settings) {
        let field = {
            legend: {
                value: 'Name a type of sea bird',
                className: 'form-label-bold'
            },
            validate: [
                'required',
                function seabird(value) {
                    debug('Seabird validation: is %s a seabird?', value);
                    return ['penguin', 'albatross', 'tern', 'gull', 'pelican', 'frigate'].indexOf(value) > -1 ? true : false;
                }
            ]
        }
        return this.field(settings, field);
    }

    bigSeabird(settings) {
        let field = {
            legend: {
                value: 'Name a really big sea bird',
                className: 'form-label-bold'
            },
            validate: [
                function largeSeabird(value) {
                    debug('Seabird validation: is %s a big seabird?', value);
                    return ['albatross', 'pelican'].indexOf(value) > -1 ? true : false;
                }
            ]
        }
        return this.field(settings, field);
    }

}

module.exports = Seabirds;
