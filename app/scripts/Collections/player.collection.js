(function () {

  app.PlayerCol = Backbone.Collection.extend({

    model: app.Player,

    url: 'http://tiy-atl-fe-server.herokuapp.com/collections/group1Users'

  });


}());