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
            <figure class="front"><img src="'+treasuresCards[i].img+'"></figure> \
            <figure class="back"><img src="'+treasuresBackfaceCards+'"></figure> \
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
            <figure class="front"><img src="'+doorsCards[i].img+'"></figure> \
            <figure class="back"><img src="'+doorsBackfaceImg+'"></figure> \
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
    model.getCard(pack, player, number);
    for (; i < player.cards.length; i++) {
      //$(".card[data-card-id='" + player.cards[i].id + "']").css("animation-delay", animDelay + "ms");
      //$(".card[data-card-id='" + player.cards[i].id + "']").addClass("removed");
      $(".card[data-card-id='" + player.cards[i].id + "']").remove();
      //animDelay += 200;
    }
    showHandTimer = animDelay + 100;
    // setTimeout(function(){
    //
    //   $(".card.removed").remove();
    // }, showHandTimer);

    // Debug
    // $('.pack').each(function(){
    //
    //   var p = $(this);
    //
    //   p.find('.card:not(.removed)').eq(0).on('click', function(){
    //     $(this).toggleClass('flipped');
    //   });
    //
    // });
    ui.showCardsInHand(showHandTimer);
    var margin = 0;
    for (var i = 0; i < pack.length; i++) {
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
            <figure class="front"><img src="'+player.cards[i].img+'"></figure> \
            <figure class="back"><img src="'+backface+'"></figure> \
          </div>\
        </div>\
      ');
      timer += 200;
    }



  }
}
