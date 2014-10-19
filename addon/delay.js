import Em from 'ember';

var delay = function(milliseconds) {
  milliseconds = milliseconds || 2000;
  return new Em.RSVP.Promise(function(resolve) {
    Em.run.later(this, function() {
      resolve();
    }, milliseconds);
  });
};

export default delay;
