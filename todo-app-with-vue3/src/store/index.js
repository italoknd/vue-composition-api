import { createStore } from 'vuex'

export default createStore({
  state: {
    newTodo: '',
    todos: [],
    hasItem: false,
    allDone: false
  },
  getters: {},
  mutations: {
    addNewTodo(state, data) {
      if (data === '') {
        alert('Info your todo before adding one!')
        return
      }
      
      state.todos.push({
        done: false,
        content: data
      })
      state.hasItem = true
    }
  },
  actions: {}
})
