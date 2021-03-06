var model = {
  returnFromPack: function(pack, cardId) {
    var i = 0, length, result;
    if (pack == "doors") {
      length = doorsCards.length;
      for (; i < length; i ++) {
        if (doorsCards[i].id == cardId) {
          return doorsCards[i]
        }
      }
    }
    else if (pack == "treasures") {
      length = treasuresCards.length;
      for (; i < length; i ++) {
        if (treasuresCards[i].id == cardId) {
          return treasuresCards[i]
        }
      }
    }
  },
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
        if (player.cards[i].cost != undefined){
          if (player.cards[i].cost != null){
            result = true;
            return result
          }
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
  moveDoorsRebound: function(card) {
    var i = 0, length = doorsCards.length, result = false;
    for (; i < length; i++) {
      if (card.id =- doorsCards[i].id) {
        rebound.push(doorsCards[i]);
        doorsCards.splice(i, 1);
        return true
      }
    }
  },
  moveEquipRebound: function(type){
    if (player[type] != null) {
      rebound.push(player[type]);
      player[type] = null;
    }
  },
  moveToRebound: function(player, cardId) {
    var i = 0, length = player.cards.length;
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
  checkMonsterCard(monster, player) {
    var types = ["race", "class"], result = [];
    for (var i = 0; i < types.length; i++) {
      getTypeBonus(types[i]);
    }
    if (monster.gender == player.gender) {
      monster.monsterLevel += monster.genderBonus;
      result.push("Сила монстра против Вас возросла на "+ monster.genderBonus +" единиц!");
    }
    return result
    function getTypeBonus(type) {
      if (monster[type] != null) {
        var i = 0, length = monster[type].length;
        for (; i < length; i++) {
          if ((player[type+"1"] != null)) {
            if (monster[type][i] == player[type+"1"].cardClass) {
              monster.monsterLevel += monster[type+"Bonus"];
              result.push("Сила монстра против Вас возросла на "+ monster[type+"Bonus"] +" единиц!");
              break;
            }
          }
          if (player[type+"2"] != null) {
            if (monster[type][i] == player[type+"2"].cardClass) {
              monster.monsterLevel += monster[type+"Bonus"];
              result.push("Сила монстра против Вас возросла на "+ monster[type+"Bonus"] +" единиц!");
              break;
            }
          }
        }
      }
    };

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
  getCardType: function(card) { // card == obj or id
    if (typeof card === "object") {
      return card.constructor.name.toString()
    }
    else if (typeof card === "string") {
      var i = 0, length = player.cards.length;
      for (; i < length; i++) {
        if (player.cards[i].id == card) {
          return player.cards[i].constructor.name.toString();
        }
      }
    }
  },
  getPlayerCardType: function(player, cardId) {
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
  returnCard: function(from, cardId, position) { // from - doors or equip, cardID, position - if "equip"
    if ((from == "doors") && (arguments[2] == undefined)) {
      var i = 0, length = doorsCards.length;
      for (; i < length; i++) {
        if (doorsCards[i].id == cardId) {
          return doorsCards[i]
        }
      }
    }
    else if ((from == "equip") && (arguments[2] != undefined) && (arguments[1] == null)){
      if (player[position] != null) {
        return player[position]
      }
    }
    else {
      var i = 0, length = player.cards.length;
      for (; i < length; i++) {
        if (player.cards[i].id == cardId) {
          return player.cards[i]
        }
      }
    }
  },
  unsetCard: function(player, cardId) {
    var result = false;
    for (prop in player) {
      if (player[prop] != null) {
        if (player[prop].id == cardId) {
          player.cards.unshift(player[prop]);
          if (player[prop].power) {
            player.strength -= player[prop].power;
          }
          if (player[prop].isBig == true) {
            player.isHasBigItem = false;
          }
          player[prop] = null;
          result = true;
          return result
        }
      }
    }
    return result
  },
  moveToPack: function(player, card){
    var i = 0, length = rebound.length, deleteElemPos;
    if (card.deck == "doors") {
      doorsCards.push(card);
    }
    else {
      treasuresCards.push(card);
    }
    for (; i < length; i++) {
      if (rebound[i] != undefined) {
        if (rebound[i].id == card.id) {
          delete rebound[i];
        }
      }
    }
  },
  sparseArray: function(array){
    var i = 0, length = array.length;
    while (i < length) {
      if (array[i] == undefined) {
        array.splice(i, 1)
      }
      i++
    }
  },
  fixId: function(card) {
    card.id = card.id.toString();
    var bufId = card.id;
    console.log(bufId);
    if (card.id.indexOf("-") != -1) {
      card.id = bufId.replace("-", "0");
    }
  }
};
