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
	var Button_1 = __webpack_require__(4);
	var Panel_1 = __webpack_require__(5);
	var Tabs_1 = __webpack_require__(6);
	var UserImage_1 = __webpack_require__(7);
	var Sidemenu_1 = __webpack_require__(8);
	var Fapiao_1 = __webpack_require__(9);
	var action = function (value) {
	    alert(value);
	};
	ReactDOM.render(React.createElement("div", null, React.createElement("div", {className: "component"}, React.createElement("h3", null, "Search"), React.createElement(Search_1.Search, {action: action})), React.createElement("div", {className: "component"}, React.createElement("h3", null, "Button"), React.createElement(Button_1.Button, {type: "icon", text: "icon: text will not appear", action: action, src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AEWDjA79lFiDAAAA+RJREFUWMPNmL1v3GQcx/345fGdE18e3xknlwtCaiSE2BiqUIjUoVsVWMiKEIj+AV0oC6pYCkJIDCBWKnUNEko6sDAgpZQKpE5ELESqavkSn4L9yI5ztp/zw5Kgq/P4Hp/jpH1Gv378e/P3+wBKqfAiL1kQBAEAUPoGRVFWIITriqJckWX5lfFzhJAnaZo+TJJkI03TR2eFo5QKgFJaClDTtE8QQp+rqtoo8/A4jocY4++iKLpDKfXODbDRaHzYbre/LwuWX4SQbDAYfDwcDn+oHRAhtG0Yxtt11BLGeMfzvNVpolkICAAwLMva1TQN1VnwURT5ruteKgtZCDg/P+/x4IIgsOM4/iXXQJfn5uZerwuSCdhqtTY7nc47RfXk+/69MAxvFr0AAGA0m80bnU7nC1mWRdY1nuc98H1/dWpACOFar9fbqqOGAACGYRjbRRHt9/sf8RrnFODi4uIRq1vLfvE0jRbH8bDf7y9O+mBKqSCOzzkWHMZ4pyqcIAiC7/urnuc9yB9XVbXRbDZvcDNxEkFWYxBCMtu2zaqDdjzd3W7XyQcgjuOh4zhNbgQlSVpmda3v+/fOCnf8Is/3/dusKCqKsjLpXvH4wvdYHRuG4c0aZ+BXhJAsfxxCuM4FlGX5VI0dHh7+XUf0crPzISOK17mAEMI38ifSNP2jbumUJMnmKQBRbHEBC9TIRt2AhJAdRorNSoAXtXgqqRBQFMWXLgIwiiK/EqCiKFfrhmE9czQahVzAvCo5Dv21c0jndUZdPuECpmn6a/6ErutLkiQt1wUHADBmZmZeK9PZrAj+VOBDPqsLcHZ29huW/Irj+EcuIKXUwxifGgGmaX7A+xWVWZIkLSOE3meJ3tFo9E+pJgnD8Bbrgna7/TMAwDhLak3T/JMVvSiKvuXdL47Vwv0gCGxGmpFlWbtVIE9Ea5F9YNX+xDGDMV4vqEXU7XYdCOHaNAbfsqzdSR5lYWHht1JqZuyLHrmu+3XRxO/1elsIoe1JD1UUZQUhtL20tPQ7z3jJsizyIJmurowfJoRkR0dHTpIkjyml/6qqeg1CaFYx+ISQbG9v7638dslE416naa8K+YwnYXmJ/f39WyyReS67WAXpFnkq2HGcV1ndPYVItW3bfpNlnMpAlt7dghCuaZr2qa7rV4oMed6qRlH0ZZIk98dm6l+8nYdxs5ZlmVcaMA+rKMpVliSL43hjHKrqns/BwcEWxvjdSoBnFQ1lIIMgsAeDwcsXrqgppZ7rupd4QvW5Sv4ykEmSPJ6qSS4y3SdbdFmWecLz3uUHABi6rt81TfOpaZpPW63W5okw+f9P8iKv/wCR5lHiuuVTsgAAAABJRU5ErkJggg=="}), React.createElement(Button_1.Button, {type: "icon", text: "icon: text will not appear", action: action}), React.createElement(Button_1.Button, {type: "primary", text: "Primary Button", action: action}), React.createElement(Button_1.Button, {type: "second", text: "Second Button", action: action}), React.createElement(Button_1.Button, {type: "tertiary", text: "Tertiary Button", action: action})), React.createElement("div", {className: "component"}, React.createElement("h3", null, "Panel"), React.createElement(Panel_1.Panel, null, React.createElement("article", null, React.createElement("h1", null, "Heading"), React.createElement("p", null, "Panel is a simple container with a gray background and a 100% width.")))), React.createElement("div", {className: "component"}, React.createElement("h3", null, "Tabs"), React.createElement(Tabs_1.Tabs, {titles: ['T1', 'Tab2', 'LongTabTitleStretch'], defaultActiveIndex: 1}, React.createElement(Panel_1.Panel, null, React.createElement("article", null, React.createElement("h1", null, "Description"), React.createElement("p", null, "Tab titles and tab content are seprately defined."))), React.createElement(Panel_1.Panel, null, React.createElement("article", null, React.createElement("h1", null, "Default Tab"), React.createElement("p", null, "defaultActiveIndex can be specified to tell Tabs which tab to show when initialized.It starts from 0."))), React.createElement(Panel_1.Panel, null, React.createElement("article", null, React.createElement("h1", null, "Container"), React.createElement("p", null, "Tab can contain other components.Here is a Search component: "), React.createElement(Search_1.Search, {action: action}))))), React.createElement("div", {className: "component"}, React.createElement("h3", null, "UserImage"), React.createElement(UserImage_1.UserImage, {name: "Little Ming"}), React.createElement(UserImage_1.UserImage, {name: "小明"}), React.createElement(UserImage_1.UserImage, {name: "not so good it here", src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AEWDjA79lFiDAAAA+RJREFUWMPNmL1v3GQcx/345fGdE18e3xknlwtCaiSE2BiqUIjUoVsVWMiKEIj+AV0oC6pYCkJIDCBWKnUNEko6sDAgpZQKpE5ELESqavkSn4L9yI5ztp/zw5Kgq/P4Hp/jpH1Gv378e/P3+wBKqfAiL1kQBAEAUPoGRVFWIITriqJckWX5lfFzhJAnaZo+TJJkI03TR2eFo5QKgFJaClDTtE8QQp+rqtoo8/A4jocY4++iKLpDKfXODbDRaHzYbre/LwuWX4SQbDAYfDwcDn+oHRAhtG0Yxtt11BLGeMfzvNVpolkICAAwLMva1TQN1VnwURT5ruteKgtZCDg/P+/x4IIgsOM4/iXXQJfn5uZerwuSCdhqtTY7nc47RfXk+/69MAxvFr0AAGA0m80bnU7nC1mWRdY1nuc98H1/dWpACOFar9fbqqOGAACGYRjbRRHt9/sf8RrnFODi4uIRq1vLfvE0jRbH8bDf7y9O+mBKqSCOzzkWHMZ4pyqcIAiC7/urnuc9yB9XVbXRbDZvcDNxEkFWYxBCMtu2zaqDdjzd3W7XyQcgjuOh4zhNbgQlSVpmda3v+/fOCnf8Is/3/dusKCqKsjLpXvH4wvdYHRuG4c0aZ+BXhJAsfxxCuM4FlGX5VI0dHh7+XUf0crPzISOK17mAEMI38ifSNP2jbumUJMnmKQBRbHEBC9TIRt2AhJAdRorNSoAXtXgqqRBQFMWXLgIwiiK/EqCiKFfrhmE9czQahVzAvCo5Dv21c0jndUZdPuECpmn6a/6ErutLkiQt1wUHADBmZmZeK9PZrAj+VOBDPqsLcHZ29huW/Irj+EcuIKXUwxifGgGmaX7A+xWVWZIkLSOE3meJ3tFo9E+pJgnD8Bbrgna7/TMAwDhLak3T/JMVvSiKvuXdL47Vwv0gCGxGmpFlWbtVIE9Ea5F9YNX+xDGDMV4vqEXU7XYdCOHaNAbfsqzdSR5lYWHht1JqZuyLHrmu+3XRxO/1elsIoe1JD1UUZQUhtL20tPQ7z3jJsizyIJmurowfJoRkR0dHTpIkjyml/6qqeg1CaFYx+ISQbG9v7638dslE416naa8K+YwnYXmJ/f39WyyReS67WAXpFnkq2HGcV1ndPYVItW3bfpNlnMpAlt7dghCuaZr2qa7rV4oMed6qRlH0ZZIk98dm6l+8nYdxs5ZlmVcaMA+rKMpVliSL43hjHKrqns/BwcEWxvjdSoBnFQ1lIIMgsAeDwcsXrqgppZ7rupd4QvW5Sv4ykEmSPJ6qSS4y3SdbdFmWecLz3uUHABi6rt81TfOpaZpPW63W5okw+f9P8iKv/wCR5lHiuuVTsgAAAABJRU5ErkJggg=="})), React.createElement("div", {className: "component"}, React.createElement("h3", null, "Sidemenu"), React.createElement("div", {style: { position: 'relative', height: '200px' }}, React.createElement(Sidemenu_1.Sidemenu, null))), React.createElement("div", {className: "component"}, React.createElement("h3", null, "Fapiao"), React.createElement(Fapiao_1.Fapiao, null))), document.getElementById("showcases"));


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
	var Button = (function (_super) {
	    __extends(Button, _super);
	    function Button(props) {
	        _super.call(this, props);
	        this.state = {};
	    }
	    Button.prototype.render = function () {
	        // disabled
	        var disabled = this.props.disabled === 'true' || this.props.disabled === 'disabled' ? 'true' : 'false';
	        var className = 'UIButton';
	        // class
	        var type = this.props.type;
	        if (type === 'second' || type === 'tertiary' || type === 'icon') {
	            className += ' ' + type;
	        }
	        else {
	            className += ' ' + 'primary';
	        }
	        // background
	        var background;
	        if (this.props.type === 'icon' && this.props.src) {
	            background = 'url(' + this.props.src + ')';
	        }
	        return (React.createElement("div", {className: className, disabled: disabled, style: { background: background }, onClick: this.props.action}, this.props.type !== 'icon' ? this.props.text : null));
	    };
	    return Button;
	}(React.Component));
	exports.Button = Button;


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
/* 6 */
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
	        return (React.createElement("div", {className: "UITabs"}, React.createElement("menu", null, React.createElement("div", {className: "tabs"}, this.props.titles.map(function (title, index) {
	            var className = "tab";
	            if (_this.state.activeIndex === index) {
	                className += ' ' + 'active';
	            }
	            return React.createElement("div", {key: title + '.' + index.toString(), className: className, onClick: function () { _this.switchTab(index); }}, title);
	        }))), activeView));
	    };
	    return Tabs;
	}(React.Component));
	exports.Tabs = Tabs;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var UserImage = (function (_super) {
	    __extends(UserImage, _super);
	    function UserImage(props) {
	        _super.call(this, props);
	    }
	    UserImage.prototype.render = function () {
	        var className = 'UIUserImage';
	        var imageHTML;
	        if (this.props.src) {
	            imageHTML = React.createElement("img", {className: className, src: this.props.src, title: this.props.name});
	        }
	        else {
	            // generate abbr
	            var names = [''];
	            if (this.props.name) {
	                names = this.props.name.split(' ');
	            }
	            var abbr = void 0;
	            if (names.length > 1) {
	                // abbr = names.map(name => name.charAt(0)).join('');
	                abbr = names[0].charAt(0) + names[names.length - 1].charAt(0);
	            }
	            else {
	                abbr = this.props.name.charAt(0);
	            }
	            // english name small class
	            if (abbr.split('').length > 1) {
	                className += ' ' + 'small';
	            }
	            // generate color
	            var hue = void 0;
	            if (this.props.hue && this.props.hue <= 360 && this.props.hue >= 0) {
	                hue = this.props.hue;
	            }
	            else {
	                hue = Math.floor(Math.random() * 60) * 6;
	            }
	            imageHTML = React.createElement("div", {className: className, title: this.props.name, style: {
	                backgroundColor: 'hsl(' + hue + ',100%,93%)',
	                borderColor: 'hsl(' + hue + ',75%,75%)',
	                color: 'hsl(' + hue + ',40%,30%)',
	            }}, abbr);
	        }
	        return (React.createElement("span", null, imageHTML));
	    };
	    return UserImage;
	}(React.Component));
	exports.UserImage = UserImage;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Sidemenu = (function (_super) {
	    __extends(Sidemenu, _super);
	    function Sidemenu(props) {
	        _super.call(this, props);
	        this.state = {};
	    }
	    Sidemenu.prototype.render = function () {
	        return (React.createElement("div", {className: "UISidemenu"}, this.props.children));
	    };
	    return Sidemenu;
	}(React.Component));
	exports.Sidemenu = Sidemenu;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Fapiao = (function (_super) {
	    __extends(Fapiao, _super);
	    function Fapiao(props) {
	        _super.call(this, props);
	        this.state = {};
	    }
	    Fapiao.prototype.render = function () {
	        return (React.createElement("div", {className: "UIFapiao"}));
	    };
	    return Fapiao;
	}(React.Component));
	exports.Fapiao = Fapiao;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map