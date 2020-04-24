(function() {
    //Entry point
    var init = function() {
        game.startScene.handleInput();
        game.summaryScene.handleInput();
        game.gameoverScene.handleInput();
        game.gameScene.handleInput();
    };

    //main game logic
    game.flow = {
    startOver: function() {
        game.startScene.hide();
        game.summaryScene.hide();
        game.gameoverScene.hide();
        game.gameScene.hide();
        game.startScene.show();
    },
    gameWin: function() {
        game.gameScene.hide();
        game.summaryScene.show();
    },
    gameOver: function() {
        game.startScene.show();
        game.gameScene.hide();
        game.gameoverScene.show();
    },
    nextLevel: function() {
        game.startScene.hide();
        game.summaryScene.hide();
        game.gameScene.show();
    },
    finishLevel: function() {
        game.gameScene.hide();
        game.summaryScene.show();
    },
};

 init(); //start the game
});//call the function bruv

