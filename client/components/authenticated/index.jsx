Index = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    let subscription = Meteor.subscribe( 'userspaces' );

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
      <div className="jumbotron text-center" style={{padding: '20px'}}>
        <h2>Spaces</h2>
        <p>These are your spaces.</p>
          <SpacesTable spaces={this.data.spaces}/>
        <p style={{fontSize: '16px', color: '#aaa'}}>Currently at v3.3.0</p>
        <p><a className="btn btn-success" href="{pathFor 'publicindex'}" role="button">View Public Spaces</a></p>
      </div>
    );
  }
}
});

