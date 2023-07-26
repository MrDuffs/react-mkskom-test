import { memo } from 'react';
import './style.scss';

function TodoItem({ item }) {
  return (
    <div className="todo-item">
      <input
        className="todo-item__checkbox"
        type="checkbox"
        defaultChecked={item.completed}
      />
      <div className="todo-item__title">
        {item.title}
      </div>
      <div className="todo-item__userid">
        <span className="userid__sign">
          {item.userId}
        </span>
      </div>
      <div className="todo-item__id">
        {item.id}
      </div>
    </div>
  );
}

export default memo(TodoItem);
