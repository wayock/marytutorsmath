const express = require("express");
const router = express.Router();
const contentController = require("../controllers/content")

router.get("/admin", contentController.index);

module.exports = router;

//  sequelize model:create --name Content --attributes name:string,title:string,description:text
