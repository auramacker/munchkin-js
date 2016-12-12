  var pack = [], doorsCards = [], treasuresCards = [];
  var player, objPlayer = {
      id: 000,
      name: "Test",
      gender: "Female"
  };
  var cpuArr = [], cpuObjArr = [];
  cpuObjArr[0] = {
      id: 001,
      name: "testCpu1",
      gender: "Male"
    } ;
  cpuObjArr[1] = {
      id: 002,
      name: "testCpu2",
      gender: "Female"
    } ;
  cpuObjArr[2] = {
      id: 003,
      name: "testCpu3",
      gender: "Male"
    } ;
  cpuObjArr[3] = {
      id: 004,
      name: "testCpu4",
      gender: "Female"
    } ;
  cpuObjArr[4] = {
      id: 005,
      name: "testCpu4",
      gender: "Female"
    } ;
// ******** players variables ********
// -----------------------------------
// ******** monster cards variables ********
  var monstersObjArr = [], createdMonstersArr = [];
  monstersObjArr[0] = {
<<<<<<< HEAD
=======
        id: "021",
>>>>>>> c86d32b27dcfa015ce8f7c70661797cbadd60bd2
        img: _IMGPATH + "cards/" + "021" + ".png",
        name: "3872 орка",
        description: "+6 против Дварфов (из-за старых обид).",
        effect: "Брось кубик. На 2 или ниже они затопчат тебя до смерти. В остальных случаях теряешь столько Уровней, сколько показал кубик.",
        numTreasures: 3,
        monsterLevel: 10,
        looseLevel: "dice",
        gender: null,
        genderBonus: null,
        race: "dwarf",
        raceBonus: +6,
        class: null,
        classBonus: null
      };
// -----------------------------------
// ******** curse cards variables ********
  var cursesObjArr = [], createdCursesArr = [];
  cursesObjArr[0] = {
<<<<<<< HEAD
=======
        id: "166",
        img: _IMGPATH + "cards/" + "166" + ".png",
>>>>>>> c86d32b27dcfa015ce8f7c70661797cbadd60bd2
        name: "Утка обречённости",
        description: "Будешь знать, как всяких уток в подземелье подбирать. Теряешь 2 Уровня.",
        cardEffect: "looseLevels2"
      };
// -----------------------------------
// ******** player class variables ********
  var classesObjArr = [], createdClassesArr = [];
  classesObjArr[0] = {
        id: "156",
        img: _IMGPATH + "cards/" + "156" + ".png",
        name: "Воин",
        description: "Можешь скинуть до 3 карт в бою, каждая дает тебе +1 Бонус. При ничьей в бою ты побеждаешь.",
        cardEffect: "cardDropping+"
      };
// -----------------------------------
// ******** race cards variables ********
  var racesObjArr = [], createdRacesArr = [];
  racesObjArr[0] = {
        id: "146",
        img: _IMGPATH + "cards/" + "146" + ".png",
        name: "Дварф",
        description: "Ты можешь нести любое количество Больших шмоток. Ты можешь держать в \"Руке\" 6 карт.",
        cardEffect: "bigStuff" + _EFFECTSPLITTER + "manyCardsInHand"
      };
// -----------------------------------
// ******** Treasures part ********
// -----------------------------------
// ******** stuff cards variables ********
  var stuffObjArr = [], createdStuffArr = [];
  stuffObjArr[0] = {
        id: "116",
        img: _IMGPATH + "cards/" + "116" + ".png",
        name: "Пафосный Баклер",
        description: null,
        slotType: "oneHand",
        power: +2,
        cost: 400,
        effect: null,
        isBig: false
      };
// -----------------------------------
// ******** poision cards variables ********
  var poisionsObjArr = [], createdPoisionsArr = [];
  poisionsObjArr[0] = {
        id: "105",
        img: _IMGPATH + "cards/" + "105" + ".png",
        name: "Замораживающее взрывное зелье",
        description: "Применить в любом бою, +3 любой стороне. Одноразовое.",
        cost: 100,
        effect: "anySidePlus+3"
      };
// -----------------------------------
// ******** bonus cards variables ********
  var bonusesObjArr = [], createdBonusesArr = [];
  bonusesObjArr[0] = {
        id: "092",
        img: _IMGPATH + "cards/" + "092" + ".png",
        name: "1000 голдов",
        description: "Получи уровень.",
        cardEffect: "levelUp1",
        isReusable: false
      };
