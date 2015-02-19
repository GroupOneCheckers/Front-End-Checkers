(function () {

  //Instances
  app.user = new app.Login({ user: {username: "Bobby G-Unit", email: "bobby@gunit.com", password: "GgGgGgGUnit"}});

  // app.allUsers = new app.UserCol();

  app.router = new app.MainRouter();

  //app.allUsers.fetch().done( function() {
  	
  // 	console.log("Fetching Data from Heroku");

  // });

}());