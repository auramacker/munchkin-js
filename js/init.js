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
      pack.push.apply(pack, createdMonstersArr);
      for (var i = 0; i < cursesObjArr.length; i++) {
        createdCursesArr[i] = new CurseCard(cursesObjArr[i]);
      }
      pack.push.apply(pack, createdCursesArr);
      for (var i = 0; i < classesObjArr.length; i++) {
        createdClassesArr[i] = new ClassCard(classesObjArr[i]);
      }
      pack.push.apply(pack, createdClassesArr);
      for (var i = 0; i < racesObjArr.length; i++) {
        createdRacesArr[i] = new RaceCard(racesObjArr[i]);
      }
      pack.push.apply(pack, createdRacesArr);
      for (var i = 0; i < stuffObjArr.length; i++) {
        createdStuffArr[i] = new StuffCard(stuffObjArr[i]);
      }
      pack.push.apply(pack, createdStuffArr);
      for (var i = 0; i < poisionsObjArr.length; i++) {
        createdPoisionsArr[i] = new PoisionCard(poisionsObjArr[i]);
      }
      pack.push.apply(pack, createdPoisionsArr);
      for (var i = 0; i < bonusesObjArr.length; i++) {
        createdBonusesArr[i] = new BonusCard(bonusesObjArr[i]);
      }
      pack.push.apply(pack, createdBonusesArr);
      console.log(pack);
    break;
    case "doors":
      for (var i = 0; i < monstersObjArr.length; i++) {
        createdMonstersArr[i] = new MonsterCard(monstersObjArr[i]);
      }
      pack.push.apply(pack, createdMonstersArr);
      for (var i = 0; i < cursesObjArr.length; i++) {
        createdCursesArr[i] = new CurseCard(cursesObjArr[i]);
      }
      pack.push.apply(pack, createdCursesArr);
      for (var i = 0; i < classesObjArr.length; i++) {
        createdClassesArr[i] = new ClassCard(classesObjArr[i]);
      }
      pack.push.apply(pack, createdClassesArr);
      for (var i = 0; i < racesObjArr.length; i++) {
        createdRacesArr[i] = new RaceCard(racesObjArr[i]);
      }
      pack.push.apply(pack, createdRacesArr);
      console.log(pack);
    break;
    case "treasures":
      for (var i = 0; i < stuffObjArr.length; i++) {
        createdStuffArr[i] = new StuffCard(stuffObjArr[i]);
      }
      pack.push.apply(pack, createdStuffArr);
      for (var i = 0; i < poisionsObjArr.length; i++) {
        createdPoisionsArr[i] = new PoisionCard(poisionsObjArr[i]);
      }
      pack.push.apply(pack, createdPoisionsArr);
      for (var i = 0; i < bonusesObjArr.length; i++) {
        createdBonusesArr[i] = new BonusCard(bonusesObjArr[i]);
      }
      pack.push.apply(pack, createdBonusesArr);
      console.log(pack);
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
