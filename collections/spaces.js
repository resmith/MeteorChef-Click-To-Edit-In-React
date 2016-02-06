Spaces = new Meteor.Collection( 'spaces' );

Spaces.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Spaces.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

let SpacesSchema = new SimpleSchema({
  "name": {
    type: String,
    label: "The name of the space."
  },
  "ownerId": {
    type: String,
    label: "Whose the owner."
  },
  "description": {
    type: String,
    label: "A little bit about the space."
  },
  "public": {
    type: Boolean,
    label: "Can everyone see the space"
  },
  "access": {
    type: [Object],
    label: "what roles have acess"
  },
  "access.$.uid": {
    type: String,
  },
  "access.$.role": {
    type: String,
  }
});

Spaces.attachSchema( SpacesSchema );


if (Meteor.isServer) {
  // #Spaces and Permissions -> -> Creating the admin space
  if(Spaces.find().count() === 0) {

    console.log('seeding Spaces');

    var spaceId = Spaces.insert({
      name: 'Private Space',
      ownerId: 'resmith',
      description: 'Private Space for friends to look at',
      public: false,
      access: [
      {uid: 'cdoe',role: 'coad'},
      {uid: 'vdoe',role: 'view'},
      {uid: 'sdoe',role: 'subm'},
      {uid: 'edoe',role: 'edit'}
      ]
    });

    var spaceId = Spaces.insert({
      name: 'Public Space',
      ownerId: 'resmith',
      description: 'Public Space for all to look at',
      public: true,
      access: [
      {uid: 'cdoe',role: 'coad'},
      {uid: 'vdoe',role: 'view'},
      {uid: 'sdoe',role: 'subm'},
      {uid: 'edoe',role: 'edit'}
      ]
    });

  }
};