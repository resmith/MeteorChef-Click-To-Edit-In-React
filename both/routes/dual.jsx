const dualRoutes = FlowRouter.group({
  name: 'dual',
});


dualRoutes.route('/space/:pathUserName/:space_id', {
  name: 'space_edit_view',
  action: function(params, queryParams) {
    ReactLayout.render(MainLayout, {
      content() {
        return <SpaceEditViewApp space_id={params.space_id} pathUserName={params.pathUserName}/>;
      }
    });
  }
});