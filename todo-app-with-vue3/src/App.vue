<template id="app">
  <div class="form">
    <h1>Vue 3 Todo App</h1>
    <form>
      <label>Add a new todo:</label><br />
      <input v-model="newTodo" type="text" placeholder="Info your todo" />
      <button
        title="Add todo"
        class="bi bi-plus-circle add-todo"
        @click.prevent="addNewTodo"
      ></button>
      <button
        :title="
          !hasItem
            ? 'Mark all as done (action deactivated: no items to mark as done)'
            : 'Mark all as done.'
        "
        @click.prevent="toggleAll()"
        class="bi bi-check2-all btn-all-done"
        :disabled="!hasItem"
        :class="!hasItem ? 'disabled-btn' : ''"
      ></button>
    </form>
    <div class="inline">
      <h2>List of Todos</h2>
    </div>
    <div class="row" v-for="(todo, index) in todos" :key="todo">
      <p class="list-items" :class="{ done: todo.done }">
        {{ todo.content }}
      </p>
      <i
        :title="todo.done === false ? 'Mark as done' : 'Unmark as done'"
        class="bi bi-check btn-done"
        @click="toggleDone(todo)"
      ></i>
      <i
        title="Discard Item"
        class="bi bi-trash"
        id="btn-trash"
        @click="discardItem(index)"
      ></i>
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
    const hasItem = ref(false)

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
      if (hasItem.value === false) {
        alert('canoot ')
        return
      }
      todos.value.forEach(item => (item.done = true))
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
      hasItem
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

.add-todo {
  margin-left: 10px;
}

.row {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}

.btn-done {
  background: #22ee44;
  transition: 0.5s;
  margin: 0px 10px;
  padding: 4px 10px;
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
  padding: 4px 10px;
}

#btn-trash:hover {
  background: #cc0000;
}

button {
  font-size: larger;
  background: rgb(33, 125, 231);
  color: white;
  padding: 4px 10px;
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
  padding: 4px 10px;
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

.inline {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
