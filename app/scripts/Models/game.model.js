(function () {

  app.Game = Backbone.Model.extend({

    idAttribute: '_id',

    defaults: {

    	user: {
    		authentication_token: '',
    	}

    },

    game: {

    },

    url: 'https://ninja-checkers.herokuapp.com/games'


  });


}());