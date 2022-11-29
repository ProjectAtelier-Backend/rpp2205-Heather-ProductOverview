const router = require("express").Router();
const { getProducts, getProdInfo, getRelated, getStyles } = require('./controller.js');

router.get("/", getProducts);

router.get("/:product_id", getProdInfo);

router.get("/:product_id/related", getRelated);

router.get("/:product_id/styles", getStyles);

module.exports = router;