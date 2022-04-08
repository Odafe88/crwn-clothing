import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser], (user) => user.currentUser
);

export const selectUserEmail = createSelector(
    [selectCurrentUser], currentUser => currentUser.email
)

export const selectUserName = createSelector(
    [selectCurrentUser], currentUser => currentUser.displayName
)