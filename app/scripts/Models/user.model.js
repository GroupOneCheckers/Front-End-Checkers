(function () {

  app.User = Backbone.Model.extend({

    idAttribute: '_id',

    defaults: {

    	user: {      
	      username: '',
	      email: '',
	      password: '',
	    },

	    authentication_token: ''

    },

    url: 'https://ninja-checkers.herokuapp.com/users'

  });


}());