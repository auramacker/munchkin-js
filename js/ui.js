var ui = {
  showPack: function(){
    var zIndexTreasures = zIndexDoors = 1000;
    var offsetTreasures = 0;
    for(var i = 0; i < treasuresCards.length; i++){
      var treasuresBackfaceCards = _IMGPATH + 'cards/treasures-backface.png';
      $('.pack.pack--treasures').append('\
        <div class="card card--treasures flipped" data-card-id="'+treasuresCards[i].id+'" style="z-index:'+zIndexTreasures+'; margin-left:'+offsetTreasures+'px;"> \
          <figure class="front"><img src="'+treasuresCards[i].img+'"></figure> \
          <figure class="back"><img src="'+treasuresBackfaceCards+'"></figure> \
        </div>\
      ');
      zIndexTreasures--;
      offsetTreasures+=2;
    }
    var offsetDoors = 0;
    for(var i = 0; i < doorsCards.length; i++){
      var doorsBackfaceImg = _IMGPATH + 'cards/doors-backface.png';
      $('.pack.pack--doors').append('\
        <div class="card card--doors flipped" data-card-id="'+doorsCards[i].id+'" style="z-index:'+zIndexDoors+'; margin-left:'+offsetDoors+'px;"> \
          <figure class="front"><img src="'+doorsCards[i].img+'"></figure> \
          <figure class="back"><img src="'+doorsBackfaceImg+'"></figure> \
        </div>\
      ');
      zIndexDoors--;
      offsetDoors+=2;
    }
  }
  showInitNotification: function() {

  }
}
