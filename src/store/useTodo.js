import { defineStore } from 'pinia'

export const useTodo = defineStore('useTodo', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      todo: ["Sample Todo"],
      name: 'Eduardo',
      isAdmin: true,
    }
  },
  actions: {
    print() {
      console.log('printing')
    }

  }
})