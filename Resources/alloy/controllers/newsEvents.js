function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.newsEvents = A$(Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "newsEvents"
    }), "Window", null);
    $.addTopLevelView($.__views.newsEvents);
    $.__views.__alloyId3 = A$(Ti.UI.createLabel({
        text: "News &amp; Events",
        id: "__alloyId3"
    }), "Label", $.__views.newsEvents);
    $.__views.newsEvents.add($.__views.__alloyId3);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;