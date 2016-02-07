Space = React.createClass({

  render() {
      return (
        <tr>
          <td>
            <a href={FlowHelpers.pathFor( 'space_edit_view', { pathUserName: this.props.space.name,space_id: this.props.space._id } )}>
                {this.props.space.name}
            </a>
          </td>
          <td>{this.props.space.ownerName}</td>
          <td>{this.props.space.description}</td>
        </tr>
      );
    },


});
