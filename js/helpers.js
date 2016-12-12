function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
function getDiceNumber(){
    return getRandomInt(1, 6)
}



function svgPlayerLevel(element, level){

	var circle = element.find('.svg-level--bar');


  	var r = circle.attr('r');
  	var c = Math.PI * ( r * 2 );
 
  	if ( level < _MINLEVEL ) level = _MINLEVEL;
  	if ( level > _MAXLEVEL ) level = _MAXLEVEL;
  
  	var strokeDashoffset = ( (_MAXLEVEL - level ) / _MAXLEVEL ) * c;
  
  	circle.css({ strokeDashoffset: strokeDashoffset });

}



$('.cl').click(function(){
	var gr = getRandomInt(0, 10);
	$(this).text('Change level ' + gr);
	svgPlayerLevel($('.svg-level'), gr);
});