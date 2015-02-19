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

      var newGame = new app.Game({})

      //create new game model
      //send token-auth to server
      
      //on response - navigate to Game View

    }

 });


}());