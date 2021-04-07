import axios from 'axios';
const url = 'http://jsonplaceholder.typicode.com/todos/1';
axios.get(url).then(response => {
    const todo = response.data;
    const id = todo.ID;
    const title = todo.title;
    const completed = todo.finished;
});
const logTodo = (id, completed, title) => {
    console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
  `);
};
//# sourceMappingURL=index.js.map