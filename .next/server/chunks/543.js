"use strict";
exports.id = 543;
exports.ids = [543];
exports.modules = {

/***/ 6543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ VideoPopUp)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




function VideoPopUp({
  setShow,
  src
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: "mfp-bg mfp-ready"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
      tabIndex: "-1",
      style: {
        "overflow": "hidden auto;"
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "mfp-container mfp-s-ready mfp-iframe-holder",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
          className: "mfp-content",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "mfp-iframe-scaler",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("button", {
              title: "Close (Esc)",
              type: "button",
              className: "mfp-close",
              onClick: () => setShow(),
              children: "\xD7"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("iframe", {
              className: "mfp-iframe",
              src: src,
              frameBorder: "0",
              allowFullScreen: ""
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
          className: "mfp-preloader",
          children: "Loading..."
        })]
      })
    })]
  });
}

/***/ })

};
;