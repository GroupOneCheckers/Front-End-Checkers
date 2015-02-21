(function (){

	'use strict';

	app.GameView = Backbone.View.extend({

		className: '.main',

    localGameBoard: [
      [0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0],
    ],

		events: {
			'click .tcheck': 'selectChecker',
      'click div .square': 'selectDest',
      'click .submit-move': 'submitMove',

		},
    
    template: $('#gameBoard').html(),


    initialize: function (args) {
      // this.collection.on('change', this.render, this);
      $('.main').html(this.el);   

      // this.collection = args.collection;
      this.render();

    },


    render: function () {

      this.$el.html(this.template);

      //Create the Board
      this.localGameBoard.forEach( function (element, row) {
        for (var i = 0; i < 8; i++) {
          if (element[i] === 0) {
            $('.game-board').append('<span class="square black-square"></span>');
          } else {
            $('.game-board').append('<span dataposx="'+ i +'" dataposy="' + row + '"class="square white-square"></span>');
          }
        }
      });

      //Create Pieces Collection
      app.PiecesCol = new app.PiecesCollection(); 

      //Place Pieces on the Board
      app.newGameArray.forEach( function (row, r) {
        
        row.forEach( function (piece, c) {

          if (piece !== 0){
            
            var p = new app.Checker({
              player: piece,
              positionx: c,
              positiony: r
            });

            app.PiecesCol.push(p);

            if (piece === 1) {
              var cssClass = 'p1';
            } else {
              var cssClass = 'p2';
            }

            $('.game-board').append('<div dataposx="'+ c +'" dataposy="' + r + '" class="tcheck '+ cssClass +'" style="top:' + (r * 74.75) + 'px; left:' + (c * 74.75) + 'px;"></div>');          
          }
        });
      });
    },

    //Select a Checker
    selectChecker: function(e) {
      e.preventDefault();
      
      //capture the checker's html
      var thisChecker = e.target;

      //show selection
      $(thisChecker).toggleClass('selected');
     
      //get the x and y position
      var thisCheckerX = Number(thisChecker.attributes.dataposx.value);
      var thisCheckerY = Number(thisChecker.attributes.dataposy.value);

      
      var findMatch = app.PiecesCol.findWhere({ positionx: thisCheckerX, positiony: thisCheckerY });
      console.log(findMatch);


      //markl array with coords
      app.gBoard = [];
      app.gBoard.push(thisCheckerX);
      app.gBoard.push(thisCheckerY);
      console.log(app.gBoard);

    },
    

    selectDest: function(e) {
      e.preventDefault();

      //capture destinations coords.
      var thisSquare = e.target;

      //get the x and y position
      var thisSquareX = Number(thisSquare.attributes.dataposx.value);
      var thisSquareY = Number(thisSquare.attributes.dataposy.value);
      console.log(thisSquareX);
      console.log(thisSquareY);

      //markl array with coords
      app.gSquare = [];
      app.gSquare.push(thisSquareX);
      app.gSquare.push(thisSquareY);
      console.log(app.gSquare);
    },

    submitMove: function(e) {

      var getToken = Cookies.get('authentication_token');

      //game data to send to server collected in one place
      app.newMove = new app.Move({authentication_token: getToken, pick: {token_start: app.gBoard, token_end: app.gSquare }});

     //button click to send game data to server.
      console.log('in submit move function');
      console.log(app.newMove.attributes);


        //get game id 

      //app.router.navigate('' + elemID, { trigger: true });
    },
      
	});

}());