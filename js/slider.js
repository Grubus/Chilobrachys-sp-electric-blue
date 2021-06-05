let arrowNext = document.querySelector('#slider_arrow_next')
let arrowPrevious = document.querySelector('#slider_arrow_previous')
let activeNumber = 0

const sliderEnum = Object.freeze({ 0: '#main_page', 1: '#first_spec', 2: '#second_spec', 3: '#third_spec', 4: '#fourth_spec' })

arrowNext.addEventListener('click', () => {
    set_active(true)
})

arrowPrevious.addEventListener('click', () => {
    set_active(false)
})

function set_active(direction) {
    document.querySelector(sliderEnum[activeNumber]).querySelector('.underscore').className = 'underscore'
    document.querySelector('#slider_pointers').children[activeNumber].className = 'slider_pointer'
    document.querySelector('#content').children[activeNumber].className = ''

    if (direction) {
        if (activeNumber == 4) activeNumber = 0
        else activeNumber++
    } else {
        if (activeNumber == 0) activeNumber = 4
        else activeNumber--
    }

    document.querySelector(sliderEnum[activeNumber]).querySelector('.underscore').className = 'underscore active'
    document.querySelector('#slider_pointers').children[activeNumber].className += ' active'
    document.querySelector('#content').children[activeNumber].className = 'active'

}