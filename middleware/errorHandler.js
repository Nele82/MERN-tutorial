const { logEvents } = require('./logger')

const errorHandler = (err, req, res, next) => {
    logEvents(`${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`, 'errLog.log')
    console.log(err.stack)

    const status = res.statusCode ? res.statusCode : 500 // server error 

    res.status(status)

    res.json({ message: err.message })
}

module.exports = errorHandler 

// ERROR HANDLING MIDDLEWARE
// Error handling middleware functions have four arguments: err, req, res, and next.

// For example, to log errors and continue processing, you can create a middleware like this:

// function logErrors(err, req, res, next) {
//   console.error(err.stack)
//   next(err)
// }
// app.use(logErrors)

// These middleware functions are defined similarly to other middleware, but they handle errors specifically.

// ERROR STACK
// The stack property of the error object contains information about the call stack, which can be useful for debugging.

