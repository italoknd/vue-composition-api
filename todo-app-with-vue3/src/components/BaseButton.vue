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
    },
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
