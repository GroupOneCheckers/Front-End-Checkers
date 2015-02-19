(function () {

 'use strict';

 app.LoginView = Backbone.View.extend({

    // el: '.hero-unit',

    className: '.main',


    events : {
      //Login
      'click .login-user': 'loginUser',
      //Register Here
      'click .register-here': 'showRegistration'
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


    loginUser: function (e) {
      var self = this;

      e.preventDefault();
      console.log('sending user login data and api token to server');
      
      var elem = e.currentTarget;
      console.log(elem);

      var usernameVal = $(elem).find('username').val();
      console.log(usernameVal);
      app.router.navigate('currentGames', { trigger: true});


// createNewStudent: function (e) {
    //   var nameVal = $(elem).find('input').val();

    //   // Create a New Student Instance
    //   var s = new app.Student({ name: nameVal });

    //   // Add our student instance to our collection
    //   // Save our student instance to our server
    //   this.collection.add(s).save().done( function () {
    //     // Upon successful save to our server
    //     // Add our student to our view for our user to see
    //     var list = self.$el.find('ul');
    //     list.prepend(self.template(s.attributes));
    //   });

    //   // Reset our Form
    //   elem.reset();
    // },







    },


    showRegistration: function (e) {
      e.preventDefault();
      console.log('going to the registration screen');

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