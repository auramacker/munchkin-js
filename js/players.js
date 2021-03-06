function Player(objPlayer){
  this.isUser = objPlayer.isUser,
  this.id = objPlayer.id,
  this.name = objPlayer.name,
  this.gender = objPlayer.gender,
  this.level = 5,
  this.strength = _MINLEVEL,
  this.strengthInBattle = this.strength,
  this.levelInBattle = this.level,
  this.coins = 0,
  this.class1 = null,
  this.class2 = null,
  this.race1 = null,
  this.race2 = null,
  this.superMunchkin = null,
  this.halfBreed = null,
  this.helmet = null,
  this.gear = null,
  this.rightHand = null,
  this.leftHand = null,
  this.twoHands = null,
  this.footGear = null,
  this.isHasBigItem = false,
  this.cards = [],
  this.curse = [], // проклятие
  this.equipment = [],
  this.cardsSize = _CARDSSIZE,
  this.runPoints = 4,
  this.levelUp = function(level){
      this.level += level;
      if (this.level > _MAXLEVEL) this.level = _MAXLEVEL;
      svgPlayerLevel($('.player-user--human .player--avatar'), player.level);
      ui.showLog("Ваш Уровень повышен!", "success");
  },
  this.getDownLevel = function(levels){
    if (this.level < _MAXLEVEL) {
      this.level++
    }
  },
  this.looseLevel = function(num){
    this.level -= num;
    if (this.level < _MINLEVEL) this.level = _MINLEVEL;
    svgPlayerLevel($('.player-user--human .player--avatar'), player.level);
    ui.showLog("Ваш Уровень понижен!", "danger");
  },
  this.getBonusEffect = function(card) {
    var effect, qt;
    qt = +card.effect.charAt(card.effect.length-1);
    effect = card.effect.slice(0, -1);
    switch(effect) {
      case "anySidePlus":
        ui.showLog("Выберите сторону для применения. Вы можете увеличить силу монстра, либо свою силу.", "info");
        $("body").on("click", ".card-in-battle .card", function(){
          if ((gameObject.battleStatus == "started") && ($(".player-user--cards .card[data-card-id='"+card.id+"'] .use").attr("making-choise") == "true")) {
            gameObject.pulledCard.monsterLevel += qt;
            ui.showLog("Вы усилили монстра на "+ qt +" единиц!", "success");
            ui.showLog("Сила монстра: "+ gameObject.pulledCard.monsterLevel +" единиц!", "danger");
            $(".player-user--cards .card[data-card-id='"+card.id+"'] .use").attr("making-choise", "false");
            $(".player-user--cards .card[data-card-id='"+card.id+"'] .drop").click();
            ui.hideHint();
            ui.showMonsterPower(gameObject.pulledCard.monsterLevel);
          }
        })
        $("body").on("click", ".player-user--human", function(){
          if ((gameObject.battleStatus == "started") && ($(".player-user--cards .card[data-card-id='"+card.id+"'] .use").attr("making-choise") == "true")) {
            player.strengthInBattle += qt;
            ui.setInventoryLevel(player.strengthInBattle);
            ui.showLog("Вы усилили свою силу на "+ qt +" единиц!" + "Ваша сила: "+ player.strengthInBattle +" единиц!", "success");
            $(".player-user--cards .card[data-card-id='"+card.id+"'] .use").attr("making-choise", "false");
            $(".player-user--cards .card[data-card-id='"+card.id+"'] .drop").click();
            ui.hideHint();
            $(".player--svg-level-bar").css("cursor", "default");
          }
        })
      break;
      case "levelUp":
        player.levelUp(qt);
        player.strengthInBattle += qt;
        ui.showLog("Вы повысили свой уровень на "+ qt +" единиц! Ваш уровень: "+player.level+"", "success");
        $(".player-user--cards .card[data-card-id='"+card.id+"'] .drop").click();

      break;
    }
  },
  this.equipWeapon = function(cardId, where){
    var i = 0; length = this.cards.length, result = false;
    for (; i < length; i++) {
      if (this.cards[i].id == cardId) {
        result = this.checkWeapon(this.cards[i]);
        if (result == true) {
          if (where == "twoHands" && !this.twoHands) {
            this[where] = this.cards[i];
            this.leftHand = "blocked";
            this.rightHand = "blocked";
            return result
          }
          else if (!this[where]) {
            this[where] = this.cards[i];
            this.twoHands = "blocked";
            return result
          }
        }
        else return result
      }
    }
  },
  this.checkWeapon = function(card){
    var result = {}, lastResult;
    if (card.isBig) {
      if (!this.isHasBigItem) {
        this.isHasBigItem = true;
        result.isBig = true;
      }
      else {
        result.isBig = "You already have big item!";
      }
    }
    else {
      result.isBig = true;
    }
    if (card.class == null) {
      result.class = true;
    }
    else if ((this.class1 != null) || (this.class2 != null)) {
      if ((card.class == this.class1.cardClass) || (card.class == this.class2.cardClass)) {
        result.class = true;
      }
      else {
        result.class = "You have not " + card.class + " class!";
      }
    }
    else {
      result.class = "You have not " + card.class + " class!";
    }
    for (var prop in result) {
      if (result[prop] != true) {
        lastResult = result[prop];
        return lastResult;
      }
      else {
        lastResult = true;
      }
    }
    return lastResult
  },
  this.getWeaponPower = function(){
    if ((this.twoHands != "blocked") && (this.twoHands)) {
      this.strength += this.twoHands.power;
    }
    else if (this.leftHand && this.rightHand && (this.leftHand  != "blocked") && (this.rightHand != "blocked")) {
      this.strength -= this.leftHand.power;
      this.strength += this.leftHand.power + this.rightHand.power;
    }
    else if (this.leftHand && (this.leftHand != "blocked")) {
      this.strength += this.leftHand.power ;
    }
    else if (this.rightHand && (this.rightHand != "blocked")) {
      this.strength += this.rightHand.power;
    }
  },
  this.equipHelmet = function(cardId) {
    var i = 0; length = this.cards.length, result = false;
    for (; i < length; i++) {
      if (this.cards[i].id == cardId) {
        result = this.checkHelmet(this.cards[i]);
        if (result == true) {
          this.helmet = this.cards[i];
          return result
        }
        else return result
      }
    }
  },
  this.getHelmetPower = function(){
    this.strength += this.helmet.power;
  },
  this.checkHelmet = function(card){
    var result = {}, lastResult;
    if (card.isBig) {
      if (!this.isHasBigItem) {
        this.isHasBigItem = true;
        result.isBig = true;
      }
      else {
        result.isBig = "You already have big item!";
      }
    }
    else {
      result.isBig = true;
    }
    if (card.class == null) {
      result.class = true;
    }
    else if ((this.class1 != null) || (this.class2 != null)) {
      if ((card.class == this.class1.cardClass) || (card.class == this.class2.cardClass)) {
        result.class = true;
      }
      else {
        result.class = "You have not " + card.class + " class!";
      }
    }
    else {
      result.class = "You have not " + card.class + " class!";
    }
    for (var prop in result) {
      if (result[prop] != true) {
        lastResult = result[prop];
        return lastResult;
      }
      else {
        lastResult = true;
      }
    }
    return lastResult
  },
  this.equipGear = function(cardId){
    var i = 0; length = this.cards.length, result = false;
    for (; i < length; i++) {
      if (this.cards[i].id == cardId) {
        result = this.checkGear(this.cards[i]);
        if (result == true) {
          this.gear = this.cards[i];
          return result
        }
        else return result
      }
    }
  },
  this.getGearPower = function(){
    this.strength += this.gear.power;
  },
  this.checkGear = function(card){
    var result = {}, lastResult;
    if (card.isBig) {
      if (!this.isHasBigItem) {
        result.isBig = true;
      }
      else {
        result.isBig = "You already have big item!";
      }
    }
    else {
      result.isBig = true;
    }
    if (card.class == null) {
      result.class = true;
    }
    else if ((this.class1 != null) || (this.class2 != null)) {
      var not, notClass;
      not = card.class.search("!");
      if (not != -1) {
        notClass = card.class.slice(1);
        if ((notClass == this.class1.cardClass) || (notClass == this.class2.cardClass)) {
          result.class = "You have " + notClass + " class!";
        }
      }
      else {
        if ((card.class == this.class1.cardClass) || (card.class == this.class2.cardClass)) {
          result.class = true;
        }
        else {
          result.class = "You have not " + card.class + " class!";
        }
      }
    }
    else {
      var not;
      not = card.class.search("!");
      if (not != -1) {
        result.class = true;
      }
      else {
        result.class = "You have not " + card.class + " class!";
      }
    }
    for (var prop in result) {
      if (result[prop] != true) {
        lastResult = result[prop];
        return lastResult;
      }
      else {
        lastResult = true;
      }
    }
    if (lastResult == true) {
      if (result.isBig == true) {
        this.isHasBigItem = true;
      }
    }
    return lastResult
  },
  this.equipFootGear = function(cardId){
    var i = 0; length = this.cards.length, result = false;
    for (; i < length; i++) {
      if (this.cards[i].id == cardId) {
        result = this.checkFootGear(this.cards[i]);
        if (result == true) {
          this.footGear = this.cards[i];
          return result
        }
        else return result
      }
    }
  },
  this.getFootGearPower = function(){
    this.strength += this.footGear.power;
  },
  this.checkFootGear = function(card) {
    var result = {}, lastResult;
    if (card.isBig) {
      if (!this.isHasBigItem) {
        this.isHasBigItem = true;
        result.isBig = true;
      }
      else {
        result.isBig = "You already have big item!";
      }
    }
    else {
      result.isBig = true;
    }
    if (card.class == null) {
      result.class = true;
    }
    else if ((this.class1 != null) || (this.class2 != null)) {
      if ((card.class == this.class1.cardClass) || (card.class == this.class2.cardClass)) {
        result.class = true;
      }
      else {
        result.class = "You have not " + card.class + " class!";
      }
    }
    else {
      result.class = "You have not " + card.class + " class!";
    }
    for (var prop in result) {
      if (result[prop] != true) {
        lastResult = result[prop];
        return lastResult;
      }
      else {
        lastResult = true;
      }
    }
    return lastResult
  },
  this.equipClassRace = function(where ,cardId) {
    var i = 0; length = this.cards.length, result = false;
    for (; i < length; i++) {
      if (this.cards[i].id == cardId) {
        this[where] = this.cards[i];
        break;
      }
    }
  },
  this.equipClass = function(cardId){
    var i = 0; length = this.cards.length, result = false;
    for (; i < length; i++) {
      if (this.cards[i].id == cardId) {
        this.class1 = this.cards[i];
      }
    }
  },
  this.applyMonseterEffect = function(monster){
    var effect = monster.looseLevel;
    switch(effect) {
      case "dice":
        $(".dice-container").attr("target", "punish");
        $(".dice-container").attr("status", "false");
        setTimeout(function(){
          ui.showDice();
        }, 500)
      break;
      case "loseClass":
      var result1, result2;
        setTimeout(function(){
          result1 = player.dropClass("class1");
          result2 = player.dropClass("class2");
          if (result1 || result2) {
            showLog("Вы потеряли класс(-ы-)");
          }
          else {
            player.looseLevel(3);
          }
          setTimeout(function(){
            ui.removeFromBattle(gameObject.pulledCard);
            gameObject.battleStatus = "not started";
          }, 900);
        },500)
      break;
    }
  },
  this.dropClass = function(type){
    ui.addToRebound(null, type);
    if ($(".inventory ."+type+"").attr("data-card-id")) {
      $(".inventory ."+type+"").css("background-image", "url(" + _IMGPATH + "cards/" + type + ".png)"); // default bg to slot
      $(".inventory ."+type+"").removeAttr("data-card-id"); //clean attr
    }
    else {
      return false
    }
    model.moveEquipRebound(type);
    return true
  },
  this.applyDiceEffect = function(){
    setTimeout(function(){
      if (gameObject.punishResult <= 2) {
        player.death();
        setTimeout(function(){
          ui.removeFromBattle(gameObject.pulledCard);
          gameObject.battleStatus = "not started";
        }, 900);
      }
      else {
        player.looseLevel(gameObject.punishResult);
        ui.showLog("Вы потеряли " + gameObject.punishResult + " уровней!");
        setTimeout(function(){
          ui.removeFromBattle(gameObject.pulledCard);
          gameObject.battleStatus = "not started";
        }, 900);
      }
      setTimeout(function(){
        ui.hideDice();
        $(".dice-container").attr("target", "");
      }, 500);
    }, 650);
  },
  this.death = function(){
    $(".player-user--cards .card").each(function(){
      var cardId = $(this).attr("data-card-id");
      ui.dropFromHand(cardId);
    })
    ui.showLog("Ты мертв!");
  }
}
