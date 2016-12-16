import parse from './core/parse'
import format from './core/format'

function Timepiece (date) {
  return (function (date) {
    const parsedDate = parse(date)
    const timepiece = parsedDate

    timepiece.format = format.bind(parsedDate)
    return timepiece
  })(date)
}

export default Timepiece
