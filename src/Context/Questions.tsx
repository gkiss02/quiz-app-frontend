import { useState } from "react";
import { QuestionsCTX } from "./Context";

const Questions: React.FC<({children: React.ReactNode})> = (props) => {
    const [questions, setQuestions] = useState([{category: "", correct_answer: "", difficulty: "", incorrect_answers: [""], question: "", type: "", answers: [""]}]);
    const [loading, setLoading] = useState(false);
    const [ready, setReady] = useState(false);
    const [notEnough, setNotEnough] = useState(false);

    async function getQuestions (difficulty: string, numberOfQuestions: string, category: string) {
        setNotEnough(false);
        setLoading(true);
        const response = await fetch(`https://opentdb.com/api.php?amount=${numberOfQuestions}&difficulty=${difficulty}&type=multiple&category=${category}`);
        const data = await response.json();
        if (data.response_code == 1) setNotEnough(true);
        else {
            setQuestions(data.results);
            setReady(true);
        }
        setLoading(false);
    }

    for (let i = 0; i < questions.length; i++) {
        questions[i].answers = [questions[i].correct_answer, ...questions[i].incorrect_answers];
        questions[i].answers.sort(() => Math.random() - 0.5);
    }

    const obj = {
        questions: questions,
        getQuestions: getQuestions,
        loading: loading,
        ready: ready,
        setReady: setReady,
        notEnough: notEnough,
        setNotEnough: setNotEnough
    }

    return (
        <QuestionsCTX.Provider value={obj}>
            {props.children}
        </QuestionsCTX.Provider>
    )
}

export default Questions;