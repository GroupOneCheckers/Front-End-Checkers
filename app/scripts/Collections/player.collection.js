(function () {

  app.PlayerCol = Backbone.Collection.extend({

    model: app.Player,

    url: 'https://ninja-checkers.herokuapp.com/users'

  });


}());