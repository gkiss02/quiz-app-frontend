import { useState } from "react";
import { ScoreCTX } from "./Context";

const Score: React.FC<({ children: React.ReactNode })> = (props) =>  {
    const [score, setScore] = useState(0);

    const obj = {
        score,
        setScore
    }
    
    return (
        <ScoreCTX.Provider value={obj}>
            <p>{props.children}</p>
        </ScoreCTX.Provider>
    )
}

export default Score;