const db = require('../database/models/index')
const restCountries = require('../requests/paises')

module.exports = {
    detail: function(req, res) {
        db.Movie.findByPk(req.params.id)
        .then(function(pelicula) {
            return res.render('detail', {
                pelicula: pelicula
            })
        })
    },


    search: function(req, res) {
        // return res.send(req.query)
        db.Movie.findAll({
            where: {
                title: {
                    [db.Sequelize.Op.like]: '%' + req.query.search + '%',
                }
            }
        })
        .then(function(listado) {
            return res.render('searchResult', {
                listado: listado,
                laQuery: req.query.search
            })
        })
    },


    create: function(req, res) {
        res.render('movieCreate')
    },
    save: function(req, res) {
        // req.body
        db.Movie.findOne({
            where: {
                title: req.body.title
            }
        })
        .then(function(laPelicula) {
            if(laPelicula == null) {
                db.Movie.create({
                    title: req.body.title,
                    rating: req.body.rating,
                    awards: req.body.awards,
                    length: req.body.length
                })
                .then(function() {
                    res.redirect('/')
                })
            } else {
                res.send("Esta película ya existe")
            }
        })
    },


    edit: function(req, res) {
        db.Movie.findByPk(req.params.id)
        .then(function(pelicula) {
            restCountries.todosLosPaises()
            .then(function(milanesa) {
                milanesa.data
                res.render('movieEdit', {
                    pelicula: pelicula,
                    paises: milanesa.data
                })
            })
        })
    },


    update: function(req, res) {
        db.Movie.update({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            length: req.body.length
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(function(verQueOnda) {
            res.redirect('/movies/detail/'+ req.params.id)
        })
    },

    delete: function(req, res) {
        db.Movie.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function(quePaso) {
            return res.send('Lo que me retorna es... ' + quePaso)
        })
        .catch(function(error) {
            return res.send(error)
        })
    },
    
    
    
    
    
    
    
    
    
    
    
    
    async: function(req, res) {
        return res.render('movieAsync')
    }
}