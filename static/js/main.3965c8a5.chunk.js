(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],[,function(_,e,t){"use strict";var a=t(2),s=t(3),r=t(5),c=t(4),o=t(6),n=t(0),l=t.n(n),E=(t(16),function(_){function e(){return Object(a.a)(this,e),Object(r.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(o.a)(e,_),Object(s.a)(e,[{key:"render",value:function(){var _=this;return l.a.createElement("button",{className:"calc-button ".concat(this.props.size),onClick:function(){return _.props.touchThis(_.props.number)}},this.props.number)}}]),e}(n.Component));e.a=E},,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var E_Perfiles_gbelmonte_Documents_GitHub_react_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),E_Perfiles_gbelmonte_Documents_GitHub_react_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),E_Perfiles_gbelmonte_Documents_GitHub_react_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),E_Perfiles_gbelmonte_Documents_GitHub_react_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4),E_Perfiles_gbelmonte_Documents_GitHub_react_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(6),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_components_CalBtn__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(1),_styles_calculator_css__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(17),_styles_calculator_css__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_styles_calculator_css__WEBPACK_IMPORTED_MODULE_7__),App=function(_Component){function App(props){var _this;return Object(E_Perfiles_gbelmonte_Documents_GitHub_react_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),_this=Object(E_Perfiles_gbelmonte_Documents_GitHub_react_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(E_Perfiles_gbelmonte_Documents_GitHub_react_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(App).call(this,props)),_this.receiveNumber=function(_){0===_this.state.showNumber||"0"===_this.state.showNumber||!0===_this.state.isResult?(0!==_this.state.showFloat.length?_this.setState({showFloat:_this.state.showFloat+_}):_this.setState({showFloat:_}),_this.setState({showNumber:_,isResult:!1})):_this.setState({showNumber:_this.state.showNumber+_,showFloat:_this.state.showFloat+_})},_this.clearScreen=function(){_this.setState({showNumber:0,showFloat:[]})},_this.operate=function(_){"+"===_?_this.setState({showNumber:0,showFloat:_this.state.showFloat+_}):"-"===_?_this.setState({showNumber:0,showFloat:_this.state.showFloat+_}):"*"===_?_this.setState({showNumber:0,showFloat:_this.state.showFloat+_}):"/"===_&&_this.setState({showNumber:0,showFloat:_this.state.showFloat+_})},_this.calculate=function(){var showFloat=_this.state.showFloat;_this.setState({showNumber:eval(showFloat),showFloat:[],isResult:!0})},_this.state={showNumber:0,showFloat:[],isResult:!1},_this}return Object(E_Perfiles_gbelmonte_Documents_GitHub_react_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(App,_Component),Object(E_Perfiles_gbelmonte_Documents_GitHub_react_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"container"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"border-cal"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"screen"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span",{className:"float"},this.state.showFloat),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"number-screen"},this.state.showNumber)),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"btns"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"rows"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_CalBtn__WEBPACK_IMPORTED_MODULE_6__.a,{touchThis:this.clearScreen,number:"C",size:"size-3"}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_CalBtn__WEBPACK_IMPORTED_MODULE_6__.a,{touchThis:this.operate,number:"/",size:"size-1"})),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"rows"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_CalBtn__WEBPACK_IMPORTED_MODULE_6__.a,{touchThis:this.receiveNumber,number:"7",size:"size-1"}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_CalBtn__WEBPACK_IMPORTED_MODULE_6__.a,{touchThis:this.receiveNumber,number:"8",size:"size-1"}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_CalBtn__WEBPACK_IMPORTED_MODULE_6__.a,{touchThis:this.receiveNumber,number:"9",size:"size-1"}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_CalBtn__WEBPACK_IMPORTED_MODULE_6__.a,{touchThis:this.operate,number:"*",size:"size-1"})),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"rows"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_CalBtn__WEBPACK_IMPORTED_MODULE_6__.a,{touchThis:this.receiveNumber,number:"4",size:"size-1"}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_CalBtn__WEBPACK_IMPORTED_MODULE_6__.a,{touchThis:this.receiveNumber,number:"5",size:"size-1"}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_CalBtn__WEBPACK_IMPORTED_MODULE_6__.a,{touchThis:this.receiveNumber,number:"6",size:"size-1"}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_CalBtn__WEBPACK_IMPORTED_MODULE_6__.a,{touchThis:this.operate,number:"-",size:"size-1"})),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"rows"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_CalBtn__WEBPACK_IMPORTED_MODULE_6__.a,{touchThis:this.receiveNumber,number:"1",size:"size-1"}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_CalBtn__WEBPACK_IMPORTED_MODULE_6__.a,{touchThis:this.receiveNumber,number:"2",size:"size-1"}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_CalBtn__WEBPACK_IMPORTED_MODULE_6__.a,{touchThis:this.receiveNumber,number:"3",size:"size-1"}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_CalBtn__WEBPACK_IMPORTED_MODULE_6__.a,{touchThis:this.operate,number:"+",size:"size-1"})),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"rows"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_CalBtn__WEBPACK_IMPORTED_MODULE_6__.a,{touchThis:this.receiveNumber,number:".",size:"size-1"}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_CalBtn__WEBPACK_IMPORTED_MODULE_6__.a,{touchThis:this.receiveNumber,number:"0",size:"size-1"}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_CalBtn__WEBPACK_IMPORTED_MODULE_6__.a,{touchThis:this.calculate,number:"=",size:"size-2"})))))}}]),App}(react__WEBPACK_IMPORTED_MODULE_5__.Component);__webpack_exports__.a=App},function(_,e,t){_.exports=t(18)},,,,,function(_,e,t){},function(_,e,t){},function(_,e,t){},function(_,e,t){"use strict";t.r(e);var a=t(0),s=t.n(a),r=t(8),c=t.n(r),o=(t(15),t(9));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(o.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(_){_.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.3965c8a5.chunk.js.map