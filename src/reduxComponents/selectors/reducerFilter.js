const showQuiz = (questions, {text}) => {
    return questions.filter(question => {
        const textMatch = question.title.toLowerCase().includes(text.toLowerCase());
        return textMatch;
    });
};
export default showQuiz;

