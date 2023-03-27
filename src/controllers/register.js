const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../db/conn");
var path1 = ""
var path2 = ""

const imagepath = "D:/Office/Frameworks/postgrace/public/upload/image/";
const docpath = "D:/Office/Frameworks/postgrace/public/upload/document/";

const user = async (req, res) => {
    try {

        const image = req.files.image;
        // console.log(image);
        const document = req.files.document;
        // console.log(document);

        const ext1 = path.extname(image.name);
        // console.log(ext1);
        const ext2 = path.extname(document.name);
        // console.log(ext2);

        path1 = path.join("image_" + Date.now() + ext1);
        path2 = path.join("doc_" + Date.now() + ext2);

        // var user1;

        if (ext1 == ".jpeg" || ext1 == ".jpg" || ext1 == ".png") {
            if (ext2 == ".pdf") {

                image.mv(imagepath + path1)
                document.mv(docpath + path2)

                req.body.password = await bcrypt.hash(req.body.password,10)
                console.log(req.body.password);

                // insert in database
                const createUser = await db.sequelize.query(
                    `INSERT INTO public.users(
                        first_name, last_name, date_of_birth, date_of_join, bloodgroup, gender, email, phone, user_name, password, image, document)
                        VALUES ('${req.body.first_name}', '${req.body.last_name}', '${req.body.date_of_birth}', '${req.body.date_of_join}', '${req.body.bloodgroup}', '${req.body.gender}', '${req.body.email}', ${req.body.phone}, '${req.body.user_name}', '${req.body.password}', '${path1}', '${path2}')`
                );

                console.log(createUser);

                const token = await jwt.sign({
                    user_name: req.body.user_name.toString()
                }, process.env.SECRETE_KEY)
                console.log("this is bcryped token", token);

                res.send({ success: true, statusCode: 200, msg: "token bani gyo ", userdata: { token: token } });

            } else {
                res.status(400).send({ success: false, msg: "plaease upload valid pdf file" });
            }
        } else {
            res.status(400).send({ success: false, msg: "plaease upload valid image file" });
        }

    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = user;