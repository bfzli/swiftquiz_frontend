import { createSelector } from "reselect";

export const selectUsers = (state) => state.auth.auth;
export const selectQuizes = (state) => state.quizes.quizes;

export const selectQuizesOfUsers = createSelector(
  [selectUsers, selectQuizes],
  (user, quizes) => {
    return quizes.filter((quiz) => quiz.userId === user.id);
  }
);