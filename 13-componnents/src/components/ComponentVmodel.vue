<template>
    <div>
        <label for="Email">Email </label>
        <input type="text" v-model="email" />
        <p>{{ email }}</p>
        <button @click="setEmailDefault">Email Default</button>
    </div>
</template>

<script>

const email = defineModel;

const setEmailDefault = () => {
    email.value = "thisisemailDefault@gmail.com";
};
</script>