(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getFontSize = exports.getColorForLevel = exports.getColor = void 0;
    var getColor = function (color) { return function (_a) {
        var theme = _a.theme;
        return theme.color[color];
    }; };
    exports.getColor = getColor;
    var getColorForLevel = function (level, gradient) { return function (_a) {
        var theme = _a.theme;
        return theme.color["" + theme.palette[level] + gradient];
    }; };
    exports.getColorForLevel = getColorForLevel;
    var getFontSize = function (fontSize) { return function (_a) {
        var theme = _a.theme;
        return theme.fontSize[fontSize];
    }; };
    exports.getFontSize = getFontSize;
});
//# sourceMappingURL=theme.js.map