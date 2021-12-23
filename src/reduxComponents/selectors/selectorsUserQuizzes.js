import { createSelector } from 'reselect';

export const selectUser = (state) => state.auth.auth;
export const selectQuizes = (state) => state.quizes.quizes;
const searchTerm = (state) => state.filters.text;
const setCategory = (state) => state.filters.category;
const setLeaderboard = (state) => state.user.leaderboard;


// Searching Quizes
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
export const searchAllQuizes = createSelector([ selectQuizes, searchTerm, setCategory ], (quizzes, term, category) => {
    return quizzes.filter((quiz) => {
        const isPublic = quiz.privacy === "public";
        const textMatch = quiz.title.toLowerCase().includes(term.toLowerCase());
        const categoryMatch = category ? quiz.category === category : true;
        return textMatch && categoryMatch && isPublic;
    });
});

//sort leaderboard from high to low
export const sortLeaderboardUsers = createSelector([ setLeaderboard ], (leaderboard) => {
	return leaderboard.sort((a, b) => b.score - a.score);
});
