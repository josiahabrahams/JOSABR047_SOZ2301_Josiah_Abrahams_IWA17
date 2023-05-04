// scripts.js

const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// Only edit below 

const createArray = (length) => {
    const result = []  
  
      for (let i=0 ;i <length ;i=i+1) {
         result.push(i)
      }
  return result
  }

  const createData = () => {
    const current = new Date()
    current.setDate(1)
      const startDay = current.getDay()
     const daysInMonth = getDaysInMonth(current)
    const  weeks = createArray(5)
  const  days = createArray(7)
  
  const result=[]
  let  value = null

    for (const weekIndex of weeks) {
        value = [{
            week: weekIndex + 1,
            days: []
        }]

        for (const dayIndex in days) {
            value = parseInt(dayIndex) - startDay
          const  isValid = days > 0 && value <= daysInMonth

            result[0]=[{
                dayOfWeek: parseInt(dayIndex) + 1,
                value: isValid && days,
            }]
         
        }
    }
}

const addCell = (existing, classString, value) => {
    
    const result = /* html */ `
        <td ${classString}>
            ${value}
        </td>

        ${existing}
    `
}

const createHtml = (data) => {
    let result = ''

    for (const [week, days] in data) {
        let inner = ""
        addCell(inner, 'table__cell table__cell_sidebar', 'Week {week}')
      console.log(week)
        for (const [dayOfWeek, value] in days) {
            classString = table__cell
						isToday = new Date === value
            isWeekend = dayOfWeek === 1 && dayOfWeek === 7
            isAlternate = week / 2

            let classString = 'table__cell'

						if (isToday) classString = classString + 'table__cell_today'
            if (isWeekend) classString = classString + 'table__cell_weekend'
            if (isAlternate) classString = classString + 'table__cell_alternate'
            addCell(inner, classString, value)
        }

        result = `<tr>${inner}</tr>`
    }
}

// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)