<script setup>

import { computed, ref, reactive } from 'vue'

const isActive = ref(true)
const hasError = ref(true)

//const classObject = reactive(({
//  acitve : true,
//  'has-error': false
//}))

const errorClass = ref('has-error')

const classObject = computed(() => ({
  active: isActive.value,
  'has-error': hasError.value
}))

const changeActive = () => {
  isActive.value = !isActive.value
}

</script>

<template>
  <div>
    <button @click="changeActive" class="button" :class="classObject">
      {{ isActive ? 'Active' : 'Deacive'}}
    </button>
    <button @click="changeActive" class="button" :class="[isActive ? 'active' : '', {'has-error': hasError}]">
      {{ isActive ? 'Active' : 'Deacive'}}
    </button>
  </div> 

</template>

<style>
  .button{
    bottom: none;
    background: purple;
    color: white;
    padding: 10px 14px;
    border-radius: 6px;
    cursor: pointer;
    &:hover{
      background: plum;
    }
  }
  .actice{
    bottom: none;
    background: green;
    color: white;
    &:hover{
      background: greenyellow;
    }
  }
  .has-error{
    background: red;
    color: white;
    &:hover{
      background: pink;
    }
  }
</style>