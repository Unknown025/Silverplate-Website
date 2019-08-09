function errorHandler(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = process.env.DEV === 'DEVELOPMENT' ? err : {};

    res.status(err.status || 500);
    if(process.env.DEV === 'DEVELOPMENT') {
        res.render('error', {title: 'Error ' + err.status || 500});
    } else {
        res.render('errors/error', {title: 'Error ' + err.status || 500,
            message: err.message, status: err.status || 500});
    }
    next();
}

module.exports = errorHandler;