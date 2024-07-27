const express = require("express");
const router = express.Router();

const {handelRenderController} = require("../controllers/render")

router.get("/render", handelRenderController);




module.exports = router;