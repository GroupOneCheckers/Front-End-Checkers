(function () {


	app.Checker = Backbone.Model.extend({

    defaults: {
    	player: '',
    	positionx: '',
    	positiony: ''
    },

    pick: {
    	token_start: '',
    	token_end: ''
    }

  });


}());