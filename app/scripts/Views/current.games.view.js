(function () {

 'use strict';

 app.CurrentGamesView = Backbone.View.extend({

    // el: '.hero-unit',

    className: '.main',


    events : {
      //Add submit event
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

 });


}());