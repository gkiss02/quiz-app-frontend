import Toaster from "../../UI/Toaster";
import { useContext } from "react";
import { SuccessCTX } from "../../Context/Context";

function SuccessToaster() {
    const successCTX = useContext(SuccessCTX);

    return (
        <Toaster
            header="Success"
            message= {successCTX.message}
            isOpen={successCTX.success}
            handleClose={() => successCTX.setSuccess(false)}
            backgroundColor='#00B87C' 
        />
    )
}

export default SuccessToaster;