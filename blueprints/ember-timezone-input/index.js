var RSVP = require('rsvp');

module.exports = {
  description: 'Moves the image files into place',

  normalizeEntityName: function() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },
  
  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  afterInstall: function(options) {
    return RSVP.all([
      this.addAddonToProject('ember-moment', '^3.1.0'),
      this.addAddonToProject('ember-truth-helpers', "^1.0.0"),
      this.addAddonToProject('ember-cpm', "^1.3.4")
    ]);
  }
};
