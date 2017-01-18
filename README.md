# passports-example-components
Example components for the form-controller

For use with https://github.com/UKHomeOffice/passports-form-controller#test-feature/components.

See /components
- dates
- birds

Example usage:
```
const examples = require('passports-example-components');
const fields = {
    // use field component
    'month': {
        components: examples.dates.month
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