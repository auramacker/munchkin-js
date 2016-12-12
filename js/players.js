function Player(objPlayer){
  this.isUser = objPlayer.isUser,
  this.id = objPlayer.id,
  this.name = objPlayer.name,
  this.gender = objPlayer.gender,
  this.level = _MINLEVEL,
  this.levelInBattle = this.level,
  this.coins = 0,
  this.class1 = "",
  this.class2 = "",
  this.race1 = "",
  this.race2 = false,
  this.isSuperMunchkin = false,
  this.ishalfBreed = false,
  this.helmet = false,
  this.armor = false,
  this.rightHand = false,
  this.leftHand = false,
  this.footGear = false,
  this.isHasBigItem = false,
  this.cards = [],
  this.curse = [], // проклятие
  this.cardsSize = _CARDSSIZE,
  this.tryEquip = function(slotType){
    if (!this.slotType) {
      // equip
    }
    else {
      //error
    }
  }
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
  this.equipItem = function(){

  },
  this.equipRace = function() {

  },
  this.equipClass = function(){

  }
}
