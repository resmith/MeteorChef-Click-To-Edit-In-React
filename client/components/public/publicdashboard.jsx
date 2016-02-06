PublicDashboard = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    let subscription = Meteor.subscribe( 'publicspaces' );

    return {
      isLoading: !subscription.ready(),
      spaces: Spaces.find().fetch()
    };
  },
  render() {
    if ( this.data.isLoading ) {
      return <Loading />;
    } else {
      return (
        <div>
          <h1>Welcome to GatheryMy...</h1>
          <h2>Gather, Connect, Share your memories, stories and more</h2>
          <PublicSpacesTable spaces={this.data.spaces}/>
        </div>
      );
    }
  }
});
