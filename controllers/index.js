const awesomeFunction = (req, res, next) => {
    res.send('Sarah Birch');
};

const returnAnotherPerson = (req, res, next) => {
    res.send('Super awesome person');
}

module.exports = {
    awesomeFunction,
    returnAnotherPerson
};