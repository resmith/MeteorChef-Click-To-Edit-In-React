VinylList = React.createClass({
  getInitialState() {
    return {
      editing: null
    };
  },
  toggleEditing( itemId ) {
    this.setState( { editing: itemId } );
  },
  handleEditField( event ) {
    if ( event.keyCode === 13 ) {
      let target = event.target,
          update = {};

      update._id = this.state.editing;
      update[ target.name ] = target.value;

      this.handleVinylUpdate( update );
    }
  },
  handleEditItem() {
    let itemId = this.state.editing;

    this.handleVinylUpdate({
      _id: itemId,
      title: this.refs[ `title_${ itemId }` ].value,
      artist: this.refs[ `artist_${ itemId }` ].value,
      releaseYear: this.refs[ `releaseYear_${ itemId }` ].value
    });
  },
  handleVinylUpdate( update ) {
    Meteor.call( 'updateVinyl', update, ( error, response ) => {
      if ( error ) {
        Bert.alert( error.reason, 'danger' );
      } else {
        this.setState( { editing: null } );
        Bert.alert( 'Record updated!', 'success' );
      }
    });
  },  
renderItemOrEditField( item ) {
    if ( this.state.editing === item._id ) {
      return <table key={ `editing-${ item._id }` } className="list-group-item">
        <tbody>
          <tr>
            <td className="col-xs-12 col-sm-3">
              <input
                onKeyDown={ this.handleEditField }
                type="text"
                className="form-control"
                ref={ `title_${ item._id }` }
                name="title"
                defaultValue={ item.title }
              />
            </td>
            <td className="col-xs-12 col-sm-3">
              <input
                onKeyDown={ this.handleEditField }
                type="text"
                className="form-control"
                ref={ `artist_${ item._id }` }
                name="artist"
                defaultValue={ item.artist }
              />
            </td>
            <td className="col-xs-12 col-sm-3">
              <input
                onKeyDown={ this.handleEditField }
                type="text"
                className="form-control"
                ref={ `releaseYear_${ item._id }` }
                name="releaseYear"
                defaultValue={ item.releaseYear }
              />
            </td>
            <td className="col-xs-12 col-sm-3">
              <button className="btn btn-primary" onClick={ this.handleEditItem }>"Update Item" </button>
            </td>
          </tr>
        </tbody>
        </table>;
    } else {
      return <li
        onClick={ this.toggleEditing.bind( null, item._id ) }
        key={ item._id }
        className="list-group-item">
        { `${ item.title } by ${ item.artist } (${ item.releaseYear })` }
      </li>;
    }
  },
  render() {
    return <ul className="list-group">
      {this.props.items.map( ( item ) => {
        return this.renderItemOrEditField( item );
      })}
    </ul>;
  }
});