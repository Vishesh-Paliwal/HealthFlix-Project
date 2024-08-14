// src/reducers.js
import { ADD_COMMENT, DELETE_COMMENT, EDIT_COMMENT, ADD_REPLY, DELETE_REPLY, EDIT_REPLY } from './actions';

const initialState = {
  comments: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_COMMENT:
      const newComment = {
        id: Date.now(),
        name: action.payload.name,
        text: action.payload.text,
        date: new Date(),
        replies: [],
      };
      return {
        ...state,
        comments: [...state.comments, newComment],
      };
    case DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(comment => comment.id !== action.payload.id),
      };
    case EDIT_COMMENT:
      return {
        ...state,
        comments: state.comments.map(comment =>
          comment.id === action.payload.id ? { ...comment, text: action.payload.text } : comment
        ),
      };
    case ADD_REPLY:
      return {
        ...state,
        comments: state.comments.map(comment =>
          comment.id === action.payload.commentId
            ? {
                ...comment,
                replies: [
                  ...comment.replies,
                  {
                    id: Date.now(),
                    name: action.payload.name,
                    text: action.payload.text,
                    date: new Date(),
                  },
                ],
              }
            : comment
        ),
      };
    case DELETE_REPLY:
      return {
        ...state,
        comments: state.comments.map(comment =>
          comment.id === action.payload.commentId
            ? {
                ...comment,
                replies: comment.replies.filter(reply => reply.id !== action.payload.replyId),
              }
            : comment
        ),
      };
    case EDIT_REPLY:
      return {
        ...state,
        comments: state.comments.map(comment =>
          comment.id === action.payload.commentId
            ? {
                ...comment,
                replies: comment.replies.map(reply =>
                  reply.id === action.payload.replyId ? { ...reply, text: action.payload.text } : reply
                ),
              }
            : comment
        ),
      };
    default:
      return state;
  }
}

export default rootReducer;
