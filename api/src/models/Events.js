const {DataTypes} = require("sequelize")


module.exports = (sequelize) => {
    sequelize.define("events", {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true 
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        tickets:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        
    },{
        timestamps: false
    })
}