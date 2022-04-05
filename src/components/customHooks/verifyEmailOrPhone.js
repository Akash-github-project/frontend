import { useState ,useEffect} from "react";
export const useEmailPhoneValidater = (text)=>{
   const [emailOrPhoneError, setEmailOrPhoneError] = useState(text)
   useEffect(()=>{
		const EMAIL_REGEX =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (!text) {
			setEmailOrPhoneError("email or mobile can't be empty");
		} else {
			if (isNaN(parseInt(text)) === false) {
				numberAsString = new Number(text).toString();

				if (
					numberAsString[0] !== "6" &&
					numberAsString[0] !== "7" &&
					numberAsString[0] !== "8" &&
					numberAsString[0] !== "9"
				) {
					setEmailOrPhoneError("invalid mobile no");
				} else if (numberAsString.length < 10 || numberAsString.length > 10)
					setEmailOrPhoneError("invalid mobile no length");
			} else if (text.match(EMAIL_REGEX) === null) {
				setEmailOrPhoneError("enter a valid email");
			}
		}
   },[text])

   return [emailOrPhoneError, setEmailOrPhoneError];
}