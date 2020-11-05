const { createOne } = require("../config/orm");
var orm = require("../config/orm");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    createOne: function(name, cb) {
        orm.createOne("burgers", [
            "burger_name", "devoured"
        ], [
            name, false
        ], cb);
    },
    updateOne: function(id, cb) {
        var condition = "id=" + id;
        orm.updateOne("burgers", {
            devoured: true
        }, condition, cb);
    }
};

module.exports = burger;