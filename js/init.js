function initCards(){
  createPlayers(5);
  createCards("all");
};
function createCards(value){ // all | doors, treasures | ??? monsters, curses, classes, races, stuff, poisions, bonuses
  switch(value) {
    case "all":
      for (var i = 0; i < monstersObjArr.length; i++) {
        createdMonstersArr[i] = new MonsterCard(monstersObjArr[i]);
      }
      buferPack.push.apply(buferPack, createdMonstersArr);
      for (var i = 0; i < cursesObjArr.length; i++) {
        createdCursesArr[i] = new CurseCard(cursesObjArr[i]);
      }
      buferPack.push.apply(buferPack, createdCursesArr);
      for (var i = 0; i < classesObjArr.length; i++) {
        createdClassesArr[i] = new ClassCard(classesObjArr[i]);
      }
      buferPack.push.apply(buferPack, createdClassesArr);
      for (var i = 0; i < racesObjArr.length; i++) {
        createdRacesArr[i] = new RaceCard(racesObjArr[i]);
      }
      buferPack.push.apply(buferPack, createdRacesArr);
      for (var i = 0; i < stuffObjArr.length; i++) {
        createdStuffArr[i] = new StuffCard(stuffObjArr[i]);
      }
      buferPack.push.apply(buferPack, createdStuffArr);
      for (var i = 0; i < poisionsObjArr.length; i++) {
        createdPoisionsArr[i] = new PoisionCard(poisionsObjArr[i]);
      }
      buferPack.push.apply(buferPack, createdPoisionsArr);
      for (var i = 0; i < bonusesObjArr.length; i++) {
        createdBonusesArr[i] = new BonusCard(bonusesObjArr[i]);
      }
      buferPack.push.apply(buferPack, createdBonusesArr);
      console.log(buferPack);
    break;
    case "doors":
      for (var i = 0; i < monstersObjArr.length; i++) {
        createdMonstersArr[i] = new MonsterCard(monstersObjArr[i]);
      }
      buferPack.push.apply(buferPack, createdMonstersArr);
      for (var i = 0; i < cursesObjArr.length; i++) {
        createdCursesArr[i] = new CurseCard(cursesObjArr[i]);
      }
      buferPack.push.apply(buferPack, createdCursesArr);
      for (var i = 0; i < classesObjArr.length; i++) {
        createdClassesArr[i] = new ClassCard(classesObjArr[i]);
      }
      buferPack.push.apply(buferPack, createdClassesArr);
      for (var i = 0; i < racesObjArr.length; i++) {
        createdRacesArr[i] = new RaceCard(racesObjArr[i]);
      }
      buferPack.push.apply(buferPack, createdRacesArr);
      console.log(buferPack);
    break;
    case "treasures":
      for (var i = 0; i < stuffObjArr.length; i++) {
        createdStuffArr[i] = new StuffCard(stuffObjArr[i]);
      }
      buferPack.push.apply(buferPack, createdStuffArr);
      for (var i = 0; i < poisionsObjArr.length; i++) {
        createdPoisionsArr[i] = new PoisionCard(poisionsObjArr[i]);
      }
      buferPack.push.apply(buferPack, createdPoisionsArr);
      for (var i = 0; i < bonusesObjArr.length; i++) {
        createdBonusesArr[i] = new BonusCard(bonusesObjArr[i]);
      }
      buferPack.push.apply(buferPack, createdBonusesArr);
      console.log(buferPack);
    break;
  }
}
function createPlayers(cpuNumber) {
  var i = 0, length = cpuNumber; // crating players
  player = new Player(objPlayer);
  for (; i < length; i++) {
    cpuArr[i] = new Player(cpuObjArr[i]);
  }
}
