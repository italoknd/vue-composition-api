<template id="app">
  <div>
    <h1>Vue 3 Todo App</h1>
    <div class="grid-container">
      <!-- <div class="grid-item">
        <form>
          <label>Add a new todo:</label><br />
          <input v-model="newTodo" type="text" placeholder="Info your todo" />

        </form>
      </div> -->
      <FormTodo />
      <div class="grid-item">
        <table class="table">
          <thead>
            <tr>
              <th class="todo">Todo</th>
              <th class="actions">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(todo, index) in todos" :key="todo" class="row">
              <td class="todo content" :class="{ done: todo.done }">
                {{ todo.content }}
              </td>

              <td class="actions">
                <i
                  v-if="!todo.done"
                  :title="todo.done === false ? 'Mark as done' : ''"
                  class="bi bi-check btn-done"
                  @click="toggleDone(todo)"
                ></i>
                <i
                  v-else
                  :title="todo.done === true ? 'Unmark as done' : ''"
                  class="bi bi-arrow-counterclockwise btn-info"
                  @click="toggleDone(todo)"
                ></i>
                <i
                  title="Discard Item"
                  class="bi bi-trash"
                  id="btn-trash"
                  @click="discardItem(index)"
                ></i>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-if="todos.length === 0" class="empty-list">
          <p>Nothing to show here.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import FormTodo from './components/FormTodo.vue'

export default {
  name: 'App',
  setup() {
    const newTodo = ref('')
    const todos = ref([])
    const hasItem = ref(false)
    const allDone = ref(false)
    function addNewTodo() {
      if (newTodo.value === '') {
        alert('Info your todo before adding one!')
        return
      }
      todos.value.push({
        done: false,
        content: newTodo.value
      })
      newTodo.value = ''
      hasItem.value = true
    }
    function toggleDone(todo) {
      todo.done = !todo.done
    }
    function discardItem(index) {
      todos.value.splice(index, 1)
      if (todos.value.length === 0) {
        hasItem.value = false
      }
    }
    function toggleAll() {
      allDone.value = !allDone.value
      if (allDone.value) {
        todos.value.forEach(item => (item.done = true))
      } else {
        todos.value.forEach(item => (item.done = false))
      }
    }
    return {
      //functions
      toggleDone,
      discardItem,
      addNewTodo,
      toggleAll,
      //variables
      todos,
      newTodo,
      hasItem,
      allDone
    }
  },
  components: { FormTodo }
}
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
}

:root {
  background: #2f2f2f;
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto;
  gap: 10px;
}

form {
  width: 80%;
}

label {
  text-align: left;
  margin-right: 16.5em;
  font-size: 1.4625em;
}

input {
  font-size: large;
  margin: 10px 0;
  padding: 0.4em 12em 0.4em 0.4em;
}

input:focus {
  outline: none;
  border: 2px solid rgb(0, 60, 255);
  border-radius: 2px;
}

table {
  width: 90%;
  border-collapse: collapse;
  margin-top: 2.3em;
}

thead {
  font-size: 1.1625em;
  background: rgb(73, 73, 73);
}

.actions {
  text-align: right;
  padding: 0.5em;
}

.todo {
  text-align: left;
  padding: 0.5em;
}

.content {
  font-size: 1.1625em;
}

.add-todo {
  margin-left: 10px;
}

.row {
  background: white;
  color: rgb(73, 73, 73);
  border-bottom: 1px solid rgb(73, 73, 73);
}

.btn-done {
  background: #22ee44;
  transition: 0.5s;
  margin: 0px 10px;
  padding: 6px 10px;
  border-radius: 4px;
  color: white;
  cursor: pointer;
}

.btn-done:hover {
  background: #22bb44;
}

#btn-trash {
  background: #ee0000;
  transition: 0.5s;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  padding: 6px 10px;
}

#btn-trash:hover {
  background: #cc0000;
}

button {
  font-size: larger;
  background: rgb(33, 125, 231);
  color: white;
  padding: 6px 10px;
  border: none;
  border-radius: 4px;
  transition: 0.5s;
  cursor: pointer;
}

button:hover {
  background: rgb(17, 91, 175);
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
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
}

.done {
  text-decoration: line-through;
}

.btn-all-done {
  padding: 6px 10px;
  background: #22ee44;
  transition: 0.5s;
  margin-left: 10px;
}

.btn-all-done:hover {
  background: #22bb44;
}

.disabled-btn {
  background: grey;
  cursor: auto;
  transition: 0.5s;
}

.disabled-btn:hover {
  background: rgb(73, 73, 73);
}

.btn-info {
  background: rgb(33, 125, 231);
  padding: 6px 10px;
  transition: 0.5s;
  margin-left: 10px;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  margin: 0px 10px;
}

.btn-info:hover {
  background: rgb(17, 91, 175);
}
</style>
