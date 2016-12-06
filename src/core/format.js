import zeroFill from '../utils/zero-fill' 

const token = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|MM?|DD?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g

function format (fmtStr) {
  const dateObj = {
    YYYY: this.getFullYear(),
    M: this.getMonth() + 1,
    MM: zeroFill(this.getMonth() + 1, 2),
    D: this.getDate() + 1,
    DD: zeroFill(this.getDate(), 2)
  }
  const tokens = fmtStr.match(token)

  let result = ''
  for (let i = 0; i < tokens.length; i++) {
    result += dateObj[tokens[i]] || tokens[i]
  }

  return result
}

export default format
