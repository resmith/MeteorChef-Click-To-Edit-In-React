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
        <PublicSpacesTable spaces={this.data.spaces}/>
      );
    }
  }
});
