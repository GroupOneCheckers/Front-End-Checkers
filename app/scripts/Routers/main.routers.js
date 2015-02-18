(function () {

 'use strict';

 	app.MainRouter = Backbone.Router.extend({

   	initialize: function() {
	    Backbone.history.start();
	  },

   	routes: {
     	'' : 'login',
    	'register' : 'register',
      'currentGames': 'currentGames',
      'leaderboard': 'leaderboard'
   	},

   	login: function () {
    	app.login = new app.LoginView();
   	},

   	register: function () {
   		console.log(app);
    	app.register = new app.RegisterView();
   	},

    currentGames: function () {
      app.currentGames = new app.CurrentGamesView();
    },

    leaderboard: function () {
      app.leaderboard = new app.LeaderboardView();
    }

 	});

}());