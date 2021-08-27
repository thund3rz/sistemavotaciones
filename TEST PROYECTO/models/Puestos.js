const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Puestos = sequelize.define("puesto",{
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
estado: {
    type: Sequelize.STRING,
    allowNull: false
},
});

module.exports = Puestos;