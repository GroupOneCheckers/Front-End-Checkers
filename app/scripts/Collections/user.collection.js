(function () {

  app.UserCol = Backbone.Collection.extend({

    model: app.User,

    url: 'https://ninja-checkers.herokuapp.com/users'

  });


}());