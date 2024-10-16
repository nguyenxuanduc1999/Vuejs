<script setup>
import { ref } from 'vue'

const newTodo = ref('')

const todos = ref([
  {
    id: 1,
    text: "Learn vuejs",
  },
  {
    id: 2,
    text: "Build a todo app",
  },
]);

const addTodo = () => {
  if (newTodo.value.trim() === '') return;
  const todo = {
    id: todos.value.length + 1, // Lấy length từ todos.value
    text: newTodo.value,
  };
  todos.value.push(todo); // Sử dụng todos.value.push thay vì todos.push
  newTodo.value = ''; // Xóa nội dung input sau khi thêm todo
};
</script>

<template>
  <div>
    <input type="text" v-model="newTodo" @keyup.enter="addTodo" />
    <button @click="addTodo">Add to do</button>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
      </li>
    </ul>
  </div>
</template>



<!--eslint-disable vue/no-use-v-if-with-v-for-->
<!-- <script setup>
import { ref } from 'vue'

const users = ref([
  {
    name: "John",
    age: 30,
    isActive: true,
  },
  {
    name: "Bob",
    age: 29,
    isActive: false,
  },
  {
    name: "Carol",
    age: 25,
    isActive: true,
  },
]);
</script>

<template>
  <div>
    <ul>
      <template v-for="(user, index) in users" :key="user.name">
        <li v-if="!user.isActive" :key="user.name">
          {{ user.name }}: {{ user.isActive ? 'Active' : 'Deactive' }} ({{ index }})
        </li>
      </template>
    </ul>
  </div>
</template> -->

<!-- <script setup>

import { ref, reactive } from 'vue'

// const shopingItem = ref([
//   {
//     name: 'apple',
//     price: 7,
//   },
//   {
//     name: 'orange',
//     price: 12,
//   },
//   {
//     name: 'Banana',
//     price: 10,
//   },
// ])

// </script>

// <template>
//   <div>
//     <ul>
//       <li v-for="item in shopingItem" :key="item.name">
//         {{ item.name }} - {{ item.price }}
//       </li>
//     </ul>
//     <span v-for=" n in 10" :key="n">{{ n }}</span>
//   </div> 

// </template> -->