(function(){
  var playersNumber, playerInfo;
  ui.setScreen();
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
  $("body").on("click", ".pack.pack--doors", function(){
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
