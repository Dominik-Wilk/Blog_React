import { createSelector } from '@reduxjs/toolkit';

// selectors
const selectPosts = state => state.posts;
const selectPostId = (state, id) => id;

export const getPosts = createSelector([selectPosts], posts => posts);
export const getPostById = createSelector(
  [selectPosts, selectPostId],
  (posts, id) => posts.find(post => post.id === id)
);

// actions
const createActionName = actionName => `app/posts/${actionName}`;
const REMOVE_POST = createActionName('REMOVE_POST');

export const removePost = payload => ({ type: REMOVE_POST, payload });

// action creators
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case REMOVE_POST:
      return statePart.filter(post => post.id !== action.payload);
    default:
      return statePart;
  }
};
export default postsReducer;
