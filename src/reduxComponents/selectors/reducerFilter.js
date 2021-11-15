const showQuiz = (questions, {difficulty, text}) => {
    return questions.filter(question => {
        const textMatch = question.title.toLowerCase().includes(text.toLowerCase());
        const difficultyMatch = question.difficulty === difficulty;

        return textMatch && difficultyMatch;
    });
};

export default showQuiz;