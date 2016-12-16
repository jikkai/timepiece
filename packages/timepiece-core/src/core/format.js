import zeroFill from '../utils/zero-fill' 

const token = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|MM?|DD?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g

function format (fmtStr) {
  let result = ''

  if (this.toString() !== 'Invalid Date') {
    const dateObj = {
      YYYY: this.getFullYear(),
      YY: this.getFullYear().toString().substring(2),
      M: this.getMonth() + 1,
      MM: zeroFill(this.getMonth() + 1, 2),
      D: this.getDate(),
      DD: zeroFill(this.getDate(), 2),
      H: this.getHours(),
      HH: zeroFill(this.getHours(), 2),
      m: this.getMinutes(),
      mm: zeroFill(this.getMinutes(), 2),
      s: this.getSeconds(),
      ss: zeroFill(this.getSeconds(), 2)
    }
    const tokens = fmtStr.match(token)

    for (let i = 0; i < tokens.length; i++) {
      result += dateObj[tokens[i]] || tokens[i]
    }
  } else {
    result = 'Invalid Date'
  }

  return result
}

export default format
