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

      this.localGameBoard.forEach( function (element, row) {
        for (var i = 0; i < 8; i++) {
          if (element[i] === 0) {
            $('.game-board').append('<span dataposx="'+ i +'" dataposy="' + row + '" class="square black-square"></span>');
          } else {
            $('.game-board').append('<span dataposx="'+ i +'" dataposy="' + row + '"class="square white-square"></span>');
          }
        }
      });


      app.PiecesCol = new app.PiecesCollection(); 

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

    selectChecker: function(e) {
      e.preventDefault();
      //capture the checker's html
      var thisChecker = e.target;
      $(thisChecker).toggleClass('selected');
      //get the x and y position
      var thisCheckerX = Number(thisChecker.attributes.dataposx.value);
      var thisCheckerY = Number(thisChecker.attributes.dataposy.value);
      console.log(thisCheckerX);
      console.log(thisCheckerY);

      var findMatch = app.PiecesCol.findWhere({ positionx: thisCheckerX, positiony: thisCheckerY });
      console.log(findMatch);





      //possible squares





    }
    

	});

}());