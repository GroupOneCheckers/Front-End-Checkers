(function () {

  app.Game = Backbone.Model.extend({

    idAttribute: '_id',

    defaults: {

     	authentication_token: '',

     	game: {
    	id: 0,
    	board: [],
	    }
  
    },

    pick: {
    	token_start: '',
    	token_end: ''
    },

    url: 'https://ninja-checkers.herokuapp.com/games',

    

  });


}());