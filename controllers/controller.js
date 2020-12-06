var express = require("express");

var router = express.Router();
var burger = require("../models/burger");

// get route
router.get("/", function(req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
    burger.selectAll(function(burgerData) {
        res.render("index", { burger_Data: burgerData });
    });
});

// post route
router.post("/burgers/create", function(req, res) {
    burger.createOne(req.body.burger_name, function(result) {
        console.log(result);
        res.redirect("/");
    });
});

// put route
router.put("/burgers/:id", function(req, res) {
    burger.updateOne(req.params.id, function(result) {
        console.log(result);
        res.sendStatus(200);
    });
});

module.exports = router;