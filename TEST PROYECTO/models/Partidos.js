const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Partidos = sequelize.define("partido",{
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
descripcion: {
    type: Sequelize.STRING,
    allowNull: false
},
estado: {
    type: Sequelize.STRING,
    allowNull: false
},
imagePath:{
    type: Sequelize.STRING,
    allowNull: true
},

});

module.exports = Partidos;