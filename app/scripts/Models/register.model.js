(function () {

  app.Register = Backbone.Model.extend({

    idAttribute: '_id',

    defaults: {

    	user: {      
	      username: '',
	      email: '',
	      password: '',
	    },

    },

    url: 'https://ninja-checkers.herokuapp.com/users'

  });


}());