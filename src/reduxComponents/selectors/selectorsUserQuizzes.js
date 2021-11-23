import { createSelector } from "reselect";

export const selectUser = (state) => state.auth.auth;
export const selectQuizes = (state) => state.quizes.quizes;
const searchTerm = (state) => state.filters.text;

export const selectQuizesOfUsers = createSelector(
  [selectUser, selectQuizes],
  (user, quizes) => {
    return quizes.filter((quiz) => quiz.created_by === user.user_id);
  }
);


//Searching Quizzes
export const searchSelectedQuizzes = createSelector(
  [selectQuizesOfUsers, searchTerm],
  (quizzes, term) => {
      return quizzes.filter(quiz => {
          const textMatch = quiz.title.toLowerCase().includes(term.toLowerCase());
          return textMatch;
      });
  }
);