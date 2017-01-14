function Player(objPlayer){
  this.isUser = objPlayer.isUser,
  this.id = objPlayer.id,
  this.name = objPlayer.name,
  this.gender = objPlayer.gender,
  this.level = _MINLEVEL,
  this.levelInBattle = this.level,
  this.coins = 0,
  this.class1 = null,
  this.class2 = null,
  this.race1 = null,
  this.race2 = null,
  this.isSuperMunchkin = null,
  this.ishalfBreed = null,
  this.helmet = null,
  this.armor = null,
  this.rightHand = null,
  this.leftHand = null,
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
  this.equipItem = function(cardId, where){
    var i = 0; length = this.cards.length, result = false;
    for (; i < length; i++) {
      if (this.cards[i].id == cardId) {
        if (!this[where]) {
          this[where] = this.cards[i];
          break;
        }
      }
    }
  },
  this.equipRace = function() {

  },
  this.equipClass = function(){

  }
}
