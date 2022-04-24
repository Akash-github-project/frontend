import { useState, useEffect } from "react"

export const usePhoneVerify = (phoneNo) => {
  const [phoneNoError, setPhoneNoError] = useState("")

  useEffect(() => {
    if (isNaN(parseInt(phoneNo)) === false) {
      let numberAsString = new Number(phoneNo).toString()

      if (
        numberAsString[0] !== "6" &&
        numberAsString[0] !== "7" &&
        numberAsString[0] !== "8" &&
        numberAsString[0] !== "9"
      ) {
        setPhoneNoError("invalid mobile no")
      } else if (numberAsString.length < 10 || numberAsString.length > 10)
        setPhoneNoError("invalid mobile no length")
    } else setPhoneNoError("Not a phone No")
  }, [phoneNo])

  return [phoneNoError, setPhoneNoError]
}
