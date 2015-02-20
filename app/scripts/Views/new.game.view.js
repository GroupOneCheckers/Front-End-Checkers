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
			//do events later
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

      this.localGameBoard.forEach( function(element) {
        for (var i = 0; i < 8; i++) {
          if (element[i] === 0) {
            $('.game-board').append("<div class='square black-square'></div>");
          } else {
            $('.game-board').append("<div class='square white-square'></div>");
          }
        }
      });

      app.allPieces = []; // move to BB Collection
      app.newGameArray.forEach( function (row, r) {
        row.forEach( function (piece, c) {

          if (piece !== 0){
            var p = new app.Checker({
              player: piece,
              positionx: c,
              positiony: r
            });
            app.allPieces.push(p);
            if (piece === 1) {
              var cssClass = 'p1';
            } else {
              var cssClass = 'p2';
            }
            $('.game-board').append('<div data-posx="'+ c +'" data-posy="' + r + '" class="tcheck '+ cssClass +'" style="top:' + (r * 74.75) + 'px; left:' + (c * 74.75) + 'px;"></div>');
          }


        });

      });


    }
    

	});

}());