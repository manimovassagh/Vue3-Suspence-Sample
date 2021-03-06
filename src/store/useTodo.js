import axios from 'axios'
import { defineStore } from 'pinia'

export const useTodo = defineStore('useTodo', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      todo: [],
      
    }
  },
  actions: {
    async getTodo() {
      await axios.get('https://jsonplaceholder.typicode.com/todos').then(res => {
        this.todo=res.data
      })
      
    }

  }
})