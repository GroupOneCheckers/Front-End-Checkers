(function () {

 'use strict';

 app.CurrentGamesView = Backbone.View.extend({

    // el: '.hero-unit',

    className: '.main',


    events : {
      //New Game
      'click .new-game-button': 'createNewGame',

      //Add register event
    },


    template: $('#currentGamesTemp').html(),


    initialize: function (args) {
      // this.collection = args.collection;
      this.render();

      // this.collection.on('change', this.render, this);

      $('.main').html(this.el);      
    },


    render: function () {
      this.$el.html(this.template);
    },


    createNewGame: function(e) {
      e.preventDefault();

      //Get Token
      var getToken = Cookies.get('authentication_token');
      
      //Send Token to Server
      var newGame = new app.Game({user:{ authentication_token: getToken }});
        console.log(newGame);
        newGame.save();
        // .done( function(instance) {
          
        // });

      //create new game model
      
      //on response - navigate to Game View

    }

 });


}());