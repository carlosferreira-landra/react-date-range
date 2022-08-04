"use strict";

var _react = _interopRequireDefault(require("react"));

var _TimePicker = _interopRequireDefault(require("../TimePicker"));

var _enzyme = require("enzyme");

var _endOfDay = _interopRequireDefault(require("date-fns/endOfDay"));

var _startOfDay = _interopRequireDefault(require("date-fns/startOfDay"));

var _eachMinuteOfInterval = _interopRequireDefault(require("date-fns/eachMinuteOfInterval"));

var _parse = _interopRequireDefault(require("date-fns/parse"));

var _differenceInMinutes = _interopRequireDefault(require("date-fns/differenceInMinutes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('TimePicker', function () {
  test('Should resolve', function () {
    expect(_TimePicker.default).toEqual(expect.anything());
  });
  test('Should render buttons for every 15 minutes', function () {
    window.HTMLElement.prototype.scrollIntoView = jest.fn();
    var update = jest.fn();
    var timePicker = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_TimePicker.default, {
      update: update,
      value: new Date()
    }));
    expect(timePicker.find('button')).toHaveLength(96);
  });
  test('Should call update on button click', function () {
    var update = jest.fn();
    var timePicker = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_TimePicker.default, {
      update: update,
      value: new Date()
    }));
    timePicker.find('button').forEach(function (button) {
      return button.simulate('click');
    });
    expect(update).toHaveBeenCalledTimes(96);
  });
  test('Should find closest interval', function () {
    var update = jest.fn();
    var start = (0, _startOfDay.default)(new Date());
    var end = (0, _endOfDay.default)(start);
    (0, _eachMinuteOfInterval.default)({
      start: start,
      end: end
    }, {
      step: 4
    } // Full coverage would be every 1 minute, but 4 is much faster and covers most cases
    ).forEach(function (interval) {
      var timePicker = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_TimePicker.default, {
        update: update,
        value: interval
      }));
      var closest_interval = (0, _parse.default)(timePicker.instance().closest_interval.current.value, _TimePicker.default.defaultProps.dateDisplayFormat, new Date());
      expect(Math.abs((0, _differenceInMinutes.default)(closest_interval, interval))).toBeLessThan((0, _differenceInMinutes.default)(end, interval) > 15 ? 8 : 15);
    });
  });
});