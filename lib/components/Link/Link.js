"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = void 0;
var styled_components_1 = __importStar(require("styled-components"));
var react_1 = __importDefault(require("react"));
var theme_1 = require("../../theme");
var LinkContainer = styled_components_1.default.a(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-weight: 400;\n  text-decoration: underline;\n  color: ", ";\n  cursor: ", ";\n\n  ", ";\n"], ["\n  font-weight: 400;\n  text-decoration: underline;\n  color: ", ";\n  cursor: ", ";\n\n  ",
    ";\n"])), function (props) { return (props.disabled ? theme_1.getColor('grey100') : theme_1.getColor('purple100')); }, function (props) { return (props.disabled ? 'not-allowed' : 'pointer'); }, function (props) {
    return !props.disabled && styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      &:hover {\n        color: ", ";\n      }\n\n      &:focus:not(:active) {\n        border-radius: 0px;\n        box-shadow: 0px 0px 0px 2px rgba(74, 144, 226, 0.3);\n        outline: none;\n      }\n\n      &:active {\n        outline: none;\n        color: ", ";\n      }\n    "], ["\n      &:hover {\n        color: ", ";\n      }\n\n      &:focus:not(:active) {\n        border-radius: 0px;\n        box-shadow: 0px 0px 0px 2px rgba(74, 144, 226, 0.3);\n        outline: none;\n      }\n\n      &:active {\n        outline: none;\n        color: ", ";\n      }\n    "])), theme_1.getColor('purple120'), theme_1.getColor('purple140'));
});
var Link = react_1.default.forwardRef(function (_a, forwardedRef) {
    var _b = _a.disabled, disabled = _b === void 0 ? false : _b, _c = _a.target, target = _c === void 0 ? '_self' : _c, href = _a.href, children = _a.children, rest = __rest(_a, ["disabled", "target", "href", "children"]);
    return (react_1.default.createElement(LinkContainer, __assign({ disabled: disabled, ref: forwardedRef, target: target, rel: target === '_blank' ? 'noopener noreferrer' : '' }, (!disabled ? { href: href } : {}), rest), children));
});
exports.Link = Link;
var templateObject_1, templateObject_2;
//# sourceMappingURL=Link.js.map