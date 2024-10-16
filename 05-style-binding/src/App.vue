<script setup>

import { computed, ref, reactive } from 'vue'
const color = ref('yellow')
const background = ref('blue')
const fontSize = ref(30)

const styleObject = reactive({
  border: 'none',
  borderRadius: '6px'
})
</script>

<template>
  <div>
    <button
       :style="[{
        color,
        background,
        fontSize: fontSize +'px'
      },styleObject]">
      Button
    </button>
    <!-- <button
       :style="styleObject">
      Button
    </button> -->
  </div> 

</template>