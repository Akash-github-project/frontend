import { useState } from "react";
import { useEffect } from "react";

const useVerifyEmail = (email) =>{
    const [emailError, setEmailError] = useState("");

    useEffect(()=>{
		const EMAIL_REGEX =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (email.match(EMAIL_REGEX) === null) {
        setEmailError("enter a valid email");
        }

		else if (email.length === 0) {
			setEmailError( "email can't be empty") 
        }
    },[email])
        
        return [emailError,setEmailError];
}