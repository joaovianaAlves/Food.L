"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/fridge",{

/***/ "./src/pages/fridge.js":
/*!*****************************!*\
  !*** ./src/pages/fridge.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/functions */ \"./src/components/functions.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst fridge = ()=>{\n    _s();\n    const [receitas, setReceitas] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const ingredientes = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    function handleClick() {\n        const listaIngredientes = ingredientes.current.value.split(\"/\");\n        const array = (0,_components_functions__WEBPACK_IMPORTED_MODULE_3__.verificarIngrediente)(listaIngredientes);\n        setReceitas([\n            ...array\n        ]);\n    }\n    function handleReset() {\n        const deletedItem = receitas.shift();\n        setReceitas(receitas.filter((receita)=>receita != deletedItem));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Frigde Chef || Articles\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\unisanta\\\\Food.L\\\\src\\\\pages\\\\fridge.js\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"descripition\",\n                        content: \"Articles\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\unisanta\\\\Food.L\\\\src\\\\pages\\\\fridge.js\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\unisanta\\\\Food.L\\\\src\\\\pages\\\\fridge.js\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex flex-col items-center min-h-screen gap-4\",\n                children: [\n                    receitas.length != 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col border border-black p-4 justify-center items-center gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"font-bold\",\n                                children: receitas[0].nome\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\unisanta\\\\Food.L\\\\src\\\\pages\\\\fridge.js\",\n                                lineNumber: 33,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: receitas[0].ingredientesReais\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\unisanta\\\\Food.L\\\\src\\\\pages\\\\fridge.js\",\n                                lineNumber: 35,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: receitas[0].modoDePreparo\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\unisanta\\\\Food.L\\\\src\\\\pages\\\\fridge.js\",\n                                lineNumber: 36,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\unisanta\\\\Food.L\\\\src\\\\pages\\\\fridge.js\",\n                        lineNumber: 32,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                ref: ingredientes\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\unisanta\\\\Food.L\\\\src\\\\pages\\\\fridge.js\",\n                                lineNumber: 42,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleClick(),\n                                className: \"flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark\",\n                                children: \"Gerar\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\unisanta\\\\Food.L\\\\src\\\\pages\\\\fridge.js\",\n                                lineNumber: 44,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleReset(),\n                                className: \"flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark\",\n                                children: \"Reset\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\unisanta\\\\Food.L\\\\src\\\\pages\\\\fridge.js\",\n                                lineNumber: 45,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\unisanta\\\\Food.L\\\\src\\\\pages\\\\fridge.js\",\n                        lineNumber: 41,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\unisanta\\\\Food.L\\\\src\\\\pages\\\\fridge.js\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(fridge, \"Il6izmFjhy7ynz36gDePGWCLvlA=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (fridge);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZnJpZGdlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBNkI7QUFDbUI7QUFDNkI7QUFFN0UsTUFBTU0sU0FBUyxJQUFNOztJQUNqQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNTSxlQUFlUCw2Q0FBTUE7SUFFM0IsU0FBU1EsY0FBYTtRQUNsQixNQUFNQyxvQkFBb0JGLGFBQWFHLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDQyxLQUFLLENBQUM7UUFFM0QsTUFBTUMsUUFBUVgsMkVBQW9CQSxDQUFDTztRQUVwQ0gsWUFBWTtlQUFJTztTQUFNO0lBQ3pCO0lBRUEsU0FBU0MsY0FBYTtRQUNsQixNQUFNQyxjQUFjVixTQUFTVyxLQUFLO1FBRWxDVixZQUFZRCxTQUFTWSxNQUFNLENBQUNDLENBQUFBLFVBQVdBLFdBQVdIO0lBQ3REO0lBRUEscUJBQ0k7OzBCQUNBLDhEQUFDakIsa0RBQUlBOztrQ0FDRyw4REFBQ3FCO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFlQyxTQUFROzs7Ozs7Ozs7Ozs7MEJBRTFDLDhEQUFDQztnQkFBS0MsV0FBVTs7b0JBRVBuQixTQUFTb0IsTUFBTSxJQUFJLG1CQUNoQiw4REFBQ0M7d0JBQUlGLFdBQVU7OzBDQUNYLDhEQUFDRztnQ0FBR0gsV0FBVTswQ0FBYW5CLFFBQVEsQ0FBQyxFQUFFLENBQUN1QixJQUFJOzs7Ozs7MENBRTNDLDhEQUFDQzswQ0FBSXhCLFFBQVEsQ0FBQyxFQUFFLENBQUN5QixpQkFBaUI7Ozs7OzswQ0FDbEMsOERBQUNEOzBDQUFJeEIsUUFBUSxDQUFDLEVBQUUsQ0FBQzBCLGFBQWE7Ozs7Ozs7Ozs7OztrQ0FLMUMsOERBQUNMO3dCQUFJRixXQUFVOzswQ0FDWCw4REFBQ1E7Z0NBQU1DLEtBQUsxQjs7Ozs7OzBDQUVaLDhEQUFDMkI7Z0NBQU9DLFNBQVMsSUFBTTNCO2dDQUFlZ0IsV0FBVTswQ0FBOEs7Ozs7OzswQ0FDOU4sOERBQUNVO2dDQUFPQyxTQUFTLElBQU1yQjtnQ0FBZVUsV0FBVTswQ0FBOEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTlPO0dBOUNNcEI7QUErQ04sK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2ZyaWRnZS5qcz9jMjZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdmVyaWZpY2FySW5ncmVkaWVudGUsIHZlcmlmaWNhclRhZ3MgfSBmcm9tIFwiQC9jb21wb25lbnRzL2Z1bmN0aW9uc1wiO1xyXG5cclxuY29uc3QgZnJpZGdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3JlY2VpdGFzLCBzZXRSZWNlaXRhc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IGluZ3JlZGllbnRlcyA9IHVzZVJlZigpXHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soKXtcclxuICAgICAgICBjb25zdCBsaXN0YUluZ3JlZGllbnRlcyA9IGluZ3JlZGllbnRlcy5jdXJyZW50LnZhbHVlLnNwbGl0KCcvJylcclxuXHJcbiAgICAgICAgY29uc3QgYXJyYXkgPSB2ZXJpZmljYXJJbmdyZWRpZW50ZShsaXN0YUluZ3JlZGllbnRlcylcclxuXHJcbiAgICAgICBzZXRSZWNlaXRhcyhbLi4uYXJyYXldKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVJlc2V0KCl7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlZEl0ZW0gPSByZWNlaXRhcy5zaGlmdCgpXHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0UmVjZWl0YXMocmVjZWl0YXMuZmlsdGVyKHJlY2VpdGEgPT4gcmVjZWl0YSAhPSBkZWxldGVkSXRlbSkpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+RnJpZ2RlIENoZWYgfHwgQXJ0aWNsZXM8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXBpdGlvblwiIGNvbnRlbnQ9XCJBcnRpY2xlc1wiPjwvbWV0YT5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgbWluLWgtc2NyZWVuIGdhcC00XCI+XHJcblxyXG4gICAgICAgICAgICAgICAge3JlY2VpdGFzLmxlbmd0aCAhPSAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgYm9yZGVyIGJvcmRlci1ibGFjayBwLTQganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGRcIj57cmVjZWl0YXNbMF0ubm9tZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyoge3JlY2VpdGFzWzBdLmluZ3JlZGllbnRlcy5tYXAoaW5ncmVkaWVudGUgPT4ge3JldHVybig8aDI+e2luZ3JlZGllbnRlfTwvaDI+KX0pfSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPntyZWNlaXRhc1swXS5pbmdyZWRpZW50ZXNSZWFpc308L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+e3JlY2VpdGFzWzBdLm1vZG9EZVByZXBhcm99PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTInPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHJlZj17aW5ncmVkaWVudGVzfSAvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKCl9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGJnLWRhcmsgdGV4dC1saWdodCBwLTIuNSBweC02IHJvdW5kZWQtbGcgdGV4dC1sZyBmb250LXNlbWlib2xkIGhvdmVyOmJnLWxpZ2h0IGhvdmVyOnRleHQtZGFyayBib3JkZXItMiBib3JkZXItc29saWQgYm9yZGVyLXRyYW5zcGFyZW50IGhvdmVyOmJvcmRlci1kYXJrXCIgPkdlcmFyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlc2V0KCl9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGJnLWRhcmsgdGV4dC1saWdodCBwLTIuNSBweC02IHJvdW5kZWQtbGcgdGV4dC1sZyBmb250LXNlbWlib2xkIGhvdmVyOmJnLWxpZ2h0IGhvdmVyOnRleHQtZGFyayBib3JkZXItMiBib3JkZXItc29saWQgYm9yZGVyLXRyYW5zcGFyZW50IGhvdmVyOmJvcmRlci1kYXJrXCIgPlJlc2V0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L21haW4+XHJcbiAgICA8Lz4gXHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnJpZGdlIl0sIm5hbWVzIjpbIkhlYWQiLCJSZWFjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwidmVyaWZpY2FySW5ncmVkaWVudGUiLCJ2ZXJpZmljYXJUYWdzIiwiZnJpZGdlIiwicmVjZWl0YXMiLCJzZXRSZWNlaXRhcyIsImluZ3JlZGllbnRlcyIsImhhbmRsZUNsaWNrIiwibGlzdGFJbmdyZWRpZW50ZXMiLCJjdXJyZW50IiwidmFsdWUiLCJzcGxpdCIsImFycmF5IiwiaGFuZGxlUmVzZXQiLCJkZWxldGVkSXRlbSIsInNoaWZ0IiwiZmlsdGVyIiwicmVjZWl0YSIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibWFpbiIsImNsYXNzTmFtZSIsImxlbmd0aCIsImRpdiIsImgxIiwibm9tZSIsImgyIiwiaW5ncmVkaWVudGVzUmVhaXMiLCJtb2RvRGVQcmVwYXJvIiwiaW5wdXQiLCJyZWYiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/fridge.js\n"));

/***/ })

});