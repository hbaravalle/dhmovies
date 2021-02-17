const db = require('../database/models/index');

module.exports = {
    home: function(req, res) {
        // Necesito las pelis...
        db.Movie.findAndCountAll({
            offset: (!req.query.pagina || req.query.pagina == 1) ? 0 : (Number(req.query.pagina) - 1) * 9,
            limit: 9
        })
        .then(function(peliculas) {
            return res.render('index', {
                peliculas: peliculas
            })
        })

    }
}