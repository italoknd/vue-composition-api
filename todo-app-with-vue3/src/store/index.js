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
      // if (state.newTodo === '') {
      //   alert('Info your todo before adding one!')
      //   return
      // }
      console.log(data);
      state.todos.push({
        done: false,
        content: data
      })
      state.newTodo = ''
      state.hasItem = true
    }
  },
  actions: {}
})
