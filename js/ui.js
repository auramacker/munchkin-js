var ui = {
  playersIcons: [{gender: "female", src: "cpu-1f.png", used: false}, {gender: "female", src: "cpu-2f.png", used: false}, {gender: "female", src: "cpu-3f.png", used: false}, {gender: "female", src: "cpu-4f.png", used: false},
   {gender: "female", src: "cpu-5f.png", used: false}, {gender: "female", src: "cpu-6f.png", used: false}, {gender: "male", src: "cpu-1m.png", used: false}, {gender: "male", src: "cpu-2m.png", used: false}, {gender: "male", src: "cpu-3m.png", used: false},
    {gender: "male", src: "cpu-4m.png", used: false},{gender: "male", src: "cpu-5m.png", used: false}, {gender: "male", src: "cpu-6m.png", used: false}],
  showPack: function(){
    var zIndexTreasures = zIndexDoors = 1000;
    var offsetTreasures = 0;
    for(var i = 0; i < treasuresCards.length; i++){
      var treasuresBackfaceCards = _IMGPATH + 'cards/treasures-backface.png';
      $('.pack.pack--treasures').append('\
        <div class="card card--treasures flipped" data-card-id="'+treasuresCards[i].id+'" style="z-index:'+zIndexTreasures+'; margin-left:'+offsetTreasures+'px;"> \
          <div class="flipper">\
            <figure class="front" style="background-image: url('+treasuresCards[i].img+');"></figure> \
            <figure class="back" style="background-image: url('+treasuresBackfaceCards+');"></figure> \
          </div>\
        </div>\
      ');
      zIndexTreasures--;
      if( i <= 10 ) offsetTreasures+=2;
    }
    var offsetDoors = 0;
    for(var i = 0; i < doorsCards.length; i++){
      var doorsBackfaceImg = _IMGPATH + 'cards/doors-backface.png';
      $('.pack.pack--doors').append('\
        <div class="card card--doors flipped" data-card-id="'+doorsCards[i].id+'" style="z-index:'+zIndexDoors+'; margin-left:'+offsetDoors+'px;"> \
          <div class="flipper">\
            <figure class="front" style="background-image: url('+doorsCards[i].img+');"></figure> \
            <figure class="back" style="background-image: url('+doorsBackfaceImg+');"></figure> \
          </div>\
        </div>\
      ');
      zIndexDoors--;
      if( i <= 10 ) offsetDoors+=2;
    }
  },
  showInitNotification: function() {
    $(".init-notification").show();
    $(".init-notification .gender a").click(function(){
      $(".gender a").removeClass("checked");
      $(this).addClass("checked");
    });
  },
  initPlayersNumber: function(){
    $(".cpu-number").show();
  },
  getInitNotifyResult: function(){
    var playerObj = {};
    playerObj.name = $(".init-notification .player-name").val();
    playerObj.gender = $(".gender .checked").text();
    // playerObj.cpu = $(".cpu-number").val();
    playerObj.id = "0001";
    playerObj.isUser = true;
    return playerObj
  },
  getPlayersNumber: function(){
    var number;
    number = $(".cpu-number").val();
    return number
  },
  showPopUp(close) { // empty - open; "close" - close
    var popup = $(".popup");
    if (close == "close") {
      popup.removeClass("is-visible");
    }
    else {
      popup.find(".popup--close").click(function(){
        popup.removeClass("is-visible");
      })
    //  popup.text(text);
      popup.addClass("is-visible");
    }
  },
  showCpuPlayers: function(cpuArr){
    var i = 0, j = 0, length = cpuArr.length, cpuPlayers = [], icons = ui.playersIcons, iLength = ui.playersIcons.length;
    $(".desk ul .player--cpu").hide();
    $(".desk").addClass("is-" + length + "cpu");
    setStartCpuLevel(1);
    for (; i < length; i++) {
      $(".desk ul").find(".player--cpu").eq(i).show().attr("id", cpuArr[i].id); // add id
      $(".desk ul .player--cpu").eq(i).find(".player--info-name").text(cpuArr[i].name); // add name
      $(".desk ul .player--cpu").eq(i).find(".player--info-card-length").text(cpuArr[i].cards.length); // add cards number
      $(".desk ul .player--cpu").eq(i).find(".player--info-equipment").text(cpuArr[i].equipment.length);
      j = 0;
      for (; j < iLength; j++) {
        if ((cpuArr[i].gender == icons[j].gender) && !icons[j].used) {
          $(".desk ul .player--cpu").eq(i).find("img").attr("src", _IMGPATH + "players/" + icons[j].src);
          icons[j].used = true;
          break
        }
      }
    }
  },
  getCardsFromPack: function(pack, player, number){
    var i = 0, showHandTimer = 0, animDelay = 100;
    for(; i < number; i++) {
     if (pack[i].deck == "treasures"){
       $(".pack--treasures").find("div:first").remove();
     }
     else {
       $(".pack--doors").find("div:first").remove();
     }
   }
     model.getCard(pack, player, number);
    if (player.isUser) {
      showHandTimer = animDelay + 100;
      ui.showCardsInHand(showHandTimer);
    }
    else {
      $("#"+ player.id +" .player--info-card-length").text(player.cards.length);
      $("#"+ player.id +" .player--info-equipment").text(player.equipment.length);
    }
    var margin = 0;
    for (var i = 0; i < pack.length; i++) { // pack margins
      $(".card[data-card-id='"+pack[i].id +"']").css("margin-left", margin + "px");
      margin += 2;
    }
    ui.addButtonsToCards();
  },
  showCardsInHand: function(timer){
    $(".player-user--cards").empty();
    for (var i = 0; i < player.cards.length; i++) {
      if (player.cards[i].deck == "treasures") {
        var backface = _IMGPATH + 'cards/treasures-backface.png';
        var cardClass = "card card--treasures";
      }
      else {
        var backface = _IMGPATH + 'cards/doors-backface.png';
        var cardClass = "card card--doors";
      }
      $('.player-user--cards').append('\
        <div class="' + cardClass + '" data-card-id="'+player.cards[i].id+ '"style="animation-delay:' + timer + 'ms;"> \
          <div class="flipper">\
            <figure class="front" style="background-image: url('+player.cards[i].img+');"></figure> \
            <figure class="back" style="background-image: url('+backface+');"></figure> \
          </div>\
        </div>\
      ');
      timer += 200;
    }
  },
  setScreen: function(){
    $(window).on('load', function(){
      if (($(window).width() > 1360) && ($(window).height() > 600)) {
        $("body").css("width", $(window).width());
        $("body").css("height", $(window).height());//
      }
      else {
        $("body").css("width", "1360px");
        $("body").css("height", "720px");
      }
    });
    $(window).on('resize', function(){
      if (($(window).width() > 1360) && ($(window).height() > 600)) {
        $("body").css("width", $(window).width());
        $("body").css("height", $(window).height());
      }
      else {
        $("body").css("width", "1360px");
        $("body").css("height", "720px");
      }
    });
  },
  pullCard: function(pack){
    if (pack == "doors") {
      var card = $(".pack--doors").children().first();
      var cardId = card.attr("data-card-id"), cardType;
      card.removeClass("flipped");
      gameObject.pulledCard = model.returnFromPack("doors", cardId);
      cardType = model.getCardType(gameObject.pulledCard);
      switch (cardType) {
        case "RaceCard":
          ui.showLog("Вы нашли карту Расы!", "info");
        break;
        case "ClassCard":
          ui.showLog("Вы нашли карту Класса!", "info");
        break;
        case "MonsterCard":
        var checkResult;

          player.strength = 1; // setting player for moster test
          player.race1 = {cardClass: "dwarf"};
          player.race2 = {cardClass: "halfing"};
          player.gender = "male";
          // setting

          if (gameObject.battleStatus == "not started") {
            gameObject.battleStatus = "started";
            checkResult = model.checkMonsterCard(gameObject.pulledCard, player);
            for (var i = 0; i < checkResult.length; i++) {
              ui.showLog(checkResult[i], "warning");
            }
            ui.showLog("Вы наткнулись на "+ gameObject.pulledCard.name +"! Сила монстра : " +
            + gameObject.pulledCard.monsterLevel +" единиц.", "danger");
            ui.displayExtraOption("PoisionCard");
            ui.displayExtraOption("BonusCard");
            $(".btn-battle").on("click", function() {
              if (player.strengthInBattle > gameObject.pulledCard.monsterLevel) {
                gameObject.battleStatus = "monster defeated";
                ui.showLog("Вы победили монстра и получаете награду!", "success");
                player.levelUp(gameObject.pulledCard.numLevels);
                ui.getCardsFromPack(treasuresCards, player, gameObject.pulledCard.numTreasures);
                ui.removeFromBattle(gameObject.pulledCard);
              }
              else {
                ui.showLog("Ваша сила ниже чем у монстра. Воспользуйтесь усилителями, бонусами, помощью другого игрока или \
                попытайтесь \"смыться\".", "warning");
              }
              return false
            })
          }
        $("body").on("click", ".player-user--cards .options-list .use", function(){
          if (gameObject.battleStatus == "started") {
            var card;
              card = model.returnCard(player, $(this).parent().parent().attr("data-card-id"));
              $(this).attr("making-choise", "true");
              player.getBonusEffect(card);
          }
        });
        break;
        case "CurseCard":
          ui.showLog("Вы вытащили Проклятие!", "danger");
        break;
      }
    }
  },
  removeFromBattle: function(card){
    ui.addToRebound(card.id, "doors");
    $(".pack--doors .card--doors[data-card-id ='"+ card.id +"']").remove();
    model.moveDoorsRebound(card);
  },
  inventorySetting: function(){
    ui.addButtonsToCards();
    $("body").on("click", ".extra-option", function(){
        // moving to inventory
          if (!$(this).hasClass("has-list")) {
            $(this).toggleClass("has-list");
            $(this).parent().find(".options-list").show();
            $(this).parent().toggleClass("options-opened");
          }
          else {
            $(this).removeClass("has-list");
            $(this).parent().find(".options-list").hide();
            $(this).parent().removeClass("options-opened");
          }
    });
    $(".player-user--inventory").click(function(){
      $('.inventory-wrap').toggleClass('is-visible');
      $(".extra-option").each(function(){
        if ($(this).css("display") == "none") {
          $(this).show();
        }
        else {
          $(this).hide();
        }
      })
    });
    $("body").on("click", ".equip", function(){ // on equip actions
      var currentCard = $(this).closest(".card").attr("data-card-id");
      var cardType = model.getPlayerCardType(player, currentCard);
      var result = false, position;
      console.log(cardType);
      if (cardType == "StuffCard") {
        var slot = model.getStuffSlot(player, currentCard); // checking slot for stuff
        switch(slot) {
          case "oneHand":
            if (!player.leftHand) {
              result = player.equipWeapon(currentCard, "leftHand");
              if (result == true) {
                position = "left-hand";
                player.getWeaponPower();
              }
              else ui.showLog(result, "danger")
            }
            else if (!player.rightHand) {
              result = player.equipWeapon(currentCard, "rightHand");
              if (result == true) {
                position = "right-hand";
                player.getWeaponPower();
              }
              else ui.showLog(result, "danger")
            }
          break;
          case "twoHands": // slot in card
              if (!player.twoHands) {
                result = player.equipWeapon(currentCard, "twoHands");
                if (result == true) {
                  position = "two-hand"; // class in css
                  ui.setOpacity(position, 1);
                  player.getWeaponPower();
                }
                else ui.showLog(result, "danger")
              }
          break;
          case "helmet":
            if (!player.helmet) {
              result = player.equipHelmet(currentCard);
              if (result == true) {
                position = "helmet";
                player.getHelmetPower();
              }
              else ui.showLog(result, "danger")
            }
          break;
          case "gear":
            if (!player.gear) {
              result = player.equipGear(currentCard);
              if (result == true ) {
                position = "gear";
                player.getGearPower();
              }
              else ui.showLog(result, "danger")
            }
          break;
          case "footGear":
            if (!player.footGear) {
              result = player.equipFootGear(currentCard);
              if (result == true) {
                position = "footgear";
                player.getFootGearPower();
              }
              else ui.showLog(result, "danger")
            }
          break;
        }
      }
      else if (cardType == "ClassCard") {
        var cardClass = model.getCardClass(player, currentCard);
        if (cardClass == "superMunchkin" && !player.superMunchkin) {
          player.equipClassRace("superMunchkin", currentCard);
          result = true;
          position = "supermunchkin";
        }
        else if (!player.class1) {
          player.equipClassRace("class1", currentCard);
          result = true;
          position = "class1";
        }
        else if (player.superMunchkin) {
          if (!player.class2) {
            player.equipClassRace("class2", currentCard);
            result = true;
            position = "class2";
          }
        }
      }
      else if (cardType == "RaceCard") {
        var cardClass = model.getCardClass(player, currentCard);
        if (cardClass == "halfBreed" && !player.halfBreed) {
          player.equipClassRace("halfBreed", currentCard);
          result = true;
          position = "halfblood";
        }
        else if (!player.race1) {
          player.equipClassRace("race1", currentCard);
          result = true;
          position = "race1";
        }
        else if (player.halfBreed) {
          if (!player.race2) {
            player.equipClassRace("race2", currentCard);
            result = true;
            position = "race2";
          }
        }
      }
      if (result == true) {
        player.strengthInBattle = player.strength;
        ui.removeFromHand(currentCard);
        ui.setToInventory(position, currentCard);
        model.removeCard(player, currentCard);
        ui.updateStrength();
      }
    });
    $("body").on("click", ".drop", function(){ // on drop action
      var currentCardId = $(this).parent().parent('.card').attr("data-card-id");
      ui.addToRebound(currentCardId);
      ui.removeFromHand(currentCardId);
    });
    $("body").on("click", ".unset-card", function(){ // unset card
      if ($(this).parent().attr("data-card-id")) {
        var cardId = $(this).parent().attr("data-card-id"), cardClass, result;
        cardClass = $(this).parent().attr("class").split(" ")[1];
        $(this).parent().css("background-image", "url(" + _IMGPATH + "cards/" + cardClass + ".png)");
        $(this).parent().removeAttr("data-card-id");
        result = model.unsetCard(player, cardId);
        ui.showCardsInHand(0);
        ui.addButtonsToCards();
        var container = $(".player-user--cards"),
            scrollTo = $(".player-user--cards").children().first();
            console.log(scrollTo);
        container.scrollLeft(
          scrollTo.offset().left - container.offset().left + container.scrollLeft() - 20
        )
      }
    });
  },
  showLog: function(text, type){ // success| warning| info| danger
    var date = new Date();
    function addZero(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }
    var h = addZero(date.getHours());
    var m = addZero(date.getMinutes());
    var s = addZero(date.getSeconds());
    var time = h + ":" + m + ":" + s;
    $(".message-list").prepend("<p class='"+ type +"'><time>"+ time +"&nbsp;&nbsp;</time><span>"+ text +"</span></p>");
    ui.setOpacity("message-list", 1);
    setTimeout(function(){
      ui.setOpacity("message-list", 0.75);
    }, 2000);

  },
  updateStrength: function(){
    $(".inventory-level").text(player.strength);
  },
  setOpacity: function(position, opacity) {
    $("." + position).css("opacity", opacity);
  },
  setToInventory: function(position, cardId) {
    var img = model.getCardImage(player, cardId);
    $("." + position ).css("background-image", "url("+ img +")");
    $("." + position ).attr("data-card-id", cardId);
    $("." + position + " .unset-card").show();
  },
  removeFromHand: function(cardId){
    $(".player-user--cards .card[data-card-id='"+ cardId +"']").remove();
  },
  addButtonsToCards: function(){
    var races = model.getCardTypeId(player, "RaceCard"),
        classes = model.getCardTypeId(player, "ClassCard"),
        stuff = model.getCardTypeId(player, "StuffCard"),
        bonuses = model.getCardTypeId(player, "BonusCard"),
        poisions = model.getCardTypeId(player, "PoisionCard"),
        id = [] ;
    id = races.concat(classes, stuff, bonuses, poisions);
      for (var i = 0; i < id.length; i++) {
        var isCost = model.isHasCost(player, id[i]), costResult = "", bonusesPoisions = "", equip = "<span class='btn equip'>Экипировать</span>";
        if (isCost) {
          costResult = "<span class='btn sell'>Продать</span>";
        }
        if ((model.getCardType(id[i]) == "PoisionCard") || (model.getCardType(id[i]) == "BonusCard")) {
          equip = "";
          bonusesPoisions = "<span class='btn use'>Использовать</span>";
        }
        if ($(".card[data-card-id='"+ id[i] +"'] .extra-option").length == 0) {
          $(".card[data-card-id='"+ id[i] +"']").toggleClass("has-option");
          $(".card[data-card-id='"+ id[i] +"']").append("<div class='extra-option'>+</div>");
          // $(".card[data-card-id='"+ id[i] +"'] .extra-option").toggleClass("has-list");
          $(".card[data-card-id='"+ id[i] +"']").append("<div class='options-list'>\
          "+ bonusesPoisions + "\
          "+ equip +"\
           " + costResult + "\
          <span class='btn drop'>Скинуть</span>\
          </div>");
        }
      }
      $(".use").attr("making-choise", "false");
      if ($(".inventory-wrap").hasClass("is-visible")) {
        $(".extra-option").show();
      }
      else $(".extra-option").hide();
      $(".options-list").hide();
  },
  addToRebound: function(cardId, from){
    var currentCard, cardBackface, cardPack;
    if (arguments[1] != undefined) {
      currentCard = model.returnCard("doors", cardId);
    }
    else {
      currentCard = model.returnCard(player, cardId);
    }
    cardBackface = (currentCard.deck == "doors") ?  _IMGPATH + 'cards/doors-backface.png' : _IMGPATH + 'cards/treasures-backface.png';
    cardPack = (currentCard.deck == "doors") ? "card--doors" : "card--treasures";
    $('.pack--rebound').append('<div class="card '+ cardPack +' flipped" data-card-id="'+currentCard.id+'"> \
        <div class="flipper">\
          <figure class="front" style="background-image: url('+currentCard.img+');"></figure> \
          <figure class="back" style="background-image: url('+cardBackface+');"></figure> \
        </div>\
      </div>\
    ');
    model.moveToRebound(player, cardId);
  },
  displayExtraOption: function(cardType) {
    var id = [], i = 0;
    id = model.getCardTypeId(player, cardType);
    var length = id.length;
    for (; i < length; i++) {
      $(".player-user--cards .card[data-card-id = "+ id[i] +"]").find(".extra-option").show();
    }
  }
}
