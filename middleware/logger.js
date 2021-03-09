const moment = require('moment')

const logger = (req, res, next) => {
    // Logs the whole URL from the request with the date
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`)
    next()
}

module.exports = logger