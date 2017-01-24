(function(){
  var playersNumber, playerInfo;
  ui.showPopUp();
  ui.showInitNotification();
  ui.initPlayersNumber();
  $(".init-notification .start").click(function(){
    initData();
  })
  // var mainLoopInterval = setInterval(function(){
  //   gameLoop();
  // }, 30);
})();
function gameLoop(currentPlayer){
  setInventory();
  $("body").on("click", ".btn-battle", function(){
    openDoor();
  });
  function setInventory() {
    if (currentPlayer.isUser) {
      ui.inventorySetting();
    }
  };
  function openDoor(){
    ui.pullCard("doors");
  }
}
