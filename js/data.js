
_MINLEVEL = 1;
_MAXLEVEL = 10;
_CARDSSIZE = 5;
_IMGPATH = "images/";
_EFFECTSPLITTER = "##";
// ********* Doors cards constructors *********
function MonsterCard(objMonster){ // {id, img, name, description, numTreasures, monsterLevel, looseLevel, gender, race, class}
this.deck = "doors",
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
  this.deck = "doors",
  this.id = objCurse.id,
  this.name = objCurse.name,
  this.img = objCurse.img,
  this.description = objCurse.description,
  this.cardEffect = objCurse.cardEffect
}
function ClassCard(objClassCard){
  this.deck = "doors",
  this.id = objClassCard.id,
  this.name = objClassCard.name,
  this.img = objClassCard.img,
  this.cardClass = objClassCard.cardClass,
  this.description = objClassCard.description,
  this.cardEffect = objClassCard.cardEffect

  }
function RaceCard(objRaceCard){
  this.deck = "doors",
  this.id = objRaceCard.id,
  this.name = objRaceCard.name,
  this.img = objRaceCard.img,
  this.cardClass = objRaceCard.cardClass,
  this.description = objRaceCard.description,
  this.cardEffect = objRaceCard.cardEffect
}

// ********* End doors cards constructors *********
// -------------------------------------------
// ********* Treasures cards constructors *********

function StuffCard(obj) {
  this.deck = "treasures",
  this.id = obj.id,
  this.name = obj.name,
  this.img = obj.img,
  this.description = obj.description,
  this.slotType = obj.slotType,
  this.power = obj.power,
  this.cost = obj.cost,
  this.class = obj.class,
  this.race = obj.race,
  this.effect = obj.effect,
  this.isBig = obj.isBig
}
function PoisionCard(obj) {
  this.deck = "treasures",
  this.id = obj.id,
  this.name = obj.name,
  this.img = obj.img,
  this.cost = obj.cost,
  this.description = obj.description,
  this.effect = obj.effect
}
function BonusCard(objBonusCard) {
  this.deck = "treasures",
  this.id = objBonusCard.id,
  this.name = objBonusCard.name,
  this.img = objBonusCard.img,
  this.description = objBonusCard.description,
  this.cardEffect = objBonusCard.cardEffect
  this.isReusable = objBonusCard.cardIsReusable
}
