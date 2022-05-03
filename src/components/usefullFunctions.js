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

export const isValidPass = (password) => {
  if (password.length < 8) {
    return "Password must be at least 8 characters"
  } else if (password.search(/[a-z]/i) < 0) {
    return "Password must contain at least one letter"
  } else if (password.search(/(?=.*[A-Z])/) < 0) {
    return "Password must contain at least one uppercase"
  } else if (password.search(/[0-9]/) < 0) {
    return "Password must contain at least one digit"
  } else if (password.search(/(?=.*[!@#$%^&*])/) < 0) {
    return "Password must contain at least one special character"
  } else {
    return "none"
  }
}

export const isThisOnList = (toMatch, from) => {
  let x = from

  let keys = Object.keys(x)
  let ret = keys.filter((val) => x[`${val}`].includes(toMatch) === true)
  // console.log("operator ----", ret[0])
  console.log(ret, "--changedto")

  if (ret.length === 0) {
    return "none"
  } else {
    return ret[0]
  }
}
