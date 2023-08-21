import { useState } from "react";
import { QuestionsCTX } from "./Context";

const Questions: React.FC<({children: React.ReactNode})> = (props) => {
    const [questions, setQuestions] = useState([{category: "", correct_answer: "", difficulty: "", incorrect_answers: [""], question: "", type: ""}]);
    const [loading, setLoading] = useState(false);
    const [ready, setReady] = useState(false);

    async function getQuestions (difficulty: string, numberOfQuestions: string, category: string) {
        setLoading(true);
        const response = await fetch(`https://opentdb.com/api.php?amount=${numberOfQuestions}&difficulty=${difficulty}&type=multiple&category=${category}`);
        const data = await response.json();
        setQuestions(data.results);
        setLoading(false);
        setReady(true);
    }

    const obj = {
        questions: questions,
        getQuestions: getQuestions,
        loading: loading,
        ready: ready
    }

    return (
        <QuestionsCTX.Provider value={obj}>
            {props.children}
        </QuestionsCTX.Provider>
    )
}

export default Questions;