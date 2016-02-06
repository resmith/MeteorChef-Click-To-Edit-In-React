Meteor.publish( 'publicspaces', function() {
  return Spaces.find(
  	{public: true}
  	);
});
