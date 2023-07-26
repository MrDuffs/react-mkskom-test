import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadTodosList } from './store/reducers/todos/actions';
import PageLayout from './components/page-layout';
import Button from './components/button';
import TodoList from './containers/todo-list';

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useDispatch();

  const callbacks = {
    onLoadTodos: useCallback(() => {
      setIsClicked(true);
      dispatch(loadTodosList());
    }, [dispatch]),
  };

  return (
    <PageLayout>
      <Button description="Получить данные" onClick={callbacks.onLoadTodos} />
      { isClicked ? <TodoList /> : null}
    </PageLayout>
  );
}

export default App;
