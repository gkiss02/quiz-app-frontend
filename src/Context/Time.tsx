import { TimeCTX } from "./Context";
import { useState } from "react";

const Time: React.FC<({children : React.ReactNode})> = (props) => {
    const [time, setTime] = useState(30);

    const obj = {
        time: time,
        setTime: setTime
    }

    return (
        <TimeCTX.Provider value={obj}>
            {props.children}
        </TimeCTX.Provider>
    )
}

export default Time;