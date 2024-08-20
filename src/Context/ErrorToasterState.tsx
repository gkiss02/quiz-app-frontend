import { useState } from "react";
import { ErrorCTX } from "./Context"

const ErrorToasterState: React.FC<({children: React.ReactNode})> = (props)=> {
    const [error, setError] = useState(false);

    const obj = {
        error,
        setError
    }

    return (
        <ErrorCTX.Provider value={obj}>
            {props.children}
        </ErrorCTX.Provider>
    ) 
}

export default ErrorToasterState;