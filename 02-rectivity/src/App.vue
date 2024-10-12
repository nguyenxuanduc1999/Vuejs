<script setup>
import { ref } from 'vue'

const count = ref(0)

const increase = () => {
  count.value++
  console.log(document.getElementById('count').innerText)
}

</script>

<template>
  <div>
    <p id="count">Count: {{ count }}</p>
    <button @click="increase">Increase</button>
  </div> 

</template>
