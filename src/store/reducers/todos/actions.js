export const GET_INITIAL_VALUE = 'GET_INITIAL_VALUE';
export const GET_INITIAL_VALUE_SUCCESS = 'GET_INITIAL_VALUE_SUCCESS';
export const GET_INITIAL_VALUE_ERROR = 'GET_INITIAL_VALUE_ERROR';

export const loadTodosList = () => {
  return async (dispatch) => {
    dispatch({ type: 'GET_INITIAL_VALUE' });

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      dispatch({
        type: 'GET_INITIAL_VALUE_SUCCESS',
        payload: data,
      });
    } catch (e) {
      dispatch({ type: 'GET_INITIAL_VALUE_ERROR', payload: e });
    }
  };
};
