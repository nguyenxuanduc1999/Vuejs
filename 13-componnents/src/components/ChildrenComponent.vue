<template>
    <p>{{ JSON.stringify(props) }}</p>
</template>

<script setup>
const props = defineProps({
    propA: Number,
    propB: [String, Number],
    propC: {
        type: String,
        required: true,
    },
    propD: {
        type: Number,
        default: 100,
    }
});
</script>