const express = require("express");
const router = express.Router();

const { getPaginatedProducts, saveProducts } = require("../controllers/productController");

// Route to get paginated products
router.get('/', getPaginatedProducts);

// Uncomment this if you need to save products initially
// router.get('/sample_data', saveProducts);

module.exports = router;
