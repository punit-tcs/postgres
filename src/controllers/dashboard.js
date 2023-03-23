const express = require("express");
const modal = require("../model/regdata");
const db = require("../db/conn");
sequelize = db.sequelize,
Sequelize = db.Sequelize;

const dashboard = async (req, res) => {
    try {
        console.log(req.body.email,"this is dashboard");
        // const data = await modal.findOne({_id: req.body.id},{password:0});
        // console.log("data visible",data);
        
        console.log("qqqqqqqqqqqqqqqqqq");
        const udata = await db.sequelize.query(`SELECT id, first_name, last_name, date_of_birth, date_of_join, bloodgroup, gender, email, phone, user_name, password, image, document
	    FROM public.users where email = '${req.body.email}'`);

        // res.setHeader("contetnt-type", "application/json");

        res.send({ status: true, statusCode: 200, msg: "this is users data", data: udata[0][0]});
        
    } catch (error) {
        res.send({ status: false, statusCode: 401, msg: "not found" });
    }
}

module.exports = dashboard;