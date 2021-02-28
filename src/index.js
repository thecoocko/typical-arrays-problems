exports.min = function min(array) {
  return Array.isArray(array) && array.length !== 0 ? Math.min(...array) : 0;
}

exports.max = function max(array) {
  return Array.isArray(array) && array.length !== 0 ? Math.max(...array) : 0;
}

exports.avg = function avg(array) {
  if (Array.isArray(array) && array.length !== 0) {
    let s = 0;
    for (let i = 0; i < array.length; i++) {
      s += array[i];
    }
    return s / array.length;
  } else return 0;
}

