/**
 * map-normalize.js
 * a function.
 * @author Remy Hunter
 * 
*/

function map(x, in_min, in_max, out_min, out_max) {
    return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

module.exports = map
