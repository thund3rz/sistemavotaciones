const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Admins = sequelize.define("admin",{
id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
},
nombre: {
    type: Sequelize.STRING,
},
correo: {
    type: Sequelize.STRING,
    allowNull: false,
    indexes: [{unique: true}]
},
password: {
    type: Sequelize.STRING,
    allowNull: false,
},

});

module.exports = Admins;