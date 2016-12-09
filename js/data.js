_MINLEVEL = 1;
_MAXLEVEL = 10;
_CARDSSIZE = 5;
_IMGPATH = "imgs/";
_EFFECTSPLITTER = "##";
// ********* Doors cards constructors *********
function MonsterCard(objMonster){ // {id, img, name, description, numTreasures, monsterLevel, looseLevel, gender, race, class}
  this.id = objMonster.id,
  this.img = objMonster.img,
  this.name = objMonster.name,
  this.description = objMonster.description,
  this.effect = objMonster.effect,
  this.numTreasures = objMonster.numTreasures,
  this.monsterLevel = objMonster.monsterLevel,
  this.looseLevel = objMonster.looseLevel,
  this.gender = objMonster.gender,
  this.genderBonus = objMonster.genderBonus,
  this.race = objMonster.race,
  this.raceBonus = objMonster.raceBonus,
  this.class = objMonster.class,
  this.classBonus = objMonster.classBonus
}
function CurseCard(objCurse){
  this.id = objCurse.id,
  this.name = objCurse.name,
  this.img = objCurse.img,
  this.description = objCurse.description,
  this.cardEffect = objCurse.cardEffect
}
function ClassCard(objClassCard){
  this.id = objClassCard.id,
  this.name = objClassCard.name,
  this.img = objClassCard.img,
  this.description = objClassCard.description,
  this.cardEffect = objClassCard.cardEffect

  }
}
function RaceCard(objRaceCard){
  this.id = objRaceCard.id,
  this.name = objRaceCard.name,
  this.img = objRaceCard.img,
  this.description = objRaceCard.description,
  this.cardEffect = objRaceCard.cardEffect
}

// ********* End doors cards constructors *********
// -------------------------------------------
// ********* Treasures cards constructors *********

function StuffCard(obj) {
  this.id = obj.id,
  this.name = obj.name,
  this.img = obj.img,
  this.description = obj.description,
  this.slotType = obj.slotType,
  this.power = obj.power,
  this.cost = obj.cost,
  this.effect = obj.effect,
  this.isBig = obj.isBig
}
function PoisionCard(obj) {
  this.id = obj.id,
  this.name = obj.name,
  this.img = obj.img,
  this.description = obj.description,
  this.effect = obj.effect
}
function BonusCard(objBonusCard) {
  this.id = objBonusCard.id,
  this.name = objBonusCard.name,
  this.img = objBonusCard.img,
  this.description = objBonusCard.description,
  this.cardEffect = objBonusCard.cardEffect
  this.isReusable = objBonusCard.cardIsReusable
}
