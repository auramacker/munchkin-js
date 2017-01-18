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
  this.isSuperMunchkin = null,
  this.ishalfBreed = null,
  this.helmet = null,
  this.gear = null,
  this.rightHand = null,
  this.leftHand = null,
  this.twoHands = null,
  this.footGear = null,
  this.isHasBigItem = null,
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
        if (where == "twoHands" && !this.twoHands) {
          this[where] = this.cards[i];
          this.leftHand = "blocked";
          this.rightHand = "blocked";
          break;
        }
        else if (!this[where]) {
          this[where] = this.cards[i];
          this.twoHands = "blocked";
          break;
        }
      }
    }
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
  this.equipRace = function(cardId) {
    var i = 0; length = this.cards.length, result = false;
    for (; i < length; i++) {
      if (this.cards[i].id == cardId) {
        this.race1 = this.cards[i];
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
