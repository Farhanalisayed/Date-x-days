const addDays = require('date-fns/addDays');
const format = require('date-fns/format');

const theFunc= (n) => {
    const result = addDays(new Date(2020, 07, 22), n);
    const theDate = format(result, "dd-MM-yyyy");
    return theDate
}

module.exports = theFunc;