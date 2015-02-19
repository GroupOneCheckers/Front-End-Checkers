(function () {

 'use strict';

 var currentUser;


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
      
      var emailVal = $('.email').val();
      var passwordVal = $('.password').val();

      var newLogin = new app.Login({user:{ email: emailVal, password: passwordVal }});
      newLogin.save().done( function(instance) {
        var userToken = instance.user.authentication_token;
        Cookies.set('authentication_token', userToken);
        app.router.navigate('currentGames', { trigger: true});
        currentUser = instance;
        console.log(currentUser);
      });

    },


    showRegistration: function (e) {
      e.preventDefault();
      console.log('going to the registration screen');

      app.router.navigate('register', { trigger: true});
    }


 });


}());