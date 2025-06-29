const express = require("express");
const router = express.Router();

const {
getDashboardData
} = require("../controllers/dashboardController");

const protect = require("../middleware/authMiddleware");
router.use(protect);
router.get("/", getDashboardData);


module.exports = router;
