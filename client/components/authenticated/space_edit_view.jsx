SpaceEditViewApp = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    const handle = Meteor.subscribe('spaces');
    const data = {};
    if(handle.ready()) {
      data.spaces = Spaces.find({}, {sort: {name: 1}}).fetch();
    }
    data.currentUser = Meteor.user();
    return data;
  },
  getInitialState() {
    return {
      newSpaceName: null
    }
  },

  render() {
    let is_logged = !!this.data.currentUser;
    let placeholder = is_logged ? "Edit Space" : "View Space";

    return <form className="input-group" onSubmit={this.onSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder={placeholder}
        disabled={!is_logged} 
        ref="input"
        value={is_logged ? this.state.newSpaceName : ''}
        onChange={this.onInputChange} />

      <span className="input-group-btn">
        <button className={"btn btn-primary " + (is_logged ? '' : 'disabled')} type="submit">
          <i className={is_logged ? "fa fa-plus" : "fa fa-times"} />Create
        </button>
      </span>
    </form>
  }
});