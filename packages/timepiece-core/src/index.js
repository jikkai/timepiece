import format from './core/format'

function Timepiece (date) {
  return (function (date) {
    const timepiece = new Date(date).toString() === 'Invalid Date' ? new Date() : new Date(date)
    timepiece.format = format.bind(date)
    return timepiece
  })(date)
}

export default Timepiece
