const siteRouter = require('./site');

function route (app) {
    // Action ----> Dispatcher ------> Funtion handler(Controler)
    app.use('/', siteRouter);
}
module.exports = route;