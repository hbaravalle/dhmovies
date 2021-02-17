module.exports = function(sequelize, dataTypes) {
    let alias = "Movie";

    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: dataTypes.STRING(500),
            notNull: true
        },
        rating: {
            type: dataTypes.DECIMAL(3,1).UNSIGNED,
            notNull: true
        },
        awards: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            notNull: true,
            default: 0
        },
        release_date: {
            type: dataTypes.DATE,
            notNull: true
        },
        length: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            default: null
        }
    }
    
    let config = {
        tableName: 'movies',
        timestamps: true,
        paranoid: true,
        underscored: true        
    }

    const Movie = sequelize.define(alias, cols, config)
    return Movie
}