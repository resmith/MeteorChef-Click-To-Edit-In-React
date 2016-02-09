Meteor.methods({
  updateVinyl( argument ) {
    check( argument, Object );

    console.log('updateVinyl argument=',argument);

    try {
      var documentId = Vinyl.update( argument._id, {
        $set: { 
          'title': argument.title ,
          'artist': argument.artist ,
          'releaseYear': argument.releaseYear
        }
      });
      return documentId;
    } catch( exception ) {
      return exception;
    }
  }
});
