<template>
    <button @click="count++">{{ count }}</button>
    <p>{{ countPlus }}</p>
</template>

<script setup>
import { ref, computed } from "vue"
const props = defineProps({
    init: Number,
});
const count = ref(props.init)  

const countPlus = computed (() => props.init +1);
</script>