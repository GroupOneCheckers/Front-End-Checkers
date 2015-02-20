(function () {

  app.Game = Backbone.Model.extend({

    idAttribute: '_id',

    defaults: {

     	authentication_token: '',
  
    },

    game: {

    },

    url: 'https://ninja-checkers.herokuapp.com/games'

    

  });


}());