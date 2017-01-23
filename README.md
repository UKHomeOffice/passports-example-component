# passports-example-components
Example components for use with passports forms.

See /components which contains 2 examples: dates and birds. 'Components' are reusable form elements, such as fields or form controllers. They can be created using the base component - https://github.com/UKHomeOffice/passports-form-component.

Example usage:
```
const components = require('hmpo-example-components');
const date = new components.dates;
const birds = new components.birds;

const steps = {
    '/seabirds': {
        fields: ['name-seabird', 'name-big-one'],
        next: '/date'
    },
    '/date': {
        fields: ['day', 'month', 'year'],
        // use the controller supplied by the date component
        controller: date.controller({
            fields: { d: 'day', m: 'month', y: 'year' }
        })
    }
};

const fields = {
    'name-seabird': birds.seabird(), // just use the component defaults
    'name-big-one': birds.bigSeabird(),
    'day': date.day({
        validate: ['numeric'] // extend 'day' default validators
    }),
    'month': date.month({
        formatter: 'removehyphens',
        overrides: ['legend'] // turn off default 'month' legend, rather than extending
    }),
    'year': date.year(), // no overrides or extensions
};
```