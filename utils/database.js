const Sequelize = require('sequelize');
const sequelize = new Sequelize('examenACT','admin','Jskr73_23',{
    dialect:'mysql',
    host:'database-1.ccf22kfrmfqv.us-east-1.rds.amazonaws.com',
    dialectOptions:{
        options:{
            
        }
    },
    define:{
        timestamps: false,
        freezeTableName:true
    }
});
const modelDefiners = [
    require('../models/apple')
];

for(const modelDefiner of modelDefiners){
    modelDefiner(sequelize);   
}

module.exports = sequelize;