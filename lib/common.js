'use strict'

function Utils () {}

/**
 * 
 */

Utils.prototype.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

/**
 * Create an array if there is an existing value,
 * Merge arrays, if obj is an array
 */

Utils.prototype.assign = function(array, obj) {
    if (array) {
        if (!Array.isArray(array))
            array = [array];

        if (Array.isArray(obj))
            return array.concat(obj);
            
        array.push(obj);
    }
    else
        array = (obj);
    return array;
}

module.exports = new Utils();