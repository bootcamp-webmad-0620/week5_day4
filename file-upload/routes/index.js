module.exports = app => {

    // Base URLs
    app.use('/', require('./index.routes'))
    app.use('/files', require('./upload.routes'))
}