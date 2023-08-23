import { createContext } from "react";

export const QuestionsCTX = createContext({
    questions: [{category: "", correct_answer: "", difficulty: "", incorrect_answers: [""], question: "", type: "", answers: [""]}],
    getQuestions: (difficulty: string, numberOfQuestions: string, category: string) => {},
    loading: false,
    ready: false,
    setReady: (ready: boolean) => {},
});

export const TimeCTX = createContext({
    time: 30,
    setTime: (time: number) => {},
});

export const ScoreCTX = createContext({
    score: 0,
    setScore: (score: number) => {},
});