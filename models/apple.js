const Sequelize = require('sequelize');

const Apple = (sequelize) =>{
    sequelize.define('Apple',{
        producto : Sequelize.STRING,
        descripcionProducto: Sequelize.STRING,
        procesador: Sequelize.STRING
    })
}

module.exports = Apple;