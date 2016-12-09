  var player, objPlayer,
      cpu1, objCpu1,
      cpu2, objCpu2,
      cpu3, objCpu3,
      cpu4, objCpu4,
      cpu5, objCpu5,
// ******** players variables ********
// -----------------------------------
// ******** monster cards variables ********
      orcs, objOrcs = {
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
      },
// -----------------------------------
// ******** curse cards variables ********
      duckOfDoom, objDuckOfDoom = {
        id: 21,
        img: _IMGPATH + "cards-sprite.png",
        name: "Утка обречённости",
        description: "Потеряй 2 уровня, чтобы неповадно было впредь подбирать птиц в подземельях.",
        cardEffect: "looseLevels2"
      },
// -----------------------------------
// ******** player class variables ********
      warrior, objWarrior = {
        id: 11,
        img: _IMGPATH + "cards-sprite.png",
        name: "Воин",
        description: "Буйство: можешь сбросить до трёх карт в бою. Каждая даст тебе бонус +1. Ты побеждаешь при равенстве сил в бою.",
        cardEffect: "cardDropping+"
      },
// -----------------------------------
// ******** race cards variables ********
      dwarf, objDwarf = {
        id: 20,
        img: _IMGPATH + "cards-sprite.png",
        name: "Дварф",
        description: "У тебя в игре может быть любое количество больших шмоток. В конце хода можешь оставлять на руке 6 карт.",
        cardEffect: "bigStuff" + _EFFECTSPLITTER + "manyCardsInHand"
      },
// -----------------------------------
// ******** Treasures part ********
// -----------------------------------
// ******** stuff cards variables ********
      bucklerOfSwashing, objbucklerOfSwashing = {
        id: 03,
        img: _IMGPATH + "cards-sprite.png",
        name: "Баклер бахвала",
        description: null,
        slotType: "oneHand",
        power: +2,
        cost: 400,
        effect: null,
        isBig: false
      },
// -----------------------------------
// ******** poision cards variables ********
      coldBlast, objColdBlast = {
        id: 03,
        img: _IMGPATH + "cards-sprite.png",
        name: "Баклер бахвала",
        description: null,
      },
// -----------------------------------
// ******** bonus cards variables ********
      gold1000, objGold1000;
