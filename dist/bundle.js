/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var Search_1 = __webpack_require__(3);
	var Panel_1 = __webpack_require__(4);
	var Tabs_1 = __webpack_require__(5);
	var action = function (value) {
	    alert(value);
	};
	ReactDOM.render(React.createElement("div", null, React.createElement("div", {className: "component"}, React.createElement("h3", null, "Search"), React.createElement(Search_1.Search, {action: action})), React.createElement("div", {className: "component"}, React.createElement("h3", null, "Panel"), React.createElement(Panel_1.Panel, null, React.createElement("article", null, React.createElement("h1", null, "Heading"), React.createElement("p", null, "Panel is a simple container with a gray background and a 100% width.")))), React.createElement("div", {className: "component"}, React.createElement("h3", null, "Tabs"), React.createElement(Tabs_1.Tabs, {titles: ['T1', 'Tab2', 'LongTabTitleStretch'], defaultActiveIndex: 1}, React.createElement(Panel_1.Panel, null, React.createElement("article", null, React.createElement("h1", null, "Description"), React.createElement("p", null, "Tab titles and tab content are seprately defined."))), React.createElement(Panel_1.Panel, null, React.createElement("article", null, React.createElement("h1", null, "Default Tab"), React.createElement("p", null, "defaultActiveIndex can be specified to tell Tabs which tab to show when initialized. It starts from 0."))), React.createElement(Panel_1.Panel, null, React.createElement("article", null, React.createElement("h1", null, "Container"), React.createElement("p", null, "Tab can contain other components. Here is a Search component:"), React.createElement(Search_1.Search, {action: action})))))), document.getElementById("showcases"));


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Search = (function (_super) {
	    __extends(Search, _super);
	    function Search(props) {
	        var _this = this;
	        _super.call(this, props);
	        this.clearInputValue = function () {
	            _this.setState({ value: '', active: false });
	        };
	        this.onValueChange = function (event) {
	            _this.setState({ value: event.target.value, active: _this.state.active });
	        };
	        this.onFocus = function () {
	            var val = _this.state;
	            val.active = true;
	            _this.setState(val);
	        };
	        this.onBlur = function () {
	            if (!_this.state.value.length) {
	                var val = _this.state;
	                val.active = false;
	                _this.setState(val);
	            }
	        };
	        this.onKeyPress = function (event) {
	            if (event.key === 'Enter') {
	                console.log(_this.state.value);
	                _this.props.action(_this.state.value);
	            }
	        };
	        this.state = { value: '', active: false };
	    }
	    Search.prototype.render = function () {
	        var clearButton;
	        var className = 'UISearch';
	        if (this.state.active) {
	            clearButton = React.createElement("button", {onClick: this.clearInputValue}, "X");
	            className += ' ' + 'active';
	        }
	        return (React.createElement("div", {className: className}, React.createElement("input", {type: "text", value: this.state.value, onChange: this.onValueChange, onFocus: this.onFocus, onBlur: this.onBlur, onKeyPress: this.onKeyPress}), clearButton));
	    };
	    return Search;
	}(React.Component));
	exports.Search = Search;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Panel = (function (_super) {
	    __extends(Panel, _super);
	    function Panel(props) {
	        _super.call(this, props);
	        this.state = {};
	    }
	    Panel.prototype.render = function () {
	        return (React.createElement("div", {className: "UIPanel"}, this.props.children));
	    };
	    return Panel;
	}(React.Component));
	exports.Panel = Panel;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Tabs = (function (_super) {
	    __extends(Tabs, _super);
	    function Tabs(props) {
	        var _this = this;
	        _super.call(this, props);
	        this.switchTab = function (index) {
	            _this.setState({ activeIndex: index });
	        };
	        var activeIndex = 0;
	        if (props.defaultActiveIndex < props.titles.length) {
	            activeIndex = this.props.defaultActiveIndex;
	        }
	        this.state = { activeIndex: activeIndex };
	    }
	    Tabs.prototype.render = function () {
	        var _this = this;
	        var children = React.Children.toArray(this.props.children);
	        var activeView = children[this.state.activeIndex] || React.createElement("div", null);
	        return (React.createElement("div", {className: "UITabs"}, React.createElement("div", {className: "tabs"}, this.props.titles.map(function (title, index) {
	            var className = "tab";
	            if (_this.state.activeIndex === index) {
	                className += ' ' + 'active';
	            }
	            return React.createElement("div", {key: title + '.' + index.toString(), className: className, onClick: function () { _this.switchTab(index); }}, title);
	        })), activeView));
	    };
	    return Tabs;
	}(React.Component));
	exports.Tabs = Tabs;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map