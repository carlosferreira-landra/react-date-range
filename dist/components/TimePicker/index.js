"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _parse = _interopRequireDefault(require("date-fns/parse"));

var _format = _interopRequireDefault(require("date-fns/format"));

var _endOfDay = _interopRequireDefault(require("date-fns/endOfDay"));

var _startOfDay = _interopRequireDefault(require("date-fns/startOfDay"));

var _differenceInMilliseconds = _interopRequireDefault(require("date-fns/differenceInMilliseconds"));

var _eachMinuteOfInterval = _interopRequireDefault(require("date-fns/eachMinuteOfInterval"));

var _isValid = _interopRequireDefault(require("date-fns/isValid"));

var _isEqual = _interopRequireDefault(require("date-fns/isEqual"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var TimePicker = /*#__PURE__*/function (_PureComponent) {
  _inherits(TimePicker, _PureComponent);

  var _super = _createSuper(TimePicker);

  function TimePicker(props, context) {
    var _this;

    _classCallCheck(this, TimePicker);

    _this = _super.call(this, props, context);

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (e) {
      e.preventDefault();
      var update = _this.props.update;
      update(e.target.value, true);
    });

    _this.state = {
      changes: false,
      value: _this.formatDate(props)
    };
    _this.closest_interval = /*#__PURE__*/_react.default.createRef();
    return _this;
  }

  _createClass(TimePicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.closest_interval.current) {
        this.closest_interval.current.scrollIntoView();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var value = prevProps.value;

      if (!(0, _isEqual.default)(value, this.props.value)) {
        this.setState({
          value: this.formatDate(this.props)
        });
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
      var _this2 = this;

      var value = this.state.value;
      var _this$props = this.props,
          dateDisplayFormat = _this$props.dateDisplayFormat,
          dateOptions = _this$props.dateOptions;
      var parsed = (0, _parse.default)(value, dateDisplayFormat, new Date(), dateOptions);
      var intervals = (0, _eachMinuteOfInterval.default)({
        start: (0, _startOfDay.default)(parsed),
        end: (0, _endOfDay.default)(parsed)
      }, {
        step: 15
      });
      var closest_interval = intervals[0];
      intervals.forEach(function (interval) {
        if (Math.abs((0, _differenceInMilliseconds.default)(parsed, interval)) < Math.abs((0, _differenceInMilliseconds.default)(parsed, closest_interval))) {
          closest_interval = interval;
        }
      });
      return /*#__PURE__*/_react.default.createElement("div", {
        className: (0, _classnames.default)('rdrTimePicker')
      }, intervals.map(function (minute, i) {
        return /*#__PURE__*/_react.default.createElement("button", {
          ref: minute === closest_interval ? _this2.closest_interval : null,
          className: minute === closest_interval ? 'active' : '',
          key: i,
          onClick: _this2.handleClick,
          type: "button",
          value: (0, _format.default)(minute, dateDisplayFormat)
        }, (0, _format.default)(minute, 'h:mma'));
      }));
    }
  }]);

  return TimePicker;
}(_react.PureComponent);

TimePicker.propTypes = {
  value: _propTypes.default.object,
  placeholder: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  readOnly: _propTypes.default.bool,
  dateOptions: _propTypes.default.object,
  dateDisplayFormat: _propTypes.default.string,
  className: _propTypes.default.string,
  update: _propTypes.default.func.isRequired
};
TimePicker.defaultProps = {
  readOnly: true,
  disabled: false,
  dateDisplayFormat: 'MMM d, yyyy h:mma'
};
var _default = TimePicker;
exports.default = _default;