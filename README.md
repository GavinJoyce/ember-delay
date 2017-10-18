# ember-delay

**NOTE:** This addon is deprecated. Please use [`import { timeout } from 'ember-concurrency'`](http://ember-concurrency.com/) instead. 

[![Build Status](https://travis-ci.org/GavinJoyce/ember-delay.svg)](https://travis-ci.org/GavinJoyce/ember-delay)

Create promises which resolve after a specified delay

Questions? Ping me [@gavinjoyce](https://twitter.com/gavinjoyce)

## Installation

This is an Ember CLI addon so all you need to do is

`npm install ember-delay --save`

## Usage Instructions

`delay(milliseconds)` returns a promise which resolves after the specified milliseconds (the default is `2000`).

```javascript
import delay from 'ember-delay/delay';

var MyRoute = Ember.Route.extend({
  model: function() {
    return delay(1000).then(function() {
      return {
        name: 'Alex'
      };
    });
  }
})
```

## Development Instructions

* `git clone` this repository
* `npm install`
* `bower install`

## TODOs:

* [ ] provide a sample usage
* [ ] some tests

### Running

* `ember server`
* Visit your app at http://localhost:4200.
