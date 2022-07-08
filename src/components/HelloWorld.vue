<script async setup>
import { ref } from "vue";
import axios from "axios";
import {useTodo} from "../store/useTodo";
const state=useTodo();
state.getTodo()
//It is possible to use fetch and axios to fetch data from the server.
// const res = await fetch('https://jsonplaceholder.typicode.com/todos')
// const posts = await res.json()

const data=await axios.get('https://jsonplaceholder.typicode.com/todos')
// console.log(data.data);
</script>

<template>
  <div v-for="t in state.todo" :key="t.id">{{ t.title }}</div>
</template>

<style scoped></style>
