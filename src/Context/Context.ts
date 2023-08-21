import { createContext } from "react";

export const QuestionsCTX = createContext({
    questions: [{category: "", correct_answer: "", difficulty: "", incorrect_answers: [""], question: "", type: ""}],
    getQuestions: (difficulty: string, numberOfQuestions: string, category: string) => {},
    loading: false,
    ready: false,
});