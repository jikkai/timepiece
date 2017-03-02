import parse from './core/parse'
import format from './core/format'

function Timepiece (date) {
  return (function (date) {
    const parsedDate = parse(date)
    const timepiece = parsedDate

    if (parsedDate) {
      timepiece.format = format.bind(parsedDate)
    } else {
      timepiece.__proto__.format = _ => ''
    }

    return timepiece
  })(date)
}

export default Timepiece
