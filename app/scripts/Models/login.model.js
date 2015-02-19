(function () {

  app.Login = Backbone.Model.extend({

    idAttribute: '_id',

    defaults: {

    	user: {      
	      email: '',
	      password: '',
	    },

    },

    url: 'https://ninja-checkers.herokuapp.com/users/sign_in'

  });


}());
