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
      return "invalid mobile no"
    }
  } else {
    return "invalid Mobile no"
  }
  return "none"
}

export const isValidEmail = (email) => {
  const EMAIL_REGEX =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (!email) {
    return "email can't be empty"
  } else if (email.match(EMAIL_REGEX) === null) {
    return "enter a valid email"
  } else {
    return "none"
  }
}
