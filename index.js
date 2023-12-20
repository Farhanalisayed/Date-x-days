const addDays = require('date-fns/addDays');

const theFunc= (n) => {
    const result = addDays(new Date(2020, 07, 22), n);
    return `${result.getDate()}-${result.getMonth()+1}-${result.getFullYear()}`
}

module.exports = theFunc;
