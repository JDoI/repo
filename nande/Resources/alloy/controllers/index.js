function Controller() {
    function doClickLabel1(e) {
        alert($.label1.text);
    }
    function doClickButton1(e) {
        alert("クリックされました");
    }
    function doClickSwitch1(e) {
        alert("変更されました");
    }
    function doOptionDialog1(e) {
        var dialogOptions = {
            title: "なにでシェアしますか？",
            options: [ "aa", "bb", "キャンセル" ],
            cancel: 2,
            destructive: 0
        }, dialog = Titanium.UI.createOptionDialog(dialogOptions);
        dialog.show();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.index = A$(Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    }), "Window", null);
    $.addTopLevelView($.__views.index);
    $.__views.label1 = A$(Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: 50,
        color: "#000",
        font: {
            fontFamily: "Arial",
            fontSize: 28,
            fontStyle: "italic",
            fontWeight: "bold"
        },
        text: "なんでナンデ？",
        id: "label1"
    }), "Label", $.__views.index);
    $.__views.index.add($.__views.label1);
    doClickLabel1 ? $.__views.label1.on("click", doClickLabel1) : __defers["$.__views.label1!click!doClickLabel1"] = !0;
    $.__views.button1 = A$(Ti.UI.createButton({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        backgroundColor: "#FFF",
        title: "Button1",
        id: "button1"
    }), "Button", $.__views.index);
    $.__views.index.add($.__views.button1);
    doClickButton1 ? $.__views.button1.on("click", doClickButton1) : __defers["$.__views.button1!click!doClickButton1"] = !0;
    $.__views.switch1 = A$(Ti.UI.createSwitch({
        top: "70%",
        value: !1,
        id: "switch1"
    }), "Switch", $.__views.index);
    $.__views.index.add($.__views.switch1);
    doClickSwitch1 ? $.__views.switch1.on("click", doClickSwitch1) : __defers["$.__views.switch1!click!doClickSwitch1"] = !0;
    $.__views.optionDialog1 = A$(Ti.UI.createButton({
        top: "30%",
        title: "OptionDialog1",
        id: "optionDialog1"
    }), "Button", $.__views.index);
    $.__views.index.add($.__views.optionDialog1);
    doOptionDialog1 ? $.__views.optionDialog1.on("click", doOptionDialog1) : __defers["$.__views.optionDialog1!click!doOptionDialog1"] = !0;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.label1!click!doClickLabel1"] && $.__views.label1.on("click", doClickLabel1);
    __defers["$.__views.button1!click!doClickButton1"] && $.__views.button1.on("click", doClickButton1);
    __defers["$.__views.switch1!click!doClickSwitch1"] && $.__views.switch1.on("click", doClickSwitch1);
    __defers["$.__views.optionDialog1!click!doOptionDialog1"] && $.__views.optionDialog1.on("click", doOptionDialog1);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;