//const path = require("path");
const Consola = require("../utils/database").models.Apple;
const sequelize =require("../utils/database");
const Sequelize = require("sequelize");


exports.createProduct = (req,res)=>{
    console.log(req.body)
    Consola.create(req.body)
        .then(()=>{
            console.log("Registro exitoso");
            res.send("Registro exitoso")
        })
        .catch(error=>{
            console.log(error);
            res.send("Ocurrio un error")
        })
}

exports.readProduct = (req,res)=>{
    console.log(req.body)
    Consola.findAll({
        where:{
            id : req.body.id
        }
    }).then(producto=>{
        console.log("Producto encontrado: ", producto);
        res.send(producto);
    }).catch(e=>{
        console.log(e)
        res.send("Error")
    })
}