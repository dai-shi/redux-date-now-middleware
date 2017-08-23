'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DATE_NOW = exports.DATE_NOW = Symbol('DATE_NOW');

var dateNow = function dateNow() {
  return Date.now();
};

exports.default = function () {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DATE_NOW;
  var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : dateNow;
  return function () {
    return function (next) {
      return function (action) {
        next(_extends(_defineProperty({}, name, func()), action));
      };
    };
  };
};