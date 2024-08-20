import { useState } from "react";
import { SuccessCTX } from "./Context"

const SuccessToasterState: React.FC<({children: React.ReactNode})> = (props)=> {
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState('');


    const obj = {
        success,
        setSuccess,
        message,
        setMessage
    }

    return (
        <SuccessCTX.Provider value={obj}>
            {props.children}
        </SuccessCTX.Provider>
    ) 
}

export default SuccessToasterState;