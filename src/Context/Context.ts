import { createContext } from 'react';

export const QuestionsCTX = createContext({
    questions: [{category: '', correct_answer: '', difficulty: '', incorrect_answers: [''], question: '', type: '', answers: ['']}],
    getQuestions: (difficulty: string, numberOfQuestions: string, category: string) => {},
    loading: false,
    ready: false,
    setReady: (ready: boolean) => {},
    notEnough: false,
    setNotEnough: (notEnough: boolean) => {},
});

export const TimeCTX = createContext({
    time: 30,
    setTime: (time: number) => {},
});

export const ErrorCTX = createContext({
    error: false,
    setError: (error: boolean) => {},
});

export const SuccessCTX = createContext({
    success: false,
    setSuccess: (success: boolean) => {},
    message: '',
    setMessage: (message: string) => {},
});