const express = require('express');
const sequelize = require("./utils/database");
const path = require('path');
const consolaRoutes = require('./routes/consola');

const app = express();

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')));
app.use('/consola',consolaRoutes);

sequelize.sync()
    .then(()=>{
        console.log("Conexión exitosa");
        //Lanzar la aplicación
        app.listen(8080,()=>{
            console.log("Servidor en línea");
        });
    }).catch(error=>console.log(error))