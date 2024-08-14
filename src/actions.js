export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const ADD_REPLY = 'ADD_REPLY';
export const DELETE_REPLY = 'DELETE_REPLY';
export const EDIT_REPLY = 'EDIT_REPLY';
export const SET_SORT_ORDER = 'SET_SORT_ORDER';

export const setSortOrder = (order) => ({
  type: SET_SORT_ORDER,
  payload: order,
});


export const addComment = (name, text) => ({
  type: ADD_COMMENT,
  payload: { name, text },
});

export const deleteComment = (id) => ({
  type: DELETE_COMMENT,
  payload: { id },
});

export const editComment = (id, text) => ({
  type: EDIT_COMMENT,
  payload: { id, text },
});

export const addReply = (commentId, name, text) => ({
  type: ADD_REPLY,
  payload: { commentId, name, text },
});

export const deleteReply = (commentId, replyId) => ({
  type: DELETE_REPLY,
  payload: { commentId, replyId },
});

export const editReply = (commentId, replyId, text) => ({
  type: EDIT_REPLY,
  payload: { commentId, replyId, text },
});
