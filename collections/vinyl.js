Vinyl = new Meteor.Collection( 'vinyl' );

Vinyl.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Vinyl.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

/*let VinylSchema = new SimpleSchema({
  "owner": {
    type: String,
    label: "The ID of the owner of this document."
  }
});

Collection.attachSchema( CollectionSchema );
*/

if (Meteor.isServer) {
  // #Vinyls and Permissions -> -> Creating the admin vinyl
  if(Vinyl.find().count() === 0) {

    console.log('seeding Vinyls');

    var vinylId = Vinyl.insert({
      title: "Title of the record.",
      artist: "Artist that produced the record.",
      releaseYear: "Year the record was released."
    });

    var vinylId = Vinyl.insert({
      title: "A Rush of Blood to the Head",
      artist: "ColdPlay.",
      releaseYear: "2001"
    });

    var vinylId = Vinyl.insert({
      title: "19",
      artist: "Adele",
      releaseYear: "2008"
    });    

  }

  console.log("VinylsCollection=",Vinyl.find().count());
};