import delay from 'ember-delay/delay';
import { test } from 'ember-qunit';

module('delay');

test('it returns a promise which resolves', function() {
  expect(1);

  return delay(100).then(function() {
    ok(true);
  });
});
