require('../stylesheet/style.scss');
const selectric = require('selectric');
const noUiSlider = require('nouislider');
const $ = require('jquery');

$(function() {
  $('select').selectric();
});

$(function(){
	$('.checkbox').click(function(){
		$('.check__info').toggleClass('hidden');
	});
});

var rangeSlider = document.getElementById('slider-range');

noUiSlider.create(rangeSlider, {
	start: [ 15 ],
	step: 1,
	range: {
		'min': [  1 ],
		'max': [ 30 ]
	}
});

var rangeSliderValueElement = document.querySelector('.noUi-handle');

function getNumEnding(iNumber, aEndings){
    var sEnding, i;
    iNumber = iNumber % 100;
    if (iNumber>=11 && iNumber<=19) {
        sEnding=aEndings[2];
    }
    else {
        i = iNumber % 10;
        switch (i)
        {
            case (1): sEnding = aEndings[0]; break;
            case (2):
            case (3):
            case (4): sEnding = aEndings[1]; break;
            default: sEnding = aEndings[2];
        }
    }
    return sEnding;
}

rangeSlider.noUiSlider.on('update', function( values, handle ) {
	var ending = ' ' + getNumEnding(+values[handle], ['день', 'дня', 'дней']);

	rangeSliderValueElement.innerHTML = +values[handle] + ending;
});