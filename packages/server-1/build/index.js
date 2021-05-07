"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(router) {
  router.get('/test', function (req, res) {
    return res.send({
      success: 'server'
    });
  });
  return router;
};

exports["default"] = _default;