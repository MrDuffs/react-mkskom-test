import { GET_INITIAL_VALUE, GET_INITIAL_VALUE_ERROR, GET_INITIAL_VALUE_SUCCESS } from './actions';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
  case GET_INITIAL_VALUE:
    return { ...state, loading: true };

  case GET_INITIAL_VALUE_SUCCESS:
    return { ...state, data: action.payload, loading: false };

  case GET_INITIAL_VALUE_ERROR:
    return { ...state, error: action.payload, loading: false };

  default:
    // Нет изменений
    return state;
  }
};
