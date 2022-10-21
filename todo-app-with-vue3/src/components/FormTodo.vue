<script>
import { useStore } from 'vuex'
import { ref } from 'vue'

import BaseButton from './BaseButton.vue'

export default {
  setup() {
    const store = useStore()
    let newTodo = ref('')

    function addNewTodo() {
      console.log(store)
      store.commit('addNewTodo', newTodo.value)
      newTodo.value = ''
    }

    return {
      newTodo,
      addNewTodo
    }
  },
  component: {
    BaseButton
  }
}
</script>

<template>
  <div class="grid-item">
    <form v-on:submit.prevent="addNewTodo">
      <label>Add a new todo:</label><br />
      <input style="margin-left: -70px" v-model="newTodo" type="text" placeholder="Info your todo" />
      <BaseButton
        type="submit"
        :addTodo="true"
        class="bi bi-plus-circle add-todo btn-done"
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
<style scoped>
.add-todo {
  margin-left: 10px;
}
</style>
