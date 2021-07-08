const path = require('path');

const helperFunctions = require('./../functions/helperFunctions');
const { dirname } = require('path');


const apiTest = (req, res, next) => {
    res.status(200).json({msg: 'Api Test Success!'})
}


module.exports.apiTest = apiTest
