$(document).ready(function() {
  // Draw a grid
  const connect4 = new Connect4("#connect4");

  // Add a call back for a player's turn
  connect4.onPlayerMove = function() {
    $("#player").text(connect4.player);
  };

  // This will restart a new game of connect four
  $("#restart").click(function() {
    connect4.restart();
  });
});
