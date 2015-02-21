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

      //Get Token Value
      var getToken = Cookies.get('authentication_token');
      
      //Create new game Instance
      app.newGame = new app.Game({ authentication_token: getToken });

      //Send Token to Server      
      app.newGame.save().done( function(e) {
        console.log('success');        
        //Getting to the board array
        app.newGameArray = e.game.board;
        app.newGameId = e.game.id;
        console.log(app.newGameArray);
        app.router.navigate('newGame', {trigger: true});


      });

      //create new game model
      
      //on response - navigate to Game View

    }

 });


}());