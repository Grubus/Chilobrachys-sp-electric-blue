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
    let oldActive = sliderEnum[activeNumber]

    document.querySelector(oldActive).className = document.querySelector(oldActive).className.slice(0, 11)
    document.querySelector('#slider_pointers').children[activeNumber].className = document.querySelector('#slider_pointers').children[activeNumber].className.slice(0, 14)
    if (direction) {
        if (activeNumber == 4) activeNumber = 0
        else activeNumber++
    } else {
        if (activeNumber == 0) activeNumber = 4
        else activeNumber--
    }

    let newActive = sliderEnum[activeNumber]

    document.querySelector('#slider_pointers').children[activeNumber].className = document.querySelector('#slider_pointers').children[activeNumber].className + " active"
    document.querySelector(newActive).className = document.querySelector(newActive).className + " active"
}