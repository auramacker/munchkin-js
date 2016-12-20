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
function gameLoop(player){
  setInventory();
  function setInventory() {
    if (player.isUser) {
      ui.setDragNDropp();
    }
  }
}
