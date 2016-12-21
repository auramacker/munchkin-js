var model = {
  getCard: function(pack, player, number){
    var i = 0;
    for (; i < number; i++) {
      player.cards.push(pack[i]);
    }
    pack.splice(0, number);
  },
  getCardTypeId: function(player, cardType){
    var i = 0, length = player.cards.length, result = [];
    for (; i < length; i++) {
      if (player.cards[i].constructor.name.toString() == cardType) {
        result.push(player.cards[i].id);
      }
    }
    return result
  }
};
