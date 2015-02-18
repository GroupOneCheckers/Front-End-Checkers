(function () {

 'use strict';

 app.LeaderboardView = Backbone.View.extend({

    // el: '.hero-unit',

    className: '.main',


    events : {
      //Add submit event
      //Add register event
    },


    template: $('#leaderboardTemp').html(),


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