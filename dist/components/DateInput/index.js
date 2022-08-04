"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _TimePicker = _interopRequireDefault(require("../TimePicker"));

var _utils = require("../../utils");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _isEqual = _interopRequireDefault(require("date-fns/isEqual"));

var _isValid = _interopRequireDefault(require("date-fns/isValid"));

var _parse = _interopRequireDefault(require("date-fns/parse"));

var _format = _interopRequireDefault(require("date-fns/format"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DateInput = /*#__PURE__*/function (_PureComponent) {
  _inherits(DateInput, _PureComponent);

  var _super = _createSuper(DateInput);

  function DateInput(props, context) {
    var _this;

    _classCallCheck(this, DateInput);

    _this = _super.call(this, props, context);

    _defineProperty(_assertThisInitialized(_this), "update", function (value) {
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var _this$state = _this.state,
          invalid = _this$state.invalid,
          changed = _this$state.changed;

      if (invalid || !changed && !force || !value) {
        return;
      }

      var _this$props = _this.props,
          onChange = _this$props.onChange,
          dateDisplayFormat = _this$props.dateDisplayFormat,
          dateOptions = _this$props.dateOptions;
      var parsed = (0, _parse.default)(value, dateDisplayFormat, new Date(), dateOptions);

      if ((0, _isValid.default)(parsed)) {
        _this.setState({
          changed: false
        }, function () {
          return onChange(parsed);
        });
      } else {
        _this.setState({
          invalid: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (e) {
      var value = _this.state.value;

      if (e.key === 'Enter') {
        _this.update(value);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
      _this.setState({
        value: e.target.value,
        changed: true,
        invalid: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onBlur", function () {
      var value = _this.state.value;

      _this.update(value);

      setTimeout(function () {
        return _this.setState({
          focus: false
        });
      }, 250); // Delay 250ms to allow the click to register on the TimePicker before hiding it
    });

    _defineProperty(_assertThisInitialized(_this), "onFocus", function (e) {
      var onFocus = _this.props.onFocus;

      _this.setState({
        focus: true
      }, function () {
        return onFocus(e);
      });
    });

    _this.state = {
      invalid: false,
      changed: false,
      focused: false,
      value: _this.formatDate(props)
    };
    return _this;
  }

  _createClass(DateInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.showTimePicker && !(0, _utils.dateFormatContainsTime)(this.props.dateDisplayFormat)) {
        console.warn('The `dateDisplayFormat` prop should contain time formatting when the `showTimePicker` prop is set to true. See the date-fns format table: https://date-fns.org/docs/format');
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var value = prevProps.value,
          showTimePicker = prevProps.showTimePicker,
          dateDisplayFormat = prevProps.dateDisplayFormat;

      if (!(0, _isEqual.default)(value, this.props.value)) {
        this.setState({
          value: this.formatDate(this.props)
        });
      }

      if (showTimePicker !== this.props.showTimePicker || dateDisplayFormat !== this.props.dateDisplayFormat) {
        if (this.props.showTimePicker && !(0, _utils.dateFormatContainsTime)(this.props.dateDisplayFormat)) {
          console.warn('The `dateDisplayFormat` prop should contain time formatting when the `showTimePicker` prop is set to true. See the date-fns format table: https://date-fns.org/docs/format');
        }
      }
    }
  }, {
    key: "formatDate",
    value: function formatDate(_ref) {
      var value = _ref.value,
          dateDisplayFormat = _ref.dateDisplayFormat,
          dateOptions = _ref.dateOptions;

      if (value && (0, _isValid.default)(value)) {
        return (0, _format.default)(value, dateDisplayFormat, dateOptions);
      }

      return '';
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          readOnly = _this$props2.readOnly,
          placeholder = _this$props2.placeholder,
          ariaLabel = _this$props2.ariaLabel,
          disabled = _this$props2.disabled;
      var _this$state2 = this.state,
          value = _this$state2.value,
          invalid = _this$state2.invalid;
      return /*#__PURE__*/_react.default.createElement("span", {
        className: (0, _classnames.default)('rdrDateInput', className)
      }, /*#__PURE__*/_react.default.createElement("input", {
        readOnly: readOnly,
        disabled: disabled,
        value: value,
        placeholder: placeholder,
        "aria-label": ariaLabel,
        onKeyDown: this.onKeyDown,
        onChange: this.onChange,
        onBlur: this.onBlur,
        onFocus: this.onFocus
      }), invalid && /*#__PURE__*/_react.default.createElement("span", {
        className: "rdrWarning"
      }, "\u26A0"), this.props.showTimePicker && this.state.focus && /*#__PURE__*/_react.default.createElement(_TimePicker.default, _extends({}, this.props, {
        update: this.update
      })));
    }
  }]);

  return DateInput;
}(_react.PureComponent);

DateInput.propTypes = {
  value: _propTypes.default.object,
  placeholder: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  readOnly: _propTypes.default.bool,
  dateOptions: _propTypes.default.object,
  dateDisplayFormat: _propTypes.default.string,
  ariaLabel: _propTypes.default.string,
  className: _propTypes.default.string,
  onFocus: _propTypes.default.func.isRequired,
  onChange: _propTypes.default.func.isRequired,
  showTimePicker: _propTypes.default.bool
};
DateInput.defaultProps = {
  readOnly: true,
  disabled: false,
  dateDisplayFormat: 'MMM d, yyyy'
};
var _default = DateInput;
exports.default = _default;