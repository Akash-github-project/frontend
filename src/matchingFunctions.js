//matching number strting with 3 and length is 10 in total
// "/([3][0-9]{9})/g"
//

export function isStartingWithLength(starting, length, string) {
  if (string.indexOf(starting) === 0 && string.length === length) {
    return true
  } else {
    return false
  }
}

export function isOfLength(string, length) {
  return string.length === length
}

export function isLongerThan(string, length) {
  return string.length > length
}
