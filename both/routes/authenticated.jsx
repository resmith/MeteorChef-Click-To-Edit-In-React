const authenticatedRedirect = () => {
  if ( !Meteor.loggingIn() && !Meteor.userId() ) {
    FlowRouter.go( 'publicindex' );
  }
};

const authenticatedRoutes = FlowRouter.group({
  name: 'authenticated',
  triggersEnter: [ authenticatedRedirect ]
});

authenticatedRoutes.route( '/', {
  name: 'index',
  action() {
    ReactLayout.render( Default, { yield: <Index /> } );
  }
});

authenticatedRoutes.route( '/dashboard', {
  name: 'dashboard',
  action() {
    ReactLayout.render( Default, { yield: <Dashboard /> } );
  }
});

authenticatedRoutes.route( '/publicindex', {
  name: 'publicindex',
  action() {
    ReactLayout.render( Default, { yield: <PublicDashboard /> } );
  }
});

authenticatedRoutes.route('/space/new', {
  name: 'space_new',  
  action: function(params, queryParams) {
    ReactLayout.render(MainLayout, {
      content() {
        return <SpaceNewApp />;
      }
    });
  }
});

authenticatedRoutes.route('/space/:space_id', {
  name: 'space_edit_view',
  action: function(params, queryParams) {
    ReactLayout.render(MainLayout, {
      content() {
        return <SpaceEditViewApp space_id={params.space_id}/>;
      }
    });
  }
});