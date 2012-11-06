
# throttle

  Underscore's [throttle](http://underscorejs.org/#throttle) as a component.

  Useful for rate-limiting events that occur faster than you can keep up with.

## Installation

    $ component install matthewmueller/throttle

## Example

```js
var throttle = require('throttle');

window.onscroll = throttle(scroll, 100);

function scroll() {
  console.log('y', window.scrollY);
}
```

## API

  ### throttle(fn, wait)

  Creates and returns a new, throttled version of the passed function, that, when invoked repeatedly, will only actually call the original function at most once per every wait milliseconds.

## License

  MIT
