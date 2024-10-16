<script setup>
import { ref } from 'vue'

const count = ref (0)

const sayHi1 = () => {
  alert('Hallo 1')
}

const sayHi2 =(name) => {
  alert('Hallo 2')
}

const submit = () => {
  alert("Form submitted");
}

</script>

<template>
  <div>
    <h1> Event Handling</h1>
    <!-- <button @click="sayHi2">
      Sai Hai
      <button @click.stop="sayHi1">
        Say Mot
      </button>
    </button>

    <form @submit.prevent.stop="submit">
      <button type="submit">Submit</button>
    </form>

    <button @click.self="sayHi2">Sai Hai
      <button @click.self="sayHi1">Say Mot</button>
    </button> -->

    <input @keyup.enter.alt="submit" placeholder="Nhap Ten Cua Ban">
    <button @click.shift="submit">Submit</button>
  </div>
</template>



<!-- <script setup>
import { ref } from 'vue'

const count = ref (0)

const greet = (event) => {
  console.log(event.target)
  alert('Hallo ' + event.type)
}

const sayHi =(name) => {
  alert('Hallo ' + name)
}

</script>

<template>
  <div>
    <h1> Event Handling</h1>
    <button v-on:click="count++">add 1</button>
    <p>{{ count }}</p>
    <button @click="greet">Hallo</button>
    <button @click="sayHi('A')">Hallo A</button>
    <button @click="sayHi('B')">Hallo B</button>

  </div>
</template> -->