<template id="app">
  <div class="form">
    <h1>Vue 3 Todo App</h1>
    <form @submit.prevent="addNewTodo">
      <label>Add a new todo:</label><br />
      <input v-model="newTodo" type="text" placeholder="Info your todo" /><br />
      <button>Add new todo</button>
    </form>
    <h2>List of Todos</h2>
    <div class="row" v-for="(todo, index) in todos" :key="todo">
      <p class="list-items" :class="{done: todo.done}">
        {{ todo.content }}
      </p>
      <i :title="todo.done === false ? 'Mark as done' : 'Unmark as done'" class="bi bi-check" id="btn-done" @click="toggleDone(todo)"></i>
      <i title="Discard Item" class="bi bi-trash" id="btn-trash" @click="discardItem(index)"></i>
    </div>
    <div v-if="todos.length === 0" class="empty-list">
      <p>Nothing to show here.</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'App',

  setup() {
    const newTodo = ref('')
    const todos = ref([])

    function addNewTodo() {
      todos.value.push({
        done: false,
        content: newTodo.value
      })

      newTodo.value = ''
    }

    function toggleDone(todo) {
      todo.done = !todo.done
    }

    function discardItem(index) {
      todos.value.splice(index, 1);
    }

    return {
      //functions
      toggleDone,
      discardItem,
      addNewTodo,

      //variables
      todos,
      newTodo
    }
  }
}
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

label {
  font-size: large;
}

input {
  font-size: large;
  margin: 10px 0;
}

.row {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}

#btn-done {
  background: #22ee44;
  transition: 0.5s;
  margin: 0px 10px;
  padding: 8px;
  border-radius: 4px;
  color: white;
  cursor: pointer;
}

#btn-done:hover {
  background: #22bb44;
}

#btn-trash {
  background: #ee0000;
  transition: 0.5s;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  padding: 8px;
}

#btn-trash:hover {
  background: #cc0000;
}

button {
  font-size: large;
  background: rgb(33, 125, 231);
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  transition: 0.5s;
  cursor: pointer;
}

button:hover {
  background: rgb(17, 91, 175);
}

.list-items {
  font-size: 25px;
}

.empty-list {
  font-size: 25px;
  animation: flickering 3s infinite;
}

@keyframes flickering {
  25% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

.done {
  text-decoration: line-through;
}
</style>
