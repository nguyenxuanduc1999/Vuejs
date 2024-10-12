<script setup>
import { nextTick, reactive, ref } from 'vue'

const book = reactive({
  name: 'Book 1'
  chapters: []

})

</script>

<template>
  <div>
    <p id="count">Book name: {{ book.name }}</p>
    <p id="count">Da xuat ban: {{ book.chapters.length > 9 ? 'co' : 'khong' }}</p>

  </div> 

</template>
