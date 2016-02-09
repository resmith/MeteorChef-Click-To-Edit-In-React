Meteor.publish( 'vinyl', function() {
  return Vinyl.find();
});
