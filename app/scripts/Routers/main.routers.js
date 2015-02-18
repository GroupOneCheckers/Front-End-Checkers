(function () {

 'use strict';

 	app.MainRouter = Backbone.Router.extend({

   	initialize: function() {
	    Backbone.history.start();
	  },

   	routes: {
     	'' : 'login',
    	'register' : 'register'
   	},

   	login: function () {
    	app.login = new app.LoginView();
   	},

   	register: function () {
   		console.log(app);
    	app.register = new app.RegisterView();
   	}

 	});

}());