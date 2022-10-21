<script>
export default {
  name: 'DisplayTodos',
  setup() {
    const todos = ref([])
    const hasItem = ref(false)
    const allDone = ref(false)

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
      toggleDone,
      discardItem,
      toggleAll,
      todos,
      hasItem,
      allDone
    }
  }
}
</script>

<template>
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
</template>
