import Toaster from "../../UI/Toaster";
import { useContext } from "react";
import { ErrorCTX } from "../../Context/Context";

function ErrorToaster() {
    const errorCTX = useContext(ErrorCTX);

    return (
        <Toaster
            header="Error"
            message="Something went wrong"
            isOpen={errorCTX.error}
            handleClose={() => errorCTX.setError(false)}
            backgroundColor='#FF5341' 
        />
    )
}

export default ErrorToaster;