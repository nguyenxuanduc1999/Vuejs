<script setup>
const msg = 'Hello world'
const rawHtml = '<div><h1>Title</h1><span style="color: red">This should be red.</span></div>'
const buttonId = 'button-id'
const buttonClass = 'btn btn-rounded'
const isButtonDisabled = true
const number =0
const objectOfAttrs = {
  id: 'container',
  class:'wrapper',
  style: {
    color: 'blue'
  }
}
const listString = 'a,b,c,d,e,f,g,h,i,j'

import { ref } from 'vue'
const count = ref(1)

</script>

<template>
  <h1> Xuan Duc</h1>
  <span>Message: {{ msg }}</span>
  <p>Using v-html directive: <span v-html="rawHtml"></span></p>
  <button :id="buttonId" :class= "buttonClass" :disabled="isButtonDisabled">{{isButtonDisabled ? 'Disabled' : 'Click Here'}}</button>
  <button v-bind="objectOfAttrs">Click here !</button>
  <button :id="listString.split('').join('-')">Number: {{ number +1}}</button>

 

</template>
