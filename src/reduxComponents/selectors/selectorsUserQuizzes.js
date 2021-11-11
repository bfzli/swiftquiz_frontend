import { createSelector } from "reselect";

export const selectUser = (state) => state.auth.auth;
export const selectQuizes = (state) => state.quizes.quizes;

export const selectQuizesOfUsers = createSelector(
  [selectUser, selectQuizes],
  (user, quizes) => {
    return quizes.filter((quiz) => quiz.created_by === user.user_id);
  }
);