import delay from 'ember-delay/delay';
import { test } from 'ember-qunit';

module('delay');

asyncTest('it returns a promise which resolves', function() {
  expect(1);

  delay(100).then(function() {
    ok(true);
    start();
  });
});
