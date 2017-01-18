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
  inventorySetting: function(){
    $(".player-user--inventory").click(function(){
        var races = model.getCardTypeId(player, "RaceCard"),
            classes = model.getCardTypeId(player, "ClassCard"),
            stuff = model.getCardTypeId(player, "StuffCard"),
            id = [] ;
        id = races.concat(classes, stuff);
          for (var i = 0; i < id.length; i++) {
            var isCost = model.isHasCost(player, id[i]), costResult = "";
            if (isCost) {
              costResult = "<span class='btn sell'>Продать</span>";
            }
            if ($(".card[data-card-id='"+ id[i] +"'] .extra-option").length == 0) {
              $(".card[data-card-id='"+ id[i] +"']").toggleClass("has-option");
              $(".card[data-card-id='"+ id[i] +"']").append("<div class='extra-option'>+</div>");
              // $(".card[data-card-id='"+ id[i] +"'] .extra-option").toggleClass("has-list");
              $(".card[data-card-id='"+ id[i] +"']").append("<div class='options-list'>\
              <span class='btn equip'>Экипировать</span>\
               " + costResult + "\
              <span class='btn drop'>Скинуть</span>\
              </div>");
              $(".options-list").hide();
            }
          }
        $(".extra-option").on("click", function(){
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
        $(".options-list .equip").on("click", function(){ // on equip actions
          var currentCard = $(this).closest(".card").attr("data-card-id");
          var cardType = model.getCardType(player, currentCard);
          var result = false, position;
          if (cardType == "StuffCard") {
            var slot = model.getStuffSlot(player, currentCard); // checking slot for stuff
            switch(slot) {
              case "oneHand":
                if (!player.leftHand) {
                  player.equipWeapon(currentCard, "leftHand");
                  result = true;
                  position = "left-hand";
                  player.getWeaponPower();
                }
                else if (!player.rightHand) {
                  player.equipWeapon(currentCard, "rightHand");
                  result = true;
                  position = "right-hand";
                  player.getWeaponPower();
                }
              break;
              case "twoHands": // slot in card
                  if (!player.twoHands) {
                    player.equipWeapon(currentCard, "twoHands");
                    result = true;
                    position = "two-hand"; // class in css
                    player.getWeaponPower();
                  }
              break;
              case "helmet":
                if (!player.helmet) {
                  player.equipHelmet(currentCard);
                  result = true;
                  position = "helmet";
                  player.getHelmetPower();
                }
              break;
              case "gear":
                if (!player.gear) {
                  player.equipGear(currentCard);
                  result = true;
                  position = "gear";
                  player.getGearPower();
                }
              break;
              case "footGear":
                if (!player.footGear) {
                  player.equipFootGear(currentCard);
                  result = true;
                  position = "footgear";
                  player.getFootGearPower();
                }
              break;
            }
          }
          else if (cardType == "ClassCard") {
            if (!player.class1) {
              player.equipClass(currentCard);
              result = true;
              position = "class1";
            }
          }
          else if (cardType == "RaceCard") {
            if (!player.race1) {
              player.equipRace(currentCard);
              result = true;
              position = "race1";
            }
          }
          if (result) {
            ui.removeFromHand(currentCard);
            ui.setToInventory(position, currentCard);
            model.removeCard(player, currentCard);
            ui.updateStrength();
          }
        })
        $(".options-list .drop").on("click", function(){ // on drop action
          var currentCardId = $(this).closest(".card").attr("data-card-id");
          ui.addToRebound(currentCardId);
          ui.removeFromHand(currentCardId);
        });
      });
    },
  updateStrength: function(){
    $(".inventory-level").text(player.strength);
  },
  setToInventory: function(position, cardId) {
    var img = model.getCardImage(player, cardId);
    $("." + position ).css("background-image", "url("+ img +")");
    $("." + position ).attr("data-card-id", cardId);
  },
  removeFromHand: function(cardId){
    $(".card[data-card-id='"+ cardId +"']").remove();
  },
  addToRebound: function(cardId){
    var currentCard, cardBackface;
    currentCard = model.returnCard(player, cardId);
    cardBackface = (currentCard.deck == "doors") ?  _IMGPATH + 'cards/doors-backface.png' : _IMGPATH + 'cards/treasures-backface.png';

    $('.pack.pack--rebound').append('\
      <div class="card card--treasures flipped" data-card-id="'+currentCard.id+'"> \
        <div class="flipper">\
          <figure class="front" style="background-image: url('+currentCard.img+');"></figure> \
          <figure class="back" style="background-image: url('+cardBackface+');"></figure> \
        </div>\
      </div>\
    ');
    model.moveToRebound(player, cardId);
  }
}
