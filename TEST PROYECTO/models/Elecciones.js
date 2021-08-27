const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Elecciones = sequelize.define("eleccion",{
id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
},
nombre: {
    type: Sequelize.STRING,
    allowNull: false
},
fecha: {
    type: Sequelize.STRING,
    allowNull: false
},
estado: {
    type: Sequelize.BOOLEAN,
    allowNull: false
}

});

module.exports = Elecciones;