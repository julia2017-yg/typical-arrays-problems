
exports.min = function min (array) {
  var min = 0;
  if (Array.isArray(array) && array.length) {
    min = array[0];
    array.map(function(value) { 
      if (value < min) {
        min = value;
      }
    });
  }
  return min;        
},  

exports.max = function max (array) {
  var max = 0;
  if (Array.isArray(array) && array.length) {
    max = array[0];
    array.map(function(value) {
      if (value > max) {
        max = value;
      }
    })
  }
  return max;

},


exports.avg = function avg (array) {
  var avg = 0;
   if (Array.isArray(array) && array.length) {  
    array.map(function(value) {    
      avg += value;
    });
    avg = avg / array.length;
  }
  return avg;
}
