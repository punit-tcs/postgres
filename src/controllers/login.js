const modal = require("../model/regdata");
const db = require("../db/conn");
const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { read } = require("fs");
const { error } = require("console");

const userlogin = async (req, res) => {
    try {
        console.log(req.body);
        const password = req.body.password;
        console.log(password);

        const userData = await db.sequelize.query(`SELECT * FROM public.users where email ='${req.body.email}'`);
        //  console.log(userData);

        const password2 = userData[0][0].password;
        console.log(password2);

        if (userData != null) {
            console.log("insode the bcrypt");
            const bcryptpass = await bcrypt.compare(password,password2)
            console.log("bcryptpass",bcryptpass);

            const token = jwt.sign(
                { email: userData[0][0].email},
                process.env.SECRETE_KEY
            );
            console.log("token",token);

            if (bcryptpass) {
                // res.send("1 ")
                res.send({ status: true, statusCode: 200, message: "login success", userData:{ token: token }})
                console.log("done")
            } else {
                res.send({ status: false, statusCode: 401, message: "incorrect login details", userData: [] })
                console.log("222", error);
            }
        } else {
            res.send({ status: false, statusCode: 401, message: "incorrect login details", userData: [] })
            console.log("3333", error);
        }

    } catch (error) {
        res.send({ statusCode: 401, stats: false, message: "invalid user", userData: [] });
        console.log("user login details incorrect", error);
    }
}

module.exports = userlogin