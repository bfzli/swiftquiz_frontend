import { createSelector } from 'reselect';

export const selectUser = (state) => state.auth.auth;
export const selectQuizes = (state) => state.quizes.quizes;
const searchTerm = (state) => state.filters.text;

//
export const selectQuizesOfUsers = createSelector([ selectUser, selectQuizes ], (user, quizes) => {
	let userQuizes = quizes.filter((quiz) => quiz.created_by._id === user.user_id);
	return userQuizes;
});

//Searching User Quizzes
export const searchSelectedQuizzes = createSelector([ selectQuizesOfUsers, searchTerm ], (quizzes, term) => {
	return quizzes.filter((quiz) => {
		const textMatch = quiz.title.toLowerCase().includes(term.toLowerCase());
		return textMatch;
	});
});

//Searching All Quizzes
export const searchAllQuizes = createSelector([ selectQuizes, searchTerm ], (quizzes, term) => {
	return quizzes.filter((quiz) => {
		const textMatch = quiz.title.toLowerCase().includes(term.toLowerCase());
		return textMatch;
	});
});
