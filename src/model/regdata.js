
const { DataTypes } = require("sequelize");
var db = require("../db/conn"),
    sequelize = db.sequelize,
    Sequelize = db.Sequelize;

const user = sequelize.define("user", {
    first_name: {
        type: DataTypes.STRING,
        // allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        // allowNull: false,   

    },
    date_of_birth: {
        type: DataTypes.DATEONLY,
        // allowNull: false,
        
    },
    date_of_join: {
        type: DataTypes.DATEONLY,
        // allowNull: false,
        
    },
    bloodgroup: {
        type: DataTypes.STRING,
        // allowNull: false,
    },
    gender: {
        type: DataTypes.STRING,
        // allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        // allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        // allowNull: false,
// 
    },
    user_name: {
        type: DataTypes.STRING,
        // allowNull: false,

    },
    password: {
        type: DataTypes.STRING,
        // allowNull: false,

    },
    image: {
        type: DataTypes.STRING,
        // allowNull: false,

    },
    document: {
        type: DataTypes.STRING,
        // allowNull: false,
    },
},
    {
        timestamps: false
    }
);

sequelize.sync({ alter: true });
module.exports = user;