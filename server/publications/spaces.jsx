  Meteor.publish("spaces", function () {
    return Spaces.find({
      $or: [
        { public: {$eq: true} },
       { owner: Meteor.user().username}
      ]
    });
  });
