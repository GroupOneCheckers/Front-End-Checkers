(function (){

	'use strict';

	app.Game = Backbone.View.extend({

		className: '.main',

		events: {

			//do events later

		},

    
    template: $('#gameBoard').html(),


    initialize: function (args) {
      // this.collection = args.collection;
      this.render();

      // this.collection.on('change', this.render, this);

      $('.main').html(this.el);      
    },


    render: function () {
      this.$el.html(this.template);
    },
    

	});

}());