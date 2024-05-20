import { Status } from '../App';
import { Todo } from '../types/Todo';

interface Filter {
  status: Status;
}

export const getFilteredTodos = (todos: Todo[], { status }: Filter) => {
  let filteredTodos = [...todos];

  if (status !== 'all') {
    filteredTodos = filteredTodos.filter(todo =>
      status === 'completed' ? todo.completed : !todo.completed,
    );
  }

  return filteredTodos;
};
