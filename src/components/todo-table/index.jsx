import { memo } from 'react';
import './style.scss';

function TodoTable({ list, renderItem }) {
  return (
    <div className="todo-table">
      <div className="todo-table__header">
        <div className="todo-table__cell">c</div>
        <div className="todo-table__cell todo-table__cell--title">title</div>
        <div className="todo-table__cell todo-table__cell--userid">userid</div>
        <div className="todo-table__cell todo-table__cell--id">id</div>
      </div>
      {list.map((item) => (
        <div key={item.id} className="todo-table__row">
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
}

export default memo(TodoTable);
