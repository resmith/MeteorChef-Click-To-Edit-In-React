Space = React.createClass({
  render() {
    return (
      <tr>
        <td className="text-center">
          <img style={{width: '50px'}} className="img-circle" src={this.props.space.name} />
        </td>
        <td>{this.props.space.name}</td>
        <td>{this.props.space.owner}</td>
        <td>{this.props.space.description}</td>
      </tr>
    );
  }
});
