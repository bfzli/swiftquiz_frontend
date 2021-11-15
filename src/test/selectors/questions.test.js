import { expect } from "@jest/globals";
import showQuiz from "../../reduxComponents/selectors/reducerFilter";

const testArray = [
    { author: 'laurat', title: 'ome title', answers: [], category: 'math', difficulty: 'hard' },
    { author: 'fitim', title: 'marriage', answers: [], category: 'math', difficulty: 'medium' },
    { author: 'mendrit', title: 're', answers: [], category: 'math', difficulty: 'easy' },
    { author: 'benjamin', title: 'po', answers: [], category: 'math', difficulty: 'hard' },
]


test('should filter quizes based on title and difficulty', () => {
    const filterTest = { 
        text: 'pome', 
        difficulty: 'hard' 
    };

    const result = showQuiz(testArray, filterTest);
    expect(result).toEqual([ testArray[0], testArray[3] ]);
});