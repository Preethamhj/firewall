const express = require("express");
const router = express.Router();

const decryptMiddleware = require("../middleware/decryptMiddleware");
const { processData } = require("../controllers/dataController");

router.post("/data", decryptMiddleware, processData);

module.exports = router;
