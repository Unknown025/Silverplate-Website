function errorHandler(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = process.env.DEV === 'development' ? err : {};

    res.status(err.status || 500);
    if(process.env.DEV === 'development') {
        res.render('error', {title: 'Error ' + err.status || 500});
    } else {
        if (err.status === 401) {
            res.render('errors/error401', {title: 'Error 401'});
        } else if(err.status === 403) {
            res.render('errors/error403', {title: 'Error 403'});
        } else if (err.status === 404) {
            res.render('errors/error404', {title: 'Error 404', path: req.url});
        } else {
            res.render('errors/error500', {title: 'Error 500'});
        }
    }
    next();
}

module.exports = errorHandler;