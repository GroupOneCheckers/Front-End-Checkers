(function () {

 'use strict';

 app.RegisterView = Backbone.View.extend({

    // el: '.hero-unit',

    className: '.main',


    events : {
      //Add submit event
      //Add register event
    },


    template: $('#registerTemp').html(),


    initialize: function (args) {
      // this.collection = args.collection;
      this.render();

      // this.collection.on('change', this.render, this);

      $('.main').html(this.el);      
    },


    render: function () {
      this.$el.html(this.template);
    },


    // loginUser: function (e) {
    //   var self = this;
    //   var list = this.$el.find('ul');

    //   list.empty();
    //   this.collection.each(function (student) {
    //     list.prepend(self.template(student.attributes));
    //   });

    // },

    // registerUser: function (e) {
    //   var self = this;
    //   var list = this.$el.find('ul');

    //   list.empty();
    //   this.collection.each(function (student) {
    //     list.prepend(self.template(student.attributes));
    //   });

    // },

 });


}());