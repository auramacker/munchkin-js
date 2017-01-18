function initData(){
    playersNumber = ui.getPlayersNumber();
    playerInfo = ui.getInitNotifyResult();
    createPlayers(playersNumber, playerInfo);
    console.log(player);
    ui.showCpuPlayers(cpuArr);
    ui.showPopUp("close");
    createCards("doors");
    doorsCards = shuffle(buferDoors);
    createCards("treasures");
    treasuresCards = shuffle(buferTreasures);
    ui.showPack(); // show pack
    ui.getCardsFromPack(treasuresCards, player, 2);
    ui.getCardsFromPack(doorsCards, player, 10);
    // for (var i = 0; i < cpuArr.length; i++) {
      // ui.getCardsFromPack(treasuresCards, cpuArr[i], 2);
      // ui.getCardsFromPack(doorsCards, cpuArr[i], 2);
    // }
    $('.player-user--inventory').click(function(){
      $('.inventory-wrap').toggleClass('is-visible');
    });
    gameLoop(player);
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
      buferDoors.push.apply(buferDoors, createdMonstersArr);
      for (var i = 0; i < cursesObjArr.length; i++) {
        createdCursesArr[i] = new CurseCard(cursesObjArr[i]);
      }
      buferDoors.push.apply(buferDoors, createdCursesArr);
      for (var i = 0; i < classesObjArr.length; i++) {
        createdClassesArr[i] = new ClassCard(classesObjArr[i]);
      }
      buferDoors.push.apply(buferDoors, createdClassesArr);
      for (var i = 0; i < racesObjArr.length; i++) {
        createdRacesArr[i] = new RaceCard(racesObjArr[i]);
      }
      buferDoors.push.apply(buferDoors, createdRacesArr);
      console.log(buferDoors);
    break;
    case "treasures":
      for (var i = 0; i < stuffObjArr.length; i++) {
        createdStuffArr[i] = new StuffCard(stuffObjArr[i]);
      }
      buferTreasures.push.apply(buferTreasures, createdStuffArr);
      for (var i = 0; i < poisionsObjArr.length; i++) {
        createdPoisionsArr[i] = new PoisionCard(poisionsObjArr[i]);
      }
      buferTreasures.push.apply(buferTreasures, createdPoisionsArr);
      for (var i = 0; i < bonusesObjArr.length; i++) {
        createdBonusesArr[i] = new BonusCard(bonusesObjArr[i]);
      }
      buferTreasures.push.apply(buferTreasures, createdBonusesArr);
      console.log(buferTreasures);
    break;
  }
}
function createPlayers(cpuNumber, objPlayer) {
  var i = 0, length = cpuNumber; // crating players
  player = new Player(objPlayer);
  for (; i < length; i++) {
    cpuArr[i] = new Player(cpuObjArr[i]);
  }
}
