function initCards(){
  var monster1, monster1obj;
  monster1obj = {
    id: 2,
    img: "",
    name: "3872 орка",
    description: "описание",
    numTreasures: 3,
    monsterLevel: 10,
    looseLevel: 2,
    gender: "male",
    race: null,
    class: null
  }
  monster1 = new Monster(monster1obj, null);
  monster1.getGenderBonus();
  console.log(monster1);
}
