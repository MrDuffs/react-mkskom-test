import { memo, useCallback } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import TodoItem from '../../components/todo-item';
import TodoTable from '../../components/todo-table';
import Loader from '../../components/loader';

function TodoList() {
  const select = useSelector((state) => ({
    data: state.todosValues.data,
    loading: state.todosValues.loading,
  }), shallowEqual);

  const renders = {
    item: useCallback((item) => (
      <TodoItem item={item} />
    ), []),
  };

  return (!select.loading) ? (
    <TodoTable list={select.data} renderItem={renders.item} />
  ) : <Loader />;
}

export default memo(TodoList);
