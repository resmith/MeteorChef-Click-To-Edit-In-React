Index = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    var data = {};

    var handle = Meteor.subscribe( 'vinyl' );

    if (handle.ready()) {
      data.vinyl = Vinyl.find().fetch();
    }

    return data;
  },
  render() {
    if (!this.data.vinyl) {
      return <Loading />
    }

    return(
    <div>
    <h1> Going to display {this.data.vinyl.title} </h1>
     <VinylList items={ this.data.vinyl } />;
    </div>
    );
  }
});