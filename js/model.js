var model = {
  getCard: function(pack, player, number){
    var i = 0, length = number;
    for (; i < number; i++) {
      player.cards.push(pack[i]);
      pack.splice(i, 1);
    }
  }
}
