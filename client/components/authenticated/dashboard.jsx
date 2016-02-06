Dashboard = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    let subscription = Meteor.subscribe( 'publicspaces' );

    return {
      isLoading: !subscription.ready(),
      people: People.find().fetch()
    };
  },
  render() {
    if ( this.data.isLoading ) {
      return <Loading />;
    } else {
      return (
        <PeopleTable people={this.data.people} />
      );
    }
  }
});
