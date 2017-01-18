# passports-example-components
Example components to demo a prototype for handling components in passports forms. See https://github.com/UKHomeOffice/passports-form-controller/commit/2096d03c878aaff8d972d63c5b16042f9bac6dae.

See /components. There are 2 examples: dates and birds.

Example usage:
```
const dates = require('passports-example-components').dates;
const birds = require('passports-example-components').birds;

const fields = {
    // use field component
    'month': {
        components: dates.month
    },
    // use field component but specify additional elements
    'day': {
        components: [ dates.day ], // could use an array of components
        validate: [ 'required' ],
        controller: {
            getErrors: function bigSeabirdCheck (req, res, errors) {
                errors = errors || {};
                if (req.sessionModel.get('name-big-one') == 'pelican') {
                    errors.pelican = 'Actually, an albatross is bigger';
                }
                return errors;
            }
        }
    },
    // use validation component
    'name-seabird': {
        legend: {
            value: 'Name a type of sea bird',
            className: 'form-label-bold'
        },
        validate: [ birds.sea.any ]
    },
    // specify validation method from component, and add custom validation
    'name-big-one': {
        legend: {
            value: 'Name a really big sea bird',
            className: 'form-label-bold'
        },
        validate: [ 'required', birds.sea.large ]
    }
};
```