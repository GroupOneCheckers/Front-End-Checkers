(function () {

  app.Game = Backbone.Model.extend({

    idAttribute: '_id',

    defaults: {

     	authentication_token: '',
  
    },

    game: {
    	board: '',
    	id: '',
    },

    pick: {
    	token_start: '',
    	token_end: ''
    },

    url: 'https://ninja-checkers.herokuapp.com/games'

    

  });


}());