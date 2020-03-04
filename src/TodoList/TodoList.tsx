import React, { FC } from 'react';

interface Props {
  todos: Todo[];
}

export const TodoList: FC<Props> = ({ todos }) => {
  return (
    <div>
      {todos.map(todo => {
        const {
          id,
          userId,
          user: { name },
          title,
          completed,
        } = todo;

        return (
          <div key={id} className="todo">
            <p className="todo__item">
              Task
              {' '}
              {id}
            </p>
            <p className="todo__item">
              UserID:
              {' '}
              {userId}
            </p>
            <p className="todo__item">
              User:
              {' '}
              {name}
            </p>
            <p className="todo__item">
              Task:
              {' '}
              {title}
            </p>
            <p className="todo__item">
              Completed:
              {' '}
              {completed ? '✔' : '❌'}
            </p>
          </div>
        );
      })}
    </div>
  );
};
