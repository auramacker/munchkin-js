var ui = {
  showPack: function(){
    for(var i = 0; i < treasuresCards.length; i++){

      var treasuresImg = _IMGPATH + 'card-back.png';

      $('.pack.pack--treasures').append('<div class="card flipped"> \
          <figure class="front"><img src="'+treasuresCards[i].img+'" alt=""></figure> \
          <figure class="back"><img src="'+treasuresImg+'" alt=""></figure> \
        </div>');






    }
  }
}

//
//
//
// id: 2,
// img: _IMGPATH + "cards-sprite.png",
// name: "3872 орка",
// description: "+6 против дварфов (там старые счёты).",
// effect: "Брось кубик. На 2 и меньше ты затоптан до смерти, иначе потеряй столько уровней, сколько выпало.",
// numTreasures: 3,
// monsterLevel: 10,
// looseLevel: "dice",
// gender: null,
// genderBonus: null,
// race: "dwarf",
// raceBonus: +6,
// class: null,
// classBonus: null
// };
