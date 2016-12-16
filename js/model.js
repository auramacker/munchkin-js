var model = {
  getCard: function(pack, player, number){
    var i = 0;
    for (; i < number; i++) {
      player.cards.push(pack[i]);
    }
    pack.splice(0, number);
  }
}
