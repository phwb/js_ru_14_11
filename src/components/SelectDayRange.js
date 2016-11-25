import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

class SelectDayRange extends Component {
  state = {
    from: null,
    to: null
  }

  handleDayClick = (e, day) => {
    const range = DateUtils.addDayToRange(day, this.state)
    this.setState(range)
  }

  render () {
    const { from, to } = this.state
    const title = from && to
      ? <p>Диапазон дат: от {from.toLocaleDateString()} до {to.toLocaleDateString()}</p>
      : null

    return (
      <div>
        <DayPicker
          onDayClick={ this.handleDayClick }
          selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
        />
        {title}
      </div>
    )
  }
}

export default SelectDayRange