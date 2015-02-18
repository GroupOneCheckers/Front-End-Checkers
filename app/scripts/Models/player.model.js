(function () {

  app.Player = Backbone.Model.extend({

    idAttribute: '_id',

    defaults: {
      username: '',
      email: '',
      password: '',
      token_auth: '',
    },

  });


}());