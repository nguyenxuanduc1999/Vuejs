<script setup>
import { onMounted, ref } from "vue";

const inputRef = ref(null);
const list = ref(["Item1", "Item2", "Item3",])
const itemRefs = ref([])


onMounted(() => {
  console.log(itemRefs.value)
  inputRef.value.focus();  // Đảm bảo rằng phần tử input sẽ tự động được focus khi component được mount
  itemRefs.value.forEach((item) => {
    item.style.transition = 'opacity 5s';
    item.style.opacity = 1;
  });

});

const initializeThirdPartyLibrary = (el) => {
  console.log(el)
}
</script>

<template>
  <div>
    <h1> Template Refs</h1>
    <input :ref="(el) => {
      console.log(el);
      }"/>  

    <input ref="inputRef" />    <!-- Dùng ref attribute để lấy tham chiếu đến phần tử input -->
    <ul>

      <li
        v-for="(item, index) in list"
        :key="index"
        :ref="(el) => itemRefs[index] =el"
        style="opacity: 0;"
      >{{ item }}</li>

    </ul>
  </div>
</template>
