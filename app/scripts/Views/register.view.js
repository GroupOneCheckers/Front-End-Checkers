(function () {

 'use strict';

 app.RegisterView = Backbone.View.extend({

    // el: '.hero-unit',

    className: '.main',


    events : {
      //Register
      'click .register-user': 'registerUser',
      
      //Back to Login
      'click .back-to-login': 'backToLogin'
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


    
    registerUser: function (e) {
      var self = this;
      e.preventDefault();
      
      var usernameVal = $('.username').val();
      var emailVal = $('.email').val();
      var passwordVal = $('.password').val();
      
      var newRegister = new app.Register({user:{ username: usernameVal, email: emailVal, password: passwordVal }});
      newRegister.save().done( function(instance) {
        var userToken = instance.user.authentication_token;
        Cookies.set('authentication_token', userToken);
        app.router.navigate('currentGames', { trigger: true});
      });

      
    },


    backToLogin: function (e) {
      e.preventDefault();
      console.log('back to the login screen');

      app.router.navigate('', { trigger: true});
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