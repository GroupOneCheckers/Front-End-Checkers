(function () {

 'use strict';

 app.LoginView = Backbone.View.extend({

    // el: '.hero-unit',

    className: '.main',


    events : {
      //Add submit event
      //Add register event
      'click .register': 'showRegistration'
    },


    template: $('#loginTemp').html(),


    initialize: function (args) {
      // this.collection = args.collection;
      this.render();

      // this.collection.on('change', this.render, this);

      $('.main').html(this.el);      
    },


    render: function () {
      this.$el.html(this.template);
    },


    showRegistration: function (e) {
      e.preventDefault();
      console.log('are we here?');

      app.router.navigate('register', { trigger: true});
    }

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