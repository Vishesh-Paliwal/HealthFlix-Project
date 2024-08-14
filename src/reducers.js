import { ADD_COMMENT, DELETE_COMMENT, EDIT_COMMENT, ADD_REPLY, DELETE_REPLY, EDIT_REPLY, SET_SORT_ORDER } from './actions';

const initialState = {
  comments: [],
  sortOrder: 'newest', 
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
        comments: sortComments([...state.comments, newComment], state.sortOrder),
      };
    case DELETE_COMMENT:
      return {
        ...state,
        comments: sortComments(state.comments.filter(comment => comment.id !== action.payload.id), state.sortOrder),
      };
    case EDIT_COMMENT:
      return {
        ...state,
        comments: sortComments(
          state.comments.map(comment =>
            comment.id === action.payload.id ? { ...comment, text: action.payload.text } : comment
          ),
          state.sortOrder
        ),
      };
    case ADD_REPLY:
      return {
        ...state,
        comments: sortComments(
          state.comments.map(comment =>
            comment.id === action.payload.commentId
              ? {
                  ...comment,
                  replies: sortReplies(
                    [
                      ...comment.replies,
                      {
                        id: Date.now(),
                        name: action.payload.name,
                        text: action.payload.text,
                        date: new Date(),
                      },
                    ],
                    state.sortOrder
                  ),
                }
              : comment
          ),
          state.sortOrder
        ),
      };
    case DELETE_REPLY:
      return {
        ...state,
        comments: sortComments(
          state.comments.map(comment =>
            comment.id === action.payload.commentId
              ? {
                  ...comment,
                  replies: sortReplies(
                    comment.replies.filter(reply => reply.id !== action.payload.replyId),
                    state.sortOrder
                  ),
                }
              : comment
          ),
          state.sortOrder
        ),
      };
    case EDIT_REPLY:
      return {
        ...state,
        comments: sortComments(
          state.comments.map(comment =>
            comment.id === action.payload.commentId
              ? {
                  ...comment,
                  replies: sortReplies(
                    comment.replies.map(reply =>
                      reply.id === action.payload.replyId ? { ...reply, text: action.payload.text } : reply
                    ),
                    state.sortOrder
                  ),
                }
              : comment
          ),
          state.sortOrder
        ),
      };
    case SET_SORT_ORDER:
      return {
        ...state,
        sortOrder: action.payload,
        comments: sortComments(state.comments, action.payload),
      };
    default:
      return state;
  }
}

function sortComments(comments, order) {
  const sortedComments = [...comments].sort((a, b) => {
    if (order === 'newest') {
      return new Date(b.date) - new Date(a.date);
    } else {
      return new Date(a.date) - new Date(b.date);
    }
  });

  return sortedComments.map(comment => ({
    ...comment,
    replies: sortReplies(comment.replies, order),
  }));
}

function sortReplies(replies, order) {
  return [...replies].sort((a, b) => {
    if (order === 'newest') {
      return new Date(b.date) - new Date(a.date);
    } else {
      return new Date(a.date) - new Date(b.date);
    }
  });
}

export default rootReducer;
