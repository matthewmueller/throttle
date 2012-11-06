var debounce = require('debounce');

// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time.
module.exports = function(func, wait) {
  var context, args, timeout, throttling, more, result;
  var whenDone = debounce(function(){ more = throttling = false; }, wait);
  return function() {
    context = this; args = arguments;
    var later = function() {
      timeout = null;
      if (more) {
        result = func.apply(context, args);
      }
      whenDone();
    };
    if (!timeout) timeout = setTimeout(later, wait);
    if (throttling) {
      more = true;
    } else {
      throttling = true;
      result = func.apply(context, args);
    }
    whenDone();
    return result;
  };
};

