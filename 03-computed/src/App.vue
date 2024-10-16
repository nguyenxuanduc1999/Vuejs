<script setup>
import { computed, reactive, ref } from 'vue'

const firstName = ref('Nguyen Xuan')
const lastName = ref('D')

const fullName = computed({
  get(){
    return firstName.value + ' ' + lastName.value
  },
  set(newValue){
    [firstName.value, lastName.value] = newValue.split(',')
  }
})

const changeFullname = () => {
  fullName.value = 'Nguyen Van, B'
}

</script>

<template>
  <div>
    <p id="count">Full Name: {{ fullName }}</p>
    <p id="count">First Name: {{ firstName }}</p>
    <p id="count">Last Name: {{ lastName }}</p>
    <button @click ="changeFullname">change Fullname</button>
  </div> 

</template>
