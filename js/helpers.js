function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
function getDiceNumber(){
    return getRandomInt(1, 6)
}

function svgPlayerLevel(element, level){

  element.each(function(){
    var t = $(this),
    circle = t.find('.player--svg-level-bar'),
    label = t.find('.player--label-level'),
    r = circle.attr('r'),
    c = Math.PI * ( r * 2 );

    if ( level <= _MINLEVEL ) level = _MINLEVEL;
    if ( level >= _MAXLEVEL ) level = _MAXLEVEL;

    var strokeDashoffset = ( (_MAXLEVEL - level ) / _MAXLEVEL ) * c;

    circle.css({ strokeDashoffset: strokeDashoffset });
    label.text(level);
  });



}

function setStartCpuLevel(level){
	svgPlayerLevel($('.player .player--avatar'), level);
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

$(window).ready(function(){
  setTimeout(function(){
    $('.preloader').fadeOut(300);
  }, 600);
});