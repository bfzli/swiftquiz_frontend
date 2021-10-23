import { expect } from '@jest/globals';
import { addQuestion, removeQuestion, editQuestion } from '../../reduxComponents/actions/Questions';

//Testing Remove action
test('should setup remove Question object', () => {
    const action = removeQuestion({ id: '132dasdc' });
    expect(action).toEqual({
        type: 'REMOVE_QUESTION',
        id: '132dasdc'
    });
});

//Testing Edit action
test('should setup edit Question object', () => {
    const action = editQuestion('123', { author: 'Benjamin' });
    expect(action).toEqual({
        type: 'EDIT_QUESTION',
        id: '123',
        updates: {
            author: 'Benjamin'
        }
    });
});

//Testing the Add action
test('should setup add Question object', () => {
    const stateTest = {
        author: 'Laurat',
        title: 'abc',
        answers: ['2','3'],
        category: 'Math',
        difficulty: 'easy'
    };

    const action = addQuestion(stateTest);
    expect(action).toEqual({
        type: 'ADD_QUESTION',
        question: {
            ...stateTest,
            id: expect.any(Number)
        }
    })
});

//Testing if nothing is passed threw
test('should setup an empty object', () => {
    const action = addQuestion({});
    expect(action).toEqual({
        type: 'ADD_QUESTION',
        question: {
            id: expect.any(Number),
            author: 'Guest',
            title: '',
            answers: [],
            category: '',
            difficulty: 'easy'
        }
    })
});

//To see all the tests just run ' npm test ' on your terminal !