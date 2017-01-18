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
  },
  getCardImage: function(player, cardId) {
    var i = 0, length = player.cards.length, result;
    for (; i < length; i++) {
      if (player.cards[i].id == cardId) {
        result = player.cards[i].img;
        return result
      }
    }
  },
  isHasCost: function(player, id){
    var i = 0, length = player.cards.length, result = false;
    for (; i < length; i++) {
      if (player.cards[i].id == id) {
        if (player.cards[i].cost != null) {
          result = true;
          return result
        }
      }
    }
  },
  removeCard: function(player, cardId) {
    var i = 0, length = player.cards.length;
    for (; i < length; i++) {
      if (player.cards[i].id == cardId) {
         player.cards.splice(i, 1);
         return true
      }
    }
  },
  moveToRebound: function(player, cardId) {
    var i = 0, length = player.cards.length;
    console.log(player);
    for (; i < length; i++) {
      if (player.cards[i].id == cardId) {
        rebound.push(player.cards[i]);
        model.removeCard(player, cardId);
        return true
      }
    }
  },
  getCardDeck: function(player, cardId) {

  },
  getCardClass: function(player, cardId) {
    var i = 0, length = player.cards.length, result = undefined;
    for (; i < length; i++) {
      if (player.cards[i].id == cardId){
        result = player.cards[i].cardClass;
        return result
      }
    }
  },
  getCardType: function(player, cardId) {
    var i = 0, length = player.cards.length, result = undefined;
    for (; i < length; i++) {
      if (player.cards[i].id == cardId) {
        result = player.cards[i].constructor.name.toString();
        return result
      }
    }
  },
  getStuffSlot: function(player, cardId) {
    var i = 0, length = player.cards.length, result = undefined;
    for (; i < length; i++) {
      if (player.cards[i].id == cardId) {
        result = player.cards[i].slotType;
        return result
      }
    }
  },
  returnCard: function(player, cardId) {
    var i = 0, length = player.cards.length;
    for (; i < length; i++) {
      if (player.cards[i].id == cardId) {
        return player.cards[i]
      }
    }
  }
};
