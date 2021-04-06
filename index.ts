import axios from 'axios'

const url = 'http://jsonplaceholder.typicode.com/todos/1'

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}


axios.get(url).then(response => {
  const todo = response.data

  const id = todo.ID
  const title = todo.title
  const completed = todo.finished
})


const logTodo = (id: number, completed: boolean, title: string) => {
  console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
  `)
}
