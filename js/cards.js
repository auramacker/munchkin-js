  var pack = [], buferPack = [],
   doorsCards = [], buferDoors = [],
    treasuresCards = [],
     buferTreasures = [],
     rebound = [];
  var player;
  var cpuArr = [], cpuObjArr = [];
  cpuObjArr[0] = {
      id: 1,
      isUser: false,
      name: "testCpu1",
      gender: "male"
    } ;
  cpuObjArr[1] = {
      id: 2,
      isUser: false,
      name: "testCpu2",
      gender: "female"
    } ;
  cpuObjArr[2] = {
      id: 3,
      isUser: false,
      name: "testCpu3",
      gender: "male"
    } ;
  cpuObjArr[3] = {
      id: 4,
      isUser: false,
      name: "testCpu4",
      gender: "female"
    } ;
  cpuObjArr[4] = {
      id: 5,
      isUser: false,
      name: "testCpu4",
      gender: "female"
    } ;
// ******** players variables ********
// -----------------------------------
// ******** monster cards variables ********
  var monstersObjArr = [], createdMonstersArr = [];
  // monstersObjArr[0] = {
  //       id: "021",
  //       img: _IMGPATH + "cards/" + "021" + ".png",
  //       name: "3872 орка",
  //       description: "+6 против Дварфов (из-за старых обид).",
  //       effect: "Брось кубик. На 2 или ниже они затопчат тебя до смерти. В остальных случаях теряешь столько Уровней, сколько показал кубик.",
  //       numTreasures: 3,
  //       numLevels: 1,
  //       monsterLevel: 10,
  //       looseLevel: "dice",
  //       gender: null,
  //       genderBonus: null,
  //       race: ["dwarf"],
  //       raceBonus: +6,
  //       class: null,
  //       classBonus: null
  //     };
     monstersObjArr[0] = {
           id: "032",
           img: _IMGPATH + "cards/" + "032" + ".png",
           name: "Амазонка",
           description: "Не дерётся с Женщинами, вместо этого даёт им 1 Сокровище",
           effect: "Блин, какая-то баба надрала тебе задницу. Где твоя гордость, горячий мачо, крутой манчкин? Теряешь Классы. Если ты и так без Класса, скинь 3 Уровня",
           numTreasures: 2,
           numLevels: 1,
           monsterLevel: 8,
           looseLevel: "loseClass",
           gender: "female",
           genderBonus: "giveTreasure1",
           race: null,
           raceBonus: null,
           class: null,
           classBonus: null
     };
    // monstersObjArr[2] = {
    //       id: "043",
    //       img: _IMGPATH + "cards/" + "043" + ".png",
    //       name: "Бигфут",
    //       description: "+3 если в бою есть Дварфы или Халфлинги.",
    //       effect: "Наступил-то слегка-да затрещали бока; хоть остался живой, да с пустой головой. Теряешь надетый головняк.",
    //       numTreasures: 3,
    //       numLevels: 1,
    //       monsterLevel: 12,
    //       looseLevel: "loseHelmet",
    //       gender: null,
    //       genderBonus: null,
    //       race: ["dwarf", "halfing"],
    //       raceBonus: +3,
    //       class: null,
    //       classBonus: null
    //     };
    // monstersObjArr[3] = {
    //       id: "047",
    //       img: _IMGPATH + "cards/" + "047" + ".png",
    //       name: "Сочащаяся Слизь",
    //       description: "Ну и мерзость! +4 против Эльфов.",
    //       effect: "Сбрось надетую Обувку. Если уже без Обувки, теряешь 1 Уровень.",
    //       numTreasures: 1,
    //       numLevels: 1,
    //       monsterLevel: 1,
    //       looseLevel: "loseFootGear",
    //       gender: null,
    //       genderBonus: null,
    //       race: ["elf"],
    //       raceBonus: +4,
    //       class: null,
    //       classBonus: null
    //     };

// -----------------------------------
// ******** curse cards variables ********
  var cursesObjArr = [], createdCursesArr = [];
  cursesObjArr[0] = {
        id: "166",
        img: _IMGPATH + "cards/" + "166" + ".png",
        name: "Утка обречённости",
        description: "Будешь знать, как всяких уток в подземелье подбирать. Теряешь 2 Уровня.",
        cardEffect: "looseLevels2"
      };
  cursesObjArr[1] = {
        id: "001",
        img: _IMGPATH + "cards/" + "001" + ".png",
        name: "Проклятье! Невелика потеря",
        description: "Выбери и сбрось 1 маленькую шмотку. Маленькая - это любая шмотка, на которой не написано, что она Большая.",
        cardEffect: "lostSmallStuff1"
  };
  cursesObjArr[2] = {
        id: "005",
        img: _IMGPATH + "cards/" + "005" + ".png",
        name: "Проклятье!",
        description: "Теряешь надетый головняк",
        cardEffect: "lostHelmet"
  };
  cursesObjArr[3] = {
        id: "010",
        img: _IMGPATH + "cards/" + "010" + ".png",
        name: "В Конец Мерзкое Проклятие!",
        description: "Теряешь Шмотку, Дающую Тебе Наибольший Бонус",
        cardEffect: "lostBestStuff"
  };
