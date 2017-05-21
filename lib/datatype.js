/**
 * @file datatype.js
 * 
 */

function DataType () {}

/**
 * Number Type #1
 */

DataType.prototype.isNumber = function (n) {
    return isNaN(parseFloat(n)) && isFinite(n);
};

/**
 * Number Type #2
 * 
 */

DataType.prototype.isNumber2 = function (v) {
    return (typeof v) === "number";
};

/**
 * Function Type
 * 
 */
DataType.prototype.isFunction = function (fn) {
    return (typeof fn === "function");
};

/**
 * Boolean Type
 * 
 */

DataType.prototype.isBoolean = function (v) {
    return (typeof v) === "boolean";
};

/**
 * String Type
 * 
 */

DataType.prototype.isString = function (v) {
    return (typeof v) === "string";
};

module.exports = new DataType();