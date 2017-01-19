function Player(objPlayer){
  this.isUser = objPlayer.isUser,
  this.id = objPlayer.id,
  this.name = objPlayer.name,
  this.gender = objPlayer.gender,
  this.level = _MINLEVEL,
  this.strength = _MINLEVEL,
  this.levelInBattle = this.level,
  this.coins = 0,
  this.class1 = null,
  this.class2 = null,
  this.race1 = null,
  this.race2 = null,
  this.superMunchkin = null,
  this.halfBreed = null,
  this.helmet = null,
  this.gear = null,
  this.rightHand = null,
  this.leftHand = null,
  this.twoHands = null,
  this.footGear = null,
  this.isHasBigItem = false,
  this.cards = [],
  this.curse = [], // проклятие
  this.equipment = [],
  this.cardsSize = _CARDSSIZE,
  this.getUpLevel = function(){
    if (this.level > _MINLEVEL) {
      this.level--
    }
  },
  this.getDownLevel = function(levels){
    if (this.level < _MAXLEVEL) {
      this.level++
    }
  },
  this.equipWeapon = function(cardId, where){
    var i = 0; length = this.cards.length, result = false;
    for (; i < length; i++) {
      if (this.cards[i].id == cardId) {
        result = this.checkWeapon(this.cards[i]);
        if (result == true) {
          if (where == "twoHands" && !this.twoHands) {
            this[where] = this.cards[i];
            this.leftHand = "blocked";
            this.rightHand = "blocked";
            return result
          }
          else if (!this[where]) {
            this[where] = this.cards[i];
            this.twoHands = "blocked";
            return result
          }
        }
        else return result
      }
    }
  },
  this.checkWeapon = function(card){
    var result = {}, lastResult;
    debugger;
    if (card.isBig) {
      if (!this.isHasBigItem) {
        this.isHasBigItem = true;
        result.isBig = true;
      }
      else {
        result.isBig = "You already have big item!";
      }
    }
    else {
      result.isBig = true;
    }
    if (card.class == null) {
      result.class = true;
    }
    else if ((card.class == this.class1) || (card.class == this.class2)) {
      result.class = true;
    }
    else {
      result.class = "You have not " + card.class + " class!";
    }
    for (var prop in result) {
      if (result[prop] != true) {
        lastResult = result[prop];
        return lastResult;
      }
      else {
        lastResult = true;
      }
    }
    return lastResult
  },
  this.getWeaponPower = function(){
    if ((this.twoHands != "blocked") && (this.twoHands)) {
      this.strength += this.twoHands.power;
    }
    else if (this.leftHand && this.rightHand && (this.leftHand  != "blocked") && (this.rightHand != "blocked")) {
      this.strength -= this.leftHand.power;
      this.strength += this.leftHand.power + this.rightHand.power;
    }
    else if (this.leftHand && (this.leftHand != "blocked")) {
      this.strength += this.leftHand.power ;
    }
    else if (this.rightHand && (this.rightHand != "blocked")) {
      this.strength += this.rightHand.power;
    }
  },
  this.equipHelmet = function(cardId) {
    var i = 0; length = this.cards.length, result = false;
    for (; i < length; i++) {
      if (this.cards[i].id == cardId) {
        this.helmet = this.cards[i];
      }
    }
  },
  this.getHelmetPower = function(){
    this.strength += this.helmet.power;
  },
  this.equipGear = function(cardId){
    var i = 0; length = this.cards.length, result = false;
    for (; i < length; i++) {
      if (this.cards[i].id == cardId) {
        this.gear = this.cards[i];
      }
    }
  },
  this.getGearPower = function(){
    this.strength += this.gear.power;
  },
  this.equipFootGear = function(cardId){
    var i = 0; length = this.cards.length, result = false;
    for (; i < length; i++) {
      if (this.cards[i].id == cardId) {
        this.footGear = this.cards[i];
      }
    }
  },
  this.getFootGearPower = function(){
    this.strength += this.footGear.power;
  },
  this.equipClassRace = function(where ,cardId) {
    var i = 0; length = this.cards.length, result = false;
    for (; i < length; i++) {
      if (this.cards[i].id == cardId) {
        this[where] = this.cards[i];
        break;
      }
    }
  },
  this.equipClass = function(cardId){
    var i = 0; length = this.cards.length, result = false;
    for (; i < length; i++) {
      if (this.cards[i].id == cardId) {
        this.class1 = this.cards[i];
      }
    }
  }
}
