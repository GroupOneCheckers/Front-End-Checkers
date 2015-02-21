(function () {

  app.Game = Backbone.Model.extend({

    idAttribute: '_id',

    defaults: {

     	authentication_token: '',

     	game: {
    	id: 0,
    	board: [],
  
    },


    },

    url: 'https://ninja-checkers.herokuapp.com/games'

    

  });


}());