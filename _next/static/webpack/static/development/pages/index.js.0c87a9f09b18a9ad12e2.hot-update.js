webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/home/index.js":
/*!*****************************!*\
  !*** ./pages/home/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_social_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-social-icons */ "./node_modules/react-social-icons/dist/react-social-icons.js");
/* harmony import */ var react_social_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_social_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
var _jsxFileName = "/Users/jdconner/Personal/next-website/pages/home/index.js";



 // TODO: Routing transitions if possible
// TODO: Find color scheme with #399/#0275d8
// TODO: Image compression + fuzzy loading state
// TODO: Amazon Web services (AWS Cloud): Kinesis, S3, ES, EC2, Lambda functions, API Gateway

var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProfileContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImageContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProfileImage, {
    src: "static/JCcrop.jpg",
    alt: "Justin Conner Portait",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Description, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Full-stack Web Developer"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Devout seeker of efficiency, simplicity, and clarity in work, code and life itself.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Section, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, titles.map(function (position) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Badge, {
      key: position,
      color: "#399",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, position);
  })), skillz.map(function (skill) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Badge, {
      key: skill,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, skill);
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Section, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Social, {
    color: "#339399",
    url: "http://linkedin.com/in/justindconner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Social, {
    color: "#1B84B9",
    url: "https://github.com/jdconner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Social, {
    network: "email",
    color: "#0275D8",
    url: "mailto:justindconner2@gmail.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);
var titles = ["Front-end Web Architect", "Sr. Full-stack Web Developer", // "Sr. JavaScript Developer",
"Feature Team Lead", "Dev Manager"];
var skillz = ["ReactJS", "Webpack", "ES6", "HMTL5", "CSS3", "SASS", "Styled Components", "Axios", "NodeJS", "ExpressJS", "Koa", "PostgreSQL", "MySQL", "Mocha", "Karma", "Protractor", "Git", "TypeScript", "AngularJS"];
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "home__Title",
  componentId: "sc-1kwj6gq-0"
})(["margin:0;"]);
var Description = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "home__Description",
  componentId: "sc-1kwj6gq-1"
})(["padding-bottom:1em;"]);
var ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "home__ImageContainer",
  componentId: "sc-1kwj6gq-2"
})(["margin:0 auto 1em;"]);
var ProfileImage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "home__ProfileImage",
  componentId: "sc-1kwj6gq-3"
})(["display:inline-block;padding:0;max-width:200px;border-style:ridge;border-width:5px;border-radius:50%;margin:auto;"]);
var ProfileContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "home__ProfileContainer",
  componentId: "sc-1kwj6gq-4"
})(["display:flex;justify-content:center;flex-direction:column;text-align:center;max-width:570px;width:80%;margin:auto;"]);
var Section = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "home__Section",
  componentId: "sc-1kwj6gq-5"
})(["margin:0.5em 0 0.8em;"]);
var Badge = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "home__Badge",
  componentId: "sc-1kwj6gq-6"
})(["background-color:", ";padding:3px 5px;color:white;margin:3px;border-radius:0.25rem;font-size:12px;font-weight:700;line-height:1;white-space:nowrap;vertical-align:baseline;display:inline-block;"], function (_ref) {
  var color = _ref.color;
  return color ? color : "var(--color-secondary)";
});
var Social = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(react_social_icons__WEBPACK_IMPORTED_MODULE_2__["SocialIcon"]).withConfig({
  displayName: "home__Social",
  componentId: "sc-1kwj6gq-7"
})(["margin:0 5px;", ""], function (_ref2) {
  var color = _ref2.color;
  return color ? "g:last-child { fill: ".concat(color, " !important; }") : "";
});

/***/ })

})
//# sourceMappingURL=index.js.0c87a9f09b18a9ad12e2.hot-update.js.map