class SiteControllers {
    // [GET] /
    home(req, res){
        res.render('home');
    }

    // [GET] /news/search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteControllers;

//const Newscontrollers = require('./Newscontrollers');