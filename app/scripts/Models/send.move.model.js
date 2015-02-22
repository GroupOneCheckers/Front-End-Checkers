(function () {

  app.Move = Backbone.Model.extend({

    idAttribute: '_id',

    defaults: {

    	authentication_token: "",
    pick: {
    token_start: [],
    token_end: []
}


    },
    //needs the id added to the end before sending
    url: 'https://ninja-checkers.herokuapp.com/games/' + app.newGameId

  });


}());