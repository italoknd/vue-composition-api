<script>
import BaseButton from './BaseButton.vue'

export default {
  setup() {},
  component: {
    BaseButton
  }
}
</script>

<template>
  <div class="grid-item">
    <form>
      <label>Add a new todo:</label><br />
      <input v-model="newTodo" type="text" placeholder="Info your todo" />
      <BaseButton
        @click.prevent="addNewTodo"
        :addTodo="true"
        class="bi bi-plus-circle add-todo"
        title="Add todo"
      />
      <BaseButton
        :allDone="allDone"
        :hasItem="hasItem"
        @click.prevent="toggleAll()"
      />
    </form>
  </div>
</template>
