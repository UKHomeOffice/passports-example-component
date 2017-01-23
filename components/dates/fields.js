module.exports = {
    'day': {
        legend: {
            value: 'Day'
        },
        labelClassName: 'form-label-dates-component'
    },
    'month': {
        legend: {
            value: 'Month',
            className: 'form-label-bold'
        },
        labelClassName: 'form-label-dates-component'
    },
    'year': {
        legend: {
            value: 'Year'
        },
        labelClassName: 'form-label-dates-component',
        validate: [ 'required' ]
    }
};