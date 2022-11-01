const values = Array.from(document.querySelectorAll('.graph-column'))
const DayValue = Array.from(document.querySelectorAll('.value-day'))

values.forEach(e => {
    let i = values.indexOf(e)

    e.addEventListener('mouseover', () => {
        e.classList.add('active')
        DayValue[i].classList.add('value-day-active')        
    })

    e.addEventListener('mouseout', () => {
        e.classList.remove('active')
        DayValue[i].classList.remove('value-day-active')   
    })
})

