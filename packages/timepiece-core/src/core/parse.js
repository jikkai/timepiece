const token = /(\d{4}[-/]{1}\d{1,2}[-/]{1}\d{1,2})\s+(\d{1,2})[:]{1}(\d{1,2})[:]{1}(\d{1,2})/

function parse (date) {
  let result = new Date(date)

  if (result.toString() === 'Invalid Date') {
    if (token.test(date)) {
      const matchedDate = date.match(token)
      result = new Date(matchedDate[1])
      result.setHours(matchedDate[2])
      result.setMinutes(matchedDate[3])
      result.setSeconds(matchedDate[4])
    }
  }

  return result
}

export default parse