// -----------------------------------
// ******** player class variables ********
  var classesObjArr = [], createdClassesArr = [];
  classesObjArr[0] = {
        id: "156",
        img: _IMGPATH + "cards/" + "156" + ".png",
        name: "Воин",
        cardClass: "warrior",
        description: "Можешь скинуть до 3 карт в бою, каждая дает тебе +1 Бонус. При ничьей в бою ты побеждаешь.",
        cardEffect: "cardDropping+"
      };
  classesObjArr[1] = {
        id: "159",
        img: _IMGPATH + "cards/" + "159" + ".png",
        name: "Волшебник",
        cardClass: "wizard",
        description: "Заклинание Полёта: Можешь сбростиь до 3 карт после броска на Смывку; каждая даёет +1 к Смывке.\
        Заклинание Усмирения: Можешь сбростиь всю 'руку' (мин. 3 карты), чтобы усмирить одного монстраи не драться с ним; ты получаешь только \
        его Сокровища, но не Уровень. Если в бою учавствуют другие монстры, с ними придётся воевать.",
        cardEffect: "cardDroppingRun+" + _EFFECTSPLITTER + "calmDown"
      };
  classesObjArr[2] = {
        id: "141",
        img: _IMGPATH + "cards/" + "141" + ".png",
        name: "Клирик",
        cardClass: "clirick",
        description: "Воскрешение: Когда тебе надо вытянуть карты в открытую, ты можешь частично или полностью взять их из соответствующего сброса\
        . Затем ты должен сбросить с 'руки' по 1 карте за каждую такую карту. Изгнание: можешь сбросить до 3 карт в бою против Андедов. Каждый сброс даёет тебе +3 Бонус.",
        cardEffect: "takeFromRebound" + _EFFECTSPLITTER + "undeadBonus+3"
      };
  classesObjArr[3] = {
        id: "087",
        img: _IMGPATH + "cards/" + "087" + ".png",
        name: "Суперманчкин",
        cardClass: "superMunchkin",
        description: "Можешь иметь 2 Классовые карты, а в комплекте все радости и горести обоих Классов\
        Или возьми один Класс, получи все его преимущества и забудь о недостатках (так монстры, ненавидящие Клириков, не получат Бонус в бою против Суперклирика).\
        Эта карта теряется, если ты теряешь все Классы.",
        cardEffect: null
      };

