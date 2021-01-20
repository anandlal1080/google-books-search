const router = require("express").Router();
const bookRoutes = require("./books");

// Post routes
router.use("/books", bookRoutes);

module.exports = router;
