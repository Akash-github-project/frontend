import React, { useState } from "react"
import Button from "../button"
import { Input } from "../input"

const loginOtp = () => {
  const [isValid, setInsValid] = useState(false)
  const [inputVal, setInputVal] = useState("")
  return (
    <div className="w-full flex flex-col gap-2">
      <Input val={inputVal} change={(value) => setInputVal(value)} />
      <Button text="Validate" />
    </div>
  )
}

export default loginOtp
