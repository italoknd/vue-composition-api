<script>
export default {
  props: {
    allDone: {
      type: Boolean,
      default: false
    },

    hasItem: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<template>
  <button
    :title="
      allDone
        ? 'Mark all as done (action deactivated: no items to mark as done)'
        : 'Mark all as done.'
    "
    :disabled="!hasItem"
    :class="
      !hasItem
        ? 'disabled-btn bi bi-check2-all btn-all-done'
        : allDone
        ? 'bi bi-arrow-counterclockwise btn-info'
        : 'bi bi-check2-all btn-all-done'
    "
  ></button>
</template>
<style scoped>
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
</style>
