<template>
    <button @click="callFunctionIncrease">Increase</button>
    <button @click="callFunctionIncreaseByTwoTimes">Increase 2 Times</button>
    <button @click="callFunctionIncreaseBy">Increase By</button>

    <!-- <p>{{ countPlus }}</p> -->
</template>

<script setup>

const emit = defineEmits(["increase", "increaseByTwoTimes", "increaseBy"]);
const callFunctionIncrease = () => {
    emit("increase");
}

const callFunctionIncreaseByTwoTimes = () => {
    emit("increaseByTwoTimes");
}

const callFunctionIncreaseBy = () => {
    emit("increaseBy", 5);
}

// defineEmits(["increase"]);


// import { ref, computed } from "vue"
// const props = defineProps({
//     init: Number,
// });
// const count = ref(props.init)  

// const countPlus = computed (() => props.init +1);
</script>