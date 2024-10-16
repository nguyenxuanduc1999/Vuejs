<script setup>
import { ref } from 'vue'

const text = ref ();
const multilineText = ref("")

const checkedNames = ref([])
const radioCheck = ref()
const checked = ref(false)
const selected = ref()

const firstOption = ref("first option")
const secondOption = ref("second option")

</script>

<template>
  <div>
    <h1 > Form input Bindings</h1>
    <p>Text: {{ text }} {{ typeof text}}</p>
    <input v-model.trim="text" />
    <!-- <input :value="text" @input="handleInput"/> -->
    

    <p>Multiline Text: {{ multilineText }}</p>
    <textarea v-model="multilineText" placeholder="Input your message" />

    <p>Checkbox: {{ checked }}</p>
    <input type="checkbox" id="a" v-model="checked" true-value="Yes" false-value="No"/>

    <p>Multiple Checkbox: {{ checkedNames }}</p>
    <input type="checkbox" id="a" v-model="checkedNames" value="firstOption"/>
    <label for="a">A</label>
    <input type="checkbox" id="b" v-model="checkedNames" value="secondOption"/>
    <label for="b">B</label>
    <!-- <input type="checkbox" id="c" v-model="checkedNames" value="C"/>
    <label for="c">C</label> -->

    <p>Radio: {{ radioCheck }}</p>
    <input type="radio" id="a" v-model="radioCheck" value="A"/>
    <label for="a">A</label>
    <input type="radio" id="b" v-model="radioCheck" value="B"/>
    <label for="b">B</label>

    <p>Select: {{ selected }}</p>
    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option value="{name: 'A'}">A</option>
      <option>B</option>
      <option>C</option>
    </select>
    

</div>
</template>