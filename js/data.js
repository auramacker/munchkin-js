function Monster(obj, dice){ // {id, img, name, description, numTreasures, monsterLevel, looseLevel, gender, race, class}
  this.id = obj.id,
  this.img = obj.img,
  this.name = obj.name,
  this.description = obj.description,
  this.numTreasures = obj.numTreasures,
  this.monsterLevel = obj.monsterLevel,
  this.looseLevel = obj.looseLevel,
  this.gender = obj.gender,
  this.getGenderBonus = function(){
    if (this.gender == "male") {
      this.monsterLevel += 1;
    }

  },
  this.race = obj.race,
  this.getRaceBonus = function(){

  },
  this.class = obj.class,
  this.getClaccBonus = function(){

  }
}
