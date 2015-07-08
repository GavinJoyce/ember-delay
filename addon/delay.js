import Em from 'ember';

var delay = function(milliseconds) {
  if(milliseconds === undefined) {
    milliseconds = 2000;
  }

  return new Em.RSVP.Promise(function(resolve) {
    Em.run.later(this, resolve, milliseconds);
  });
};

export default delay;
