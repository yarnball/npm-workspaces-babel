"use strict";

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('has default message', function () {
  expect((0, _["default"])()).toEqual('Hello');
});