<AccountsUIWrapper />

AccountsUINavigation = React.createClass({

  render() {
    return (
      <div id="navbar-collapse" className="collapse navbar-collapse">
        <ul className="nav navbar-nav">
          <li className={FlowHelpers.currentRoute( 'index' )}><a href="/">Index</a></li>
          <li className={FlowHelpers.currentRoute( 'dashboard' )}><a href="/dashboard">Dashboard</a></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
        	 <AccountsUIWrapper />
        </ul>
      </div>
    );
  }
});
