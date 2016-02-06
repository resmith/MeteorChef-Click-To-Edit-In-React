PublicSpacesTable = React.createClass({
  render() {
    return (
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {this.props.spaces.map( ( space, index ) => {
              return <Space key={index} space={space} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
});
