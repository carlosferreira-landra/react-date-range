"use strict";

var _react = _interopRequireDefault(require("react"));

var _DateInput = _interopRequireDefault(require("../DateInput"));

var _TimePicker = _interopRequireDefault(require("../TimePicker"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('DateInput', function () {
  test('Should resolve', function () {
    expect(_DateInput.default).toEqual(expect.anything());
  });
  test('Should warn when TimePicker is used without time formatting', function () {
    var warn = console.warn;
    console.warn = jest.fn();
    var onFocus = jest.fn();
    var onChange = jest.fn();
    (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_DateInput.default, {
      showTimePicker: true,
      onFocus: onFocus,
      onChange: onChange
    }));
    expect(console.warn).toHaveBeenCalled();
    console.warn = warn;
  });
  test('Should display TimePicker on focus', function () {
    var onFocus = jest.fn();
    var onChange = jest.fn();
    var dateInput = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_DateInput.default, {
      showTimePicker: true,
      onFocus: onFocus,
      onChange: onChange,
      dateDisplayFormat: "MMM d, yyyy h:mma"
    }));
    dateInput.find('input').simulate('focus');
    expect(dateInput.find(_TimePicker.default)).toHaveLength(1);
  });
  test('Should not display TimePicker on focus by default', function () {
    var onFocus = jest.fn();
    var onChange = jest.fn();
    var dateInput = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_DateInput.default, {
      onFocus: onFocus,
      onChange: onChange
    }));
    dateInput.find('input').simulate('focus');
    expect(dateInput.find(_TimePicker.default)).toHaveLength(0);
  });
});