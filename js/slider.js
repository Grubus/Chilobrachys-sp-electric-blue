let arrowNext = document.querySelector('#slider_arrow_next')
let arrowPrevious = document.querySelector('#slider_arrow_previous')
let activeNumber = 0

const sliderEnum = Object.freeze({ 0: '#main_page', 1: '#first_spec', 2: '#second_spec', 3: '#third_spec', 4: '#fourth_spec' })

let bottom = document.querySelector('#slider_pointers').children

document.querySelector(sliderEnum[0]).addEventListener('click', () => {
    set_active(true, 0)
})
document.querySelector(sliderEnum[1]).addEventListener('click', () => {
    set_active(true, 1)
})
document.querySelector(sliderEnum[2]).addEventListener('click', () => {
    set_active(true, 2)
})
document.querySelector(sliderEnum[3]).addEventListener('click', () => {
    set_active(true, 3)
})
document.querySelector(sliderEnum[4]).addEventListener('click', () => {
    set_active(true, 4)
})
bottom[0].addEventListener('click', () => {
    set_active(true, 0)
})
bottom[1].addEventListener('click', () => {
    set_active(true, 1)
})
bottom[2].addEventListener('click', () => {
    set_active(true, 2)
})
bottom[3].addEventListener('click', () => {
    set_active(true, 3)
})
bottom[4].addEventListener('click', () => {
    set_active(true, 4)
})
arrowNext.addEventListener('click', () => {
    set_active(true)
})

arrowPrevious.addEventListener('click', () => {
    set_active(false)
})

function set_active(direction, value = null) {
    document.querySelector('#menu').querySelector(sliderEnum[activeNumber]).querySelector('.underscore').className = 'underscore'
    document.querySelector('#slider_content').querySelector(sliderEnum[activeNumber]).className = ''
    document.querySelector('#slider_pointers').children[activeNumber].className = 'slider_pointer'
    document.querySelector('#content').children[activeNumber].className = ''

    if (value == null) {
        if (direction) {
            if (activeNumber == 4) activeNumber = 0
            else activeNumber++
        } else {
            if (activeNumber == 0) activeNumber = 4
            else activeNumber--
        }
    } else {
        activeNumber = value
    }

    document.querySelector('#slider_content').querySelector(sliderEnum[activeNumber]).className = 'active'
    document.querySelector(sliderEnum[activeNumber]).querySelector('.underscore').className = 'underscore active'
    document.querySelector('#slider_pointers').children[activeNumber].className += ' active'
    document.querySelector('#content').children[activeNumber].className = 'active'

}

//animacja slider
setTimeout(()=>{
	let sliderElement = document.getElementsByClassName('slaider-child');
	document.getElementById('slider1').style.opacity='1';
	for (let i=0; i<sliderElement.length; i++){
		sliderElement[i].style.animation = 'test 1s ease-in-out';
		sliderElement[i].style.transform = 'scaleY(1)';
	}

},1000)


var scroll = window.requestAnimationFrame ||
         function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('#kolorowe-bloczki'); 
function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
    if (isElementInViewport(element)) {
        element.classList.add('is-visible-1');
    } else {
        element.classList.remove('is-visible-1');
    }
    });

    scroll(loop);
}

loop();

function isElementInViewport(el) {
if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
}
var rect = el.getBoundingClientRect();
return (
    (rect.top <= 0
    && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
);
}
