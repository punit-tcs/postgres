const express = require("express");
require("dotenv").config();
const app = express();
const bodyparser = require("body-parser");
const express_fileupload = require("express-fileupload")
const port =process.env.PORT || 2000;
const db = require("./src/db/conn");
// require("./src/model/regdata");

(sequelize = db.sequelize), (Sequelize = db.Sequelize);

app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express_fileupload());

const router = require("./src/routers/rout");
app.use(router);

app.listen(port,()=>{
    console.log(`listening to the ${port}`);
});

