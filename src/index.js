
exports.min = function min (array) {
  if (typeof array !== 'undefined' && array.length >= 1) return Math.min(...array);
  return 0;
}

exports.max = function max (array) {
  if (typeof array !== 'undefined' && array.length >= 1) return Math.max(...array);
  return 0;
}

exports.avg = function avg (array) {
  if (typeof array !== 'undefined' && array.length >= 1) return array.reduce((prev,current) => prev + current, 0) / array.length;
  return 0;
}