// -----------------------------------
// ******** race cards variables ********
  var racesObjArr = [], createdRacesArr = [];
  racesObjArr[0] = {
        id: "146",
        img: _IMGPATH + "cards/" + "146" + ".png",
        name: "Дварф",
        cardClass: "dwarf",
        description: "Ты можешь нести любое количество Больших шмоток. Ты можешь держать в \"Руке\" 6 карт.",
        cardEffect: "bigStuff" + _EFFECTSPLITTER + "manyCardsInHand"
      };
  racesObjArr[1] = {
        id: "152",
        img: _IMGPATH + "cards/" + "152" + ".png",
        name: "Халфлинг",
        cardClass: "halfing",
        description: "На каждом ходу можешь продать одну шмотку за двойную цену (цена других шмоток не меняется).\
        Если твой бросок на Смывку не удался, ты можешь сбросить 1 карту и попробовать еще раз.",
        cardEffect: "sellStuffx2" + _EFFECTSPLITTER + "cardDroppingRun+"
      };
  racesObjArr[2] = {
        id: "082",
        img: _IMGPATH + "cards/" + "082" + ".png",
        name: "Полукровка",
        cardClass: "halfBreed",
        description: "Можешь иметь 2 Расовые карты, а в комплекте все радости и горести обеих Рас. Или возьми одну Расу, получи все ее преимущуства\
        и забудь о недостатках (так монстры, ненавидящие Эльфов, не получат Бонус в бою против полуэльфа). Эта карта теряется, если теряешь все Расы.",
        cardEffect: null
      };
  racesObjArr[3] = {
        id: "147",
        img: _IMGPATH + "cards/" + "147" + ".png",
        name: "Эльф",
        cardClass: "elf",
        description: "+1 к Смывке. Поднимаешься на 1 Уровень за каждого монстра, которого помогаешь убить.",
        cardEffect: "cardDropping+1" + _EFFECTSPLITTER + "getLevelForHelp"
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
        race: null,
        class: null,
        effect: null,
        isBig: false
      };
  stuffObjArr[1] = {
        id: "138",
        img: _IMGPATH + "cards/" + "138" + ".png",
        name: "Чарующая Дуда",
        description: "Этот мелодичный инструмент зачаровывает твоих врагов\
         и даёет тебе +3 к Смывке. В лучае успешной Смывки ты по пути прихватываешь 1 Сокровище втёмную.",
        slotType: "oneHand",
        power: 0,
        cost: 300,
        race: null,
        class: null,
        effect: "runBonus+3" + _EFFECTSPLITTER + "getCardClose1",
        isBig: true
      };
  stuffObjArr[2] = {
        id: "130",
        img: _IMGPATH + "cards/" + "130" + ".png",
        name: "Булава Остроконечности",
        description: null,
        slotType: "oneHand",
        power: +4,
        class: "clirick",
        race: null,
        cost: 600,
        effect: null,
        isBig: false
      };
  stuffObjArr[3] = {
        id: "117",
        img: _IMGPATH + "cards/" + "117" + ".png",
        name: "Бензопила Кровавого Расчленения",
        description: null,
        slotType: "twoHands",
        power: +3,
        cost: 600,
        race: null,
        class: null,
        effect: null,
        isBig: true
      };
  stuffObjArr[4] = {
        id: "139",
        img: _IMGPATH + "cards/" + "139" + ".png",
        name: "Сандалеты-Протекторы",
        description: "Проклятия, которые ты берёшь при открывании Дверей, не срабатывают. Проклятия, наложенные другими игроками, действуют как обычно",
        slotType: "footGear",
        power: null,
        cost: 700,
        race: null,
        class: null,
        effect: null,
        isBig: false
      };
  stuffObjArr[5] = {
        id: "013",
        img: _IMGPATH + "cards/" + "013" + ".png",
        name: "Остроконечная шляпа могущества",
        description: null,
        slotType: "helmet",
        power: +3,
        cost: 400,
        race: null,
        class: "wizard",
        effect: null,
        isBig: false
      };
  stuffObjArr[6] = {
        id: "011",
        img: _IMGPATH + "cards/" + "011" + ".png",
        name: "Мифрильный доспех",
        description: null,
        slotType: "gear",
        power: +3,
        cost: 600,
        race: null,
        class: "!wizard",
        effect: null,
        isBig: true
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
        effect: "anySidePlus3"
      };
  poisionsObjArr[1] = {
        id: "111",
        img: _IMGPATH + "cards/" + "111" + ".png",
        name: "Снотворное Зелье",
        description: "Применить в любом бою, +2 любой стороне. Одноразовая.",
        cost: 100,
        effect: "anySidePlus2"
      };
  poisionsObjArr[2] = {
        id: "110",
        img: _IMGPATH + "cards/" + "110" + ".png",
        name: "Клёвые Шарики",
        description: "Применить в любом бою, +5 любой стороне. Одноразовая.",
        cost: null,
        effect: "anySidePlus5"
      };
  poisionsObjArr[3] = {
        id: "109",
        img: _IMGPATH + "cards/" + "109" + ".png",
        name: "Зелье Идиотской Храбрости",
        description: "Применить в любом бою, +2 любой стороне. Одноразовая.",
        cost: 100,
        effect: "anySidePlus2"
      };
  poisionsObjArr[4] = {
        id: "036",
        img: _IMGPATH + "cards/" + "036" + ".png",
        name: "Зелье Стрелочника",
        description: "Применить в любом бою. Любой другой игрок (по твоему выбору) бьётся с монстром,\
         может просить помощии получает Сокровища и Уровни, если победит.\
         Затем исходный игрок продолжает свой ход и может Чистить Нычки независимо от исхода боя. Одноразовая.",
        cost: 300,
        effect: "redirectMonster"
      };
// -----------------------------------
// ******** bonus cards variables ********
  var bonusesObjArr = [], createdBonusesArr = [];
  bonusesObjArr[0] = {
        id: "092",
        img: _IMGPATH + "cards/" + "092" + ".png",
        name: "1000 голдов",
        description: "Получи уровень.",
        effect: "levelUp1",
        isReusable: false
      };
  bonusesObjArr[1] = {
        id: "137",
        img: _IMGPATH + "cards/" + "137" + ".png",
        name: "Укради уровень",
        description: "Выбери любого игрока и стащи у него уровень. Ты получаешь один Уровень, он теряет.",
        effect: "stealLevel1",
        isReusable: false
      };
  bonusesObjArr[2] = {
        id: "136",
        img: _IMGPATH + "cards/" + "136" + ".png",
        name: "Получи уровень",
        description: "Получи уровень.",
        effect: "levelUp1",
        isReusable: false
      };
