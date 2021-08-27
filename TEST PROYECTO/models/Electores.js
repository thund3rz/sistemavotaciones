const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Electores = sequelize.define("elector",{
id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
},
cedula: {
    type: Sequelize.STRING,
    allowNull: false
},
nombre: {
    type: Sequelize.STRING,
    allowNull: false
},
apellido: {
    type: Sequelize.STRING,
    allowNull: false
},
correo: {
    type: Sequelize.STRING,
    allowNull: false
},
estado: {
    type: Sequelize.STRING,
    allowNull: false
}

});

module.exports = Electores;