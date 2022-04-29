export const isValidMobileNo = (no) => {
  let numberAsString
  if (isNaN(parseInt(no)) === false) {
    numberAsString = Number(no).toString()
    if (
      numberAsString[0] !== "6" &&
      numberAsString[0] !== "7" &&
      numberAsString[0] !== "8" &&
      numberAsString[0] !== "9"
    ) {
      return "invalid mobile no"
    } else if (numberAsString.length < 10 || numberAsString.length > 10) {
      return "invalid mobile no length"
    }
  } else {
    return "invalid Mobile no"
  }
  return "none"
}
