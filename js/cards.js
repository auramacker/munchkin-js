  var pack = [], buferPack = [];
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
        id: 2,
        img: _IMGPATH + "cards-sprite.png",
        name: "3872 орка",
        description: "+6 против дварфов (там старые счёты).",
        effect: "Брось кубик. На 2 и меньше ты затоптан до смерти, иначе потеряй столько уровней, сколько выпало.",
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
        id: 21,
        img: _IMGPATH + "cards-sprite.png",
        name: "Утка обречённости",
        description: "Потеряй 2 уровня, чтобы неповадно было впредь подбирать птиц в подземельях.",
        cardEffect: "looseLevels2"
      };
// -----------------------------------
// ******** player class variables ********
  var classesObjArr = [], createdClassesArr = [];
  classesObjArr[0] = {
        id: 11,
        img: _IMGPATH + "cards-sprite.png",
        name: "Воин",
        description: "Буйство: можешь сбросить до трёх карт в бою. Каждая даст тебе бонус +1. Ты побеждаешь при равенстве сил в бою.",
        cardEffect: "cardDropping+"
      };
// -----------------------------------
// ******** race cards variables ********
  var racesObjArr = [], createdRacesArr = [];
  racesObjArr[0] = {
        id: 20,
        img: _IMGPATH + "cards-sprite.png",
        name: "Дварф",
        description: "У тебя в игре может быть любое количество больших шмоток. В конце хода можешь оставлять на руке 6 карт.",
        cardEffect: "bigStuff" + _EFFECTSPLITTER + "manyCardsInHand"
      };
// -----------------------------------
// ******** Treasures part ********
// -----------------------------------
// ******** stuff cards variables ********
  var stuffObjArr = [], createdStuffArr = [];
  stuffObjArr[0] = {
        id: 03,
        img: _IMGPATH + "cards-sprite.png",
        name: "Баклер бахвала",
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
        id: 012,
        img: _IMGPATH + "cards-sprite.png",
        name: "Зелье холодильного взрыва",
        description: "Играй в любой бой. +3 любой стороне. Разовая шмотка.",
        effect: "anySidePlus+3"
      };
// -----------------------------------
// ******** bonus cards variables ********
  var bonusesObjArr = [], createdBonusesArr = [];
  bonusesObjArr[0] = {
        id: 02,
        img: _IMGPATH + "cards-sprite.png",
        name: "1000 голдов",
        description: "Получи уровень",
        cardEffect: "levelUp1",
        isReusable: false
      };
