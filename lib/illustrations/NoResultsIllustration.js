"use strict";
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
exports.NoResultsIllustration = void 0;
var react_1 = __importDefault(require("react"));
var hooks_1 = require("../hooks");
var NoResultsIllustration = function (_a) {
    var title = _a.title, _b = _a.size, size = _b === void 0 ? 256 : _b, props = __rest(_a, ["title", "size"]);
    return (react_1.default.createElement("svg", __assign({ width: size, height: size, viewBox: "0 0 256 256" }, props),
        title && react_1.default.createElement("title", null, title),
        react_1.default.createElement("defs", null,
            react_1.default.createElement("path", { d: "M129.47 84.27c-.431 2.548-1.516 5.493-2.918 8.132-2.984-.396-5.982-1.243-8.329-2.379-1.941-.958-4.155-2.414-6.254-4.104l.052.666c-.001.064.019.129.018.194.019.15.016.322.035.472-.001.065.018.152.017.216l.057.474c-.001.064.02.129.018.193.018.194.036.409.075.602.038.302.056.517.094.754.04.259.059.452.097.646-.001.043.021.086.02.13.039.193.058.366.097.559-.001.044.021.065.02.108.039.215.079.431.118.626.139.668.3 1.315.482 1.941.305 1.058.654 2.031 1.07 2.875.062.129.125.238.188.369.061.129.102.237.165.345.061.131.125.24.187.348a26 26 0 00.272.434c.043.065.043.087.064.087.105.13.21.283.315.414.085.087.148.174.232.262l.107.109c.041.044.106.088.147.153l.106.109a.863.863 0 00.149.131.486.486 0 01.105.088.639.639 0 00.15.11c.041.022.084.044.105.088.043.043.106.066.171.11.041.022.084.045.106.066.064.023.128.067.192.09.021.021.064.022.085.045.086.044.192.089.277.111.065.023.13.045.171.068 4.667 1.477 9.473-.242 15.035 4.171-.371-7.115 3.787-9.857 5.331-14.491 0-.064.024-.149.048-.235.024-.107.068-.213.069-.321.26-1.283-.187-2.838-1.127-4.466a4.537 4.537 0 01-.271-.433c-.147-.239-.315-.5-.504-.761a.31.31 0 01-.063-.087c-.042-.065-.105-.131-.147-.196-.042-.065-.105-.153-.147-.217-.042-.065-.105-.131-.147-.196-.064-.065-.105-.153-.168-.217-.043-.045-.085-.109-.127-.153-1.494-1.917-3.463-3.819-5.543-5.489.147 2.667.057 5.35-.302 7.449z", id: "NoResultsIllustration_prefix__a" })),
        react_1.default.createElement("g", { fill: "none", fillRule: "evenodd" },
            react_1.default.createElement("path", { d: "M220.902 45a1 1 0 01-1-1v-7a1 1 0 112 0v7a1 1 0 01-1 1", fill: "#5E63B6" }),
            react_1.default.createElement("path", { d: "M224.402 41.5h-7a1 1 0 110-2h7a1 1 0 110 2M14.427 199.167a.5.5 0 01-.5-.5v-3.937a.5.5 0 111 0v3.937a.5.5 0 01-.5.5", fill: "#5E63B6" }),
            react_1.default.createElement("path", { d: "M16.396 197.198h-3.938a.5.5 0 010-1h3.938a.5.5 0 010 1M242.494 180.45a.5.5 0 01-.5-.5v-3.938a.5.5 0 111 0v3.938a.5.5 0 01-.5.5", fill: "#5E63B6" }),
            react_1.default.createElement("path", { d: "M244.462 178.48h-3.938a.5.5 0 010-1h3.938a.5.5 0 010 1M44.004 64.452a.5.5 0 01-.5-.5v-3.937a.5.5 0 111 0v3.937a.5.5 0 01-.5.5", fill: "#5E63B6" }),
            react_1.default.createElement("path", { d: "M45.973 62.483h-3.938a.5.5 0 010-1h3.938a.5.5 0 010 1M26.556 115.71a1 1 0 01-1-1v-8.126a1 1 0 112 0v8.125a1 1 0 01-1 1", fill: "#5E63B6" }),
            react_1.default.createElement("path", { d: "M30.619 111.647h-8.125a1 1 0 110-2h8.125a1 1 0 110 2", fill: "#5E63B6" }),
            react_1.default.createElement("path", { d: "M24.001 235.147H231.12c0-57.199-46.36-103.559-103.56-103.559S24.001 177.948 24.001 235.147z", fill: "#E1F2FF" }),
            react_1.default.createElement("path", { d: "M244.001 225.589c-.551 0-1 .449-1 1 0 .549.449.999 1 .999h8.969c.56 0 1-.45 1-.999 0-.551-.44-1-1-1h-8.969zm-224.001 0c-.55 0-.999.449-.999 1 0 .549.449.999.999.999h217.9c.549 0 1-.45 1-.999 0-.551-.451-1-1-1H20zm-17 0c-.551 0-1 .449-1 1 0 .549.449.999 1 .999h8.971c.558 0 1-.45 1-.999 0-.551-.442-1-1-1H3zm78.33 8.719c-.55 0-.98.46-.98 1 0 .56.45 1 1 1l5-.081c.571 0 1-.459 1-.999-.021-.56-.45-1-1.021-1l-4.999.08zm88.709 0c-.559 0-1 .45-1 1 0 .551.441 1 1 1h9.141c.55 0 1.001-.449 1.001-1 0-.55-.451-1-1.001-1h-9.141zm-75.819 0c-.54 0-1 .45-1 1 0 .551.46 1 1 1h67.2c.55 0 1-.449 1-1 0-.55-.45-1-1-1h-67.2z", fill: "#5E63B6" }),
            react_1.default.createElement("path", { d: "M63.137 44.149c-1.657 0-3 1.342-3 2.999v177.001a3 3 0 003 2.999h127a3 3 0 003-2.999V47.148a3 3 0 00-3-2.999h-127z", fill: "#FFF" }),
            react_1.default.createElement("path", { d: "M64.137 46.148c-1.103 0-2 .897-2 2v175c0 2 0 2 2 2h125c2 0 2 0 2-2v-175c0-1.103-.897-2-2-2h-125zm125 181h-125c-3.252 0-4-.748-4-4v-175c0-2.206 1.794-4 4-4h125c2.206 0 4 1.794 4 4v175c0 3.215-.785 4-4 4z", fill: "#5E63B6" }),
            react_1.default.createElement("path", { d: "M167.058 154.948h-47.593a1 1 0 110-2h47.593a1 1 0 110 2M167.06 170.855H86.172a1 1 0 010-2h80.886a1 1 0 110 2M167.06 188.07H86.172a1 1 0 010-2h80.886a1 1 0 110 2M137.073 205.284h-50.9a1 1 0 110-2h50.9a1 1 0 110 2", fill: "#5E63B6" }),
            react_1.default.createElement("path", { d: "M103.116 144.464c-2.235 1.292-3.983 2.843-5.242 4.656-1.259 1.812-1.889 3.914-1.889 6.31 0 1.701.425 3.119 1.275 4.252.849 1.135 1.984 1.703 3.398 1.703 1.259 0 2.291-.48 3.093-1.441.804-.96 1.205-2.025 1.205-3.189 0-1.387-.347-2.402-1.04-3.049-.691-.647-1.495-.97-2.408-.97-.157 0-.293.024-.401.071a.765.765 0 01-.307.071c-.126 0-.213-.079-.26-.236-.048-.157-.071-.428-.071-.804 0-1.26.426-2.387 1.277-3.378.849-.993 1.73-1.773 2.645-2.341.093-.03.085-.18-.024-.449a2.704 2.704 0 00-.307-.59 2.623 2.623 0 00-.471-.449c-.163-.128-.291-.19-.385-.19a.167.167 0 00-.088.023zM92.208 144.464c-2.235 1.292-3.983 2.843-5.243 4.656-1.26 1.814-1.89 3.916-1.89 6.31 0 1.701.426 3.119 1.273 4.252.851 1.135 1.986 1.703 3.402 1.703 1.26 0 2.291-.48 3.092-1.441.805-.96 1.206-2.025 1.206-3.189 0-1.387-.347-2.402-1.039-3.049-.692-.647-1.495-.97-2.409-.97-.158 0-.291.024-.401.071a.765.765 0 01-.307.071c-.127 0-.213-.079-.259-.236-.048-.157-.072-.428-.072-.804 0-1.26.426-2.387 1.277-3.378.849-.993 1.73-1.773 2.645-2.341.092-.03.085-.18-.024-.449a2.619 2.619 0 00-.307-.59 2.67 2.67 0 00-.472-.449c-.162-.128-.291-.19-.385-.19a.166.166 0 00-.087.023zM149.502 196.101c-.803.963-1.205 2.026-1.205 3.193 0 1.389.347 2.406 1.042 3.05.693.647 1.495.97 2.411.97.157 0 .289-.023.402-.071a.769.769 0 01.308-.071c.127 0 .214.079.259.237.049.158.072.427.072.805 0 1.576-.387 2.745-1.158 3.5-.774.757-1.694 1.497-2.766 2.223-.096.064-.096.214 0 .449.095.235.206.434.33.59.124.159.291.309.497.449.206.143.355.198.449.167 2.174-1.231 3.906-2.768 5.199-4.612 1.292-1.845 1.939-3.966 1.939-6.362 0-1.703-.426-3.121-1.275-4.256-.855-1.136-1.988-1.704-3.407-1.704-1.26 0-2.292.481-3.097 1.443zM160.423 196.101c-.805.963-1.204 2.026-1.204 3.193 0 1.389.346 2.406 1.04 3.05.695.647 1.497.97 2.41.97.159 0 .291-.023.402-.071a.776.776 0 01.307-.071c.126 0 .212.079.261.237.047.158.07.427.07.805 0 1.576-.387 2.745-1.158 3.5-.774.757-1.693 1.497-2.765 2.223-.096.064-.096.214 0 .449.094.235.205.434.33.59.127.159.291.309.497.449.205.143.354.198.448.167 2.173-1.231 3.907-2.768 5.199-4.612 1.294-1.843 1.94-3.964 1.94-6.362 0-1.703-.426-3.121-1.276-4.256-.852-1.136-1.987-1.704-3.404-1.704-1.262 0-2.293.481-3.097 1.443z", fill: "#9452BA" }),
            react_1.default.createElement("path", { d: "M125.637 63.608c-16.636 0-30.17 13.544-30.17 30.19 0 16.649 13.534 30.193 30.17 30.193 16.636 0 30.171-13.544 30.171-30.192 0-16.647-13.535-30.191-30.17-30.191", fill: "#E1F2FF" }),
            react_1.default.createElement("path", { d: "M100.466 92.107c0 14.612 11.888 26.5 26.5 26.5s26.5-11.888 26.5-26.5c0-14.611-11.888-26.5-26.5-26.5s-26.5 11.889-26.5 26.5z", fill: "#FFF" }),
            react_1.default.createElement("path", { d: "M126.637 66.765c-13.794 0-25.016 11.23-25.016 25.034 0 13.803 11.222 25.034 25.016 25.034 13.794 0 25.016-11.23 25.016-25.034 0-13.804-11.222-25.034-25.016-25.034m0 52.068c-14.896 0-27.016-12.128-27.016-27.034 0-14.907 12.12-27.034 27.016-27.034 14.896 0 27.016 12.127 27.016 27.034 0 14.906-12.12 27.034-27.016 27.034", fill: "#5E63B6" }),
            react_1.default.createElement("use", { fill: hooks_1.useTheme().color.brand100, xlinkHref: "#NoResultsIllustration_prefix__a" }))));
};
exports.NoResultsIllustration = NoResultsIllustration;
//# sourceMappingURL=NoResultsIllustration.js.map